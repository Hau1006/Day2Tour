import React, { useState } from 'react';

const Tour = ({id, image, info,name,price,removeTour}) => {
  const [readMore, setreadMore] = useState(false);

  return (
  <article className="single-tour">
    <img alt={name} src={image}/>
  <footer>
    <div className="tour-info">
      <h4>{name} </h4>
      <h4 className="tour-price">$ {price}</h4>

    </div>
    <p>
   {readMore ? info : `${info.substring(0,200)}...`}
   <button onClick={()=> setreadMore(!readMore)}></button>
   {readMore ? "show less":"show more "}
    </p>
    <button className="delete-btn" onClick={()=>removeTour(id)}> not interested</button>
  </footer>
  
  </article>
  )
};

export default Tour;
