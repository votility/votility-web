<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="(card, index) in cards" :key="index" cols="12" lg="4">
        <v-card>
          <div class="d-flex flex-column">
            <div class="d-flex">
              <div class="pa-2">
                <div class="font-weight-bold">{{ card.title }}</div>
                <div class="secondary--text text-body-2 text-truncate">{{ card.description }}</div>
              </div>
              <v-spacer></v-spacer>
              <v-menu
                bottom
                left
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>

                <v-list nav dense>
                  <v-list-item
                    v-for="(item, i) in menuItems"
                    :key="i"
                    link
                  >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </div>
          <v-sheet
            height="8"
            width="100%"
            :color="card.color"
            dark
            class="align-center rounded-b justify-center d-flex"
          >
          </v-sheet>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      cards: [{
        title: 'Project A',
        description: 'Kanban Board',
        color: 'accent'
      }, {
        title: 'Project B',
        description: 'Stats Algorithm',
        color: 'primary'
      }, {
        title: 'Project C',
        description: 'Keeping it real',
        color: 'error'
      }],
      menuItems: [
        { title: 'Delete' },
        { title: 'Edit' },
        { title: 'Open' }
      ]
    }
  }
}
</script>
