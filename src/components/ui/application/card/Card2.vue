<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="12" md="4">
        <v-card>
          <div class="pa-3">
            <div class="d-flex align-center flex-column">
              <v-avatar small size="120">
                <img
                  src="/images/avatars/avatar3.svg"
                  alt=""
                >
              </v-avatar>
              <div class="text-center mt-2">
                <span class="font-weight-bold text-body-2">Laura Bush</span>
                <div class="secondary--text text--lighten-1 text-caption">
                  Senior Software Engineer
                </div>
              </div>
              <v-chip small color="accent" class="font-weight-bold mt-2">Admin</v-chip>
            </div>
          </div>
          <v-divider></v-divider>
          <div class="d-flex">
            <v-btn class="flex-grow-1" tile height="48" text>
              <v-icon left>mdi-phone-outline</v-icon>
              Call
            </v-btn>
            <v-divider vertical></v-divider>
            <v-btn class="flex-grow-1" tile height="48" text>
              <v-icon left>mdi-email-outline</v-icon>
              Email
            </v-btn>
          </div>
        </v-card>
      </v-col><v-col cols="12" md="4">
        <v-card>
          <div class="pa-3">
            <div class="d-flex align-center flex-column">
              <v-avatar small size="120">
                <img
                  src="/images/avatars/avatar1.svg"
                  alt=""
                >
              </v-avatar>
              <div class="text-center mt-2">
                <span class="font-weight-bold text-body-2">Robert Smith</span>
                <div class="secondary--text text--lighten-1 text-caption">
                  QA
                </div>
              </div>
              <v-chip small color="accent" class="font-weight-bold mt-2">Admin</v-chip>
            </div>
          </div>
          <v-divider></v-divider>
          <div class="d-flex">
            <v-btn class="flex-grow-1" tile height="48" text>
              <v-icon left>mdi-phone-outline</v-icon>
              Call
            </v-btn>
            <v-divider vertical></v-divider>
            <v-btn class="flex-grow-1" tile height="48" text>
              <v-icon left>mdi-email-outline</v-icon>
              Email
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <div class="pa-3">
            <div class="d-flex align-center flex-column">
              <v-avatar small size="120">
                <img
                  src="/images/avatars/avatar16.svg"
                  alt=""
                >
              </v-avatar>
              <div class="text-center mt-2">
                <span class="font-weight-bold text-body-2">Dave Bush</span>
                <div class="secondary--text text--lighten-1 text-caption">
                  Senior Product Manager
                </div>
              </div>
              <v-chip small color="primary" class="font-weight-bold mt-2">Moderator</v-chip>
            </div>
          </div>
          <v-divider></v-divider>
          <div class="d-flex">
            <v-btn class="flex-grow-1" tile height="48" text>
              <v-icon left>mdi-phone-outline</v-icon>
              Call
            </v-btn>
            <v-divider vertical></v-divider>
            <v-btn class="flex-grow-1" tile height="48" text>
              <v-icon left>mdi-email-outline</v-icon>
              Email
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
