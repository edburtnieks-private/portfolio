<template>
  <ul>
    <li v-for="example in examples" :key="example.node.id" class="example-list-item">
      <Example :example="example" />
    </li>
  </ul>
</template>

<script>
import Example from "~/components/Example";

export default {
  components: {
    Example
  },
  props: {
    examples: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.example-list-item + .example-list-item {
  margin-top: 1rem;
}
</style>
