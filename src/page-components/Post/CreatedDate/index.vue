<template>
  <small class="created-date">
    Created
    <time v-text="createdDate" :datetime="formattedCreatedAtDate" />
  </small>
</template>

<script>
export default {
  props: {
    createdDate: {
      type: String,
      required: true
    }
  },
  computed: {
    formattedCreatedAtDate() {
      const date = new Date(this.createdDate);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate();
      return `${year}-${month}-${day}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.created-date {
  font-size: 0.85rem;
  font-weight: var(--fw-bold);
  letter-spacing: 1px;
}
</style>
