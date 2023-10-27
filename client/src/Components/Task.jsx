import { PropTypes } from "prop-types";

function Task({ task, taskDone, deleteTask, setTaskModifier, setTaskForEdit }) {
  return (
    <div
      key={task._id}
      className="flex flex-col p-4 w-72 min-w-max border border-neutral-200 shadow-xl rounded-r-md m-5 hover:scale-105 transition-all duration-200 min-h-max"
    >
      <h1 className="text-xl font-semibold text-purple-700">{task.tittle}</h1>
      <p className="text-sm text-neutral-600">{task.description}</p>
      <div>
        <button
          onClick={() => taskDone(task, false)}
          className="w-auto p-1.5 text-sm text-white m-1 rounded-md bg-green-700"
        >
          Realizar
        </button>
        <button
          onClick={async () => {
            await setTaskForEdit(task);
            setTaskModifier(true);
          }}
          className="w-auto p-1.5 text-sm text-white m-1 rounded-md bg-blue-700"
        >
          Editar
        </button>
        <button
          onClick={() => deleteTask(task._id)}
          className="w-auto p-1.5 text-sm text-white m-1 rounded-md bg-red-600"
        >
          Eliminar
        </button>
      </div>
    </div>
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