<template>
  <section class="main-page">
    <Formbase
      :style="{
        margin: '7rem 0',
      }"
      @submit.prevent="submitForm"
    >
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
        <label class="form__label">Gender</label>
      </div>
      <div
        :style="{
          display: 'flex',
        }"
      >
        <div
          :style="{
            marginRight: '2rem',
          }"
          class="form__control"
        >
          <label for="male" class="form__label">Male</label>
          <input
            id="male"
            checked
            name="gender"
            v-model="gender"
            value="male"
            type="radio"
          />
        </div>
        <div class="form__control">
          <label for="female" class="form__label">Female</label>
          <input
            id="female"
            name="gender"
            value="female"
            v-model="gender"
            type="radio"
          />
        </div>
      </div>
      <p v-if="genderError">{{ genderError }}</p>
      <div class="form__control">
        <label class="form__label">Firstname</label>
        <input v-model="firstname" type="text" class="form__input" />
        <p v-if="firstnameError">{{ firstnameError }}</p>
      </div>
      <div class="form__control">
        <label class="form__label">Lastname</label>
        <input v-model="lastname" type="text" class="form__input" />
        <p v-if="lastnameError">{{ lastnameError }}</p>
      </div>
      <div class="form__control">
        <label class="form__label">Username</label>
        <input v-model="username" type="text" class="form__input" />
        <p v-if="usernameError">{{ usernameError }}</p>
      </div>
      <div class="form__control">
        <label class="form__label">Email</label>
        <input v-model="email" type="email" class="form__input" />
        <p v-if="emailError">{{ emailError }}</p>
      </div>

      <div class="form__control">
        <label class="form__label">Password</label>
        <input v-model="password" type="password" class="form__input" />
        <p v-if="passwordError">{{ passwordError }}</p>
      </div>
      <div class="form__control">
        <label class="form__label">Confirm password</label>
        <input v-model="confirmPassword" type="password" class="form__input" />
        <p v-if="confirmPasswordError">{{ confirmPasswordError }}</p>
      </div>
      <base-btn state="btn" styl="flat" typ="submit" class="form__btn">{{
        isLoading ? "loading..." : "Signup"
      }}</base-btn>
      <base-btn styl="standard" :path="{ name: 'Main' }"
        >Have an account? Login here</base-btn
      >
    </Formbase>
  </section>
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
    console.log(store);
    const gender = ref("male");
    const isLoading = ref(false);
    const error = ref(null);
    const success = ref(null);
    const message = ref("");
    const firstname = ref("");
    const lastname = ref("");
    const username = ref("");
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const genderError = ref("");
    const firstnameError = ref("");
    const lastnameError = ref("");
    const usernameError = ref("");
    const emailError = ref("");
    const passwordError = ref("");
    const confirmPasswordError = ref("");
    const submitForm = async function () {
      isLoading.value = true;
      genderError.value = "";
      firstnameError.value = "";
      lastnameError.value = "";
      usernameError.value = "";
      emailError.value = "";
      passwordError.value = "";
      confirmPasswordError.value = "";
      console.log(gender.value);
      console.log(firstname.value);
      console.log(lastname.value);
      console.log(username.value);
      console.log(email.value);
      console.log(password.value);
      console.log(confirmPassword.value);
      if (!gender.value) {
        genderError.value = "Please select your gender";
      }
      if (!firstname.value.trim() || firstname.value.trim().length < 3) {
        firstnameError.value = "Please enter your firstname";
      }
      if (!lastname.value.trim() || lastname.value.trim().length < 3) {
        lastnameError.value = "Please enter your lastname";
      }
      if (!username.value.trim() || username.value.trim().length < 3) {
        usernameError.value = "Please enter your username";
      }
      if (
        !email.value.trim() ||
        !email.value.trim().includes("@") ||
        !email.value.trim().split("@")[1].includes(".")
      ) {
        emailError.value = "Please enter a valid email";
      }

      if (!password.value.trim()) {
        passwordError.value = "Please enter a valid password and confirm it ";
      }
      if (!confirmPassword.value.trim()) {
        confirmPasswordError.value = "Please confirm the entered password ";
      }
      if (password.value.trim() !== confirmPassword.value.trim()) {
        passwordError.value =
          "Please make sure password and confirmed one are the same";
        confirmPasswordError.value =
          "Please make sure password and confirmed one are the same";
      }

      if (
        !genderError.value &&
        !usernameError.value &&
        !firstnameError.value &&
        !lastnameError.value &&
        !emailError.value &&
        !passwordError.value &&
        !confirmPasswordError.value
      ) {
        const res = await fetch("http://localhost:8000/api/v1/users/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            gender: gender.value,
            firstname: firstname.value,
            lastname: lastname.value,
            username: username.value,
            email: email.value,
            password: password.value,
            confirmPassword: confirmPassword.value,
          }),
        });
        const data = await res.json();
        if (res.ok) {
          document.cookie = `jwt=${data.data.token}`;
          success.value = true;
          message.value = "You have signed up successfully";
          store.dispatch("user/setIsLoggedin", true);
          setTimeout(() => {
            router.replace({ name: "Home" });
          }, 2000);
          error.value = null;
        } else {
          error.value = true;
          success.value = "";
          message.value = "Signup failed, please try again";
          setTimeout(() => {
            error.value = false;
          }, 2000);
        }
        gender.value = "male";
        firstname.value = "";
        lastname.value = "";
        username.value = "";
        email.value = "";
        password.value = "";
        confirmPassword.value = "";
      }
      isLoading.value = false;
    };
    const err = computed(() => {
      return error.value;
    });
    const succ = computed(() => {
      return success.value;
    });
    return {
      err,
      succ,
      isLoading,
      err,
      success,
      message,
      gender,
      firstname,
      lastname,
      username,
      email,
      password,
      confirmPassword,
      genderError,
      firstnameError,
      lastnameError,
      usernameError,
      emailError,
      passwordError,
      confirmPasswordError,
      submitForm,
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
}
</style>
