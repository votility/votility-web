<template>
  <div>
    <v-card color="grey lighten-4" flat>
      <v-toolbar class="elevation-0">
        <v-toolbar-title>New Proposal</v-toolbar-title>
      </v-toolbar>
    </v-card>
    <v-divider class="my-2"></v-divider>
    <v-container fluid>
      <v-row dense>
          <v-col
          cols="12"
        >
          <v-tabs v-model="tab">
            <v-tab>Basic Information</v-tab>
            <v-tab>Input Data</v-tab>
            <v-tab>Options</v-tab>
            <v-tab>Page</v-tab>
          </v-tabs>
          <v-card class="pa-3">
            <v-tabs-items v-model="tab">
              <v-tab-item>
                <v-card class="pa-3">
                  <v-row>
                    <v-col
                      cols="6"
                    >
                      <v-text-field
                        v-model="entity.name"
                        :counter="20"
                        label="Name"
                        required
                        autocomplete="off"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="6"
                    >
                      <v-text-field
                        v-model="entity.erc20VotingPower"
                        :counter="42"
                        label="ERC-20 Voting Power"
                        required
                        append-icon="mdi-share"
                        @click:append="showTokenDialog(entity.erc20VotingPower)"
                        autocomplete="off"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="6"
                    >
                      <v-text-field
                        v-model="entity.targetContract"
                        :counter="42"
                        label="Target Contract"
                        required
                        append-icon="mdi-share"
                        @click:append="showTokenDialog(entity.targetContract)"
                        autocomplete="off"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="6"
                    >
                      <v-text-field
                        v-model="entity.blockLimit"
                        :counter="10"
                        label="Block Limit"
                        required
                        type="number"
                        :hint="blockLimitHint"
                        prefix="#"
                        autocomplete="off"
                      >
                      </v-text-field>
                    </v-col>

                    <v-col
                      cols="6"
                    >
                      <v-text-field
                        v-model="entity.snapshotId"
                        label="Snapshot Id"
                        required
                        autocomplete="off"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                       <v-text-field
                          type="number"
                          v-model="entity.minimumQuorum"
                          label="Minimum Quorum"
                          required
                          :suffix="tokenInfo.symbol"
                          :hint="actualMinimumQuorum"
                          autocomplete="off"
                        ></v-text-field>
                    </v-col>
                  </v-row>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card class="pa-3">
                  <v-row>
                    <v-col cols="12">
                      <v-data-table
                        :headers="inputHeaders"
                        :items="entity.data"
                      >
                        <template v-slot:top>
                          <v-toolbar
                            flat
                          >
                            <v-toolbar-title>Input Data</v-toolbar-title>
                            <v-divider
                              class="mx-4"
                              inset
                              vertical
                            ></v-divider>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="primary"
                              dark
                              class="mb-2"
                              v-bind="attrs"
                              @click="addInput"
                            >
                              New Input
                            </v-btn>
                          </v-toolbar>
                        </template>

                        <template v-slot:item.type="{ item }">
                          <v-select
                            :items="inputTypes"
                            v-model="item.type"
                            label="Type"
                          ></v-select>
                        </template>
                        <template v-slot:item.value="{ item }">
                          <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                              <v-text-field 
                                v-model="item.value" 
                                v-bind="attrs"
                                v-on="on"></v-text-field>
                            </template>
                            <span>{{ showHexValue(item) }}</span>
                          </v-tooltip>
                        </template>
                        <template v-slot:item.actions="{ item }">
                          <v-btn
                            icon
                            color="red"
                            @click="deleteInputData(item)"
                          >
                            <v-icon>mdi-trash-can-outline</v-icon>
                          </v-btn>
                        </template>
                      </v-data-table>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col
                      cols="12"
                    >
                      <v-textarea
                        outlined
                        readonly
                        v-model="parsedData"
                        label="Input data (raw)"
                      ></v-textarea>
                    </v-col>
                  </v-row>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card class="pa-3">
                  <v-row>
                    <v-col cols="12">
                      <v-data-table
                        :headers="headers"
                        :items="entity.options"
                      >
                        <template v-slot:top>
                          <v-toolbar
                            flat
                          >
                            <v-toolbar-title>Options</v-toolbar-title>
                            <v-divider
                              class="mx-4"
                              inset
                              vertical
                            ></v-divider>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="primary"
                              dark
                              class="mb-2"
                              v-bind="attrs"
                              @click="addOption"
                            >
                              New Option
                            </v-btn>
                          </v-toolbar>
                        </template>
                        <template v-slot:item.type="{ item }">
                          <v-select
                            :items="inputTypes"
                            v-model="item.type"
                            label="Type"
                          ></v-select>
                        </template>
                        <template v-slot:item.value="{ item }">
                          <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                              <v-text-field 
                                v-model="item.value" 
                                v-bind="attrs"
                                v-on="on"></v-text-field>
                            </template>
                            <span>{{ showHexValue(item) }}</span>
                          </v-tooltip>
                        </template>
                        <template v-slot:item.text="{ item }">
                          <v-text-field v-model="item.text"></v-text-field>
                        </template>
                        <template v-slot:item.actions="{ item }">
                          <v-btn
                            icon
                            color="red"
                            @click="deleteOption(item)"
                          >
                            <v-icon>mdi-trash-can-outline</v-icon>
                          </v-btn>
                        </template>
                      </v-data-table>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col
                      cols="12"
                    >
                      <v-textarea
                        outlined
                        readonly
                        v-model="parsedOptions"
                        label="Options (raw)"
                      ></v-textarea>
                    </v-col>
                  </v-row>
                </v-card>
              </v-tab-item>
                <v-tab-item>
                  <v-alert
                  border="top"
                  colored-border
                  type="info"
                  elevation="2"
                >
                  Use this field to describe in details you proposal making it easy  to the comunity undestand and support you.
                </v-alert> 
                <editor 
                  @change="updateValue"
                  v-model="entity.page" 
                  ref="toastuiEditor" 
                />
              </v-tab-item>
            </v-tabs-items>
          </v-card>
          </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="12"  class="text-right">
          <v-btn
            class="mr-4"
            v-if="tab === 0"
            @click="tab = 1"
          >
            Define Input Data
            <v-icon right>mdi-cogs</v-icon>
          </v-btn>

          <v-btn
            class="mr-4"
            v-if="tab === 1"
            @click="tab = 2"
          >
            Define Options
            <v-icon right>mdi-format-list-bulleted</v-icon>
          </v-btn>

          <v-btn
            class="mr-4"
            v-if="tab === 2"
            @click="tab = 3"
          >
            Define Page
            <v-icon right>mdi-file-document-multiple-outline</v-icon>
          </v-btn>

          <v-btn
            color="success"
            class="mr-4"
            @click="addProposal"
            :disabled="!enableCreateProposal"
          >
            Create Proposal
            <v-icon right>mdi-file-star-outline</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <new-proposal-dialog v-if="newProposalDialog" :proposal="entity" :open="newProposalDialog" @close="newProposalDialog = false" />
      <token-dialog v-if="tokenDialog" :open="tokenDialog" :info="tokenInfo" @close="closeTokenDialog" />
    </v-container>
  </div>
