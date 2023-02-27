import React from 'react'

const SingleStarShip = ({ person }) => {
  return (
    <div className="card">
      <h3>{ person.name }</h3>
      <p>Length - { person.length }</p>
      <p>MGLT - { person.MGLT }</p>
    </div>
  )
}

export default SingleStarShip