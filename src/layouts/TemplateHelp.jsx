import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Template(){
    return(
        <>
        <nav>
            <Link to={'/help'}>Help</Link>
            <Link to={'/help/faqs'}>Faqs</Link>
        </nav>
        <Outlet />
        <Footer />
        </>
    )
}