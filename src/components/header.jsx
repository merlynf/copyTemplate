import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPhone,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { menuItemsData } from "../data/menu";
import MenuItems from "./menu/menuitem";

export default function Header() {
  const Logo = "/src/assets/images/logo.png";
  return (
    <div className="grid grid-cols-3 gap-3">
      {/* logo */}
      <div className="grid">
        <img src={Logo} alt="" />
      </div>
      {/* navbar */}
      <div>
        <ul className="menus flex space-x-8 items-center">
          {menuItemsData.map((menu, index) => {
            return <MenuItems items={menu} key={index} />;
          })}
        </ul>
      </div>
      {/* search */}
      <div className="container mx-auto flex justify-end items-center">
        <ul className="flex space-x-8 items-center">
          <li>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} />
          </li>
          <li>
            <button className="bg-yellow-500 rounded-full text-white px-6 py-2 w-full hover:bg-blue-700">
              <FontAwesomeIcon className="pr-4 text-xl" icon={faMessage} />
              <span className="font-semibold">Get in touch </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

{
  /* <ul className="menus flex space-x-8  items-center">
        {menuItemsData.map((menu, index) => {
          return (
            <li className="menu-items font-sans font-medium text-xl" key={index}>
              <a href={menu.url}>{menu.title}</a>
            </li>
          );
        })}
      </ul> */
}
