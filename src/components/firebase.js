import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyCwd47aT462khthaAjRRKyZP7INocQi4Sc",
  authDomain: "agricultura-activa.firebaseapp.com",
  databaseURL: "https://agricultura-activa.firebaseio.com",
  projectId: "agricultura-activa",
  storageBucket: "agricultura-activa.appspot.com",
  messagingSenderId: "56996829962",
  appId: "1:56996829962:web:d705a9a4bc3bd81dd138f3",
  measurementId: "G-4SFTT2BEBG",
};


   firebase.initializeApp(firebaseConfig)

export default firebase