import React from 'react';
import Slider from 'react-slick';
import right from '../assets/right.jpg';
import home1 from '../assets/home1.jpg';
import home2 from '../assets/home2.jpg';
import home3 from '../assets/home3.jpg';
import home4 from '../assets/home4.jpg';
import home5 from '../assets/home5.jpg';
import home6 from '../assets/home6.jpg';
import home7 from '../assets/home7.jpg';
import home8 from '../assets/home8.jpg';
import mug1 from '../assets/mug1.jpg';
import mug2 from '../assets/mug2.jpg';
import mug3 from '../assets/mug3.jpg';
import mug4 from '../assets/mug4.jpg';
import mug5 from '../assets/mug5.jpg';
import mug6 from '../assets/mug6.jpg';
import mug7 from '../assets/mug7.jpg';
import mug8 from '../assets/mug8.jpg';
import mugmain from '../assets/mugmain1.jpg';
import main from '../assets/main1.jpg';
import section21 from '../assets/Section2-1.jpg';
import section22 from '../assets/Section2-2.jpg';
import section23 from '../assets/Section2-3.jpg';
import section2bg from '../assets/new1.jpg';
import section3 from '../assets/Section3.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings1 = {
    dots: false,
    infinite: true,
    speed: 3500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
  };
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 3500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
  };

  return (
    <div className='pt-4'>
      <section className='bg-cover bg-center min-h-[calc(100vh)]  pt-10 pb-10 -mt-20' style={{ backgroundImage: `url('${main}')` }}>
        <h1 className='flex justify-center text-white text-7xl michroma-regular uppercase mt-60'>Aura Threads</h1>
        <h1 className='flex justify-center text-white text-4xl mt-5 michroma-regular'>Wear your Imagination</h1>
      </section>

      <div className='h-10 -mb-5'></div>

      <section className="relative h-screen flex justify-between items-center overflow-hidden pt-10">
        <div className="w-1/2 bg-white bg-cover bg-center transform items-center justify-center -ml-20 -mr-20 relative -mt-20 ">
          <div className='pt-8 -mr-80'>
            <Slider {...settings1}>
              <div className='h-80 px-2'>
                <img src={home4} alt="Slide 1" />
              </div>
              <div className='h-80 px-2'>
                <img src={home2} alt="Slide 2" />
              </div>
              <div className='h-80 px-2'>
                <img src={home3} alt="Slide 3" />
              </div>
              <div className='h-80 px-2'>
                <img src={home1} alt="Slide 4" />
              </div>
            </Slider>
          </div>

          <div className='-mr-80'>
            <Slider {...settings2}>
              <div className='h-80 px-2'>
                <img src={home5} alt="Slide 1" />
              </div>
              <div className='h-80 px-2'>
                <img src={home6} alt="Slide 2" />
              </div>
              <div className='h-80 px-2'>
                <img src={home7} alt="Slide 3" />
              </div>
              <div className='h-80 px-2'>
                <img src={home8} alt="Slide 4" />
              </div>
            </Slider>
          </div>
        </div>

        <div className="w-1/2 bg-white bg-cover bg-center transform rotate-12 flex items-center justify-center -mt-40 -mr-20 pl-4">
          <div className="absolute top-0 left-0 z-10 -rotate-12 mt-40 px-20 py-60">
            <h1 className="text-7xl text-white font-bold montserrat-Italic">Unleash Your Inner Vogue</h1>
            <button className='mt-10 border-white bg-white text-black ml-40 px-6 py-3 hover:scale-110 hover:bg-gray-800 hover:text-white '>Shop Now</button>
          </div>
          <img className='opacity-80' src={right} alt="Right" />
        </div>
      </section>

      <div className='h-10 -mb-5 z-20'></div>

      <section className="relative h-screen flex justify-between items-center overflow-hidden">
        <div className="w-1/2 bg-white bg-cover bg-center transform -rotate-12 flex items-center justify-center -mt-40 -ml-20 pr-4 z-20">
          <div className="absolute top-0 left-0 z-10 rotate-12 mt-60 px-20 py-60">
            <button className='mt-10 border-white bg-white text-black mr-40 px-6 py-3 hover:scale-110 hover:bg-gray-800 hover:text-white '>Shop Now</button>
          </div>
          <img className='' src={mugmain} alt="Right" />
        </div>
        <div className="w-1/2 bg-white bg-cover bg-center transform items-center justify-center -mr-20 -ml-20 relative -mt-5">

          <div className='pt-8 -ml-80'>
            <Slider {...settings1}>
              <div className='h-80 px-2'>
                <img src={mug4} alt="Slide 1" />
              </div>
              <div className='h-80 px-2'>
                <img src={mug2} alt="Slide 2" />
              </div>
              <div className='h-80 px-2'>
                <img src={mug3} alt="Slide 3" />
              </div>
              <div className='h-80 px-2'>
                <img src={mug1} alt="Slide 4" />
              </div>
            </Slider>
          </div>

          <div className='-ml-80'>
            <Slider {...settings2}>
              <div className='h-80 px-2'>
                <img src={mug5} alt="Slide 1" />
              </div>
              <div className='h-80 px-2'>
                <img src={mug6} alt="Slide 2" />
              </div>
              <div className='h-80 px-2'>
                <img src={mug7} alt="Slide 3" />
              </div>
              <div className='h-80 px-2'>
                <img src={mug8} alt="Slide 4" />
              </div>
            </Slider>
          </div>
        </div>

      </section>
      <section className='bg-cover bg-center min-h-[calc(100vh-100px)]  pt-10 pb-10' style={{ backgroundImage: `url('${section3}')` }}>
        <div className=' bg-black py-5'>
          <h1 className='text-6xl pr-60 flex justify-center text-white montserrat-Italic uppercase'>Dare to be</h1>
          <h1 className='text-7xl text-white montserrat-normal1 uppercase pl-40 flex justify-center'>Diff<span className='text-red-700'>e</span>r<span className='text-yellow-300'>e</span>nt</h1>
        </div>
        <div className={`flex space-x-5 pt-10 pb-5`}>

          <div className='bg-white -ml-5 -mt-10 px-5 py-3 -rotate-12 h-80 shadow-xl shadow-black hover:scale-110 transition-all'>
            <img className='h-60' src={section21}></img>
            <p className='text-black montserrat-normal text-2xl p-4 flex justify-center uppercase'>Discover Best Designers</p>
          </div>
          <div className='bg-white px-5 py-3 mt-20 rotate-6 h-80 shadow-xl shadow-black hover:scale-110 transition-all'>
            <img className='h-60' src={section22}></img>
            <p className='text-black montserrat-normal text-2xl p-4 flex justify-center uppercase'>Sell your Designs</p>
          </div>
          <div className='bg-white px-5 py-3 -rotate-6 h-80 shadow-xl shadow-black hover:scale-110 transition-all'>
            <img className='h-60' src={section23}></img>
            <p className='text-black montserrat-normal text-2xl p-4 flex justify-center uppercase'>Join Us</p>
          </div>


        </div>

      </section>
      <section>
        <h className='text-white' >Hello</h>
      </section>
    </div>
  );
}

export default Home;
