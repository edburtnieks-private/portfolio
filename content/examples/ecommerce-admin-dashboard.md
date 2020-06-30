---
slug: ecommerce-admin-dashboard
title: Ecommerce admin dashboard
link: /examples/ecommerce-admin-dashboard/
links:
  - link: 'https://ecommerce-admin-dashboard-demo.netlify.app/'
    text: Live site
  - link: 'https://ecommerce-admin-dashboard-demo.netlify.app/styleguide'
    text: Documentation / Styleguide
  - link: 'https://github.com/edburtnieks/ecommerce-admin-dashboard-demo'
    text: GitHub repository
  - link: >-
      https://www.figma.com/file/Q1gKfQA2EOjkcWvlH9tbW7/Ecommerce-admin-dashboard?node-id=0%3A1
    text: Design
technologyStack:
  - React
  - TypeScript
  - SASS
  - CSS Modules
  - Easy Peasy
  - Figma
image: /uploads/ecommerce-admin-dashboard-demo.png
imageAlt: Ecommerce admin dashboard
---
Fully responsive dashboard example designed with Figma and developed with React, TypeScript, Easy Peasy and React Styleguidist using SASS and CSS Modules.

## Screenshots

![Desktop](/uploads/ecommerce-admin-dashboard-demo.png)

## Process

### 1. Idea

The idea came from [this post](https://techcrunch.com/2020/05/11/primer/?guccounter=1) about [Primer](https://primer.io/). I decided to implement a simplified dashboard section for seeing and managing all transactions.

### 2. Design

#### 2.1. I started by creating user stories

#### 2.2. and outlining information architecture

#### 2.3. After getting some structure in mind I continued with wireframes

#### 2.4. and then moved to exploring layout

#### 2.5. and design itself

### Development

At this point I started to set up React project, configuring the development environment, and started to develop basic structure based on ready designs.

After I got more detailed and set on design, I started breaking down a design into basic components with static data, styling, and basic functionality.

And after couple iterations on design and development, I set up basic REST API using [json-server](https://github.com/typicode/json-server).

### Documentation and tests

Upon implementing a new component, I added it to documentation together with sample usage with [react-styleguidist](https://react-styleguidist.js.org/), wrote tests using [React Testing Library](https://testing-library.com/docs/react-testing-library/intro), and refactored necessary code.

## Full technology stack

Project boilerplate was generated using [create-react-app](https://create-react-app.dev/).

### Design

- [Figma](https://www.figma.com/)

### Frontend

Hosted on Netlify

- [React](https://reactjs.org/)
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
- [React Styleguidist](https://react-styleguidist.js.org/) - Isolated React component development environment with a living style guide
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) - Library for testing React components
- [Typescript](https://www.typescriptlang.org/)
- [SASS](https://sass-lang.com/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [classnames](https://github.com/JedWatson/classnames) - Javascript utility for conditionally joining classNames together
- [Easy Peasy](https://easy-peasy.now.sh/) - React state library

### API

Hosted on Heroku

- [json-server](https://github.com/typicode/json-server) - Fake REST API
