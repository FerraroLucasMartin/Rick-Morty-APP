import SearchBar from "./SearchBar";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";


const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 15px;
  margin-bottom: 40px;
  background-color: rgb(243, 203, 48, 0.2);
  border-radius: 10px;
  border-color: black;
`;

const H3 = styled.h3`
  display: flex;
  justify-self: center;
  color: white;

  &:hover{
  font-weight: 400;
  text-shadow:
  0 0 5px rgb(0, 0, 0);
   }
`;

const Img = styled.img`
  display: flex;
  max-width: 20%;
  min-height: 20%;
  justify-self: start;
`;

const LinkDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  width:200px;
  justify-self: start;
`;

export default function Nav(props) {

  const location= useLocation();

  if (location.pathname === "/") return (null);
  else{
  return (
    <NavDiv>
      <Img src="https://image.tmdb.org/t/p/original/kCyZc7mvqHdeUGpguSGxsWPxqpI.png" />

      <LinkDiv>
        <NavLink 
        to="/home"
        style={{textDecoration: 'inherit'}}>
          <H3>Home</H3>
        </NavLink>

        <NavLink 
        to="/about"
        style={{textDecoration: 'inherit'}}>
          <H3>About</H3>
        </NavLink>

      </LinkDiv>

      <SearchBar onSearch={props.onSearch} />
    </NavDiv>
  );
  };
}
