<template>
  <ul class="breadcrumb-list">
    <li v-for="item in breadcrumbs" :key="item.path" class="breadcrumb-list-item">
      <g-link :to="item.to" class="link">{{item.text}}</g-link>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    breadcrumbs() {
      let pathArray = this.$route.path.split("/");
      pathArray.shift();

      let breadcrumbs = pathArray.reduce((breadcrumbArray, path, index) => {
        if (this.$route.matched[index]) {
          breadcrumbArray.push({
            path,
            to: breadcrumbArray[index - 1]
              ? `/${breadcrumbArray[index - 1].path}/${path}/`
              : `/${path}/`,
            text: this.$route.matched[index].name || path
          });
        }

        return breadcrumbArray;
      }, []);

      return breadcrumbs;
    }
  }
};
</script>

<style lang="scss" scoped>
.breadcrumb-list {
  display: flex;
  font-size: 0.8rem;
  list-style: none;
  margin-bottom: 2rem;
  padding: 0;
}

.breadcrumb-list-item + .breadcrumb-list-item::before {
  content: url("../../../static/icons/chevron-right.svg?inline");
  padding: 0 0.5rem;
  vertical-align: middle;
}

.link {
  &::after {
    border-bottom: none;
  }

  &:hover {
    outline: 0;

    &::after {
      border-bottom: 2px dotted;
    }
  }
}
</style>