</template>

<script>
import config from '@/configs'
import MainMenu from '@/components/navigation/MainMenu'
import menu from '@/components/ui/application/layout/menu'
import UserTable from '@/components/examples/UserTable'
import Card2 from '@/components/ui/application/card/Card2'
import Card5 from '@/components/ui/application/card/Card5'

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/vue-editor';

import NewProposalDialog from '@/lib/components/ui/NewProposalDialog';
import TokenDialog from '@/lib/components/ui/TokenDialog';
import ERC20Proxy from '@/lib/eth/ERC20Proxy';
import HexHelper from '@/lib/helpers/HexHelper';

import { Decimal } from 'decimal.js';

export default {
  components: {
    MainMenu,
    UserTable,
    Card2,
    Card5,
    Editor,
    NewProposalDialog,
    TokenDialog,
  },
  
  data() {
    return {
      tab: 0,
      enableCreateProposal: false,
      newProposalDialog: false,

      currentBlockNumber: 0,

      tokenDialog: false,
      tokenInfo: {},

      entity: {
        page: '',
        options: [],
        data: [],
      },
      menu,
      config,
      drawer: null,
      isContentBoxed: false,

      tokenInfo: {},

      inputTypes: ['uint256', 'address', 'bool', 'bytes32', 'string'],

      headers: [
        { text: 'Type', value: 'type', sortable: false, width: '200px'  },
        { text: 'Value', value: 'value', sortable: false },
        { text: 'Text', value: 'text', sortable: false, width: '300px'   },
        { text: 'Actions', value: 'actions', sortable: false, width: '50px' },
      ],

      inputHeaders: [
        { text: 'Type', value: 'type', sortable: false, width: '200px'  },
        { text: 'Value', value: 'value', sortable: false },
        { text: 'Actions', value: 'actions', sortable: false, width: '50px' },
      ],
    }
  },

  watch: {
    tab() {
      if (this.tab === 3) {
        this.enableCreateProposal = true;
      }
    },

    'entity.erc20VotingPower'() {
      this.updateTokenInfo();
    },

    isConnected() {
      this.loadData();
    }
  },

  computed: {
    isConnected() {
      return this.$store.getters['user/isConnected'];
    },

    account() {
      return this.$store.getters['user/account'];
    },
    
    parsedData() {
      return HexHelper.getOnlyValues(this.entity.data).join("\n");
    },
    
    parsedOptions() {
      return HexHelper.getOnlyValues(this.entity.options).join("\n");
    },

    actualMinimumQuorum() {
      Decimal.set({ toExpPos: 40 });

      if (this.tokenInfo.found && !isNaN(this.entity.minimumQuorum)) {
        try {
          const number = Decimal(this.entity.minimumQuorum);
          const actualMinimumQuorum = number.mul(new Decimal(10).pow(this.tokenInfo.decimals));
          const proportion = actualMinimumQuorum.dividedBy(this.tokenInfo.totalSupply).mul(100).toFixed(2);

          this.entity.rawMinimumQuorum = actualMinimumQuorum.toString();
          this.entity.displayMinimumQuorum = `${this.entity.minimumQuorum} ${this.tokenInfo.symbol}`
          return `Raw value: ${this.entity.rawMinimumQuorum} (${proportion}%)`;
        } catch(e) {
          console.log(e);
          return '';
        }
      }

      return '';
    },

    blockLimitHint() {
      return `Current block number is #${this.currentBlockNumber}`;
    }
  },

  mounted() {
    this.loadData();
  },

  methods: {
    async loadCurrentBlockNumber() {
      if (!this.isConnected) {
        return;
      }

      this.currentBlockNumber = await web3.eth.getBlockNumber();
    },

    loadData() {
      this.loadCurrentBlockNumber();
    },

    async updateTokenInfo() {
      const proxy = new ERC20Proxy(this.entity.erc20VotingPower);
      this.tokenInfo = await proxy.getInfo(this.account);
    },

    addOption() {
      this.entity.options.push({});
    },

    addInput() {
      this.entity.data.push({});
    },

    async addProposal() {
      this.newProposalDialog = true;
    },

    updateValue() {
      this.entity.page = this.$refs.toastuiEditor.invoke('getHtml');
    },

    showHexValue(item) {
      return HexHelper.get32BytesHexValue(item.type, item.value);
    },

    async showTokenDialog(contractAddress) {
      try {
        const proxy = new ERC20Proxy(contractAddress);
        this.tokenInfo = await proxy.getInfo(this.account);
        this.tokenDialog = true;
      } catch (e) {
        this.tokenInfo = {
          contractAddress,
          found: false,
          symbol: 'N/A',
          name: 'N/A',
          totalSupply: 'N/A',
          balanceOf: 'N/A',
        }
        this.tokenDialog = true;
      }
    },

    closeTokenDialog() {
      this.tokenDialog = false;
    },

    deleteOption(item) {
      this.entity.options = this.entity.options.filter(o => o !== item);
    },

    deleteInputData(item) {
      this.entity.data = this.entity.data.filter(o => o !== item);
    }
  }
}
</script>