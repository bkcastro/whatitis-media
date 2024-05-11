import { Link } from "react-router-dom";
import { FaTiktok, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";  // Importing Facebook, Twitter, and Instagram icons

function Footer() {
    return (
        <footer className="w-screen">
            <div className="border-t-2 w-fit border-brandGreen mx-auto p-2 m-4">
                <Link to="/" className="">whatitis<span className="text-brandGreen">.media</span></Link>
                {/* Social Media Icons Container */}
                <div className="flex justify-center mt-2 space-x-4">
                    {/* Icons with links to respective social media pages */}
                    <a href="https://tiktok.com/@blair.whatitis2" target="_blank" rel="noopener noreferrer" className="text-brandGreen">
                        <FaTiktok />
                    </a>
                    <a href="https://twitter.com/whatitis_media" target="_blank" rel="noopener noreferrer" className="text-brandGreen">
                        <FaTwitter />
                    </a>
                    <a href="https://www.instagram.com/whatitis.media" target="_blank" rel="noopener noreferrer" className="text-brandGreen">
                        <FaInstagram />
                    </a>
                    <a href="https://youtube.com/whatitis" target="_blank" rel="noopener noreferrer" className="text-brandGreen">
                        <FaYoutube />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
