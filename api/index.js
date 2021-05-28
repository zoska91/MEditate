const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
const pool = new Pool();


const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = 8081;
let retries = 5;

// create db tables

const dbConnect = () => {
    pool.connect((err, client, release) => {
        if (err) {
            retries -= 1;
            if(retries) {
                setTimeout(dbConnect, 3000);
            }
        } else {
            client.query('CREATE TABLE IF NOT EXISTS users (ID SERIAL PRIMARY KEY, username varchar(60), email varchar(60))').catch((err) => {
                console.log('failed to create user table');
            })
            release()
            retries = 0;
        }
        });
}

dbConnect();


// start server
app.listen(port, () => {
    console.log('Server started on port ' +port);
});