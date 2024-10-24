import React, { useState } from 'react'
import { FaCloudUploadAlt } from 'react-icons/fa';

const CreateYourDesign = () => {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        setPreview(URL.createObjectURL(selectedFile));
    };

    const handleUploadClick = () => {
        document.getElementById('fileInput').click();
    };

    return (
        <div className=''>
            <div className='bg-cover bg-center md:pt-40 pt-60 pb-10 md:-mt-20 -mt-40' style={{ backgroundImage: `url('https://res.cloudinary.com/df8vrgj1b/image/upload/v1729770076/assets/toc4fxv0n97liv7cyrne.jpg')` }}>
                <h1 className='md:text-6xl text-3xl michroma-regular md:text-white text-gray-200 md:mt-40 px-3 md:p-0 mt-20'>Got your own <span className='text-red-800 md:text-white font-bold md:font-normal'>design</span> in mind?</h1>

                <div className='flex justify-between mt-80 mb-20 bg-white md:overflow-visible overflow-hidden'>
                    <div className='md:w-1/2 md:ml-20 md:mr-80 bg-white px-5 pt-5 pb-10 -rotate-6 shadow-2xl z-10 overflow-hidden mt-40 md:mt-0'>
                        <img src='https://res.cloudinary.com/df8vrgj1b/image/upload/v1729770071/assets/ucrmdgyefnpk2iiolhhu.jpg'></img>
                    </div>
                    <div className='md:w-1/2 z-20 '>
                        <h1 className='md:mt-10 mt-0 mb-5 md:text-3xl text-2xl montserrat-Italic pt-10 md:-ml-80 -ml-80 text-red-900 md:mr-0'>Wanna rock the same dress as your favorite celebrity?</h1>
                        <h1 className='md:text-6xl text-4xl montserrat-Italic md:-ml-80 text-slate-900 z-20 md:z-0 -ml-80 md:mt-0 mt-96 md:pt-7 pt-16 -rotate-6 mr-20 md:mr-0 md:rotate-0 mb-5 md:mb-0'><span className='text-gray-600'>Upload</span> the dress, </h1>
                        <h1 className='md:text-4xl text-2xl montserrat-Italic pl-10 md:-ml-80 -ml-80 text-slate-900 bg-white md:bg-transparent shadow-2xl md:shadow-none'>and let our top <span className='text-gray-600'>designers</span> bring it to life with their best <span className='text-gray-600'>Offers !</span></h1>
                        <div className='md:mr-40 md:-ml-40 -ml-60 mr-10 md:mt-20 mt-5 mb-10 md:mb-0 -rotate-6 md:rotate-0'>
                            <div
                                className='border-4 border-dashed border-blue-500 rounded-lg p-10 text-center cursor-pointer hover:bg-blue-100 transition-all duration-300'
                                onClick={handleUploadClick}
                            >
                                <FaCloudUploadAlt className='md:text-6xl mb-3 text-blue-500' />
                                <p className='md:text-lg text-sm text-gray-600'>Click or Drag to Upload Your Design</p>
                                <input
                                    id='fileInput'
                                    type='file'
                                    accept='image/*'
                                    onChange={handleFileChange}
                                    className='hidden'
                                />
                            </div>
                            {preview && (
                                <div className='mt-10'>
                                    <img src={preview} alt="Preview" className='rounded shadow-2xl' style={{ width: '200px', height: '200px' }} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='flex justify-between mt-20 mb-40 pb-10 bg-white overflow-hidden md:overflow-visible'>

                    <div className='md:w-1/2 z-10 md:z-0'>
                        <h1 className='md:text-6xl text-2xl montserrat-Italic md:pt-10 md:-mr-80 ml-5 -mr-60 text-slate-900 md:mt-20 mt-80 rotate-6 md:rotate-0 bg-white md:bg-transparent shadow-2xl md:shadow-none'><span className='text-gray-600'>Upload</span> the design sketch, </h1>
                        <h1 className='md:text-4xl montserrat-Italic pl-10 md:-mr-80 text-slate-900 md:ml-0 md:mt-0 rotate-6 md:rotate-0 z-10 md:z-0 shadow-2xl md:shadow-none mt-5 ml-10 -mr-60'>get instant estimates from  <span className='text-gray-600'>designers</span> ready to bring your vision to  <span className='text-gray-600'>life!</span></h1>
                        <div className='md:ml-40 ml-20 -mr-60 md:-mr-40 md:mt-20 mt-10 rotate-6 md:rotate-0'>
                            <div
                                className='border-4 border-dashed border-black rounded-lg p-10 text-center cursor-pointer hover:bg-blue-100 transition-all duration-300'
                                onClick={handleUploadClick}
                            >
                                <FaCloudUploadAlt className='md:text-6xl mb-3 text-blue-500' />
                                <p className='md:text-lg text-gray-600'>Click or Drag to Upload Your Design</p>
                                <input
                                    id='fileInput'
                                    type='file'
                                    accept='image/*'
                                    onChange={handleFileChange}
                                    className='hidden'
                                />
                            </div>
                            {preview && (
                                <div className='mt-10'>
                                    <img src={preview} alt="Preview" className='rounded shadow-2xl' style={{ width: '200px', height: '200px' }} />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='md:w-1/2 md:mr-20 md:ml-80 bg-white px-5 pt-5 md:pb-10 rotate-6 shadow-2xl z-0'>
                        <img src='https://res.cloudinary.com/df8vrgj1b/image/upload/v1729770068/assets/tqtixxxshjlsg1aug1cj.jpg'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateYourDesign
