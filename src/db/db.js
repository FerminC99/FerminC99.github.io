
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyASUFHkwltLiHg27wjwS0eJdvKiwHmh88g",
  authDomain: "ecommerce-reactjs-b34ea.firebaseapp.com",
  projectId: "ecommerce-reactjs-b34ea",
  storageBucket: "ecommerce-reactjs-b34ea.appspot.com",
  messagingSenderId: "130931599864",
  appId: "1:130931599864:web:590583d506aed0ac310e0d"
};


initializeApp(firebaseConfig);

const db = getFirestore()

export default db