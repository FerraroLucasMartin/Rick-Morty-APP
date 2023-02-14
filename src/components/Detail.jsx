import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DetailDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;
  background-color: rgb(243, 203, 48, 0.2);
  border-radius: 10px;
  margin-top: 15px;
  margin-left: 100px;
  margin-right: 100px;
  padding-top: 15px;
`;

const ImgNameDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  border-radius: 50%;
  border-color: rgb(0, 58, 69);
  border-width: 3px;
  border-style: solid;
`;

const Button = styled.button`
  margin: 25px;
background-color: rgb(0,179,203);
border-color: rgb(0,58,69);
border-width: 1px;
border-radius: 10px;
padding: 10px;
width: 100px;
&:hover{
font-weight: bold;
box-shadow:
   0 0 5px rgb(40,249,109),
   0 0 10px rgb(40,249,109); ;
}
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Detail() {
  let { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <Wrap>
      <DetailDiv>
        <ImgNameDiv>
          <Img src={character.image} alt="" />
          <h1>{character.name}</h1>
        </ImgNameDiv>

        <div>
          <h2>Status: {character.status}</h2>
          <h2>Species: {character.species}</h2>
          <h2>Gender: {character.gender}</h2>
          <h2>Origin: {character.origin?.name}</h2>
        </div>
      </DetailDiv>

      <Link to="/home">
        <Button> {"<< Back"} </Button>
      </Link>

    </Wrap>
  );
}
