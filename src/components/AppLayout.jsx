import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import MobileNavBar from "./MobileNavBar";

const AppLayout = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSmall,setIsSmall] = useState(false)
  // Update the state based on window width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
      setIsSmall(window.innerWidth <= 1439)
    };

    handleResize(); 
    window.addEventListener("resize", handleResize); 
    return () => {
      window.removeEventListener("resize", handleResize); 
    };
  }, []);

  return (
    <div className="body-class main-frame min-h-[100vh] bg-noise-pattern bg-blend-soft-light bg-neutral-950">
      {/* Conditionally render NavBar or MobileNavBar based on screen width */}
     
        {isMobile || isSmall ? <div className="sticky top-2 left-1/2 transform z-50 p-4 w-full sm:w-[60%] md:w-[45%] lg:w-[30%] mx-auto sm:left-0 sm:transform-none"> <MobileNavBar /></div>: <NavBar />}
      

      <div className="scroll-auto lg:mx-[100px] mx-0">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
