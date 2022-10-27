import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from '../Themes/Themes';


const StyledApp = styled.div``;


const Layout = () => {
    
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light"? setTheme("dark") : setTheme("light");
  }

    return (
        <ThemeProvider theme = {theme === "light"? lightTheme : darkTheme}>
      <GlobalStyles/>
      <StyledApp>
        <div>
            <Header themeToggler={themeToggler}></Header>
            <Outlet></Outlet>
        </div>
        </StyledApp>
    </ThemeProvider>
    );
};

export default Layout;