import HeroSection from "../Components/HeroSection";
import FeaturesTab from "../Components/FeaturesTab";
import DesktopNavigator from "../ui/DesktopNavigator";
import NavBar from "../ui/NavBar";


const Homepage = () => {

  fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => console.log(data));

  return ( <div>
    <div className="container flex flex-col mx-auto pt-3 px-24">
      <NavBar />
    </div>
    <section className="bg-[#333333] hidden lg:flex mt-4">
      <div className="container flex flex-col mx-auto py-4  px-24">
            <DesktopNavigator />
          </div>
        </section>
    <section className="bg-[#EDF2EE] ">
      <div className="container flex flex-col mx-auto py-4  px-24 ">
        <HeroSection />
      </div>
    </section>
    <section className="bg-white ">
      <div className="container flex flex-col mx-auto py-4  px-24 ">
        <FeaturesTab />
      </div>
    </section>
  </div> );
}
 
export default Homepage;