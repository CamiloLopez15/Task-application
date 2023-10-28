import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { UseAuth } from "../Context/authContext";
import { useEffect } from "react";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    loginAuthenticated,
    isAuthenticated,
    errors: loginErrors,
  } = UseAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) return navigate("/tasks");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    await loginAuthenticated(values);
  });

  const inputStyles =
    "w-[80%] rounded-md p-1.5 my-2 border bg-gray-200 border-blue-300 bg-transparent focus:outline-blue-400";

  return (
    <div className="flex w-[100%] h-[100%] justify-center items-center">
      <form
        onSubmit={onSubmit}
        className="flex bg-slate-50 justify-center items-center flex-col w-[80%] md:w-[30%] min-h-max rounded-lg drop-shadow-lg"
      >
        <h1 className="w-full text-center text-blue-700 text-xl font-bold">
          Inicio de sesión
        </h1>
        <div className="bg-red-200 w-[80%] rounded-md my-3 max-h-min">
          {loginErrors.map((error, i) => {
            return (
              <p className="text-red-500 text-left bg-red-200 p-1" key={i}>
                {error}
              </p>
            );
          })}
        </div>
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
        {errors.password && (
          <p className="text-red-500 text-left w-[80%] bg-red-200 p-1 rounded-md">
            Password is required
          </p>
        )}
        <Link
          to="/register"
          className="text-sm text-left w-[80%] text-blue-500 hover:text-blue-900 my-2"
        >
          ¿No tienes una cuenta?
        </Link>
        <button
          className="w-[80%] bg-blue-700 hover:bg-blue-800 transition-all duration-200 rounded-md p-1.5 my-2 text-white mb-5"
          type="submit"
        >
          Inicia sesión
        </button>
      </form>
    </div>
  );
}

export default Login;
