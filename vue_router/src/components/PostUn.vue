<template>
  <div>
    {{msg}}
    Post {{$route.params.id}}
    <router-link :to="{name: 'post_deux', params: {id:2}}">sous vue post deux</router-link>

    <h3>sous vue</h3>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: ""
    };
  },
  beforeRouteEnter(route, redirect, next, to) {
    window.setTimeout(() => {
      next(vm => {
        vm.msg = "loading complete";
      });
    }, 2000);
  },
  beforeRouteLeave(route, redirect, next, to) {
    let confirm = window.confirm("sure yu want leave this page ?");
    if (confirm) {
      next(to);
    } else {
      // pour redirect sur la même page
      redirect;
      // pour redirect sur une autre page
      // next("/");
    }
  }
};
</script>
<style lang="css">
</style>