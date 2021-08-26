<template>
  <div class="cart__wrapper">
    <b-container fluid class="bv-example-row">
      <b-row>
        <b-col cols="3" v-for="(cake, index) in cakes" :key="index">
          <b-card
            :title="cake.name"
            :img-src="require(`../assets/img/cakes/cake${index + 1}.jpg`)"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-4 card__description cart__wrapper"
          >
            <b-card-text class="card__price">
              <h5>Price: ${{ cake.price }}.00</h5>
            </b-card-text>
            <b-button
              class="card__btn"
              v-if="!cake.cart"
              :disabled="cake.cart"
              @click="
                (cake.cart = true), addToCart(JSON.parse(JSON.stringify(cake)))
              "
              block
              href="#"
              variant="warning"
              >Add to Cart</b-button
            >
            <b-button
              v-if="cake.cart"
              :disabled="cake.cart"
              block
              href="#"
              variant="warning"
              >Alredi added to shopping cart
            </b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Products",
  data() {
    return {
      cakes: [
        {
          id: 1,
          quantity: 1,
          name: "Caramel Explosion",
          price: 11,
          img: "../assets/img/cakes/cake1.jpg",
          cart: false,
        },
        {
          id: 2,
          quantity: 1,
          name: "Choco Cake",
          price: 29,
          img: "../assets/img/cakes/cake2.jpg",
          cart: false,
        },
        {
          id: 3,
          quantity: 1,
          name: "Coconut Star",
          price: 18,
          img: "../assets/img/cakes/cake3.jpg",
          cart: false,
        },
        {
          id: 4,
          quantity: 1,
          name: "Mimosa",
          price: 24,
          img: "@/assets/img/cakes/cake4.jpg",
          cart: false,
        },
        {
          id: 5,
          quantity: 1,
          name: "Sweet Suprise",
          price: 17,
          img: "../assets/img/cakes/cake5.jpg",
          cart: false,
        },
        {
          id: 6,
          quantity: 1,
          name: "Pink Cake",
          price: 22,
          img: "../assets/img/cakes/cake6.jpg",
          cart: false,
        },
        {
          id: 7,
          quantity: 1,
          name: "Delightful Lemon",
          price: 16,
          img: "../assets/img/cakes/cake7.jpg",
          cart: false,
        },
        {
          id: 8,
          quantity: 1,
          name: "Choco Passion",
          price: 32,
          img: "../assets/img/cakes/cake8.jpg",
          cart: false,
        },
      ],
    };
  },
  methods: {
    addToCart(product) {
      let cart = [];
      if (JSON.parse(localStorage.getItem("products"))) {
        cart = JSON.parse(localStorage.getItem("products"));
      } else {
        cart = [];
      }
      cart.push(product);
      localStorage.setItem("products", JSON.stringify(cart));
    },
  },
  created() {
    let cart = [];
    if (JSON.parse(localStorage.getItem("products"))) {
      cart = JSON.parse(localStorage.getItem("products"));
    } else {
      cart = [];
      for (let index = 0; index < cart.length; index++) {
        for (let index2 = 0; index2 < this.cakes.length; index2++) {
          if (cart[index].id === this.cakes[index].id) {
            this.cakes[index2].cart = true;
          }
        }
      }
    }
  },
};
</script>

<style scoped>
.cart__wrapper {
  background: black;
  padding: 0;
  margin: 0;
}
.card__description {
  text-align: center;
  color: #c5a645;
}
.card__price {
  text-align: center;
  color: #c5a645;
  margin-bottom: 15px;
}
.card__btn {
  color: white;
  border-color: #c5a645;
  background-color: #c5a645;
  text-decoration: none;

  padding: 13px;
  outline: none;
  width: 100%;
}
.card__btn:hover {
  color: #c5a645;
  background-color: white;
  transition: all 0.5s;
}
.card__btn:active {
  background-color: white;
}

/* Media Queries */
@media (max-width: 768px) {
  .cart__wrapper .row {
    --bs-gutter-x: -5.5rem;
    display: flow-root;
  }
  .card-img,
  .card-img-top,
  .card-img-bottom {
    width: 400%;
  }
  h5,  .h5 {
    font-size: 28px;
    line-height: 25px;
    width: 500%;
  }
  h6,  .h6,  h5,  .h5,  h4,  .h4,  h3,  .h3,
  h2,  .h2,  h1,  .h1 {
    width: 500%;
    font-size: 50px;
  }
  .card__btn {
    width: 500%;
  }
  .btn:disabled,
  .btn.disabled,
  fieldset:disabled .btn {
    width: 500%;
  }
}

