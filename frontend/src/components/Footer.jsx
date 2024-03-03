const Footer = () => {
    return(
        <div className=" bg-gray-100 lg:p-24 p-12 gap-10 flex justify-evenly items-center flex-wrap">
            <div>
                <h1 className="text-3xl font-bold">ClearCart</h1>
                <p className="text-md mt-0.5">&copy; 2024 ClearCart.</p>
                <p className="text-md mt-0.5">All rights Reserved</p>
            </div>
            <div>
                <h1 className="font-semibold mb-2 text-md">ABOUT US</h1>
                <ul className=" space-y-2 text-gray-600">
                    <li>About us</li>
                    <li>Store location</li>
                    <li>Contact</li>
                    <li>Orders tracking</li>
                </ul>
            </div>
            <div>
                <h1 className="font-semibold mb-2 text-md">USEFULL LINKS</h1>
                <ul className=" space-y-2 text-gray-600">
                    <li>Returns</li>
                    <li>Support Policy</li>
                    <li>Size guide</li>
                    <li>FAQs</li>
                </ul>
            </div>
            <div>
                <h1 className="font-semibold mb-2 text-md">FOLLOW US</h1>
                <ul className=" space-y-2 text-gray-600">
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>Youtube</li>
                </ul>
            </div>

            <div>
                <h1 className="font-semibold mb-2 text-md">SUBSCRIBE</h1>
                <ul className="text-gray-600 space-y-1">
                    <li>
                    <p>Get E-mail updates about our latest shop <br /> and special offers.</p>
                    </li>
                    <li><input type="text" placeholder="Enter your eamil address" className="py-2 border-b-gray-400 border-t-0 border-l-0 border-r-0 bg-transparent border outline-none pr-24"/></li>
                    <li> <button className="border-none mt-2 underline underline-offset-4">SUBSCRIBE</button></li>
                </ul>
              
                
               
            </div>
        </div>
    )
}

export default Footer