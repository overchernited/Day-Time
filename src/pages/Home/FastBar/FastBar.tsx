import Card from "../../../Components/Card";

const FastBar = () => {
  return (
    <>
      <Card
        width="91%"
        height="30%"
        imgSrc="https://images.pexels.com/photos/1200240/pexels-photo-1200240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="m-auto"
      >
        Workspace
      </Card>
      <div className="flex h-[30%] w-full mt-4 flex-row items-center justify-center">
        <Card
          width="45%"
          height="100%"
          imgSrc="https://images.pexels.com/photos/1200240/pexels-photo-1200240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        >
          Workspace
        </Card>
        <Card
          width="45%"
          height="100%"
          imgSrc="https://images.pexels.com/photos/1200240/pexels-photo-1200240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        >
          Workspace
        </Card>
      </div>
    </>
  );
};

export default FastBar;
