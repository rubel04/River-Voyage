import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,sendPasswordResetEmail } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
const AuthProvider = (props) => {
    const {children} = props || {};
    const [user,setUser] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email,password) =>{
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUser = (email,password) =>{
        setIsLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const loginUserWithGoogle = () =>{
        setIsLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

    const updateUserProfile = (updateData) => {
        setIsLoading(true);
        return updateProfile(auth.currentUser, {displayName: updateData.name, photoURL: updateData.photo})
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const logOutUser = () => {
        setIsLoading(true);
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setIsLoading(false);
        })

        return () =>{
            unSubscribe();
        }
    },[])

    const authData = {
        registerUser,
        loginUser,
        loginUserWithGoogle,
        updateUserProfile,
        logOutUser,
        user,
        setUser,
        isLoading,
        resetPassword
    }
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;