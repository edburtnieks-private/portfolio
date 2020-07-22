<template>
  <Section>
    <h1 class="hero-title">
      <div>
        Full Stack Designer saving time by building easy-to-use web apps
      </div>
      <div class="hero-subtitle">
        Currently looking for new development opportunities
      </div>
    </h1>

    <a href="#contact">Hire me or send a message</a>
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
.hero-title {
  margin-bottom: 3rem;

  @media (min-width: 650px) {
    max-width: 70%;
  }
}

.hero-subtitle {
  font-family: var(--ff-body);
  font-size: 1rem;
  font-weight: var(--fw-regular);
  margin-top: 1rem;
}
</style>
