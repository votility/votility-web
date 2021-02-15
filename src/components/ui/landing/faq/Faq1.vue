<template>
  <v-sheet>
    <v-container class="py-4 py-lg-8">
      <div class="text-center">
        <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">Support</div>
        <h2 class="text-h3 text-lg-h2">Frequently Asked Questions</h2>
        <v-responsive max-width="1200" class="mx-auto">
          <div class="text-h6 text-lg-h5 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore doloremque fugit! Dolor fugit molestiae vero quos quisquam nobis, eos debitis magni omnis ea incidunt amet voluptate dignissimos!</div>
        </v-responsive>
      </div>

      <v-expansion-panels
        v-model="panel"
        multiple
        class="mt-8"
      >
        <v-expansion-panel
          v-for="(item, i) in faq"
          :key="i"
        >
          <v-expansion-panel-header class="text-h5">
            {{ item.question }}
          </v-expansion-panel-header>
          <v-expansion-panel-content class="text-h6 secondary--text">
            {{ item.answer }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      panel: [0],
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
