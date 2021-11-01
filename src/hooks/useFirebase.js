import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut   } from "firebase/auth"
import { useEffect, useState } from "react";
import initializeAthuntication from "../Pages/Tuor/Login/Firebase/Firebase.init";
initializeAthuntication();
const useFirebase = () => {
    const [user,setUser] = useState({});
    const [error,setError] = useState("");
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
  const googleSignIn = ()=>{
    signInWithPopup(auth, provider)
    .then(result=>setUser(result.user))
    .catch(err=>{
        setError(err.message);
    })
  }
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
        } else {
            setError("")
        }
      });
  },[])
   const logOut =()=>{
    signOut(auth).then(() => {
      setUser({})
    }).catch((error) => {
      setError('')
    });
   }
  return{
googleSignIn,
user,
error,
logOut
  }
};

export default useFirebase;