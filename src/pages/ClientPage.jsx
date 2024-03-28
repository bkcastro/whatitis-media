// ClientPage.js

// Creators
import gm from '../assets/creators/gm.png';
import km from '../assets/creators/km.png';
import mm from '../assets/creators/mm.png';
import rb from '../assets/creators/rb.png';

// Brands 
import eb from '../assets/brands/eb.png';
import extra from '../assets/brands/extra.png';
import fgm from '../assets/brands/fgm.png';
import laa from '../assets/brands/laa.png';
import pudgy from '../assets/brands/pudgy.png';
import sg from '../assets/brands/sg.png';


function ClientsPage() {
    const brands = [pudgy, extra, laa, eb, sg, fgm];
    const creators = [{ photo: mm, name: "Meme Analysis" }, { photo: gm, name: "Garden Marcus" }, { photo: rb, name: "Reckless Ben" }, { photo: km, name: "Marx.was.right" }];



    return <div className="grid grid-cols-1 gap-2 p-4 sm:grid-cols-2 md:mx-auto w-fit">
        <div>
            <h1 className=" p-2 font-bold">Creators</h1>
            <div className=''>
                {
                    creators.map((creator, index) => (
                        <div key={index} className='flex justify-start m-2'>
                            <img key={index} src={creator.photo} alt="creators image" className='scale-100 rounded-md'></img>
                            <p className='p-2 text-lg text-center my-auto text-white'>{creator.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className=''>
            <h1 className="p-2 font-bold">Brands</h1>
            <div className='grid grid-clos-1 gap-1'>
                {
                    brands.map((photo, index) => (
                        <div key={index} className='flex justify-center w-full'><img key={10 + index} src={photo} alt="brand image" className=' scale-75'></img></div>
                    ))
                }
            </div>
        </div>
    </div>;
}

export default ClientsPage;