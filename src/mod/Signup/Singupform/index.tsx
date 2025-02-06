import { useInput } from "../../../Components/Input/useProvider"; // Para obtener los valores de los inputs
import { useNotifications } from "../../../Components/Notifications/useNotification"; // Para manejar las notificaciones
import Input from "../../../Components/Input/input";
import MagicButton from "../../../Components/MagicButton"; // El botón de login

const SignUpForm = () => {
  const { inputValues } = useInput(); // Obtener los valores de los inputs y el setter
  const { addNotification } = useNotifications(); // Método para agregar notificaciones

  // Función para manejar el cambio de los inputs

  // Función de validación
  const validateInputs = () => {
    // Comprobar si los campos están vacíos o si las contraseñas no coinciden
    const isEmpty =
      !inputValues.Name?.trim() ||
      !inputValues.Email?.trim() ||
      !inputValues.Password?.trim() ||
      !inputValues.userid?.trim();

    if (isEmpty) {
      addNotification({
        type: "error",
        title: "Incomplete inputs",
        description: "Please fill in all the fields.",
      });
      return false;
    }

    return true; // Los inputs están completos y las contraseñas coinciden
  };

  // Manejar el login (o acción del formulario)
  const handleForm = () => {
    if (validateInputs()) {
      addNotification({
        type: "success",
        title: "Login Successful",
        description: "You have successfully logged in.",
      });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evita el comportamiento predeterminado
    handleForm();
  };

  return (
    <>
      <form
        className="flex flex-col gap-3 m-5 items-center"
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          icon="fa-solid fa-user"
          placeholder="Name"
          name="Name"
          className="m-0"
          allowSpaces={true}
        />
        <Input
          type="email"
          icon="fa-solid fa-envelope"
          placeholder="E-mail"
          name="Email"
          allowSpaces={false}
        />
        <Input
          type="text"
          icon="fa-solid fa-at"
          placeholder="Username"
          name="userid"
          inputAttributes={{ autoComplete: "new-password" }}
        />
        <Input
          type="password"
          icon="fa-solid fa-lock"
          placeholder="Password"
          name="Password"
          inputAttributes={{ autoComplete: "new-password" }}
        />

        <MagicButton type="styled" className="w-[30%]">
          Login
          <i className="fa-solid fa-arrow-right m-2"></i>
        </MagicButton>
      </form>
    </>
  );
};

export default SignUpForm;
