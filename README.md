# Blockchain game
Build a play to earn blockchain runner game that rewards tokens and NFTs

## Technology Stack & Dependencies

- Solidity (Writing Smart Contract)
- HTML, Css, Javascript For the website
- [Infura](https://infura.io/) Account on Infura as a node provider
- [NodeJS](https://nodejs.org/en/) To install Dependencies
- [Harhhat](https://hardhat.org/) Ethereum development environment


### 1. Clone/Download the Repository


### 2. Install Dependencies:
```
$ cd contracts
```
```
$ npm install
```

### 3. Deploy NFT collection to Polygon Mumbai testnet
- Setup your env file with both private key and mumbai RPC 
```
$ $ npx hardhat run scripts/deployNFTCollection.js --network mumbai
```

### 4. Deploy Run token to Polygon Mumbai testnet
- Setup your env file with both private key and mumbai RPC 
```
$ $ npx hardhat run scripts/deployRunToken.js --network mumbai
```

### 5. Provide the smart contract addresses in blockchain.js file
