import Navbar from "./components/Navbar"
import Home from "./components/Home"
import { BrowserRouter , Routes , Route } from "react-router-dom"
import Cart from "./components/Cart"
import Login from "./components/Login"
import Register from "./components/Register"
import Footer from "./components/Footer"
import BestSellers from "./components/BestSellers"
import SaleItems from "./components/SaleItems"
import Contact from "./components/Contact"
import { useState } from "react"
import Shop from "./components/Shop"
import { ToastContainer, toast } from 'react-toastify';
import CheckOut from "./components/CheckOut"
import ProductView from "./components/ProductView"

const App = ()=>{

    const [login,setLogin] = useState(false);
    const [cart,setCart ] = useState([]);    

    const handleClick = (item) => {

        if(login){
        let isPresent = false;
        cart.forEach((product)=>{
           if(item.id === product.id){
            isPresent = true;
           }
        })

        if(isPresent){
            toast.error('Item is already added to your cart!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

            return ;
        }

        else{
            
            toast.success('Added to cart', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    
           setCart([...cart,item])
           console.log(item);
    }
    else{
        toast.error('Please Login to add cart', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
    }

    const [product,setProduct] = useState([]);

    const handleProduct = (item)=> {
        setProduct([item])
    }

    return (
        <>
        <BrowserRouter>
        <Navbar login={login} setLogin={setLogin} size={cart.length} setCart={setCart}></Navbar>
        <Routes>
            <Route path='/home' element={<Home handleClick={handleClick} handleProduct={handleProduct}/>}></Route>
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />}></Route>
            <Route path="/" element={<Login login={login} setLogin={setLogin} />}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/BestSellers" element={<BestSellers handleClick={handleClick} handleProduct={handleProduct}/>}></Route>
            <Route path="/SaleItems" element={<SaleItems handleClick={handleClick} handleProduct={handleProduct}/>}></Route>
            <Route path="/shop" element={<Shop handleClick={handleClick} handleProduct={handleProduct}/>}></Route>
            <Route path={"/checkout"} element={<CheckOut />}></Route>
            <Route path={"/productView"} element={<ProductView product={product} handleClick={handleClick} />}></Route>
        </Routes>
        <Footer></Footer>
        <ToastContainer />
        </BrowserRouter>
        </>
    )
}

export default App