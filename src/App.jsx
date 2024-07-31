import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import TodoItemsContextProvider from "./store/todo-items-store";


function App() {
  

  return (
   <TodoItemsContextProvider>
      <center className="TODO-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
