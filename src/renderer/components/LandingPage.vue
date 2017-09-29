<template>

    <div id="wrapper">
        <h1>Good {{ salutation }}.</h1>

        <nav>
            <ul>
                <li v-for="page in pages">
                    <router-link :to="{ name: page.name.toLowerCase() }">{{ page.name }}</router-link>
                </li>
            </ul>
        </nav>

        <useful-links/>
    </div>

</template>

<script>
  export default {
      name: 'landing-page',
      data() {
          return {
              pages: [
                  { name: 'Pomodoro' }
              ]
          }
      },
      computed: {
          salutation(){
              const now = new Date()
              const hour = now.getUTCHours() - now.getTimezoneOffset() / 60
              return hour < 12 ? 'morning' : hour < 17 ? 'afternoon' : 'evening'
          }
      }
  }
</script>

<style>

</style>
