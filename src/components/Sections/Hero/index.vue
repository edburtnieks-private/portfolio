<template>
  <Section class="hero-section">
    <template v-slot:title>
      <h1 class="title">
        <div>Full Stack Designer</div>
        <div class="subtitle">Currently available for development opportunities in Riga or remotely.</div>
      </h1>
    </template>

    <a href="mailto:edburtnieks@gmail.com" class="email">edburtnieks@gmail.com</a>

    <nav>
      <ul>
        <li>
          <g-link to="/blog" class="link-wrapper">Blog</g-link>
        </li>
        <li>
          <g-link to="/learning" class="link-wrapper">Learning</g-link>
        </li>
        <li>
          <g-link to="/about" class="link-wrapper">About Me</g-link>
        </li>
      </ul>
    </nav>
  </Section>
</template>

<script>
import Section from "~/containers/Section";

export default {
  components: {
    Section
  }
};
</script>

<style lang="scss" scoped>
.hero-section {
  animation: slide-in 0.7s ease-in-out;
  position: relative;

  &::before,
  &::after {
    background-color: #313131;
    border-radius: 1rem;
    content: "";
    left: -3rem;
    position: absolute;
    right: 0;
    top: 1rem;
  }

  &::before {
    bottom: 0;
  }

  &::after {
    bottom: -8rem;
    z-index: -1;
  }
}

.title {
  font-size: 1.5rem;
  position: relative;
}

.subtitle {
  font-family: var(--ff-body);
  font-size: 1rem;
  font-weight: var(--fw-regular);
  margin-top: 1rem;
}

.email {
  display: inline-block;
  margin-top: 3rem;
}

@media (min-width: 768px) {
  .title {
    font-size: 2rem;
  }
}

@keyframes slide-in {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
