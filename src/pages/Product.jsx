import Navbar from "../components/Navbar"
import Rating from '@mui/material/Rating';
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useState,useEffect } from "react";

const Product = () => {
  const params = useParams();
  const [cartCount, setCartCount] = useState(0);
  const [param, setParam] = useState(params);

       useEffect(() => {
           if(localStorage.getItem('myCart')){
               let count = 0;
                 JSON.parse(localStorage.getItem('myCart')).forEach(item => {
                 count += item.qty;
              })
              setCartCount(count);
           }
   
       }); 
  const product = products.filter((product) => product.id === params.id);


    useEffect(() => {
      window.dataLayer = window.dataLayer || {};
      window.dataLayer = {
        event: "view_item",
        ecommerce: {
          currency: "ZAR",
          value: product[0].price,
          items: [
            {
              item_id: product[0].id,
              item_name: product[0].name,
              price: product[0].price,
              item_variant: product[0].color
            }
          ]
        }
      }

    },[param])

    const addToCart = () => {
      if(localStorage.getItem('myCart')){
         let cart = JSON.parse(localStorage.getItem('myCart'));
         //setCartCount(cart.length);
         const myItem = cart.filter(item => item.name === product[0].name);
         if(myItem.length > 0){
             myItem[0].qty++;
             myItem[0].total = myItem[0].qty * myItem[0].price;
             const updatedCart = cart.filter(item => item.id !== product[0].id);
             localStorage.setItem('myCart', JSON.stringify([...updatedCart,myItem[0]]));
             let count = 0;
           JSON.parse(localStorage.getItem('myCart')).forEach(item => {
              count += item.qty;
           })
           setCartCount(count);
         }
        else if(myItem.length <= 0){
           cart.push({id:product[0].id,name:product[0].name,price:product[0].price,color:product[0].color,qty:1,total:product[0].price,image:product[0].image});
           localStorage.setItem('myCart', JSON.stringify(cart));
           let count = 0;
           JSON.parse(localStorage.getItem('myCart')).forEach(item => {
              count += item.qty;
           })
           setCartCount(count);
      }
      }else if(!localStorage.getItem('myCart')){
           let cart = [];
          cart.push({id:product[0].id,name:product[0].name,price:product[0].price,color:product[0].color,qty:1,total:product[0].price,image:product[0].image});
          localStorage.setItem('myCart', JSON.stringify(cart));
          let count = 0;
           JSON.parse(localStorage.getItem('myCart')).forEach(item => {
              count += item.qty;
           })
           setCartCount(count);
      }
    window.dataLayer = window.dataLayer || {};
    window.dataLayer = {
      event: "add_to_cart",
      ecommerce: {
        currency: "ZAR",
        value: product[0].price,
        items: [
          {
            item_id: product[0].id,
            item_name: product[0].name,
            price: product[0].price,
            item_variant: product[0].color
          }
        ]
      }
    }
    }
    return (
        <div>
            <Navbar count={cartCount}/>
            <div className="grid grid-cols-2 mt-25">
                <div>
                    <div className="w-[300px] h-[300px] bg-zinc-100 m-auto rounded-md">
                       <img src={product[0].image} alt={product[0].name} className='w-full h-full'/>
                    </div>
                </div>
                <div className="text-left">
                    <p className="text-2xl font-semibold text-slate-700 mb-5">{product[0].name}</p>
                    <div className='flex'>
                        <p> <Rating defaultValue={4.5} precision={0.5} size="small" readOnly /></p>
                        <p className="text-md ml-1 relative bottom-0.5">(4.5)</p>
                    </div>
                        <p className="pr-20 mt-3">{product[0].description}</p>
                        <p className="text-2xl font-semibold text-slate-700 mt-5 border-b border-b-gray-300 pb-7">R{product[0].price}</p>
                        <div className="mt-5">
                           <table className="w-50">
                              <tr>
                                <td className="text-lg font-semibold">Brand</td>
                                <td className="text-lg">Generic</td>
                              </tr>
                                 <tr>
                                <td className="text-lg font-semibold">Color</td>
                                <td className="text-lg">{product[0].color}</td>
                              </tr>
                                 <tr>
                                <td className="text-lg font-semibold">Category</td>
                                <td className="text-lg">{product[0].category}</td>
                              </tr>
                           </table>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-10">
                           <button className="p-3 bg-gray-200 text-black cursor-pointer" onClick={addToCart}>Add To Cart</button>
                           <button className="p-3 bg-violet-500 text-white cursor-pointer">Buy Now</button>
                        </div>
                </div>
            </div>
                        <div className="mt-20">
                          <p className="text-center text-2xl font-semibold">Featured Products</p>
            <div className='h-1 bg-violet-500 w-20 m-auto mt-2 mb-10'></div>
                        </div>
                        <div className="grid lg:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 xl:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-6 mt-5">
          <div>
              <div className="h-60 bg-zinc-100 rounded-md">
              </div>
              <div className="mt-3">
                <p className="text-xl text-left font-semibold">Playstation 5</p>
                <p className="text-left text-gray-600 line-clamp-1">The playstation comes with alot of features</p>
                <div className='flex'>
                <p className="text-sm mr-1">4.5</p>  
                <p> <Rating defaultValue={4.5} precision={0.5} size="small" readOnly/></p>
                </div>
                <div>
                <p className="text-lg font-semibold text-left">R2999.99</p>
                </div>
                <div className="mt-5">
                  <button className='p-1 bg-black text-white rounded-full w-full block m-auto'><ShoppingCartIcon className="size-6 inline-block relative bottom-0.5"/> Add To Cart</button>
                </div>
              </div>
          </div>
           <div>
              <div className="h-60 bg-zinc-100 rounded-md">
              </div>
              <div className="mt-3">
                <p className="text-xl text-left font-semibold">Playstation 5</p>
                <p className="text-left text-gray-600 line-clamp-1">The playstation comes with alot of features</p>
                <div className='flex'>
                <p className="text-sm mr-1">4.5</p>  
                <p> <Rating defaultValue={4.5} precision={0.5} size="small" readOnly/></p>
                </div>
                <div>
                <p className="text-lg font-semibold text-left">R2999.99</p>
                </div>
                <div className="mt-5">
                  <button className='p-1 bg-black text-white rounded-full w-full block m-auto'><ShoppingCartIcon className="size-6 inline-block relative bottom-0.5"/> Add To Cart</button>
                </div>
              </div>
          </div>
           <div>
              <div className="h-60 bg-zinc-100 rounded-md">
              </div>
              <div className="mt-3">
                <p className="text-xl text-left font-semibold">Playstation 5</p>
                <p className="text-left text-gray-600 line-clamp-1">The playstation comes with alot of features</p>
                <div className='flex'>
                <p className="text-sm mr-1">4.5</p>  
                <p> <Rating defaultValue={4.5} precision={0.5} size="small" readOnly/></p>
                </div>
                <div>
                <p className="text-lg font-semibold text-left">R2999.99</p>
                </div>
                <div className="mt-5">
                  <button className='p-1 bg-black text-white rounded-full w-full block m-auto'><ShoppingCartIcon className="size-6 inline-block relative bottom-0.5"/> Add To Cart</button>
                </div>
              </div>
          </div>
           <div>
              <div className="h-60 bg-zinc-100 rounded-md">
              </div>
              <div className="mt-3">
                <p className="text-xl text-left font-semibold">Playstation 5</p>
                <p className="text-left text-gray-600 line-clamp-1">The playstation comes with alot of features</p>
                <div className='flex'>
                <p className="text-sm mr-1">4.5</p>  
                <p> <Rating defaultValue={4.5} precision={0.5} size="small" readOnly/></p>
                </div>
                <div>
                <p className="text-lg font-semibold text-left">R2999.99</p>
                </div>
                <div className="mt-5">
                  <button className='p-1 bg-black text-white rounded-full w-full block m-auto'><ShoppingCartIcon className="size-6 inline-block relative bottom-0.5"/> Add To Cart</button>
                </div>
              </div>
          </div>
           <div>
              <div className="h-60 bg-zinc-100 rounded-md">
              </div>
              <div className="mt-3">
                <p className="text-xl text-left font-semibold">Playstation 5</p>
                <p className="text-left text-gray-600 line-clamp-1">The playstation comes with alot of features</p>
                <div className='flex'>
                <p className="text-sm mr-1">4.5</p>  
                <p> <Rating defaultValue={4.5} precision={0.5} size="small" readOnly/></p>
                </div>
                <div>
                <p className="text-lg font-semibold text-left">R2999.99</p>
                </div>
                <div className="mt-5">
                  <button className='p-1 bg-black text-white rounded-full w-full block m-auto'><ShoppingCartIcon className="size-6 inline-block relative bottom-0.5"/> Add To Cart</button>
                </div>
              </div>
          </div>
          </div>
        </div>
    )
}

export default Product;