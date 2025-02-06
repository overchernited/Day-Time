import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./firebase.ts";

import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./Components/Modal/modalProvider.tsx";
import { NotificationProvider } from "./Components/Notifications/notificationProvider.tsx";
import { AuthProvider } from "./services/AuthProvider/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NotificationProvider>
      <AuthProvider>
        <ModalProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ModalProvider>
      </AuthProvider>
    </NotificationProvider>
  </StrictMode>
);
