<template>
  <g-link to="/" class="logo">
    <Logo />
    <span>{{ $static.metadata.siteName }}</span>
  </g-link>
</template>

<script>
import Logo from "~/assets/Logo";

export default {
  components: {
    Logo
  }
};
</script>

<style lang="scss" scoped>
.logo {
  align-items: center;
  color: var(--c-light);
  display: flex;
  font-weight: var(--fw-bold);

  &::after {
    border-bottom: none;
  }

  &:hover {
    outline: none;
  }

  span {
    margin-left: 0.5rem;
  }
}
</style>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
