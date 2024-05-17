import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const Navbar = () => {
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-[#a3cef1]">
      <div className="container relative flex flex-row items-center justify-between">
        <h1 className="text-[20px]">CYBERNETIC</h1>

        <ul className={`flex gap-4 nav_details ${showMenu ? "show_menu" : ""}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#service">Service</a>
          </li>
        </ul>

        {width < 541 ? (
          <img
            src={showMenu ? "/assets/close.svg" : "/assets/hamburger.svg"}
            alt="menu"
            width={"30px"}
            onClick={() => setShowMenu(!showMenu)}
          />
        ) : (
          <button onClick={() => navigate('#contact')} className="button">
            Contact Us
          </button>
        )}
      </div>
    </div>
  );
};
