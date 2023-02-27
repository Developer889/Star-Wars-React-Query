import React from 'react'
import { useQuery } from 'react-query';
import SingleStarShip from './SingleStarShip';
const fetchStarShip = async (key, page) => {
    const res = await fetch(`http://swapi.dev/api/starships/`);
    return res.json();
  }

const StarShip = () => {
    // without pagination
    const { data, status } = useQuery('starship', fetchStarShip);
  return (
    <div>
      <h2>Star Ship</h2>

      {status === 'loading' && (
        <div>Loading data</div>
      )}

      {status === 'error' && (
        <div>Error fetching data</div>
      )}

      {status === 'success' && (
        <div>
          { data.results.map(person => <SingleStarShip key={person.name} person={person} /> ) }
        </div>
      )} 
    </div>
  )
}

export default StarShip