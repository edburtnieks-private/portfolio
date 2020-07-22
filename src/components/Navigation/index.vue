<template>
  <nav class="navigation">
    <ul class="navigation-list">
      <li class="navigation-list-item">
        <g-link to="/" exact class="link">
          <span class="text">
            Home
          </span>
        </g-link>
      </li>

      <li class="navigation-list-item">
        <g-link to="/examples/" class="link">
          <span class="text">
            Examples
          </span>
        </g-link>
      </li>

      <li class="navigation-list-item">
        <g-link to="/blog/" class="link">
          <span class="text">
            Blog
          </span>
        </g-link>
      </li>

      <li class="navigation-list-item">
        <a
          href="https://github.com/edburtnieks"
          target="_blank"
          rel="noopener noreferrer"
          class="link"
        >
          <span class="text">
            GitHub
          </span>
          <ExternalLinkIcon class="external-link-icon" />
        </a>
      </li>

      <li class="navigation-list-item">
        <a
          href="/Edgar Burtnieks (CV).pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="link"
        >
          <span class="text">
            Resume
          </span>
          <ExternalLinkIcon class="external-link-icon" />
        </a>
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

  @media (min-width: 768px) {
    display: flex;
  }
}

.link {
  align-items: flex-start;
  color: var(--c-light);
  display: flex;
  padding: 1rem 0.5rem;

  &.active::before {
    background-color: var(--c-primary);
    border-radius: 50%;
    content: "";
    height: 0.8rem;
    left: -1.4rem;
    position: absolute;
    top: 1.1rem;
    width: 0.8rem;

    @media (min-width: 768px) {
      left: 50%;
      transform: translate(-0.4rem, 1.55rem);
    }
  }

  &::after {
    border-bottom: none;
  }
}

.text {
  position: relative;
}

.external-link-icon {
  height: 12px;
  margin-left: 0.5rem;
  width: 12px;
}

@media (min-width: 768px) {
  .link {
    padding: 0.5rem 0.5rem; 

    &.active::before {
      top: 0.6rem;
    }

    &:hover {
      outline: 0;

      &::after {
        content: none;
      }

      .text::after {
        border-bottom: 2px dotted;
        bottom: -0.25rem;
        content: '';
        left: 0;
        position: absolute;
        right: 0;
      }
    }
  }
}
</style>
