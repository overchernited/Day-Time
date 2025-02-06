import daytime from "../../assets/daytime.png";
import AnimatedText from "./animatedText";
import AuthButtons from "./authButtons";

const RootPage = () => {
  return (
    <>
      <AuthButtons />
      <div className="flex justify-between w-[80%] items-center top-[30%] absolute translate-x-[10%]">
        <img src={daytime} className="w-[40%]"></img>
        <AnimatedText />
      </div>
    </>
  );
};

export default RootPage;
