<template>
  <header class="header">
    <Logo />

    <MenuButton
      ref="menuButton"
      @toggle-menu="onToggleMenu"
      :active="isNavigationActive"
      :class="['menu-button', { active: isNavigationActive }]"
    />

    <div ref="menu" class="navigation-container">
      <Navigation class="navigation" />
    </div>
  </header>
</template>

<script>
import Logo from "~/components/Logo";
import Navigation from "~/components/Navigation";
import MenuButton from "~/components/MenuButton";

export default {
  components: {
    Logo,
    Navigation,
    MenuButton
  },
  data() {
    return {
      isNavigationActive: false
    };
  },
  methods: {
    onToggleMenu() {
      this.$refs.menu.classList.toggle("active");
      this.isNavigationActive = !this.isNavigationActive;
      document.body.classList.toggle("overlay");
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  align-items: center;
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    position: relative;
  }
}

.menu-button {
  padding: 1rem;
  position: fixed;
  right: 2rem;
  z-index: 2;

  &.active {
    z-index: 3;
  }
}

.navigation-container {
  display: none;

  &.active {
    display: block;
    position: fixed;
    right: 2rem;
    top: 115px;
    z-index: 3;

    .navigation {
      background-color: var(--c-grey);
      border-radius: 0.5rem;
      padding: 0 1rem;
    }
  }
}

@media (min-width: 768px) {
  .menu-button {
    display: none;
  }

  .navigation-container {
    display: flex;
    justify-content: flex-end;
    position: fixed;
    right: 2rem;
    top: 7rem;
    z-index: 1;
  }

  .navigation {
    background-color: var(--c-grey);
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
  }
}

@media (min-width: 1056px) {
  .navigation-container {
    margin-left: calc(1024px - 110px);
    right: auto;
    transform: translateX(-3rem);
    width: 110px;
  }
}
</style>
