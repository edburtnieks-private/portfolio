<template>
  <a :href="project.node.link" target="_blank" rel="noopener noreferrer" class="project">
    <g-image :src="project.node.image" :alt="project.node.imageAlt" class="project-image" />
    <div class="overlay">
      <h2 class="project-title" v-text="project.node.title" />
      <small class="explore">
        GitHub repository
        <ChevronRight />
      </small>
    </div>
  </a>
</template>

<script>
import ChevronRight from "~/assets/icons/ChevronRight";

export default {
  components: {
    ChevronRight
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.project,
.g-image--loaded {
  height: 100%;
}

.project {
  display: flex;
  overflow: hidden;

  &::after {
    border-bottom: none;
  }

  &:hover,
  &:focus {
    .overlay {
      transform: translateY(0);
    }
  }

  &:focus {
    outline-offset: 4px;
  }

  &:hover {
    outline: 0;
  }

  @media (min-width: 768px) {
    border-radius: 0.5rem;
  }
}

.overlay {
  background-color: var(--c-grey);
  border-top-right-radius: 0.5rem;
  bottom: 0;
  padding: 11px 1rem;
  position: absolute;
  transform: translateY(calc(100% - 40px));
  transition: transform 0.2s ease-out;
}

.project-image {
  max-width: 100%;
}

.project-title {
  color: var(--c-light);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.explore {
  align-items: center;
  display: flex;
  font-size: 0.7rem;
}
</style>
