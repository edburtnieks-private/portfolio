<template>
  <Section id="contributedProjects" title="Open source projects contributed to">
    <ContributedProjectList :projects="projects" />
  </Section>
</template>

<script>
import Section from "~/containers/Section";
import ContributedProjectList from "~/components/ContributedProjectList";

export default {
  components: {
    Section,
    ContributedProjectList
  },
  props: {
    projects: {
      type: Array,
      required: true
    }
  }
};
</script>
