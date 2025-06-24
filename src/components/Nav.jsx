import { Link } from "react-router-dom";

export default function Header(){
    return(
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/projects'}>Projects</Link>
            <Link to={'/resume'}>Resume</Link>
            <Link to={'/characters'}>Characters</Link>
        </nav>
    )
}