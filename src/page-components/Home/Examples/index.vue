<template>
  <Section id="examples" title="Examples" withoutHorizontalPadding>
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
