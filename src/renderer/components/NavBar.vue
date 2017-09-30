<template>

    <nav>
        <h2>Utilities</h2>
        <ul>
            <li v-for="link in interiorLinks">
                <router-link :to="{ name: link.path }">{{ link.name }}</router-link>
            </li>
        </ul>
        
        <h2>Outside Links</h2>
        <ul>
            <li v-for="link in externalLinks">
                <a :href="link.path" target="_blank">{{ link.name }}</a>
            </li>
        </ul>
    </nav>

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
