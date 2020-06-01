<template>
  <Section id="skills" title="Skills">
    <div class="skills-wrapper">
      <SkillList v-for="skill in skills" :key="skill.category" :skill="skill" />
    </div>
  </Section>
</template>

<script>
import Section from "~/containers/Section";
import SkillList from "~/components/SkillList";

export default {
  components: {
    Section,
    SkillList
  },
  props: {
    skills: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss">
.skills-wrapper {
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
}
</style>
