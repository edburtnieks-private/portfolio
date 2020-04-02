<template>
  <Section id="examples" title="Examples" class="examples-section">
    <ExampleList :examples="examples" />
  </Section>
</template>

<script>
import Section from "~/containers/Section";
import ExampleList from "~/components/ExampleList";

export default {
  components: {
    Section,
    ExampleList
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
.examples-section {
  animation: slide-in 0.7s 0.3s ease-in-out forwards;
  position: relative;
  transform: translateX(-100%);
  z-index: -1;

  &::before {
    background-color: #353535;
    border-radius: 1rem;
    bottom: -1rem;
    content: "";
    left: -10rem;
    position: absolute;
    top: -24rem;
    width: 35rem;
    z-index: -1;
  }
}

@keyframes slide-in {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
