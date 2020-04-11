---
slug: four-card-feature-section
title: Four card feature section
link: /examples/fm-challenges/four-card-feature-section/
links: true
challengeLink: 'https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK'
solutionLink: >-
  https://www.frontendmentor.io/solutions/html-and-css-only-mobile-first-site-BkEHB-6z
liveSiteLink: 'https://fm-edburtnieks-1.now.sh/'
gitHubRepositoryLink: >-
  https://github.com/edburtnieks/frontend-mentor/tree/1-four-card-feature-section
technologyStack:
  - HTML5
  - CSS3
  - CSS Grid
image: /uploads/four-card-feature-section-preview.jpg
imageAlt: Four card feature section preview
---
Theroach.
 main goals for this challenge was to make pixel perfect implementation of the given design, utilize CSS grid for positioning cards and making sure the design is responsive using mobile first app
Here is the finished result.

![Four card feature section finished result](/uploads/four-card-feature-section-finished.jpg)

### Title markup

```html
<header class="page-header">
  <h1 class="title">
    Reliable, efficient delivery <br />
    <strong class="title-bold">Powered by Technology</strong>
  </h1>

  <p class="subtitle">
    Our Artificial Intelligence powered tools use millions of
    project data points to ensure that your project is successful
  </p>
</header>
```

### Title styles

```css
.page-header {
  margin: 0 auto;
  max-width: 600px;
  padding: 5.675rem 2.15rem;
  text-align: center;
}

.title {
  font-size: 1.625rem;
  font-weight: var(--fw-extra-light);
  line-height: 1.425;
  margin-bottom: 1rem;
}

.title-bold {
  font-weight: var(--fw-semi-bold);
}
```

### Single card markup

```html
<div class="card card-supervisor">
  <h2 class="card-title">Supervisor</h2>

  <p class="card-text">
    Monitors activity to identify project roadblocks
  </p>

  <img
    class="card-icon"
    src="images/icon-supervisor.svg"
    alt="Magnifying glass"
  />
</div>
```

### Single card styles

```css
.card {
  background-color: var(--c-white);
  border-radius: 8px;
  box-shadow: 0 10px 20px 10px var(--c-very-dark-blue-70);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  position: relative;
}

.card-title {
  font-size: 1.35rem;
  margin-bottom: 0.6rem;
}

.card-text {
  font-size: 0.875rem;
  line-height: 1.7;
  margin-bottom: 2.5rem;
}

.card-icon {
  align-self: flex-end;
  margin-top: auto;
  max-width: 3.75rem;
}
```

We can add spacing between cards on mobile using "lobotomized owl selector".

```css
.card + .card {
  margin-top: 1.75rem;
}
```

For borders I chose to use `::before` pseudo-element to avoid curved bottom corners that you get with `border-top` property.

```css
.card::before {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  content: '';
  height: 4px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
```

Now, depending on the card, we can change the border color.

```css
.card-supervisor::before {
  background-color: var(--c-cyan);
}
```

### Adjusting styles for desktop

```css
@media screen and (min-width: 1110px) {
  .page-header {
    padding-bottom: 4.4rem;
    padding-top: 4.4rem;
  }

  .title {
    font-size: 2.45rem;
  }

  .card + .card {
    margin-top: 0;
  }

  .card-icon {
    max-width: 100%;
  }
}
```

### Positioning cards

For mobile, we can keep cards `display: block;` which will make them naturally stack below each other.

But for desktop, we can use `grid` to position each card into place.

```css
.page-content {
  display: grid;
  grid-gap: 2rem;
  grid-template-areas:
    '.               card-team-builder               .'
    'card-supervisor card-team-builder card-calculator'
    'card-supervisor card-karma        card-calculator'
    '.               card-karma                      .';
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  max-width: 74rem; /* 1110px */
}
```

Now, depending on the card, we can position each one inside the grid

```css
.card-supervisor {
  grid-area: card-supervisor;
}
```

where `grid-area` value is the one specificed inside `.page-content` selector `grid-template-areas` property.

### CSS Variables

```css
:root {
  /* Breakpoints */

  --bp-mobile: 375px;
  --bp-desktop: 1440px;

  /* Colors */

  /* Primary */
  --c-red: hsl(0, 78%, 62%);
  --c-cyan: hsl(180, 62%, 55%);
  --c-orange: hsl(34, 97%, 64%);
  --c-blue: hsl(212, 86%, 64%);

  /* Neutral */
  --c-white: hsl(0, 0%, 100%);
  --c-very-dark-blue: hsl(234, 12%, 34%);
  --c-grayish-blue: hsl(229, 6%, 66%);
  --c-very-light-gray: hsl(0, 0%, 98%);

  /* Opacity */

  --c-very-dark-blue-70: hsla(234, 12%, 34%, 0.1);

  /* Typography */

  /* Font size */
  --fs-base: 15px;

  /* Font family */
  --ff-base: 'Poppins', sans-serif;

  /* Font weight */
  --fw-extra-light: 200;
  --fw-regular: 400;
  --fw-semi-bold: 600;
}
```

### Global styles

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: var(--fs-base);
}

body {
  background-color: var(--c-very-light-gray);
  display: flex;
  flex-direction: column;
  font-family: var(--ff-base);
  height: 100vh;
  margin: 0;
}

h1,
h2,
p {
  margin: 0;
}

h1,
h2 {
  color: var(--c-very-dark-blue);
}

p {
  color: var(--c-grayish-blue);
  line-height: 1.7;
}
```
