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


const App = ()=>{

    return (
        <>
        <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/BestSellers" element={<BestSellers />}></Route>
            <Route path="/SaleItems" element={<SaleItems />}></Route>
        </Routes>
        <Footer></Footer>
        </BrowserRouter>
        </>
    )
}

export default App