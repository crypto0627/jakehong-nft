# Hardhat ERC-721 Mint Project

Start project:

```shell
Download project or git clone
npm i --save-dev --legacy-peer-deps
npm start
```

Must do these to deploy smart contract on network:

```shell
Change file hardhat.config.js
Create new deploy js file in scripts file
Create .env file
REACT_APP_GOERLI_RPC_URL="YOUR MAINNET API URL"
REACT_APP_ETHERSCAN_KEY="Your ETHERSCAN API KEY "
REACT_APP_PRIVATE_KEY="YOUR WALLET PRIVATE KEY"
```

Contract deploy:
```shell
npx hardhat clean
npx hardhat compile
npx hardhat run ./scripts/yourdeploy.js --network mainnet
npx hardhat verify --network mainnet contract_Address
```

You can see contract content on Etherscan!