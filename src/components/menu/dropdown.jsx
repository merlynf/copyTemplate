export default function dropdown({ submenus }) {
  return (
    <ul className="absolute invisible group-hover:visible bg-white p-3 pt-10 rounded-b-lg">
      {submenus.map((submenu, index) => (
        <li key={index} className="menu-items pb-2 text-gray-950 font-light">
          <a href={submenu.url} className="block w-40">
            {submenu.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
