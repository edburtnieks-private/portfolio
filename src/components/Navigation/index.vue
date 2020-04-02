<template>
  <nav class="navigation">
    <g-link to="/" class="link-wrapper link">Home</g-link>
    <a href="#examples" class="link-wrapper link">Examples</a>
    <a href="#skills" class="link-wrapper link">Skills</a>
    <!-- <g-link to="/blog" class="link-wrapper">Blog</g-link>
    <g-link to="/learning" class="link-wrapper">Learning</g-link>-->
    <!-- <g-link to="/about" class="link-wrapper">About Me</g-link> -->
    <span class="link-wrapper external-link">
      <a href="https://github.com/edburtnieks" target="_blank" class="link">GitHub</a>
      <ExternalLinkIcon class="external-link-icon" />
    </span>
  </nav>
</template>

<script>
import ExternalLinkIcon from "~/assets/icons/ExternalLink";

export default {
  components: {
    ExternalLinkIcon
  }
};
</script>

</script>

<style lang="scss" scoped>
.navigation {
  font-size: 0.875rem;
}

.link-wrapper + .link-wrapper {
  margin-left: 2rem;
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

.external-link {
  display: inline-flex;
}

.external-link-icon {
  height: 12px;
  margin-left: 0.5rem;
  width: 12px;
}
</style>
