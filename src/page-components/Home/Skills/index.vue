<template>
  <transition name="skills-slide-fade-in" appear>
    <Section
      id="skills"
      title="Skills"
      class="skills-section-container"
      sectionClass="skills-section"
    >
      <div class="skills-wrapper">
        <SkillList
          v-for="skill in skills"
          :key="skill.category"
          :skill="skill"
          class="skill-list"
        />
      </div>
    </Section>
  </transition>
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

.skills-slide-fade-in-enter {
  opacity: 0;
}

.skills-slide-fade-in-enter-active {
  transition: opacity 0.7s ease-in-out 0.6s;
}

@media (min-width: 768px) {
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

  .skills-slide-fade-in-enter {
    opacity: 0;
    transform: translateY(100%);
  }

  .skills-slide-fade-in-enter-active {
    transition: all 0.7s ease-in-out 0.6s;
  }
}
</style>
