import React, { useContext } from 'react'
import { Link , useParams} from 'react-router-dom'
import { useState , useEffect } from 'react';
import axios from '../utils/Axios';
import Loading from './Loading';
import { ProductContext } from '../utils/Context';
import { useNavigate } from 'react-router-dom';


function Details() {
  const [products , setproducts]=useContext(ProductContext);
  const [product , setproduct]=useState(null);
  const {id}=useParams();
  const navigate = useNavigate();

  

  // const getsingleproduct = async ()=>{
  //     try{
  //         const {data} = await axios.get(`/products/${id}`);
  //         setproducts(data);
          
  //     }catch(error){
  //         console.log(error);
  //     }
  // }

  useEffect(()=>{
    if(!product){
      // getsingleproduct()
    setproduct(products.filter((p)=>
    p.id==id)[0])
  
  }},[]);
 

  const ProductDeleteHandler =(id)=>{
    const FilteredProducts = products.filter((p)=>p.id !== id);
    setproducts(FilteredProducts);
    localStorage.setItem('products', JSON.stringify(FilteredProducts));
    navigate('/');
  }

  return product ? (
    <div className='w-[70%] h-full flex justify-between items-center m-auto p-[10%]'>
      <img className=' w-[45%] object-contain rounded-2xl' src={product.image} alt="" />

      <div className='mt-5 content w-[50%]'>
        <h1 className='text-3xl'>{product.title}</h1>
        <h3 className='text-zinc-400 my-4'>{product.category}</h3>
        <h2 className='text-red-300 mb-2'>$ {product.price}</h2>
        <p className='mb-[5%]'>{product.description}</p>
        <Link to={`/edit/${product.id}`} className='transition-all hover:bg-slate-100 border border-slate-300 bg-white rounded py-2 px-5 text-slate-500 '>
        Edit</Link>
        <button onClick={()=>ProductDeleteHandler(product.id)} className='ml-3 transition-all hover:bg-red-100 hover:border-red-300 border border-slate-300 bg-white rounded py-2 px-4 text-slate-500 '>
        Delete</button>
      </div>
    </div>
  ):(
    <Loading />
  )
}

export default Details