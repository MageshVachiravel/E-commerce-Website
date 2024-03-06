import product9 from "../assests/product9.jpg"
import product10 from "../assests/product10.jpg"
import product11 from "../assests/product11.jpg"
import product12 from "../assests/product12.jpg"
import product13 from "../assests/product13.jpg"
import product14 from "../assests/product14.jpg"
import product1 from "../assests/product1.jpg"
import product6 from "../assests/product6.jpg"
import Home from "./Home"
import { Link } from "react-router-dom"

const productDetails = [
    {
        id:9,
        img:product9,
        productName : "Female top",
        price:2100,
        discount:true,
        disocuntRate:"-40%",
        originalRate:"3200",
        amount:1
    },
    {
        id:10,
        img:product10,
        productName : "Fashion jacket",
        price:1800,
        discount:true,
        disocuntRate:"-20%",
        originalRate:"2200",
        amount:1
    },
    {
        id:11,
        img:product11,
        productName : "kids shirt",
        price:500,
        discount:false,
        amount:1
    },
    {
        id:12,
        img:product12,
        productName : "kids shirt",
        price: 900,
        discount:false,
        amount:1
    },{
        id:13,
        img:product13,
        productName : "kids seven",
        price: 899,
        discount:true,
        disocuntRate:"-10%",
        originalRate:"1200",
        amount:1
    },
    {
        id:14,
        img:product14,
        productName : "Kids sweater",
        price:899,
        discount:false,
        amount:1
    },
    {
        id:23,
        img:product1,
        productName : "Kids sweater",
        price:900,
        discount:true,
        disocuntRate:"-40%",
        originalRate:"1500",
        amount:1
    },
    {
        id:24,
        img:product6,
        productName : "Kids T-shirt",
        price:900,
        discount:true,
        disocuntRate:"-30%",
        originalRate:"1200",
        amount:1
    }
]

const BestSellers = ({handleClick}) => {
    
    return (
        <>
        <Home/>
        <div className="text-center" id="newArrivals">
            <h1 className="text-3xl tracking-tighter"> ――― <span className="text-3xl font-bold tracking-wide">DAILY DEALS!</span> ――― </h1>
        </div>    

        <ul className="flex justify-center items-center text-xl font-medium py-7 gap-10 lg:gap-16">
            <Link to={"/home"}><li className="hover:text-black cursor-pointer text-gray-600">New Arrivals</li></Link>
            <Link to={"/BestSellers"}><li className="hover:text-black cursor-pointer text-black">Best Sellers</li></Link>
            <Link to={"/SaleItems"}><li className="hover:text-black cursor-pointer text-gray-600">Sale Items</li></Link>
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

export default BestSellers