'use strict';

const { createApp } = Vue;

// Vue App - Title
const vm = createApp({
    data() {
        return {
            title: 'Titolo grande'
        };
    }
}).mount('#app');