import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import About from "./components/About";
import Detail from "./components/Detail";

import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  padding: 0;
  background: url(https://images3.alphacoders.com/942/942064.jpg);
  background-position: center center center;
  background-size: cover;
  background-repeat: no-repeat;
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
  const [characters, setCharacters]= useState([]);

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

 function onclose(id){
  setCharacters(characters.filter(char => char.id !== id))
 }

  return (
    <DivWrap>
      <GlobalStyle />
      <Nav onSearch={onSearch}/>
      <Routes>
        <Route path="/home" element={<Cards characters={characters} onClose={onclose}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </DivWrap>
  );
}

export default App;
