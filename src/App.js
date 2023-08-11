import "./App.css";
import Video from "./components/video";
import List from "./components/list";

function App() {
  const obj = {
    id: "101",
    title: "React Tutorial",
    channel: "Coder Dost",
    views: "145k",
    time: "1 month ago",
  };
  const items = {
    one: "Drawing",
    two: "Photography",
    three: "Design",
  };
  return (
    <div className="App">
      <div className="VideoCards">
        <Video {...obj} />
        <Video
          id="102"
          title="Node JS Tutorial"
          channel="Coder Dost"
          views="100k"
          time=" 5 month ago"
        />
        <Video
          id="103"
          title="JavaScript Tutorial"
          channel="Coder Dost"
          views="1 M"
          time="1 year ago"
        />
      </div>
      <div className="listComp">
        <List layout="numbered" items={items} />
        <List layout="alpha" items={items} />
        <List layout="bullet" items={items} />
      </div>
    </div>
  );
}

export default App;
