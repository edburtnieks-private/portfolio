<template>
  <footer class="footer">
    <a href="mailto:edburtnieks@gmail.com">edburtnieks@gmail.com</a>
    <small class="copyright">&copy; Copyright 2020, Edgar Burtnieks</small>
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
