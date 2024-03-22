import { useState } from 'react'
import logo from '../assets/wiilogo.png';

function Navbar() {

    return (
        <>
            <div className="text-white w-screen flex justify-center items-center h-40 bg-brandPurple">
                <div className=''>
                    <img src={logo} className=' scale-75' />
                </div>
                <div>
                    <div className='h-full'>
                        <h1 className='text-white text-5xl'>whatitis<span className='text-brandGreen'>.media</span></h1>
                    </div>
                    <p className=''>organic viral<span className='text-brandGreen'>ity spimplified</span></p>
                </div>
            </div>

            <div className="h-14 bg-gradient-to-r from-slate-100 to-brandGreen w-screen"></div>
        </>
    )
}

export default Navbar;
