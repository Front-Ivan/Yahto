<template>
  <router-view/>
</template>

<style lang="scss">
//////////////////START null styles START///////////////////
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

ul,
ol {
  &[class]{
    padding: 0;
    list-style: none;
  }
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

input,
button,
textarea,
select {
  font: inherit;
}

input {
  border: none;
  outline: none;
}

body {
  min-height: 100vh;
}

#app {
  height: 100%;
}

body {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1vw;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  padding: 3.1106vh 3.1875vw 0 0;
  overflow: hidden;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

//////////////////END null styles END///////////////////

h1, .page-title {
  font-weight: 600;
  font-size: 1.875vw;
  line-height: 4.2216358vh;
  color: #18333E;
}

h2 {
  font-weight: 400;
  font-size: 1.375vw;
  line-height: 3.0782761vh;
  color: #18333E;
}

a {
  font-size: 1vw;
  line-height: 2.2867194vh;
  text-decoration-line: underline;
  color: #18333E;
}
</style>
