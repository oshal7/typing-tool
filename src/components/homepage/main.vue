<template>
  <router-view></router-view>
  <ul>
    <li v-for="lesson in keyboard" :key="`k${lesson.id}`" :id="`k${lesson.id}`">
      <router-link :to="keyboardLessonLink(lesson.id)"
        ><h3>Keyboard Lesson {{ lesson.id }}</h3></router-link
      >
    </li>

    <li v-for="lesson in jumble" :key="`j${lesson.id}`" :id="`j${lesson.id}`">
      <router-link :to="jumbleLessonLink(lesson.id)"
        ><h3>Jumble Lesson {{ lesson.id }}</h3></router-link
      >
    </li>
  </ul>
</template>

<script>
export default {
  inject: ['keyboard', 'jumble'],
  methods: {
    keyboardLessonLink(lessonId) {
      return { name: 'keyboard-lesson', params: { lessonId: lessonId } };
    },
    jumbleLessonLink(lessonId) {
      return { name: 'jumble-lesson', params: { lessonId: lessonId } };
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
}

li h3 {
  margin: 0.5rem 0;
  font-size: 1.25rem;
}

a {
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: #11005c;
}

a:hover,
a:active {
  background-color: #220a8d;
}

ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>