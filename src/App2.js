import "./App.css";
import Video from "./components/video";

function App2() {
  const obj = {
    id: "1",
    title: "React Tutorial",
    channel: "Coder Dost2",
    views: "145k",
    time: "11 month ago",
  };
  return (
    <div className="App2">
      <div className="App-header2">
        <Video {...obj} />
        <Video
          id="2"
          title="Node JS Tutorial"
          channel="Coder Dost2"
          views="100k"
          time=" 1 month ago"
        />
        <Video
          id="3"
          title="JavaScript Tutorial"
          channel="Coder Dost2"
          views="1 M"
          time="9 year ago"
        />
      </div>
    </div>
  );
}

export default App2;
