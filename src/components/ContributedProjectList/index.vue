<template>
  <ul class="contributed-project-list">
    <li v-for="project in projects" :key="project.node.id" class="contributed-project-list-item">
      <ContributedProject :project="project" />
    </li>
  </ul>
</template>

<script>
import ContributedProject from "~/components/ContributedProject";

export default {
  components: {
    ContributedProject
  },
  props: {
    projects: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.contributed-project-list {
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;
  padding: 0;

  @media (min-width: 524px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1056px) {
    grid-template-columns: repeat(5, 1fr);
  }
}

.contributed-project-list-item {
  height: 100%;
}
</style>
