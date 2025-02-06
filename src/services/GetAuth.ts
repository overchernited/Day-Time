import * as firebase from "../firebase";

// Función para verificar si el usuario está autenticado
export const checkUserAuth = () => {
    const auth = firebase.getAuth();
    firebase.onAuthStateChanged(auth, (user) => {
        if (user) {
            return true
        } else {
            return false
        }
    });
};