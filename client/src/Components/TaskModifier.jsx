import { PropTypes } from "prop-types";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import axios from "../api/axios.js";

function TaskModifier({ taskForEdit, taskModifier, setTaskModifier, setUpdate, update }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const {tittle, description, _id} = taskForEdit;

  const onSubmit = handleSubmit(async (values) => {
    console.log(values);
    await axios.put(`/task/${_id}`, {
      tittle: values.tittle,
      description: values.description,
    });
    reset({tittle: "", description:""});
    setTaskModifier(false);
    setUpdate(!update);
  });

  const inputStyles =
    "w-[60%] rounded-md p-1.5 my-2 border bg-gray-200 border-blue-300 bg-transparent focus:outline-blue-400";

  return (
    <div
      className={`${
        taskModifier ? "flex" : "hidden"
      } flex-col absolute w-[60%] min-h-max bg-slate-50 top-[25%] left-[20%] shadow-lg rounded-md border border-neutral-300`}
    >
      <button
        onClick={() => setTaskModifier(false)}
        className="m-3 text-2xl absolute"
      >
        <AiOutlineClose />
      </button>
      <form
        className="flex flex-col items-center justify-start pt-5 pb-10 w-full h-full"
        onSubmit={onSubmit}
      >
        <h1 className="w-full text-center mt-8 text-2xl font-gabarito font-semibold">
          Modifica tú tarea
        </h1>
        <div className="flex flex-col justify-center items-center w-full">
          <input
            type="text"
            className={inputStyles}
            placeholder="Tittle"
            autoFocus
            {...register("tittle", { required: true, value: tittle })}
          />
          {errors.tittle && (
            <p className="text-red-500 text-left w-[60%] bg-red-200 p-1 rounded-md">
              tittle is required
            </p>
          )}
          <textarea
            type="text"
            className={inputStyles}
            placeholder="Description"
            rows="3"
            {...register("description", { required: true, value: description })}
          />
          {errors.description && (
            <p className="text-red-500 text-left w-[60%] bg-red-200 p-1 rounded-md">
              Description is required
            </p>
          )}
          <button
            type="submit"
            className="w-[60%] m-2 p-1.5 bg-blue-700 text-white text-base font-gabarito font-semibold rounded-md"
          >
            Modificar tarea
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskModifier;

TaskModifier.propTypes = {
  taskForEdit: PropTypes.object,
  taskModifier: PropTypes.bool,
  update: PropTypes.bool,
  setTaskModifier: PropTypes.func,
  setUpdate: PropTypes.func
};
