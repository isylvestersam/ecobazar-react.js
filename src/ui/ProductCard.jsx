

const ProductCard = ( {image, title, price, rating} ) => {
  return ( <div className='relative group flex flex-col justify-between border border-gray-300 px-4 pb-4 h-82 rounded-xl w-58 hover:scale-[0.99] shadow-soft hover:border-primary hover:shadow-none animate lg:h-72'> 
    <img src={image} alt="" />
    <div className=''>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col items-start'>
          <h4 className='text-gray-500'> {title} </h4>
          <h2 className='text-xl mb-2'>${price}</h2>
          <div className='flex gap-1'>
            {[...Array(5)].map((_, i) => {
                const starNumber = i + 1;
                if (rating >= starNumber) {
                  // Full star
                  return <img key={i} src="/Icons/star-icon.svg" alt='full star' className='w-3' />;
                } else if (rating >= starNumber - 0.5) {
                  // Half star
                  return <img key={i} src="/Icons/half-star.svg" alt='half star'  className='w-3' />;
                } else {
                  // Empty star
                  return <img key={i} src="/Icons/unstar.svg" alt='empty star' className='w-3' />;
                }
              })}
          </div>
        </div>
        <button className='bg-gray-300 group p-2 rounded-full hover:shadow-soft hover:bg-primary-dark transition-all hover:bg-primary hover:text-white animate'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
        </button>
      </div>

      
      
    </div>
    <button className='absolute border border-gray-300 hidden group-hover:block top-4 right-4 bg-gray-100 p-2 rounded-full hover:shadow-soft hover:bg-primary-dark transition-all hover:bg-primary hover:border-transparent animate hover:text-white '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="size-6  " stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      </button>
      <button className='absolute border border-gray-300 hidden group-hover:block top-16 right-4 bg-gray-100 p-2 rounded-full hover:shadow-soft hover:bg-primary-dark transition-all hover:border-transparent hover:bg-primary animate hover:text-white '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6  ">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      </button>
  </div> );
}
 
export default ProductCard;