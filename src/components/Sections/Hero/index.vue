<template>
  <Section class="hero-section-container" sectionClass="hero-section">
    <div class="hero-title-container">
      <h1 class="hero-title">
        <div>Full Stack Designer</div>
        <div
          class="hero-subtitle"
        >Currently looking for development opportunities in Riga or remotely.</div>
      </h1>

      <a href="mailto:edburtnieks@gmail.com">Write me an email (edburtnieks@gmail.com)</a>
    </div>
  </Section>
</template>

<script>
import Section from "~/containers/Section";
import ExternalLinkIcon from "~/assets/icons/ExternalLink";

export default {
  components: {
    Section,
    ExternalLinkIcon
  }
};
</script>

<style lang="scss">
.hero-section-container {
  animation: hero-fade-in 0.7s ease-in-out;
  background-color: #313131;
}

.hero-title {
  font-size: 1.5rem;
  margin-bottom: 3rem;
}

.hero-subtitle {
  font-family: var(--ff-body);
  font-size: 1rem;
  font-weight: var(--fw-regular);
  margin-top: 1rem;
}

@media (min-width: 768px) {
  .hero-section-container {
    animation: hero-slide-in 0.7s ease-in-out;
    background-color: transparent;
    position: relative;

    &::before,
    &::after {
      background-color: #313131;
      border-radius: 1rem;
      content: "";
      left: -3rem;
      position: absolute;
      right: 5rem;
      top: 2rem;
    }

    &::before {
      bottom: 0;
      z-index: 1;
    }

    &::after {
      bottom: -8rem;
    }
  }

  .hero-section {
    position: relative;
    z-index: 1;

    &::before {
      background-color: #4d9de0;
      border-radius: 50%;
      content: "";
      height: 2rem;
      left: 23rem;
      position: absolute;
      top: -1rem;
      width: 2rem;
    }
  }

  .hero-title {
    font-size: 2rem;
  }
}

@media (min-width: 1056px) {
  .hero-section-container {
    &::before,
    &::after {
      right: 0;
    }
  }
}

@keyframes hero-fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes hero-slide-in {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
