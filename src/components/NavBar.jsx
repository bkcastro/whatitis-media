import { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/wiilogo.png';

function Navbar() {

    return (
        <nav className=''>
            <div className="text-white w-screen flex justify-center bg-brandPurple py-7">
                <div className='h-14 w-14 m-2'>
                    <img src={logo} className='' />
                </div>

                <div className='h-min my-auto'>
                    <Link to="/" className='text-white text-3xl'>whatitis<span className='text-brandGreen'>.media</span></Link>
                    <p className='text-sm text-center'>organic virality<span className='text-brandGreen'> simplified</span></p>
                </div>
            </div>

            <div className="bg-gradient-to-r p-2 from-slate-100 to-brandGreen w-screen flex flex-row gap-2">
                <Link className='text-lg text-brandPurple font-bold hover:opacity-75' to="/about" >about</Link>
                <p className='text-brandPurple my-auto font-semibold'>|</p>
                <Link className='text-lg text-brandPurple font-bold hover:opacity-75' to="/clients">clients</Link>
                <p className='text-brandPurple my-auto font-semibold'>|</p>
                <Link className='text-lg text-brandPurple font-bold hover:opacity-75' to="/contact">book a call</Link>
            </div>
        </nav>
    )
}

export default Navbar;
