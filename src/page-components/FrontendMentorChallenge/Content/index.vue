<template>
  <Container v-if="content" v-html="content" withPadding class="content-container" />
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.content-container.with-padding {
  padding-top: 4rem;

  @media (min-width: 768px) {
    padding-top: 8rem;
  }
}

.content-container >>> > p {
  line-height: 1.5;
  margin-left: auto;
  margin-right: auto;
  max-width: 35em;
}
</style>
