// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAVMOJykxOKeIJsw1khjyP1p3FKxuK8E90",
    authDomain: "e-commerce-4ce55.firebaseapp.com",
    projectId: "e-commerce-4ce55",
    storageBucket: "e-commerce-4ce55.firebasestorage.app",
    messagingSenderId: "911872733842",
    appId: "1:911872733842:web:3988f046e5825dac0e6c4b",
    measurementId: "G-WYGPLCQ7EZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export {db, app, analytics}
