import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The blog web</h1>
            <div className="links">
            <Link to="/">HOME</Link>
            <Link to="/Blogs">BLOGS</Link>
            <Link to="/Contacts">CONTACT</Link>
        </div>
        </nav>
     );
}
export default Navbar;