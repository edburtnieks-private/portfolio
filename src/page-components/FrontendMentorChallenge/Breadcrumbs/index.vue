<template>
  <Container class="breadcrumbs">
    <Breadcrumbs :items="breadcrumbs" />
  </Container>
</template>

<script>
import Container from "~/containers/Container";
import Breadcrumbs from "~/components/Breadcrumbs";

export default {
  components: {
    Container,
    Breadcrumbs
  },
  props: {
    breadcrumbs: {
      type: Array,
      required: true
    }
  }
};
</script>
