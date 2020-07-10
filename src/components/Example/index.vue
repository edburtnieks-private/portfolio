<template>
  <g-link :to="example.node.link" class="example">
    <g-image :src="example.node.image" :alt="example.node.imageAlt" class="example-image" />
    <div class="overlay">
      <h2 class="example-title" v-text="example.node.title" />
      <small class="explore">
        Explore
        <ChevronRight />
      </small>
    </div>
  </g-link>
</template>

<script>
import ChevronRight from "~/assets/icons/ChevronRight";

export default {
  components: {
    ChevronRight
  },
  props: {
    example: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.example,
.g-image--loaded {
  height: 100%;
}

.example {
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

.example-image {
  max-width: 100%;
  min-width: 320px;
}

.example-title {
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
