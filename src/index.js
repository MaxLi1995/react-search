import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ResultProvider } from './context/ResultProvider';
import { Result } from 'postcss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ResultProvider>
    <Router>
      <App />
    </Router>
  </ResultProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
