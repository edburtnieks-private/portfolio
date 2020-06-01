<template>
  <footer class="footer">
    <a href="mailto:edburtnieks@gmail.com">Write an email - edburtnieks@gmail.com</a>
    <small class="copyright">&copy; Copyright 2020, {{ $static.metadata.siteName }}</small>
  </footer>
</template>

<style scoped>
.copyright {
  display: block;
  margin-top: 3rem;
}

@media (min-width: 768px) {
  .footer {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  .copyright {
    margin-top: 0;
  }
}
</style>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
