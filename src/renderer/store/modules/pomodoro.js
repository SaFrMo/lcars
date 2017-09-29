const state = {
    secondsRemaining: 0,
    endTime: 0
}

const mutations = {
    START_TIMER(state, payload){

        // start a new timer
        if( state.secondsRemaining <= 0 ){
            state.secondsRemaining = payload.time * 60 || 25 * 60 // 25 minut default
            state.timeStarted = Date.now()
            state.endTime = Date.now() + state.secondsRemaining * 1000
        }
    }
}

const actions = {
    // someAsyncTask ({ commit }) {
    // // do something async
    //     commit('INCREMENT_MAIN_COUNTER')
    // }
}

export default {
    state,
    mutations,
    actions
}
