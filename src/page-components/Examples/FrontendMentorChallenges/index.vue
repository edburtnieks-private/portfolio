<template>
  <div>
    <Container class="breadcrumbs">
      <Breadcrumbs />
    </Container>

    <Container class="title">
      <h1>Frontend Mentor Challenges</h1>
    </Container>

    <Container class="examples-container">
      <ul class="examples-list">
        <li
          v-for="example in $static.frontendMentorChallenges.edges"
          :key="example.node.id"
          class="examples-list-item"
        >
          <g-link :to="example.node.link" class="example">
            <g-image
              :src="example.node.image"
              :alt="example.node.imageAlt"
              class="example-image"
            />
            <div class="overlay">
              <h2 class="example-title" v-text="example.node.title" />
              <small class="explore">
                Explore
                <ChevronRight />
              </small>
            </div>
          </g-link>
        </li>
      </ul>
    </Container>
  </div>
</template>

<script>
import Container from "~/containers/Container";
import Breadcrumbs from "~/components/Breadcrumbs";
import ChevronRight from "~/assets/icons/ChevronRight";

export default {
  components: {
    Container,
    Breadcrumbs,
    ChevronRight
  }
};
</script>

<style lang="scss" scoped>
.examples-container {
  padding-left: 0;
  padding-right: 0;
}

.breadcrumbs {
  margin-bottom: 1rem;
}

.title {
  margin-bottom: 3rem;
}

.examples-list {
  display: grid;
  grid-gap: 2rem;
  list-style: none;
  padding: 0;
}

.examples-list-item,
.example,
.g-image--loaded {
  height: 100%;
}

.example {
  overflow: hidden;

  &::after {
    border-bottom: none;
  }

  &:hover,
  &:focus {
    .overlay {
      transform: translateY(0);
    }
  }

  &:focus {
    outline-offset: 4px;
  }

  &:hover {
    outline: 0;
  }
}

.overlay {
  background-color: #353535;
  border-top-right-radius: 0.5rem;
  bottom: 0;
  padding: 11px 1rem;
  position: absolute;
  transform: translateY(calc(100% - 40px));
  transition: transform 0.2s ease-out;
}

.example-image {
  max-width: 100%;
  min-width: 320px;
}

.example-title {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.explore {
  align-items: center;
  display: flex;
  font-size: 0.7rem;
}

@media (min-width: 768px) {
  .examples-container {
    padding-left: var(--s-mobile);
    padding-right: var(--s-mobile);
  }

  .examples-list {
    grid-template-columns: repeat(2, 1fr);
  }

  .example {
    border-radius: 0.5rem;
  }
}

@media (min-width: 1056px) {
  .examples-container {
    padding-left: 0;
    padding-right: 0;
  }

  .examples-list {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>

<static-query>
query {
  frontendMentorChallenges: allFrontendMentorChallenge {
    edges {
      node {
        id
        title
        link
        image
        imageAlt
      }
    }
  }
}
</static-query>
