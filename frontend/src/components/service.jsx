import discount from "../assests/discount.svg"
import shipping from "../assests/shipping.svg"
import Moneyreturn from "../assests/return.svg"
import support from "../assests/support.svg"

const icons = [shipping,support,Moneyreturn,discount];
const heading = ["Free shipping","Support 24/7","Money Return","Order Discount"];

const Service = () => {
    return (
        <div className="w-full py-20  gap-16 flex items-center justify-center flex-wrap">
           {
            heading.map((title,index) => {
                return (
                    <div className="flex gap-4 md:items-center justify-center flex-col md:flex-row basis-[160px] lg:basis-[250px]">
                        <img src={icons[index]} alt="dsicountImage" className=" w-14"/>
                        <div>
                            <h1 className="text-xl">{title}</h1>
                            <p className="text-sm font-semibold text-gray-800">Free shipping on all order</p>
                        </div>
                    </div>
                )
            })
           }
        </div>
    )
}

export default Service