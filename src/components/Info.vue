<template>
  <div class="info">
    <div class="container">
      <div class="info__cake">
        <h3>Modern & Contemporary Cake Design</h3>
        <p>
          Soufflé caramels sweet roll powder jelly-o cake apple pie danish
          liquorice marshmallow. Halvah tart topping lemon drops icing cookie
          cheesecake croissant. Cookie muffin chocolate apple pie. Chocolate bar
          carrot cake ice cream caramels. Lollipop cupcake cookie.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
};
</script>

<style scoped>
.info {
  padding: 70px 10px;
  background: black;
}
.info .info__cake {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.info .info__cake h3 {
  font-size: 45px;
  color: #c5a645;
  font-weight: 300;
  width: 580px;
}
.info .info__cake p {
  color: white;
  font-size: 20px;
  width: 453px;
}

/* Media Queries */

@media (max-width: 768px) {
  .info .info__cake h3 {
    width: 544px;
  }
}
@media (max-width: 540px) {
  .info .info__cake h3 {
    font-size: 39px;

  }
}
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
    .info .info__cake h3 {
        font-size: 24px;
        width: 197px;
    }
    .info .info__cake p {
        font-size: 12px;
        width: 190px;
    }
}
@media (max-width: 414px) {
  .menu .list {
    margin-left: 28px;
  }
  .info .info__cake h3 {
    font-size: 24px;
    width: 197px;
  }
  .info .info__cake p {
    font-size: 12px;
    width: 190px;
  }
}
@media (max-width: 400px) {
  .menu .list {
    margin-left: 15px;
  }
}
@media (max-width: 375px) {
    .info .info__cake p {
    font-size: 10px;
  }
    .info .info__cake h3 {
        font-size: 21px;
    }
}
@media (max-width: 320px) {
  .menu .list {
    margin-left: 15px;
  }
}
@media (max-width: 375px) {
  .info .info__cake h3[data-v-3e9bec44] {
    font-size: 18px;
  }
}
</style>
