import React from "react";
import TodoListItem from "../ListItems/index";
import { TodoItem } from "../../utils/types";
import "./styles.css";

interface TodoListProps {
  todoList: TodoItem[];
}

function TodoList({ todoList }: TodoListProps) {
  return (
    <ul className="todo-list-root">
      {todoList.map((todoItem) => (
        <TodoListItem key={todoItem.id} todoItem={todoItem} />
      ))}
    </ul>
  );
}

export default TodoList;
