import React, { useState } from 'react'

function Create() {
    const [title,settitle]=useState("");
    const [image,setimage]=useState("");
    const [category,setcategory]=useState("");
    const [price,setprice]=useState("");
    const [description,setdescription]=useState("");
  return (
    <form className="flex flex-col items-center p-[5%] w-screen h-screen" >
        <h1 className='mb-5 w-1/2 text-3xl '>Add New Product</h1>
        <input
         type="url" 
         placeholder='image link'
         className='text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
         onChange={(e)=>setimage(e.target.value)}
         value={image}
         />
        <input
         type="text" 
         placeholder='title'
         className='text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
         onChange={(e)=>settitle(e.target.value)}
         value={title}
         />
         <div className='w-1/2 flex justify-between'>
         <input
         type="text" 
         placeholder='category'
         className='text-2xl bg-zinc-100 rounded p-3 w-[48%] mb-3'
         onChange={(e)=>setcategory(e.target.value)}
         value={category}
         />
        <input
         type="number" 
         placeholder='price'
         className='text-2xl bg-zinc-100 rounded p-3 w-[48%] mb-3'
         onChange={(e)=>setprice(e.target.value)}
         value={price}
         />
         </div>
        
        <textarea 
        onChange={(e)=>setdescription(e.target.value)}
        placeholder='Enter product description...'
        value={description}
        className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
        rows="10"
        
        ></textarea>
        <div className='w-1/2'>
        <button onClick={addProductHandler} className='transition-all hover:bg-slate-100 border border-purple-300 bg-white rounded py-2 px-5 text-purple-400'>Add New Product</button></div>
    </form>
  )
}

export default Create