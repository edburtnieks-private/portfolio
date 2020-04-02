<template>
  <button class="menu-button" aria-label="Menu">
    <MenuIcon />
  </button>
</template>

<script>
import MenuIcon from "~/assets/icons/Menu";

export default {
  components: {
    MenuIcon
  }
};
</script>

<style scoped>
.menu-button {
  background-color: var(--c-dark);
  border-radius: 0.5rem;
  display: flex;
}
</style>
