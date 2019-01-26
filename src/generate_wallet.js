var bip32 = require('bip32')
var bitcoinjs = require('bitcoinjs-lib');

var privKey = process.env.BIP32_PRIV;
var hdNode = bitcoinjs.HDNode.fromBase58(privKey);

var count = process.env.GENERATE_ADDRESSES ? parseInt(process.env.GENERATE_ADDRESSES) : 1000; // how many addresses to watch


var rescan = 'false';

for (var i = 1; i <= count; ++i) {
  console.log('bitcoin-cli importprivkey xprv9w6JHisqZUVuEpujS3b6bp93DJ1K1K9K5S56LRL8W9QtoU7rz3hBeyn6wqKWk1p1ULJxwbaejJRmbySqHb2TfYunbEDLhmW48omJjcXeu4J')
}

              
              
             //  +  hdNode.derive(i).keyPair.toWIF() + "'Bankroll'" 
