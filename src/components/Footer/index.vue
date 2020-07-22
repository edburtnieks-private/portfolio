<template>
  <footer class="footer">
    <Section id="contact" title="Hire me or send a message">
      <ContactForm />
    </Section>

    <div class="copyright">
      <small>&copy; Copyright 2020, {{ $static.metadata.siteName }}</small>
    </div>
  </footer>
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
.copyright {
  display: flex;
  justify-content: flex-end;
}
</style>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
