import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpperCaseBtn = () => {
    if (text.trim().length === 0) {
      props.showAlert("Please Enter Some Text!!!", "danger");
      return;
    }
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text has been converted to UPPER CASE!!!", "success");
  };

  const handleLowerCaseBtn = () => {
    if (text.trim().length === 0) {
      props.showAlert("Please Enter Some Text!!!", "danger");
      return;
    }
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text has been converted to lower case!!!", "success");
  };

  const handleClearBtn = () => {
    if (text.trim().length === 0) {
      props.showAlert("Please Enter Some Text!!!", "danger");
      return;
    }
    let newText = "";
    setText(newText);
    props.showAlert("All text is Cleared!!!", "success");
  };

  const handleSentenceCaseBtn = () => {
    if (text.trim().length === 0) {
      props.showAlert("Please Enter Some Text!!!", "danger");
      return;
    }
    let newText = text.split(".");
    let newArr = [];
    for (let i = 0; i < newText.length; i++) {
      const element = newText[i];
      newArr.push(
        element.trim().charAt(0).toUpperCase() +
          element.trim().slice(1).toLowerCase()
      );
    }
    // Removing the specified element by value from the array
    for (var i = 0; i < newArr.length; i++) {
      if (newArr[i] === "") {
        newArr.splice(i, 1);
      }
    }
    newText = "";
    newArr.forEach((value, index) => {
      if (index === newArr.length - 1) {
        newText = newText + value + ".";
      } else {
        newText = newText + value + ". ";
      }
    });
    setText(newText);
    props.showAlert("Converted to Sentence case!!!", "success");
  };

  const handleCapetalizedCaseBtn = () => {
    if (text.trim().length === 0) {
      props.showAlert("Please Enter Some Text!!!", "danger");
      return;
    }
    let newText = text.split(" ");
    let newArr = [];
    for (let i = 0; i < newText.length; i++) {
      const element = newText[i];
      newArr.push(
        element.trim().charAt(0).toUpperCase() +
          element.trim().slice(1).toLowerCase()
      );
    }
    // Removing the specified element by value from the array
    for (var i = 0; i < newArr.length; i++) {
      if (newArr[i] === "") {
        newArr.splice(i, 1);
      }
    }
    newText = "";
    newArr.forEach((value, index) => {
      if (index === newArr.length - 1) {
        newText = newText + value + "";
      } else {
        newText = newText + value + " ";
      }
    });
    setText(newText);
    props.showAlert(
      "Text Has Been Converted To Capitalized Case!!!",
      "success"
    );
  };

  const handleAlternateCaseBtn = () => {
    if (text.trim().length === 0) {
      props.showAlert("Please Enter Some Text!!!", "danger");
      return;
    }
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 1) {
        newText = newText + text[i].toUpperCase();
      } else {
        newText = newText + text[i].toLowerCase();
      }
    }
    setText(newText);
    props.showAlert("Text has been converted to aLtErNaTe cAsE!!!", "success");
  };
  const handleInVeRsECaseBtn = () => {
    if (text.trim().length === 0) {
      props.showAlert("Please Enter Some Text!!!", "danger");
      return;
    }
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 0) {
        newText = newText + text[i].toUpperCase();
      } else {
        newText = newText + text[i].toLowerCase();
      }
    }
    setText(newText);
    props.showAlert("Text has been converted to InVeRsE CaSe!!!", "success");
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container mb-3"
        style={{
          backgroundColor: props.mode === "dark" ? "#17191b" : "white",
          color: props.mode === "dark" ? "#9b9d9e" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="form-group">
          <textarea
            className="form-control"
            value={text}
            placeholder="Enter Text Here"
            id="textBox"
            rows="7"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#212529" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
          <button
            className="btn btn-primary mx-1 my-2"
            onClick={handleUpperCaseBtn}
          >
            UpperCase
          </button>

          <button
            className="btn btn-primary mx-1 my-2"
            onClick={handleLowerCaseBtn}
          >
            LowerCase
          </button>

          <button
            className="btn btn-primary mx-1 my-2"
            onClick={handleClearBtn}
          >
            Clear
          </button>
          <button
            className="btn btn-primary mx-1 my-2"
            onClick={handleSentenceCaseBtn}
          >
            Sentence case
          </button>
          <button
            className="btn btn-primary mx-1 my-2"
            onClick={handleCapetalizedCaseBtn}
          >
            Capetalized Case
          </button>
          <button
            className="btn btn-primary mx-1 my-2"
            onClick={handleAlternateCaseBtn}
          >
            aLteRnaTiNg cAsE
          </button>
          <button
            className="btn btn-primary mx-1 my-2"
            onClick={handleInVeRsECaseBtn}
          >
            InVeRsE CaSe
          </button>
        </div>
      </div>

      <div
        className="container my-3"
        style={{
          backgroundColor: props.mode === "dark" ? "#17191b" : "white",
          color: props.mode === "dark" ? "#9b9d9e" : "black",
        }}
      >
        <h1>Text Summary</h1>
        <p>
          {" "}
          <b>
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }
          </b>{" "}
          = words
        </p>
        <p>
          <b>{text.length}</b> = characters
        </p>
        <p>
          <b>
            {text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length * 0.008}
          </b>{" "}
          = Minutes to Read
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  heading: "DEFAULT HEADING",
};
