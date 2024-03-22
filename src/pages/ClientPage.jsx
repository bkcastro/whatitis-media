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



    return <div className="grid gird-cols-1 gap-2 p-4">
        <div>
            <h1 className="text-white text-2xl p-2">Creators</h1>
            <div className=''>
                {
                    creators.map((creator, index) => (
                        <div className='flex justify-start'>
                            <img key={index} src={creator.photo} alt="creators image" className='scale-75 rounded-md'></img>
                            <p className='text-lg text-center my-auto text-white'>{creator.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className=''>
            <h1 className="text-white text-2xl p-2">Brands</h1>
            <div className='grid grid-clos-1 gap-1'>
                {
                    brands.map((photo, index) => (
                        <div className='flex justify-center w-full'><img key={10 + index} src={photo} alt="brand image" className=' scale-75'></img></div>
                    ))
                }
            </div>
        </div>
    </div>;
}

export default ClientsPage;