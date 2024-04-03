
// Brands 
import eb from '../assets/brands/eb-2.png';
import extra from '../assets/brands/extra.png';
import fgm from '../assets/brands/feelsgood.jpg';
import laa from '../assets/brands/laa-2.png';
import pudgy from '../assets/brands/pudgy-2.png';
import sg from '../assets/brands/studioghibli.png';

import fs from '../assets/brands/fs.png';
import rosebud from '../assets/brands/rosebud-2.png';
import usc from '../assets/brands/usc.png';
import tetra from '../assets/brands/tetra-4.png';

import memesMatter from '../assets/creators/memes-matter.jpg';
import gardenMarcus from '../assets/creators/garden-marcus.jpg';
import recklessBen from '../assets/creators/recklessben.jpg';
import marxwasright from '../assets/creators/marxwasright.jpg';
import ken from '../assets/creators/kenshiyonezu.jpg';
import yesTheory from '../assets/creators/yesTheory.png';
import printGuns from '../assets/creators/printshootrepeat.jpg';
import mia from '../assets/creators/mia.png';

function ClientsPage() {
    const brands = [
        { photo: pudgy, link: 'https://www.instagram.com/pudgypenguins/?hl=en' },
        { photo: extra, link: 'https://www.instagram.com/extra.card/?hl=en' },
        { photo: laa, link: 'https://www.tiktok.com/@losangelesapparel?lang=en' },
        { photo: eb, link: 'https://www.8ball.biz/' },
        { photo: sg, link: 'https://gkids.com/films/the-boy-and-the-heron/' },
        { photo: fgm, link: 'https://www.tiktok.com/@readyfictions?lang=en' },
        { photo: usc, link: 'https://polymathic.usc.edu/ahmanson-lab' },
        { photo: tetra, link: 'https://www.tetragrammaton.com/' },
        { photo: fs, link: 'https://www.fragrancesupply.co/' }
    ];

    const creators = [
        { photo: memesMatter, name: "Meme Analysis", link: 'https://www.youtube.com/channel/UCb4pvsyqNrmBIGJFQxEukUA' },
        { photo: gardenMarcus, name: "Garden Marcus", link: 'https://www.tiktok.com/@gardenmarcus?lang=en' },
        { photo: recklessBen, name: "Reckless Ben", link: 'https://www.youtube.com/@RecklessBen' },
        { photo: marxwasright, name: "Marx.was.right", link: 'https://www.tiktok.com/@marx.was.right' },
        { photo: ken, name: "Kenshi Yonezu", link: 'https://open.spotify.com/track/6x7SB38tuekpu4xpH9OIPY?si=e7a79eaaaa614aa3' },
        { photo: printGuns, name: "PrintShootRepeat", link: 'https://www.youtube.com/channel/UCKp6m5XlXZp4cxmprybkFBw' },
        { photo: mia, name: "Memes Intelligence Agency", link: 'https://www.tiktok.com/tag/memeintelligenceagency?lang=en' },
        { photo: yesTheory, name: "Yes Theory", link: 'https://www.youtube.com/channel/UCvK4bOhULCpmLabd2pDMtnA' },
    ];



    return <div className="grid gird-cols-1 sm:grid-cols-2 p-4 mx-auto w-fit max-w-6xl mx-auto font-bold text-lg sm:text-xl md:text-2xl text-white">
        <div>
            <h1 className=" p-2 font-bold">Creators</h1>
            <div className='grid grid-cols-1 gap-4'>
                {
                    creators.map((creator, index) => (
                        <div key={index} className='flex justify-start'>
                            <a href={creator.link} target='_blank'><img key={index} src={creator.photo} alt="creators image" className='hover:opacity-80 w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] rounded-md'></img></a>
                            <p className='p-2 text-lg md:text-2xl text-start my-auto text-white font-bold'>{creator.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className='w-fit'>
            <h1 className="p-2 font-bold">Brands</h1>
            <div className='grid grid-clos-1 gap-4'>
                {
                    brands.map((brand, index) => (
                        <div key={index} className='flex justify-center w-full'><a href={brand.link} target='_blank'><img key={index} src={brand.photo} alt="brand image" className=''></img></a></div>
                    ))
                }
                <div key={11} className='flex flex-col justify-center items-center'>
                    <a href='https://www.rosebud.ai/company' target='_blank'><img key={11} src={rosebud} alt="brand image" className='w-[300px]'></img></a>
                    <h2 className='text-4xl text-white text-center'>Rosebud AI</h2>
                </div>
            </div>
        </div>
    </div>;
}

export default ClientsPage;