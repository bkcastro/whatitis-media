// HomePage.js
import Methodology from '../components/Methodology';
import { Link } from 'react-router-dom';
import logo1 from '../assets/image 17.png';
import logo2 from '../assets/image 19.png';

function HomePage() {


    return <div className="p-4 font-bold text-lg sm:text-xl md:text-2xl text-white max-w-6xl mx-auto">
        <p className="">Whatitis <span className="text-brandGreen">Media</span> is a boutique social media marketing agency
            focused on helping you make <a className="text-brandGreen underline" href="https://www.youtube.com/@Whatitis" target="_blank">organic viral content. </a>
        </p>

        <div className="py-5 w-fit mx-auto">
            <h1 className="text-center p-2 font-bold">We work with</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
                <div className=''>
                    <h1 className=" text-brandGreen uppercase p-1 text-center font-bold italic">Brands</h1>
                    <img src={logo1} className='rounded-md'></img>
                </div>
                <div className=''>
                    <h1 className=" text-brandGreen uppercase p-1 text-center font-bold italic">Creators</h1>
                    <img src={logo2} className='rounded-md mx-auto'></img>
                </div>
            </div>
        </div>

        <div className='border-2 border-brandGreen p-2 text-center w-fit mx-auto my-4'>Try our <a className='text-brandGreen font-bold underline italic'>Quiz</a> to see who your content is similar to!</div>

        <h2 className='text-center'>Our methology involves analyzing content in <span className='text-brandGreen'>3 dimensions.</span></h2>
        <Methodology></Methodology>
        {//<h1 className='text-center p-2'>Check out our <span className='text-brandGreen font-bold underline italic'>WORKSHEET</span> to see how your content matches up!</h1>
        }
        <div className='mt-7 w-full flex justify-center'>
            <Link to="/contact" className="p-5 bg-gradient-to-r p-2 from-brandGreen to-brandDarkGreen rounded-full text-brandPurple text-xl hover:opacity-90">book a call with Blair</Link>
        </div>
    </div>
}

export default HomePage;