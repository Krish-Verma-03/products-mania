import React, { useContext } from 'react'
import { ProductContext } from '../utils/Context'
import { Link } from 'react-router-dom';

function Nav() {
  const [products]= useContext(ProductContext);

  let distinct_category =
  products && products.reduce((acc, cv) => [...acc,cv.category],[]);
  distinct_category = [...new Set(distinct_category)];

  const color = ()=>{
    return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.4)`
  };

  return (
    <nav className="w-[15%] h-full flex flex-col items-center pt-5 bg-slate-100  ">
    <Link 
      className="transition-all hover:bg-slate-100 border border-purple-300 bg-white rounded py-2 px-5 text-purple-400 "
      to={`/create`}
    >
      Add New Product
    </Link>
    <hr className=" my-3 w-[80%]" />
    <h1 className="text-2xl text-slate-600 mb-3 w-[80%]">Categories</h1>
    <div className="w-[80%]">
    {
      distinct_category.map((c,i)=>(
        <Link
        key={i} 
        to={`/?category=${c}`}
        className='flex items-center mb-3'>
          <span 
          style={{ backgroundColor:color()}}
          className="rounded-full w-[15px] h-[15px] mr-2 "></span>{" "}
          {c}
        </Link>
      ))
    }
    </div>
  </nav>
  )
}

export default Nav