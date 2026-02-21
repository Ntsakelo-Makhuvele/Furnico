import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import Rating from '@mui/material/Rating';
import Navbar from '../components/Navbar';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';



const Home = () => {
   const [cartCount, setCartCount] = useState(0)
       useEffect(() => {
           if(localStorage.getItem('myCart')){
               let count = 0;
                 JSON.parse(localStorage.getItem('myCart')).forEach(item => {
                 count += item.qty;
              })
              setCartCount(count);
           }
   
       })
 
    return (
        <div className="bg-white">
        <Navbar count={cartCount}/>          
      <div className="h-100 rounded-md mt-25 bg-indigo-100 content-carousel">
         
      </div>
      <div className="mt-10">
         <div className="">
         <p className="text-left text-2xl font-semibold">Popular Products</p>
         </div>
         <div className="grid lg:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 xl:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-6 mt-5">
          {products && products.map((product) => (

            <div key={product.name}>
                <Link to={`/product/${product.id}`}>
                <div className="h-60 bg-zinc-100 rounded-md">
                  <img src={`${product.image}`} alt={product.name} className='w-full h-full'/>
                </div>
                <div className="mt-3">
                  <p className="text-md text-left font-semibold">{product.name}</p>
                  <p className="text-left text-gray-600 line-clamp-1">{product.description}</p>
                  <div className='flex'>
                  <p className="text-sm mr-1">4.5</p>  
                  <p> <Rating defaultValue={4.5} precision={0.5} size="small" readOnly/></p>
                  </div>
                  
                  <div>
                  <p className="text-lg font-semibold text-left">R{product.price}</p>
                  </div>
                </div>
                </Link>
                  <div className="mt-5">
                    <button className='p-1 bg-black text-white rounded-full w-full block m-auto cursor-pointer'><ShoppingCartIcon className="size-6 inline-block relative bottom-0.5"/> Add To Cart</button>
                  </div>
            </div>
          ))}
            
           </div>
         <div className='mt-10'>
            <button className="border border-gray-500 block m-auto p-3 rounded-md cursor-pointer w-30">See More</button>
         </div>
         <div className="mt-10">
            <p className="text-center text-2xl font-semibold">Featured Products</p>
            <div className='h-1 bg-violet-500 w-20 m-auto mt-2'></div>
            <div className="max-w-[800px] w-[90%] m-auto grid grid-cols-3 gap-10 mt-10">
               <div className="h-80 bg-zinc-100 content-featured-product"></div>
               <div className="h-80 bg-zinc-100 content-featured-product"></div>
               <div className="h-80 bg-zinc-100 content-featured-product"></div>
            </div>
            <div className="content-mid-page-banner h-70 rounded-md mt-15 bg-indigo-100">

            </div>
            <div className="content-subscribe">

            </div>
         </div>
      </div>
        </div>
    )

}

export default Home;