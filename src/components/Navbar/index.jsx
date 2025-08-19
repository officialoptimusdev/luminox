import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-white shadow">
      <ul className="flex gap-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
