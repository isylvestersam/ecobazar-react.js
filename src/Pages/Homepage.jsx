import HeroSection from "../Components/HeroSection";
import FeaturesTab from "../Components/FeaturesTab";
import DesktopNavigator from "../ui/DesktopNavigator";
import NavBar from "../ui/NavBar";
import FeaturedProducts from "../Components/FeaturedProducts";
import CompactCard from "../ui/CompactCard";
import Showcase from "../ui/Showcase";
import TopCategoryCard from "../ui/TopCategoryCard";
import TopCategory from "../Components/TopCategory";
import TestimonialCard from "../ui/TestimonialCard";


const Homepage = () => {

  return ( <div className="pb-16">
    <div className="container flex flex-col mx-auto pt-3 px-4  lg:px-24 ">
      <NavBar />
    </div>
    <section className="bg-[#333333] hidden lg:flex mt-4">
      <div className="container flex flex-col mx-auto py-4  px-4  lg:px-24 ">
            <DesktopNavigator />
          </div>
        </section>
    <section className="bg-[#EDF2EE] ">
      <div className="container flex flex-col mx-auto py-4  px-4  lg:px-24  ">
        <HeroSection />
      </div>
    </section>
    <section className="bg-white ">
      <div className="container flex flex-col mx-auto py-4  px-4  lg:px-24  ">
        <FeaturesTab />
      </div>
    </section>
    <div className="container flex flex-col mx-auto py-4 px-4  lg:px-24 ">
      <FeaturedProducts />
      <Showcase />
      <TopCategory />
      <TestimonialCard />
    </div>
  </div> );
}
 
export default Homepage;