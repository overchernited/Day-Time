import { InputProvider } from "../../Components/Input/inputProvider";
import MagicButton from "../../Components/MagicButton";
import LoginForm from "./Loginform/loginform";
import { loginWithGoogle } from "../../services/Auth";
import { useModal } from "../../Components/Modal/useModal";
import ProvidersForm from "./Loginform/providersForm";

const Login = () => {
  const { openModal } = useModal();

  const handleProvider = () => {
    openModal(
      "Stop there!",
      <ProvidersForm />,
      "fa-solid fa-hand"
    );
  };

  const handleLoginWithGoogle = async () => {
    const result = await loginWithGoogle();
    if (result.success) {
      handleProvider();
    }
  };

  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <p className="text-xl  md:text-3xl text-white font-bold">
        Login to reach your objectives!
      </p>
      <div className="flex flex-row lg:w-full justify-between m-1">
        <MagicButton
          onClick={handleLoginWithGoogle}
          className="w-full rounded-lg"
        >
          <i className="fa-brands fa-google"></i>
        </MagicButton>
      </div>
      <p className="text-xl text-white font-light">or use your account</p>
      <InputProvider>
        <LoginForm></LoginForm>
      </InputProvider>
      <MagicButton
        onClick={() => console.log()}
        className="text-sm h-min p-0 rounded-lg"
        type="primary"
      >
        <p>Forgot your password ?</p>
      </MagicButton>
    </div>
  );
};

export default Login;
