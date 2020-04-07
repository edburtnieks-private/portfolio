<template>
  <transition name="hero-slide-fade-in" appear>
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
  </transition>
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

.hero-slide-fade-in-enter {
  opacity: 0;
}

.hero-slide-fade-in-enter-active {
  transition: opacity 0.7s ease-in-out;
}

@media (min-width: 768px) {
  .hero-section-container {
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

  .hero-slide-fade-in-enter {
    opacity: 0;
    transform: translateX(100%);
  }

  .hero-slide-fade-in-enter-active {
    transition: all 0.7s ease-in-out;
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
</style>
