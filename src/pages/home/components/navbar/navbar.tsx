import { useEffect, useState } from "react";
import "./style.css";

export const Navbar = () => {
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
    <div className="bg-[#DEEFF0]">
      <div className="container relative flex flex-row items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/assets/logo.png" alt="" width={"100px"} />
          {/* <h1 className="text-[20px]">CYBERNETIC BUSINESS GROUP</h1> */}
        </div>

        <ul className={`flex gap-4 nav_details ${showMenu ? "show_menu" : ""}`}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#service">Our Services</a>
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
          <button className="button">Contact Us</button>
        )}
      </div>
    </div>
  );
};
