//var bip32 = require('bip32')
//var bitcoinjs = require('bitcoinjs-lib');

//var privKey = process.env.BIP32_PRIV;
//var hdNode = bitcoinjs.HDNode.fromBase58(privKey);

//var count = process.env.GENERATE_ADDRESSES ? parseInt(process.env.GENERATE_ADDRESSES) : 1000; // how many addresses to watch


//var rescan = 'false';

//for (var i = 1; i <= count; ++i) {
//  console.log('bitcoin-cli importprivkey ' +  hdNode.derive(i).keyPair.toWIF() + " '' " + rescan)
}

var bip32 = require('bip32')

var privKey = process.env.BIP32_PRIV;
var hdNode = bip32.fromBase58(privKey);

var count = process.env.GENERATE_ADDRESSES ? parseInt(process.env.GENERATE_ADDRESSES) : 1000; // how many addresses to watch


var rescan = 'false';

for (var i = 1; i <= count; ++i) {
  console.log('bitcoin-cli importprivkey ' +  hdNode.derive(i).toWIF() + " '' " + rescan)
}
