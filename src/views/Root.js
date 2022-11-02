import React from "react";
import { GlobalStyle } from "assets/styles/globalStyles";
import { theme } from "assets/styles/themes";
import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { Wrapper } from "./Root.styles";
import Advicecontainer from "components/Advicecontainer/Advicecontainer";

const Root = () => {
  const [quote, setQuote] = useState([]);

  const fetchAdvice = async () => {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      console.log(data);
      setQuote(data.slip);
    } catch (error) {
      console.log("error!!!");
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Advicecontainer quote={quote} fetchAdvice={fetchAdvice}/>
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

export default Root;
