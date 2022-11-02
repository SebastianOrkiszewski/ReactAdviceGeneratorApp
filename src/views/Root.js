import React from 'react'
import { GlobalStyle } from "assets/styles/globalStyles";
import { theme } from "assets/styles/themes";
import { ThemeProvider } from "styled-components";
import { Wrapper } from './Root.styles';
import Advicecontainer from 'components/Advicecontainer';

const Root = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Advicecontainer />
      </Wrapper>
    </ThemeProvider>
    </>
  )
}

export default Root