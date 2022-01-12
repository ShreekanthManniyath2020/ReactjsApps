import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBhkA1KfuF2kkg0XMHoQNSaoTvoaV_BWDA",
    authDomain: "demoapp-97799.firebaseapp.com",
    projectId: "demoapp-97799",
    storageBucket: "demoapp-97799.appspot.com",
    messagingSenderId: "469057426529",
    appId: "1:469057426529:web:43daa1c51add6fa6938620",
    measurementId: "G-MG0SLFCZNV"
  };

 const app = initializeApp(firebaseConfig);
 export default getFirestore();
