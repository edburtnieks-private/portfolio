<template>
  <ChevronRight class="left" />
</template>

<script>
import ChevronRight from "~/assets/icons/ChevronRight";

export default {
  components: {
    ChevronRight
  }
};
</script>

<style lang="scss" scoped>
.left {
  transform: rotate(180deg);
}
</style>
