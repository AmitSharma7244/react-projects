import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [persons, setPersons] = useState(data);

  return <main className='main'>
    <div className='container'> 
      <h3> {persons.length} birthdays today </h3>
      <List persons = {persons} />
      <button onClick={() => {setPersons([])}}>Clear All</button>
    </div>
  </main>
}

export default App;
