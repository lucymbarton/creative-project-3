<template>
  <div id="app">
  <!-- todo: add navigation -->
    <div class="nav">
      <h1 style="margin-left: 5%; margin-top: auto; margin-bottom: auto;"> Characters </h1>

      <div style="margin-left: auto; margin-top: auto; margin-bottom: auto">
        <a>Home</a>
        <a>Characters</a>
        <a>Compatability</a>
      </div>
      
    <MovieList></MovieList>

    </div>
    
    <!-- todo: add explanation of page -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    background-color: black;
  }
  h1 {
    color: white;
  }
  .nav {
    display: flex;
    border: solid 1px white;
    height: 100px;
  }
  a {
    color: white;
    margin: 15px;
  }
</style>
