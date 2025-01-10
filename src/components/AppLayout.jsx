import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import MobileNavBar from "./MobileNavBar";

const AppLayout = () => {
  return (
    <div className="body-class main-frame min-h-[100vh] bg-noise-pattern bg-blend-soft-light bg-neutral-950">
      {/* SOON TO REMOVE, only here for easy navigation.... */}
      <div className="sticky top-2 left-1/2 transform  z-50 p-4 w-full sm:w-[60%] md:w-[45%] lg:w-[30%] mx-auto sm:left-0 sm:transform-none">
        <MobileNavBar />
      </div>

      <div className="scroll-auto lg:mx-[100px] mx-0">
        <Outlet />
      </div>
    </div>
  );
};
export default AppLayout;
