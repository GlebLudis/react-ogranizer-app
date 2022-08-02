import React, { useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import Container from "./components/Basic/Container";
import TodoContext from "./utils/todoContext";
import TodoContainer from "./components/TodoContainer";
import TodoList from "./components/TodoListCotnainer";
import reducer from "./utils/reducer";
import dummyData from "./utils/data";


function App() {
  const [todoItems, dispatch] = useReducer(reducer, dummyData);

  return (
      <TodoContext.Provider value={{ todoItems, dispatch }}>
      <div className="app">
        <Header />
        <main>
          <Container>
            <TodoContainer />
            <TodoList todoList={todoItems} />
          </Container>
        </main>
      </div>
    </TodoContext.Provider>
  );
}

export default App;
