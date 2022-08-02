import React, { useReducer } from "react";
import reducer from "./utils/reducer";
import "./App.css";
import Header from "./components/Header";
import Container from "./components/Basic/Container";
import TodoList from "./components/TodoListCotnainer";


function App() {

  return (
    <>
      <div className="app">
        <Header />
        <main>
          <Container>
          </Container>
        </main>
      </div>
    </>
  );
}

export default App;
