<template>
  <Container>
    <header>
      <Part v-if="post.part" :part="post.part" />
      <Title :title="post.title" main />
      <CreatedDate :createdDate="post.createdAt" />
    </header>
  </Container>
</template>

<script>
import Container from "~/containers/Container";
import Part from "~/page-components/Post/Part";
import Title from "~/page-components/Post/Title";
import CreatedDate from "~/page-components/Post/CreatedDate";

export default {
  components: {
    Container,
    Part,
    Title,
    CreatedDate
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
