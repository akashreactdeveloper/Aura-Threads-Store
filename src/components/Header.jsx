import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegCircleUser } from "react-icons/fa6";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className='h-20 bg-transparent fixed w-full z-50 text-white shadow-lg'>
      <div className='h-full mx-auto flex items-center justify-between px-10 md:px-20'>
        <div className='text-3xl font-bold cursor-pointer montserrat-Italic' onClick={() => navigate("/")}>
          Aura Threads
        </div>
        <nav className='flex items-center gap-5 md:gap-7'>
          <ul className='flex space-x-5 md:space-x-10'>
            {['Home', 'Create your Design', 'Designers Section', 'Tailors', 'Creative Mugs'].map((item, index) => (
              <li
                key={index}
                className='uppercase cursor-pointer transition transform duration-300 ease-in-out hover:text-yellow-300 hover:scale-105'
                onClick={() => navigate(`/${item.toLowerCase().replace(/\s+/g, '')}`)}
              >
                {item}
              </li>
            ))}
            <li>
              <div className='text-2xl cursor-pointer relative flex justify-center'>
                  <FaRegCircleUser />
                </div>
                </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
