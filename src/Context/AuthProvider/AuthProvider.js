import React, { createContext, useEffect, useState }  from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../../Firebase/Firebase.config';

export const AuthContext = createContext();
export const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    

    const createNewUserManually = (email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password);
    }
    const login = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logout = ()=>{
        return signOut(auth);
    }

    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser);
            setUser(currentUser)
            // setLoading(false)
        })
        return unsubscribe();
    },[loading])



    const authInfo ={
        user, login, logout, loading, setLoading, createNewUserManually
    }

    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;