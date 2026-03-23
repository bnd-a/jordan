import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Header from "../images/Header.png"
import jordanMVP92 from "../images/jordanMVP92.png"

const Home = () => {
    return (
        <div>
            <Navbar/>
            <h1 className=" py-10 text-7xl font-bold">JORDAN <span className="text-red-500">NEW COLLLECTION</span> AVAILABLE</h1>
             <img src={Header} alt="header image" />
             <div className="w-xl flex flex-col">
                <img src={jordanMVP92} alt="" />
                <p className="text-xl">Air Jordan MVP 92</p>
                <p className="text-lg">$145</p>
                </div>
                <div className="flex flex-between">
                <div className="bg-black rounded-full w-10 h-10 text-white text-center">+</div>
                </div>
            <Footer/>
        </div>
    )
}
export default Home