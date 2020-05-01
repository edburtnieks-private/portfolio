<template>
  <g-link :to="example.node.link">
    <h3 v-text="example.node.title" class="title" />
  </g-link>
</template>

<script>
export default {
  props: {
    example: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.title {
  display: inline-block;
  font-size: 1rem;
  font-weight: var(--fw-regular);
}
</style>
