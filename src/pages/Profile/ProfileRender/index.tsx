import MagicButton from "../../../Components/MagicButton";
import { useAuth } from "../../../services/AuthProvider/UseAuth";
import { useNotifications } from "../../../Components/Notifications/useNotification";

const ProfileRender = () => {
  const { user, logout } = useAuth();
  const { addNotification } = useNotifications();

  const handleLogout = async () => {
    try {
      await logout();
      addNotification({
        type: "info", // Tipo
        title: "Bye bye", // Título
        description: "¡Hope see you next time!", // Descripción
      });
    } catch {
      addNotification({
        type: "error", // Tipo
        title: "Log out", // Título
        description: "An error has ocurred", // Descripción
      });
    }
  };

  return (
    <>
      <p className="font-semibold text-white text-3xl mb-5">
        “Improve my productivity and task management to found my wife”
      </p>
      <div className="flex flex-col ml-10 text-white font-bold">
        <p className="text-6xl">{user?.displayName}</p>
        <p className="text-3xl mt-4">@inmyrestless</p>
        <MagicButton onClick={() => console.log("xd")}>
          Edit Profile
        </MagicButton>
        <MagicButton onClick={handleLogout} type="error">
          Logout
        </MagicButton>
      </div>
    </>
  );
};

export default ProfileRender;
