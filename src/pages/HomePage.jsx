// HomePage.js
import Methodology from '../components/methodology/Methodology';

import CardStack from '../components/CardStack';

// Brands 
import image1 from '../assets/pp.png';
// Clients
import image2 from '../assets/memesMatter.jpg';
import memesMatter from '../assets/creators/memes-matter.jpg';
import gardenMarcus from '../assets/creators/garden-marcus.jpg';
import recklessBen from '../assets/creators/recklessben.jpg';

import creator1 from '../assets/Quiz_Faces/1.jpg';
import creator2 from '../assets/Quiz_Faces/2.jpg';
import creator3 from '../assets/Quiz_Faces/3.jpg';
import creator4 from '../assets/Quiz_Faces/4.jpg';
import creator5 from '../assets/Quiz_Faces/5.jpg';
import creator6 from '../assets/Quiz_Faces/6.jpg';
import creator7 from '../assets/Quiz_Faces/7.jpg';
import creator8 from '../assets/Quiz_Faces/8.jpg';
import creator9 from '../assets/Quiz_Faces/9.jpg';
import creator10 from '../assets/Quiz_Faces/10.jpg';
import creator11 from '../assets/Quiz_Faces/11.jpg';
import creator12 from '../assets/Quiz_Faces/12.jpg';
import creator13 from '../assets/Quiz_Faces/13.jpg';
import creator14 from '../assets/Quiz_Faces/14.jpg';
import creator15 from '../assets/Quiz_Faces/15.jpg';
import creator16 from '../assets/Quiz_Faces/16.jpg';

const ImageComponent = ({ src }) => (
    <img src={src} alt="Creator" className='hover:opacity-70' />
);



function HomePage() {

    const images = [
        creator1, creator2, creator3, creator4, creator5, creator6,
        creator7, creator8, creator9, creator10, creator11, creator12,
        creator13, creator14, creator15, creator16
    ];

    const ImageComponent = ({ src }) => (
        <img src={src} alt="Creator" className='hover:opacity-70' />
    );


    const brands = [image1];
    const creators = [image2, memesMatter, gardenMarcus, recklessBen];

    return <div className="p-4 font-bold text-lg sm:text-xl md:text-2xl text-white max-w-6xl mx-auto">

        <p className='pb-5 text-center w-[300px] sm:w-[350px] md:w-[400px lg:w-[800px] mx-auto'>Whatitis <span className="text-brandGreen">Media</span> is a boutique organic social agency focused on helping you make  <span className='text-brandGreen'>viral content. </span> </p>
        <p className='pb-5 text-center'>We have generated over <span className='text-brandGreen'>3 billion organic views.</span> </p>
        <p className='text-center'>Do you need help running your socials?</p>

        <div className='mt-7 w-full flex justify-center'>
            <a to="/contact" className="p-5 bg-gradient-to-r from-brandGreen to-brandDarkGreen rounded-full text-brandPurple text-xl hover:opacity-90">book a call</a>
        </div>

        <div className="py-5 w-full mx-auto">
            <h1 className="text-center p-2 font-bold">We work with</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 p-2 '>
                <CardStack cards={brands} title="Brands" blanks={3} />
                <CardStack cards={creators} title="Creators" />
            </div>
            {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
                <div className=''>
                    <h1 className=" text-brandGreen uppercase p-1 text-center font-bold italic">Brands</h1>
                    <img src={image1} className='rounded-md'></img>
                </div>
                <div className=''>
                    <h1 className=" text-brandGreen uppercase p-1 text-center font-bold italic">Creators</h1>
                    <img src={image2} className='rounded-md mx-auto'></img>
                </div>
            </div> */}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 h-auto bg-gradient-to-r from-brandGreen to-brandDarkGreen rounded-sm p-5'>
            <div className='p-2 sm:p-3 md:p-4 flex justify-center items-center flex-col gap-5 sm:gap-6 md:gap-10'>
                <p className='text-brandPurple text-3xl md:text-5xl text-center'>Try our quiz to see  what your creator archetype is?</p>
                <a href={"https://blair-chapman.formaloo.co/d62tpo"} target='_blank' className='p-4 sm:p-5 md:p-6 w-fit text-brandGreen text-2xl sm:text rounded-full bg-gradient-to-r from-brandPurple to-brandLightPurple hover:text-brandPurple'>take the quiz</a>
            </div>
            <div className='h-full grid grid-cols-4 grid-rows-4'>
                {images.map(src => <ImageComponent key={src} src={src} />)}
            </div>
        </div>

        <h2 className='pt-10 text-center'>Our methodology involves analyzing content in <span className='text-brandGreen'>3 dimensions.</span></h2>
        <Methodology></Methodology>
        {//<h1 className='text-center p-2'>Check out our <span className='text-brandGreen font-bold underline italic'>WORKSHEET</span> to see how your content matches up!</h1>
        }

    </div>
}

export default HomePage;