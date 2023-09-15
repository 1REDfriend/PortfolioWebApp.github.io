import React from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from './assets/1.png'; // Import the image using a relative path
import image2 from './assets/2.png';

function KMITL() {
  const navigate = useNavigate();

  return (
    <>
      <div className='text-left ease-in-out duration-700 mt-3 mb-3'>
        <button className='bg-orange-500 hover:bg-white hover:text-black' onClick={() => { navigate(-1); }}>
          BACK
        </button>
      </div>
      <div className='ease-in-out duration-700 grid grid-cols-2'>
        <div className=' ease-in-out duration-700 w-auto h-fit outline outline-orange-800 scale-100 hover:scale-95 hover:outline-orange-300 m-1'>
          <div className='ease-in-out duration-700'>
            <img className='ease-in-out duration-700' src={image1} alt="" />
          </div>

        </div>
        <div className=' ease-in-out duration-700 w-auto h-fit outline outline-orange-800 scale-100 hover:scale-95 hover:outline-orange-300 m-1'>
          <div className='ease-in-out duration-700'>
            <img className='ease-in-out duration-700' src={image2} alt="" />
          </div>
        </div>
        <div className=' ease-in-out duration-700 w-auto h-fit outline outline-orange-800 scale-100 hover:scale-95 hover:outline-orange-300 m-1'>
          <div className='ease-in-out duration-700'>
            <img className='ease-in-out duration-700' src={image1} alt="" />
          </div>

        </div>
        <div className=' ease-in-out duration-700 w-auto h-fit outline outline-orange-800 scale-100 hover:scale-95 hover:outline-orange-300 m-1'>
          <div className='ease-in-out duration-700'>
            <img className='ease-in-out duration-700' src={image2} alt="" />
          </div>
        </div>
      </div>

    </>
  )
}

export default KMITL;
