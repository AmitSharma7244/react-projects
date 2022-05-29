import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import data from "./data"

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {

  const [toursData, setTourData] = useState(data);
  const [loading, setLoading] = useState(true);

  const handleTourDelete = (id) => {
    let newTours = toursData.filter( tour => tour.id !== id );
    setTourData(newTours);
  }

  const fetchTours = async () => {
    try {
      setLoading(true);
      let response = await fetch(url);
      let tours = await response.json();
      setTourData(tours);
      setLoading(false);
    }
    catch(error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTours();
  }, []);

  if(loading) {
    return <Loading />
  }
  
  if(toursData.length === 0) {
    return(
      <main className='title'>
        <h2>No tours left</h2>
        <div className='underline'></div>
        <button className='btn' onClick= {() => fetchTours()}>Refresh</button>
      </main>
    );
  }
  else {
    return <main className='title'>
    <h2>Our Tours</h2>
    <div className='underline'></div>
    <Tours toursData = {toursData} handleTourDelete = {handleTourDelete} />
    </main>
  }
}

export default App
