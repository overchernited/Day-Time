import MagicButton from "../../../Components/MagicButton";
import { useModal } from "../../../Components/Modal/useModal";
import Login from "../../../mod/Login";
import Signup from "../../../mod/Signup/signup";

const AuthButtons = () => {
  const { openModal } = useModal();

  const handleOpenLogin = () => {
    openModal(
      "Login",
      "auto",
      "30%",
      <Login />,
      "fa-solid fa-right-to-bracket"
    );
  };

  const handleOpenSignup = () => {
    openModal(
      "Signup",
      "auto",
      "30%",
      <Signup />,
      "fa-solid fa-person-walking-arrow-right"
    );
  };

  return (
    <div className="absolute top-0 right-0 w-[25%] flex flex-row justify-center items-center m-5">
      <MagicButton className="w-full" onClick={() => handleOpenLogin()}>
        Login
        <i className="fa-solid fa-right-to-bracket m-2"></i>
      </MagicButton>
      <MagicButton
        className="w-full"
        type="styled"
        onClick={() => handleOpenSignup()}
      >
        Sign up
        <i className="fa-solid fa-person-walking-arrow-right m-2"></i>
      </MagicButton>
    </div>
  );
};

export default AuthButtons;
