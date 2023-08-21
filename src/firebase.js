
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
   apiKey: "AIzaSyDcOM0kZTAsvWMZzEFNI8R9mZ2_duh8iPk",
   authDomain: "learn-react-to-do-list.firebaseapp.com",
   projectId: "learn-react-to-do-list",
   storageBucket: "learn-react-to-do-list.appspot.com",
   messagingSenderId: "342246713706",
   appId: "1:342246713706:web:34a8dfef53477ea4d49d13",
   measurementId: "G-0P5VE7ERR2"
 };
 


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);