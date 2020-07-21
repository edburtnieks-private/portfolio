---
slug: auszra-research
title: Build a full-stack online language learning platform from start to finish (website)
part: 🔍 (2/4) Research
link: /blog/auszra-research/
createdAt: 2020-07-21
previousPostTitle: "📖 (1/4) Preparation: Build a full-stack online language learning platform from start to finish (website)"
previousPostLink: /blog/auszra-preparation/
---
This is the second post of a four-part series where we will start asking the questions about the project, create user stories, and start planning out the initial structure of the site.

As with the notes, I wrote everything straight into [Figma](https://www.figma.com/).

## ➡ Jump to the other parts

* [📖 (1/4) Preparation: Build a full-stack online language learning platform from start to finish (website)](/blog/auszra-preparation/)
* __🔍 (2/4) Research: Build a full-stack online language learning platform from start to finish (website) (this post)__
* <span class="coming-soon-post">🎨 (3/4) Design: Build a full-stack online language learning platform from start to finish (website) (coming soon)</span>
* <span class="coming-soon-post">⌨ (4/4) Development: Build a full-stack online language learning platform from start to finish (website) (coming soon)</span>

## ❔ Asking the initial questions

After doing some brief research and writing down the notes about the language learning method, we can start asking some questions to help us narrow down the scope, features. It's important to not think about all the features from the technical and implementation side. We can start thinking and keep some brief ideas in the back of our minds, but that's not the goal. Asking these initial questions will help us to do that in the future as well as shape the content.

In short, by answering these questions we will learn about our potential users, which in turn will help us identify their problems and create solutions to solve those problems.

We can always come back to this and add or modify the answers as new ideas come to mind later on. But it's important to get started and have at least some simple foundation.

Okay, let's start by asking some questions.

### 1. Who will be using the website, application?

Well...someone who wants to learn a new language.

### 2. How people will find the website?

It is helpful to think beforehand on how our users will actually end up on our website.

* Search online
* Word of mouth
* See it from an external source
    * Content creator
    * Review
    * Social media

### 3. What people will do on the website? What goal do they have?

Again, we don't want to dig into the features and implementation details at this point. Instead, we think about what our users might expect to be able to do and achieve, once they land on our website.

* Get to know and learn about this specific method of learning a new language
* See clear steps and be guided each step of the way
* Be able to use the site on mobile
* Be able to understand and use the site in their native or target language

### 4. How can I help?

Based on previous answers  we can provide our solutions to those problems.

* Introduction and inspiration about this specific method of learning a new language
* Clear steps and application that will save time by using this method
* Responsive design
* Translate the site in different languages

### 5. Who are the competitors? What have they done?

Sometimes it is useful to see what similar tools, websites, applications already exist out there. What will make our one stand out? What are the common features between them? What are the noticeable differences that make one better than others?

* [Duolingo](https://www.duolingo.com/)
* [Memrise](https://www.memrise.com/)
* [Verbling](Verbling)
* [Busuu](https://www.busuu.com/)
* [Loecsen](https://www.loecsen.com/)
* [Learn101](http://learn101.org/)
* [Mango](https://mangolanguages.com/)
* [Babbel](https://www.babbel.com/)
* [italki](https://www.italki.com/)

### Additional useful resources for language learning

I decided to add some additional resources I have picked up in my free time, not specifically for this project. People I follow that are into language learning and teaching.

* [12 BEST FREE LANGUAGE APPS AND WEBSITES](https://www.youtube.com/watch?v=EKWXOtWfbUE)
* [Days of French 'n' Swedish YouTube channel](https://www.youtube.com/channel/UC3_iSRqqZ7DTVlBNd9lv8jA)
* [Evan Edinger YouTube channel](https://www.youtube.com/user/naveregnide)

## 👥 Creating user stories

Based on the initial questions we answered previously we can start digging deeper into details who will actually be using our application. What they are expecting to be able to do? For what reason?

For user stories we can stick with the simplest format:

1. __As (who?)__
1. __I want to (obstacle)__
1. __so that I can (intention)__

Let's apply this format and come up with few personas. The more we can think of, the better.

1. __As__ someone who is brand new and specifically looking to learn a new language for the first time
1. __I want to__ learn about the process, see what it takes and how difficult it is
1. __so that I can__ try the method and application
---
1. __As__ someone who has tried online language learning before with no success
1. __I want to__ learn about the process of this method
1. __so that I can__
    * try the method and application
    * see how it’s different from other online language learning methods, apps
    * change my mindset about learning languages
---
1. __As__ someone who has experience with language learning and has successfully learned a language
1. __I want to__ learn about the process of this method
1. __so that I can__
    * try the method and application for the next language
    * see how it’s different from other online language learning methods, apps
---
1. __As__ someone who has just found about online language learning from other sources
1. __I want to__ learn about the process of this method
1. __so that I can__ try the method and application
---
1. __As__ someone skeptical about online language learning
1. __I want to__ change my mindset about online language learning
1. __so that I can__ try online language learning
---
1. __As__ a teacher or mentor
1. __I want to__ see how easy and intuitive it is to use this method and application
1. __so that I can__ recommend it to students, other people
---
1. __As__ someone who is already familiar with this method or is returning visitor
1. __I want to__ quickly start using the application
1. __so that I can__ learn a new language / continue learning as quickly as possible
---
1. __As__ someone who wants to learn a new language, but not sure which one
1. __I want to__ see a list of languages available
1. __so that I can__ choose a language to learn
---
1. __As__ someone who is looking to learn a specific language
1. __I want to__ see if the specific language is available
1. __so that I can__ start using the application and learn it
---
1. __As__ someone who is not speaking English
1. __I want to__ be able to use website and application in a different language
1. __so that I can__ learn a new language

Quite a few __obstacles __or __intentions __will overlap. That's good. That means we can already start thinking about prioritizing features, content, and architecture that will provide the most value for as many people as possible.

## 🏛 Information architecture

Based on the user stories we can start creating the outline, content structure of our web application. That may include:

* Top-level pages
* Page sections
* Navigations
* Header
* Footer

We can already start thinking of possible body copy, page and section titles, images. Or at least indicate that eventually there will be some in the future.

### Header

* Logo (image, link)
* Home (link)
* Approach (link)
* Resources (link)
* Language switcher (button)

### Footer

* Logo (image, link)
* Site navigation (navigation links)
* Privacy policy (link)
* Terms of Service / Terms of Use (link)
* Copyright (text)
* Sitemap (link)

### Home page

* __H1:__ Communicate and put thoughts and ideas together in a new language as quickly as possible
* __Primary CTA (links to a specific language page)__
    * Name of the language (link to specific language page)
* __Secondary CTA (scroll indicator, link to page or anchor link)__
    * "Learn more about the method"
* __Who is this method for?__
    * Heading
    * Paragraph
* __Who is this method NOT for?__
    * Heading
    * Paragraph
* __Mindset__
    * Heading
    * Paragraph
* __Benefits__
    * Heading
    * Paragraph
* __Process/steps__
    * For each one Heading and Paragraph
    * __0\. Finding Your Mission__
    * __1\. Gathering the Building Blocks__
    * __2\. The Glue__
    * __3\. Enter the Bubble__

### Resources page

* __H1:__ Useful resources for language learning
* __List of resources__
    * Title
    * Description
    * Link to resource

### Language page

* __H1:__ Most common <number> words in <language>
* __List of most common 1000-2000 words__
    * Word in the target language
    * Word in your language
