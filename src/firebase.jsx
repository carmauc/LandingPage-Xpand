// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCSGi-OjiQus-j0vY5gsfsXbcur9BLmxWw',
	authDomain: 'xpandgroup-c76ab.firebaseapp.com',
	projectId: 'xpandgroup-c76ab',
	storageBucket: 'xpandgroup-c76ab.appspot.com',
	messagingSenderId: '747233289800',
	appId: '1:747233289800:web:695fdcd9a72f8733815a7d',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
