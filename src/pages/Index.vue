<template>
  <Layout home>
    <Hero />
    <Examples :examples="$page.examples.edges" />
    <ContributedProjects :projects="$page.contributedProjects.edges" />
    <Skills :skills="$page.skills.edges[0].node.skills" />
  </Layout>
</template>

<script>
import Section from "~/containers/Section";
import Hero from "~/page-components/Home/Hero";
import Examples from "~/page-components/Home/Examples";
import ContributedProjects from "~/page-components/Home/ContributedProjects";
import Skills from "~/page-components/Home/Skills";

export default {
  metaInfo: {
    title: "Full Stack Designer"
  },
  components: {
    Section,
    Hero,
    Examples,
    ContributedProjects,
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
  contributedProjects: allContributedProject {
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
