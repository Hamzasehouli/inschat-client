<template>
  <form>
    <slot></slot>
  </form>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
form {
  border-radius: 5px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.212);
  padding: 2rem;
  width: 30%;
}
</style>
