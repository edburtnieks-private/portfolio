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
.content-container {
  &::v-deep {
    > p {
      line-height: 1.5;
      margin: 2rem auto;
      max-width: 35rem;

      > code {
        background-color: #1e1e1e;
        padding: 0.25rem;
      }
    }

    > h3 {
      margin: 2rem auto;
      max-width: 35rem;
    }

    > h4 {
      margin: 1rem auto;
      max-width: 35rem;
    }

    > pre {
      margin: 0 -2rem;
      position: relative;

      @media (min-width: 650px) {
        margin-left: auto;
        margin-right: auto;
        max-width: 35rem;
      }
    }

    img {
      margin-left: -2rem;
      max-width: calc(100% + 4rem);
      position: relative;

      @media (min-width: 650px) {
        margin-left: 0;
        max-width: 100%;
      }
    }
  }
}
</style>
