import React from "react";
import Input from "../../../Components/Input/input";
import { InputProvider } from "../../../Components/Input/inputProvider";
import MagicButton from "../../../Components/MagicButton";
import { useAuth } from "../../../services/AuthProvider/UseAuth";
import { useModal } from "../../../Components/Modal/useModal";
import { useInput } from "../../../Components/Input/useProvider";
import { useNotifications } from "../../../Components/Notifications/useNotification";

const ProvidersForm = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <InputProvider>
        <p className="font-bold text-2xl m-5 text-[#3a89b6] w-full">
          Make it yours! Choose your unique username!
        </p>
        <UsernameField />
      </InputProvider>
    </div>
  );
};

const UsernameField = () => {
  const { ConfirmUser } = useAuth();
  const { closeModal } = useModal();
  const { inputValues } = useInput();
  const { addNotification } = useNotifications();

  const handleValidate = () => {
    // Verifica si 'username' está vacío o contiene solo espacios
    const Status = !inputValues.username || inputValues.username.trim() === "";

    return Status;
  };

  const handleButton = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const status = handleValidate();

    console.log(status);

    if (status) {
      addNotification({
        type: "error", // Tipo
        title: "Incomplete inputs", // Título
        description: "Please fill in all the fields.", // Descripción
      });
    } else {
      ConfirmUser();
      closeModal();
    }
  };

  return (
    <>
      <form onSubmit={handleButton} className="flex items-center flex-col">
        <Input
          placeholder="Username"
          icon="fa-solid fa-at"
          type="text"
          name="username"
        ></Input>
        <MagicButton className="p-2" type="styled">
          Im ready
          <i className="fa-solid fa-check ml-2"></i>
        </MagicButton>
      </form>
    </>
  );
};

export default ProvidersForm;
