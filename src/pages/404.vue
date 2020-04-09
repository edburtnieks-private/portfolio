<template>
  <Layout>
    <Container class="page-not-found-container">
      <h1>404 - Page Not Found</h1>
    </Container>
  </Layout>
</template>

<script>
import Container from "~/containers/Container";

export default {
  components: {
    Container
  }
};
</script>

<style scoped>
.page-not-found-container {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
}
</style>