@media (max-width: 540px) {
  .card__btn {
    width: 550%;
  }
  .btn:disabled,
  .btn.disabled,
  fieldset:disabled .btn {
    width: 550%;
  }
}
  h6,  .h6,  h5,  .h5,  h4,  .h4,  h3,  .h3,
  h2,  .h2,  h1,  .h1 {
    font-size: 30px;
    width: 550%;
  }
  h5,  .h5 {
    font-size: 30px;
    width: 550%;
  }


@media (max-width: 414px) {
  .card__btn {
    width: 730%;
  }
  .btn:disabled,
  .btn.disabled,
  fieldset:disabled .btn {
    width: 730%;
  }
  h6,  .h6,  h5,  .h5,  h4,  .h4,  h3,  .h3,
  h2,  .h2,  h1,  .h1 {
    font-size: 30px;
    width: 730%;
  }

}

@media (max-width: 411px) {
  .cart__wrapper .row {
    --bs-gutter-x: -5.5rem;
    display: flow-root;
  }
  .card-img,
  .card-img-top,
  .card-img-bottom {
    width: 453%;
  }
  h5,  .h5 {
    font-size: 28px;
    width: 700%;
  }
  .card__btn {
    width: 700%;
  }
  h6,  .h6,  h5,  .h5,  h4,  .h4,  h3,  .h3,
    h2,  .h2,  h1,  .h1 {
    font-size: 30px;
    width: 700%;
  }
  .btn:disabled,
  .btn.disabled,
  fieldset:disabled .btn {
    width: 700%;
  }
}
@media (max-width: 375px) {
  .card__btn {
    width: 800%;
  }
  .btn:disabled,
  .btn.disabled,
  fieldset:disabled .btn {
    width: 800%;
  }
  h6,  .h6,  h5,  .h5,  h4,  .h4,  h3,  .h3,
  h2,  .h2,  h1,  .h1 {
    font-size: 30px;
    width: 800%;
  }
  h5,  .h5 {
    font-size: 28px;
    width: 800%;
  }
}

@media (max-width: 360px) {
  .cart__wrapper .row {
    --bs-gutter-x: -5.5rem;
    display: flow-root;
  }
  .card-img,
  .card-img-top,
  .card-img-bottom {
    width: 453%;
  }
  h5,  .h5 {
    font-size: 28px;
    width: 880%;
  }
  .card__btn {
    width: 880%;
  }
  h6,  .h6,  h5,  .h5,  h4,  .h4,  h3,  .h3,
  h2,  .h2,  h1,  .h1 {
    width: 880%;
    font-size: 20px;
  }
  .btn:disabled,
  .btn.disabled,
  fieldset:disabled .btn {
    width: 880%;
  }
}

@media (max-width: 320px) {
  .card__btn {
    width: 1100%;
  }
  h6,  .h6,  h5,  .h5,  h4,  .h4,  h3,  .h3,
    h2,  .h2,  h1,  .h1 {
    width: 1100%;
  }
  .btn:disabled,
  .btn.disabled,
  fieldset:disabled .btn {
    width: 1100%;
  }
}
@media (min-width: 1024px) {
  h5,  .h5 {
    width: max-content;
  }
  h6,  .h6,  h5,  .h5,  h4,  .h4,  h3,  .h3,
  h2,  .h2,  h1,  .h1 {
    width: max-content;

  }
}

@media (max-width: 280px) {
  .card__btn {
    width: 1800%;
  }
  .btn:disabled,
  .btn.disabled,
  fieldset:disabled .btn {
    width: 1800%;
  }
  h5,  .h5 {
    width: 1800%;
  }
  h6,  .h6,  h5,  .h5,  h4,  .h4,  h3,  .h3,
  h2,  .h2,  h1,  .h1 {
    width: 1800%;

  }
}
@media (min-width: 769px) {
  h5,  .h5 {
    width: 100%;
  }
  h6,  .h6,  h5,  .h5,  h4,  .h4,  h3,  .h3,
  h2,  .h2,  h1,  .h1 {
    width: 100%;

  }
}


</style>
