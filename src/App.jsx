

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
import GreetingApp from './components/projects/GreetingApp.jsx';
import Card from './components/Card.jsx';
import Rendering from "./components/ConditionRendering/basicrendering.jsx";
import TernaryRendering from "./components/ConditionRendering/ternaryRendering.jsx";
import Card2 from "./components/useStateHook/Card2.jsx";
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
      {/* <Counter/> */}
      {/* <GreetingApp/> */}
      

      {/* <Card/> */}

      {/* <Rendering/>
      <TernaryRendering/> */}
      <Card2/>
    </div>
  );
}

export default App;
