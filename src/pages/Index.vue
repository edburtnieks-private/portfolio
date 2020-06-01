<template>
  <Layout home>
    <Hero />
    <Examples :examples="$page.examples.edges" />
    <Skills :skills="$page.skills.edges[0].node.skills" />
  </Layout>
</template>

<script>
import Section from "~/containers/Section";
import Hero from "~/page-components/Home/Hero";
import Examples from "~/page-components/Home/Examples";
import Skills from "~/page-components/Home/Skills";

export default {
  metaInfo: {
    title: "Full Stack Designer"
  },
  components: {
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
        id
        title
        link
        image
        imageAlt
      }
    }
  }
  skills: allSkill {
    edges {
      node {
        skills {
          category
          skills
        }
      }
    }
  }
}
</page-query>
