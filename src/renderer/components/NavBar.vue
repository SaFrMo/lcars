<template>

    <div class="nav-bar">
        <nav>
            <transition name="slide-down">
                <div class="pod" v-if="$route.path != '/'">
                    <router-link to="/">Home</router-link>
                </div>
            </transition>

            <div class="pod">
                <h2>Utilities</h2>
                <ul>
                    <li v-for="link in interiorLinks">
                        <router-link :to="{ name: link.path }">{{ link.name }}</router-link>
                    </li>
                </ul>
            </div>

            <div class="pod">
                <h2>Outside Links</h2>
                <ul>
                    <li v-for="link in externalLinks">
                        <a :href="link.path" target="_blank">{{ link.name }}</a>
                    </li>
                </ul>
            </div>

            <div class="pod">
                <h2>Misc</h2>
                <ul>
                    <li><a href="#" @click="awsSpot">Spot Request</a></li>
                    <!-- <li><a href="#" @click="runAws('ec2-spot')">Standard Instance</a></li> -->
                </ul>
            </div>
        </nav>

        <div class="separator"></div>
    </div>

</template>

<script>
import { ipcRenderer } from 'electron'

class Link {
    constructor(name, path){
        this.name = name || 'default'
        this.path = path || `/${ this.name.toLowerCase() }`
        this.external = external === null ? false : external
    }
}

export default {
    data(){
        return {
            interiorLinks: [
                new Link('Pomodoro')
            ],
            externalLinks: [
                new Link('DeployHQ', 'https://funkhaus.deployhq.com/')
            ]
        }
    },
    methods: {
        awsSpot(){
            ipcRenderer.send('ec2-spot')
        }
    }
}

</script>

<style lang="scss">

$purple: #C498C4;
$blue: #9B98FE;
$rose: #CC6061;

nav {
    display: inline-flex;
    flex-direction: column;
}
.pod {
    display: inline-block;
    color: #000;
    padding: 50px 10px 10px;
    min-width: 160px;
    text-align: right;
    margin: 10px 10px 0;
    font-size: 15px;
    background-color: $purple;
    overflow: hidden;
}
.pod + .pod {
    padding: 10px 10px 30px;
    background-color: $blue;
}
.pod + .pod + .pod {
    background-color: $rose;
}
.slide-down-enter-active, .slide-down-leave-active {
    transition: transform 0.4s;
}
.slide-down-enter, .slide-down-leave-to {
    transform: translateY(-100%);
}

</style>
