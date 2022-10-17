import React, { useContext } from "react";
import { AuthContext } from "../context/UserContext";
const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <p> This is home {user?.email}</p>
    </div>
  );
};

export default Home;
