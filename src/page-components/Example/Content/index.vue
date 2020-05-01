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
      margin: 0 auto;
      max-width: 35rem;
      padding: 2rem 0;

      > code {
        background-color: #1e1e1e;
        padding: 0.25rem;
      }
    }

    > h2 {
      margin: 0 auto;
      max-width: 35rem;
      padding: 3rem 0;
    }

    > h3 {
      margin: 0 auto;
      max-width: 35rem;
      padding: 2rem 0;
    }

    > h4 {
      margin: 0 auto;
      max-width: 35rem;
      padding: 1rem 0;
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
