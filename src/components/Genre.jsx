import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import * as THREE from 'three';

function Navbar() {

    return (
        <nav className='mb-2 sm:mb-4'>
            <div className="w-screen flex justify-center py-7">
                <div className='m-2'>
                    <img src={logo} className='h-[100px] w-[100px] sm:h-[150px] sm:w-[150px]' />
                </div>

                <div className='h-min my-auto'>
                    <Link to="/" className=' text-2xl sm:text-4xl'>whatitis<span className='text-brandGreen'>.media</span></Link>
                    <p className='text-sm sm:text-md text-center'>organic vir<span className='text-brandGreen'>ality simplified</span></p>
                </div>
            </div>

            <div className=" bg-gradient-to-r p-2 from-brandGreen to-brandDarkGreen w-screen flex flex-row justify-center gap-4">
                <Link className='text-lg  font-bold hover:text-brandGreen' to="/">home</Link>
                <Link className='text-lg font-bold hover:text-brandGreen' to="/about" >about</Link>
                <Link className='text-lg  font-bold hover:text-brandGreen' to="/clients">clients</Link>
                <Link className='text-lg  font-bold hover:text-brandGreen' to="/contact">contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;
