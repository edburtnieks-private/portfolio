<template>
  <Container withPadding>
    <section :class="sectionClass">
      <h2 v-if="title" v-text="title" class="title" />
      <slot />
    </section>
  </Container>
</template>

<script>
export default {
  props: {
    sectionClass: {
      type: String
    },
    title: {
      type: String
    }
  }
};
</script>

<style scoped>
.title {
  font-size: 1.3rem;
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  .title {
    font-size: 1.5rem;
  }
}
</style>
