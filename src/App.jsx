import { useDispatch, useSelector } from "react-redux";
import { addTask, toggleTask } from "./features/tasks/taskSlice";

const App = () => {
  const { tasks, filter } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(addTask("Sample Task" + (tasks.length + 1)));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to bg-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Task Manager</h1>
        {/* Test button */}
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mb-4"
        >
          Add Test Task
        </button>

        {/* Display tasks */}
        <div className="space-y-2">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => dispatch(toggleTask(task.id))}
                className="w-4 h-4"
              />
              <span
                className={task.completed ? "line-through text-gray-400" : ""}
              >
                {task.text}
              </span>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-4">
          Total tasks: {tasks.length}
        </p>
      </div>
    </div>
  );
};

export default App;
