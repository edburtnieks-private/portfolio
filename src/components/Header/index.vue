<template>
  <header class="header">
    <Logo class="logo" />

    <MenuButton class="menu-button" />

    <div class="navigation-container">
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
  }
};
</script>

<style scoped>
.header {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.logo {
  z-index: 1;
}

.menu-button {
  padding: 1rem;
  position: fixed;
  right: 1rem;
}

.navigation-container {
  display: none;
}

@media (min-width: 768px) {
  .menu-button {
    display: none;
  }

  .navigation-container {
    display: block;
    position: fixed;
    right: 1rem;
    z-index: 1;
  }

  .navigation {
    background-color: #353535;
    border-radius: 0.5rem;
    padding: 1rem;
  }
}

@media (min-width: 1056px) {
  .navigation-container {
    right: auto;
    text-align: right;
    width: 1040px;
  }

  .navigation {
    display: inline-block;
  }
}
</style>
