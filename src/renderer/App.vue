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
                shell.openExternal(evt.target.href);
            }
        })
    }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Oswald');
$mainFont: #FE9800;

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Oswald', sans-serif;
    color: $mainFont;
    text-transform: uppercase;
}
.lower {
    text-transform: none;
}

#app {
    background:
    linear-gradient(
        -45deg,
        rgba(0, 0, 0, 1),
        rgba(20, 15, 15, 1)
    );
    height: 100vh;
    width: 100vw;
}

</style>
