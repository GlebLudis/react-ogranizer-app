import React from "react";
import TodoListItem from "../ListItems/index";
import { TodoItem } from "../../utils/types";
import { FilterOption } from "../Tabs/Group";
import "./styles.css";

interface TodoListProps {
  todoList: TodoItem[];
  filterBy: FilterOption;
}

function TodoList({ todoList, filterBy }: TodoListProps) {
  const filteredTodoList = todoList.filter((todoItem) => {
    switch (filterBy) {
      case "pending":
        return !todoItem.complete;

      case "completed":
        return todoItem.complete;

      default:
        return true;
    }
  });

  return (
    <ul className="todo-list-root">
      {filteredTodoList.map((todoItem) => (
        <TodoListItem key={todoItem.id} todoItem={todoItem} />
      ))}
    </ul>
  );
}

export default TodoList;
