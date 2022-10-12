import React, { useState } from "react";
import "./App.css";
import Alerts from "./components/Alerts";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#17191b";
      showAlert("Dark Mode has been Enabled!!!", "success");
    } else if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled!!!", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          About="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alerts alert={alert} />
        <Routes>
          <Route path="/about" element={<About mode={mode} />}></Route>

          <Route
            path="/"
            element={
              <TextForm
                heading="Enter Text to Analyze:"
                mode={mode}
                showAlert={showAlert}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
