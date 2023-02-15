import {Card} from './Card';
import styled from 'styled-components';
import { mapStateToProps, connect, useDispatch } from 'react-redux';
import { agregarFav, eliminarFav, orderCards, filterCards } from '../Redux/actions';
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

   const dispatch= useDispatch();

   return(
      <>
      <div>
         <select>
         <option value="Ascendente" onSelect={()=>console.log("click")}>Ascendente</option>
         <option value="Descendente" onSelect={(e)=> dispatch(orderCards(e.target.value))}>Descendente</option>
         </select>

         <select>
         <option value="Male"  onSelect={(e)=> dispatch(filterCards(e.target.value))}>Male</option>
         <option value="Female" onSelect={(e)=> dispatch(filterCards(e.target.value))}>Female</option>
         <option value="Genderless" onSelect={(e)=> dispatch(filterCards(e.target.value))}>Genderless</option>
         <option value="Unknown" onSelect={(e)=> dispatch(filterCards(e.target.value))}>Unknown</option>
         </select>
         
      </div>

      <CardsDivWrap>{charMap}</CardsDivWrap>
      </>
   ) 
   
}

//REDUX FUNCTIONS

export function mapStatetoProps(state){
    return{
        myFavorites: state.myFavorites,
        allCharacters: state.allCharacters
    }

}

export default connect(mapStatetoProps, null)(Favorites)