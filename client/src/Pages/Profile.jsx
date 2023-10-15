import { useState } from "react";
import Menu from "../Components/Menu.jsx";
import axios from "./../api/axios.js";
import { useForm } from "react-hook-form";

function Profile() {
  const [errorsPassword, setErrorsPassword] = useState([]);
  // const [changesLoaded, setChangesLoaded] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (values) => {
    try {
      const { username, email } = values;
      const res = await axios.put('/profile', {
        username,
        email
      });
      reset({username: "", email: "" });
      console.log(res.data);
    } catch (error) {
      console.log(error)
    }
  });

  const onSubmitPassword = handleSubmit(async (values) => {
    try {
      const { password, confirmPassword } = values;
      if (!(password === confirmPassword)) {
        setTimeout(() => setErrorsPassword([]), 5000);
        console.log(errorsPassword)
        return setErrorsPassword(["Las contraseñas son distintas"]);
      }
      setErrorsPassword([]);
      await axios.put('/updatePassword', {
        password
      });
      await axios.post("/logout");
      reset({password: "", confirmPassword: "" });
    } catch (error) {
      console.log(error)
    }
  });

  return (
    <div>
      <Menu />
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
      <section className="p-4">
        <h1 className="text-md md:font-extrabold font-semibold text-center md:text-left md:w-[60%] w-full p-4 bg-purple-700 text-white rounded-md">
          Actualizar nombre de usuario y email
        </h1>
        <form className="flex flex-col p-4 md:w-50% w-full" onSubmit={onSubmit}>
          <div className="flex flex-col md:flex-row w-[100%] items-center justify-center md:justify-normal">
            <span className="inline-block mr-2 md:w-[6%] w-full font-medium">
              Usuario:
            </span>
            <input
              type="text"
              className="md:w-[30%] w-full rounded-md p-1.5 my-2 border bg-gray-200 border-purple-300 bg-transparent focus:outline-purple-400"
              {...register("username")}
            />
          </div>
          <div className="flex flex-col md:flex-row w-[100%] items-center justify-center md:justify-normal">
            <span className="inline-block mr-2 md:w-[6%] w-full font-medium">
              Email:
            </span>
            <input
              type="email"
              className="md:w-[30%] w-full rounded-md p-1.5 my-2 border bg-gray-200 border-purple-300 bg-transparent focus:outline-purple-400"
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
      <section className="p-4">
        <h1 className="text-md md:font-extrabold font-semibold text-center md:text-left md:w-[60%] w-full p-4 bg-purple-700 text-white rounded-md">
          Actualizar tu contraseña
        </h1>
        <form
          className="flex flex-col p-4 md:w-50% w-full"
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
          <div className="flex flex-col md:flex-row w-[100%] items-center justify-center md:justify-normal">
            <span className="inline-block mr-2 md:w-[16%] w-full font-medium">
              Nueva contraseña:
            </span>
            <input
              type="password"
              className="md:w-[30%] w-full rounded-md p-1.5 my-2 border bg-gray-200 border-purple-300 bg-transparent focus:outline-purple-400"
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
          <div className="flex flex-col md:flex-row w-[100%] items-center justify-center md:justify-normal">
            <span className="inline-block mr-2 md:w-[16%] w-full font-medium">
              Confirma tu contraseña:
            </span>
            <input
              type="password"
              className="md:w-[30%] w-full rounded-md p-1.5 my-2 border bg-gray-200 border-purple-300 bg-transparent focus:outline-purple-400"
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
    </div>
  );
}

export default Profile;
