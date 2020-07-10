<template>
  <small class="created-date">
    Created
    <time v-text="formattedCreatedAtDate" :datetime="createdDate" />
  </small>
</template>

<script>
import { format } from "date-fns";

export default {
  props: {
    createdDate: {
      type: String,
      required: true
    }
  },
  computed: {
    formattedCreatedAtDate() {
      return format(new Date(this.createdDate), "MMMM do, y");
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
