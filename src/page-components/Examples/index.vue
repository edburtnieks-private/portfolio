<template>
  <div>
    <Container>
      <h1>Examples</h1>
    </Container>

    <Container class="examples">
      <ul>
        <li>
          <g-link to="/examples/frontend-mentor-challenges/">Frontend Mentor Challenges</g-link>
        </li>
      </ul>
    </Container>
  </div>
</template>

<script>
import Container from "~/containers/Container";

export default {
  components: {
    Container
  }
};
</script>

<style scoped>
.examples {
  margin-top: 2rem;
}
</style>
