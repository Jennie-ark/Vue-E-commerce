<template>
  <div class="menu">
    <div class="container">
      <a class="list" @click.prevent="goHome">Home</a>
      <a class="list" @click.prevent="goHome">About us</a>
      <a class="list" href="#" v-b-modal.modal-1 @click="goLogin">
        Login
      </a>
      <a class="list"  @click.prevent="gotoCart"><b-icon icon="cart4" aria-hidden="true"></b-icon></a>


      <a class="list" @click="gotoCart"><i class="fas fa-shopping-cart"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      cart: "",
    };
  },

  created() {
    if (JSON.parse(localStorage.getItem("products"))) {
      this.cart = JSON.parse(localStorage.getItem("products"));
    }
  },
  methods: {
    gotoCart() {
      this.$router.push("/cart");
    },
    goHome() {
      this.$router.push("/");
    },
    goLogin() {
      this.$router.push("/Login");
    },
  },
};
</script>

<style scoped>
  .menu {
    min-height: 100px;
    background: black;
    text-align: center;
  }
  .menu .list {
    display: inline-block;
    color: white;
    margin-left: 70px;
    text-decoration: none;
    font-size: 20px;
    cursor: pointer;
  }
  .menu .list:hover {
    color:  #c5a645;
    transition: all 0.5s;
  }


  /* Media Queries */

  @media (max-width: 640px) {
    .menu .list {
      margin-left: 50px;
    }
  }
  @media (max-width: 414px) {
    .menu .list {
      margin-left: 30px;
    }
  }
  @media (max-width: 411px) {
    .menu .list {
      margin-left: 28px;
    }
  }
  @media (max-width: 400px) {
    .menu .list {
      margin-left: 15px;
    }
  }
  @media (max-width: 375px) {
    .menu .list {
      margin-left: 22px;
    }
  }
  @media (max-width: 320px) {
    .menu .list {
      margin-left: 15px;
    }
  }
  @media (max-width: 280px) {
    .menu .list {
      margin-left: 9px;
    }
  }
</style>
