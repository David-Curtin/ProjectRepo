import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpjVf_7JxtmdH0WN6AIx0LDMwEbY72Ea0",
  authDomain: "foodappdatabase-617e6.firebaseapp.com",
  projectId: "foodappdatabase-617e6",
  storageBucket: "foodappdatabase-617e6.appspot.com",
  messagingSenderId: "1007456729886",
  appId: "1:1007456729886:web:40739b4234ea6e8832a70f"
};

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
  const database = firebase.firestore()

  export {database}