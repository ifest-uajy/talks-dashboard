import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBA0bVD9m0rHacNySDFySyTHeSGCuWM5tg',
  authDomain: 'ifest-uajy.firebaseapp.com',
  projectId: 'ifest-uajy',
  storageBucket: 'ifest-uajy.appspot.com',
  messagingSenderId: '375400408410',
  appId: '1:375400408410:web:8845de3487e8ee59c37f63',
  measurementId: 'G-5V7VMT434J'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const usersCollection = db.collection('users')

export {
  auth,
  db,
  usersCollection
}
