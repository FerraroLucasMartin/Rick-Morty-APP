import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import About from "./components/About";
import Detail from "./components/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites"

import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Location, useLocation, useNavigate } from "react-router-dom";
import { Provider } from "react-redux";

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background: url(https://images3.alphacoders.com/942/942064.jpg);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  font-family: 'Courier New', Courier, monospace;
  }`;

const DivWrap = styled.div`
  padding: 15px;
  /* background-color: red; */
`;

const RickCardsDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

function App() {
  const [characters, setCharacters] = useState([]);
  const [Access, setAccess] = useState(false);

  let username = "ferrarolucasmartin@gmail.com";
  let password = "contra12";
  const navigate = useNavigate();

  function login(userData) {
    if (username === userData.username && password === userData.password) {
      setAccess(true);
      navigate("/home");
    }
  }

  function logout() {
    setAccess(false);
    navigate("/");
  }

  useEffect(() => {
    !Access && navigate("/");
  }, [Access]);

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  function onclose(id) {
    setCharacters(characters.filter((char) => char.id !== id));
  }

  const location = useLocation();

  return (
      <DivWrap>
        <GlobalStyle />
        {location.pathname !== "/" && (
          <Nav onSearch={onSearch} logout={logout} />
        )}
        <Routes>
          <Route exact path="/" element={<Form login={login} />} />
          <Route
            exact
            path="/home"
            element={<Cards characters={characters} onClose={onclose} />}
          />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/detail/:detailId" element={<Detail />} />
          <Route exact path="/favorites" element={<Favorites />} />

        
        </Routes>
      </DivWrap>
  );
}

export default App;
