import React, { useState } from "react";

export default function TernaryRendering() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  // ✅ Small reusable component
  function Item({ name, isPacked }) {
    return (
      <li className="item">
        {name} {isPacked ? "✔" : "❌"}
      </li>
    );
  }

  return (
    <div className="text-center mt-5">
      {/* ✅ Login / Logout toggle */}
      {isLoggedIn ? (
        <button onClick={() => setLoggedIn(false)} className="btn btn-danger">
          Logout
        </button>
      ) : (
        <button onClick={() => setLoggedIn(true)} className="btn btn-primary">
          Login
        </button>
      )}

      {/* ✅ List rendering with ternary */}
      <ul className="mt-3">
        <Item isPacked={true} name="Apple" />
        <Item isPacked={true} name="Banana" />
        <Item isPacked={false} name="Kiwi" />
      </ul>
    </div>
  );
}
