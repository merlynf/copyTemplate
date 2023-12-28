/* eslint-disable react/prop-types */
import Dropdown from "./dropdown";

export default function MenuItems({items}) {
  return (
    <li className="menu-items font-sans font-medium text-xl relative group">
      {items.submenu ? (
        <>
          <button type="button" aria-haspopup="menu">
            {items.title}{" "}
          </button>
          <Dropdown submenus={items.submenu} />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
}
