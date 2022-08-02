import React, { useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import Container from "./components/Basic/Container";



function App() {

  return (
    <>
      <div className="app">
        <Header />
        <main>
          <Container>
              {/*<TodoList todoList={todoItems}/>*/}
          </Container>
        </main>
      </div>
    </>
  );
}

export default App;
