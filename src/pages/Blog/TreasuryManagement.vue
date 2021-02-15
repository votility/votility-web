<template>
  <div>
    <v-sheet>
      <v-container class="py-4 py-lg-8">
        <v-row>
          <v-col cols="12" md="6">
            <h2 class="text-h3 text-lg-h2 mt-0 mt-xl-10">Treasury Management</h2>
            <div class="text-h6 text-lg-h5 mt-5">
              Create autonomous treasury management is a great feature to help your community govern how the team uses the funds to grow the project.
            </div>
            <div class="text-h6 text-lg-h5 mt-5">
              In this article, you will learn how to create an ERC-20 Snapshot compliant token, generate a base snapshot, create the votility receiver to act as your Treasury Management, and post your first proposal.
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <v-img src="/images/project/blog/treasury.jpg" class="rounded-lg elevation-6" max-height="480"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet>
      <v-container class="py-4 py-lg-8">
        <v-row>
          <v-col>
            <h2 class="text-h4 mt-0 mt-xl-10">Treasury Management</h2>
            <div class="mt-5">
              Create autonomous treasury management is a great feature to help your community govern how the team uses the funds to grow the project.
            </div>
            <div class="mt-1">
              To start our jorney we need to create a new Truffle project, in this project we will write ourt smart contracts. In your favorite shell inititalize the project:
            </div>
            <code-highlight class="mt-5" language="solidity">
              <pre>

$ truffle init dao-treasury
$ cd dao-treasury
              </pre>
            </code-highlight>
            <div class="mt-1">
              For this project we need to import @openzeppelin/contracts.
            </div>
             <code-highlight class="mt-5" language="solidity">
              <pre>

$ npm init -y
$ npm i @openzeppelin/contracts
              </pre>
            </code-highlight>
            <div class="mt-1">
              We base the on-chain voting power in Votility Protocol on a token snapshot, so you will need to implement the ERC20 Snapshot interface in your smart contract token. 
              Create a new file in contracts folder called SimpleToken.sol. Here we have an example:
            </div>
            <code-highlight class="mt-5" language="solidity">
              <pre>

// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Snapshot.sol";

