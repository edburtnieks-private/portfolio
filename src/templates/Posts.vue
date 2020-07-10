<template>
  <Layout>
    <Container class="title">
      <h1>Blog</h1>
    </Container>

    <Container>
      <PostList :posts="$page.posts.edges" />
    </Container>
  </Layout>
</template>

<script>
import PostList from "~/components/PostList";

export default {
  metaInfo: {
    title: "Blog"
  },
  components: {
    PostList
  }
};
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
}
</style>

<page-query>
query {
  posts: allPost(sortBy: "createdAt") {
    edges {
      node {
        id
        title
        part
        link
        createdAt
      }
    }
  }
}
</page-query>
