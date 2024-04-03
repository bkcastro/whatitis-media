// AboutPage.js

import blair from '../assets/team/blair.png';
import chris from '../assets/team/chris.png';
import ian from '../assets/team/ian.png';
import lydia from '../assets/team/lydia.png';
import andre from '../assets/team/andre.png';


function AboutPage() {
    const team = [
        {
            name: "Blair",
            title: "CEO",
            about: <p>YouTuber turned content strategist who has generated over 3 billion impressions.</p>,
            photo: blair,
        },
        {
            name: "Ian",
            title: "Head of Content",
            about: <p>Former Narrative Ads Creative Ingenuity Lead. Also creator of <a className='text-brandGreen underline' href=''>this video</a>.</p>,
            photo: ian,
        },
        {
            name: "Chris",
            title: "Meme Magician",
            about: <p>Foremost expert on Memetics and Jungian Archetypes</p>,
            photo: chris,
        },

        {
            name: "Lydia",
            title: "Head of Partnership",
            about: <p>LA’s most well-known influencer who doesn’t make content.</p>,
            photo: lydia,
        },
        {
            name: "Andre",
            title: "Head of Design",
            about: <p>LA’s most well-known influencer who doesn’t make content.</p>,
            photo: andre,
        },
    ]

    return <div className="p-4 max-w-6xl mx-auto font-bold text-lg sm:text-xl md:text-2xl text-white">
        <div className='grid grid-cols-1 gap-4 text-md sm:text-lg md:text-xl'>
            <p className=''>Whatitis <span className="text-brandGreen">Media</span> started 7 years ago as a YouTube channel analyzing internet culture.
                Our series Why It Works broke down  content using a 3-part methodology. The first video below is an early example of the success we saw with this format.</p>

            <p className=''>The value delivered from these analyses was quickly seen and thus a new era
                of Whatitis was born. One aimed a creating viral content to prove our theories. In video 2, you can see the beginnings of
                viral organic content made by Whatitis. </p>

            <p className=''>
                Today, Whatitis exists as an authority on viral internet culture. Our new series like Why It Doesn't Work, aim to showcase the
                small memetic changes content creators and brands can make to better equip themselves for going viral! </p>

        </div>

        <div className="flex flex-wrap justify-center gap-4 my-4 sm:my-5 md:my-6 lg:my-8">
            <iframe className='w-[350px] h-[200px] sm:w-[350px] sm:h-[220px]' src="https://www.youtube.com/embed/JbCygZ8fByw?si=1Vyv2b7WS5fyZQrH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe className='w-[350px] h-[200px] sm:w-[350px] sm:h-[220px]' src="https://www.youtube.com/embed/dXRFFhGvlQE?si=hNtgvm-8z-kzWv21" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe className='w-[350px] h-[200px] sm:w-[350px] sm:h-[220px]' src="https://www.youtube.com/embed/m1UswbloQ8o?si=f-8PBnJ8wyjuL9-U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <div className="w-fit mx-auto">
            <h1 className="">Our Team</h1>
            <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 w-fit mx-auto'>
                {

                    team.map((memeber, index) => (
                        <div key={index} className="flex justify-start gap-2">
                            <img src={memeber.photo} className=' h-32 w-32 sm:h-36  sm:w-36  md:h-52 md:w-52 rounded-md'></img>
                            <div className=''>
                                <h2 className=''>{memeber.name} <span className='text-brandGreen'>{memeber.title}</span></h2>
                                <p className='text-sm sm:text-md md:text-lg'>{memeber.about}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div >;
}

export default AboutPage;