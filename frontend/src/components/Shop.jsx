import product1 from "../assests/product1.jpg"
import product2 from "../assests/product2.jpg"
import product3 from "../assests/product3.jpg"
import product4 from "../assests/product4.jpg"
import product5 from "../assests/product5.jpg"
import product6 from "../assests/product6.jpg"
import product7 from "../assests/product7.jpg"
import product8 from "../assests/product8.jpg"
import product9 from "../assests/product9.jpg"
import product10 from "../assests/product10.jpg"
import product11 from "../assests/product11.jpg"
import product12 from "../assests/product12.jpg"
import product13 from "../assests/product13.jpg"
import product14 from "../assests/product14.jpg"
import product15 from "../assests/product15.jpg"
import product17 from "../assests/product17.jpg"
import product18 from "../assests/product18.jpg"
import product19 from "../assests/product19.jpg"
import product20 from "../assests/product20.jpg"
import product21 from "../assests/product21.jpg"
import product22 from "../assests/product22.jpg"
import { useState } from "react"

const categories = ["All Categories","Fashion","Men","Women","Kids","Chirstmas","Black Friday"]
const colors = ["All Colors","White","Black","Brown","Blue"]
const size = ["All Sizes","X","M","XL","XXL","XXXL"]
const tag= ["Fashion","Men","Jacket","Full Sleeve","Women","Coat","Top","Sleeveless","Electronics","Kids","Black Friday","Handmade"]

const productDetails = [
    {
        id:1,
        img:product1,
        productName : "Woolen coat",
        price:1500,
        discount:true,
        disocuntRate:"-40%",
        originalRate:"2500",
        amount:1
    },
    {
        id:2,
        img:product2,
        productName : "Fashion coat",
        price:999,
        discount:true,
        disocuntRate:"-20%",
        originalRate:"1199",
        amount:1
    },
    {
        id:3,
        img:product3,
        productName : "Female coat",
        price:1299,
        discount:false,
        amount:1 
    },
    {
        id:4,
        img:product4,
        productName : "Female Jakcet",
        price: 899,
        discount:false,
        amount:1
    },{
        id:5,
        img:product5,
        productName : "Female jacket",
        price: 1600,
        discount:true,
        disocuntRate:"-10%",
        originalRate:"1800",
        amount:1
    },
    {
        id:6,
        img:product6,
        productName : "Kids coat",
        price:899,
        discount:false,
        amount:1
    },
    {
        id:7,
        img:product7,
        productName : "Kids frock",
        price:299,
        discount:true,
        disocuntRate:"-40%",
        originalRate:"800",
        amount:1
    },
    {
        id:8,
        img:product8,
        productName : "Kids frock",
        price:499,
        discount:true,
        disocuntRate:"-30%",
        originalRate:"800",
        amount:1
    },
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

const productList = [
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

const Shop = ({handleClick}) => {

    const [toggle,setToggle] = useState(true)

    const handleOne = () => {
        setToggle(true);
    }

    const handleTwo =  () => {
        setToggle(false);
    }

    return (
        <>
        <div className="bg-gray-100 py-10 text-center">
            <h1 className=" text-md">HOME / <span className="font-medium">SHOP</span></h1>
        </div>

        <div className="py-16 px-24 flex">
            <div className="w-72 hidden lg:block">
                <div className="relative mb-10">
                    <p className="text-lg font-semibold mb-5">Search</p>
                    <input type="text" placeholder="Search here..." className="border-gray border pl-4 pr-8 py-1.5 outline-none rounded"/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-gray-400 absolute right-16 top-14"><path fill="currentColor" d="M9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14"/></svg>
                </div>

                <div className="mb-6">
                <p className="text-lg font-semibold mb-3">Categories</p>
                    <ul>
                        {
                            categories.map((items) => {
                                return (
                                    <li className="mb-2">
                                        <input type="checkbox" name="categories" /> <span className="ml-2">{items}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className="mb-6">
                <p className="text-lg font-semibold mb-3">Colors</p>
                    <ul>
                        {
                            colors.map((items) => {
                                return (
                                    <li className="mb-2">
                                        <input type="checkbox" name="categories" /> <span className="ml-2">{items}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className="mb-6">
                <p className="text-lg font-semibold mb-3">Sizes</p>
                    <ul>
                        {
                            size.map((items) => {
                                return (
                                    <li className="mb-2">
                                        <input type="checkbox" name="categories" /> <span className="ml-2">{items}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className="mb-6">
                <p className="text-lg font-semibold mb-3">Sizes</p>
                    <ul className="flex flex-wrap gap-2">
                        {
                            tag.map((items) => {
                                return (
                                    <li className="mb-2 bg-gray-200 px-3.5 py-1 rounded-xl">
                                         <span className="ml-2">{items}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

            </div>

            <div className="flex-1 p-2">
                <div className="flex items-center gap-10">
                      <select id="price" class="bg-gray-50 border border-gray-300 w-40 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option value="default">Default</option>
                      <option value="high">Price High to Low</option>
                      <option value="low">Price Low to High</option>
                      </select>
      
                      <p>Showing 15 of 60 result</p>
                      </div>
                <div>
                        
                {
                    toggle?<div className=" py-10 items-center flex justify-evenly flex-wrap gap-8">
                    {productDetails.map((product,index)=>{
                        return(
                        <div className="text-center basis-72 relative" key={index}>
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
                </div>: 
                <div className=" py-10  items-center flex justify-evenly flex-wrap gap-8">
             {productList.map((product,index)=>{
                return(
                <div className="text-center basis-72 relative" key={index}>
                <img src={product.img} alt="" className="w-full h-80 object-cover" />
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
                <button className="text-white mt-3 bg-purple-600 px-4 text-md py-1" onClick={()=>handleClick(product)}>Add to cart</button>
                </div>
                )
            })
        }
            </div>

                }
                
                </div>


                <div className="flex justify-center gap-2 text-xl w-full mt-10">
                   <p className="text-purple-500  shadow-[0_8px_30px_rgb(0,0,0,0.12)] h-12 rounded-full leading-[48px] transition-all hover:bg-purple-500 hover:text-white text-center w-12 cursor-pointer" onClick={handleOne}>1</p>
                   <p className="text-purple-500  shadow-[0_8px_30px_rgb(0,0,0,0.12)] h-12 rounded-full leading-[48px] transition-all hover:bg-purple-500 hover:text-white text-center w-12 cursor-pointer" onClick={handleTwo}>2</p>
                </div>
                
            </div>



        </div>
        </>
    )
}

export default Shop