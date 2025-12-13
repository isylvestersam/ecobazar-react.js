

const FeaturesTab = () => {
  return ( <div className="bg-white w-full grid justify-center gap-8 px-4 py-12
      lg:grid-cols-4 md:gap-12 lg:shadow-soft lg:py-8 lg:w-full rounded-xl lg:mx-auto lg:-translate-y-[70%] lg:px-12">
    <div className='flex gap-4 items-center'>
      <img src="/Icons/delivery-truck.svg" className='max-w-8' />
      <div>
        <h3 className='font-semibold lg:text-sm'>Free Shipping</h3>
        <p className='font-light text-gray-500 lg:text-sm'>Free Shipping on all your orders</p>
      </div>
    </div>
    <div className='flex gap-4 items-center '>
      <img src="../Icons/headphone.svg" className='max-w-8' />
      <div>
        <h3 className='font-semibold lg:text-sm'>Customer Support 24/7</h3>
        <p className='font-light text-gray-500 lg:text-sm'>Instant access to Support</p>
      </div>
    </div>
    <div className='flex gap-4 items-center'>
      <img src="/Icons/shopping-bag.svg" className='max-w-8' />
      <div>
        <h3 className='font-semibold lg:text-sm'>100% Secure Payment</h3>
        <p className='font-light text-gray-500 lg:text-sm'>We ensure your money is save</p>
      </div>
    </div>
    <div className='flex gap-4 items-center'>
      <img src="../Icons/package.svg" className='max-w-8' />
      <div>
        <h3 className='font-semibold lg:text-sm'>Money-Back Guarantee</h3>
        <p className='font-light text-gray-500 lg:text-sm'>30 Days Money-Back Guarantee</p>
      </div>
    </div>
  </div> );
}
 
export default FeaturesTab;