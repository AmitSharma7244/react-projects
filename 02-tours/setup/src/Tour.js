import React, { useState } from 'react';

const Tour = ({ tourDetails, handleTourDelete }) => {
  const {id, name, info, image, price} = tourDetails;

  const [readMore, setReadMore] = useState(false);

  return <article key = {id} className = "single-tour">
    <img src = {image} alt = {name} />
    <footer>
      <div className='tour-info'>
        <h4>{name}</h4>
        <h4 className='tour-price'>${price}</h4>
      </div>
      <p>
        { readMore ? info : info.substring(0, 200) + "..."}
        <button onClick={() => setReadMore(!readMore)}>
          { readMore ? "Show Less" : "Read more"}
        </button>
      </p>
      <button className='delete-btn' onClick={() => handleTourDelete(id)}>Not Interested</button>
    </footer>
  </article>
};

export default Tour;
