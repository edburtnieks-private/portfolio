<template>
  <nav class="navigation">
    <ul class="navigation-list">
      <li class="navigation-list-item">
        <g-link to="/" exact class="link">Home</g-link>
      </li>

      <li class="navigation-list-item">
        <g-link to="/examples/" class="link">Examples</g-link>
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

<style lang="scss" scoped>
.navigation {
  font-size: 0.875rem;
}

.navigation-list {
  list-style: none;
  padding: 0;
}

.link {
  color: var(--c-light);
  display: block;
  padding: 1rem 0;

  &.active::before {
    background-color: var(--c-primary);
    border-radius: 50%;
    content: "";
    height: 0.8rem;
    left: -1.4rem;
    position: absolute;
    top: 1.1rem;
    width: 0.8rem;
  }

  &::after {
    border-bottom: none;
  }
}

.external-link {
  display: inline-flex;
}

.external-link-icon {
  height: 12px;
  margin-left: 0.5rem;
  transform: translateY(1rem);
  width: 12px;
}

@media (min-width: 768px) {
  .link {
    display: inline-block;
    padding: 0.5rem 0;

    &.active::before {
      top: 0.6rem;
    }

    &:hover {
      outline: 0;

      &::after {
        border-bottom: 2px dotted;
        bottom: 0.25rem;
      }
    }
  }

  .external-link-icon {
    transform: translateY(0.5rem);
  }
}
</style>
