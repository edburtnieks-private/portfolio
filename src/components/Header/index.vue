<template>
  <header class="header">
    <transition v-if="home" name="logo-slide-fade-in" appear>
      <Logo />
    </transition>

    <Logo v-else />

    <MenuButton
      ref="menuButton"
      @toggle-menu="onToggleMenu"
      :active="isNavigationActive"
      :class="['menu-button', { active: isNavigationActive }]"
    />

    <transition v-if="home" name="navigation-fade-in" appear>
      <div ref="menu" class="navigation-container">
        <Navigation class="navigation" />
      </div>
    </transition>

    <div v-else ref="menu" class="navigation-container">
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
  props: {
    home: {
      type: Boolean,
      default: false
    }
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
  position: relative;
}

.menu-button {
  padding: 1rem;
  position: fixed;
  right: 2rem;
  z-index: 1;

  &.active {
    z-index: 3;
  }
}

.navigation-container {
  display: none;

  &.active {
    display: block;
    position: fixed;
    top: 1.9rem;
    z-index: 2;

    .navigation {
      background-color: #353535;
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
    background-color: #353535;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
  }

  .logo-slide-fade-in-enter {
    opacity: 0;
    transform: translateX(-100%);
  }

  .logo-slide-fade-in-enter-active {
    transition: all 0.7s ease-in-out 0.3s;
  }

  .navigation-fade-in-enter {
    opacity: 0;
  }

  .navigation-fade-in-enter-active {
    transition: opacity 1s ease-in-out 1.3s;
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
