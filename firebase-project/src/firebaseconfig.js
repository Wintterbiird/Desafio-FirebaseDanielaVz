// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe_XUzD-b8sj-TExXHSIDsd1oZLQkwPRE",
  authDomain: "autenticacion-desafio.firebaseapp.com",
  projectId: "autenticacion-desafio",
  storageBucket: "autenticacion-desafio.firebasestorage.app",
  messagingSenderId: "383721021164",
  appId: "1:383721021164:web:e3813935a6348b9d1c8fc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app