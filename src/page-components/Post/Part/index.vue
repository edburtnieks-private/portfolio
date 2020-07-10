<template>
  <small class="post-part" v-text="part" />
</template>

<script>
export default {
  props: {
    part: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.post-part {
  font-size: 0.85rem;
  font-weight: var(--fw-bold);
  letter-spacing: 1px;
}
</style>
