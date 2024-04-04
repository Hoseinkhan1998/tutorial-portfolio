import React from 'react';
import Moh from './images/moh.jpg'
import Social from '../components/Social';

const Sidebar = () => {
    return (
        <div className='flex flex-col mt-14 w-full' >

            <div className='w-full flex flex-col justify-center items-center'>

                <img src={Moh} style={{ width: '200px', height: '200px', borderRadius: '20px', marginBottom: '-90px', zIndex: '1' }} />

                <div className='w-full flex flex-col justify-center items-center'
                    style={{ padding: '0% 7%', marginBottom: '50px', backgroundColor: 'rgba(255, 255, 255, 1)', borderRadius: '20px', boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.25)' }}>

                    <div className='w-full mt-28 text-center' >

                        <p className='w-full font-semibold' style={{ color: '#0B0909', fontSize: '28px', fontFamily: 'Raleway' }}>Mohammad Mazinani</p>
                        <p style={{ fontSize: '16px', color: 'rgba(11, 9, 9, 0.5)' }}>FullStack Developer</p>
                        <div className='mt-4' style={{ padding: '0% 5%' }}> <Social /> </div>

                    </div>

                    {/* Phone */}

                    <div className='w-full flex justify-center items-center flex-col mt-6 mb-16' style={{ backgroundColor: 'rgba(24, 119, 242, 0.1)', borderRadius: '20px' }}>
                        <div className='w-full flex flex-row  items-center mt-6' style={{}}>
                            <div className='pl-10'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="21" viewBox="0 0 12 21" fill="none">
                                    <path d="M10 0.5H2C1.46957 0.5 0.960859 0.710714 0.585786 1.08579C0.210714 1.46086 0 1.96957 0 2.5V18.5C0 19.0304 0.210714 19.5391 0.585786 19.9142C0.960859 20.2893 1.46957 20.5 2 20.5H10C10.5304 20.5 11.0391 20.2893 11.4142 19.9142C11.7893 19.5391 12 19.0304 12 18.5V2.5C12 1.96957 11.7893 1.46086 11.4142 1.08579C11.0391 0.710714 10.5304 0.5 10 0.5ZM7 19.5H5V18.5H7V19.5ZM10 17.5H2V3.5H10V17.5Z" fill="url(#paint0_linear_27_10)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_27_10" x1="6" y1="0.5" x2="6" y2="20.5" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FF9A1A" />
                                            <stop offset="1" stop-color="#EC1C09" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            <div className='flex flex-col w-full ml-6'>
                                <p style={{ fontSize: '14px', color: 'rgba(26, 16, 3, 0.5)', fontFamily: 'Raleway' }}>Phone</p>
                                <p style={{ fontSize: '0.75vw', color: 'rgba(0, 0, 0, 1)', fontFamily: 'Raleway', fontWeight: 'bold' }}>+989203101785</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center mt-7' style={{ width: '80%', height: '1px', backgroundColor: 'rgba(227, 227, 227, 1)' }}></div>

                        {/* email */}


                        <div className='w-full flex flex-row  items-center mt-8' style={{}}>
                            <div className='pl-10'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M0.969999 5.65L10 0L19.03 5.65C19.61 6 20 6.63 20 7.36V17.36C20 18.46 19.1 19.36 18 19.36H2C0.9 19.36 0 18.46 0 17.36V7.36C0 6.63 0.389999 6 0.969999 5.65ZM2 17.36H18V9.36L10 14.36L2 9.36V17.36ZM10 12.36L18 7.36L10 2.36L2 7.36L10 12.36Z" fill="#FF9C1B" />
                                </svg>
                            </div>

                            <div className='flex flex-col w-full ml-6 justify-center'>
                                <p style={{ fontSize: '14px', color: 'rgba(26, 16, 3, 0.5)', fontFamily: 'Raleway' }}>Email</p>
                                <p style={{ fontSize: '0.75vw', color: 'rgba(0, 0, 0, 1)', fontFamily: 'Raleway', fontWeight: 'bold' }}>Hosein.mazinani.1998@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center mt-7' style={{ width: '80%', height: '1px', backgroundColor: 'rgba(227, 227, 227, 1)' }}></div>

                        {/* Location */}


                        <div className='w-full flex flex-row  items-center mt-8' style={{}}>
                            <div className='pl-10'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" viewBox="0 0 16 22" fill="none">
                                    <path d="M8.25 1C11.9766 1 15 3.87766 15 7.42188C15 11.5 10.5 17.9627 8.84766 20.1948C8.77907 20.2891 8.68917 20.3657 8.58531 20.4186C8.48144 20.4715 8.36655 20.499 8.25 20.499C8.13345 20.499 8.01856 20.4715 7.91469 20.4186C7.81083 20.3657 7.72093 20.2891 7.65234 20.1948C6 17.9636 1.5 11.5033 1.5 7.42188C1.5 3.87766 4.52344 1 8.25 1Z" stroke="#E80505" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>

                            <div className='flex flex-col w-full ml-6'>
                                <p style={{ fontSize: '14px', color: 'rgba(26, 16, 3, 0.5)', fontFamily: 'Raleway' }}>Location</p>
                                <p style={{ fontSize: '0.75vw', color: 'rgba(0, 0, 0, 1)', fontFamily: 'Raleway', fontWeight: 'bold' }}>Iran,Tehran</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center mt-7' style={{ width: '80%', height: '1px', backgroundColor: 'rgba(227, 227, 227, 1)' }}></div>

                        {/* download */}
                        <div className='w-full flex mt-5 mb-7' style={{ padding: '0% 20%' }}>
                            <div className='download w-full flex flex-row justify-center items-center'
                                style={{ borderRadius: '20px', padding: '5% 0%' }}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.979 19.804 4.587 19.412C4.195 19.02 3.99934 18.5493 4 18V15H6V18H18V15H20V18C20 18.55 19.804 19.021 19.412 19.413C19.02 19.805 18.5493 20.0007 18 20H6Z" fill="#F2F7FC" />
                                    </svg>
                                </div>
                                <p style={{ marginLeft: '20px', fontSize: '12px', fontFamily: 'Raleway', color: '#F2F7FC' }}>Download Resume</p>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Sidebar