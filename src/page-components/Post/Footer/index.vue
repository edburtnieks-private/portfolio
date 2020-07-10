<template>
  <Container>
    <footer class="post-footer">
      <g-link
        v-if="post.previousPostTitle"
        :to="post.previousPostLink"
        class="previous-post-link"
      >
        <ChevronLeftIcon class="chevron-left" />
        {{post.previousPostTitle}}
      </g-link>

      <g-link v-if="post.nextPostTitle" :to="post.nextPostLink" class="next-post-link">
        {{post.nextPostTitle}}
        <ChevronRightIcon class="chevron-right" />
      </g-link>
    </footer>
  </Container>
</template>

<script>
import Container from "~/containers/Container";
import ChevronLeftIcon from "~/assets/icons/ChevronLeft";
import ChevronRightIcon from "~/assets/icons/ChevronRight";

export default {
  components: {
    Container,
    ChevronLeftIcon,
    ChevronRightIcon
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.post-footer {
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    gap: 4rem;
    grid-template-columns: repeat(2, 1fr);
  }
}

.previous-post-link,
.next-post-link {
  align-items: center;
  display: flex;
  font-size: 1.25rem;
  line-height: 1.75rem;

  &::after {
    content: none;
  }
}

.chevron-left,
.chevron-right {
  flex-shrink: 0;
  height: 2rem;
  width: 2rem;
}

.chevron-left {
  margin-right: 1rem;
}

.chevron-right {
  margin-left: 1rem;
}

.next-post-link {
  @media (min-width: 768px) {
    grid-column: 2;
  }
}
</style>
