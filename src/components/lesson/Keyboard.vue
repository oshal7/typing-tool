<template>
  <section>
    <h2>{{ question }}</h2>
    <label for="Answers"> Answer:</label>
    <input
      v-model="userAnswer"
      type="text"
      autofocus
      @keydown.enter.prevent="checkAnswer"
    />
    <base-dialog
      v-if="showDialog"
      title="Jumble word lesson"
      @close="confirmError"
    >
      <template #default>
        <p>{{ dialogMsg }}</p>
      </template>
      <template #actions>
        <base-button @click="confirmError" v-show="!correctAnswer"
          >Retry</base-button
        >
        <base-button @click="goToHomepage">Go to Homepage</base-button>
      </template>
    </base-dialog>
  </section>
</template>

<script>
export default {
  inject: ['keyboard'],
  props: ['lessonId'],
  data() {
    return {
      answer: '',
      question: '',
      userAnswer: '',
      showDialog: false,
      dialogMsg: '',
      correctAnswer: false,
    };
  },
  methods: {
    loadKeyboardQuestion(lessonId) {
      const selectedLesson = this.keyboard.find(
        (lesson) => lesson.id == lessonId
      );
      if (selectedLesson) {
        this.question = selectedLesson.question;
        this.answer = selectedLesson.answer;
      }
    },
    checkAnswer() {
      if (this.userAnswer.toLowerCase() === this.answer.toLowerCase()) {
        this.correctAnswer = true;
        this.dialogMsg = 'That is correct answer!';
      } else {
        this.correctAnswer = false;
        this.dialogMsg = 'That is wrong answer!';
      }
      this.showDialog = true;
    },
    confirmError() {
      this.showDialog = false;
    },
    goToHomepage() {
      this.$router.push({ name: 'homepage' });
    },
  },
  created() {
    this.loadKeyboardQuestion(this.lessonId);
  },
  watch: {
    lessonId(newId) {
      this.loadKeyboardQuestion(newId);
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

.form-control {
  margin: 1rem 0;
}
</style>