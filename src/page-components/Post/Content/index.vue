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
  letter-spacing: 1px;
  
  &::v-deep {
    p {
      font-size: 1.125rem;
      line-height: 2rem;
      margin: 0 auto;
      max-width: 45rem;
      padding: 0 0 2rem;
    }

    a {
      line-height: 1rem;
    }

    h2 {
      line-height: 2rem;
      margin: 0 auto;
      max-width: 45rem;
      padding: 1rem 0 2rem;
    }

    h3 {
      line-height: 2rem;
      margin: 0 auto;
      max-width: 45rem;
      padding: 1rem 0 2rem;
    }

    ul,
    ol {
      margin: 0 auto;
      max-width: 45rem;
      padding-bottom: 2rem;

      li {
        line-height: 1.5rem;
        padding: 0.5rem;

        .coming-soon-post {
          color: var(--c-grey-light);
        }

        a {
          display: block;
          line-height: 1.5rem;

          &::after {
            content: none;
          }
        }

        > p {
          font-size: inherit;
          line-height: inherit;
          padding: 0;
        }

        > ul,
        > ol {
          padding-bottom: 0;
          padding-top: 0.5rem;
        }
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
      &.large {
        p {
          max-width: 900px;
          text-align: center;
        }
      }
    }

    hr {
      margin: 0 auto 2rem;
      max-width: 45rem;
    }
  }
}
</style>
