import FastBar from "./FastBar/FastBar";
import Feed from "./Feed/Feed";

const Home = () => {
  return (
    <>
      <FastBar />
      <p className="ml-24 mt-12 text-white font-extrabold text-3xl">
        Your Daily Feed
      </p>
      <Feed />
    </>
  );
};

export default Home;
