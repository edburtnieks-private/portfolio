<template>
  <Layout home>
    <Hero />
    <Examples :examples="$page.examples.edges" />
    <Skills />
  </Layout>
</template>

<script>
import Section from "~/containers/Section";
import Hero from "~/page-components/Home/Hero";
import Examples from "~/page-components/Home/Examples";
import Skills from "~/page-components/Home/Skills";

export default {
  components: {
    Section,
    Hero,
    Examples,
    Skills
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (!vm.$isServer) {
        if (from.path === "/") {
          document.body.classList.add("enter-animation");
        } else {
          document.body.classList.remove("enter-animation");
        }
      }
      next();
    });
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
