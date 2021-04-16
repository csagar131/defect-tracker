import React, {useContext , useState, useEffect } from 'react';
import '../firebase';
import firebase from 'firebase/app';
require('firebase/auth');
const AuthContext = React.createContext();


export default function useAuth(){
    return useContext(AuthContext)
}



export function AuthProvider({children}) {
    const [currentUser, setCurrentUser]  = useState();
    const [loading, setLoading] = useState(true);

    function signup(email,password){
        return firebase.auth().createUserWithEmailAndPassword(email,password)
    }

    function login(email,password){
        return firebase.auth().signInWithEmailAndPassword(email,password);
    }

    function logout(){
        return firebase.auth().signOut()
    }

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user =>{
            setCurrentUser(user);
            setLoading(false);
        })
        return unsubscribe;
    }, [])

    

    const value = {
        currentUser,
        signup,
        login,
        logout,
    }

    return (
        <AuthContext.Provider value ={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
