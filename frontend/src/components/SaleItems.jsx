import product15 from "../assests/product15.jpg"
import product2 from "../assests/product2.jpg"
import product17 from "../assests/product17.jpg"
import product18 from "../assests/product18.jpg"
import product19 from "../assests/product19.jpg"
import product20 from "../assests/product20.jpg"
import product21 from "../assests/product21.jpg"
import product22 from "../assests/product22.jpg"
import Home from "./Home"
import {Link} from "react-router-dom"

const productDetails = [
    {
        id:15,
        img:product15,
        productName : "New fashion coat",
        price:1500,
        discount:false,
        amount:1
    },
    {
        id:16,
        img:product2,
        productName : "light brown fashion coat",
        price:999,
        discount:true,
        disocuntRate:"-20%",
        originalRate:"1199",
        amount:1
    },
    {
        id:17,
        img:product17,
        productName : "kids  coat",
        price:1299,
        discount:false,
        disocuntRate:"-40%",
        originalRate:"2500",
        amount:1
    },
    {
        id:18,
        img:product18,
        productName : "Female dress",
        price: 899,
        discount:false,
        amount:1
    },{
        id:19,
        img:product19,
        productName : "Analog watch",
        price: 1600,
        discount:false,
        amount:1
    },
    {
        id:20,
        img:product20,
        productName : "Long slip bag",
        price:899,
        discount:false,
        disocuntRate:"-10%",
        originalRate:"1800",
        amount:1
    },
    {
        id:21,
        img:product21,
        productName : "Kids hoodie",
        price:299,
        discount:true,
        disocuntRate:"-40%",
        originalRate:"800",
        amount:1
    },
    {
        id:22,
        img:product22,
        productName : "Slip Bag",
        price:499,
        discount:false,
        amount:1
    }
]

const SaleItems = ({handleClick}) => {
    return (
        <>
        <Home/>
        <div className="text-center" id="newArrivals">
            <h1 className="text-3xl tracking-tighter"> ――― <span className="text-3xl font-bold tracking-wide">DAILY DEALS!</span> ――― </h1>
        </div>    

        <ul className="flex justify-center items-center text-xl font-medium py-7 gap-10 lg:gap-16">
            <Link to={"/home"}><li className="hover:text-black cursor-pointer text-gray-600">New Arrivals</li></Link>
            <Link to={"/BestSellers"}><li className="hover:text-black cursor-pointer text-gray-600">Best Sellers</li></Link>
            <Link to={"/SaleItems"}><li className="hover:text-black cursor-pointer text-black">Sale Items</li></Link>
        </ul>
        <div className="lg:px-40 px-0 py-10  items-center flex justify-evenly flex-wrap gap-8">
            {productDetails.map((product,index)=>{
                return(
                <div className="text-center basis-64 relative" key={index}>
                <img src={product.img} alt="" className="w-full h-80" />
                {
                    product.discount?<p className="absolute top-3 right-3 bg-[rgb(250,107,255)] px-3.5 py-0.5 text-sm rounded text-white">{product.disocuntRate}</p>:""
                }
                <p>{product.productName}</p>
                <p> 
                <span className="text-sm mr-3 text-green-600 font-medium">{
                    product.discount? product.disocuntRate+ " off":""      
                }
                </span>
                <span className="line-through mr-2">
                    {
                        product.discount? product.originalRate:""
                    }    
                </span> 
            
                ₹ {product.price}</p>
                <button className="text-white mt-3 bg-purple-600 px-4 text-md py-1" onClick={()=>handleClick(product)}>Add to cart</button>
                </div>
                )
            })
        }
        </div>
        </>
    )
}

export default SaleItems