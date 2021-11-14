<template>
  <header>
    <nav>
      <base-btn mode="anch" styl="standard" path="/">
        <!-- <img /> -->
        <p :style="{ color: 'white' }">inschat</p>
      </base-btn>
      <form @submit.prevent="submitForm">
        <input
          class="searchInput"
          placeholder="e.g a friend name"
          type="search"
        />
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
        <base-btn styl="outline" :path="{ name: 'Home' }">Home</base-btn>
        <base-btn styl="outline" :path="{ name: 'Profile' }">Profile</base-btn>
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
  display: flex;
  align-items: center;
  justify-content: center;
  & > * {
    &:not(:last-child) {
      margin-right: 2rem;
    }
  }
  &__img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
  }
}

.searchInput {
  padding: 0.6rem 2rem;
  border-radius: 100px;
  box-sizing: inherit;
}
</style>
