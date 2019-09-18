new Vue({
    el: '#app',
    data: {
        message: 'world',
        link: 'https://www.google.fr/',
        success: 'error',
        persons: [
            'me',
            'you',
            'us'
        ],
        flash: false,
        flashMessage: 'news infos' 
    },

    methods: {
        close: function () {
            this.success = false
        }
    },
}) 