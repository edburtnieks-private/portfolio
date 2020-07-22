<template>
  <Section>
    <h1 class="hero-title">
      <div>Full Stack Designer saving time by building easy-to-use web apps</div>
      <div class="hero-subtitle">Currently looking for new development opportunities</div>
    </h1>

    <a href="#contact" class="cta">
      <SendIcon />
      Hire me or send a message
    </a>
  </Section>
</template>

<script>
import Section from "~/containers/Section";
import ExternalLinkIcon from "~/assets/icons/ExternalLink";
import SendIcon from "~/assets/icons/Send";

export default {
  components: {
    Section,
    ExternalLinkIcon,
    SendIcon,
  },
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

.cta {
  align-items: center;
  background-color: var(--c-primary-dark);
  border: 2px solid var(--c-primary-dark);
  border-radius: 0.25rem;
  color: var(--c-light);
  display: inline-flex;
  font-weight: var(--fw-bold);
  letter-spacing: 1px;
  padding: 1rem 1.5rem;
  transition: background-color 0.1s ease-in, color 0.1s ease-in,
    border-color 0.1s ease-in;

  &:hover,
  &:focus {
    background-color: var(--c-light);
    border-color: var(--c-light);
    color: var(--c-dark);
    outline: 0;
    transition: background-color 0.1s ease-out, color 0.1s ease-out,
      border-color 0.1s ease-out;
  }

  &::after {
    content: none;
  }

  svg {
    height: 20px;
    margin-right: 1rem;
    width: 20px;
  }
}
</style>
