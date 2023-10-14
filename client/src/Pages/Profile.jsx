import { useEffect } from "react";
import Menu from "../Components/Menu.jsx";
// import { UseAuth } from "../Context/authContext";
import axios from "./../api/axios.js";

function Profile() {
  // const {user} = UseAuth();
  // console.log(user)
  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("/profile");
      console.log(res);
    };
    getUser();
  }, []);

  return (
    <div>
      <Menu />
      <div></div>
    </div>
  );
}

export default Profile;
