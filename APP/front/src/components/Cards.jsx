import Card from './Card';
import styled from 'styled-components';


const CardsDivWrap= styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
flex-wrap: wrap;
align-content: space-around;
padding-top: 50px;
/* height: 100vh; */
width: 100%;
overflow: auto;
row-gap: 200px;
/* background-color: green; */
`

export default function Cards(props) {
   const { characters } = props;

   const charMap = characters.map(function(elemento){
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
