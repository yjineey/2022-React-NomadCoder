import styles from "./UseEffect.module.css"
import {useState, useEffect} from "react";

function App() {
  const [counter, setValue ] = useState(0);
  const [keyworkd, setKeyword ] = useState("");

  const onClick = () => setValue((prev) => prev+ 1 );
  const onChange = (event) => setKeyword(event.target.value);

  // useEffect = 컴포넌트가 처음 랜더링 될 때 1번만 실행되도록 보호
  useEffect(() => {
    console.log("I run only once >> ");
  }, []);
  
  // [keyword]가 변화할 때 console.log를 실행할거야
  useEffect(() => {
    if(keyworkd !== "" && keyworkd.length > 6){
      console.log("I run 'keyword' changes :: ", keyworkd)
    }
  }, [keyworkd]);

  useEffect(() => {
    if(counter !== 0){
      console.log("I run 'counter' changes  >> ",counter);
    }
  }, [counter]);

  useEffect(() => {
      console.log("I run 'counter' || 'keyword' changes ");
  }, [counter, keyworkd]);
  
  return (
    <div>
      <h1 className={styles.title}>Welcome back!!!</h1>
      <input 
        value = {keyworkd}
        onChange={onChange} 
        stype="text" 
        placeholder="Search here..." 
      />
      <h3> counter :: {counter}</h3>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
