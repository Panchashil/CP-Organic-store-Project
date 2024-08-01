import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import router from './routing/routing';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={appStore}>
      <App />
      < RouterProvider router={router} ></RouterProvider >
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
