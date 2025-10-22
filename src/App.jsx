import { useDispatch, useSelector } from "react-redux";
import { deleteTask, setFilter, toggleTask } from "./features/tasks/taskSlice";
import TaskForm from "./components/TaskForm";

const App = () => {
  const { tasks, filter } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Task Manager</h1>

        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          {/* Task input form */}
          <TaskForm />
        </div>

        {/* Filter buttons */}
        <div className="flex gap-2 mb-4">
          {["all", "active", "completed"].map((filterType) => (
            <button
              key={filterType}
              onClick={() => dispatch(setFilter(filterType))}
              className={`px-2 py-1 text-xs rounded-lg capitalize transition cursor-pointer  ${
                filter === filterType
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {filterType}
            </button>
          ))}
        </div>

        {/* Display tasks */}
        <div className="space-y-2">
          {filteredTasks.length === 0 ? (
            <p className="text-gray-400 text-center py-8">
              {tasks.length === 0
                ? "No tasks yet. Add one above!"
                : `No ${filter} tasks.`}
            </p>
          ) : (
            filteredTasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg group"
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => dispatch(toggleTask(task.id))}
                  className="w-4 h-4 cursor-pointer"
                />
                <span
                  className={task.completed ? "line-through text-gray-400" : ""}
                >
                  {task.text}
                </span>
                <button
                  onClick={() => dispatch(deleteTask(task.id))}
                  className="px-3 py-1 text-sm text-red-500 hover:bg-red-50 rounded transition opacity-0 group-hover:opacity-100 cursor-pointer"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

        {/* Tasks counter */}
        {tasks.length > 0 && (
          <p className="text-sm text-gray-500 mt-4 text-center">
            {tasks.filter((task) => !task.completed).length} task(s) remaining.
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
