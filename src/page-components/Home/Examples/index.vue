<template>
  <transition name="examples-slide-fade-in" appear>
    <Section
      id="examples"
      title="Projects contributed to"
      class="examples-section-container"
      sectionClass="examples-section"
    >
      <ExampleList :examples="examples" />
    </Section>
  </transition>
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
  background-color: #353535;
}

.examples-slide-fade-in-enter {
  opacity: 0;
}

.examples-slide-fade-in-enter-active {
  transition: opacity 0.7s ease-in-out 0.3s;
}

@media (min-width: 768px) {
  .examples-section-container {
    background-color: transparent;
    position: relative;

    &::before {
      background-color: #353535;
      border-radius: 1rem;
      bottom: -1rem;
      content: "";
      left: -10rem;
      position: absolute;
      top: -24rem;
      width: 35rem;
    }
  }

  .examples-section {
    position: relative;

    &::before {
      background-color: #8dc0eb;
      border-radius: 50%;
      content: "";
      height: 1.5rem;
      left: 12rem;
      position: absolute;
      top: 1.5rem;
      width: 1.5rem;
    }
  }

  .examples-slide-fade-in-enter {
    opacity: 0;
    transform: translateX(-100%);
  }

  .examples-slide-fade-in-enter-active {
    transition: all 0.7s ease-in-out 0.3s;
  }
}

@media (min-width: 1240px) {
  .examples-section::before {
    left: -5rem;
    top: 3rem;
  }
}
</style>
