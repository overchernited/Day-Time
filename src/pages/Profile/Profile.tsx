import ProfileRender from "./ProfileRender";
import ProfileImg from "./ProfileImg";


const Profile = () => {

  return (
    <div className="flex flex-row m-20">
      <ProfileImg />
      <div className="flex flex-col">
        <ProfileRender />
      </div>
    </div>
  );
};

export default Profile;
