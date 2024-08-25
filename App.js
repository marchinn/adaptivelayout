import "./App.css";
import './slider'

function App() {
  function Card(color, header, description) {
    return (
      <div className="card" style={{ backgroundColor: `${color}` }}>
        <h2>{header}</h2> <p>{description}</p>
      </div>
    );
  }
  // function Slider(num) {
  //   return <div className="slider passive">{num}</div>;
  // }

  return (
    <div className="App">
      <header></header>
      <main>
        <div className="wrapper">
          {Card("#8328CE", "first card", "more longer then the others")}
          {Card("#FF8831", "the second one", "simple but bright")}
          {Card("#FF8831", "this 3", "but this is too bright")}
          {Card("#8328CE", "are")}
          {Card("#8328CE", "the same")}
          {Card("#8328CE", "6")}
          {Card("#8328CE", "7")}
          {Card("#FF8831", "the last one", "see the slider under it")}

          {/* <div id="sliders">
            {Slider("1")}
            {Slider("2")}
            {Slider("3")}
            {Slider("4")}
            {Slider("5")}
            <button id="next">next</button>
            <button id="previous">previous</button>
            <script src="/src/slider.js"></script> */}
          {/* </div> */}
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
