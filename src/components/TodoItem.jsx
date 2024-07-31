import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";
function TodoItem({todoName, todoDate,onDeleteClick}){

 const {deleteItem} = useContext(TodoItemsContext)

 return(
    <div className="container">
        <div className="row p-row">
          <div className="col-4">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger p-button"
              onClick={() => deleteItem(todoName)}>
              <MdDeleteForever />

            </button>
          </div>
        </div>
        </div>
 );

}

export default TodoItem;