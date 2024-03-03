import Navbar from "./components/Navbar"
import Home from "./components/Home"
import { BrowserRouter , Routes , Route } from "react-router-dom"
import Cart from "./components/Cart"
import Login from "./components/Login"
import Register from "./components/Register"


const App = ()=>{

    return (
        <>
        <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default App