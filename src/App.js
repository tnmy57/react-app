import "./App.css";

function App() {

  function zoomin() {
    document.getElementById("image").style.transform = "scale(1.5)";
  }
  function zoomout() {
    document.getElementById("image").style.transform = "scale(1)";
  }

  return (
    <div className="App">
      <img
        id="image"
        onMouseOver={() => {
          zoomin();
        }}
        onMouseOut={() => {
          zoomout();
        }}
        src="https://picsum.photos/id/233/500/250"
        alt="rail"
      />
      <form>
        <input
          onFocus={() => {
            console.log("Focus on the textbox");
          }}
          onBlur={() => {
            console.log("Out of the textbox");
          }}
        ></input>
      </form>
      <button
        onClick={() => {
          console.log("hello");
        }}
        onDoubleClick={() => {
          alert("hi");
        }}
      >
        submit
      </button>
    </div>
  );
}

export default App;
