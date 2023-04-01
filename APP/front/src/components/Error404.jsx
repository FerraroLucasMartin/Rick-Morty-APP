import styled from "styled-components"
import { Link } from "react-router-dom";

const Div= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  width: 40vw;
  margin-top: 10vh;
  padding-bottom: 15px;
  background-color: rgb(0, 0, 0, 0.4);
  border-radius: 10px;
  box-shadow: 0 0 5px rgb(40, 249, 109), 0 0 10px rgb(40, 249, 109);
  text-align: center;
  color: whitesmoke;
`

const Img= styled.img`
margin:0px;
padding: 0px;
`

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

export default  function Error(){
 return(
        <Div>
            {/* <Img src="https://pluspng.com/img-png/rick-and-morty-png-rick-and-morty-png-by-lalingla-950.png" alt="" /> */}
            <h1>
                Error 404 
                <br/>
                ¡Nothing Here!
            </h1>

            <Link to="/home">
        <Button> {"<< Back"} </Button>
      </Link>

        </Div>
    )
}