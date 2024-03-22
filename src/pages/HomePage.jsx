// HomePage.js

import logo1 from '../assets/pudgyPenguins.png';
import logo2 from '../assets/memesMatter.png';

function HomePage() {


    return <div className="p-2 text-white">
        <p className=" text-md">Whatitis <span className="text-brandGreen">Media</span> is a boutique social media marketing agency
            focused on helping you make <a className="text-brandGreen underline" href="" target="_blank">organic viral content. </a> </p>

        <div className="mt-4 p-2 w-full">
            <h1 className="text-center text-2xl p-2">We work with</h1>
            <div className="grid grid-cols-1 gap-4">
                <div className=''>
                    <h1 className="text-xl text-brandGreen uppercase text-center p-1">Brands</h1>
                    <div className=""><img src={logo1} className='rounded-md'></img></div>
                </div>
                <div className=''>
                    <h1 className="text-xl text-brandGreen uppercase text-center p-1">Creators</h1>
                    <div className=""><img src={logo2} className='rounded-md'></img></div>
                </div>
            </div>
        </div>

        <div className='w-full py-4'>
            <div className='border-2 border-brandGreen p-2 text-center w-fit'>Try our <a className='text-brandGreen font-bold'>Quiz</a> to see who your content is similar to!</div>
        </div>

        <div>

        </div>
    </div>
}

export default HomePage;