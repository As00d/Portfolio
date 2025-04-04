import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "../../Constants/Data";
import NavbarLinks from "./NavbarLinks";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  const [isMenubarOpen, setIsMenubarOpen] = useState(true);

  function handleMenubarOpen() {
    setIsMenubarOpen(!isMenubarOpen);
  }

  return (
    <div className="bg-[#161d26] text-[#c6c6cd] font-roboto">
      <div className="md:flex md:justify-between md:items-center max-w-8xl m-auto">
        <div className="flex justify-between">
          <div className="p-4 flex flex-row justify-between w-full">
            <h1 className="text-2xl "> Ankita Sood</h1>
            <div className="flex flex-col md:hidden">
              {isMenubarOpen && (
                <button>
                  <FaBars onClick={handleMenubarOpen} />
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="capitalize">
          <ul className="px-4 md:flex md:gap-3 md:block">
            {links.map((link) => {
              return <NavbarLinks link={link} key={link.id} />;
            })}
          </ul>
        </div>
        <div className="capitalize">
          <ul className="px-4 md:flex md:gap-3 hidden ">
            {social.map((link) => {
              return <SocialLinks link={link} key={link.id} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
