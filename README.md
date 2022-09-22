# Hardhat ERC-721 Mint Project

Start project:

```shell
Download project or git clone
npm init -y
npm i --save-dev --legacy-peer-deps
npm start
```


Must do these to deploy smart contract on network:
<p>
1.Change file hardhat.config.js<br/>
2.Create new deploy js file on scripts file<br/>
3.Create .env file<br/>
REACT_APP_GOERLI_RPC_URL="YOUR MAINNET API URL"<br/>
REACT_APP_ETHERSCAN_KEY="Your ETHERSCAN API KEY "<br/>
REACT_APP_PRIVATE_KEY="YOUR WALLET PRIVATE KEY"
4.Copy artifacts\contracts\contractname.sol\contractname.json to web3.0 page

Contract deploy:
```shell
npx hardhat clean
npx hardhat compile
npx hardhat run ./scripts/yourdeploy.js --network mainnet
npx hardhat verify --network mainnet contract_Address
```
view your smart contract on Etherscan!

<br/>

使用框架:<br/>
Reactjs:https://reactjs.org/ <br/>
Hardhat:https://hardhat.org/

API:https://www.alchemy.com/ <br/>

領取GOERLI ETH:<br/>
GOERLI FAUCET:https://goerlifaucet.com/


