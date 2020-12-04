import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Spinner from './assets/images/Spinner.svg'
import {
  FirebaseAppProvider
} from 'reactfire'
import firebaseConfig from './firebase/firebase-config'

const style = {
  width: '50%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '150px',
  display: 'block'
}

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Suspense fallback={<img style={style} src={Spinner} />}>
        <App />
      </Suspense>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
