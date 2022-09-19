// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7ee4HtQgCFcNoL05LnZDNr1TRmMqyzvo",
  authDomain: "sufago-develpopment.firebaseapp.com",
  databaseURL: "https://sufago-develpopment-default-rtdb.firebaseio.com",
  projectId: "sufago-develpopment",
  storageBucket: "sufago-develpopment.appspot.com",
  messagingSenderId: "670641733366",
  appId: "1:670641733366:web:01bf472fb2309cbc65f6d7",
  measurementId: "G-7KSTQ332W6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);