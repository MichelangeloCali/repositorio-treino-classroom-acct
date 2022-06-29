import HelloWorld from "./Components/HelloWorld";
import styles from "./HelloWorld.module.css";

function App({ name, color }) {
  const text = "hello, world!";

  return (
    <div className={styles.container}>
      <HelloWorld name={text} color="#ffffff" />
      <HelloWorld name={text.toUpperCase()} color="#d8e65c" />
      <HelloWorld name={text.replaceAll("o", "0")} color="#51f727" />
      <HelloWorld
        name={text.replaceAll("l", "1").replaceAll("e", "3")}
        color="#1dbed3"
      />
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
