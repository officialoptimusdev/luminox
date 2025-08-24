import { useEffect, useState } from "react";
import Navbar from "../Navbar";


const NavbarWithMegaMenu = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <Navbar isDesktop={isDesktop} />;
};

export default NavbarWithMegaMenu;
