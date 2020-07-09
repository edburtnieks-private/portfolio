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
      font-size: 1.125rem;
      line-height: 2rem;
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

        a {
          line-height: 1;
        }
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
        max-width: 100%;
      }
    }

    div {
      &.themeable {
        p {
          margin: 2rem auto;
          padding: 0;

          @media (min-width: 650px) {
            border: 1px solid var(--c-light);
            border-radius: 1rem;
          }
        }

        img {
          filter: invert(1);
          padding: 1rem;
        }
      }

      &.large {
        p {
          max-width: 900px;
          text-align: center;
        }
      }

      &.side-by-side {
        img {
          display: flex;
          margin: 0 auto;
          max-width: 100%;
        }

        @media (min-width: 650px) {
          display: flex;
          justify-content: space-between;
          margin: 0 auto;
          max-width: 900px;
        }

        @media (min-width: 650px) {
          p {
            margin: 0;

            &:first-of-type {
              margin-right: 2rem;
            }
          }
        }
      }
    }
  }
}
</style>
