<template>
  <div>
    <v-sheet color="transparent">
      <v-container class="py-2 py-md-6">
        <v-row>
          <v-col cols="12" md="6" lg="7">
            <h1 class="text-h4 text-sm-h3 text-lg-h2 mt-xl-4">The simplest way to build your next <span class="primary--text">DAO</span></h1>
            <h2 class="text-h6 text-sm-h6 secondary--text mt-4">
              Using Votility Protocol, you don't need to worry about creating a governance logic in your contracts. You reduce the amount of gas used to deploy your contract, lines of course, development and audit hours.
            </h2>
            <h2 class="text-h6 text-sm-h6 secondary--text mt-4">
              Take care of your Utility Token and let Votility Protocol be your governance platform.
            </h2>
            <v-btn
               @click="goToBlog"
              large
              color="accent"
              class="mt-4"
            >Get Started</v-btn>
          </v-col>
          <v-col cols="12" md="6" lg="5" class="d-none d-md-block">
            <v-img
              class="rounded-lg mt-2"
              max-height="480"
              contain
              src="/images/project/home.svg"
              alt=""
            >
            </v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet id="getready">
      <v-container class="py-4 py-lg-8">
        <div class="text-center">
          <h2 class="text-h3 text-lg-h2">Get your protocol ready for governance</h2>
        </div>
        <div class="text-center">
          <v-responsive max-width="1200" class="mx-auto">
            <v-img
              class="rounded-lg mt-2"
              max-height="480"
              contain
              src="/images/project/get-started.svg"
              alt=""
            >
            </v-img>
          </v-responsive>
        </div>
        <div class="text-center">
          <v-responsive max-width="1200" class="mx-auto">
            <div class="text-h6 text-lg-h5 mt-4">
              Using the Votility, you can create a proposal to govern your protocol, configure the parameters and explain how the request works. The data is sent to our smart contract and the additional information to an IPFS node. Anyone can inspect the smart contract data and get the original proposal descriptor file from an IPFS node to validate the idea.
            </div>
          </v-responsive>
        </div>
        <v-row class="mt-4">
          <v-col v-for="(item, i) in features" :key="i" cols="12" md="6">
            <div class="d-flex">
              <div class="mr-2">
                <v-sheet color="surface" rounded class="pa-2">
                  <v-icon>{{ item.icon }}</v-icon>
                </v-sheet>
              </div>
              <div>
                <div class="text-h5">{{ item.title }}</div>
                <div class="text-h6 mt-1">{{ item.description }}</div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet id="howitworks" color="transparent">
      <div class="d-flex flex-column flex-lg-row">
        <div class="w-full w-lg-half">
          <v-img
            src="/images/project/chain-of-bees.jpg"
            height="100%"
            alt=""
          ></v-img>
        </div>
        <div class="w-full w-lg-half d-flex align-center">
          <div class="pa-6 pa-md-12">
            <v-responsive>
              <h2 class="text-h3 text-lg-h2">How it works?</h2>
              <div class="text-h6 text-lg-h5 mt-5">
                To create a proposal in the protocol, you need to specify an ERC-20 Snapshot compliant token as voting power, a target contract (optional) called at the end of the process, and specify all the parameters that describe the idea. 
                When a user sends the vote, Votility computes the poll's weight based on the token snapshot. 
                At the end of the specified period (based on blocks), the proposer finishes the proposal sending the result directly to the smart contract (if your smart contract supports this feature) or collect the data and perform all the needed actions.
              </div>
              <div class="text-h6 text-lg-h5 mt-5">
                Your primary focus is to write what happens when the proposal finish. You don't need to worry about all the base logic to accept your users' requests, compute vote weight, test the code, write the UI to get community engagement, and deploy the contract. 
              </div>
              <div class="mt-4">
                <v-btn @click="goToBlog" outlined tile large>Learn More</v-btn>
              </div>
            </v-responsive>
          </div>
        </div>
      </div>
    </v-sheet>
    <v-sheet id="themagic">
      <v-container class="py-4 py-lg-8">
        <v-row>
          <v-col cols="12" lg="6">
            <h2 class="text-h3 text-lg-h2">The magic</h2>
            <div class="text-h6 text-lg-h5 mt-5">
              In a straightforward hook function, you do all your magic. 
              You can set up parameters as input data and options to users vote. 
              When the proposal has finished, Votility Protocol will send the parameters and the result directly to your smart contract. 
              Just it. Nothing else!
            </div>
            <div class="mt-4">
              <v-btn @click="goToBlog" outlined tile large>Learn More</v-btn>
            </div>
          </v-col>
          <v-col cols="12" lg="6">
            <v-img src="/images/project/snippet.svg" class="elevation-6" max-height="480"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    
    <v-sheet id="faq" color="transparent">
      <v-container class="py-4 py-lg-8">
        <div class="text-center">
          <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">Support</div>
          <h2 class="text-h3 text-lg-h2">Frequently Asked Questions</h2>
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
    
  </div>
</template>

<script>
import Hero4 from '@/components/ui/landing/hero/Hero4.vue'
import Logos2 from '@/components/ui/landing/logos/Logos2.vue'
import Feature11 from '@/components/ui/landing/feature/Feature11.vue'
import CallToAction5 from '@/components/ui/landing/cta/CallToAction5.vue'
import Footer4 from '@/components/ui/landing/footer/Footer4.vue'
import Team6 from '@/components/ui/landing/team/Team6.vue'

export default {
  components: {
    Hero4,
    Logos2,
    CallToAction5,
    Feature11,
    Footer4,
    Team6
  },

  data() {
    return {
      features: [{
        icon: 'mdi-star-circle-outline',
        title: 'Save time and money',
        description: 'Let Votility be your governance module. You will save development (smart contract, front-end and back-end) and audit hours and the amount of gas used to deploy your contract.'
      }, {
        icon: 'mdi-link-variant',
        title: 'Off-chain and On-chain',
        description: 'You can combine all benefits using both strategies. Proposals are running on-chain to endorse your ideals and the voting off-chain to get community engagement.'
      }, {
        icon: 'mdi-cog-transfer-outline',
        title: 'One simple hook function',
        description: 'All you need to do is, when necessary, write a receiver contract waiting for the proposal result, and done! Just one simple hook function.'
      }, {
        icon: 'mdi-gavel',
        title: 'Utility Token or Governance Token?',
        description: 'Don\'t worry about that. Create your Utility Token, develop your project, and whenever you need, transform your token into voting power!'
      }],

      pannel: [0],
      faq: [{
        question: 'My token doesn\'t support Votility Portocol interface. Can I use the protocol?',
        answer: 'Yes. There is no problem just set as the target contract the 0x0 address. At the end of the process you collect the result and do whatever is requested from your community.'
      }, {
        question: 'My token doesn\'t support the ERC20Snapshot pattern. Is this a problem?',
        answer: 'Yes and no, the protocol needs to use a balance snapshot. However, you can create a Snapshot Token Wrapper. Don\'t panic. We thought about it!'
      }, {
        question: 'How can I get attention to my proposal?',
        answer: 'You could show your commitment to the cause by staking VTY tokens in the proposal risking burning the amount if the community didn\'t accept it. You can invite your friends to show how important it is and how it will impact the project.'
      }],
    }
  },

  methods: {
    goToBlog() {
      this.$router.push('/blog/learn-more');
    }
  }
}
</script>
