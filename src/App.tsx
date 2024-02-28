import { useState } from "react";
import Image from "./assets/Text.png";
import reactLogo from "./assets/react.svg";
import Logo from "./assets/good_logo.png";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState<string[]>(["Make a todo"]);
  const [input, setInput] = useState("");

  const addTodoList = () => {
    setTodoList((prevState) => [...prevState, input]);
    setInput("");
  };

  const deleteTodoListItemByIndex = (index: number) =>
    setTodoList((prevState) => prevState.filter((_, i) => i !== index));

  return (
    <div>
      {/* Todo Fix alt text  */}
      <div>
        <img src={Logo} />
      </div>

      {/* Todo Ability to turn of animation */}
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>

      {/* Todo Fix Heading */}
      <p className="h1Style">Welcome to the A11y Workshop website</p>

      {/* Todo Fix text in image */}
      <img src={Image} height="150px" />

      {/* Todo add empty state */}
      {/* Todo Fix list */}
      {todoList.map((todo, index) => (
        <p key={index}>
          {todo}
          {/* Todo Fix Delete Button */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            onClick={() => deleteTodoListItemByIndex(index)}
          >
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
          </svg>
        </p>
      ))}

      <input value={input} onChange={(e) => setInput(e.currentTarget.value)} />
      {/* Todo Fix button https://www.w3.org/WAI/ARIA/apg/patterns/button/ */}
      <div className="buttonStyle" onClick={addTodoList}>
        Add
      </div>
    </div>
  );
}

export default App;
