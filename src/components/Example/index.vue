<template>
  <div>
    <h3 v-text="example.node.title" class="title" />
    <span v-if="example.node.liveSite" class="link-wrapper">
      <a :href="example.node.liveSite" target="_blank" rel="noopener noreferrer">Live site</a>
      <ExternalLinkIcon class="external-link-icon" />
    </span>

    <a
      v-if="example.node.source"
      :href="example.node.source"
      target="_blank"
      rel="noopener noreferrer"
      class="link"
    >Source code</a>
  </div>
</template>

<script>
import ExternalLinkIcon from "~/assets/icons/ExternalLink";

export default {
  components: {
    ExternalLinkIcon
  },
  props: {
    example: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.title {
  display: inline-block;
  font-size: 1rem;
  font-weight: var(--fw-regular);
}

.link-wrapper {
  display: inline-flex;
  font-size: 0.875rem;
  margin-left: 1rem;
}

.external-link-icon {
  height: 12px;
  margin-left: 0.3rem;
  width: 12px;
}
</style>
