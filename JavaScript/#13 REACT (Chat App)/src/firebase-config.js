// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO1: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: '-',
    authDomain: 'chatapp-25bd0.firebaseapp.com',
    projectId: 'chatapp-25bd0',
    storageBucket: 'chatapp-25bd0.appspot.com',
    messagingSenderId: '150045435701',
    appId: '1:150045435701:web:03db50f479666987b18e7c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const dataBase = getFirestore(app);
