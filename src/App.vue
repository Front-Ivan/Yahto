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

body,
#app {
  min-height: 100vh;
}

body {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
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


</style>
