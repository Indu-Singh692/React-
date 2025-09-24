import React, { useState } from "react";

export default function BasicRendering() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  // let content;

  // if (isLoggedIn) {
  //   content = <button className="btn btn-danger">Logout</button>;
  // } else {
  //   content = <button className="btn btn-primary">Login</button>;
  // }

  // return (
  //   <div className="text-center mt-5">
  //     {content}
  //   </div>
  // );


  return (
    <div className="text-center mt-5">
      {/* Agar isLoggedIn true hai to Logout button render hoga */}
      {isLoggedIn && <button className="btn btn-danger">Logout</button>}

      {/* Agar isLoggedIn false hai to Login button render hoga */}
      {!isLoggedIn && <button className="btn btn-primary">Login</button>}

      <br />
      <button
        className="btn btn-secondary mt-3"
        onClick={() => setLoggedIn(!isLoggedIn)}
      >
        Toggle State
      </button>
    </div>
  );
}
