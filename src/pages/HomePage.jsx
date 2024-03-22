// HomePage.js

import logo1 from '../assets/pudgyPenguins.png';
import logo2 from '../assets/memesMatter.png';

function HomePage() {


    return <div className="p-2 text-white">
        <p className="md:text-center">Whatitis <span className="text-brandGreen">Media</span> is a boutique social media marketing agency
            focused on helping you make <a className="text-brandGreen underline" href="" target="_blank">organic viral content. </a> </p>

        <div className="mt-4 p-2 w-fit mx-auto">
            <h1 className="text-center p-2">We work with</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
                <div className=''>
                    <h1 className=" text-brandGreen uppercase p-1 text-center">Brands</h1>
                    <div className=""><img src={logo1} className='rounded-md'></img></div>
                </div>
                <div className=''>
                    <h1 className=" text-brandGreen uppercase p-1 text-center">Creators</h1>
                    <img src={logo2} className='rounded-md'></img>
                </div>
            </div>
        </div>

        <div className='border-2 border-brandGreen p-2 text-center w-fit mx-auto my-4'>Try our <a className='text-brandGreen font-bold'>Quiz</a> to see who your content is similar to!</div>

    </div>
}

export default HomePage;