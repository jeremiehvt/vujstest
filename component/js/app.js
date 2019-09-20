let formUser = {
  props: {
    value: Object
  },
  data: function() {
    return {
      user: { ...this.value }
    };
  },
  methods: {
    save: function() {
      let test = { ...this.user };
      this.$emit("input", { ...this.user });
    }
  },
  template: `
    <form class="ui form" @submit.prevent="save">
        <div class="field">
            <label for="">Prénom</label>
            <input type="text" v-model="user.firstname">
        </div>
        <div class="field">
            <label for="">Nom</label>
            <input type="text" v-model="user.lastname">
        </div>
        <button type="submit">envoyer</button>
    </form>
   `
};

let monMessage = {
  props: {
    type: { type: String, default: "success" },
    message: { type: String },
    header: { type: String }
  },
  template: `<div class="message">
        {{ message }}
        <a href="#" class="close" @click.prevent.stop="close()">close</a>
        <div class="header">{{ header }}</div>
    </div>`,
  methods: {
    close: function() {
      this.$emit("close");
    }
  }
};

let counter = {
  template: `<div>
        <button @click="increment">{{ count }}</button>
    </div>`,
  data: function() {
    return {
      count: 0
    };
  },
  props: {
    start: { type: Number, default: 0 }
  },
  // computed: {
  //     total: function() {
  //         return this.start + this.count
  //     }
  // },
  methods: {
    increment: function() {
      this.count++;
    }
  },
  mounted: function() {
    this.count = this.start;
  }
};

let vm = new Vue({
  el: "#app",
  data: {
    alert: false,
    message: "danger",
    user: {
      firstname: "me",
      lastname: "you"
    }
  },
  components: {
    monMessage,
    counter,
    formUser
  },
  methods: {
    showAlert: function() {
      this.alert = true;
    },
    hideAlert: function() {
      this.alert = false;
    }
  }
});
