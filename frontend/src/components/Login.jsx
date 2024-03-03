import {Link} from "react-router-dom"

function Login  () {


    return(
        <>
        <div>
            <div className="bg-gray-100 py-10 text-center">
                <h1 className=" text-md">HOME / <span className="font-medium">LOGIN OR REGISTER</span></h1>
            </div>

            <div>
                <h1 className="text-purple-500 font-bold text-2xl text-center mt-16"><Link to={"/login"}> LOGIN </Link>   <Link to={"/register"}> <span className="text-black">| REGISTER</span></Link></h1>
            </div>

            <div className="flex justify-center my-16">
                <form action="" className="lg:w-1/2 md:w-[80%] w-[100%] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] px-16 py-20" >
                    <input type="text" placeholder="email"  className="w-full px-3 border py-3 mb-5 outline-none"/> <br />
                    <input type="password" placeholder="Password" className="w-full  border px-3 py-3 outline-none" />

                    <div className="mt-10 flex justify-between">
                        <div>
                            <input type="checkbox" required/> <span className="ml-1">Remember me</span>
                        </div>
                        <p>Forget Password?</p>
                    </div>

                    <button className="text-left mt-10 bg-purple-500 text-white px-5 py-2 hover:bg-purple-700 transition-all duration-500">Login</button>
                </form>
            </div>
        </div>
        
        </>
    )
}

export default Login