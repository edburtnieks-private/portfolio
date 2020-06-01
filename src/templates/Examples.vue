<template>
  <Layout>
    <Container v-if="$context.breadcrumbs">
      <Breadcrumbs :items="$context.breadcrumbs" />
    </Container>

    <Container class="title">
      <h1>Examples</h1>
    </Container>

    <Container withoutHorizontalPadding>
      <!-- <ul class="examples-list">
        <li
          v-for="example in $page.examples.edges"
          :key="example.node.id"
          class="examples-list-item"
        >
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
        </li>
      </ul> -->
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
