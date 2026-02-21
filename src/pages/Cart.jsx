import { XMarkIcon } from "@heroicons/react/24/outline";
import Navbar from "../components/Navbar"
import { products } from "../data/products";
import { useEffect, useState } from "react";

const Cart = () => {
    const [cart, setCart] = useState();
    const [cartCount, setCartCount] = useState(0)
    useEffect(() => {
        if (localStorage.getItem('myCart')) {
            setCart(JSON.parse(localStorage.getItem('myCart')));
            let count = 0;
            JSON.parse(localStorage.getItem('myCart')).forEach(item => {
                count += item.qty;
            })
            setCartCount(count);
        }
                    window.dataLayer = window.dataLayer || {};
            let dataLayerItems = [];
            let total = 0;
            if(cart && cart.length > 0){
                cart.forEach(item => {
                    total += item.total;
                    dataLayerItems.push({
                       item_id: item.id,
                        item_name: item.name,
                        price: item.price,
                        item_variant: item.color
                    })
                })
            }
            window.dataLayer = {
                event: "view_cart",
                ecommerce: {
                    currency: "ZAR",
                    value: total,
                    items: dataLayerItems
                }
            }

    },[])

    useEffect(() => {
        
            

        
    },[cart])

    return (
        <div className="">
            <Navbar count={cartCount} />
            <div className="grid grid-cols-12 gap-4 mt-30">
                <div className="col-span-8 h-50">
                    {cart && cart.map((item) => (

                        <div className="flex border-b border-b-gray-300" key={item.name}>
                            <div className="h-40 w-40">
                                <img src={item.image} />
                            </div>
                            <div className="pl-3 text-left grid items-center w-full">
                                <div className="w-[100%]">
                                    <p className="text-xl font-semibold text-slate-700 inline">{item.name}</p>
                                    <XMarkIcon className="inline size-6 float-right cursor-pointer" />
                                    <p className="text-xl font-semibold text-slate-700">R{item.price}</p>
                                    <p className="text-lg font-semibold text-gray-600">{item.color}</p>
                                    <div className="mt-3">
                                        <button className="border rounded-full h-7 w-7 relative top-0 mr-1 bg-violet-400 text-white cursor-pointer">-</button>
                                        <input type="text" value={item.qty} className="border w-10 h-7 text-center" />
                                        <button className="border rounded-full h-7 w-7 relative top-0 ml-1 bg-violet-400 text-white cursor-pointer">+</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))


                    }
                </div>
                <div className="col-span-4 h-65 border border-gray-300 ml-10 text-left p-3">
                    <div className="flex w-full">
                        <p>Items</p>
                        <p className="w-full text-right">{20}</p>
                    </div>
                    <div className="flex w-full mt-3">
                        <p>VAT</p>
                        <p className="w-full text-right">ZAR20.00</p>
                    </div>
                    <div className="flex w-full mt-3">
                        <p>Delivery</p>
                        <p className="w-full text-right">ZAR70.00</p>
                    </div>
                    <div className="flex w-full mt-3">
                        <p>SubTotal</p>
                        <p className="w-full text-right">ZAR2000.00</p>
                    </div>
                    <div className="flex w-full mt-3">
                        <p>Total</p>
                        <p className="w-full text-right">ZAR2080.00</p>
                    </div>
                    <div className="w-full mt-3">
                        <button className="p-3 bg-violet-500 text-white cursor-pointer w-full">CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;