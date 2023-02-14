import {Card} from './Card';
import styled from 'styled-components';
import { mapStateToProps, connect } from 'react-redux';
import { agregarFav, eliminarFav } from '../Redux/actions';
import { useEffect } from 'react';


const CardsDivWrap= styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
flex-wrap: wrap;
align-content: space-around;
/* background-color: green; */
`

export function Favorites(props) {
   const { myFavorites } = props;

   const charMap = myFavorites.map(function(elemento){
      return(
         <Card 
         key={elemento.id}
         onClose={() => props.onClose(elemento.id)}
         name={elemento.name}
         species={elemento.species}
         gender={elemento.gender}
         image={elemento.image}
         id={elemento.id}
         />
      )
   }) 

   return(

      <CardsDivWrap>{charMap}</CardsDivWrap>
   ) 
   
}

//REDUX FUNCTIONS

export function mapStatetoProps(state){
    return{
        myFavorites: state.myFavorites
    }

}

export default connect(mapStatetoProps, null)(Favorites)