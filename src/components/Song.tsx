import { createSignal, onMount } from "solid-js";

const [hello, setHello] = createSignal("");
const Song = () => {
  function onClick() {
    alert("it is me");
    setHello("Mengsroin");
  }
  onMount(() => {});
  return (
    <div>
      <button onClick={onClick}>Click me</button>
      <p>{hello()}</p>
    </div>
  );
};

export default Song;
