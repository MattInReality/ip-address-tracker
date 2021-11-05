# Frontend Mentor - IP address tracker solution

This is a solution to
the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0)
. Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
- [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- [Vue3](https://v3.vuejs.org/) - JS framework
- Vue3 Composition API
- [Netlify Stored Functions](https://www.netlify.com/products/functions/) : For hiding api keys
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I've used Vue 2 and Nuxt before but had never taken the dive into Vue 3's composition API. I thought for this project I
would experiment with it and found that I really enjoyed the modularity afforded by it.

I created a shared state module that allowed me to have a lightweight Vuex experience and avoided the use of props and
injection. It felt like a great example of what could be done with the composition API and why it was worth learning all
the extra syntax.

I also further stretched my legs with CSS grid and after many iterations, found a very flexible layout.

Here is a snippet for the grid. I've removed any unrelated properties.

```css
#app {
    height: 100vh;
    display: grid;
    grid-template-rows: repeat(2, 10rem) auto auto repeat(6, 1fr);
}

.main-header {
    grid-row: 1 / span 3;
    grid-column: 1;
}

.info-card {
    grid-row: 3 / span 2;
    grid-column: 1;
    place-self: center;
    height: max-content;
}

.map-card {
    grid-row: 4 / -1;
    grid-column: 1;
}
```

I found a [Dev.to blog post](https://dev.to/fabiorosado/hide-your-api-keys-with-netlify-functions-93m) about hiding API
keys with Netlify functions. Which I planned to use for deployment... until my API allowance ran out. Currently I'm
rethinking the whole project so...

The biggest thing I learnt... To read the details of a free tier on an API before coding around it.

### Continued development

It's endless really isn't it? I'd like to build something bigger in vue. Though I'm considering building my own api
proxy instead so I can get around this problem of api keys.

I think I need to spend some time looking up CSS grid layout strategies. I'd also like to spend some time working
through prod/dev environmental differences so I can work around issues like deployment to Netlify functions without
having to overwrite code close to deployment.

### Useful resources

- [Loading.io](https://loading.io/css/) - A nice source for CSS loaders some of which (or a modified version thereof)
  were used in this project.
- [Vue3 The Complete Guide](https://www.udemy.com/course/vuejs-2-the-complete-guide/) on Udemy. A little watch of the
  composition API videos helped me greatly.

## Author

- Frontend Mentor - [@MattInReality](https://www.frontendmentor.io/profile/MattInReality)
- Twitter - [@MattNorth_dev](https://www.twitter.com/MattNorth_dev)

## Acknowledgments

- [Jetbrains Webstorm](https://www.jetbrains.com/webstorm/) - Near the start of this project I started playing around
  with Webstorm and ended up buying the full suite of IDE's. I have really enjoyed learning to use this new tool and as
  someone who quite commonly thinks of better names for variables, and files long after they have been created and
  referenced, I really appreciate the power and simplicity of the refactoring tools.