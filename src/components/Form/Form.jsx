import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Validation from "./validation";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 20vw;
  margin-top: 22vh;
  padding-bottom: 15px;
  background-color: rgb(243, 203, 48, 0.2);
  border-radius: 10px;
  box-shadow: 0 0 5px rgb(40, 249, 109), 0 0 10px rgb(40, 249, 109);
`;

const Img = styled.img`
  justify-self: center;
  width: 170%;
  height: 50%;
`;

export default function Form() {
  // const [userData, setUserData] = useState({
  //   username: "",
  //   password: "",
  // });

  // const [errors, setErrors] = useState({
  //   username: "",
  //   password: "",
  // });

  // const handleInputChanges = (e) => {
  //   setUserData({
  //     ...userData,
  //     [e.target.name]: e.target.value,
  //   }),
  //     setErrors(
  //       Validation({
  //         ...userData,
  //         username: e.target.value,
  //       })
  //     );
  // };

  return (
    <Wrap>
      <Img src="https://image.tmdb.org/t/p/original/kCyZc7mvqHdeUGpguSGxsWPxqpI.png" />

      <label htmlFor="Username">Username:</label>
      <input
        name="Username"
        type="text"
        value={userData.username}
        onChange={handleInputChanges}
      />

      <br />

      <label htmlFor="Password">Password:</label>
      <input
        name="Password"
        type="text"
        value={userData.password}
        onChange={handleInputChanges}
      />

      <br />

      <button>LOGIN</button>
    </Wrap>
  );
}
