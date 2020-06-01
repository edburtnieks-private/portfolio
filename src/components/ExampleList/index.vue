<template>
  <!-- <ul>
    <li v-for="example in examples" :key="example.node.id" class="example-list-item">
      <Example :example="example" />
    </li>
  </ul> -->
  <ul class="examples-list">
    <li v-for="example in examples" :key="example.node.id" class="examples-list-item">
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

<style lang="scss" scoped>
.examples-list {
  display: grid;
  grid-gap: 2rem;
  list-style: none;
  padding: 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1056px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.examples-list-item {
  height: 100%;
}
</style>
