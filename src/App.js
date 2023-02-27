import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Planets from './components/Planets';
import People from './components/People';
import { ReactQueryDevtools } from 'react-query-devtools';
import StarShip from './components/StarShip';


function App() {
  let [page, setPage] = useState('starship');

  return (
    <>
      <div className="App">
      <h1>Star Wars Info</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {/* { page === 'planets' ? <Planets /> : <People /> } */}
          { page === 'starship' ? <StarShip /> : <Planets /> }
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
