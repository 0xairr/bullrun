// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "November 18, 2026 at 02:57 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 240;
const WHALE_TOTAL_VOLUME      = 14365547;
const WHALE_BIGGEST_SINGLE    = 1950820;

const WHALE_TRANSFERS = [
    { hash: "0xe3a4053a9e96e05a4c46668be66bded5f073be0896e2271174c4c26505433b0a", ts: 1795012727, from: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 216949, block: 26442596, type: "sell" },
    { hash: "0x56a3c410400d114f0ec8f96211e14df8c2602a128928f09b3d4cb6721b3447d9", ts: 1794999995, from: "0xe06cdd36c3fb35f6ffb5933369595770da829419", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 140370, block: 26441536, type: "sell" },
    { hash: "0x56a3c410400d114f0ec8f96211e14df8c2602a128928f09b3d4cb6721b3447d9", ts: 1794999995, from: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", to: "0xe06cdd36c3fb35f6ffb5933369595770da829419", amount: 140370, block: 26441536, type: "transfer" },
    { hash: "0x4278fc4971a3438c26f7fd96730c5f12745c5cd34c4f48385d03e7bc393724d3", ts: 1794996875, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", amount: 131577, block: 26441276, type: "buy" },
    { hash: "0x52fd1bb8f9c5bb668a5f53c278b0b7299a30b3dea1fc04cc8351358e84ad2cf9", ts: 1794994391, from: "0xead224e9ac09ac94a3d4c0ab1f16bc4e7cb4574c", to: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", amount: 1950820, block: 26441069, type: "transfer" },
    { hash: "0x7b5b42d52fb21a203b57bcef83e0a67db14318507bea4aceb7d00fc7e747d7b3", ts: 1794987395, from: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 146209, block: 26440487, type: "sell" },
    { hash: "0xcb90c781ed4a507cc9c0f64ffa82b4b02bec39177f5ba485d1614c2719f5f85a", ts: 1794984443, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", amount: 108337, block: 26440243, type: "buy" },
    { hash: "0xa3bd76f117aedafe30bd4aa900dcf097b9ae0763ec37bac20e79bfd91d43438f", ts: 1794982991, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", amount: 108168, block: 26440122, type: "buy" },
    { hash: "0x9201f202b64cbc1b3b9cd5ffa83fc1269d84d135ec4d17c0a5facb4522582a18", ts: 1794981251, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x2d3ad81db81a9c83688e63f97b5da9b931275ced", amount: 147945, block: 26439977, type: "transfer" },
    { hash: "0xd4d8bbcfb27fe344c758141ac49f586cd26edc40526205b37f76c677c660beb8", ts: 1794972611, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", amount: 152755, block: 26439258, type: "buy" },
    { hash: "0x662e03bc5d35ee8e3d2debfc6499ca2a9d317c13a94151cc3f784319c3fe46d1", ts: 1794972323, from: "0xf2d06eca379101efd7aa444ffd543588b0f31900", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 145498, block: 26439234, type: "sell" },
    { hash: "0x4e00ceb97d9a82d4d623ce67893f48ce2ec87407f4bcfc15b1cae45aff6ce6f9", ts: 1794961931, from: "0x447a03c131c0a97a8b8d548e3cd81aec4ce05d73", to: "0xead224e9ac09ac94a3d4c0ab1f16bc4e7cb4574c", amount: 1011638, block: 26438374, type: "transfer" },
    { hash: "0x4e00ceb97d9a82d4d623ce67893f48ce2ec87407f4bcfc15b1cae45aff6ce6f9", ts: 1794961931, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x447a03c131c0a97a8b8d548e3cd81aec4ce05d73", amount: 1011638, block: 26438374, type: "buy" },
    { hash: "0x470861e77dfa1d72825fb52846d20483c65c707cc399e67f543f04ef3c3722f8", ts: 1794961931, from: "0xe96681d02c145ec7be71879b89ce5cfa2a5fd11a", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 1400541, block: 26438374, type: "sell" },
    { hash: "0x014149892688504b506bf6ef61be83e3d6b29a1469cd0a2edf22a94765920ea9", ts: 1794958259, from: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 1328000, block: 26438068, type: "transfer" },
    { hash: "0x7f2bec9edce23abe0cb2d16684be40eb79b9fbcb313391bb986b576934978c25", ts: 1794957107, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", amount: 168799, block: 26437972, type: "buy" },
    { hash: "0x5d09ee2d07eb8d81594d53a8c6237e7cc293f7c0657b550542fa5f3507cf96db", ts: 1794956951, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", amount: 123140, block: 26437959, type: "buy" },
    { hash: "0x9cbc1455ca63adfc7d0e102e197edaf1a3bc26a77c8252863f53612550edc793", ts: 1794955391, from: "0x1cd7820872e8d1f49ea9cff7ea6039b229d9a4af", to: "0xa544d8a69d8170e1069dc2e8c358330b205a2c68", amount: 100000, block: 26437829, type: "transfer" },
    { hash: "0xeb929e08fcbd24908b2abe18c3e94a839200dc21c946b4f6ef64c9d15fbfec25", ts: 1794955211, from: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", to: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", amount: 1328000, block: 26437814, type: "transfer" },
    { hash: "0x6faa9f65f12e54c0b976b7727516c2d94152013bc5006fe4cb6f1485cad8fa46", ts: 1794954935, from: "0x09fc9b7545020f6a51d113e495e0a451597969d3", to: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", amount: 1328000, block: 26437791, type: "transfer" },
    { hash: "0xe5102dd235d61474631ea1a4b06da44c172a78992935e99f28e49f0d559c33b0", ts: 1794952871, from: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 140284, block: 26437619, type: "sell" },
    { hash: "0x0de50ef6f6f00ed52a16affd1238f4786db5ac77270d6e61fd32e344926cea53", ts: 1794950435, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", amount: 115023, block: 26437417, type: "buy" },
    { hash: "0xcacfc79bc83055c6dbe7dcb005bcad8922e59833ffb454deca4ab915b6ccbb28", ts: 1794950411, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", amount: 141909, block: 26437415, type: "buy" },
    { hash: "0xbf3d3831da381588ffb787575be18a68ca31e2552d3ebfca9c7c8ec038a8312a", ts: 1794947543, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", amount: 142543, block: 26437177, type: "buy" },
    { hash: "0x82571c63661be8262c1e42fc4a3ebee5fa57951725b3ff622cf62402085b7c62", ts: 1794947075, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", amount: 126620, block: 26437138, type: "buy" },
    { hash: "0x74438dbbf7700fcefed94d15e07e8d0c25986ad3a61e2dbaddd3dffce6c6be3c", ts: 1794946967, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", amount: 127607, block: 26437129, type: "buy" },
    { hash: "0x8909f691cce4fd017d9617fd9721415adc87ff47a6375633da89c7980fe039ab", ts: 1794935219, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", amount: 210146, block: 26436153, type: "buy" },
    { hash: "0x432b1f8cd8fdc9de1e451fb92e13ab0032a92d2b903c2cffdfd9d831ddbcec44", ts: 1794931751, from: "0xe06cdd36c3fb35f6ffb5933369595770da829419", to: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", amount: 125082, block: 26435864, type: "transfer" },
    { hash: "0x432b1f8cd8fdc9de1e451fb92e13ab0032a92d2b903c2cffdfd9d831ddbcec44", ts: 1794931751, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0xe06cdd36c3fb35f6ffb5933369595770da829419", amount: 125082, block: 26435864, type: "buy" },
    { hash: "0x97dc80a4e85b7d7830bb1fa0e9bb31ac5f7bbc24d4e4245f9d860dceb6291156", ts: 1794931619, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", amount: 118037, block: 26435854, type: "buy" },
    { hash: "0xc9aff231ad942191fff935a9f6f89fd2ec6a34e1895eecf29fd5d61a79d51b1b", ts: 1794931295, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", amount: 205641, block: 26435827, type: "buy" },
    { hash: "0x5d61a2a8d7b78d1d25bbafa35331ffe231acb878afc901870fa6fcea6c713f54", ts: 1794931163, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", amount: 199100, block: 26435816, type: "buy" },
    { hash: "0x32799c4f6f64d45ce6a2875371a396211ce1cd9db3332d5ecea7b4b7dee49fba", ts: 1794930563, from: "0x8bb88a3eafd6ba0b6cce254c0c447c4cf5860afe", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 223714, block: 26435766, type: "sell" },
    { hash: "0x5304a3bbbdb0c89defe93a052f3d03946900bd771454b59904dfa741a4252eb3", ts: 1794930515, from: "0x8bb88a3eafd6ba0b6cce254c0c447c4cf5860afe", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 197294, block: 26435762, type: "sell" },
    { hash: "0x63a93b6a83fe5dba08998d07bda2cf0aaf36bf8cfa909f3e565f9a5b120cffba", ts: 1794930491, from: "0x8bb88a3eafd6ba0b6cce254c0c447c4cf5860afe", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 130105, block: 26435760, type: "sell" },
    { hash: "0x946d891fbe12959d44d4ff1350f067aa9faf29af599ec32aa587dae61c47f5ce", ts: 1794930431, from: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 152913, block: 26435755, type: "sell" },
    { hash: "0x28b2f6a655fdbdc0aab7ae1068fa667eea3051efa4b20aaa0e695d303b1dae19", ts: 1794930251, from: "0x8bb88a3eafd6ba0b6cce254c0c447c4cf5860afe", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 111660, block: 26435740, type: "sell" },
    { hash: "0x47aede6003aae9340e18d3d8f63672c483df64c5471293702e9540d670952993", ts: 1794930071, from: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 314935, block: 26435725, type: "sell" },
    { hash: "0x3a68b5c2ed4625ec8bca516de7e6eabe9c57a2e35f1c8fe2442152be5eb81b82", ts: 1794929603, from: "0xe06cdd36c3fb35f6ffb5933369595770da829419", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 134549, block: 26435686, type: "sell" },
    { hash: "0x3a68b5c2ed4625ec8bca516de7e6eabe9c57a2e35f1c8fe2442152be5eb81b82", ts: 1794929603, from: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", to: "0xe06cdd36c3fb35f6ffb5933369595770da829419", amount: 134549, block: 26435686, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", net: 2391398, received: 3343706, sent: 952308, txs: 37 },
    { wallet: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", net: 1950820, received: 1950820, sent: 0, txs: 1 },
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 1360940, received: 1360940, sent: 0, txs: 2 },
    { wallet: "0x2d3ad81db81a9c83688e63f97b5da9b931275ced", net: 147945, received: 147945, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 85884, received: 87082, sent: 1198, txs: 4 },
    { wallet: "0x6876550fd9563399ed60239de3cd5babc7a6ad6a", net: 80548, received: 80548, sent: 0, txs: 1 },
    { wallet: "0x9a36c1fcdfb6239b81c98698389cdddfbb8d6c92", net: 73973, received: 73973, sent: 0, txs: 1 },
    { wallet: "0xf3ac9dedc57181aa2807e2248a3ddbbc53765a3b", net: 54795, received: 54795, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 41918, received: 41918, sent: 0, txs: 2 },
    { wallet: "0x8e92d28216ac924bbf01f2e7fe4fffd575ec3f17", net: 28341, received: 28341, sent: 0, txs: 2 },
    { wallet: "0x9d40ce27fd53e65e2e543f2366b21dfe75c11304", net: 28232, received: 28232, sent: 0, txs: 1 },
    { wallet: "0x7cf626900639615d37676002acefa59630031669", net: 17808, received: 17808, sent: 0, txs: 1 },
    { wallet: "0xbb0b683ebd2b2892ed03c0f4871cea073468ab75", net: 13562, received: 13562, sent: 0, txs: 1 },
    { wallet: "0x4ff2f85d8c0864f96de3da4b41272b0abdcca2f5", net: 11781, received: 11781, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 7671, received: 7671, sent: 0, txs: 1 },
    { wallet: "0x3ba632ae3870943a88e799c6c58edac86407a416", net: 6986, received: 6986, sent: 0, txs: 1 },
    { wallet: "0x7764c8727dab012fce187df0736dab2b00ef691c", net: 6575, received: 6575, sent: 0, txs: 1 },
    { wallet: "0x8fc10b6fc4addc655143f1478689518a73d963cc", net: 5479, received: 5479, sent: 0, txs: 1 },
    { wallet: "0x1ec97b855540f5495895868fea813ffc955ec714", net: 4932, received: 4932, sent: 0, txs: 1 },
    { wallet: "0x1a3fa486dcb22e687062adab636e7345628c96ab", net: 3650, received: 3650, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 3529, received: 3529, sent: 0, txs: 2 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 3195, received: 3195, sent: 0, txs: 11 },
    { wallet: "0x50e8e34147929096ab69b3316ac0f1adf8b684c1", net: 2877, received: 2877, sent: 0, txs: 1 },
    { wallet: "0x6324e5d13352558b931b1ef7361693aacbf59513", net: 2466, received: 2466, sent: 0, txs: 1 },
    { wallet: "0x5d73e31d8588d928d2dcbea05dc8038d86730bf5", net: 2055, received: 2055, sent: 0, txs: 1 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 1507, received: 1507, sent: 0, txs: 1 },
    { wallet: "0x2d84a18d4d1356420f3115e4d11e26680671c62d", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0xe7ff8186307f7781bce361dbe7245e1330550c52", net: 1233, received: 1233, sent: 0, txs: 1 },
    { wallet: "0xcc282e2004428939ee5149a9e7872f0b4d5d5ec7", net: 1198, received: 1198, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x980282821e627b5d6c8f99050d0394e885dcdcca", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x3822d8b402d6fcbe3187b08b1733ae2e2e46a2d3", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xe6bd314d297a65b83aba0b079e129cab6f957765", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x2c6980908b4855932026671fe07e4a1f8ab2dc31", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x9e95a7b56d70cb5619a2811ecd79d2c190ae70a7", net: 2, received: 411, sent: 409, txs: 2 },
    { wallet: "0x387a437ce1ed558aaccae8943107f90936ba473d", net: 1, received: 6957, sent: 6955, txs: 2 },
    { wallet: "0x3c9108700724d9d96cff2ac8979d6ad2a8d469ae", net: 0, received: 411, sent: 411, txs: 2 },
    { wallet: "0x54830b184c26c7b842f0282c0b3bd051122a5dc3", net: 0, received: 1489, sent: 1489, txs: 2 },
    { wallet: "0x950618712a5cd5a221c8a95930947cb76576eb76", net: 0, received: 1507, sent: 1507, txs: 3 },
    { wallet: "0x005f9baf886ee6ef143d063bf025df5faf1facac", net: 0, received: 54795, sent: 54795, txs: 2 },
    { wallet: "0x716e3fad60bc867449795cd624da34aab3dc381f", net: 0, received: 32940, sent: 32940, txs: 2 },
    { wallet: "0x0005ea683517b3a4463bfd798c9850ad2d586795", net: 0, received: 29751, sent: 29751, txs: 8 },
    { wallet: "0xfe263102682933297cb65dc813e5193249769251", net: 0, received: 32940, sent: 32940, txs: 2 },
    { wallet: "0xa622c284e055a51fb97f6d1d5f48137437d24d2c", net: 0, received: 409, sent: 409, txs: 2 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 906624, sent: 906624, txs: 26 },
    { wallet: "0x8feab81d36e7576107d5de0758c1b839be31b4f6", net: 0, received: 601455, sent: 601455, txs: 40 },
    { wallet: "0x5fbdd629365db48a519f4d44d13bb578c0d45546", net: 0, received: 2040, sent: 2040, txs: 2 },
    { wallet: "0x519c9dbf12d99fceae8871fd5acc2797c0ca904a", net: 0, received: 2055, sent: 2055, txs: 3 },
    { wallet: "0xd031b8c380ff6df254cdc1f8d55b8bbd81ff4216", net: 0, received: 2055, sent: 2055, txs: 2 }
];

const WHALE_LABELS = {

};
