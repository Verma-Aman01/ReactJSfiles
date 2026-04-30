import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
  return (
    <div className='parent'>
      <div className="top">
        <img className='logo'src={props.logo} alt="amazon logo" id="icon" />
        <div className="icon"><Bookmark strokeWidth={0.75} /> </div>
      </div>
      <div className="center">
        <p className='company'>{props.company} <span className='time'>5 days ago</span></p>
        <p className='post'>{props.post}</p>
        <div className="buttons"><button>{props.tag1}</button>
        <button>{props.tag2}</button></div>
      </div>
      <div className="bottom">
        <p>{props.pay}<br/>
        <span className='location'>{props.location}</span></p>
        <div><button>Apply now</button></div>
      </div>
    </div>
  )
}

export default Card
