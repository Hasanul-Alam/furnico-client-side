import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";

// export interface AuthProvider extends import("react").PropsWithChildren{}
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUserWithEmailPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const loginWithEmailPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = () => {
    setLoading(true);
    return signOut(auth)
  }

  useEffect(()=> {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      // console.log('current user: ', currentUser)
      setLoading(false);
    });
    return () => {
      return unSubscribe();
    }
  },[])

  const authInfo = {
    user,
    loading,
    setUser,
    setLoading,
    createUserWithEmailPassword,
    loginWithEmailPassword,
    logout
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;