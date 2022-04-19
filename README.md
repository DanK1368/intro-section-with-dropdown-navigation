# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](public/images/screenshot.png)

### Links

- Live Site URL: [Click Here](https://dank1368.github.io/intro-section-with-dropdown-navigation/)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

As I am currently learning REACT as my first framework, I wanted use it for this challenge to practice some more concepts.

The main reason for using REACT in this challenge was to practice using 'styled components'.

I set up two main components for this project which is the 'Header' and 'MainContent', each of which have their own styled.js sheet. In it I broke up the styles into different sections to serve the different layout needs.
So there is a separate styled.header section, a styled.nav section etc. I am not sure if that is the best approach, but I feel that it worked for this smaller project.

I also wanted to make the button a reusable component, and tried to set it up in a way for me to simply pass in a prop name to be used as a classname for the button to be styled accordingly.

I am hoping to practice building projects using REACT and implementing styled components more in the future.
