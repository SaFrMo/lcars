<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { shell } from 'electron'


export default {
    name: 'lcars',
    mounted(){
        //open links externally by default
        document.addEventListener('click', evt => {
            if(evt.target.hasAttribute('target') && event.target.getAttribute('target') == '_blank'){
                evt.preventDefault()
                console.log(shell)
                shell.openExternal(evt.target.href);
            }
        })
    }
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
