import { useContext } from "react";
import AuthContext from "./AuthContext";

// Crea un hook que te permita acceder al contexto de autenticación
export const useAuth = () => {
  const context = useContext(AuthContext);

  // Si el contexto no está disponible, muestra un error
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }

  return context;
};
