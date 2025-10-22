import { useDispatch, useSelector } from "react-redux";
import { addTask, toggleTask } from "./features/tasks/taskSlice";
import TaskForm from "./components/TaskForm";

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

        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          {/* Task input form */}
          <TaskForm />
        </div>

        {/* Display tasks */}
        <div className="space-y-2">
          {tasks.length === 0 ? (
            <p className="text-gray-400 text-center py-8">
              No tasks yet. Add one above!
            </p>
          ) : (
            tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
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
