require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict drum off uphold drift rescue noble hospital good another army gentle'; 
let testAccounts = [
"0xe3cb3fb7c70cb6852bb6bffabdaeefc20d0bc1800148271e6b7c0a24d653c97a",
"0x1cacc8857f86b48a3484d0546c0553ad9c85c0fa11450d31698d664e4b5b9a22",
"0xf77738192f1e3c4369ab1a59bf4a0213a34c6530d640f220aed099c994c3bc96",
"0xd7687a11534034da690f64784fcf04c80ff7f0640be547b022be6d2f7218e1a3",
"0xfe0feb98f3eeaea77f27ca84ef174b7f7f687be81aa9220523154a623d1d64d1",
"0xc4fc8872eb84c381392b62b44791dbc7e18a75013f4ce702ef0e7ff88c40f951",
"0xfd1c2c57624d1511e38069aac722dd90bfd68ef2e5ff4f209c5a6745953a31ab",
"0x062669fab0255f01d38eefc762410360216c8ac6589fca77d9f40666c46b04f6",
"0xe015af0fc5c4093efed0ab69e839c5ed0baebbc01d381a0d1977d871641ae733",
"0x176c654d0aa722e1cc26c945481ddeb84023a9d7d54c3372bd1572090eca1360"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
