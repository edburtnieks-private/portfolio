<template>
  <Container>
    <section>
      <h2 v-if="title" v-text="title" class="title" />
      <slot v-else name="title" />

      <slot />
    </section>
  </Container>
</template>

<script>
import Container from "~/containers/Container";

export default {
  components: {
    Container
  },
  props: {
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
