import { useEffect, useState } from "react";
import axios from "./../api/axios.js";
import Menu from "../Components/Menu.jsx";
import { FaPlus } from "react-icons/fa";
import Task from "../Components/Task.jsx";
import MadeTask from "../Components/MadeTask.jsx";
import TaskCreator from "../Components/TaskCreator.jsx";
import TaskModifier from "../Components/TaskModifier.jsx";

export default function Taskspage() {
  const [tasks, setTasks] = useState([]);
  const [madetasks, setMadetasks] = useState([]);
  const [update, setUpdate] = useState(false);
  const [taskCreator, setTaskCreator] = useState(false);
  const [taskModifier, setTaskModifier] = useState(false);
  const [taskForEdit, setTaskForEdit] = useState({
    tittle: "",
    description: "",
  });

  const deleteTask = async (key) => {
    await axios.delete(`/task/${key}`);
    setUpdate(!update);
  };

  const taskDone = async (oldTask, isActive) => {
    await axios.put(`/task/${oldTask._id}`, {
      tittle: oldTask.tittle,
      description: oldTask.description,
      isActive,
    });
    setUpdate(!update);
  };

  useEffect(() => {
    async function getTasks() {
      const newTasks = [];
      const newMadeTasks = [];
      const res = await axios.get("/tasks");
      res.data.map((task) => {
        if (task.isActive) return newTasks.push(task);
        else return newMadeTasks.push(task);
      });
      setTasks(newTasks);
      setMadetasks(newMadeTasks);
    }
    getTasks();
  }, [update]);

  return (
    <div className="w-[100%] h-[100%] relative">
      <Menu />
      <header className="w-full flex items-center justify-between px-4 m-4">
        <h1 className="text-2xl font-gabarito font-semibold">Tareas</h1>
        <button
          className="flex items-center justify-center p-2 bg-sky-600 border-none outline-none rounded-md mr-5 text-white font-medium"
          onClick={() => setTaskCreator(!taskCreator)}
        >
          <FaPlus className="mr-2" /> Crear nueva tarea
        </button>
      </header>
      <section>
        <div className="flex flex-wrap justify-center md:justify-start">
          {tasks.map((task) => (
            <Task
              key={task._id}
              task={task}
              deleteTask={deleteTask}
              taskDone={taskDone}
              setTaskModifier={setTaskModifier}
              setTaskForEdit={setTaskForEdit}
            />
          ))}
        </div>
      </section>
      <section>
        <h1 className="text-2xl m-4 font-gabarito font-semibold">
          Tareas realizadas
        </h1>
        <div className="flex justify-start">
          {madetasks.map((task) => (
            <MadeTask
              key={task._id}
              task={task}
              deleteTask={deleteTask}
              taskDone={taskDone}
            />
          ))}
        </div>
      </section>
      <TaskCreator
        taskCreator={taskCreator}
        setTaskCreator={setTaskCreator}
        setUpdate={setUpdate}
        update={update}
      />
      {taskModifier ? (
        <TaskModifier
          taskForEdit={taskForEdit}
          taskModifier={taskModifier}
          setTaskModifier={setTaskModifier}
          setUpdate={setUpdate}
          update={update}
        />
      ) : (
        ""
      )}
    </div>
  );
}
