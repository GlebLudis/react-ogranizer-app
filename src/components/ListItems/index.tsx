import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import TodoListItemActionButton , {TodoListItemActionButtonProps} from "../ListButton";

import "./styles.css";
import {TodoItem} from "../../utils/types";
import useTodo from "../../utils/hooks/useTodo";

interface TodoListItemProps {
  todoItem: TodoItem;
}

function TodoListItem({ todoItem }: TodoListItemProps) {
  const { dispatch } = useTodo();


  const todoListItemActions: TodoListItemActionButtonProps[] = [
    {
      title: "Edit Item",
      ariaLabel: `Edit Item "${todoItem.todo}"`,
      Icon: <EditIcon />,
      onClick: () => dispatch({
        type: 'edit',
        payload: {
          id: todoItem.id,
          todo: prompt('Edit todo item', todoItem.todo) || todoItem.todo,
        }
      }),
    },
    {
      title: "Delete Item",
      ariaLabel: `Delete Item "${todoItem.todo}"`,
      Icon: <DeleteIcon />,
      onClick: () => dispatch({
        type: 'remove',
        payload: todoItem.id,
      }),
    },
  ];

  return (
    <li className="todo-list-item-root" data-completed={todoItem.complete}>
      <div className="todo-list-item-primary-content">
        <input
          type="checkbox"
          checked={todoItem.complete}
          id={`checkbox-${todoItem.id}`}
          title={`Mark item "${todoItem.todo}" as ${todoItem.complete ? 'pending' : 'completed'}`}
          onChange={() => {
            dispatch({
              type: 'toggleCompletion',
              payload: todoItem.id,
            })
          }}
        />

        <label
          className="todo-list-item-label"
          htmlFor={`checkbox-${todoItem.id}`}
        >
          {todoItem.todo}
        </label>
      </div>

      <div className="todo-list-item-actions-group">
        {todoListItemActions.map((action) => (
          <TodoListItemActionButton
            key={action.title}
            Icon={action.Icon}
            ariaLabel={action.ariaLabel}
            title={action.title}
            onClick={action.onClick}
          />
        ))}
      </div>
    </li>
  );
}

export default TodoListItem;
