<template>

    <main>

        <router-link to="/">Home</router-link>

        <input type="number" v-model.number="minutes" />

        <button @click="startTimer">Start Timer</button>

        <h2>Time left: {{ minutesLeft }}:{{ secondsLeft }}</h2>

    </main>

</template>

<script>

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
            this.$store.commit('START_TIMER', { time: this.minutes })

            // kick loop
            requestAnimationFrame(this.updateTimer)
        },
        updateTimer(){
            this.timeLeft = this.$store.state.pomodoro.endTime - Date.now()
            requestAnimationFrame(this.updateTimer)
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
