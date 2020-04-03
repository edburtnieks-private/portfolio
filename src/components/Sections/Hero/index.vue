<template>
  <Section class="hero-section-container" sectionClass="hero-section">
    <div class="hero-title-container">
      <h1 class="hero-title">
        <div>Full Stack Designer</div>
        <div
          class="hero-subtitle"
        >Currently looking for development opportunities in Riga or remotely.</div>
      </h1>

      <a
        href="mailto:edburtnieks@gmail.com"
        class="hero-email"
      >Write me an email (edburtnieks@gmail.com)</a>
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
  animation: hero-slide-in 0.7s ease-in-out;
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
    z-index: 1;
  }

  &::after {
    bottom: -8rem;
    z-index: -1;
  }
}

.hero-section {
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  position: relative;

  &::before {
    background-color: #4d9de0;
    border-radius: 50%;
    content: "";
    height: 2rem;
    left: -4rem;
    position: absolute;
    top: 0.2rem;
    width: 2rem;
    z-index: 1;
  }
}

.hero-title-container {
  z-index: 2;
}

.hero-title {
  font-size: 1.5rem;
  position: relative;
}

.hero-subtitle {
  font-family: var(--ff-body);
  font-size: 1rem;
  font-weight: var(--fw-regular);
  margin-top: 1rem;
}

.hero-email {
  display: inline-block;
  margin-top: 3rem;
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 2rem;
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
