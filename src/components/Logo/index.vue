<template>
  <g-link to="/" class="logo">{{ $static.metadata.siteName }}</g-link>
</template>

<style lang="scss" scoped>
.logo {
  font-weight: var(--fw-bold);

  &::after {
    border-bottom: none;
  }

  &:hover {
    outline: none;
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
