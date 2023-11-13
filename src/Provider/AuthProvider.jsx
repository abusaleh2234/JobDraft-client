import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import axios from "axios";



export const AuthContext = createContext()

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {

    const [user, setUser] = useState()
    const [Looding, setLooding] = useState(true)

    const creatUser = (email, password) => {
        setLooding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLooding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLooding(true)
        return signInWithPopup(auth, googleProvider)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            const useremail = currentUser?.email || user?.email;
            const loginUser = {email: useremail}

            setUser(currentUser)
            setLooding(false)
            // navigate(location?.state ? location?.state :  "/")

            if(currentUser){
                axios.post("http://localhost:5000/jwt",loginUser,{withCredentials: true})
                .then(res => console.log("User token",res.data))
            }
            else{
                axios.post("http://localhost:5000/logout",loginUser, {withCredentials: true})
                .then(res => console.log(res.data))
            }
          });
        return () => {
            return unsubscribe()
        }
    },[])
    const logOut = () => {
        setLooding(true)
        return signOut(auth)
    }


    const authInfo = {
        creatUser,
        loginUser,
        googleLogin,
        logOut,
        Looding,
        user,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;