import "./App.css";
import Header from "./components/Header";
import TodoContainer from "./components/TodoContainer";
import Container from "./components/Basic/Container";

function App() {
  return (
    <>
        <div className="app">
            <Header/>
            <main>
                <Container>
                    <TodoContainer/>
                </Container>
            </main>
        </div>
    </>
  );
}

export default App;
