<template>
  <section class="section__profile">
    <figure>
      <img class="profile__cover-image" src="images/cover/default-cover.jpg" />
      <base-btn type="button">Edit image </base-btn>
      <ul>
        <li>
          <base-btn type="button">Change image</base-btn>
        </li>
        <li>
          <base-btn type="button">Remove image</base-btn>
        </li>
      </ul>
    </figure>
    <div class="profile__info">
      <figure>
        <input hidden id="profileImage" type="file" accept="image/*" />
        <label for="profileImage"
          ><img class="profile__profile-image" src="images/user.jpg" /><span
            >icon</span
          ></label
        >
        <p class="profile__name">user name</p>
      </figure>
      <base-btn type="button">Edit profile</base-btn>
    </div>
    <div>
      <h2 class="heading-2">friends</h2>
      <ul class="profile__friends-list">
        <li>
          <img class="profile__profile-image" src="" />
          <p class="profile__name">name</p>
          <div>
            <base-btn type="button">dele friend</base-btn>
            <base-btn type="button">message</base-btn>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section__profile {
  width: 70%;
  margin: 0 auto;
}

.profile {
  &__cover-image {
    width: 100%;
    background-size: cover;
    background-position: center;
    height: 30rem;
    object-fit: cover;
  }
  &__profile-image {
    border-radius: 50%;
    border: 2px solid red;
    width: 15rem;
    height: 15rem;
    outline-offset: 2rem;
  }
  &__info {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
