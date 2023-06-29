import { useState } from "react";
import { Link } from "react-router-dom";
import "./AuthFormStyle.css";
import Root from "../../routes/Root";

function AuthForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (
      (email === "user@gmail.com" && password === "password") ||
      (email === "admin@gmail.com" && password === "adminpassword")
    ) {
      setLoggedIn(true);
    } else {
      alert("The user is not correct");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <>
      {isLoggedIn ? (
        <div className="loggedinContainer">
          <Root />
          <h2 className="welcomeTitle">Welcome {name}</h2>
          <p className="introText">
            Welcome to our TaskApp💥! Here you are on our main page, the
            starting point of this exciting tool in development🚀. Our goal is to
            provide you with a complete experience to manage your tasks
            efficiently and productively🔥. Although we are still in the
            development phase, soon you will be able to not only view your
            tasks, but also modify them and add new tasks to your personalized
            list😎.
          </p>
          <p className="infoText">
            Click in the link below to see your task list:
          </p>
          <Link className="linkText" to="/taskboard">
            Go to Task Board
          </Link>
          <button className="loggoutButton" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <>
          <h2 className="welcomeTitle" style={{color: "#00d8ff"}} >Manager task</h2>
          <div className="loginContainer">
            <input
              className="welcomeInputs"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {name === "" ? (
              <p style={{ color: "red" }}>Write your name first</p>
            ) : null}
            <input
              className="welcomeInputs"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="welcomeInputs"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="loginButton" onClick={handleLogin}>
              LOGIN
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default AuthForm;
