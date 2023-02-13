import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Validation from "./Validation";

const Button = styled.button`
  font-family: "Avenir Medium", sans-serif;
  font-weight: bold;
  background-color: rgb(0, 179, 203);
  border-color: rgb(0, 58, 69);
  border-width: 1px;
  margin: 5px;
  border-radius: 10px;
  padding: 10px;
  width: 100px;
  &:hover {
    color: whitesmoke;
    box-shadow: 0 0 5px rgb(40, 249, 109), 0 0 10px rgb(40, 249, 109);
  }
`;



const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  width: 20vw;
  margin-top: 10vh;
  padding-bottom: 15px;
  background-color: rgb(243, 203, 48, 0.2);
  border-radius: 10px;
  box-shadow: 0 0 5px rgb(40, 249, 109), 0 0 10px rgb(40, 249, 109);
`;

const Img = styled.img`
  justify-self: center;
  width: 170%;
  height: 30%;
`;

export default function Form(props) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const [click, setclick] = useState(false);

  function handlesubmit(e) {
    // e.preventDefault()
    setclick(true)
    props.login(userData);
  }

  const handleInputChanges = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    setErrors(Validation(userData));
  };

  return (
    <Wrap>
      <Img src="https://image.tmdb.org/t/p/original/kCyZc7mvqHdeUGpguSGxsWPxqpI.png" />

      <label htmlFor="Username">Username:</label>
      <input
        name="username"
        type="text"
        value={userData.username}
        onChange={handleInputChanges}
      />
      {errors.username && click === true && <h5>{errors.username}</h5>}

      <br />

      <label htmlFor="Password">Password:</label>
      <input
        name="password"
        type="password"
        value={userData.password}
        onChange={handleInputChanges}
      />
      {errors.password && click === true && <h5>{errors.password}</h5>}
      <br />

      <Button onClick={() => handlesubmit()}>LOGIN</Button>
    </Wrap>
  );
}
