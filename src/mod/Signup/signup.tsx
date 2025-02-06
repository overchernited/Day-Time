import { InputProvider } from "../../Components/Input/inputProvider";
import MagicButton from "../../Components/MagicButton";
import { useModal } from "../../Components/Modal/useModal";
import SignUpForm from "./Singupform";
import Login from "../Login";

const Signup = () => {
  const { openModal } = useModal();

  const handleAlreadyAnAccount = () => {
    openModal(
      "Login",
      "auto",
      "30%",
      <Login />,
      "fa-solid fa-right-to-bracket"
    );
  };

  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <p className="text-3xl text-white font-bold">
        Sign up to start your day!
      </p>

      <InputProvider>
        <SignUpForm />
      </InputProvider>
      <MagicButton
        onClick={() => handleAlreadyAnAccount()}
        className="text-sm h-min p-0 rounded-lg"
        type="primary"
      >
        <p>Already have an account ?</p>
      </MagicButton>
    </div>
  );
};

export default Signup;
