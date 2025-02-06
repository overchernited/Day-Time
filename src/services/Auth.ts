import * as firebase from "../firebase"


export const loginWithGoogle = async () => {

    try {
        const result = await firebase.signInWithPopup(firebase.auth, firebase.googleProvider);
        return { success: true, user: result.user };
        
    } catch (error: unknown) {
        console.error("Error en la autenticación GOOGLE", error);
        return { success: false };
    }
};