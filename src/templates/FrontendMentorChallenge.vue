<template>
  <Layout>
    <Breadcrumbs :breadcrumbs="$context.breadcrumbs" />
    <Title :title="$page.frontendMentorChallenge.title" />

    <Container ref="infoContainer" class="info-container">
      <button @click="toggleInfo" class="show-info-button">
        <span>{{isInfoActive ? 'Hide' : 'Show'}} info</span>
        <ChevronRightIcon :class="['chevron-right-icon', { active: isInfoActive }]" />
      </button>

      <InfoList
        v-if="$page.frontendMentorChallenge.links"
        title="Links"
        :items="links"
        class="links-section"
        listClass="links-list"
      />

      <InfoList
        v-if="$page.frontendMentorChallenge.technologyStack && $page.frontendMentorChallenge.technologyStack.length"
        title="Technology stack"
        :items="$page.frontendMentorChallenge.technologyStack"
        listClass="technology-stack-list"
      />
    </Container>

    <Content :content="$page.frontendMentorChallenge.content" />
  </Layout>
</template>

<script>
import Breadcrumbs from "~/page-components/FrontendMentorChallenge/Breadcrumbs";
import Title from "~/page-components/FrontendMentorChallenge/Title";
import InfoList from "~/page-components/FrontendMentorChallenge/InfoList";
import Content from "~/page-components/FrontendMentorChallenge/Content";
import ChevronRightIcon from "~/assets/icons/ChevronRight";

export default {
  components: {
    Breadcrumbs,
    Title,
    InfoList,
    Content,
    ChevronRightIcon
  },
  data() {
    return {
      isInfoActive: false
    };
  },
  computed: {
    links() {
      return [
        {
          link: this.$page.frontendMentorChallenge.challengeLink,
          text: "Challenge"
        },
        {
          link: this.$page.frontendMentorChallenge.solutionLink,
          text: "Solution"
        },
        {
          link: this.$page.frontendMentorChallenge.liveSiteLink,
          text: "Live site"
        },
        {
          link: this.$page.frontendMentorChallenge.gitHubRepositoryLink,
          text: "GitHub repository"
        }
      ];
    }
  },
  methods: {
    toggleInfo() {
      this.$refs.infoContainer.$el.classList.toggle("active");
      this.isInfoActive = !this.isInfoActive;
      document.body.classList.toggle("overlay");
    }
  }
};
</script>

<style lang="scss" scoped>
.info-container {
  background-color: var(--c-dark);
  padding-bottom: 1rem;
  padding-top: 1rem;

  @media (min-width: 650px) {
    display: flex;
    padding-bottom: 0;
    padding-top: 0;
  }

  @media (max-width: 649px) {
    position: absolute;
    transform: translateX(calc(-100% + 2rem));
    transition: transform 0.3s ease-in-out;

    &.active {
      transform: translateX(0);
      z-index: 3;

      .show-info-button {
        transform: translateX(0);
      }
    }
  }
}

.show-info-button {
  background-color: var(--c-dark);
  color: var(--c-light);
  display: flex;
  left: 100%;
  padding: 0.5rem;
  position: absolute;
  top: 0.5rem;
  transform: translateX(-0.5rem);
  transition: transform 0.3s ease-in-out;
  width: max-content;

  @media (min-width: 649px) {
    display: none;
  }
}

.chevron-right-icon {
  margin-left: 0.25rem;
  transition: transform 0.3s ease-in-out;

  &.active {
    transform: rotate(180deg);
  }
}

.links-section {
  margin-bottom: 2rem;

  @media (min-width: 650px) {
    margin-bottom: 0;
    margin-right: 5rem;
  }

  @media (min-width: 1056px) {
    margin-right: 10rem;
  }
}

::v-deep .links-list {
  display: grid;
  grid-gap: 1rem 2rem;
  list-style: none;
  padding-left: 0;

  @media (min-width: 650px) {
    grid-auto-flow: column;
    grid-template-rows: repeat(2, 1fr);
  }
}

::v-deep .technology-stack-list {
  display: grid;
  grid-gap: 0.25rem 1rem;

  @media (min-width: 650px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>

<page-query>
query ($id: ID) {
  frontendMentorChallenge(id: $id) {
    title
    links
    challengeLink
    solutionLink
    liveSiteLink
    gitHubRepositoryLink
    technologyStack
    content
  }
}
</page-query>
