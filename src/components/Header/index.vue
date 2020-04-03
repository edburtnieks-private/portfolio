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

<style lang="scss" scoped>
.header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
}

.menu-button {
  padding: 1rem;
  position: fixed;
  right: 2rem;
}

.navigation-container {
  display: none;
}

@media (min-width: 768px) {
  .logo {
    animation: logo-slide-in 0.7s 0.3s ease-in-out forwards;
    opacity: 0;
    transform: translateX(-100%);
  }

  .menu-button {
    display: none;
  }

  .navigation-container {
    animation: navigation-fade-in 1s 1.3s ease-in-out forwards;
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    position: fixed;
    right: 2rem;
    top: 7rem;
  }

  .navigation {
    background-color: #353535;
    border-radius: 0.5rem;
    padding: 1rem;
    position: relative;

    &::before {
      background-color: #cee4f6;
      border-radius: 50%;
      content: "";
      height: 0.8rem;
      position: absolute;
      right: 1rem;
      top: 1rem;
      width: 0.8rem;
    }
  }
}

@media (min-width: 1056px) {
  .navigation-container {
    right: auto;
    transform: translateX(-3rem);
    width: 1024px;
  }
}

@keyframes logo-slide-in {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes navigation-fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
