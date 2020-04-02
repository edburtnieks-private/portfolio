<template>
  <Layout>
    <Hero />
    <Examples :examples="$page.examples.edges" />
    <Skills />
  </Layout>
</template>

<script>
import Container from "~/containers/Container";
import Section from "~/containers/Section";
import Hero from "~/components/Sections/Hero";
import Examples from "~/components/Sections/Examples";
import Skills from "~/components/Sections/Skills";

export default {
  components: {
    Container,
    Section,
    Hero,
    Examples,
    Skills
  }
};
</script>

<page-query>
query {
  examples: allExample {
    edges {
      node {
        name
        liveSite
        source
      }
    }
  }
}
</page-query>
