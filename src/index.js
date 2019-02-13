import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CombinedProvider } from './components/contexts/CombinedContext';


ReactDOM.render((
  <CombinedProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CombinedProvider>
), document.getElementById('root'));
