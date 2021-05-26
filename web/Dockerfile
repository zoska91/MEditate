FROM node:12.18.2-buster

WORKDIR /web

COPY . /web

RUN apt update && apt install -y yarn make && npm install && npm install -g serve env-cmd && npm run build

EXPOSE 5000

CMD bash -c "npm install && npm run build:prod && serve -l 3000 -s build"
