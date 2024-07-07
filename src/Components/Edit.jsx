import { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../utils/Context';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function Edit() {

    const [product,setproduct] = useState({
        title:'',
        image:'',
        category:'',
        price:'',
        description:''});

    const [products,setproducts] = useContext(ProductContext);
    
    const {id}=useParams();


    const navigate = useNavigate();
    const ChangeHandler =(e)=>{
        setproduct({...product,[e.target.name]:e.target.value})
        };  

    useEffect(()=>{
        setproduct(products.filter((p)=>
            p.id==id)[0]);
    },[id])

  const addProductHandler = (e)=>{
    e.preventDefault();

    if(
      product.title.trim().length <5 ||
      product.image.trim().length <5 ||
      product.category.trim().length <5 ||
      product.price.trim().length <1 ||
      product.description.trim().length <5 
    ){
      alert('Please fill all fields with minimum 5 characters');
      return;
    }

    const pi = products.findIndex((p)=> p.id == id);
    

    const copyData =[...products];
    copyData[pi]={...products[pi],...product};
    
    setproducts(copyData);
    localStorage.setItem('products', JSON.stringify(copyData));
    toast.success("Product Edited Successfully");
    navigate(-1);

   
  }
    
  return (
    <form 
    onSubmit={addProductHandler}
    className="flex flex-col items-center p-[5%] w-screen h-screen" >
        <h1 className='mb-5 w-1/2 text-3xl '>Edit Product</h1>
        <input
         type="url" 
         placeholder='image link'
         className='text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
         name='image'
        onChange={ChangeHandler}
         value={product && product.image}
         />
        <input
         type="text" 
         placeholder='title'
         className='text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
         name='title'
        onChange={ChangeHandler}
         value={product && product.title}
         />
         <div className='w-1/2 flex justify-between'>
         <input
         type="text" 
         placeholder='category'
         className='text-2xl bg-zinc-100 rounded p-3 w-[48%] mb-3'
         name='category'
        onChange={ChangeHandler}
         value={product && product.category}
         />
        <input
         type="number" 
         placeholder='price'
         className='text-2xl bg-zinc-100 rounded p-3 w-[48%] mb-3'
         name='price'
        onChange={ChangeHandler}
         value={product && product.price}
         />
         </div>
        
        <textarea 
        name='description'
        onChange={ChangeHandler}
        placeholder='Enter product description...'
        value={product && product.description}
        className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
        rows="10"
        
        ></textarea>
        <div className='w-1/2'>
        <button type='submit'  className='transition-all hover:bg-slate-100 border border-purple-300 bg-white rounded py-2 px-5 text-purple-400'>Save</button></div>
    </form>
  )
}

export default Edit