import React from 'react';
import Slider from 'react-slick';
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
      <section className='bg-cover bg-center md:min-h-[calc(100vh)] min-h-[calc(90vh-110px)] pt-10 pb-10 md:-mt-20 -mt-40' style={{ backgroundImage: `url(https://res.cloudinary.com/df8vrgj1b/image/upload/v1729770082/assets/eqfltjgvd2ykkzhaltzq.jpg)` }}>
        <h1 className='ml-5 md:ml-0 flex justify-center text-white md:text-7xl text-5xl michroma-regular uppercase mt-60'>Aura Threads</h1>
        <h1 className='ml-5 md:ml-0 flex justify-center text-white md:text-4xl text-2xl mt-5 michroma-regular'>Wear your Imagination</h1>
      </section>

      <div className='h-10 -mb-5'></div>

      <section className="relative md:h-screen md:flex justify-between items-center overflow-hidden md:pt-10">
        <div className="w-1/2 bg-white bg-cover bg-center transform items-center justify-center md:-ml-20 md:-mr-20 md:relative md:-mt-20 ">
          <div className='md:pt-8 -mr-80'>
            <Slider {...settings1}>
              <div className='h-80 px-2'>
                <img src='https://res.cloudinary.com/df8vrgj1b/image/upload/v1729770076/assets/yhrfhq7a9u4g9p2if7zq.jpg' alt="Slide 1" />
              </div>
              <div className='h-80 px-2'>
                <img src='https://res.cloudinary.com/df8vrgj1b/image/upload/v1729770075/assets/i3ssasrikkc84akf5say.jpg' alt="Slide 2" />
              </div>
              <div className='h-80 px-2'>
                <img src='https://res.cloudinary.com/df8vrgj1b/image/upload/v1729770073/assets/ui0wl74zmhoi0ogbeea0.jpg' alt="Slide 3" />
              </div>
              <div className='h-80 px-2'>
                <img src='https://res.cloudinary.com/df8vrgj1b/image/upload/v1729770072/assets/forkq9cykibvhmt6km66.jpg' alt="Slide 4" />
              </div>
            </Slider>
          </div>

          <div className='-mr-80'>
            <Slider {...settings2}>
              <div className='h-80 px-2'>
                <img src='https://res.cloudinary.com/df8vrgj1b/image/upload/v1729770071/assets/ivbvrcvy68xnbaxrbmpm.jpg' alt="Slide 1" />
              </div>
              <div className='h-80 px-2'>
                <img src='https://res.cloudinary.com/df8vrgj1b/image/upload/v1729770070/assets/uw3qiehnxk5chifie532.jpg' alt="Slide 2" />
              </div>
              <div className='h-80 px-2'>
                <img src='https://res.cloudinary.com/df8vrgj1b/image/upload/v1729770064/assets/xpfcbu6sb3unuwjfkdea.jpg' alt="Slide 3" />
              </div>
              <div className='h-80 px-2'>
                <img src='https://res.cloudinary.com/df8vrgj1b/image/upload/v1729770041/assets/clyjyumttdaqgs1zejjw.jpg' alt="Slide 4" />
              </div>
            </Slider>
          </div>
        </div>

        <div className="md:w-1/2 bg-white md:bg-cover md:bg-center md:transform md:rotate-12 flex md:items-center md:justify-center md:-mt-40 md:-mr-20 md:pl-4">
          <div className="absolute top-0 left-0 z-10 md:-rotate-12 md:mt-40 md:px-20 md:py-60">
            <h1 className="md:text-7xl text-3xl md:text-white font-bold montserrat-Italic mt-40 md:mt-0 pt-5 md:pt-0 ml-5 md:ml-0">Unleash Your Inner Vogue</h1>
            <button className='md:mt-10 border-white md:bg-white bg-gray-800 md:text-black text-white md:ml-40 ml-60 px-6 py-3 hover:scale-110 md:hover:bg-gray-800 hover:bg-gray-200 md:hover:text-white hover:text-black'>Shop Now</button>
          </div>
          <img className="opacity-80 hidden md:block" src='https://res.cloudinary.com/df8vrgj1b/image/upload/v1729770074/assets/yzmboyem0ushxxh113ej.jpg' alt="Right" />
        </div>
      </section>

      <div className='h-5 md:h-10 md:mt-0 -mt-20 md:-mb-5 mb-40 z-20 md:bg-white bg-black'></div>

      <section className="relative md:h-screen md:flex justify-between items-center md:overflow-hidden">
        <div className="md:w-1/2 bg-white md:bg-cover md:bg-center md:transform md:-rotate-12 flex md:items-center md:justify-center md:-mt-40 md:-ml-20 md:pr-4 z-20">
          <div className="absolute top-0 left-0 z-10 md:rotate-12 md:mt-60 md:px-20 md:py-60">
            <h1 className="md:text-7xl text-4xl md:text-white font-bold montserrat-Italic -mt-40 md:mt-0 pt-5 md:pt-0 ml-5 md:ml-0">Get your own Customized Mug</h1>
            <button className='md:mt-10 mt-80 border-white md:bg-white bg-gray-800 md:text-black text-white md:mr-40 ml-60 md:ml-0 px-6 py-3 hover:scale-110 md:hover:bg-gray-800 hover:bg-gray-200 md:hover:text-white hover:text-black'>Shop Now</button>
          </div>
          <img className="opacity-80 hidden md:block" src='https://res.cloudinary.com/df8vrgj1b/image/upload/v1729770072/assets/jlzwec4cbba801gskeln.jpg' alt="Right" />
        </div>
        <div className="md:w-1/2 bg-white bg-cover bg-center transform items-center justify-center md:-mr-20 md:-ml-20 md:relative md:-mt-5 md:overflow-visible overflow-hidden">
          <div className='md:pt-8 -ml-80'>
            <Slider {...settings1}>
              <div className='h-80 px-2'>
                <img src='https://res.cloudinary.com/df8vrgj1b/image/upload/v1729770084/assets/gvb1v3qamna9xhf2p6yj.jpg' alt="Slide 1" />
              </div>
              <div className='h-80 px-2'>
                <img src='https://res.cloudinary.com/df8vrgj1b/image/upload/v1729770077/assets/utzayxjqdbbre9vv20gk.jpg' alt="Slide 2" />
              </div>
              <div className='h-80 px-2'>
                <img src='https://res.cloudinary.com/df8vrgj1b/image/upload/v1729770077/assets/gfwbr7njtcy2zpvmuh8z.jpg' alt="Slide 3" />
              </div>
              <div className='h-80 px-2'>
                <img src='https://res.cloudinary.com/df8vrgj1b/image/upload/v1729770069/assets/imkyltj3ng5b6xnpwn5m.jpg' alt="Slide 4" />
              </div>
            </Slider>
          </div>
          <div className='-ml-80 hidden md:block'>
            <Slider {...settings2}>
              <div className='h-80 px-2'>
                <img src='https://res.cloudinary.com/df8vrgj1b/image/upload/v1729770058/assets/i5xcyb8tm6w3j6fqyoiq.jpg' alt="Slide 1" />
              </div>
              <div className='h-80 px-2'>
                <img src='https://res.cloudinary.com/df8vrgj1b/image/upload/v1729770037/assets/vw6etaeeucueay6vaz5d.jpg' alt="Slide 2" />
              </div>
              <div className='h-80 px-2'>
                <img src='https://res.cloudinary.com/df8vrgj1b/image/upload/v1729770028/assets/ho4pxfbungxix1vyk37b.jpg' alt="Slide 3" />
              </div>
              <div className='h-80 px-2'>
                <img src='https://res.cloudinary.com/df8vrgj1b/image/upload/v1729770023/assets/fz9m2nrakixjk5cbhwvn.jpg' alt="Slide 4" />
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <section className='overflow-hidden bg-cover bg-center min-h-[calc(100vh-100px)]  pt-10 pb-10' style={{ backgroundImage: `url('https://res.cloudinary.com/df8vrgj1b/image/upload/v1729770077/assets/zu3tpyldakcvssnwlub6.jpg')` }}>
        <div className=' bg-black py-5'>
          <h1 className='text-6xl ml-5 md:ml-0 md:pr-60 flex justify-center text-white montserrat-Italic uppercase'>Dare to be</h1>
          <h1 className='md:text-7xl text-5xl text-white montserrat-normal1 uppercase md:pl-40 ml-10 flex justify-center'>Diff<span className='text-red-700'>e</span>r<span className='text-yellow-300'>e</span>nt</h1>
        </div>
        <div className={`md:flex space-x-5 pt-10 pb-5`}>
          <div className='bg-white -ml-5 md:-mt-10 -mt-5 px-5 py-3 -rotate-12 h-80 shadow-xl shadow-black hover:scale-110 transition-all'>
            <img className='h-60' src='https://res.cloudinary.com/df8vrgj1b/image/upload/v1729770076/assets/uplkkpnmt4dryxm78ves.jpg'></img>
            <p className='text-black montserrat-normal md:text-2xl text-xl p-4 flex justify-center uppercase'>Discover Best Designers</p>
          </div>
          <div className='bg-white px-5 py-3 md:mt-20 mt-20 rotate-6 h-80 shadow-xl shadow-black hover:scale-110 transition-all'>
            <img className='h-60' src='https://res.cloudinary.com/df8vrgj1b/image/upload/v1729770075/assets/wsocqcfngf9gn1q5woib.jpg'></img>
            <p className='text-black montserrat-normal md:text-2xl text-xl p-4 flex justify-center uppercase'>Sell your Designs</p>
          </div>
          <div className='bg-white px-5 py-3 -rotate-6 h-80 mt-20 md:mt-0 shadow-xl shadow-black hover:scale-110 transition-all'>
            <img className='h-60' src='https://res.cloudinary.com/df8vrgj1b/image/upload/v1729770074/assets/vbzvsp6kgg7dsl4ntg1k.jpg'></img>
            <p className='text-black montserrat-normal text-2xl p-4 flex justify-center uppercase'>Join Us</p>
          </div>
        </div>
      </section>
      <section>
        <h className='text-white'>Hello</h>
      </section>
    </div>
  );
}

export default Home;
