 import React, { useState } from 'react'
 
 const App = () => {
    const [num,setNum] = useState(0);

    function IncreaseNum(){
        setNum(num+1);
    }
    function DecreaseNum(){
        setNum(num-1);
    }
 // const [user, setUser] = useState({name:"Aman",age : "21"});
    // const changeUser=()=>{
    //     const newUser = {...user};
    //     newUser.name = "Raman";
    //     setUser(newUser);

    // }
    // const [user, setUser] = useState({name:"Aman",age : "21"});
    // const changeUser=()=>{
    // setUser((prevuser)=>({...prevuser,name:"Gulab"}));

    // }


   return (
     <div>
       <div className="box" >{num}</div>
       <div className="buttons">
        <button onClick={IncreaseNum}>Increase</button>
       <button onClick={DecreaseNum}>Decrease</button>

       </div>
     </div>
   )
 }
 
 export default App
 