<template>
  <Layout>
    <h1>
      <div>Front End Developer</div>
      <div>Currently looking for development opportunities (relocation preferred)</div>
    </h1>

    <h2>Projects</h2>

    <ul>
      <li v-for="project in $page.projects.edges" :key="project.node.id">
        <h3 v-text="project.node.name" />
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query {
  projects: allProject {
    edges {
      node {
        name
      }
    }
  }
}
</page-query>
