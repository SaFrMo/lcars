<template>

    <div class="wrap">
        <transition name="slide-in" appear>
            <main>

                <router-link to="/">Home</router-link>

                <input type="number" v-model.number="minutes" />

                <button @click="startTimer">Start Timer</button>

                <h2 v-if="running">Time left: {{ minutesLeft }}:{{ secondsLeft }}</h2>

            </main>
        </transition>
    </div>

</template>

<script>

import { ipcRenderer } from 'electron'

export default {
    data(){
        return {
            timer: false,
            lastTimestamp: 0,
            minutes: 25,
            running: false,
            timeLeft: 0
        }
    },
    methods: {
        startTimer(){
            const ms = this.minutes * 60 * 1000
            this.running = true
            this.timeLeft = this.minutes

            this.timer = setTimeout(() => {
                new Notification('Pomodoro done!')
            }, ms)

            this.timeLeft = ms
            this.lastTimestamp = Date.now()

            this.updateTimer()
        },
        updateTimer(){
            const now = Date.now()
            this.timeLeft -= now - this.lastTimestamp
            this.lastTimestamp = now

            if( this.timeLeft > 0 ){
                requestAnimationFrame(this.updateTimer)
            } else {
                this.running = false
            }
        }
    },
    computed: {
        minutesLeft(){
            return Math.floor( this.timeLeft / 1000 / 60 ) || 0
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
