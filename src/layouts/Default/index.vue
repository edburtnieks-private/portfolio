<template>
  <div>
    <Container withPadding>
      <Header :class="{ 'home-page-header': home }" :home="home" />
    </Container>

    <transition name="main-fade-in" appear>
      <main class="page-main-content">
        <slot />
      </main>
    </transition>

    <Container withPadding class="page-footer-wrapper">
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
    home: {
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
.home-page-header {
  z-index: 2;
}

.page-main-content {
  height: 100%;
}

.page-footer-wrapper {
  margin-top: auto;
}

.main-fade-in-enter-active {
  transition: opacity 0.5s;
}

.main-fade-in-enter {
  opacity: 0;
}
</style>
