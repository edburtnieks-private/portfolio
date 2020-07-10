<template>
  <ul class="posts-list">
    <li v-for="post in posts" :key="post.node.id" class="posts-list-item">
      <Post :post="post" />
    </li>
  </ul>
</template>

<script>
import Post from "~/components/Post";

export default {
  components: {
    Post
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.posts-list {
  list-style: none;
  padding: 0;
}

.posts-list-item + .posts-list-item {
  padding-top: 6rem;
}
</style>
