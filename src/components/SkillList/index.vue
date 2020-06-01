<template>
  <div>
    <h3 v-text="skill.category" class="title" />
    <ul>
      <li
        v-for="skill in skill.skills"
        :key="skill"
        v-text="skill"
        class="skill-list-item"
      />
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    skill: {
      type: Object,
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
