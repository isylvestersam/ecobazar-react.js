import { Features } from "tailwindcss"
import HeroSection from "./Components/HeroSection"
import Login from "./Pages/Login"
import BreadCrumbs from "./ui/BreadCrumbs"
import Button from "./ui/Button"
import StoreLocation from "./ui/StoreLocation"
import FeaturesTab from "./Components/FeaturesTab"
import NavBar from "./ui/NavBar"
import DesktopNavigator from "./ui/DesktopNavigator"
import Homepage from "./Pages/Homepage"
import ProductCard from "./ui/ProductCard"
import MobileFeaturesSlider from "./ui/FeaturesSlider"

function App() {

  return (
    <>
      <section className="relative">
        <div className="container flex flex-col mx-auto pt-3 px-8">
          <StoreLocation />
        </div>

        {/* Diver Line */}
        <div className="hidden w-full h-px border-b border-b-gray-200 mt-3 mb-5 lg:flex">
        </div>

        {/* <div className="container flex flex-col mx-auto px-4">
          <Login />
        </div> */}

        <Homepage />
        
        
      </section> 
      
      
    </>
  )
}

export default App
