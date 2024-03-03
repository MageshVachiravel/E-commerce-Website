import {Link} from "react-router-dom"
import product1 from "../assests/product1.jpg"
import product2 from "../assests/product2.jpg"
import product3 from "../assests/product3.jpg"
import product4 from "../assests/product4.jpg"
import product5 from "../assests/product5.jpg"
import product6 from "../assests/product6.jpg"
import product7 from "../assests/product7.jpg"
import product8 from "../assests/product8.jpg"

const productDetails = [
    {
        img:product1,
        productName : "Saptiya",
        price:1500,
        discount:true,
        disocuntRate:"-40%",
        originalRate:"2500"
    },
    {
        img:product2,
        productName : "Fashion coat",
        price:999,
        discount:true,
        disocuntRate:"-20%",
        originalRate:"1199"
    },
    {
        img:product3,
        productName : "Female coat",
        price:1299,
        discount:false, 
    },
    {
        img:product4,
        productName : "Female Jakcet",
        price: 899,
        discount:false,
    },{
        img:product5,
        productName : "Female jacket",
        price: 1600,
        discount:true,
        disocuntRate:"-10%",
        originalRate:"1800"
    },
    {
        img:product6,
        productName : "Kids coat",
        price:899,
        discount:false,
    },
    {
        img:product7,
        productName : "Kids frock",
        price:299,
        discount:true,
        disocuntRate:"-40%",
        originalRate:"800"
    },
    {
        img:product8,
        productName : "Kids frock",
        price:499,
        discount:true,
        disocuntRate:"-30%",
        originalRate:"800"
    }
]
const DailyDeals = () => {
    return(
        <>
        {
            window.location.pathname === "/"?
            <div>
            <div className="text-center" id="newArrivals">
            <h1 className="text-3xl tracking-tighter"> ――― <span className="text-3xl font-bold tracking-wide">DAILY DEALS!</span> ――― </h1>
            </div>    

        <ul className="flex justify-center items-center text-xl font-medium py-7 gap-10 lg:gap-16">
            <Link to={"/"}><li className="hover:text-black cursor-pointer text-black">New Arrivals</li></Link>
            <Link to={"/BestSellers"}><li className="hover:text-black cursor-pointer text-gray-600">Best Sellers</li></Link>
            <Link to={"/SaleItems"}><li className="hover:text-black cursor-pointer text-gray-600">Sale Items</li></Link>
        </ul>
            <div className="lg:px-40 px-0 py-10  items-center flex justify-evenly flex-wrap gap-8">
            {productDetails.map((product,index)=>{
                return(
                    <div className="text-center basis-64 relative" key={index}>
                <img src={product.img} alt="" className="w-full h-80" />
                <p className="absolute top-3 right-3 bg-[#A749FF] px-3.5 py-0.5 text-sm rounded text-white">New</p>
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
                <button className="text-white mt-3 bg-purple-600 px-4 text-md py-1">Add to cart</button>
                </div>
                )
            })
        }
        </div>
        </div>:""
        }
        </>
    )
}

export default DailyDeals