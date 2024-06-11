import { NavLink, Outlet } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const HomePage = () => {
  return (
    <>
      <nav className="bg-zinc-800 text-white py-4 px-5 md:py-5 md:px-60 z-10">
        <ul className="flex justify-between items-center">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            <li className="text-2xl">Shoppping Cart</li>
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            <li className="text-2xl">
              <FaCartShopping />
            </li>
          </NavLink>
        </ul>
      </nav>
      <main className="my-2 m-2">
        <Outlet />
      </main>
    </>
  );
};

export default HomePage;
