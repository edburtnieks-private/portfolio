<template>
  <ul class="breadcrumb-list">
    <li v-for="item in items" :key="item.path" class="breadcrumb-list-item">
      <g-link :to="item.to" class="link">{{item.text}}</g-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.breadcrumb-list {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
  list-style: none;
  padding: 0;
}

.breadcrumb-list-item {
  display: flex;

  &:not(:last-child)::after {
    content: url("../../../static/icons/chevron-right.svg?inline");
    padding: 0 0.5rem;
  }
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
