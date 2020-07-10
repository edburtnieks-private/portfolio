<template>
  <Layout>
    <article>
      <Header :post="$page.post" />
      <Content :content="$page.post.content" />
      <Footer :post="$page.post" />
    </article>
  </Layout>
</template>

<script>
import Header from "~/page-components/Post/Header";
import Content from "~/page-components/Post/Content";
import Footer from "~/page-components/Post/Footer";

export default {
  metaInfo() {
    return {
      title: `${this.$page.post.part}: ${this.$page.post.title}`
    };
  },
  components: {
    Header,
    Content,
    Footer,
  }
};
</script>

<page-query>
query ($id: ID) {
  post(id: $id) {
    title
    part
    createdAt
    content
    previousPostTitle
    previousPostLink
    nextPostTitle
    nextPostLink
  }
}
</page-query>
