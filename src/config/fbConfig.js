import firebase from "firebase/compat"
import "firebase/firestore"
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCmzib0K4Pbu0VGDjfLBS5aGI2Pq-S6Eo4",
    authDomain: "pro-books-dadea.firebaseapp.com",
    projectId: "pro-books-dadea",
    storageBucket: "pro-books-dadea.appspot.com",
    messagingSenderId: "496148603624",
    appId: "1:496148603624:web:4889e0201ed86010169f5d"
}

firebase.initializeApp(config)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const firestore = firebase.firestore()


export {auth, provider, firestore}