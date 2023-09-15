import { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import OtherPage from './KMITL.jsx'

function App() {
  const [text, setText] = useState('7/6/2566')

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className='flex'>
            <div className="ease-in-out duration-700 hover:p-4 hover:outline-orange-400 rounded-lg p-5 outline outline-1 outline-orange-600 h-auto bg-neutral-700 hover:shadow-lg shadow-black drop-shadow-lg hover:text-orange-600 hover:scale-105 hover:rotate-2 ml-3" style={{ width: '18rem' }}>
              <img className="ease-in-out duration-700 card-img-top rounded-lg hover:-rotate-2" src="src/assets/LINE_ALBUM_รูปนร.ทำบอร์ด_๒๓๐๖๑๒.jpg" alt="profile" />
              <div className="ease-in-out m-5 ml-1">
                <h2 className="card-title font-bold">PORTFOLIO</h2>
                <p className="card-text text-sm">KMITL</p>
                <p className="card-text text-sm">นายศุภกร พิพิธกุล</p>
              </div>
              <div className='ease-in-out duration-700 text-center m-2 hover:-rotate-2'>
                <Link to="/KMITL" className=' ease-in-out duration-700 text-white hover:text-green-500'>
                  <button type="submit" className='ease-in-out duration-700 border-2 hover:border-green-500 w-full bg-orange-600 rounded-full'>VIEW</button>
                </Link>
              </div>
              <div>
                <p className='text-center text-sm text-gray-500 -m-2'>{text}</p>
              </div>
            </div>
          </div>
        } />
        <Route path="/KMITL" element={<OtherPage />} />
      </Routes>
    </Router>
  )
}

export default App
