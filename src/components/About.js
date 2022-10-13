export default function About(props) {
  return (
    <div
      className="container"
      style={{
        backgroundColor: props.mode === "dark" ? "#17191b" : "white",
        color: props.mode === "dark" ? "#9b9d9e" : "black",
      }}
    >
      <h1>About TextUtils</h1>
      <div
        className="accordion"
        id="accordionExample"
        style={{
          backgroundColor: props.mode === "dark" ? "#17191b" : "white",
          color: props.mode === "dark" ? "#9b9d9e" : "black",
        }}
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
                backgroundColor: props.mode === "dark" ? "#17191b" : "white",
                color: props.mode === "dark" ? "#9b9d9e" : "black",
              }}
            >
              <strong>Upper Case</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "#17191b" : "white",
                color: props.mode === "dark" ? "#9b9d9e" : "black",
              }}
            >
              Convert The Whole Text To Upper Case
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{
                backgroundColor: props.mode === "dark" ? "#17191b" : "white",
                color: props.mode === "dark" ? "#9b9d9e" : "black",
              }}
            >
              <strong>Lower Case</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "#17191b" : "white",
                color: props.mode === "dark" ? "#9b9d9e" : "black",
              }}
            >
              Convert All the Text To Lower Case
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{
                backgroundColor: props.mode === "dark" ? "#17191b" : "white",
                color: props.mode === "dark" ? "#9b9d9e" : "black",
              }}
            >
              <strong>Clear</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "#17191b" : "white",
                color: props.mode === "dark" ? "#9b9d9e" : "black",
              }}
            >
              Clear The Whole Text Area
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
              style={{
                backgroundColor: props.mode === "dark" ? "#17191b" : "white",
                color: props.mode === "dark" ? "#9b9d9e" : "black",
              }}
            >
              <strong>Sentance Case</strong>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "#17191b" : "white",
                color: props.mode === "dark" ? "#9b9d9e" : "black",
              }}
            >
              Just Make The First Letter Of the Sentence Capital
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
              style={{
                backgroundColor: props.mode === "dark" ? "#17191b" : "white",
                color: props.mode === "dark" ? "#9b9d9e" : "black",
              }}
            >
              <strong>Capitalize Case</strong>
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "#17191b" : "white",
                color: props.mode === "dark" ? "#9b9d9e" : "black",
              }}
            >
              Make the first letter of every word Capital <br />
              SAMPLE: This Is A Sample Text.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
              style={{
                backgroundColor: props.mode === "dark" ? "#17191b" : "white",
                color: props.mode === "dark" ? "#9b9d9e" : "black",
              }}
            >
              <strong>Alternate Case</strong>
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "#17191b" : "white",
                color: props.mode === "dark" ? "#9b9d9e" : "black",
              }}
            >
              Make the letters in an alternative capital case <br />
              SAMPLE: tHiS Is a sAmPlE TeXt.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSeven">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
              style={{
                backgroundColor: props.mode === "dark" ? "#17191b" : "white",
                color: props.mode === "dark" ? "#9b9d9e" : "black",
              }}
            >
              <strong>Inverse Case</strong>
            </button>
          </h2>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse"
            aria-labelledby="headingSeven"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "#17191b" : "white",
                color: props.mode === "dark" ? "#9b9d9e" : "black",
              }}
            >
              Make the letters in an inverse alternative capital case <br />
              SAMPLE: ThIs iS A SaMpLe tExT.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
