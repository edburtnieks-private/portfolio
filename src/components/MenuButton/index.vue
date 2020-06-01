<template>
  <button @click="$emit('toggle-menu')" class="menu-button" aria-label="Menu">
    <CloseIcon v-if="active" />
    <MenuIcon v-else />
  </button>
</template>

<script>
import MenuIcon from "~/assets/icons/Menu";
import CloseIcon from "~/assets/icons/Close";

export default {
  components: {
    MenuIcon,
    CloseIcon
  },
  props: {
    active: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style scoped>
.menu-button {
  background-color: var(--c-grey);
  border-radius: 0.5rem;
  display: flex;
}
</style>
