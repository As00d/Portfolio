import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "../../Constants/Data";
import NavbarLinks from "./NavbarLinks";
import SocialLinks from "./SocialLinks";
function Navbar() {
  const [isMenubarOpen, setIsMenubarOpen] = useState(true);

  function handleMenubarOpen() {
    setIsMenubarOpen(!isMenubarOpen);
  }

  return (
    <div className="bg-[#16191f] text-slate-200">
      <div className="md:flex md:justify-between md:items-center max-w-8xl m-auto">
        <div className="flex justify-between">
          <div className="p-4 flex flex-row justify-between w-full">
            <h1 className="text-2xl "> Ankita Sood</h1>
            <div className="flex flex-col md:hidden">
              <button>
                <FaBars onClick={handleMenubarOpen} />
              </button>
            </div>
          </div>
        </div>
        <div className="capitalize">
          {isMenubarOpen ? (
            <ul className="px-4 md:flex md:gap-3 ">
              {links.map((link) => {
                return <NavbarLinks link={link} key={link.id} />;
              })}
            </ul>
          ) : (
            <></>
          )}
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
}
export default Navbar;
