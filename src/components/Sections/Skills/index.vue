<template>
  <Section
    id="skills"
    title="Skills"
    class="skills-section-container"
    sectionClass="skills-section"
  >
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

<style lang="scss">
.skills-section-container {
  animation: skills-fade-in 0.7s 0.5s ease-in-out forwards;
  opacity: 0;
}

.skills-wrapper {
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
}

@media (min-width: 768px) {
  .skills-section-container {
    animation: skills-slide-up 0.7s 0.5s ease-in-out forwards;
    opacity: 0;
    transform: translateY(100%);
  }

  .skills-section {
    position: relative;

    &::before {
      background-color: #aed2f0;
      border-radius: 50%;
      content: "";
      height: 1rem;
      left: 6rem;
      position: absolute;
      top: -1.5rem;
      width: 1rem;
    }
  }
}

@keyframes skills-fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes skills-slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
