
import './App.css';
import Appmain from './Components/Appmain';
import { Provider } from 'react-redux';
import Store from './Utilis/Store';
import React from 'react';



function App() {
  return (
    <div>
      <Provider store={Store}>
    <div className="App">
    <Appmain />
    </div>
    </Provider> 

    </div>
  );
}


export default App;

