import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <h2>Hello World, this was the outer div and came from App.jsx file.</h2>
  );
}

export default App;
