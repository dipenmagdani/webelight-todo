import "./App.css";
import AddTask from "./components/AddTask";
import Title from "./components/Title";
import TodoCard from "./components/TodoCard";
function App() {
  return (
    <div className="App flex flex-col justify-center items-center">
      <Title />
      <AddTask />
      <div className="mt-10">
        <TodoCard />
      </div>
    </div>
  );
}

export default App;
