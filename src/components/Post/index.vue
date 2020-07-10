<template>
  <g-link :to="post.node.link" class="post-link">
    <article>
      <Part v-if="post.node.part" :part="post.node.part" />
      <Title :title="post.node.title" />
      <CreatedDate :createdDate="post.node.createdAt" />
    </article>
  </g-link>
</template>

<script>
import { format } from "date-fns";
import Part from "~/page-components/Post/Part";
import Title from "~/page-components/Post/Title";
import CreatedDate from "~/page-components/Post/CreatedDate";

export default {
  components: {
    Part,
    Title,
    CreatedDate
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    formattedCreatedAtDate() {
      return format(new Date(this.post.node.createdAt), "MMMM do, y");
    }
  }
};
</script>

<style lang="scss" scoped>
.post-link {
  color: var(--c-light);
  letter-spacing: 1px;

  &::after {
    content: none;
  }
}
</style>
