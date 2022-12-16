<template>
  <the-navigation></the-navigation>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import TheNavigation from './components/nav/TheNavigation.vue';

export default {
  components: {
    TheNavigation,
  },
  data() {
    return {
      keyboard: [
        {
          id: 1,
          question: 'What is the key below D?',
          answer: 'c',
        },
        {
          id: 2,
          question: 'What is the key above V?',
          answer: 'f',
        },
      ],
      jumble: [
        {
          id: 1,
          question: 'Ram is a good boy',
          options: ['boy', 'Ram', 'good', 'is', 'a'],
          answer: '2,4,5,3,1',
        },
        {
          id: 2,
          question: 'This is a fun exercise',
          options: ['exercise', 'a', 'This', 'fun', 'is'],
          answer: '3,5,2,4,1',
        },
      ],
    };
  },
  provide() {
    return {
      keyboard: this.keyboard,
      jumble: this.jumble,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>