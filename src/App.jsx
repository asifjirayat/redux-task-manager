import { useSelector } from "react-redux";

const App = () => {
  const storeState = useSelector((state) => state);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to bg-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Task Manager</h1>
        <p className="text-gray-600 font-semibold">Redux Store Connected</p>
        <p className="text-gray-600 mt-2 text-sm">
          Store state: {JSON.stringify(storeState)}
        </p>
      </div>
    </div>
  );
};

export default App;
