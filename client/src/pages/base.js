import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARbaI-5AR-qxugRXVJqkyVb5OKOBnxIVw",
  authDomain: "authentication-de1fc.firebaseapp.com",
  projectId: "authentication-de1fc",
  storageBucket: "authentication-de1fc.appspot.com",
  messagingSenderId: "319172494236",
  appId: "1:319172494236:web:b55cd8c20f433314b5be59",
  measurementId: "G-Q7HXZ12TVD"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
