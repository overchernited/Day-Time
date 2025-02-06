import NavButton from "./NavButton";

const Navbar = () => {
  return (
    <div className="fixed navBar h-[5%] w-[30%] -translate-y-1.5 rounded-4xl flex justify-around p-1 bottom-0 left-1/2 transform -translate-x-1/2 m-2 z-[1000]">
      <NavButton
        icon="fa-solid fa-calendar-days"
        route="/schedule"
        className="rounded-lg"
      >
        Schedule
      </NavButton>
      <NavButton icon="fa-solid fa-home" className="rounded-lg" route="/home">
        Home
      </NavButton>
      <NavButton
        icon="fa-solid fa-briefcase"
        className="rounded-lg"
        route="/workspace"
      >
        Workspace
      </NavButton>
      <NavButton
        icon="fa-solid fa-user"
        className="rounded-full"
        route="/profile"
      >
        Profile
      </NavButton>
    </div>
  );
};

export default Navbar;
