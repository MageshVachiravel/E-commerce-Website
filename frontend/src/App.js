import Navbar from "./components/Navbar"
import Home from "./components/Home"
import { BrowserRouter , Routes , Route } from "react-router-dom"
import Cart from "./components/Cart"
import { useState } from "react"
import Login from "./components/Login"


const App = ()=>{

    const [cart,setCart] = useState([]);
    return (
        <>
        <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
            <Route path='/' element={<Home cart={cart} setCart={setCart} />}></Route>
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />}></Route>
            <Route path="/login" element={<Login />}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default App