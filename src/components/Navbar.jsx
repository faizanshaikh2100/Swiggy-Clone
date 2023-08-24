import { SiSwiggy } from "react-icons/si";
import { BsChevronDown } from "react-icons/bs";
import { navItems } from "../config";
function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-6 ">
        <SiSwiggy size={50} style={{ color: "#ff6600" }} />
        <div className="flex items-center gap-2 group">
          <strong className="underline underline-offset-[6px] group-hover:text-orange-500">
            HOME
          </strong>
          <p className="text-gray-600 group-hover:text-[#A2A4AC]">Dighi,Pune</p>
          <BsChevronDown style={{ color: "#ff6600" }} />
        </div>
      </div>
      <div>
        <ul className="flex gap-10 items-center">
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
    </div>
  );
}

export default Navbar;
