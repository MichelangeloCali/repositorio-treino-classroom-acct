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
      <HelloWorld name={text.replace("hello", "HELLO")} color="#e71ddd" />
      <HelloWorld name={text.replace("world", "WORLD")} color="#8273c2" />
      <HelloWorld name={text.split("").reverse().join("")} color="#f15555" />
      <HelloWorld
        name={text.split("hello,").reverse("world").join(" hello,")}
        color="#49ee93"
      />
      <HelloWorld name={text.toUpperCase().split("O")} color="#1c7700" />
      <HelloWorld />
    </div>
  );
}

export default App;
