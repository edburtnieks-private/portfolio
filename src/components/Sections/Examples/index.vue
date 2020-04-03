<template>
  <Section
    id="examples"
    title="Examples"
    class="examples-section-container"
    sectionClass="examples-section"
  >
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

<style lang="scss">
.examples-section-container {
  animation: examples-slide-in 0.7s 0.3s ease-in-out forwards;
  opacity: 0;
  position: relative;
  transform: translateX(-100%);

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

.examples-section {
  position: relative;

  &::before {
    background-color: #8dc0eb;
    border-radius: 50%;
    content: "";
    height: 1.5rem;
    left: -3rem;
    position: absolute;
    top: 0.2rem;
    width: 1.5rem;
  }
}

@keyframes examples-slide-in {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
