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
  font-size: 0.7rem;
  list-style: none;
  overflow-x: auto;
  padding: 0;
  white-space: nowrap;

  @media (min-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
}

.breadcrumb-list-item {
  align-items: center;
  backface-visibility: hidden;
  display: flex;

  &:not(:last-child)::after {
    content: url("../../../static/icons/chevron-right.svg?inline");
    padding: 0 0.5rem;
  }
}

.link {
  padding: 0.5rem 0;

  @media (min-width: 768px) {
    height: 100%;
    padding: 0;
  }

  &::after {
    border-bottom: none;
  }

  &:hover,
  &:focus {
    outline: 0;

    &::after {
      border-bottom: 2px dotted;
      bottom: 4px;

      @media (min-width: 768px) {
        bottom: 0;
      }
    }
  }
}
</style>
