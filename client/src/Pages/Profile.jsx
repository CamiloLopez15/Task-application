import { useState } from "react";
import Menu from "../Components/Menu.jsx";
import axios from "./../api/axios.js";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Profile() {
  const [errorsPassword, setErrorsPassword] = useState([]);
  const [changesLoaded, setChangesLoaded] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (values) => {
    try {
      const { username, email } = values;
      const res = await axios.put("/profile", {
        username,
        email,
      });
      reset({ username: "", email: "" });
      setChangesLoaded(res.data.message);
      setTimeout(() => setChangesLoaded(null), 5000);
    } catch (error) {
      console.log(error);
    }
  });

  const onSubmitPassword = handleSubmit(async (values) => {
    try {
      const { password, confirmPassword } = values;
      if (!(password === confirmPassword)) {
        setTimeout(() => setErrorsPassword([]), 5000);
        console.log(errorsPassword);
        return setErrorsPassword(["Las contraseñas son distintas"]);
      }
      setErrorsPassword([]);
      const res = await axios.put("/updatePassword", {
        password,
      });
      setChangesLoaded(res.data.message);
      setTimeout(() => setChangesLoaded(null), 5000);
      reset({ password: "", confirmPassword: "" });
      await axios.post("/logout");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <>
      <Menu />
      <motion.div 
        initial={{marginTop: -100}}
        animate={{marginTop: 0}}
        transition={{duration: 0.5}}
      className="w-full flex flex-col">
        {errorsPassword.map((error, i) => {
          return (
            <p
              className="text-red-500 w-[46.6%] rounded-md text-left bg-red-200 p-1"
              key={i}
            >
              {error}
            </p>
          );
        })}
        {changesLoaded ? (
          <p className="text-green-500 w-[46.6%] rounded-md text-left bg-green-200 p-1 mx-4 mt-4">
            {changesLoaded}
          </p>
        ) : (
          ""
        )}
        <section className="p-4 flex flex-col items-center w-full">
          <h1 className="text-md md:font-extrabold font-semibold text-center md:text-left md:w-[60%] w-full p-4 bg-blue-700 text-white rounded-md">
            Actualizar nombre de usuario y email
          </h1>
          <form
            className="flex flex-col p-4 md:w-50% w-full items-center"
            onSubmit={onSubmit}
          >
            <div className="flex flex-col md:flex-row w-[100%] items-center justify-center">
              <span className="inline-block mr-2 md:w-[6%] w-full font-medium">
                Usuario:
              </span>
              <input
                type="text"
                className="md:w-[30%] w-full rounded-md p-1.5 my-2 border bg-gray-200 border-blue-300 bg-transparent focus:outline-blue-400"
                {...register("username")}
              />
            </div>
            <div className="flex flex-col md:flex-row w-[100%] items-center justify-center">
              <span className="inline-block mr-2 md:w-[6%] w-full font-medium">
                Email:
              </span>
              <input
                type="email"
                className="md:w-[30%] w-full rounded-md p-1.5 my-2 border bg-gray-200 border-blue-300 bg-transparent focus:outline-blue-400"
                {...register("email")}
              />
            </div>
            <button
              type="submit"
              className="p-1.5 bg-sky-600 text-white rounded-md md:w-[12%]"
            >
              Guardar cambios
            </button>
          </form>
        </section>
        <section className="p-4 flex flex-col items-center w-full">
          <h1 className="text-md md:font-extrabold font-semibold text-center md:text-left md:w-[60%] w-full p-4 bg-blue-700 text-white rounded-md">
            Actualizar tu contraseña
          </h1>
          <form
            className="flex flex-col p-4 md:w-50% w-full items-center"
            onSubmit={onSubmitPassword}
          >
            {errorsPassword.map((error, i) => {
              return (
                <p
                  className="text-red-500 w-[46.6%] rounded-md text-left bg-red-200 p-1"
                  key={i}
                >
                  {error}
                </p>
              );
            })}
            <div className="flex flex-col md:flex-row w-[100%] items-center justify-center">
              <span className="inline-block mr-2 md:w-[16%] w-full font-medium">
                Nueva contraseña:
              </span>
              <input
                type="password"
                className="md:w-[30%] w-full rounded-md p-1.5 my-2 border bg-gray-200 border-blue-300 bg-transparent focus:outline-blue-400"
                {...register("password", {
                  minLength: {
                    value: 8,
                    message: "Ingresa al menos 8 caracteres",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-left p-1 rounded-md ml-2">
                  La contraseña es muy corta
                </p>
              )}
            </div>
            <div className="flex flex-col md:flex-row w-[100%] items-center justify-center">
              <span className="inline-block mr-2 md:w-[16%] w-full font-medium">
                Confirma tu contraseña:
              </span>
              <input
                type="password"
                className="md:w-[30%] w-full rounded-md p-1.5 my-2 border bg-gray-200 border-blue-300 bg-transparent focus:outline-blue-400"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-left p-1 rounded-md ml-2">
                  La contraseña es muy corta
                </p>
              )}
            </div>
            <button
              type="submit"
              className="p-1.5 bg-sky-600 text-white rounded-md md:w-[12%]"
            >
              Guardar cambios
            </button>
          </form>
        </section>
      </motion.div>
    </>
  );
}

export default Profile;
