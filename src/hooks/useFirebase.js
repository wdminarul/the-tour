import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut   } from "firebase/auth"
import { useEffect, useState } from "react";
import initializeAthuntication from "../Pages/Tuor/Login/Firebase/Firebase.init";
initializeAthuntication();
const useFirebase = () => {
    const [user,setUser] = useState({});
    const [error,setError] = useState("");
    const [isLoading,setIsLoading] = useState(true)
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    // googleSign in methd 
  const googleSignIn = ()=>{
    setIsLoading(true)
    signInWithPopup(auth, provider)
    .then(result=>setUser(result.user))
    .finally(()=>setIsLoading(false))
  }

  // on State change 
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
        } else {
            setError("")
        }
        setIsLoading(false)
      });
  },[])

  // log Out Method 
   const logOut =()=>{
     setIsLoading(true)
    signOut(auth).then(() => {
      setUser({})
    }).catch((error) => {
      setError('')
    })
    .finally(()=>setIsLoading(false))
   }
  return{
googleSignIn,
user,
error,
isLoading,
logOut
  }
};

export default useFirebase;