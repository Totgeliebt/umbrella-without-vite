import GlobalStyles from "./styles/global";
import AppRouter from "../src/router/AppRouter";
import {useMatch, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import React from 'react';

const App = () => {
  const navigate = useNavigate()
  const match = useMatch('/');
  useEffect(() => {
    if(match)
    navigate('/landing')
  }, [])
  return (
    <>
      <GlobalStyles />
      <AppRouter />
    </>
  );
};

export default App;
