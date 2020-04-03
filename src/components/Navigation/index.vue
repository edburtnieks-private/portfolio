<template>
  <nav class="navigation">
    <ul class="navigation-list">
      <li class="navigation-list-item">
        <g-link to="/blog" class="link">Blog</g-link>
      </li>
      <li class="navigation-list-item">
        <g-link to="/learning" class="link">Learning</g-link>
      </li>
      <li class="navigation-list-item">
        <g-link to="/about" class="link">About Me</g-link>
      </li>
      <li class="navigation-list-item">
        <g-link to="/personal-projects" class="link">Personal projects</g-link>
      </li>
      <li class="navigation-list-item">
        <span class="external-link">
          <a
            href="https://github.com/edburtnieks"
            target="_blank"
            rel="noopener noreferrer"
            class="link"
          >GitHub</a>
          <ExternalLinkIcon class="external-link-icon" />
        </span>
      </li>
    </ul>
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

.navigation-list {
  list-style: none;
  padding: 0;
}

.navigation-list-item + .navigation-list-item {
  margin-top: 1rem;
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
