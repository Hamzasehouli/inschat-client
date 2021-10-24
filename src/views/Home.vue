<template>
  <section class="home-page">
    <div class="welcome"></div>
    <Formbase @submit.prevent="submitLoginForm">
      <div class="form-control">
        <label class="form__label">Email</label>
        <input v-model="email" type="email" class="form__label" />
      </div>
      <div class="form-control">
        <label class="form__label">Password</label>
        <input v-model="password" type="password" class="form__label" />
      </div>
      <button type="submit" class="form__btn">Login</button>
      <router-link :to="{ name: 'Signup' }"
        >Do not have an account? Create one</router-link
      >
    </Formbase>
  </section>
</template>
<script>
import Formbase from "../components/Formbase.vue";
import { ref } from "vue";
export default {
  components: { Formbase },
  setup() {
    const email = ref("");
    const password = ref("");
    const submitLoginForm = async function () {
      console.log(email.value);
      console.log(password.value);

      const res = await fetch("http://localhost:8080/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email.value, password: password.value }),
      });
      const data = await res.json();
      console.log(data);
      email.value = "";
      password.value = "";
    };
    return {
      email,
      password,
      submitLoginForm,
    };
  },
};
</script>
<style scoped lang="scss"></style>
