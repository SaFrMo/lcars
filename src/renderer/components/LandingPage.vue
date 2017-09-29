<template>

    <div id="wrapper">
        <div class="breadcrumb">
            <h1>LCARS ACCESS 001</h1>
            <h2 class="lower">Good {{ salutation }}.</h2>
        </div>

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

<style lang="scss">

.breadcrumb {
    text-align: right;
    line-height: 1.2;
    padding-top: 25px;

    & h1 {
        font-size: 50px;
        line-height: 1;
        margin-bottom: 5px;
        font-weight: 400;
    }
}

</style>
