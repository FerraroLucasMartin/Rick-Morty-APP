import { useState } from "react";
import styled from "styled-components";

const Button=  styled.button`
font-family: "Avenir Medium", sans-serif;
font-weight: bold;
background-color: rgb(0,179,203);
border-color: rgb(0,58,69);
border-width: 1px;
margin: 5px;
border-radius: 10px;
padding: 10px;
width: 100px;
&:hover{
color: whitesmoke;
box-shadow:
   0 0 5px rgb(40,249,109),
   0 0 10px rgb(40,249,109); ;
}
`
const Input = styled.input `
 width: 150px;
 padding: 10px;
 border-radius: 10px;
 border-style: hidden;
 `

export default function SearchBar(props) {

   const [character, setCharacter]= useState(0);

   const handleSearch= (e)=> {
      let {value} = e.target
      setCharacter(value)
   }

   return (
      <div>
      <Input type='search' onChange={handleSearch}/>
      <Button onClick={() => props.onSearch(character)}>Agregar</Button>
      </div>
   );
}
