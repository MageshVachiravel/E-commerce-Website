import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Service from "./components/service"
import DailyDeals from "./components/DailyDeals"

const App = ()=>{
    return (
        <>
        <Navbar></Navbar>
        <Home></Home>
        <Service></Service>
        <DailyDeals></DailyDeals>
        </>
    )
}

export default App