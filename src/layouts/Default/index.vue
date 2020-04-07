<template>
  <div>
    <Container>
      <Header :hasHeaderAnimation="hasHeaderAnimation" />
    </Container>

    <main>
      <slot />
    </main>

    <Container class="page-footer-wrapper">
      <Footer />
    </Container>
  </div>
</template>

<script>
import Container from "~/containers/Container";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export default {
  components: {
    Container,
    Header,
    Footer
  },
  props: {
    hasHeaderAnimation: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    document.body.classList.remove("overlay");
  }
};
</script>

<style lang="scss">
.page-footer-wrapper {
  margin-top: auto;
}
</style>
