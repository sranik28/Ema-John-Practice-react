import { createContext, useContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../fireBase/fireBase.config";

const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const authInfo = {
        user,
        createUser,
        singInUser,
        logOut
    }

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
}

const useDataGlobally = () => {
    return useContext(AuthContext)
}

export { AuthProvider, useDataGlobally }