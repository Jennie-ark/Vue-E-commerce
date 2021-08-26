<template>
  <div>
    <Header />

    <div class="wrap">
      <form class="form" @submit="onSubmit">
        <div class="form__title">Welcome</div>
        <div
          class="form-group"
          :class="{ 'form-group--error': $v.user.$error }"
        >
          <label class="form__label">Login</label>
          <input
            maxlength="20"
            type="text"
            class="form__input"
            v-model.trim="user"
            @input="setUser($event.target.value)"
          />
        </div>

        <div class="error" v-if="!$v.user.required">Field is required</div>
        <div class="error" v-if="!$v.user.minLength">
          Login must have at least {{ $v.user.$params.minLength.min }} letters.
        </div>

        <div
          class="form-group"
          :class="{ 'form-group--error': $v.password.$error }"
        >
          <label class="form__label">Password</label>

          <input
            maxlength="20"
            type="password"
            class="form__input"
            :value="password"
            @change="setPassword($event.target.value)"
          />

          <div class="error" v-if="!$v.password.required">
            Field is required
          </div>
          <div class="error" v-if="!$v.password.minLength">
            Password must have at least
            {{ $v.password.$params.minLength.min }} letters.
          </div>
        </div>

        <button class="form__submit">Login</button>
        <div class="test">
          <span>Test: Admin panel</span>
          <div>Login: admin</div>
          <div>Password: 1234567</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import { required, minLength } from "vuelidate/lib/validators";
export default {
  name: "Login",
  components: {
    Header,
  },
  data() {
    return {
      user: "admin",
      password: "1234567",
    };
  },

  validations: {
    user: {
      required,
      minLength: minLength(5),
    },
    password: {
      required,
      minLength: minLength(7),
    },
  },

  methods: {
    onSubmit() {
      if (this.user === "admin" && this.password === "1234567") {
        this.$router.push("/admin");
        localStorage.setItem("admin", JSON.stringify("true"));
      } else {
        return false;
      }
    },
    setUser(value) {
      this.user = value;
      this.$v.user.$touch();
    },
    setPassword(value) {
      this.password = value;
      this.$v.password.$touch();
    },
  },
};
</script>

<style scoped>
.wrap {
  align-items: center;
  background-color: #000;
  display: flex;
  justify-content: center;
  height: 100vh;
}

.form {
  background-color: #33383b;
  border-radius: 20px;
  box-sizing: border-box;
  height: 550px;
  padding: 20px;
  width: 320px;
}

.form__title {
  text-align: center;
  color: #c5a645;
  font-family: sans-serif;
  font-size: 36px;
  font-weight: 600;
  margin-top: 30px;
}
.form__label {
  color: #c5a645;
  font-weight: 600;
  margin-bottom: 10px;
  margin-top: 10px;
}

input {
  background-color: #ceb564;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  font-size: 18px;

  outline: 0;
  padding: 4px 20px 0;
  width: 100%;
  height: 50px;
  position: relative;
}

.form__submit {
  background-color: #c5a645;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  font-size: 18px;
  height: 50px;
  margin-top: 30px;
  text-align: center;
  width: 100%;
}
.form__submit:hover {
  background-color: white;
  color: #c5a645;
  transition: all 0.5s;
}

.form__submit:active {
  background: #9c8438;
  color: white;
}
.error {
  color: darkred;
  margin-top: 5px;
}

.test {
  text-align: center;
  margin-top: 20px;
  background: #ceb564;
  border-radius: 20px;
  color: #33383b;
  font-weight: 500;
}
</style>