contract SimpleToken is ERC20, ERC20Snapshot {
    string public SYMBOL = "STN";
    string public NAME = "STN";
    uint8 public DECIMALS = 18;
    uint256 public INITIAL_SUPPLY = 1000000000000000000000000;

    constructor() ERC20(NAME, SYMBOL) {
        _mint(msg.sender, INITIAL_SUPPLY);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override(ERC20, ERC20Snapshot) {}

    function snapshot() public returns (uint256) {
        return _snapshot();
    }
}
              </pre>
            </code-highlight>
            <div class="mt-5">
              In this example we've created a token called STN (both name and symbol) with a supply of 1000000 tokens (using 18 decimal places).
              If you run truffle compile command maybe you will have an error about at the first line due to compile version. 
              Check the truffle-config.js if it is configured using a propoer compile version like this:
            </div>
            <code-highlight class="mt-5" language="javascript">
              <pre>

module.exports = {
  networks: {
 
  },
  compilers: {
    solc: {
      version: "0.7.4",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
              </pre>
            </code-highlight>
            <div class="mt-1">
              Now you will be able to run truffle compile comand. Try it!
            </div>
            <code-highlight class="mt-5" language="solidity">
              <pre>

$ truffle compile
              </pre>
            </code-highlight>
            <div class="mt-1">
              The build directory was created contained the compiled artifacts. The next step is install the @votilityprotocol/contracts dependencies in order to implement the receiver.
            </div>
            <code-highlight class="mt-5" language="solidity">
              <pre>

$ npm i @votilityprotocol/contracts
              </pre>
            </code-highlight>
            <div class="mt-1">
              When a proposal is finisehd Votility Protocol sends the result to a target contract, which we call receiver contrat. 
              To create the receiver contrat you need to implement IVotilityReceiver interface. 
              Create a new file DAOTreasury.sol in the contracts folder and implement all the methods. Here we have an example:
            </div>
            <code-highlight class="mt-5" language="solidity">
              <pre>

// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;

import "./IVotilityReceiver.sol";

contract DAOTreasury is IVotilityReceiver {
    function onProposalFinished(
        address sender,
        uint256 proposalId,
        bytes32[] calldata data,
        uint256 winnerOptionIndex,
        bytes32 winnerOptionData
    ) external override returns (bool) {
        return true;
    }

    function checkProposer(address proposer)
        external
        pure
        override
        returns (bool)
    {
        return true;
    }

    function checkERC20VotingPower(address erc20VotingPower)
        external
        pure
        override
        returns (bool)
    {
        return true;
    }

    function getMininimumQuorum() external pure override returns (uint256) {
        return 0;
    }

    function getMinimumBlockLimitInterval()
        external
        pure
        override
        returns (uint8)
    {
        return 0;
    }
}
              </pre>
            </code-highlight>
            <div class="mt-1">
              The main method is onProposalFinished which is the hook function called when the proposal is finished. The method will receive these parameters:
              <ul>
                <li><b>address sender</b>: the original sender (who finishes the proposal)</li>
                <li><b>uint256 proposalId</b>: the proposal id in VotilityProtocol</li>
                <li><b>bytes32[] calldata data</b>: all the input parameters</li>
                <li><b>uint256 winnerOptionIndex</b>: the winner option index (indexes by zero)</li>
                <li><b>bytes32 winnerOptionData</b>: the bytes32 data linked to the option</li>
              </ul>
            </div>
            <div class="mt-1">
              Adapting to our scenario, a treasury management, we will configure a proposal to send a specified amount of Ether (it could be any token)
              to an address, so the community will vote (Yes or No). The input parameteres wil be the amount and the target address and options true and false.
              If the winnerOptionIndex is 0, the Yes option, the DAOTreasury contract will send the amount (first input data) to the target address (second target address).
              Code the following lines:
            </div>
            <code-highlight class="mt-5" language="solidity">
              <pre>

function onProposalFinished(
    address sender,
    uint256 proposalId,
    bytes32[] calldata data,
    uint256 winnerOptionIndex,
    bytes32 winnerOptionData
) external override returns (bool) {
    uint256 amount = uint256(data[0]);
    address payable target = address(uint160(uint256(data[1])));

    if (winnerOptionIndex == 0) {
        target.transfer(amount);
    }

    return true;
}
              </pre>
            </code-highlight>
            <div class="mt-1">
              This is all we need to govern our DAO, the production code must be check some requirements, which could be the original and the current sender,
              the amount of Ether and other information available in the proposal (you can recover this data calling getProposal method from the VotilityProtocal smart contract).
            </div>
            <div class="mt-1">
              You can use the other methods to improve security requirements:
              <ul>
                <li>
                  <b>checkProposer</b>: 
                  Votility Propotol calls the method to check if the sender can create a proposal.
                  You can implement a whitelist / blacklist.
                </li>
                <li>
                  <b>checkERC20VotingPower</b>: 
                  Votility Propotol calls the method to check if you will accept the specified ERC-20 as a voting power. 
                  Usually you used just one token as voting power, however maybe your project has a lot of options like liquidity pools or 
                  other underlying tokens, so this method will give you the power to expand.
                </li>
                <li>
                  <b>getMinimumBlockLimitInterval</b>: 
                  In a full DAO, anyone can sends a proposal, a stupid proposal inclusive. So you can control how many blocks the proposal will 
                  wait to finish.
                </li>
                <li>
                  <b>getMininimumQuorum</b>: 
                  Following the same idea of the previous method, this method will prevent a stupid idea to win with a small amount of votes. 
                  The return is based on the total supply of the token. In our example if you want at least 10% of voting power you need to configure the method
                  to return 100000000000000000000000.
                </li>
              </ul>
            </div>
            <div class="mt-1">
              We will let these security issues for a next article, for now let focus just to the main method and start our amazing DAOTreasury. 
              To finish our treasury mangement we need to start accept Ether from our users. Here the final DAOTreasury smart contract code.
            </div>
                        <code-highlight class="mt-5" language="solidity">
              <pre>

// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;

import "./IVotilityReceiver.sol";

contract DAOTreasury is IVotilityReceiver {
    receive() external payable {
    }

    function onProposalFinished(
        address sender,
        uint256 proposalId,
        bytes32[] calldata data,
        uint256 winnerOptionIndex,
        bytes32 winnerOptionData
    ) external override returns (bool) {
        uint256 amount = uint256(data[0]);
        address payable target = address(uint160(uint256(data[1])));

        if (winnerOptionIndex == 0) {
            target.transfer(amount);
        }

        return true;
    }

    function checkProposer(address proposer)
        external
        pure
        override
        returns (bool)
    {
        return true;
    }

    function checkERC20VotingPower(address erc20VotingPower)
        external
        pure
        override
        returns (bool)
    {
        return true;
    }

    function getMininimumQuorum() external pure override returns (uint256) {
        return 0;
    }

    function getMinimumBlockLimitInterval()
        external
        pure
        override
        returns (uint8)
    {
        return 0;
    }
}
              </pre>
            </code-highlight>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>
        
<script>
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";

export default {
  components: {
    CodeHighlight
  },

  data() {
    return {
    }
  },
}
</script>

