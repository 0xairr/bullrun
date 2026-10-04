// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "October 4, 2026 at 08:46 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 177;
const WHALE_TOTAL_VOLUME      = 4982082;
const WHALE_BIGGEST_SINGLE    = 319441;

const WHALE_TRANSFERS = [
    { hash: "0x01c74946ff109125ad9378b91814050a5be51e01cecccf2a90b7fd1f6ac18a00", ts: 1791137699, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", amount: 167666, block: 26120718, type: "buy" },
    { hash: "0x316c9022a5f088e9610316b37dde4466de59545ad22334bd3012801c2b36bd8f", ts: 1791135371, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", amount: 168475, block: 26120525, type: "buy" },
    { hash: "0xf6b0ff7a501951e9534e3cd5b8fc0ba1a58c114e2979df2e375a55fd8420ce43", ts: 1791135371, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", amount: 168475, block: 26120525, type: "buy" },
    { hash: "0x2e1e2b2c58398eb4c2c6bcbe3d73c70d2dd8a423b8b82fcee2bafb35a4261b2c", ts: 1791131759, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x4015afef85dfe9020c37e094fca46e56854dc5c6", amount: 153194, block: 26120226, type: "buy" },
    { hash: "0x59ed28591fbf3cbebc0616fd1350c3aa3f61cb41bc3fae5ac655d1269d4e022b", ts: 1791130091, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x67336cec42645f55059eff241cb02ea5cc52ff86", amount: 297888, block: 26120087, type: "buy" },
    { hash: "0x9909ef23b5a84f1ac2a39bf2a551efb322018e5f6048ceb764ac0c30c950c79e", ts: 1791129995, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 127326, block: 26120079, type: "transfer" },
    { hash: "0x62cf3535bcc4748c882f7064e78be78430ce9ba340bc512711f59d6c8c2c15e0", ts: 1791129251, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 127326, block: 26120018, type: "transfer" },
    { hash: "0xc524db90d896645495959ac7fae340b0c93a49fc099b9c41301f7e113d220534", ts: 1791127991, from: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 168429, block: 26119913, type: "sell" },
    { hash: "0xe324c0d7f379f29b743f47d8984a8762d35e6fa75c241892d746d39685667ef9", ts: 1791127991, from: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 168429, block: 26119913, type: "sell" },
    { hash: "0x79d38950887c32123936d081178b1aa9fe610550f7bd204236fd15bfa4946ff7", ts: 1791127151, from: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 167957, block: 26119843, type: "sell" },
    { hash: "0xb8b9ae213aa2aeba7d65563729566e7e02f470ccb241ce47b559a6c673fbc780", ts: 1791127151, from: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 167957, block: 26119843, type: "sell" },
    { hash: "0x9003bdef26804eb0f03261982415c865ab206ecec7fd85c8460b86d7ea573c6f", ts: 1791127115, from: "0x67336cec42645f55059eff241cb02ea5cc52ff86", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 319441, block: 26119840, type: "sell" },
    { hash: "0x4fb65a2d193e7ad79b4e03deb8bc3a00a1f8def8607d29e70e14fe7d3e2ebc9a", ts: 1791126587, from: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 166914, block: 26119796, type: "sell" },
    { hash: "0xcd0e070cf80f65a5a0c1922be40fbbfb6386bede9f1d3015caab63d245c713f3", ts: 1791126587, from: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 166914, block: 26119796, type: "sell" },
    { hash: "0x1cd18407331a2476877db711f71631bbdfee524804e91ed60c60957f104840e6", ts: 1791118163, from: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 166429, block: 26119095, type: "sell" },
    { hash: "0x81485ec0746f673c89982df7108176c96d152534667a8f557461379c6ca39e8c", ts: 1791118163, from: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 166429, block: 26119095, type: "sell" },
    { hash: "0xe8a84dc2db1a0d3935eee927cd55db52716ff03647e08ceae4bf1ab43241ea48", ts: 1791117899, from: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 165901, block: 26119073, type: "sell" },
    { hash: "0xff96616d82dd2e4be05c7835d43297d6474835b4216279006cd9abc93547360a", ts: 1791117899, from: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 165901, block: 26119073, type: "sell" },
    { hash: "0x28a5955788b025bb64acc738e8441ab9ddeb24e6a33940895344f63fc17ef990", ts: 1791116351, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x6798207d0c68b79ce8823065b12a0cf7b651498a", amount: 141781, block: 26118944, type: "transfer" },
    { hash: "0x451ca0388afa3d5ec6b3fab9255f8dfd203dfa1e3ef2476395f3e4f1f4af36cd", ts: 1791116183, from: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 165241, block: 26118930, type: "sell" },
    { hash: "0x2483d64216602c75a0a20775bfd6baf448cc7c1a1ae6c718c376de996986de5c", ts: 1791116183, from: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 165241, block: 26118930, type: "sell" },
    { hash: "0xa7f2e02695e29505d81c78eeb2fa8f631feeb07a4a161b88c412e00bcba2c012", ts: 1791115883, from: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 164719, block: 26118905, type: "sell" },
    { hash: "0xe783095992459772373c00c48ce3a2cbac4591dadacd2046ce39ba93cc3e403c", ts: 1791115883, from: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 164719, block: 26118905, type: "sell" },
    { hash: "0x5e2694cdfd0ba8a20ada64f14e727161f0b6fcc4e840ede0ce2a0f85882e600b", ts: 1791113567, from: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 164289, block: 26118712, type: "sell" },
    { hash: "0xc7092bafa4acbe6f5466cb8fedb06233e52574a212236b25dc1651ad4d8b1a22", ts: 1791094439, from: "0x8bb88a3eafd6ba0b6cce254c0c447c4cf5860afe", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 154425, block: 26117125, type: "sell" },
    { hash: "0x65ab37d43869e573f2f436cfa2176761d7d42820cc0f9257de75121651201828", ts: 1791088451, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", amount: 164701, block: 26116627, type: "buy" },
    { hash: "0x323666bda199b696f25f647a774fa85c86d413fb6994c731ad4022bdab5fc2a9", ts: 1791088451, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", amount: 164701, block: 26116627, type: "buy" },
    { hash: "0x9582d09beb271d2568fef0ed02d6bf9a456b6c47c90580dea7cbe78602c1c587", ts: 1791081419, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", amount: 165607, block: 26116043, type: "buy" },
    { hash: "0x55b164f3271c6ea7823e2995c1cbf365dc81483f1052b083a25066d17630d481", ts: 1791081419, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", amount: 165607, block: 26116043, type: "buy" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x09fc9b7545020f6a51d113e495e0a451597969d3", net: 176950, received: 176950, sent: 0, txs: 7 },
    { wallet: "0x4015afef85dfe9020c37e094fca46e56854dc5c6", net: 172223, received: 172920, sent: 697, txs: 3 },
    { wallet: "0x6798207d0c68b79ce8823065b12a0cf7b651498a", net: 141781, received: 141781, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 127326, received: 127326, sent: 0, txs: 1 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 103526, received: 103526, sent: 0, txs: 2 },
    { wallet: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", net: 99990, received: 222315, sent: 122325, txs: 8 },
    { wallet: "0x2f9af2b6aedb07f4c3c908d0cf43735a0d74c128", net: 59527, received: 59527, sent: 0, txs: 1 },
    { wallet: "0xbd39eca13a0e7dbeb2e8706aeec2e3138d60cf2a", net: 47260, received: 47260, sent: 0, txs: 1 },
    { wallet: "0xde795c7407df50133d25fd17e51b97a67d356e93", net: 41257, received: 41257, sent: 0, txs: 1 },
    { wallet: "0x4e5468a7fec3ae9bd430e116bb05d5bdecfd2cdc", net: 18082, received: 18082, sent: 0, txs: 1 },
    { wallet: "0x6b67a3e46e45916a199bb58d060cc5fc728db778", net: 14384, received: 14384, sent: 0, txs: 1 },
    { wallet: "0x40e42b7cb4f24ad764c77d4e3e96611d6e306d2b", net: 10137, received: 10137, sent: 0, txs: 1 },
    { wallet: "0x1d923b519b39c7aaf1e3056a827d50d234391e98", net: 8332, received: 8332, sent: 0, txs: 1 },
    { wallet: "0xbaa8254ae8b9769ae9053d9f25cca5f90f07427e", net: 5753, received: 5753, sent: 0, txs: 1 },
    { wallet: "0x71ebcff718d88d363622dcc4d4d7a6e75f370139", net: 4932, received: 4932, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0x0e727149016c00a66096425cf6b186f17313e8f3", net: 2877, received: 2877, sent: 0, txs: 1 },
    { wallet: "0xf0cfda08ec71c392d0cab07faddb1d7a68a8638b", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0xfe15f6fe5c100188ca9425c262935677a70d05e3", net: 2055, received: 2055, sent: 0, txs: 1 },
    { wallet: "0x898b24d8c37b38c19bd7d1a14ea2988fe2a1c933", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0x08975eb9695e5ce896f7416daa9a5f62e81142b3", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x47670e064a9cf54102481f199915e392ce357d60", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xdfc90a70d89bece5ac9331fbd680e3306e9afc15", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x9b6436a7873759d6fff96edb1d6a1410f3c08402", net: 424, received: 424, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 412, received: 412, sent: 0, txs: 8 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x980282821e627b5d6c8f99050d0394e885dcdcca", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 169, received: 169, sent: 0, txs: 2 },
    { wallet: "0x5987d62c93f864fff531f79c1f6c8da51eaffce2", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", net: 118, received: 330308, sent: 330190, txs: 4 },
    { wallet: "0xbd7e7db08d254f6367c0f34b5b4d2f425a9b5b90", net: 15, received: 15, sent: 0, txs: 1 },
    { wallet: "0x04dad2da4b11c753f17adcc53a37e8f38f46585e", net: 2, received: 2, sent: 0, txs: 1 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 153485, sent: 153485, txs: 24 },
    { wallet: "0x22a607be5bf946935def3b7b5bd3310b4f81cead", net: 0, received: 3836, sent: 3836, txs: 3 },
    { wallet: "0x21dce84e1c9ea03025ddaefd186d6119ccb1e819", net: 0, received: 5753, sent: 5753, txs: 2 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 277550, sent: 277550, txs: 10 },
    { wallet: "0x1644d2477f809cc2c71bccfd6dc9497e3f83210d", net: 0, received: 100784, sent: 100784, txs: 4 },
    { wallet: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", net: 0, received: 127326, sent: 127326, txs: 2 },
    { wallet: "0x111116053f09d34a7eae8102887004445176ca11", net: 0, received: 67621, sent: 67621, txs: 6 },
    { wallet: "0x63b2d3b0a26c1938bb0ae9779b96073946d4e4af", net: 0, received: 39779, sent: 39779, txs: 2 },
    { wallet: "0xd7ca08ec1aee9cce8a8eda9365343ef197674e1a", net: 0, received: 63747, sent: 63747, txs: 2 },
    { wallet: "0x1ec97b855540f5495895868fea813ffc955ec714", net: 0, received: 19726, sent: 19726, txs: 2 },
    { wallet: "0xfd5202a038eda39b048ae1b3e581b3e9558e95ea", net: 0, received: 4155, sent: 4155, txs: 2 },
    { wallet: "0x01c579618213c31ebdfdbd68bb14d71d8329b9dc", net: 0, received: 959, sent: 959, txs: 3 },
    { wallet: "0xa315a2fc9b7bd651e0ebaa134859bd8153ff12a7", net: 0, received: 959, sent: 959, txs: 2 },
    { wallet: "0xc19546d779445ebe498abb9b903a494c648427ed", net: 0, received: 85479, sent: 85479, txs: 3 }
];

const WHALE_LABELS = {

};
