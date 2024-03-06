import HomeImage from "../assests/HomeImage.png"
import DailyDeals from "./DailyDeals"
import Service from "./service"

const Home = ({ handleClick }) => {
    return(
        <>
        <div className="flex items-center justify-between lg:px-40 px-10 pt-10 bg-[#F3F0F1] overflow-hidden">
            <div className="lg:w-[50%]">
                <p className="text-[70%] tracking-widest font-medium">NEW ARRIVALS</p>
                <h1 className=" font-extrabold text-6xl ">New arrivals <br /> ready to rock</h1>
                <p className="text-sm my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quidem repellendus, veniam sint, culpa cupiditate facilis reprehenderit animi ut error rerum autem.</p>
                <button className="bg-purple-700 text-white px-5 py-2 mb-5">Shop now</button>
            </div>

            <img src={HomeImage} alt="HomePageImage" className=" min-w-96 hidden md:block"/>

        </div>
        <Service></Service>
        <DailyDeals handleClick={handleClick}></DailyDeals>
        </>
    )
}

export default Home