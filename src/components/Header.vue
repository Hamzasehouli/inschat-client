<template>
  <header>
    <nav>
      <base-btn mode="anch" styl="standard" path="/">
        <!-- <img /> -->
        <p>inschat</p>
      </base-btn>
      <form @submit.prevent="submitForm">
        <input placeholder="search here" type="search" />
      </form>
      <div class="home__settings">
        <div></div>
        <div></div>
      </div>
      <div class="notifs">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="profile">
        <img class="profile__img" src="/images/user.jpg" />
      </div>
    </nav>
  </header>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
nav {
  background: var(--color-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.profile {
  &__img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
  }
}
</style>
