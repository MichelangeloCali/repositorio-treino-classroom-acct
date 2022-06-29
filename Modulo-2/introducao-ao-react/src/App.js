import HelloWorld from "./Components/HelloWorld";
import styles from "./HelloWorld.module.css";

function App({ name, color }) {
  const text = "hello, world!";

  return (
    <div className={styles.container}>
      <HelloWorld name={text} color="#ffffff" />
      <HelloWorld name={text.toUpperCase()} color="#d8e65c" />
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
    </div>
  );
}

export default App;
