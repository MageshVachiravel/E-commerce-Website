
const Cart = () => {
    return(
        <>
        <div className="bg-gray-100 py-10 text-center">
                <h1 className=" text-md">HOME / <span className="font-medium">CART</span></h1>
        </div>
        <h1 className=" text-lg font-semibold">Cart Products</h1>
        <div className="flex flex-col p-3">
                <div className="flex gap-2 items-center mb-2 border  border-gray-400">
                <div className=" w-24 h-24">
                    <img className="w-full h-full" src="" alt="Image1" />
                </div>
                <div>
                    <h3>Product Name</h3>
                    <p>₹ 4000</p>
                </div>
                </div>
        </div>

        <h1>Total Price : 4000</h1>
        </>
    )
}

export default Cart