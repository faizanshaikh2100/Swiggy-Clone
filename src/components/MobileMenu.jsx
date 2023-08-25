import { navItems } from "../config";
function MobileMenu() {
  return (
    <ul className="flex flex-col gap-5 bg-red-500 items-start pl-2 h-[calc(100vh-82px)] ">
      {navItems.map((item) => (
        <li
          key={item.id}
          className="flex items-center gap-3 p-2 hover:text-orange-500 hover:cursor-pointer "
        >
          {item.icon}
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default MobileMenu;
