
import { Link } from 'react-router-dom';
import logo from '../assets/wiilogo.svg';

function Navbar() {

    return (
        <nav className='mb-2 sm:mb-4'>
            <div className="w-screen flex justify-center">
                <div className=''>
                    <img src={logo} className='h-[120px] w-[120px] sm:h-[150px] sm:w-[150px] md:h-[175px] md:w-[175px] lg:h-[200px] lg:w-[200px]' />
                </div>

                <div className='h-min my-auto'>
                    <Link to="/" className='text-3xl sm:text-5xl md:text-6xl font-bold'>whatitis<span className='text-brandGreen'>.media</span></Link>
                    <p className='text-md sm:text-xl md:text-2xl lg:text-3xl text-center font-bold'>organic vir<span className='text-brandGreen'>ality simplified</span></p>
                </div>
            </div>

            <div className="text-brandPurple bg-gradient-to-r p-2 from-brandGreen to-brandDarkGreen w-screen flex flex-row justify-center gap-4">
                <Link className='text-lg  font-bold hover:text-white' to="/">home</Link>
                <Link className='text-lg font-bold hover:text-white' to="/about" >about</Link>
                <Link className='text-lg  font-bold hover:text-white' to="/clients">clients</Link>
                <Link className='text-lg  font-bold hover:text-white' to="/contact">contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;
