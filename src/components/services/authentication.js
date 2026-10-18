import {app} from '../../../config/firebase'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,signOut } from 'firebase/auth'


const auth = getAuth(app)

//create user
export const registerUser = async (email, password) => {
    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredentials.user;
        alert("User created successfully....");
    } catch (error) {
        console.log(error)
    }
}

//login user
export const loginUser = async (email,password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user;
        return user.reloadUserInfo.email;
    } catch (error) {
        console.log(error);
    }
}

//logOut user
export const logoutUser = async () => {
    try {
        const isSignOut = await signOut(auth)
        alert("Logged out successfully");
    } catch (error) {
        console.log(error);
    }
}