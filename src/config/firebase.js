import * as firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'
const firebaseConfig = {
   apiKey: "AIzaSyAU8hQxpX-2tZ99nqFeP5xjstSyHL0Oza8",
   authDomain: "react-auth-prac.firebaseapp.com",
   databaseURL: "https://react-auth-prac.firebaseio.com",
   projectId: "react-auth-prac",
   storageBucket: "react-auth-prac.appspot.com",
   messagingSenderId: "567074534151",
   appId: "1:567074534151:web:5584442935c188af65cba2",
   measurementId: "G-SW3JCNSTZS"
};

firebase.initializeApp(firebaseConfig)

export default firebase