import {useState, useEffect} from "react";


function Hello() {
  function hiFn() {
    console.log("hi :)")
    return ByeFn;
  }
  function ByeFn() {
    console.log("bye :(")
  }

  useEffect(hiFn, [])
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);;
  const onClick = () => setShowing((prev)=> !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "show"}</button>
    </div>
  );
}

export default App;
