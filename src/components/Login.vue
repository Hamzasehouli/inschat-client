<template>
  <Formbase @submit.prevent="submitForm">
    <teleport to="body">
      <transition>
        <alert v-if="err" state="error" :message="message"></alert>
        <alert
          v-else-if="succ"
          state="success"
          :message="message"
        ></alert> </transition
    ></teleport>
    <div class="form__control">
      <label class="form__label">Email</label>
      <input v-model="email" type="email" class="form__input" />
    </div>
    <div class="form__control">
      <label class="form__label">Password</label>
      <input v-model="password" type="password" class="form__input" />
    </div>
    <base-btn state="btn" styl="flat" typ="submit" class="form__btn"
      >Login</base-btn
    >
    <base-btn class="form__btn" styl="standard" :path="{ name: 'Signup' }"
      >Do not have an account? Create one</base-btn
    >
    <base-btn class="form__btn" styl="standard" :path="{ name: 'Signup' }"
      >Forget password ?</base-btn
    >
  </Formbase>
</template>
<script>
import Formbase from "../components/Formbase.vue";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  components: { Formbase },
  setup() {
    const router = useRouter();
    const store = useStore();
    const email = ref("");
    const error = ref(null);
    const success = ref(null);
    const message = ref("");
    const password = ref("");
    const submitForm = async function () {
      store.dispatch("sendMessage", {
        messageId: "hamza",
        message: "alhamdoula alkhawa fayen had ghbor",
      });

      const res = await fetch("http://localhost:8000/api/v1/users/login", {
        method: "POST",
        credentials: "include",
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email.value, password: password.value }),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        success.value = true;
        document.cookie = `jwt=${data.data.token}`;
        message.value = "hahaah";
        store.dispatch("user/setIsLoggedin", true);
        setTimeout(() => {
          router.replace({ name: "Home" });
        }, 2000);
        error.value = null;
      } else {
        error.value = true;
        success.value = "";
        message.value = "kakaakka";
        setTimeout(() => {
          error.value = false;
        }, 2000);
      }
      email.value = "";
      password.value = "";
    };

    const err = computed(() => {
      return error.value;
    });
    const succ = computed(() => {
      return success.value;
    });
    return {
      email,
      password,
      submitForm,
      error,
      success,
      message,
      err,
      succ,
    };
  },
};
</script>
<style scoped lang="scss">
.form {
  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100% !important;
    // padding: 1rem 0 !important;
    margin-bottom: 1rem;
  }
  &__control {
    margin-bottom: 2rem;
    & > * {
      display: block;
      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    }
    &:last-of-type {
      margin-bottom: 3rem;
    }
  }
  &__input {
    width: 100%;
    height: 3.5rem;
    padding: 0.5rem;
  }

  .v-enter-active {
    transition: all 1s;
  }
  .v-enter-to {
    opacity: 1;
    transform: translateY(0);
  }
  .v-enter-from {
    opacity: 0;
    transform: translateY(-50px);
  }
}
</style>
