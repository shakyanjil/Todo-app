// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/8.3.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="/__/firebase/8.3.1/firebase-analytics.js"></script>

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyBV2njUzyaA-7aBWrzARk_pUdB-7t1oyRo",
    authDomain: "todo-app-cp-baf0a.firebaseapp.com",
    projectId: "todo-app-cp-baf0a",
    storageBucket: "todo-app-cp-baf0a.appspot.com",
    messagingSenderId: "981399612270",
    appId: "1:981399612270:web:febf128c26bd627cd52f7f",
    measurementId: "G-QQQB0GWEFC"
});

const db = firebaseApp.firestore();


export default db;
