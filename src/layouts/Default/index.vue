<template>
  <div>
    <Container withVerticalPadding>
      <Header :class="{ 'home-page-header': home }" :home="home" />
    </Container>

    <transition name="main-fade-in" appear>
      <main>
        <slot />
      </main>
    </transition>

    <div class="page-footer-wrapper">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export default {
  components: {
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
  z-index: 3;
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
