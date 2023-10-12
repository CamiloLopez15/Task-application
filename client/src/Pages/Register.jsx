import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { UseAuth } from "../Context/authContext";
import { useEffect } from "react";
function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registerAuthenticated, isAuthenticated, errors: registerErrors } = UseAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    registerAuthenticated(values);
  });

  const inputStyles =
    "w-[80%] rounded-md p-1.5 my-2 border bg-gray-200 border-sky-200 bg-transparent focus:outline-sky-300";

  return (
    <div className="flex w-[100%] h-[100%] justify-center items-center">
      <form
        onSubmit={onSubmit}
        className="flex bg-slate-50 justify-center items-center flex-col w-[30%] h-auto rounded-lg drop-shadow-lg"
      >
        <h1 className="w-full text-center text-sky-600 text-xl font-bold">
          Regístrate
        </h1>
        <div className="bg-red-200 w-[80%] rounded-md my-3 max-h-min">
          {registerErrors.map((error, i) => {
            return (
              <p
                className="text-red-500 text-left bg-red-200 p-1"
                key={i}
              >
                {error}
              </p>
            );
          })}
        </div>
        <input
          type="text"
          name="username"
          {...register("username", { required: true })}
          placeholder="Username"
          className={inputStyles}
        />
        {errors.username && (
          <p className="text-red-500 text-left w-[80%] bg-red-200 p-1 rounded-md">
            User name is required
          </p>
        )}
        <input
          type="email"
          name="email"
          {...register("email", { required: true })}
          placeholder="Email"
          className={inputStyles}
        />
        {errors.email && (
          <p className="text-red-500 text-left w-[80%] bg-red-200 p-1 rounded-md">
            Email is required
          </p>
        )}
        <input
          type="password"
          name="password"
          id=""
          {...register("password", { required: true })}
          placeholder="Password"
          className={inputStyles}
        />
        {errors.username && (
          <p className="text-red-500 text-left w-[80%] bg-red-200 p-1 rounded-md">
            Password is required
          </p>
        )}
        <Link
          to="/login"
          className="text-sm text-left w-[80%] text-sky-600 hover:text-sky-700 my-2"
        >
          ¿Ya tienes una cuenta?
        </Link>
        <button
          className="w-[80%] bg-sky-600 hover:bg-sky-700 transition-all duration-200 rounded-md p-1.5 mt-2 mb-4 text-white"
          type="submit"
        >
          Registrarme
        </button>
      </form>
    </div>
  );
}

export default Register;
