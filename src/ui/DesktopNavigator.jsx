import { useState } from 'react';


const DesktopNavigator = () => {
  const [currPage, setPage] = useState('Home');
  const pages = ['Home', 'Shop', 'Pages', 'Blog', 'About Us', 'Contact Us']

  function handleSelectPage(page) {
    setPage(page)
  }



  return ( <div className=' flex items-center justify-between'>
    <div className='flex gap-7 items-center'>
      {
        pages.map((page) => (
          <button className='flex gap-1 items-center'
          key={page}
            onClick={() => handleSelectPage(page)}
          >
            <p className={
            currPage === page 
              ? 'text-white text-sm'
              : 'text-gray-500 text-sm hover:text-gray-300 animate'}> {page} </p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={
              currPage === page 
              ? 'white'
              : 'grey'
            } className="size-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
        ))
      }
    </div>
    <div className='flex gap-2 items-center'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke='white' className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>

      <p className='text-white text-sm'>(219) 555-0114</p>
    </div>
  </div> );
}

export default DesktopNavigator;