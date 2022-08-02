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
        <TodoListItem
          todoItem={todoItem}
          onEdit={() => {}}
          onDelete={() => {}}
          onToggleCompletion={() => {}}
        />
      ))}
    </ul>
  );
}

export default TodoList;
