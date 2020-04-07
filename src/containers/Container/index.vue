<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped>
.container {
  padding: 3rem var(--s-mobile);
}

@media (min-width: 768px) {
  .container {
    padding: 4rem var(--s-mobile);
  }
}

@media (min-width: 1056px) {
  .container {
    margin-left: auto;
    margin-right: auto;
    max-width: 1024px;
    padding: 4rem 0;
    width: 100%;
  }
}
</style>
