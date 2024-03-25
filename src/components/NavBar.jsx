
import { Link } from 'react-router-dom';
import logo from '../assets/wiilogo.svg';

function Navbar() {

    return (
        <nav className='mb-4'>
            <div className="w-screen flex justify-center py-7">
                <div className='m-2'>
                    <img src={logo} className='h-[150px] w-[150px] ' />
                </div>

                <div className='h-min my-auto'>
                    <Link to="/" className=' text-4xl'>whatitis<span className='text-brandGreen'>.media</span></Link>
                    <p className='text-md text-center'>organic vir<span className='text-brandGreen'>ality simplified</span></p>
                </div>
            </div>

            <div className="bg-gradient-r p-2 from-brandGreen to-brandDarkGreen w-screen flex flex-row justify-center gap-2">
                <Link className='text-lg  font-bold hover:text-brandGreen' to="/">home</Link>
                <p className='text-brandGreen my-auto font-semibold'>|</p>
                <Link className='text-lg font-bold hover:text-brandGreen' to="/about" >about</Link>
                <p className='text-brandGreen my-auto font-semibold'>|</p>
                <Link className='text-lg  font-bold hover:text-brandGreen' to="/clients">clients</Link>
                <p className='text-brandGreen my-auto font-semibold'>|</p>
                <Link className='text-lg  font-bold hover:text-brandGreen' to="/contact">contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;
