import React from 'react'

const App = () => {
  const detail = {
    name :"Aman",
    age :18,
    gender:"male"
  }
  localStorage.setItem('user' ,'Aman'); //save as key value pair
  localStorage.setItem('user2',detail) //here the object is saved as string as the values get saved as strings
  localStorage.setItem('user3',JSON.stringify(detail)) //now we have converted the object to string so we can it in string in console
  console.log(localStorage.getItem('user3')); //here the values are in string
  const det = JSON.parse(localStorage.getItem('user3')) //the details will be showed in object form
  localStorage.removeItem('user2') //to remove the entry from local storage

  
  return (
    <div>
      
    </div>
  )
}

export default App
