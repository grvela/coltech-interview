const firebase = require('firebase/app');
require('firebase/database'); 

const firebaseConfig = {
    apiKey: "AIzaSyCXV6TQb-fH4AuqCIS93pGmWt2Gg0A2QIg",
    authDomain: "coltech-interview.firebaseapp.com",
    databaseURL: "https://coltech-interview.firebaseio.com",
    projectId: "coltech-interview",
    storageBucket: "coltech-interview.appspot.com",
    messagingSenderId: "1063633630430",
    appId: "1:1063633630430:web:2bdc64cb035c6ca008be4f"
};

firebase.initializeApp(firebaseConfig);

module.exports = firebase.database();