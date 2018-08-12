const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'shove arena dice about corn state oak pride custom hunt mother faculty',
    'https://rinkeby.infura.io/v3/882727abf027404aafae5ce2b0ab5903'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account: ', accounts[0])

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hello there!'] })
        .send({ gas: 5000000, from: accounts[0] })

    console.log('Contract deployed to: ', result.options.address);
}
deploy();