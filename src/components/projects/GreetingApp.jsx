import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function GreetingApp() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [msg, setMsg] = useState("");
  const [bgClass, setBgClass] = useState("bg-light");

  useEffect(() => {
    const interval = setInterval(() => {
      let date = new Date();
      setTime(date.toLocaleTimeString());

      let hour = date.getHours();
      if (hour >= 5 && hour < 12) {
        setMsg("🌅 Good Morning");
        setBgClass("bg-warning text-dark"); // yellow morning
      } else if (hour >= 12 && hour <= 18) {
        setMsg("☀️ Good Afternoon");
        setBgClass("bg-info text-white"); // blue afternoon
      } else if (hour >= 18 && hour < 22) {
        setMsg("🌆 Good Evening");
        setBgClass("bg-primary text-white"); // evening blue
      } else {
        setMsg("🌙 Good Night");
        setBgClass("bg-dark text-white"); // night black
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className={`card text-center shadow-lg p-4 ${bgClass}`} style={{ width: "28rem" }}>
        <h2 className="mb-3">Greeting App</h2>
        <h1 className="display-4">{time}</h1>
        <p className="lead fw-bold">{msg}</p>
      </div>
    </div>
  );
}
