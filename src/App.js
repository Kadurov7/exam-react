import './App.css';
import Header from './components/header/Header';
import Calculator from './components/calculator/Calculator';
import React, { useContext } from 'react';
import {ThemeContext} from "./components/store/ContextApi"


function App() {
  
  const {theme} = useContext(ThemeContext)
  
  console.log(theme);

  return (
    <>
    <div className={`${theme}`}>
    <Header/>
    <Calculator/>
    </div>
    </>
   
  );
}

export default App;

 