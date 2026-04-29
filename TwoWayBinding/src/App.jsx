import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [task, settask] = useState([]);
  
  const onSubmitHandler=(e)=>{
    e.preventDefault();
    // append new task immutably
    settask(prev => [...prev, { title, detail }]);
    setTitle('');
    setDetail('');
  const removeNote=(idx)=>{
    const copyTask = [...task];
    copyTask.splice(idx,1);
    settask(copyTask);

  }
    
    
  }
  return (
    <div className='h-screen flex bg-black lg:flex' >
      <div className=' lg:w-1/2 h-screen p-10 '>
      <form
      onSubmit={(e)=>{
        onSubmitHandler(e)
      }}
       className='flex flex-col gap-2 '>
        <input 
        type="text" 
        placeholder='Enter heading'
        className='text-white border-2 font-medium rounded w-full px-1 py-1 '
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
         />
        <textarea 
        placeholder='Enter your notes here' 
        className='text-white border-2 font-medium rounded h-20 w-full mt-3 px-1 py-1 '
        value={detail}
        onChange={(e)=>{
          setDetail(e.target.value)
        }}
        />
        <button className='bg-amber-50 font-500 cursor-pointer text-black rounded-2xl w-1/2 active:scale-95'>
          Add Notes
        </button>
      </form>
    </div>
    <div className=' lg:w-1/2 lg:border-l-2 '>
      <div className='text-4xl text-white mt-2'>Recent notes</div>
      <div className='  flex flex-wrap  gap-3 overflow-auto mt-5' >
        {task.map(function (elems,index) {
          return   <div
  key={index}
  className="h-45 w-40 bg-white rounded-2xl flex flex-col shadow-md"
>
  
  {/* Title */}
  <div className="text-black font-bold py-2 px-2 leading-tight">
    {elems.title}
  </div>

  {/* Details */}
  <div className="text-gray-400 font-semibold mt-2 px-2 leading-tight">
    {elems.detail}
  </div>

  {/* Button at Bottom */}
  <div className="mt-auto p-2">
    <button  onClick={()=>{removeNote(index)}}  className="w-full cursor-pointer active:scale-95 transition bg-red-500 py-1 rounded-xl text-black font-bold">
      Delete
    </button>
  </div>

</div>
          
          
        })}
    </div>

    </div>

    </div>
  )
}

export default App;

