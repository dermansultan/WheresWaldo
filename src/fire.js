import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCj03q7kbuwQWzIigS2bNS882ZnQ5bR2Ac",
    authDomain: "waldo-e1483.firebaseapp.com",
    databaseURL: "https://waldo-e1483.firebaseio.com",
    projectId: "waldo-e1483",
    storageBucket: "waldo-e1483.appspot.com",
    messagingSenderId: "548865994503",
    appId: "1:548865994503:web:b73b49a813e1239d129fa2"
  };
  
  
  
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;