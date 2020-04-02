<template>
  <div>
    <h3 v-text="title" class="title" />
    <ul>
      <li v-for="skill in skills" :key="skill" class="skill-list-item" v-text="skill" />
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    skills: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.title {
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.skill-list-item + .skill-list-item {
  margin-top: 0.5rem;
}
</style>
