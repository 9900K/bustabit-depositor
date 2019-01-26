var bitcoinjs = require('bitcoinjs-lib');

var privKey = process.env.BIP32_PRIV;
var hdNode = bitcoinjs.HDNode.fromBase58(xprv9w6JHisqZUVuEpujS3b6bp93DJ1K1K9K5S56LRL8W9QtoU7rz3hBeyn6wqKWk1p1ULJxwbaejJRmbySqHb2TfYunbEDLhmW48omJjcXeu4J);

var count = process.env.GENERATE_ADDRESSES ? parseInt(process.env.GENERATE_ADDRESSES) : 100; // how many addresses to watch


var rescan = 'false';

for (var i = 1; i <= count; ++i) {
  console.log('bitcoin-cli importprivkey ' +  hdNode.derive(i).keyPair.toWIF() + " '' " + rescan)
}
