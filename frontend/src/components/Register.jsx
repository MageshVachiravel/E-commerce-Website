import {Link} from "react-router-dom"
import { database } from "../firebaseConfig"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword } from "firebase/auth"


const Register = () => {

    const handleSubmit =  (e)=> {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserWithEmailAndPassword(database,email,password)
        .then(data=>{
            e.target.password.value = "";
            e.target.email.value = "";
            e.target.name.value = "";
            toast.success('Register successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
        ).catch(err => {
            alert(err.code)
        })
    }

    

    return(
        <>
        <div>
            <div className="bg-gray-100 py-10 text-center">
                <h1 className=" text-md">HOME / <span className="font-medium">LOGIN OR REGISTER</span></h1>
            </div>

            <div>
                <h1 className="text-black font-bold text-2xl text-center mt-16 transition-all"> <Link to={"/"}> LOGIN </Link>  |  <Link to={"/register"}> <span className="text-purple-500"> REGISTER</span></Link></h1>
            </div>

            <div className="flex justify-center my-16">
                <form action="" className="lg:w-1/2 md:w-[80%] w-[100%] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] px-16 py-20" onSubmit={(e)=>handleSubmit(e)}>
                    <input type="text" name="name" placeholder="Username" className="w-full px-3 border py-3 mb-5 outline-none"/> <br />
                    <input name="email" type="email" placeholder="Email" className="w-full  border px-3 py-3 mb-5 outline-none" /> <br />
                    <input name="password" type="password" placeholder="Password" className="w-full  border px-3 py-3  outline-none" /> 

                    <button className="text-left mt-10 bg-purple-500 text-white px-5 py-2 hover:bg-purple-700 transition-all duration-500">Register</button>
                </form>
            </div>

        </div>
            <ToastContainer />
        </>
    )
}

export default Register