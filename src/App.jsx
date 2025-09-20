
// What are Props in React?

// Props = Properties (short form).

// Props are used to pass data from parent component → child component.

// They are read-only (immutable) → child cannot modify props.

// 🔹 Why use Props?

// To reuse components with different data.

// To make components dynamic instead of hardcoding values.

// To pass data (strings, numbers, objects, functions, etc.) between components.


// parent components
import React from "react";
import Greeting from "./components/Greeting.jsx";
import Profile from "./components/passingObj_Array.jsx";
import CustomButton from "./components/passingfunction.jsx";  // आपका custom button
import Button from "react-bootstrap/Button"; 
import TextForm from "./components/TextForm"; // ✅ सही bootstrap button import
 import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from "./components/Counter.jsx";
function App() {
//  const sayHello = () => {
//     alert("Hello Aleena!");
//   };

  return (
    <div className="container ">
      {/* <Greeting name="Aleena" age={22} />
      <Profile user={{ name: "Alice", email: "alice@gmail.com" }} /> */}

      {/* ✅ Custom Button */}
      {/* <CustomButton onClick={sayhello} label="Click Me" /> */}

      {/* ✅ Bootstrap Button */}
      {/* <Button onClick={sayHello} label="Click Me" />
      <div className="container">
        <TextForm heading="Enter user details"/>
      </div> */}
      <Counter/>
    </div>
  );
}

export default App;
