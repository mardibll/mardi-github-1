import "./App.css";
import Myclass from "./component/classComponnent";
import Functions from "./component/functionComponent";

function App() {
  return (
    <div className="App">
      <Myclass text="Saya menggunakan class component" />
      <Functions text={"Saya menggunakan function component"} />
    </div>
  );
}

export default App;
