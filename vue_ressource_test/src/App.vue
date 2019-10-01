<template>
  <v-app>
    <v-content>
      <div class="active dimmer" v-if="loading"></div>
      <v-simple-table>
        <thead>
          <tr>
            <th>name</th>
            <th>username</th>
            <th>email</th>
            <th>address</th>
            <th>phone</th>
            <th>company</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user,index) in users" :key="index">
            <td>
              <input type="text" v-model="user.name" />
            </td>
            <td>{{user.username}}</td>
            <td>{{user.email}}</td>
            <td>
              <v-list-item>
                <v-list-item-content>{{user.address.street}}</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>{{user.address.Apt}}</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>{{user.address.city}}</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>{{user.address.zipcode}}</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>{{user.address.geo.lat}}</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>{{user.address.geo.Ing}}</v-list-item-content>
              </v-list-item>
            </td>
            <td>{{user.phone}}</td>
            <td>
              <v-list-item>
                <v-list-item-content>{{user.company.name}}</v-list-item-content>
                <v-list-item-content>{{user.company.catchPhrase}}</v-list-item-content>
                <v-list-item-content>{{user.company.bs}}</v-list-item-content>
              </v-list-item>
            </td>
            <td>
              <v-btn @click="saveUser(user)">modifier</v-btn>
              <v-btn @click="deleteUser(user)">supprimer</v-btn>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-content>
  </v-app>
</template>
<script>
import App from "./App";
export default {
  name: "App",
  data: () => ({
    users: [],
    loading: false,
    message: false
  }),
  mounted() {
    this.$user = this.$resource(
      "users{/id}",
      {},
      {},
      {
        before: () => {
          this.loading = true;
        },
        after: _ => {
          this.loading = false;
        }
      }
    );
    this.$user.query().then(
      response => {
        this.users = response.data;
      },
      response => {
        console.log("erreur", response);
      }
    );
  },
  methods: {
    saveUser(user) {
      this.$user
        .update(
          { id: user.id },
          {
            name: user.name
          }
        )
        .then(
          response => {
            console.log(user.name + " success", response);
          },
          response => {
            console.log(user.name + "erreur", response);
          }
        );
    },
    deleteUser(user) {
      this.$user.remove({ id: user.id }).then(
        response => {
          this.users = this.users.filter(u => u !== user);
        },
        response => {
          console.log(user.name + "erreur", response);
        }
      );
    }
  }
};
</script>
<style lang="css">
.dimmer {
  height: 10px;
  width: 10px;
  background: black;
}
</style>
