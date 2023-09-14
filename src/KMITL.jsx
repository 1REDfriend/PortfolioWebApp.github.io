import React from 'react';
import { useNavigate  } from 'react-router-dom';

function KMITL() {
  const navigate  = useNavigate ();

  return (
    <>
      <div className='text-left ease-in-out duration-700 mt-3'>
        <button className='bg-orange-500 hover:bg-white hover:text-black' onClick={() => { navigate(-1); }}>
          BACK
        </button>
      </div>
      <div className='flex ease-in-out duration-700 w-auto h-fit outline outline-orange-800 scale-100 hover:scale-95 hover:outline-orange-300 m-10'>
        <div className='ease-in-out duration-700 pr-3'>
          <img className='ease-in-out duration-700' src="src\assets\1.png" alt="" />
        </div>
        <div className='ease-in-out duration-700'>
          <img className='ease-in-out duration-700' src="src\assets\2.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default KMITL;
