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
        <li class="examples-list-item">
          <g-link
            to="/examples/frontend-mentor-challenges/job-listings-with-filtering"
            class="example"
          >
            <g-image
              src="~/assets/images/job-listings-with-filtering-preview.jpg"
              alt="Job listings with filtering preview"
              class="example-image"
            />
            <div class="overlay">
              <h2 class="example-title">Job listings with filtering</h2>
              <small class="explore">
                Explore
                <ChevronRight />
              </small>
            </div>
          </g-link>
        </li>

        <li class="examples-list-item">
          <g-link
            to="/examples/frontend-mentor-challenges/four-card-feature-section"
            class="example"
          >
            <g-image
              src="~/assets/images/four-card-feature-section-preview.jpg"
              alt="Four card feature section preview"
              class="example-image"
            />
            <div class="overlay">
              <h2 class="example-title">Four card feature section</h2>
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
.example-image {
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
