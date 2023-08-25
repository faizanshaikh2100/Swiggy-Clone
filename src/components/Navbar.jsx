import { SiSwiggy } from "react-icons/si";
import { BsChevronDown } from "react-icons/bs";
import { navItems } from "../config";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
function Navbar({ showMobileMenu, setShowMobileMenu }) {
  return (
    <div className="flex justify-between items-center ">
      <div className="flex gap-6 ">
        <SiSwiggy size={50} style={{ color: "#ff6600" }} />
        <div className="hidden md:flex items-center gap-2 group ">
          <strong className="underline underline-offset-[6px] group-hover:text-orange-500">
            HOME
          </strong>
          <p className="text-gray-600 group-hover:text-[#A2A4AC]">Dighi,Pune</p>
          <BsChevronDown style={{ color: "#ff6600" }} />
        </div>
      </div>
      <div className="">
        <div className="hidden md:block">
          <ul className="flex gap-10 items-center ">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-3 hover:text-orange-500 hover:cursor-pointer"
              >
                {item.icon}
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden">
          {!showMobileMenu ? (
            <AiOutlineMenu
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              size={25}
            />
          ) : (
            <GrClose
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              size={25}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
