// HomePage.js
import Methodology from '../components/Methodology';
import { Link } from 'react-router-dom';
import logo1 from '../assets/pudgyPenguins.png';
import logo2 from '../assets/memesMatter.png';

function HomePage() {


    return <div className="p-4 text-white">
        <p className="text-xl md:text-center">Whatitis <span className="text-brandGreen">Media</span> is a boutique social media marketing agency
            focused on helping you make <a className="text-brandGreen underline" href="" target="_blank">organic viral content. </a> </p>

        <div className="mt-4 w-fit mx-auto">
            <h1 className="text-center p-2 font-bold">We work with</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
                <div className=''>
                    <h1 className=" text-brandGreen uppercase p-1 text-center font-bold">Brands</h1>
                    <img src={logo1} className='rounded-md'></img>
                </div>
                <div className=''>
                    <h1 className=" text-brandGreen uppercase p-1 text-center font-bold">Creators</h1>
                    <img src={logo2} className='rounded-md mx-auto'></img>
                </div>
            </div>
        </div>

        <div className='border-2 border-brandGreen p-2 text-center w-fit mx-auto my-4'>Try our <a className='text-brandGreen font-bold underline'>Quiz</a> to see who your content is similar to!</div>

        <Methodology></Methodology>

        <div className='mt-7 w-full flex justify-center'>
            <Link to="/contact" className=" p-2 bg-brandGreen rounded-md text-brandPurple text-xl hover:opacity-90">book a call with Blair</Link>
        </div>
    </div>
}

export default HomePage;