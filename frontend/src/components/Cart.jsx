
const Cart = ({cart,setCart}) => {
    return(
        <>
        <h1 className=" text-lg font-semibold">Cart Products</h1>
        <div className="flex flex-col p-3">
            {
                cart.map((product,index)=>{
                return(
                <div className="flex gap-2 items-center mb-2 border  border-gray-400" key={index}>
                <div className=" w-24 h-24">
                    <img className="w-full h-full" src={product[index].img} alt="Image1" />
                </div>
                <div>
                    <h3>{product[index].productName}</h3>
                    <p>₹ {product[index].price}</p>
                </div>
                </div>
                )
                })
            }
        </div>

        <h1>Total Price : oooo</h1>
        </>
    )
}

export default Cart