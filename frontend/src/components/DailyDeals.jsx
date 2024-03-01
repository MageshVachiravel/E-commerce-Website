import product1 from "../assests/product1.jpg"
import product2 from "../assests/product2.jpg"
import product3 from "../assests/product3.jpg"
import product4 from "../assests/product4.jpg"

const productDetails = [
    {
        img:product1,
        productName : "Cotton jacket",
        price:"₹ 1500"
    },
    {
        img:product2,
        productName : "Fashion coat",
        price:"₹ 999"
    },
    {
        img:product3,
        productName : "Female coat",
        price:"₹ 1299"
    },
    {
        img:product4,
        productName : "Female Jakcet",
        price:"₹ 899"
    },{
        img:product1,
        productName : "Cotton jacket",
        price:"₹ 1500"
    },
    {
        img:product2,
        productName : "Fashion coat",
        price:"₹ 999"
    },
    {
        img:product3,
        productName : "Female coat",
        price:"₹ 1299"
    },
    {
        img:product4,
        productName : "Female Jakcet",
        price:"₹ 899"
    }
]

const DailyDeals = () => {
    return(
        <>
        <div className="text-center">
            <h1 className="text-3xl tracking-tighter"> ――― <span className="text-3xl font-bold tracking-wide">DAILY DEALS!</span> ――― </h1>
        </div>    

        <ul className="flex justify-center items-center text-xl font-medium py-14 gap-16">
            <li className="hover:text-black cursor-pointer text-black">New Arrivals</li>
            <li className="hover:text-black cursor-pointer text-gray-600">Best Sellers</li>
            <li className="hover:text-black cursor-pointer text-gray-600">Sale Items</li>
        </ul>

        <div className="lg:px-40 px-20  items-center flex justify-evenly flex-wrap gap-5">
            {productDetails.map((product)=>{
                return(
                <div className="text-center basis-64 relative">
                <img src={product.img} alt="" className="w-full h-80" />
                <p className="absolute top-3 right-3 bg-[#A749FF] px-3 py-0.5 text-sm rounded text-white">New</p>
                <p>{product.productName}</p>
                <p>{product.price}</p>
                </div>
                )
            })
            }
        </div>
        </>
    )
}

export default DailyDeals