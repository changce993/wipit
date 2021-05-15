import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MyContext from './context';

ReactDOM.render(
  <React.StrictMode>
    <MyContext>
      <App />
    </MyContext>
  </React.StrictMode>,
  document.getElementById('root')
);
