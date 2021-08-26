<template>
  <div class="header">
    <div class="contacts">
      <a class="contacts header__contacts" href="#">
        <b-icon icon="facebook" aria-hidden="true"></b-icon></a>
      <a class="contacts header__contacts" href="#">
        <b-icon icon="instagram" aria-hidden="true"></b-icon>
      </a>
      <a class="contacts header__contacts" href="#">
        <b-icon icon="twitter" aria-hidden="true"></b-icon>
      </a>
    </div>
    <img class="img__header" src="../assets/header-logo-a.png" alt="headerImg" @click.prevent="goHome" />
    <div class="logo"><img src="#" alt="" /></div>
    <img class="promo__img" src="#" alt="" />
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    goHome() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "Open Sans", sans-serif;
}
 i {
   display: inline-block;

   ;
 }
.header {
  min-height: 100px;
  background-color: black;
  padding: 30px 10px;
}
.img__header {
  display: block;
  margin: 0px auto;
  max-width: 200px;
  cursor: pointer;
  opacity: 70%;
}
.contacts {
  padding: 10px;
  display: inline;
  margin-top: 6px;
  max-width: 180px;
}
.contacts .header__contacts {
  display: inline-flex;
  width: 35px;
  height: 35px;
  background-color: #33383b;
  border-radius: 2px;
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  margin-left: 3px;
  transition: all 0.25s;
}
.contacts .header__contacts:hover {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
}

.contacts .header__contacts:hover {
  text-decoration: underline;
}

</style>
