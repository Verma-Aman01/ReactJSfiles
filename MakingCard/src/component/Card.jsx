import React from 'react'

function Card(props) {
  return (
    <div className='card'>
    
    <img id='img' src="https://imgs.search.brave.com/rp_iSo9mLR2mmBXNVeC5xNVMLhIywwDQvSmBflFNLk0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTU1/MDM2ODI2L3Bob3Rv/LzNkLXJlbmRlcmlu/Zy1jb29sLWVtb2pp/LXdpdGgtc3VuZ2xh/c3MtaXNvbGF0ZWQt/b24td2hpdGUtYmFj/a2dyb3VuZC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9LV81/MW5ZWURRYnE2N25V/d2NzejZzejlOZ2NQ/dHFHQ0NmUU1Dc2hi/M2RTOD0" alt="" />
      <h1>{props.name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <button className='buttons'>View profile</button>
    </div>
  )
}

export default Card
