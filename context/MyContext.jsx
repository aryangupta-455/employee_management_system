import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { app } from "../config/firebase";

export const myContext = createContext();

export default function MyContext({children}) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
      const unsub = onAuthStateChanged(getAuth(app), (u)=> {
        setUser(u);
        setLoading(false);
      });
      return unsub;
    }, []);

  return (
      <myContext.Provider value = {{user,setUser,loading}}>
        {children}
      </myContext.Provider>
  );
}
