<template>
  <li>
    <span v-if="typeof item === 'string'" v-text="item" />
    <span v-else class="external-link">
      <a :href="item.link" target="_blank" rel="noopener noreferrer" v-text="item.text" />
      <ExternalLinkIcon class="external-link-icon" />
    </span>
  </li>
</template>

<script>
import ExternalLinkIcon from "~/assets/icons/ExternalLink";

export default {
  components: {
    ExternalLinkIcon
  },
  props: {
    item: {
      type: [String, Object],
      required: true
    }
  }
};
</script>

<style scoped>
.external-link {
  display: flex;
}

.external-link-icon {
  height: 12px;
  margin-left: 0.3rem;
  width: 12px;
}
</style>
