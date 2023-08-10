import "./App.css";
import Video from "./components/video";

function App() {
  const obj = 
    {
      id: "1",
      title: "React Tutorial",
      channel: "Coder Dost",
      views: "145k",
      time: "1 month ago",
    }
  ;

  return (
    <div className="App">
      <div className="App-header">
        <Video {...obj} />
        <Video
          id="2"
          title="Node JS Tutorial"
          channel="Coder Dost"
          views="100k"
          time=" 5 month ago"
        />
        <Video
          id="3"
          title="JavaScript Tutorial"
          channel="Coder Dost"
          views="1 M"
          time="1 year ago"
        />
      </div>
    </div>
  );
}

export default App;
