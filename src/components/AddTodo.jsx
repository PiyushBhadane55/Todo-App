import { useRef } from "react";
import { CgPlayListAdd } from "react-icons/cg";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";


function AddTodo() {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  const {addNewItem} = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current += 1;
  // };
  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  //   console.log(`noof updates are: ${noOfUpdates.current}`);
  // };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value="";
    dueDateElement.current.value="";
    addNewItem(todoName, dueDate);
    // setDueDate("");
    // setTodoName("");
  };

  return (
    <div className="container text-center">
      <form className="row p-row" onSubmit={handleAddButtonClicked}>
        <div className="col-4">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo "
            // value={todoName}
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
            // value={dueDate}
            // onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success p-button">
            <CgPlayListAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
