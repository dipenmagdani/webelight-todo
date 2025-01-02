import "./App.css";
import Outlet from "./components/Outlet";

import { TodoProvider } from "./context/TodoContext";
function App() {
  return (
    <TodoProvider>
      <div className="App flex items-center justify-center">
        <Outlet />
      </div>
    </TodoProvider>
  );
}

export default App;
