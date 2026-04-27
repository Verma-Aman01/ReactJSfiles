import React from 'react'
const Click =()=>{
  console.log('helloooo there!');
}

const Change=(val)=>{
  console.log(val);
}

const App = () => {
  return (
    <div>
      <input onChange={function(elem){Change(elem.target.value)}} type="text" placeholder='Enter your name' />
      <button onClick={Click}>Click here</button>

    </div>
  )
}

export default App
