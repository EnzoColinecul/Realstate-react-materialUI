import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDdCWdgbLekuAZCAdFpQ8nXMM4Ct1XD778",
    authDomain: "login-inmobilar.firebaseapp.com",
    databaseURL: "https://login-inmobilar.firebaseio.com",
    projectId: "login-inmobilar",
    storageBucket: "login-inmobilar.appspot.com",
    messagingSenderId: "818372140303",
    appId: "1:818372140303:web:bb810aa07dba306cd0727a"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;