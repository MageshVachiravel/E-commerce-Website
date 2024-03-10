const ProductView = ({product})=> {
        
    return (
        <>

        <div className="bg-gray-100 py-10 text-center ">
                <h1 className=" text-md">HOME / <span className="font-medium">SHOP PRODUCT</span></h1>
        </div>
          <div className="p-20">
               {
                product.map((item)=>{
                    return(
                        <div className="flex gap-24">
                            <img src={item.img} alt="" width="400"/>

                            <div>
                                <h1 className="font-semibold text-4xl">{item.productName}</h1>
                                <p className="text-xl my-3">₹ {item.price}</p>
                                <div className="flex text-yellow-300 my-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 21l2.325-7.6L2 9h7.6L12 1l2.4 8H22l-6.15 4.4l2.325 7.6L12 16.3z"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 21l2.325-7.6L2 9h7.6L12 1l2.4 8H22l-6.15 4.4l2.325 7.6L12 16.3z"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 21l2.325-7.6L2 9h7.6L12 1l2.4 8H22l-6.15 4.4l2.325 7.6L12 16.3z"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 21l2.325-7.6L2 9h7.6L12 1l2.4 8H22l-6.15 4.4l2.325 7.6L12 16.3z"/></svg>    
                                </div>  
                                <p className=" w-[70%]">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
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