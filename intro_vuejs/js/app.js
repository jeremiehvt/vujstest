let vm = new Vue({
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
        flashMessage: 'news infos',
        successTwo: false,
        messageTwo: '',
        firstName: 'me',
        lastName: 'you'
    },

    methods: {
        close: function () {
            this.success = false
        },
        addPerson: function() {
            this.persons.push('another')
        } 
    },

    computed: {
        cls: function () {
            return this.successTwo === true ? 'success' : 'error'
        },
        fullname: {
            get: function () {
                return this.firstName +'  '+ this.lastName
            },
            set: function (value) {
                let parts = value.split(' ')
                this.firstName = parts[0]
                this.lastName = parts[parts.length - 1]
            }
        }
    },

    watch: {
        fullname: function (value) {
            console.log('watch', value)
        }
    },  
    
});

