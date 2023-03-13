'use strict';

const { createApp } = Vue;

// Vue App - Title
const vm = createApp({
    data() {
        return {
            title: 'Welcome VueJS',
            image: 'img/vue.jpg',
            imageText: 'VueJS'
        };
    }
}).mount('#app');