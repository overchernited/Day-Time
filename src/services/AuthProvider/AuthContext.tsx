import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { useEffect, createContext, ReactNode, useState } from "react";
import { useNotifications } from "../../Components/Notifications/useNotification";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>;
  userPending: boolean;
  setUserPending: () => void;
  ConfirmUser: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [userPending, setUserPendingState] = useState<boolean>(
    JSON.parse(localStorage.getItem("userPending") || "false")
  );

  const auth = getAuth();
  useEffect(() => {
    // Detecta el estado del usuario utilizando onAuthStateChanged
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // Si el usuario está logueado, lo guardamos como pendiente
        localStorage.setItem("userPending", "true");
        localStorage.setItem("savedUser", JSON.stringify(currentUser));
      } else {
        // Si no está logueado, aseguramos que el pendiente esté en false
        localStorage.removeItem("userPending");
      }

      setLoading(false);
    });

    return unsubscribe;
  }, [auth]);

  const logout = async () => {
    await auth.signOut();
    setUser(null);
    localStorage.removeItem("userPending");
    localStorage.removeItem("savedUser");
    setUserPendingState(false);
  };

  const setUserPending = () => {
    const isPending = JSON.parse(
      localStorage.getItem("userPending") || "false"
    );
    setUserPendingState(isPending);
  };

  const { addNotification } = useNotifications();
  const ConfirmUser = () => {
    const savedUser = localStorage.getItem("savedUser");
    if (savedUser) {
      const currentUser = JSON.parse(savedUser);
      setUser(currentUser);

      localStorage.removeItem("userPending");
      setUserPendingState(false);

      addNotification({
        type: "success",
        title: "Bienvenido",
        description: "¡Haz iniciado sesión!",
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        logout,
        userPending,
        setUserPending,
        ConfirmUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
