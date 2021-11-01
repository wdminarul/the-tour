import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeAthuntication =()=>{
    initializeApp(firebaseConfig);
}

export default initializeAthuntication;