import firebaseInitializeApp from "../firebase/firebaseInisialize"
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

firebaseInitializeApp()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();



    const googleSingIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(results => {
                console.log(results.user)
                setUser(results.user)
            })
            .catch(err => {
                console.log(err)
            })
    }


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [])

    const googleSingInOut = () => {
        signOut(auth)
            .then(() => {
                setUser([])
            })

    }

    return {
        user,
        googleSingIn,
        googleSingInOut,
    }
}

export default useFirebase