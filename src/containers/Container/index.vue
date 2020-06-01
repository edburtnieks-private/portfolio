<template>
  <div
    :class="[
      'container',
      {
        'with-vertical-padding': withVerticalPadding,
        'without-horizontal-padding': withoutHorizontalPadding,
      },
    ]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    withVerticalPadding: {
      type: Boolean,
      default: false
    },
    withoutHorizontalPadding: {
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

  &.with-vertical-padding {
    padding-bottom: 3rem;
    padding-top: 3rem;
  }

  &.without-horizontal-padding {
    padding-left: 0;
    padding-right: 0;
  }
}

@media (min-width: 768px) {
  .container {
    padding-left: var(--s-mobile);
    padding-right: var(--s-mobile);

    &.with-vertical-padding {
      padding-bottom: 4rem;
      padding-top: 4rem;
    }

    &.without-horizontal-padding {
      padding-left: var(--s-mobile);
      padding-right: var(--s-mobile);
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

    &.without-horizontal-padding {
      padding-left: 0;
      padding-right: 0;
    }
  }
}
</style>
