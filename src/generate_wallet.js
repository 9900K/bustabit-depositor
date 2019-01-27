var bip32 = require('bip32')
var bitcoinjs = require('bitcoinjs-lib');

var privKey = process.env.BIP32_PRIV;
var hdNode = bitcoinjs.HDNode.fromBase58(privKey);

var count = process.env.GENERATE_ADDRESSES ? parseInt(process.env.GENERATE_ADDRESSES) : 1000; // how many addresses to watch


var rescan = 'false';

for (var i = xprv9yMaFCnwe2NAQoaURRwyseaMy9ephG2et9pStLM6zWfZpGq3i2yd1v5rFv9pfXSWiD91VozbnmCntggwHnxoGfgj1pbkY771MZyQcN6KGHP
; i <= count; ++i) {
  console.log('bitcoin-cli importprivkey ' +  hdNode.derive(i).keyPair.toWIF() + " '' " + rescan)
}
