import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import Pomodoro from '@/components/Pomodoro'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'landing-page',
            component: LandingPage
        },
        {
            path: '/pomodoro',
            name: 'pomodoro',
            component: Pomodoro
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
