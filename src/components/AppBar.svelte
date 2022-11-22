<script context="module">
  export async function load() {
      return {user: "hello"}
  }
</script>
<script lang="ts">
  let data;
  console.log(data);
  function onHello(){
    alert("hello")
  }
</script>

<main>
  <p>AppBar</p>
  <button on:click={onHello}>Hello</button>
</main>
<style lang="scss">
main{
  height: 80px;
  widows: 100%;
  background-color: blue;
}
</style>