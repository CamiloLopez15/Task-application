import { useForm } from "react-hook-form";

function TasksFormPage() {
  const { handleSubmit, register } = useForm();
  const onSubmit = handleSubmit((data) => 
    console.log(data)
  )
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          {...register("tittle")}
          autoFocus
          placeholder="Tittle"
        />
        <textarea
          rows="3"
          {...register("description")}
          placeholder="Description"
        ></textarea>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default TasksFormPage;
