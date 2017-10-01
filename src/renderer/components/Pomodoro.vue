<template>

    <div class="wrap">
        <transition name="slide-in" appear>
            <main>

                <router-link to="/">Home</router-link>

                <input type="number" v-model.number="minutes" />

                <button @click="startTimer">Start Timer</button>

                <h2>Time left: {{ minutesLeft }}:{{ secondsLeft }}</h2>

            </main>
        </transition>
    </div>

</template>

<script>

import { ipcRenderer } from 'electron'

export default {
    data(){
        return {
            minutes: 25,
            timeLeft: 0
        }
    },
    mounted(){

    },
    methods: {
        startTimer(){
            this.$store.commit('START_TIMER', { time: this.minutes / 10 })

            // kick loop
            requestAnimationFrame(this.updateTimer)
        },
        updateTimer(){
            this.timeLeft = this.$store.state.pomodoro.endTime - Date.now()

            if( this.timeLeft <= 0 ){
                ipcRenderer.send('pomodoro-done')
            } else {
                requestAnimationFrame(this.updateTimer)
            }
        }
    },
    computed: {
        minutesLeft(){
            return Math.floor( this.timeLeft / 1000 / 60 )
        },
        secondsLeft(){
            return String( Math.floor( this.timeLeft / 1000 % 60 ) ).padStart(2, '0')
        }
    }
}

</script>

<style lang="scss" scoped>

$rose: #CC6061;

.wrap {
    position: absolute;
    width: calc(100% - 180px);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 180px;
}
main {
    background-color: $rose;
    color: #000;
    padding: 50px;
}
.slide-in-enter-active, .slide-in-leave-active {
    transition: transform 0.4s;
}
.slide-in-enter, .slide-in-leave-to {
    transform: translateY(100vh);
}

</style>
