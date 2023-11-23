import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from './redux/store';
import { Provider } from 'react-redux'; // Import Provider from 'react-redux'
import { Toaster} from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <Provider store={store}>
      <App />
      <Toaster/>
    </Provider>

  </BrowserRouter>
);
