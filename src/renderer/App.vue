<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'lcars'
  }
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Oswald');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body { font-family: 'Oswald', sans-serif; }

#app {
    background:
    radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
    );
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
}

</style>
