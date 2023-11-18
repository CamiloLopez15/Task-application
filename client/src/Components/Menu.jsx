import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { PiTargetBold } from "react-icons/pi";
import { BiLogOut } from "react-icons/bi";
import axios from "./../api/axios.js";
import { useState } from "react";
import { UseAuth } from "./../Context/authContext";

function Menu() {
  const { isAuthenticated } = UseAuth();
  const [responsiveMenu, setResponsiveMenu] = useState(false);
  const logout = async () => {
    await axios.post("/logout");
    console.log("Cerrando sesión");
    window.location.reload();
  };
  return (
    <nav className="flex justify-between items-center w-full bg-blue-800 p-4">
      <Link
        to="/Task-application/"
        className="flex text-2xl font-gabarito font-extrabold text-slate-50 tracking-wide"
      >
        <img
          className="h-8 mr-2"
          src="Logo-Aplicacion-de-tareas-removebg-preview.png"
        />
        Task application
      </Link>
      <div>
        <button
          className="md:hidden flex justify-center items-center text-white text-2xl border border-white p-2 rounded-md"
          onClick={() => setResponsiveMenu(!responsiveMenu)}
        >
          <BiMenu />
        </button>
        {/* Menu */}
        <ul className="md:flex w-80 flex-row justify-evenly items-center font-onest text-slate-50 hidden">
          <li className="hover:decoration-solid hover:decoration-1 hover:underline">
            <Link to="/Task-application/tasks">Tareas</Link>
          </li>
          <li className="hover:decoration-solid hover:decoration-1 hover:underline">
            <Link to="/Task-application/profile">Profile</Link>
          </li>
          <li className="hover:decoration-solid hover:decoration-1 hover:underline">
            {isAuthenticated ? (
              <Link onClick={() => logout()} to="/Task-application/">
                {" "}
                Cerrar sesión
              </Link>
            ) : (
              <Link to="/Task-application/login"> Inicia sesión</Link>
            )}
          </li>
        </ul>
        {/* Responsive Menu  */}
        <ul
          className={`${
            responsiveMenu ? "left-0 flex" : "left-[200%] hidden"
          } w-full flex-col top-16 right-0 absolute bg-blue-800 justify-evenly items-center font-onest text-slate-50 md:hidden transition-all duration-500`}
        >
          <li className="hover:decoration-solid hover:decoration-1 hover:underline my-1.5">
            <Link
              to="/Task-application/tasks"
              className="w-full flex flex-row justify-center items-center text-center"
            >
              <PiTargetBold className="mr-2" />
              Tareas
            </Link>
          </li>
          <li className="hover:decoration-solid hover:decoration-1 hover:underline my-1.5">
            <Link
              className="w-full flex flex-row justify-center items-center text-center"
              to="/Task-application/profile"
            >
              <FaUser className="mr-2" />
              Perfil
            </Link>
          </li>
          <li className="hover:decoration-solid hover:decoration-1 hover:underline my-1.5">
            {isAuthenticated ? (
              <Link
                className="w-full flex flex-row justify-center items-center text-center"
                onClick={() => logout()}
                to="/Task-application/"
              >
                {" "}
                <BiLogOut className="mr-2" /> Cerra sesión
              </Link>
            ) : (
              <Link
                className="w-full flex flex-row justify-center items-center text-center"
                to="/Task-application/login"
              >
                <FaSignOutAlt className="mr-2" /> Inicia sesión
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
