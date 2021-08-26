<template>
  <div>
    <b-navbar toggleable="lg"
              type="dark"
              class="navBar__wrapper">

      <b-navbar-brand
              class="navBar__exit"
              @click.prevent="Logout">
        Exit
      </b-navbar-brand>

      <b-navbar-brand
              class="navBar__admin">
        Admin Panel
      </b-navbar-brand>

      <b-navbar-toggle
              target="nav-collapse">
      </b-navbar-toggle>

    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavbarAdmin",
  methods: {
    Logout() {
      this.$router.push("/");
      console.log('Logout')
    },
  },
};
</script>

<style scoped>
  .navBar__wrapper {
    background: black;

  }
  .navBar__admin {
    display: block;
    margin: 0 auto;
  }
  .navBar__exit {
    margin-left: 50px;
    cursor: pointer;

  }
</style>
