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

let Notifications_store = new NotificationsStore();

let counter = {
  data: function() {
    return {
      state: Notifications_store.state
    };
  },
  template: `<div> {{ notifs_count }} </div>`
};

let notifications = {
  template: `
    <div>
        <counter></counter>
        <button @click="addNotif"></button>
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
