let capitalize =  function (value, preffix, suffix) {
    console.log(preffix, suffix);
        return preffix+value.toUpperCase(value)+suffix;
};

let vm = new Vue({
    el: '#app',
    
    data: {
        message: 'hello',
       
    },

    filters: {
            capitalize
    }
 
});
