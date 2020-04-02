<template>
  <div>
    <Container>
      <Header />
    </Container>

    <main>
      <slot />
    </main>

    <Container>
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
  }
};
</script>
