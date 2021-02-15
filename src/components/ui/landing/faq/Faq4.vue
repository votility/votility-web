<template>
  <v-sheet>
    <v-container class="py-4 py-lg-8">
      <v-responsive max-width="1200" class="mx-auto text-center">
        <h2 class="text-h3 text-lg-h2">Frequently Asked Questions</h2>
        <div style="width: 80px; height: 4px" class="my-4 secondary mx-auto" />
        <div class="text-h6 text-lg-h5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore doloremque fugit.</div>
      </v-responsive>

      <v-row class="mt-6">
        <v-col
          v-for="(item, i) in faq"
          :key="i"
          cols="12"
          lg="6"
        >
          <div class="text-h5 font-weight-bold">
            {{ item.question }}
          </div>
          <div class="text-h6 secondary--text mt-2">
            {{ item.answer }}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      faq: [{
        question: 'What happened to the developer who couldn\'t access git?',
        answer: 'He now has commitement issues.'
      }, {
        question: 'What do computers and air conditioners have in common?',
        answer: 'They both become useless when you open window.'
      }, {
        question: 'How do you tell an introvert developer from and extrovert developer?',
        answer: 'An extrovert developer looks at your shoes when he talks to you.'
      }, {
        question: 'What is the programmers\'s favourite hangout place?',
        answer: 'Foo Bar'
      }, {
        question: 'Why do Python developers need glasses?',
        answer: 'Because they don\'t C#.'
      }, {
        question: 'What\'s the object-oriented way to become wealthy?',
        answer: 'Inheritance'
      }]
    }
  }
}
</script>
