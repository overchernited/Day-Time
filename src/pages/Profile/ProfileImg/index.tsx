import { useAuth } from "../../../services/AuthProvider/UseAuth";

const ProfileImg = () => {
  const { user } = useAuth();
  const photo = user?.photoURL ?? "/path/to/default-image.jpg"; // Imagen por defecto

  return (
    <img className="rounded-full h-[20%] w-[20%]" src={photo} alt="Profile" />
  );
};

export default ProfileImg;
