import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Cart = ({cart,setCart}) => {

    const [price,setPrice ] = useState(0);

    const handleRemove = (id) => {
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
    }

    const handlePrice = () => {
        let total = 0;
        cart.map((item) => {
             total += item.amount * item.price
        })

        setPrice(total)
    }

    useEffect(()=>{
        handlePrice();
    })

    return(
        <>
        <div className="bg-gray-100 py-10 text-center ">
                <h1 className=" text-md">HOME / <span className="font-medium">CART</span></h1>
        </div>


        {
            cart.length === 0? <div className="flex flex-col items-center justify-center my-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><path fill="currentColor" d="M7.308 21.115q-.633 0-1.067-.433q-.433-.434-.433-1.067q0-.632.433-1.066q.434-.434 1.067-.434q.632 0 1.066.434q.434.434.434 1.066q0 .633-.434 1.067q-.434.433-1.066.433m9.384 0q-.632 0-1.066-.433q-.434-.434-.434-1.067q0-.632.434-1.066q.434-.434 1.066-.434q.633 0 1.067.434q.433.434.433 1.066q0 .633-.433 1.067q-.434.433-1.067.433M5.881 5.5l2.669 5.615h6.635q.173 0 .307-.086q.135-.087.231-.24l2.615-4.75q.116-.212.02-.376q-.096-.163-.327-.163zm-.489-1h13.02q.651 0 .98.532q.33.531.035 1.095l-2.858 5.208q-.217.365-.564.573q-.347.207-.763.207H8.1l-1.215 2.231q-.154.23-.01.5t.433.27h10.884v1H7.308q-.875 0-1.306-.738q-.43-.738-.021-1.482l1.504-2.68L3.808 3.5H2v-1h2.442zm3.158 6.615h7z"/></svg>
            <p className="py-2 text-xl ">No items found in cart</p>
            <Link to={"/shop"}><button className="bg-purple-500 px-7 py-2 text-white outline-none rounded my-3" >Shop Now</button></Link>
            </div>
             :<div class="relative lg:px-14 px-4 py-5">
                <h1 className=" text-2xl font-semibold py-5">Your cart items</h1>
            <div className="overflow-x-scroll">
            <table class="w-full text-md text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400  border-b border-r border-l border-t">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Product Image
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Unit Price
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Quantity
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Subtotal
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                
                {
                    cart.map((item) => {
                        return(
                    <tr class="bg-white border-b border-r border-l border-t dark:bg-gray-800 dark:border-gray-700">
                        <td className="p-5">
                            <img src={item.img} alt="" className="w-28 h-28 object-cover"/>
                        </td>
                        <th scope="row" class="px-8 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.productName}
                        </th>
                        <td class="px-8 py-4 font-medium text-gray-900">
                           ₹ {item.price}
                        </td>
                        <td class="py-4  font-medium text-gray-900">
                            <button className="border py-1 px-2" >+</button>
                            <button className="border py-1 px-6" >{item.amount}</button>
                            <button className="border py-1 px-2" >-</button>
                        </td>
                        <td class="px-8 py-4 font-medium text-gray-900">
                            ₹ {item.price}
                        </td>
                        <td class="px-8 py-4 font-medium text-gray-900 ">
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>handleRemove(item.id)} width="32" height="32" viewBox="0 0 24 24" className="cursor-pointer"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg>
                        </td>
                    </tr>
                        )
                    })
                }
                </tbody>
            </table>
            </div>
                <h1>Total Price : {price}</h1>

            </div>
        }

        


        </>
    )
}

export default Cart