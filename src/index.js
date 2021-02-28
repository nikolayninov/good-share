import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FirebaseDatabaseProvider } from '@react-firebase/database'
import app from 'firebase'
import firebase from 'firebase/app'

ReactDOM.render(

  <FirebaseDatabaseProvider firebase={firebase} {...app}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FirebaseDatabaseProvider>,
  document.getElementById('root')
);