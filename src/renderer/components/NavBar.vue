<template>

    <div class="nav-bar">
        <nav>
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
        </nav>

        <div class="separator"></div>
    </div>

</template>

<script>

class Link {
    constructor(name, path){
        this.name = name || 'default'
        this.path = path || `./${ this.name.toLowerCase() }`
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
    }
}

</script>

<style lang="scss">

$purple: #C498C4;
$blue: #9B98FE;

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
}
.pod + .pod {
    padding: 10px 10px 30px;
    background-color: $blue;
}
.separator {

}

</style>
