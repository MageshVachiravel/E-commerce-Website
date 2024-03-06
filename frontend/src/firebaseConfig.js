import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBiHeo7x-VWta664mMtkNSHidukfBc2btE",
  authDomain: "e-commerce-4243e.firebaseapp.com",
  projectId: "e-commerce-4243e",
  storageBucket: "e-commerce-4243e.appspot.com",
  messagingSenderId: "854670280941",
  appId: "1:854670280941:web:224e29ef5595e5babb64e4",
  measurementId: "G-QS9KJ3HT7F"
};


const app = initializeApp(firebaseConfig);

export const database = getAuth(app)