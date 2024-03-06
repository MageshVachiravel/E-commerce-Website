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


const App = ()=>{

    const [login,setLogin] = useState(false);
    

    return (
        <>
        <BrowserRouter>
        <Navbar login={login} setLogin={setLogin}></Navbar>
        <Routes>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path="/" element={<Login login={login} setLogin={setLogin} />}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/BestSellers" element={<BestSellers />}></Route>
            <Route path="/SaleItems" element={<SaleItems />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
        </Routes>
        <Footer></Footer>
        </BrowserRouter>
        </>
    )
}

export default App