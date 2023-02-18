<template>
  <router-view/>
</template>

<style lang="scss">
//////////////////START null styles START///////////////////
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&display=swap');

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
  font-family: 'Baloo 2', sans-serif;
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
