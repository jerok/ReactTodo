import React, { createContext, useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { initialState, reducer } from './Reducer';
import styled from "styled-components";

import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Error from './components/Error';
import Api from './components/Api';

const ThemeOverlay = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.navColor};
  color: ${props => props.theme.textColor};
  z-index: 999;
`;

const GlobalStyles = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
    font-family: sans-serif;
  }
`;

export const AppContext = createContext();

function App(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentTheme } = state;

  return(
    <ThemeOverlay>
      <div className="todoapp stack-large">
        <ThemeProvider theme={currentTheme}>
          <AppContext.Provider value={{ ...state, dispatch }}>
            <GlobalStyles />
            <Navbar />
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/about' component={About} />
              <Route path='/api' component={Api} />
              <Route component={Error} />
            </Switch>
          </AppContext.Provider>
        </ThemeProvider>
      </div>
    </ThemeOverlay>
  );
};

export default App;