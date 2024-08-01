// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

// import ClassComp from './components/ClassComp';

// import ParentComp from './components/ParentComp';



import { Provider } from "react-redux";
import appStore from './utils/appStore';



function App() {
  return (
    <Provider store={appStore}>
    </Provider>
  );
}

export default App;
