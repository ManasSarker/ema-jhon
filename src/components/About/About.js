import React, { useContext } from "react";
import { AuthContext } from "../../components/Context/UserContext";

const About = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>This is about page</h1>
      <p>{user?.email}</p>
    </div>
  );
};

export default About;
