import React, { useState } from "react";

export default function Card2() {
  const [val, setVal] = useState(false);

  return (
    <div>
      <h1>{val ? "Login" : "Logout"}</h1>
      <button onClick={() => setVal(!val)} className="btn bg-primary">
        Toggle
      </button>
    </div>
  );
}
