import { useInput } from "../../../Components/Input/useProvider";
import { useNotifications } from "../../../Components/Notifications/useNotification";
import Input from "../../../Components/Input/input";
import MagicButton from "../../../Components/MagicButton";

const LoginForm = () => {
  const { inputValues } = useInput();
  const { addNotification } = useNotifications();

  const validateInputs = () => {
    const isEmpty =
      !inputValues.Email ||
      inputValues.Email.trim() === "" ||
      !inputValues.Password ||
      inputValues.Password.trim() === "";

    return isEmpty;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evita el comportamiento predeterminado
    handleForm();
  };

  const handleForm = () => {
    const isValidInputs = validateInputs();

    if (!isValidInputs) {
      addNotification({
        type: "success",
        title: "Login Successful",
        description: "You have successfully logged in.",
      });
    } else {
      addNotification({
        type: "error",
        title: "Incomplete inputs",
        description: "Please fill in all the fields.",
      });
    }
    console.log(isValidInputs);
  };

  return (
    <>
      <form
        className="flex flex-col gap-3 items-center"
        onSubmit={handleSubmit}
      >
        <Input
          type="email"
          icon="fa-solid fa-envelope"
          placeholder="E-mail"
          name="Email"
          className="w-[70%]"
          inputAttributes={{ autoComplete: "email" }}
        />
        <Input
          type="password"
          icon="fa-solid fa-lock"
          placeholder="Password"
          name="Password"
          className="w-[70%]"
          inputAttributes={{ autoComplete: "current-password" }}
        />
        <MagicButton type="styled" className="lg:w-[30%] md:w-[15%]">
          Login
          <i className="fa-solid fa-arrow-right m-2"></i>
        </MagicButton>
      </form>
    </>
  );
};

export default LoginForm;
