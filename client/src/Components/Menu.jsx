import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { PiTargetBold } from "react-icons/pi";
import axios from "./../api/axios.js";
import { useState } from "react";

function Menu() {
  const [responsiveMenu, setResponsiveMenu] = useState(false)
  const logout = async () => {
    await axios.post("/logout");
    console.log("Cerrando sesión");
  };
  return (
    <nav className="flex justify-between items-center w-full bg-purple-700 p-4">
      <Link
        to="/"
        className="text-2xl font-gabarito font-extrabold text-slate-50 tracking-wide"
      >
        Task application
      </Link>
      <div>
        <button className="md:hidden flex justify-center items-center text-white text-2xl border border-white p-2 rounded-md" onClick={()=> setResponsiveMenu(!responsiveMenu)}>
          <BiMenu />
        </button>
        {/* Menu */}
        <ul className="md:flex w-80 flex-row justify-evenly items-center font-onest text-slate-50 hidden">
          <li className="hover:decoration-solid hover:decoration-1 hover:underline">
            <Link to="/tasks">Tareas</Link>
          </li>
          <li className="hover:decoration-solid hover:decoration-1 hover:underline">
            <Link>Crear tarea</Link>
          </li>
          <li className="hover:decoration-solid hover:decoration-1 hover:underline">
            <Link onClick={() => logout()} to="/">
              {" "}
              Cerra sesión
            </Link>
          </li>
        </ul>
        {/* Responsive Menu  */}
        <ul className={`${responsiveMenu ? "left-0": "left-[200%]"} flex w-full flex-col top-16 right-0 absolute bg-purple-700 justify-evenly items-center font-onest text-slate-50 md:hidden transition-all duration-300`}>
          <li className="hover:decoration-solid hover:decoration-1 hover:underline my-1.5">
            <Link
              to="/tasks"
              className="w-full flex flex-row justify-center items-center text-center"
            >
              <PiTargetBold className="mr-2" />
              Tareas
            </Link>
          </li>
          <li className="hover:decoration-solid hover:decoration-1 hover:underline my-1.5">
            <Link className="w-full flex flex-row justify-center items-center text-center" to="/profile">
              <FaUser className="mr-2" />
              Perfil
            </Link>
          </li>
          <li className="hover:decoration-solid hover:decoration-1 hover:underline my-1.5">
            <Link
              className="w-full flex flex-row justify-center items-center text-center"
              onClick={() => logout()}
              to="/"
            >
              {" "}
              <FaSignOutAlt className="mr-2" /> Cerra sesión
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
