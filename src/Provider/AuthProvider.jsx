import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';

const auth = getAuth(app)
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] =useState(null)
    const[loading,setLoading] = useState(true)
     
 const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email,password)
  }
  useEffect(()=>{
    const unsubscribed = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        setLoading(false)
     })
      return ()=>{
         unsubscribed();
      }
  },[])

  const profileUpdate =(name, photo)=>{
    setLoading(true)
    return updateProfile(auth.currentUser,
        {
            displayName: name,
            photoURL: photo,
        })
  }

  const profileData =(email,photo,name) =>{
    setUser({...user, email: email,  displayName: name, photoURL: photo})
  }
    const authInfo={
            user,
            loading,
            createUser,
            profileUpdate,
            profileData
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;