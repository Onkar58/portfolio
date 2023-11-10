import React from 'react'
import bannerImg from './assests/images/banner.png'
// import bannerImg2 from './assests/images/banner.png'
import { HiOutlineDownload } from 'react-icons/hi'
import profile from './assests/images/Profile.png'

const Banner = ({ darkTheme }) => {
    const style = {
        'backgroundImage': `url(${darkTheme ? bannerImg : ""})`,
        'backgroundSize': 'cover',
        'backgroundPosition': 'center center',
        'backgroundRepeat': 'no-repeat',
    }
    const download1 = () => {
        alert("Thanks for Downloading my Resume")
    }
    return (
        <div className='relative w-full h-[200px] py-4 flex items-center justify-center' style={style} id='home'>
            <div
                className='absolute z-1 w-[90%] h-[80%] bg-gradient-to-r from-[#53535346] to-[#2e2e2e5d] 
                           rounded-[15px]  top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] pointer-events-none'
            >
            </div>
            <div className='flex w-[90%] h-[80%] items-center justify-start md:gap-10'>
                <img src={profile} alt='Profile' className='drop-shadow-[20px]' style={{ filter: "drop-shadow(0px 0px 5px  #fff)" }} />
                <h1 className='font-awesome-posem text-[40px] md:text-[60px]  text-center m-0 leading-none'>Onkar Waghmode</h1>
                <button
                    className='text-[30px]'
                    onClick={download1}
                ><HiOutlineDownload />
                    {/* {`${width >= 600 ? "Resume" : ""}`} */}
                </button>
            </div>
        </div>
    )
}

export default Banner