import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import "./index.css";
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
// // This is the entry point of the online library application. It imports necessary modules and styles, sets up the Redux store, and renders the main App component wrapped in a Redux Provider.
// // The Redux Provider allows the entire application to access the Redux store, enabling state management across different components.