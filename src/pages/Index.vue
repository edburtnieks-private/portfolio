<template>
  <Layout>
    <h1>
      <div v-text="$page.home.title"></div>
      <div v-text="$page.home.subtitle"></div>
    </h1>
  </Layout>
</template>

<page-query>
query {
  home: site(id: "homePage") {
    title: homePageTitle
    subtitle: homePageSubtitle
  }
}
</page-query>
