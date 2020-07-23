<template>
  <Section id="contact" title="Hire me or send a message">
    <footer>
      <ContactForm />

      <p class="email">or use email edburtnieks@gmail.com</p>

      <div class="copyright">
        <small>&copy; Copyright 2020, {{ $static.metadata.siteName }}</small>
      </div>
    </footer>
  </Section>
</template>

<script>
import Section from "~/containers/Section";
import ContactForm from "~/components/ContactForm";

export default {
  components: {
    Section,
    ContactForm,
  },
};
</script>

<style lang="scss" scoped>
.email {
  margin-top: 2rem;
  text-align: center;
}

.copyright {
  display: flex;
  justify-content: flex-end;
  margin-top: 4rem;
}
</style>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
