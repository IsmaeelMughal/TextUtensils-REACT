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
              Upper Case
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
              Lower Case
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
              Clear
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
              Sentance Case
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
      </div>
    </div>
  );
}
