// AboutPage.js

import blair from '../assets/team/blair.png';
import chris from '../assets/team/chris.png';
import ian from '../assets/team/ian.png';
import lydia from '../assets/team/lydia.png';
import andre from '../assets/team/andre.png';



function TeamMember(name, title, about) {
    return <div className="grid grid-cols-2">
        <div className="p-2 flex justify-start">
            <img />
        </div>

    </div>
}

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

    return <div className="p-4">
        <p className="text-xl md:text-center">Whatitis <span className="text-brandGreen">Media</span> started 7 years ago as a YouTube chaneel. The value and insight brought the Why It Works series. </p>

        <div className="flex flex-wrap justify-center gap-4 my-4">
            <iframe width="300" height="180" src="https://www.youtube.com/embed/JbCygZ8fByw?si=1Vyv2b7WS5fyZQrH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="300" height="180" src="https://www.youtube.com/embed/SHt2cINwRco?si=y3WdQWwrXkW15Il8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="300" height="180" src="https://www.youtube.com/embed/m1UswbloQ8o?si=f-8PBnJ8wyjuL9-U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <div className="p-2">
            <h1 className="text-center">Our <span className="text-brandGreen">team</span></h1>
            <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 w-fit mx-auto'>
                {

                    team.map((memeber, index) => (
                        <div key={index} className="flex justify-start gap-2 w-[350px]">
                            <img src={memeber.photo} className=' h-28 w-28 rounded-md'></img>
                            <div className=''>
                                <h2 className='text-lg'>{memeber.name} <span className='text-brandGreen'>{memeber.title}</span></h2>
                                {memeber.about}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>;
}

export default AboutPage;