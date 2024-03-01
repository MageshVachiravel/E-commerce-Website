import Navbar from "./components/Navbar"
import Home from "./components/Home"
import { BrowserRouter , Routes , Route } from "react-router-dom"
import Cart from "./components/Cart"
import { useState } from "react"


const App = ()=>{

    const [cart,setCart] = useState()
    return (
        <>
        <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default App