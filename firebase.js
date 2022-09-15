// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics,
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0GuK9bndZGMwaGa7Ks-QkPVVMKm-0Vxs",
  authDomain: "audio-recorder-ec57f.firebaseapp.com",
  projectId: "audio-recorder-ec57f",
  storageBucket: "audio-recorder-ec57f.appspot.com",
  messagingSenderId: "132093916930",
  appId: "1:132093916930:web:79de22bfba02589256741b",
  measurementId: "G-51WS6JTXX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app);