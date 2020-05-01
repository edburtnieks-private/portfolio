<template>
  <div>
    <h2 class="info-title" v-text="title" />
    <ul :class="['info-list', listClass]">
      <InfoListItem v-for="item in items" :key="item.text" :item="item" />
    </ul>
  </div>
</template>

<script>
import InfoListItem from "~/page-components/Example/InfoListItem";

export default {
  components: {
    InfoListItem
  },
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    listClass: {
      type: String
    }
  }
};
</script>

<style scoped>
.info-title {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.info-list {
  font-size: 0.875rem;
}
</style>
