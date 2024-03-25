import { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/wiilogo.png';

function Navbar() {

    return (
        <nav className='mb-4'>
            <div className="w-screen flex justify-center py-7">
                <div className='h-14 w-14 m-2'>
                    <img src={logo} className='' />
                </div>

                <div className='h-min my-auto'>
                    <Link to="/" className=' text-4xl'>whatitis<span className='text-brandGreen'>.media</span></Link>
                    <p className='text-md text-center'>organic vir<span className='text-brandGreen'>ality simplified</span></p>
                </div>
            </div>

            <div className="bg-gradient-r p-2 from-brandGreen to-brandDarkGreen w-screen flex flex-row justify-center gap-2">
                <Link className='text-lg  font-bold hover:opacity-75' to="/">home</Link>
                <p className='text-brandGreen my-auto'>|</p>
                <Link className='text-lg font-bold hover:opacity-75' to="/about" >about</Link>
                <p className='text-brandGreen my-auto'>|</p>
                <Link className='text-lg  font-bold hover:opacity-75' to="/clients">clients</Link>
                <p className='text-brandGreen my-auto font-semibold'>|</p>
                <Link className='text-lg  font-bold hover:opacity-75' to="/contact">contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;
