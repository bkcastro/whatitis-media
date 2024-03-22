import { Link } from "react-router-dom";


function Footer() {
    return (
        <footer className="w-screen">
            <div className="border-t-2 w-fit opacity-75 mx-auto p-2 m-4">
                <Link to="/" className="">Whatitis<span className="text-brandGreen">.media</span></Link></div>
        </footer>
    );
}

export default Footer;