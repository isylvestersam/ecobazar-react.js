import StoreLocation from "./ui/StoreLocation"
import FeaturesTab from "./Components/FeaturesTab"
import Homepage from "./Pages/Homepage"

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
