import { PropTypes } from "prop-types";
import { motion } from "framer-motion";

function Task({ task, taskDone, deleteTask, setTaskModifier, setTaskForEdit }) {
  return (
    <motion.div
      initial={{left: 1000}}
      animate={{left: 10}}
      transition={{duration: 0.4}}
      key={task._id}
      className="flex flex-col p-4 w-72 min-w-max border border-neutral-200 shadow-xl rounded-r-md m-5 hover:scale-105 transition-all duration-200 min-h-max relative"
    >
      <h1 className="text-xl font-semibold text-blue-700">{task.tittle}</h1>
      <p className="text-sm text-neutral-600">{task.description}</p>
      <div>
        <button
          onClick={() => taskDone(task, false)}
          className="w-auto p-1.5 text-sm text-white m-1 rounded-md bg-green-700 hover:bg-green-800 transition-all duration-200"
        >
          Realizar
        </button>
        <button
          onClick={async () => {
            await setTaskForEdit(task);
            setTaskModifier(true);
          }}
          className="w-auto p-1.5 text-sm text-white m-1 rounded-md bg-blue-700 hover:bg-blue-800 transition-all duration-200"
        >
          Editar
        </button>
        <button
          onClick={() => deleteTask(task._id)}
          className="w-auto p-1.5 text-sm text-white m-1 rounded-md bg-red-600 hover:bg-red-700 transition-all duration-200"
        >
          Eliminar
        </button>
      </div>
    </motion.div>
  );
}

export default Task;

Task.propTypes = {
  task: PropTypes.object,
  taskDone: PropTypes.func,
  deleteTask: PropTypes.func,
  setTaskModifier: PropTypes.func,
  setTaskForEdit: PropTypes.func,
};
