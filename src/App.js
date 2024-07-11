import logo from './logo.svg';
import './App.css';
import Appmain from './Components/Appmain';
import { Provider } from 'react-redux';
import Store from './Utilis/Store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './Components/Body';
import Contact from './Components/Cart';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';


function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <Appmain />
    </div>
    </Provider>
  );
}


export default App;

