import React, { useState,useEffect  } from "react";
import Link from "next/link"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose,faBars } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <nav className="flex light-bg justify-space">
      <div className="logo white">
        <Link href="/" className="green"> Ankush Verma </Link>
      </div>

 {/* Hamburger icon for mobile */} 
      {isMobile && (
        <button className="green"
          onClick={() => setMenuOpen(!menuOpen)} 
          style={{ background: "none", border: "none",  fontSize: "1.5rem", cursor: "pointer" }}
        >
          <FontAwesomeIcon icon={menuOpen ? faClose : faBars} />
        </button>
      )}

      <ul className="flex white"  style={{
          display: isMobile ? (menuOpen ? "block" : "none") : "flex",
          position: isMobile ? "absolute" : "static",
          top: isMobile ? "60px" : "auto",
          left: 0,
          width: isMobile ? "100%" : "auto",
          backgroundColor: isMobile ? "#2D2E32" : "transparent",
          padding: isMobile ? "1rem" : "0",
          flexDirection: isMobile ? "column" : "row",
          listStyle: "none",
        }}>
        <li className="green">
          <Link href="/">{"<Home />"}</Link>
        </li>
        <li>
          <Link href="/#about" >About Me.</Link>
        </li>
        <li> 
           <Link href="/resume" rel="noopener noreferrer">
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}

