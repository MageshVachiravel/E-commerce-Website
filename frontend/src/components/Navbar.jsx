const Navbar = ()=>{


    const handleNavbar = () => {
        const navbar = document.getElementById("navbar")
        navbar.classList.remove("-mr-72");
    }

    const handleClose = ()=> {
        const navbar = document.getElementById("navbar")
        navbar.classList.add("-mr-72");
    }

    return (
        <>
        <div className="flex lg:justify-around justify-between items-center relative py-5 lg:px-10 px-5 bg-white shadow-md">
            <h1 className="text-3xl font-bold">Clear Cart</h1>
            <ul className="gap-10 font-semibold hidden lg:flex">
                <li className="hover:cursor-pointer hover:text-gray-600 underline-offset-8 underline">Home</li>
                <li className="hover:cursor-pointer hover:text-gray-600">Shop</li>
                <li className="hover:cursor-pointer hover:text-gray-600">Catalogue</li>
                <li className="hover:cursor-pointer hover:text-gray-600">New Arrivals</li>
                <li className="hover:cursor-pointer hover:text-gray-600">Contact</li>
            </ul>
            <div className="flex gap-8 text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="hover:-translate-y-1 transition-all cursor-pointer" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14"/></svg>
                <div className="relative hover:-translate-y-1 transition-all">
                <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M7 22q-.825 0-1.412-.587T5 20q0-.825.588-1.412T7 18q.825 0 1.413.588T9 20q0 .825-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20q0-.825.588-1.412T17 18q.825 0 1.413.588T19 20q0 .825-.587 1.413T17 22M6.15 6l2.4 5h7l2.75-5zM5.2 4h16.5l-4.975 9H8.1L7 15h12v2H3.625L6.6 11.6L3 4H1V2h3.25zm3.35 7h7z"/></svg>
                <span className="absolute -right-2 -top-2 bg-blue-400 rounded-[50%] w-5 h-1 text-center text-sm pb-5">0</span>
                </div>
                <svg className="hover:-translate-y-1 transition-all cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M9.775 12q-.9 0-1.5-.675T7.8 9.75l.325-2.45q.2-1.425 1.3-2.363T12 4q1.475 0 2.575.938t1.3 2.362l.325 2.45q.125.9-.475 1.575t-1.5.675zm0-2h4.45L13.9 7.6q-.1-.7-.637-1.15T12 6q-.725 0-1.263.45T10.1 7.6zM4 20v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20zm2-2h12v-.8q0-.275-.137-.5t-.363-.35q-1.35-.675-2.725-1.012T12 15q-1.4 0-2.775.338T6.5 16.35q-.225.125-.363.35T6 17.2zm6 0"/></svg>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" onClick={handleNavbar} className="block lg:hidden cursor-pointer" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 6h18M3 12h18M3 18h18"/></svg>
        
            <div className=" w-64 top-0 absolute z-10 right-0 -mr-72 bg-white transition-all duration-1000" id="navbar">

            <div className="absolute right-2 top-2 bg-white cursor-pointer" onClick={handleClose}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z"/></svg>
            </div>

            <div className=" min-h-screen mt-28 bg-white">
            <ul className="gap-10 font-semibold flex-col flex text-center">
                <li className="hover:cursor-pointer hover:text-gray-600 underline-offset-8 underline">Home</li>
                <li className="hover:cursor-pointer hover:text-gray-600">Shop</li>
                <li className="hover:cursor-pointer hover:text-gray-600">Catalogue</li>
                <li className="hover:cursor-pointer hover:text-gray-600">New Arrivals</li>
                <li className="hover:cursor-pointer hover:text-gray-600">Contact</li>
            </ul>
            </div>
        </div>

        </div>

       
        </>
        
    )
    
}

export default Navbar