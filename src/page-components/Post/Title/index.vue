<template>
  <component :is="main ? 'h1' : 'h2'" v-text="title" class="post-title"></component>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    main: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.post-title {
  font-weight: var(--fw-regular);
  margin: 1rem 0;
}
</style>
