<template>
  <div :class="['container', { 'with-padding': withPadding }]">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    withPadding: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding-left: var(--s-mobile);
  padding-right: var(--s-mobile);

  &.with-padding {
    padding-bottom: 3rem;
    padding-top: 3rem;
  }
}

@media (min-width: 768px) {
  .container {
    padding-left: var(--s-mobile);
    padding-right: var(--s-mobile);

    &.with-padding {
      padding-bottom: 4rem;
      padding-top: 4rem;
    }
  }
}

@media (min-width: 1056px) {
  .container {
    margin-left: auto;
    margin-right: auto;
    max-width: 1024px;
    padding-left: 0;
    padding-right: 0;
    width: 100%;
  }
}
</style>
