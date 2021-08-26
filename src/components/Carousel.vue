<template>
  <div>

    <div>
      <b-carousel
              id="carousel-fade"
              fade
              indicators
              img-width="1024"
              img-height="480"
              background="black"
      >
        <b-carousel-slide

                :img-src="require('../assets/slide_1.jpg')"
        ></b-carousel-slide>
        <b-carousel-slide

                :img-src="require('../assets/slide_2.jpg')"
        ></b-carousel-slide>
        <b-carousel-slide

                :img-src="require('../assets/slide_3.jpg')"
        ></b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel'
};
</script>

<style scoped>

</style>
