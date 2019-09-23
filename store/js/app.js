class NotificationsStore {
  constructor() {
    this.state = {
      count: 0
    };
  }

  increment() {
    this.state.count++;
  }

  decrement() {
    this.state.count--;
  }
}

let notifications_store = new NotificationsStore();

let counter = {
  data: function() {
    return {
      state: notifications_store.state
    };
  },
  computed: {
    count: function() {
      return this.state.count;
    }
  },
  methods: {
    increment: function() {
      notifications_store.increment();
    }
  },
  template: `<button @click="increment"> {{ count }} </button>`
};

let notifications = {
  components: { counter },
  methods: {
    addNotif: function() {
      notifications_store.increment();
    }
  },
  template: `
    <div>
        <counter></counter>
        <button @click="addNotif">increment</button>
    </div>
  `
};

let vm = new Vue({
  el: "#app",

  data: {
    notifs_count: 0
  },

  components: {
    counter,
    notifications
  }
});
