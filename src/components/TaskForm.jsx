import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";

const TaskForm = () => {
  const [taskText, setTaskText] = useState("");
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskText.trim().length < 1) {
      setErrors(["A task is required."]);
      return;
    }
    dispatch(addTask(taskText.trim()));
    setTaskText("");
    setErrors([]);
  };

  const handleInput = (e) => {
    const inputValue = e.target.value;
    setTaskText(inputValue);
    if (inputValue.trim().length > 0) {
      setErrors([]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2 flex-col">
        <input
          type="text"
          value={taskText}
          onChange={handleInput}
          placeholder="What needs to be done?"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {errors.length > 0 &&
          errors.map((error) => (
            <span
              key={crypto.randomUUID()}
              className="flex bg-red-100 text-red-500 text-sm rounded py-1 px-2"
            >
              {error}
            </span>
          ))}
        <button className="py-2 px-1 bg-blue-600 text-white rounded-lg hover:bg-blue-600 transition font-semibold cursor-pointer">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
