import { auth } from "@/config/firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential } from "firebase/auth";

export const signin = (
    email:string,
    password:string,
    name:string,
    pays:string,
    departement:string
):Promise<UserCredential> => {
    return signInWithEmailAndPassword(auth,email,password)
}

