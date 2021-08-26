<template>
  <div class="home">
    <Header/>
    <Navbar/>
    <Carousel/>
    <Info/>
    <Products/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Products from "../components/Products";
import Header from "../components/Header";
import Info from "../components/Info";
import Footer from "../components/Footer";

export default {
  name: 'Home',
  components: {
    Footer,
    Navbar,
    Carousel,
    Products,
    Header,
    Info,
  }
}
</script>
