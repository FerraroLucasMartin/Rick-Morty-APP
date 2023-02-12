import styled from "styled-components"
import { Link } from "react-router-dom"
import { agregarFav, eliminarFav } from "../Redux/actions"
import store from "../Redux/store"
import {connect}  from "react-redux"
import { useState } from "react"

//STYLED COMPONENTS

const CardDiv = styled.div`
display: flex;
flex-direction: column;
border-style: outset;
border-color: rgb(0,58,69);
border-width: 1.5px;
border-radius: 10px;
font-family: "Avenir Medium", sans-serif;
width:20%;
height: 20%;
background-color: rgb(243,203,48, 0.2);

&:hover{
width:21%;
height: 21%;
box-shadow:
   0 0 5px rgb(40,249,109),
   0 0 10px rgb(40,249,109); ;
}
`

const CardButton = styled.button`
align-self: flex-end;
height: fit-content;
width: fit-content;
background-color: rgb(186,217,242);
border: 1px;
border-radius: 50%;
margin-bottom: -20px;
margin-top: 5px;
margin-right: 5px;
z-index: 9;

&:hover{
  color: black;
  font-weight: 550;
   
}
`

const CardImg= styled.img`
border-radius: 10px;
margin-top: -2px;
`

const NameH2= styled.h2`
border-radius: 5px;
padding: 5px;
font-size: 17px;
bottom: 45px;
left: 7px;
background-color: rgb(50, 10, 10, 0.7);
color: whitesmoke;
`

const DetailDiv= styled.div`
display: flex;
justify-content: space-evenly;
font-size: 12px;
`

const FavButton= styled.button`
display: flex;

`
//COMPONENT

export default function Card(props) {
//   const [isFav, setIsFav]=useState({
//    isFav:false,
//   })

//   function handleFavorite(){
//    if()
//   }
   
   return (
      <CardDiv>
         {/* <FavButton></FavButton> */}

         <CardButton onClick={props.onClose}>X</CardButton>
         <CardImg  src={props.image} alt="" />

      <Link to= {`/detail/${props.id}`}> 
            <NameH2>{props.name}</NameH2>
         </Link>

         <DetailDiv>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </DetailDiv>
         
      </CardDiv>
   );
}

//REDUX FUNCTIONS

// function mapDispatchToProps(dispatch){
//    return{
//       agregarFav: ()=> store.dispatch(agregarFav()),
//       eliminarFav:()=> store.dispatch(eliminarFav()),
//    }
// }

// export default connect(mapDispatchToProps)(Card);
