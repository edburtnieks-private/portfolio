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
    }

    a {
      line-height: 1rem;
    }

    h2 {
      line-height: 2rem;
      margin: 0 auto;
      max-width: 35rem;
      padding: 2rem 0 0;
    }

    ul {
      margin: 0 auto;
      max-width: 35rem;
      padding-bottom: 2rem;
      padding-top: 2rem;

      li {
        line-height: 1.5rem;
        padding: 0.5rem;

        .current-post {
          font-weight: var(--fw-bold);
        }

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
  }
}
</style>
