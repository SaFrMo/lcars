<template>

    <div id="wrapper">

        <div class="breadcrumb-wrap">
            <transition name="slide-rtl" appear>
                <div class="breadcrumb">
                    <h1>LCARS ACCESS 001</h1>
                    <h2 class="lower">Good {{ salutation }}.</h2>
                </div>
            </transition>
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
              let hour = now.getUTCHours() - now.getTimezoneOffset() / 60
              while (hour < 0 || hour > 23){
                  hour += 24 * (hour < 0 ? 1 : -1)
              }
              return hour < 12 ? 'morning' : hour < 17 ? 'afternoon' : 'evening'
          }
      }
  }
</script>

<style lang="scss">

$violet: #9B98FE;

.breadcrumb-wrap {
    display: flex;
    justify-content: flex-end;
}

.breadcrumb {
    text-align: right;
    line-height: 1.2;
    padding-top: 25px;
    display: inline-block;

    h1 {
        font-size: 50px;
        line-height: 1;
        margin: 0 15px 10px 0;
        font-weight: 400;
    }

    h2 {
        background-color: $violet;
        color: #000;
        padding: 15px 15px 5px;
        border-radius: 30px 0 0 30px;
    }
}

.slide-ltr-enter-active, .slide-ltr-leave-active,
.slide-rtl-enter-active, .slide-ltr-leave-active {
    transition: transform 0.6s;
}
.slide-ltr-enter, .slide-ltr-leave-to {
    transform: translateX(-100%);
}
.slide-rtl-enter, .slide-rtl-leave-to {
    transform: translateX(100%);
}

</style>
