// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "October 7, 2026 at 10:32 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 170;
const WHALE_TOTAL_VOLUME      = 26842854;
const WHALE_BIGGEST_SINGLE    = 7600000;

const WHALE_TRANSFERS = [
    { hash: "0xc1098732d1bfc7af631384b2426ebf7cb34fdb034e2e0c958d2a1293b7d8bbe6", ts: 1791400847, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", amount: 197297, block: 26142563, type: "buy" },
    { hash: "0x465f48401c7743965b62f5519f750807d52783179728fa6683a5b5b87414455c", ts: 1791400835, from: "0x111116053f09d34a7eae8102887004445176ca11", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 182595, block: 26142562, type: "sell" },
    { hash: "0x465f48401c7743965b62f5519f750807d52783179728fa6683a5b5b87414455c", ts: 1791400835, from: "0xb851112f39f26061494adc094bfbe538ffe23074", to: "0x111116053f09d34a7eae8102887004445176ca11", amount: 183053, block: 26142562, type: "transfer" },
    { hash: "0xe5683ed57e0989c4c27169c3aeee5b47b140d35feeae8e5e042ff3d66762c073", ts: 1791400043, from: "0x111116053f09d34a7eae8102887004445176ca11", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 126133, block: 26142497, type: "sell" },
    { hash: "0xe5683ed57e0989c4c27169c3aeee5b47b140d35feeae8e5e042ff3d66762c073", ts: 1791400043, from: "0x3207254134e11b54f797344177a0c7f29a37613e", to: "0x111116053f09d34a7eae8102887004445176ca11", amount: 126449, block: 26142497, type: "transfer" },
    { hash: "0x6676b166cf283d8987524a902aad2f86086380dae15e73bbf95cf63b2c9ac50b", ts: 1791400019, from: "0x6912d024e2b88136c5a586e77b092199963b6083", to: "0x3207254134e11b54f797344177a0c7f29a37613e", amount: 126449, block: 26142495, type: "transfer" },
    { hash: "0xfe3719f7328c25bd795316815e3834acd80aa4be1958e333532c1d16e662340e", ts: 1791384143, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 150945, block: 26141175, type: "buy" },
    { hash: "0x1764d61e3041561f61b33408568570221f2d8f04c0ee0b517d1cb7daa1e16f9c", ts: 1791384131, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", amount: 198040, block: 26141174, type: "buy" },
    { hash: "0xbc601f39b1e1d1d3cf03a8be32ce41774d80b7057bba89fa00d86c6ba1ba8942", ts: 1791384107, from: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 197625, block: 26141172, type: "sell" },
    { hash: "0x4ff8ec8657e0f64e9e30c6d3b157e33879daca8743c0371065a3b8857bb55795", ts: 1791384095, from: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 172366, block: 26141171, type: "sell" },
    { hash: "0x56960b5188f624b7b4ecb590e7d5c8d0ab7f63a99a5fc1402e5caa6982401279", ts: 1791384095, from: "0xe06cdd36c3fb35f6ffb5933369595770da829419", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 115267, block: 26141171, type: "sell" },
    { hash: "0x56960b5188f624b7b4ecb590e7d5c8d0ab7f63a99a5fc1402e5caa6982401279", ts: 1791384095, from: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", to: "0xe06cdd36c3fb35f6ffb5933369595770da829419", amount: 115267, block: 26141171, type: "transfer" },
    { hash: "0x844ab9c2512100dd72af6308256c531e587b4f9aed55c168541d7c2e806e9694", ts: 1791375035, from: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 197910, block: 26140420, type: "transfer" },
    { hash: "0x86c0eb1b629c8d1cb071d7ae410eeb208f264fdf045c936808c22670d858a92c", ts: 1791373943, from: "0xc608b6c0d492d39078b9d969175de1d8761c2e37", to: "0xf68d2bfcecd7895bba05a7451dd09a1749026454", amount: 174521, block: 26140329, type: "transfer" },
    { hash: "0xd2c03ce7607add46a62275b97c79c56d97795611ecc5de9fa27e3dccffc5c931", ts: 1791368735, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 224783, block: 26139897, type: "transfer" },
    { hash: "0xe3c4b37573da77cb1e8bc7f872fe44382c1b197b93da6fe8aaac49e73a8f6cc2", ts: 1791368291, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 224783, block: 26139860, type: "transfer" },
    { hash: "0x76e0f3ed379e6e673ef1e05ab6d7c8147912298e4f373ce115eaf8c663f13cfb", ts: 1791368135, from: "0x8099def9bbbcd3362f4568b321322a9161fbb36b", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 199373, block: 26139847, type: "transfer" },
    { hash: "0x0105bfa5ad228dc934ae0fb4960bbbacf6127abed345020750ebd97610524e88", ts: 1791368087, from: "0x1986306841109f9fc143b209b798bd83a12c56d7", to: "0x8099def9bbbcd3362f4568b321322a9161fbb36b", amount: 199373, block: 26139843, type: "transfer" },
    { hash: "0xa73f5fc804ec4e4533f735a8838ddaaa3734dab0f6c51bc519f06ab645eafac0", ts: 1791367979, from: "0x156e44ff557727476b9fe84338cdddaa41fa4854", to: "0x1986306841109f9fc143b209b798bd83a12c56d7", amount: 200000, block: 26139834, type: "transfer" },
    { hash: "0x4aa0b99228bf29194b11676636f0d0db0b9671b111154cecc50b1c76d0733baf", ts: 1791367799, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x156e44ff557727476b9fe84338cdddaa41fa4854", amount: 456986, block: 26139819, type: "transfer" },
    { hash: "0x24d8928a0872d3bb4cb8b288bfacd573ae3dd2480a446d889819156c8f29465b", ts: 1791367331, from: "0x9642b23ed1e01df1092b92641051881a322f5d4e", to: "0x4f012297d6f611da1fc66111e1e65fd83d313f5a", amount: 188966, block: 26139780, type: "transfer" },
    { hash: "0x31afce4f6c9a43ee6ab945746472ca63b02888f1aced97dd8c57dd59c510d03e", ts: 1791365975, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x1a87aaec7927ab2527bf790625cc12843ede910e", amount: 100001, block: 26139668, type: "transfer" },
    { hash: "0xcd69d8b501c097237dfbc191fcbbf7c4eb3e2ddb99e0114a502f2c50fd30fd1c", ts: 1791354695, from: "0x0f6f4eafc109dc0038915e9090ca7174c924dcb8", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 7600000, block: 26138734, type: "transfer" },
    { hash: "0xea01f4acbba3b3aa50dbd02a9f954c4f01958cea5e8e2edcffbf3c96b3d73561", ts: 1791349823, from: "0x07faaf79ce52d727f2cc7ea3d22e43fa75d5b873", to: "0x0f6f4eafc109dc0038915e9090ca7174c924dcb8", amount: 7590000, block: 26138328, type: "transfer" },
    { hash: "0x47bf21f7f07734d30f4ae197ee5f46252e82210aa65f8359c015d1dc35c5873e", ts: 1791339827, from: "0x763189a29a0ea9e6e6a03ad0d9582ed02d15c0cb", to: "0x07faaf79ce52d727f2cc7ea3d22e43fa75d5b873", amount: 1896448, block: 26137497, type: "transfer" },
    { hash: "0x9e02092590663ee66afce9bce8421f3af564e8db184c1f9b923e655e670b2deb", ts: 1791339491, from: "0xedc6b3f95f3e4ef39318a13bd1757716686d269a", to: "0x07faaf79ce52d727f2cc7ea3d22e43fa75d5b873", amount: 5698224, block: 26137469, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 7618138, received: 7718814, sent: 100677, txs: 6 },
    { wallet: "0x156e44ff557727476b9fe84338cdddaa41fa4854", net: 256986, received: 456986, sent: 200000, txs: 2 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 227883, received: 227883, sent: 0, txs: 2 },
    { wallet: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", net: 199995, received: 199995, sent: 0, txs: 2 },
    { wallet: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", net: 198040, received: 198040, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 197420, received: 197910, sent: 489, txs: 2 },
    { wallet: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", net: 197297, received: 197297, sent: 0, txs: 1 },
    { wallet: "0x4f012297d6f611da1fc66111e1e65fd83d313f5a", net: 188966, received: 188966, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 133065, received: 249330, sent: 116265, txs: 12 },
    { wallet: "0x8cc85c69a540fc453427176036e996931ed06418", net: 95342, received: 95342, sent: 0, txs: 1 },
    { wallet: "0xf68d2bfcecd7895bba05a7451dd09a1749026454", net: 87260, received: 174521, sent: 87260, txs: 2 },
    { wallet: "0x1a87aaec7927ab2527bf790625cc12843ede910e", net: 70222, received: 100677, sent: 30455, txs: 3 },
    { wallet: "0x19888e92ee029e6641e178ebd2346fc1f7d845bd", net: 41644, received: 41644, sent: 0, txs: 1 },
    { wallet: "0x5bfdb327168803a1b33c6062ef28ac0e3fe88e31", net: 15157, received: 15157, sent: 0, txs: 1 },
    { wallet: "0x2fb2c92431b35188007b2b1e0b0c717f9b7dae75", net: 14795, received: 14795, sent: 0, txs: 1 },
    { wallet: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", net: 8965, received: 8965, sent: 0, txs: 1 },
    { wallet: "0x49a2299840a9a5495cae51415548c2b1344bd4f3", net: 8219, received: 8219, sent: 0, txs: 1 },
    { wallet: "0x98ffc1988c0b283c5f78fdfcc76d1cb67b3f6cd4", net: 4806, received: 4806, sent: 0, txs: 1 },
    { wallet: "0x42bd679965fd1b85d9e3bff4aadeb97ef8d724be", net: 4195, received: 4195, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 3020, received: 227803, sent: 224783, txs: 5 },
    { wallet: "0x40b2f1262a394a69f4446ceebca52bc58eb92bf4", net: 2329, received: 2329, sent: 0, txs: 1 },
    { wallet: "0x8e116b4bf95b990b9240e84ad674bd10c0b0759c", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x722a6b207b2d49cc27bb2806d4de7b65d47a97b3", net: 2055, received: 2055, sent: 0, txs: 1 },
    { wallet: "0x89741b45a5f35c42735508e3e586e55f275c13d0", net: 1938, received: 1938, sent: 0, txs: 1 },
    { wallet: "0x77c98f81d7a5feaaa0ef1e780cda2ebc1881605f", net: 1829, received: 1829, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1684, received: 1684, sent: 0, txs: 13 },
    { wallet: "0x47670e064a9cf54102481f199915e392ce357d60", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x1b0b1ad3e6a2fb69c48c2913fea012bc38f0a2e9", net: 1507, received: 1507, sent: 0, txs: 1 },
    { wallet: "0xee24dffca375eaa986e0159cbec5994f759c03ce", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x4f3889331539ab2ed976dbaf67c8def36deeed15", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 774, received: 774, sent: 0, txs: 2 },
    { wallet: "0x3c2d4c38e1e28d7f09409c196f4e6658ce83060f", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0xc3debe01ea653562bf479e560e5bd7d907b5d890", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0xcc282e2004428939ee5149a9e7872f0b4d5d5ec7", net: 489, received: 489, sent: 0, txs: 1 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x980282821e627b5d6c8f99050d0394e885dcdcca", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x9e95a7b56d70cb5619a2811ecd79d2c190ae70a7", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x39faf1de461849163e390d0a57d1eaa632064a49", net: 339, received: 339, sent: 0, txs: 1 },
    { wallet: "0x80fd48b7777490e5c3c07f02bcfe94af2cb59223", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 365595, sent: 365595, txs: 24 },
    { wallet: "0x099105baf4d6080a2cc29765dd78a4c4a7a13385", net: 0, received: 9863, sent: 9863, txs: 2 },
    { wallet: "0x4420e5673a381fa4b1782015549f0da1d1b7ff35", net: 0, received: 9863, sent: 9863, txs: 2 },
    { wallet: "0x04eb3e586641b64ab52bcb71b619b49087e416ca", net: 0, received: 9863, sent: 9863, txs: 3 },
    { wallet: "0xd5a47398f9b2d819b1c6521b095d7ee01c9afc44", net: 0, received: 9863, sent: 9863, txs: 2 },
    { wallet: "0x1be3f39f61769003f151c0d0bd898ba422900212", net: 0, received: 9863, sent: 9863, txs: 2 },
    { wallet: "0x7c01c6f4babf102f2bbe852bd3e571c53e390913", net: 0, received: 7123, sent: 7123, txs: 3 },
    { wallet: "0x1f2f10d1c40777ae1da742455c65828ff36df387", net: 0, received: 4660, sent: 4660, txs: 2 },
    { wallet: "0x111116053f09d34a7eae8102887004445176ca11", net: 0, received: 309502, sent: 309502, txs: 6 }
];

const WHALE_LABELS = {

};
