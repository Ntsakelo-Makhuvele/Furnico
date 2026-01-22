import Navbar from "../components/Navbar";
import { products } from "../data/products";
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';

const Products = () => {
    return(
        <div>
            <Navbar />
            <div className="w-[fit-content]">
            <p className="text-left text-2xl font-semibold mt-30">All Products</p>
            <div className='h-1 bg-violet-500 w-20 ml-auto mt-2'></div>
            </div>
               <div className="grid lg:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 xl:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-6 mt-5">
          {products && products.map((product) => (

            <div>
                <Link to={`/product/${product.id}`}>
                <div className="h-60 bg-zinc-100 rounded-md">
                  <img src={product.image} alt={product.name} className='w-full h-full'/>
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
        </div>
    )
}

export default Products;