import React from 'react';
import Tour from './Tour';
const Tours = ({ toursData, handleTourDelete }) => {
  return(
    <section>
      { toursData.map( tour => {
        return(
          <Tour tourDetails = {tour} handleTourDelete = {handleTourDelete}/>
        );
      })}
    </section>
  );
};

export default Tours;
