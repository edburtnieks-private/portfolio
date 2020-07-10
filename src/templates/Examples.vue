<template>
  <Layout>
    <Container v-if="$context.breadcrumbs">
      <Breadcrumbs :items="$context.breadcrumbs" />
    </Container>

    <Container class="title">
      <h1>Examples</h1>
    </Container>

    <Container withoutHorizontalPadding>
      <ExampleList :examples="$page.examples.edges" />
    </Container>
  </Layout>
</template>

<script>
import Breadcrumbs from "~/components/Breadcrumbs";
import ExampleList from "~/components/ExampleList";

export default {
  metaInfo: {
    title: "Examples"
  },
  components: {
    Breadcrumbs,
    ExampleList
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
  examples: allExample {
    edges {
      node {
        id
        title
        link
        image
        imageAlt
      }
    }
  }
}
</page-query>
