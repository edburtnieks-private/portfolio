<template>
  <Container v-if="content" v-html="content" withVerticalPadding class="content-container" />
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
    p {
      line-height: 1.5;
      margin: 0 auto;
      max-width: 35rem;
      padding: 2rem 0;

      code {
        background-color: var(--c-grey-dark);
        padding: 0.25rem;
      }

      a {
        line-height: 1;
      }
    }

    h2 {
      margin: 0 auto;
      max-width: 35rem;
      padding: 3rem 0;
    }

    h3 {
      margin: 0 auto;
      max-width: 35rem;
      padding: 2rem 0;
    }

    h4 {
      margin: 0 auto;
      max-width: 35rem;
      padding: 1rem 0;
    }

    ol,
    ul {
      margin: 0 auto;
      max-width: 35rem;
      padding-bottom: 1rem;
      padding-top: 1rem;

      li {
        line-height: 1.5;
        padding: 0.5rem;
      }
    }

    pre {
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
        border-radius: 1rem;
        margin-left: 0;
        max-width: 900px;
      }
    }

    div {
      &.themeable {
        p {
          @media (min-width: 650px) {
            border: 1px solid var(--c-dark);
            border-radius: 1rem;
            max-width: 900px;
          }
        }

        img {
          filter: invert(1);
          padding: 1rem;
        }
      }

      &.large {
        p {
          max-width: 100%;
          text-align: center;
        }
      }
    }
  }
}
</style>
