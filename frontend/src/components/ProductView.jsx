import {Link} from "react-router-dom"

const ProductView = ({product,handleClick})=> {
        
    return (    
        <>

        <div className="bg-gray-100 py-10 text-center ">
                <h1 className=" text-md">HOME / <span className="font-medium">SHOP PRODUCT</span></h1>
        </div>
          <div className="md:p-20 p-10">
               {
                product.map((item)=>{
                    return(
                        <div className="flex md:gap-24  items-center md:flex-row flex-col">
                            <img src={item.img} alt="" width="400"/>

                            <div>
                                <h1 className="font-semibold text-4xl mb-2">{item.productName}</h1>
                                <p className="text-sm mb-2">45,607 ratings | Search this page</p>
                                <p className="text-emerald-700 text-sm mb-1"><span className="font-semibold">5k+ Bought</span> in past month</p>
                                <div className="flex text-yellow-300 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 21l2.325-7.6L2 9h7.6L12 1l2.4 8H22l-6.15 4.4l2.325 7.6L12 16.3z"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 21l2.325-7.6L2 9h7.6L12 1l2.4 8H22l-6.15 4.4l2.325 7.6L12 16.3z"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 21l2.325-7.6L2 9h7.6L12 1l2.4 8H22l-6.15 4.4l2.325 7.6L12 16.3z"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 21l2.325-7.6L2 9h7.6L12 1l2.4 8H22l-6.15 4.4l2.325 7.6L12 16.3z"/></svg>    
                                </div> 
                                <hr />
                                <span className="bg-red-500 px-2 py-1 text-white font-semibold rounded text-sm mt-4 my-2 inline-block">Limited time deal</span>
                                <p className="text-2xl my-1">₹ {item.price}</p>
                                <p className="mb-1">Inclusive of all taxes</p>
                                <p className="mb-2"><span className="font-semibold">EMI</span> starts at ₹ {item.price - 500}. No Cost EMI available</p>
                                 
                                <p className=" w-[70%]">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>

                                <div className="flex mt-5 gap-5">
                                    <Link to={"/cart"}><button className="bg-black text-white px-8 py-4" onClick={() => handleClick(item)}>Buy Now</button></Link>
                                    <button className="bg-black text-white px-8 py-4" onClick={() => handleClick(item)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    )
                })
               }
          </div>
        </>
    )
}

export default ProductView