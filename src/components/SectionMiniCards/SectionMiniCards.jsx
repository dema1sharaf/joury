import NoteCard from "../MiniCard/noteCard";
import logo from "../../assets/logo.ico"
import "./SectionMiniCards.css"

const arrayofMiniCards = [ 
    {
   title :  "Delivery to 150 countries worldwide" , image : logo } ,
{title :  "Personally delivered and delivered quickly" , image : logo} ,
{
title :  "Sustainable premium gift packaging" , image : logo
},
{
title :  "7-day freshness guarantee" , image : logo
}]


const SectiionMiniCards = ( ) => {
    return (
        <div className="SectionMiniCards">
     {arrayofMiniCards.map((item , index) => (
        <NoteCard title={item.title} image={item.image} key={index}/>
      ))} 
      </div> 
    );


}

export default SectiionMiniCards;