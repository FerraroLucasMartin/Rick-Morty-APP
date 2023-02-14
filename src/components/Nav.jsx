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
  font-family: 'Courier New', Courier, monospace;
`;

const H3 = styled.h3`
  display: flex;
  justify-self: center;
  color: #000000;

  &:hover {
    cursor: pointer;
    /* font-weight: 400; */
    color: whitesmoke;
    /* text-shadow: 0 0 5px rgb(0, 0, 0); */
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
  width: 200px;
  justify-self: start;
`;

const Button = styled.button`
 font-family: 'Courier New', Courier, monospace;
  background-color: transparent;
  font-weight: bold;
  /* border-color: rgb(0,58,69); */
  border-width: 0px;
  margin: 5px;
  border-radius: 10px;
  padding: 10px;
  width: 100px;
  &:hover {
    color: whitesmoke;
    /* shadow: 0 0 5px rgb(40, 249, 109), 0 0 10px rgb(40, 249, 109); */
  }
`;

const Div = styled.div`
display: flex;
  justify-content: space-evenly;
`

export default function Nav(props) {
  const location = useLocation();

  if (location.pathname === "/") return null;
  else {
    return (
      <NavDiv>
        <Img src="https://image.tmdb.org/t/p/original/kCyZc7mvqHdeUGpguSGxsWPxqpI.png" />

        <LinkDiv>
          <NavLink to="/home" style={{ textDecoration: "inherit" }}>
            <H3>Home</H3>
          </NavLink>

          <NavLink to="/about" style={{ textDecoration: "inherit" }}>
            <H3>About</H3>
          </NavLink>

          <NavLink to="/favorites" style={{ textDecoration: "inherit" }}>
            <H3>Favs</H3>
          </NavLink> 
        </LinkDiv>

        <Div>
        <SearchBar onSearch={props.onSearch} />
        <Button onClick={props.logout}>Log out</Button>
        </Div>

      </NavDiv>
    );
  }
}
