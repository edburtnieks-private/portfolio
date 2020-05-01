<template>
  <Container class="title">
    <h1 v-text="title" />
  </Container>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  @media (min-width: 650px) {
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
}
</style>
