<template>
  <section class="with-vertical-padding" :class="sectionClass">
    <Container>
      <h2 v-if="title" v-text="title" class="title" />
    </Container>

    <Container :withoutHorizontalPadding="withoutHorizontalPadding">
      <slot />
    </Container>
  </section>
</template>

<script>
export default {
  props: {
    withoutHorizontalPadding: {
      type: Boolean
    },
    sectionClass: {
      type: String
    },
    title: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.with-vertical-padding {
  padding-bottom: 3rem;
  padding-top: 3rem;

  @media (min-width: 768px) {
    padding-bottom: 4rem;
    padding-top: 4rem;
  }
}

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
