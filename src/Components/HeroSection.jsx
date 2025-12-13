import Button from "../ui/Button";


const HeroSection = () => {
  return ( <div className="bg-[#EDF2EE] w-full flex flex-col justify-between pt-12 lg:flex-row items-center lg:py-32" >
    <div className="flex flex-col text-center lg:text-left ">
      <div className="flex flex-col items-center lg:items-start">
        <p className="text-primary text-sm font-medium mb-1 tracking-widest  ">WELCOME TO SHOPERY</p>
        <h3 className="w-[75%] text-4xl font-semibold mb-1 lg:mb-3 lg:text-5xl leading-13 tracking-wide">Fresh & Healthy Organic Food</h3>
        <p className="text-sm w-[70%]  text-gray-500">Free Shipping on all your orders, we deliver, you enjoy!</p>
      </div>
      <div className="mt-5 flex flex-col text-center gap-3 lg:text-left">
        <h3 className="text-3xl">Sale up to <span className="font-semibold text-warning">30% OFF</span></h3>
        <Button classname='flex gap-3 mx-auto lg:mx-0 lg:mr-auto lg:py-3 lg:px-7'>
          Shop now
          <img src="/Icons/arrow-next.svg" alt="" />
        </Button>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center w-[40%]">
      <img src="/Images/mobile-herosection-image.png" className="md:w-[50%] lg:hidden min-w-102" />
      <img src="/Images/desktop-herosection-image.png" className="hidden lg:flex min-w-102" />
    </div>
  </div> );
}
 
export default HeroSection;