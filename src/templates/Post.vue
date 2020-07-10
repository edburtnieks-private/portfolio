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
      title: `${this.$page.post.part}: ${this.$page.post.title}`,
      meta: [
        {
          name: 'monetization',
          content: '$ilp.uphold.com/XHhwr9YfrhAj',
        },
      ],
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
    createdAt (format: "MMMM D, YYYY")
    content
    previousPostTitle
    previousPostLink
    nextPostTitle
    nextPostLink
  }
}
</page-query>
