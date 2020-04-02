<template>
  <Section id="skills" title="Skills">
    <div class="skills-wrapper">
      <SkillList title="Development" :skills="developmentSkills" class="skill-list" />
      <SkillList title="Development Tools" :skills="developmentTools" class="skill-list" />
      <SkillList title="Design" :skills="designSkills" class="skill-list" />
      <SkillList title="Design Tools" :skills="designTools" class="skill-list" />
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
  data() {
    return {
      developmentSkills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "ES6+",
        "React",
        "Vue",
        "Svelte",
        "Accessibility"
      ],
      developmentTools: [
        "Git",
        "Linux",
        "Node",
        "Gulp",
        "Webpack",
        "Agile metodologies"
      ],
      designSkills: [
        "User Interface (UI)",
        "User Experience (UX)",
        "Responsive design"
      ],
      designTools: ["Adobe XD", "Figma"]
    };
  }
};
</script>

<style scoped>
.skills-wrapper {
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
}
</style>
