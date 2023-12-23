import "./App.css";
import { Header } from "./components/Header";
import { ContextProvider } from "./contexts/countContext";

function App() {
  return (
    <>
      <ContextProvider>
        <Header></Header>
      </ContextProvider>
    </>
  );
}

export default App;
