<template>
  <Container class="breadcrumbs">
    <Breadcrumbs :items="breadcrumbs" />
  </Container>
</template>

<script>
import Breadcrumbs from "~/components/Breadcrumbs";

export default {
  components: {
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
