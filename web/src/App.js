import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';
import GlobalStyle from 'styles/GlobalStyle';
import { centerFlex } from 'styles/mixins';

const Wrapper = styled.div`
  background-color: #1d1c29;
  color: #ccc;
  height: 100vh;

  ${centerFlex}
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper className='App'>
        <header className='App-header'>
          <p>
            Edit
            <code> src/App.js </code>
            and save to reload.
          </p>
          MEditate
        </header>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
