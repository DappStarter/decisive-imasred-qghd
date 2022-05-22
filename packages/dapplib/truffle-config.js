require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remember color gesture oppose off silly'; 
let testAccounts = [
"0x765fc0aae0aff4f6140a5a2935575edbfc382f219e752baa33687d8024b0309a",
"0x529c3f972e80f9e7fac3709b1564e08ee79918fe042d0c09b30b811d4c68f8f4",
"0xb31c40e3017b47b4425ba3ed79eb45be31b2478bb48860df0ae0ef3dfca22006",
"0xf24082f389a005e6faa42f525be4dffc32fc6a0b2ce238158fe8b48fc1977aa7",
"0x2208bd397d23c3f8ecfa30cf31e391c833c7bc462ea03f3564284a82e7894ed5",
"0x38129325e6049fc076c28341cf07854e2269b2df6b26d3c8b5850f560371982e",
"0xea10ec073d603d6d7ecf7a6b997c73ee6f07677b1ebb3d80bb6e8c3cf99c944e",
"0xe459c2c9be602f5b40e9926838189fa3e3bb22175b8a1b91fcf5e5bdd5405115",
"0x0defc54e74333018a2969e124c4b8582070e5dce6bc9b001a698363099a38b20",
"0x0b8fd54bfe16f6494553a0dcab04bced702eeafd6d725ea99d3254228729be02"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
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
            version: '^0.8.0'
        }
    }
};

