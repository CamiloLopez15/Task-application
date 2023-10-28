import { PropTypes } from "prop-types";
import { motion } from "framer-motion";

function MadeTask({ task, deleteTask, taskDone }) {
  return (
    <motion.div
      initial={{ left: 1000, opacity: 0  }}
      animate={{ left: 10, opacity: 1 }}
      exit={{ bottom: 20, opacity: 0 }}
      transition={{ duration: 0.4 }}
      key={task._id}
      className="flex flex-col p-4 w-72 min-w-max border border-neutral-200 shadow-xl rounded-r-md m-5 hover:scale-105 transition-all duration-200 min-h-max relative"
    >
      <h1 className="text-xl font-semibold text-neutral-600">{task.tittle}</h1>
      <p className="text-sm text-neutral-600">{task.description}</p>
      <div>
        <button
          onClick={() => taskDone(task, true)}
          className="w-auto p-1.5 text-sm text-white m-1 rounded-md bg-neutral-400 hover:bg-green-700 transition-all duration-200"
        >
          Restaurar
        </button>
        <button
          onClick={() => deleteTask(task._id)}
          className="w-auto text-sm p-1.5 text-white m-1 rounded-md bg-neutral-400 hover:bg-red-600 transition-all duration-200"
        >
          Eliminar
        </button>
      </div>
    </motion.div>
  );
}

export default MadeTask;

MadeTask.propTypes = {
  task: PropTypes.object,
  taskDone: PropTypes.func,
  deleteTask: PropTypes.func,
};
