<template>
  <div>
<!--    <Header/>-->
<!--    <Navbar/>-->

    <div class="cardShop">
    <b-container fluid class="ml-4" >
      <b-row>
        <b-col>
          <a class="cardShop__back" @click.prevent="goHome">Go to Catalog<b-icon icon="back" aria-hidden="true"></b-icon></a>
          <h2 class="cardShop__text">Shopping card</h2>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="text-center">
          <b-table bordered hover :items="cart" :fields="fields">
            <template v-slot:cell(#)="data">
              {{ data.index + 1 }}
            </template>
            <template v-slot:cell(price)="data">
              {{ data.item.price * data.item.quantity }}
            </template>
            <template v-slot:cell(remove)="data">
              <b-button
                @click="remove(data.item.id)"
                variant="danger"
                class="mr-2">
                X
              </b-button>
            </template>
            <template v-slot:cell(quantity)="data">
              <b-row>
                <b-col cols="3" class="text-center">
                  <b-button
                    :disabled="data.item.quantity <= 1"
                    variant="warning"
                    @click="decrement(data.item.id)"
                    class="mr-2">
                    -
                  </b-button>
                </b-col>
                <b-col cols="6" class="text-center">
                  <h4>{{ data.item.quantity }}</h4>
                </b-col>
                <b-col cols="3" class="text-center">
                  <b-button
                    variant="warning"
                    @click="increment(data.item.id)"
                    class="mr-2">
                    +
                  </b-button>
                </b-col>
              </b-row>
            </template>

            <template v-slot:cell(image)="data">
              <b-col class="text-center">
                <b-img
                  style="max-width: 5rem"
                  :src="
                    require(`../assets/img/cakes/cake${data.item.id}.jpg`)"
                  fluid
                  alt="Responsive image">

                </b-img>
              </b-col>
            </template>
          </b-table>
        </b-col>
      </b-row>

      <b-row class="text-center" v-if="cart.length > 0">
        <b-col><h3>Total</h3></b-col>
        <b-col>
          <h3>$ {{ total }}.00</h3></b-col>

      </b-row>
      <b-row class="mt-4 text-center" v-if="cart.length > 0">
        <b-col>
          <b-button @click="clean" variant="info" block class="mr-2">
            Clean
          </b-button>
        </b-col>

        <b-col>
          <b-button @click="buy" variant="danger" block class="mr-2">
            Buy
          </b-button>
        </b-col>
      </b-row>
      <b-modal
        hide-header-close
        no-close-on-esc
        no-close-on-backdrop
        ref="modal-1"
        centered
        title="Purchase Completed"
      >
        <template slot="modal-footer">
          <b-button class="mt-3" variant="info" block @click="clean"
            >Close</b-button
          >
        </template>
        <p class="mb-4">Products:</p>
        <ul v-for="productFinal in ticket.products" :key="productFinal.id">
          <li>Product name: {{ productFinal.name }}</li>
          <li>Quantity: {{ productFinal.quantity }}</li>
          <li>Price: {{ productFinal.price }}</li>
          <li>
            Total: {{ productFinal.price * productFinal.quantity }}
          </li>
          <hr />
        </ul>
        <h2 class="my-4 text-center">Total: ${{ ticket.total }}.00</h2>
      </b-modal>
    </b-container>
  </div>
  </div>
</template>

<script>
import { db } from "../firebase";
export default {
  name: "Cart",
  data() {
    return {
      ticket: {
        products: null,
        total: 0,
      },
      counter: 0,
      cart: [],
      fields: ["#", "remove", "image", "name", "quantity", "price"],
    };
  },
  methods: {
    clean() {
      this.cart = [];

      for (const key in this.cart) {
        this.cart[key].cart = false;
        this.cart[key].quantity = 1;
      }
      localStorage.setItem("products", JSON.stringify(this.cart));
      this.$refs["modal-1"].hide();
    },
    remove(id) {
      for (let index = 0; index < this.cart.length; index++) {
        if (this.cart[index].id === id) {
          this.cart.splice(index, 1);
          localStorage.setItem("products", JSON.stringify(this.cart));
        }
      }
    },
    buy() {
      this.ticket = {
        products: this.cart,
        total: this.total,
      };
      db.collection("vue").add(this.ticket);
      this.$refs["modal-1"].show();
    },
    increment(id) {
      for (let index = 0; index < this.cart.length; index++) {
        if (this.cart[index].id === id) {
          this.cart[index].quantity++;
          localStorage.setItem("products", JSON.stringify(this.cart));
        }
      }
    },
    decrement(id) {
      for (let index = 0; index < this.cart.length; index++) {
        if (this.cart[index].id === id) {
          this.cart[index].quantity--;
          localStorage.setItem("products", JSON.stringify(this.cart));
        }
      }
    },
      goHome() {
        this.$router.push("/");
      },
  },
  computed: {
    total() {
      let t = 0;
      for (let index = 0; index < this.cart.length; index++) {
        t += this.cart[index].price*this.cart[index].quantity;
      }
      return t;
    },
  },
  created() {
    if (JSON.parse(localStorage.getItem("products"))) {
      this.cart = JSON.parse(localStorage.getItem("products"));
    } else {
      this.cart = [];
    }
  },
};
</script>

<style scoped>
  .cardShop__text {
    text-align: center;
  }
  .cardShop__back {
    display: block;
    text-decoration: none;
    cursor: pointer;
    padding: 10px;
    margin: 10px;
    color: white;
    border-color: #c5a645;
    background-color: #c5a645;
    outline: none;
    width: 14%;
    border-radius: 50px;
    text-align: center;
  }
  .cardShop__back:hover {
    color: #c5a645;
    background-color: black;
    transition: all 0.5s;

  }
  .cardShop__back:active {
    background-color: black;
  }

  .b-icon.bi {
    margin-left: 10px;
  }
  @media (max-width: 1024px) {
    .col-3 {
      width: 40%;
    }
    .btn {
      padding: 4px 8px 3px 8px;
      font-size: 10px;
    }
    .table {
      width: 1000px;
    }
    .cardShop__back {
      width: 60%;
    }
  }

</style>
