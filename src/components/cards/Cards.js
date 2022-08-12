import React from 'react';
import Card from '../card/Card';
import './cards.css';


function Cards({requests}) {

  return (
    <div className="cards-container">
    {requests?.map((el, index)=>{
         return (
             <Card name ={el}  key={index} />
         )
    })}  
</div>
  ) 
}

export default Cards