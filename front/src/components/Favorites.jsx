import {Card} from './Card';
import styled from 'styled-components';
import { connect, useDispatch } from 'react-redux';
import {orderCards, filterCards } from '../Redux/actions';




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

   function handleReset(e) {
      dispatch({ type: "RESET" });
    }

   function handleDispatch(e){
      const {name, value} = e.target;

      if(name === "orden") {
         return (
            dispatch(orderCards(value)),
            console.log(myFavorites)
         )
         
      }

      if(name === "filtro"){
         return dispatch(filterCards(value))
      }

   }

   return(
      <>
      <div>
         <select name= "orden" onClick={handleDispatch}>
         <option value="Ascendente" >Ascendente</option>
         <option value="Descendente"  >Descendente</option>
         </select>

         <select name= "filtro" onClick={handleDispatch}>
         <option value="Male"  >Male</option>
         <option value="Female"  >Female</option>
         <option value="Genderless" >Genderless</option>
         <option value="Unknown"  >Unknown</option>
         </select>

         <button value="reset" onClick={handleReset}>
        Reset
      </button>
         
      </div>

      <CardsDivWrap>{charMap}</CardsDivWrap>
      </>
   ) 
   
}

//REDUX FUNCTIONS

export function mapStateToProps(state){
   return{
      myFavorites: state.myFavorites,
      allCharacters: state.allCharacters
   }

}

export default connect(mapStateToProps, null)(Favorites)