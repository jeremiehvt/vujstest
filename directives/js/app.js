salut = function (el, binding) {
        console.log(el);
        console.log(binding);

        el.value = binding.value;
    }

let vm = new Vue({
    el: '#app',
    directives: {
        salut: salut
    },
    data: {
        message: 'hello',
        message2: 'bye',
        message3: 'good',
    },

    methods: {
        demo: function (e) {
            console.log(this.message)
        },
        demo2: function (e) {
            console.log(this.message2)
        }
    }
 
});
