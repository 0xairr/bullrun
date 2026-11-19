// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "November 19, 2026 at 05:29 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 216;
const WHALE_TOTAL_VOLUME      = 11008554;
const WHALE_BIGGEST_SINGLE    = 2891630;

const WHALE_TRANSFERS = [
    { hash: "0x085cf5417c6f7267fa13977308998823f5872a2b69a00989941b29e952447ad2", ts: 1795059311, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", amount: 100264, block: 26446471, type: "buy" },
    { hash: "0x88f92cdb8943dc7c850c03c965b3386576f0f8c54162af6704d1a75acbdf08c7", ts: 1795049735, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8bb88a3eafd6ba0b6cce254c0c447c4cf5860afe", amount: 143003, block: 26445676, type: "buy" },
    { hash: "0x9f06cce5e765a70a2f13a0f6c6c119beb505f222b71a2520f8a8f00705595cbc", ts: 1795044875, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x00000000000f0a86c92acc08dc208f429c58e900", amount: 130584, block: 26445272, type: "buy" },
    { hash: "0xdfcd3079800d6e5b17921f21ccaf8f4475313de30e3f03d55f5941911a6a95d9", ts: 1795043363, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x67336cec42645f55059eff241cb02ea5cc52ff86", amount: 113987, block: 26445146, type: "buy" },
    { hash: "0xdf8be1155d5dceb6f66f4d4b5a6a26f5b3bfeac02422d6c6d528a0d99f6c65d6", ts: 1795042115, from: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 209028, block: 26445042, type: "sell" },
    { hash: "0x9ae1c0cae0cf89f953f42eb994ece5f9ff9d15304ea3ae32704996417d342d8f", ts: 1795039787, from: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 145110, block: 26444848, type: "sell" },
    { hash: "0xc11a6fd99ef8760bbfbbf46c2ad77e724ba3aad0329a561189c145bef5b5c068", ts: 1795029251, from: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 110348, block: 26443973, type: "sell" },
    { hash: "0x1c00f75ea987a4222fc0df41071de667591a01f3b80f19dc33279b39b6960f7d", ts: 1795023095, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x00000000000f0a86c92acc08dc208f429c58e900", amount: 128851, block: 26443460, type: "buy" },
    { hash: "0xf5a178b13cbe57be96a3bebb48ab497054f29dbb34963b5fa1de80576bafcd4a", ts: 1795022891, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", amount: 171707, block: 26443443, type: "buy" },
    { hash: "0x3d455252e6d9e305f15856938b4e39fedfe6ca1b98b98335f4fe233938b694d5", ts: 1795022579, from: "0xf733c29e2918271490d8318846f617b16e613be0", to: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", amount: 2891630, block: 26443417, type: "transfer" },
    { hash: "0x5511a23bfc3cd763ab17c75c3972ad779e2b50f95754eb21bc3bdd33b553524d", ts: 1795021511, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xf733c29e2918271490d8318846f617b16e613be0", amount: 2891630, block: 26443328, type: "transfer" },
    { hash: "0xc6ae0c344b385677fb5f3555f58796ef574c3624f4fdd5682f6dce99d3b1afe1", ts: 1795018871, from: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 128116, block: 26443108, type: "sell" },
    { hash: "0x3245c4f89d6c7b7ee9dba5a94639947c637bdab2092588cb905cd5ce450d14d7", ts: 1795018847, from: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 118000, block: 26443106, type: "sell" },
    { hash: "0xb6b15fc4432e601b24aabf3ad432922c4859fa171eb369658be39cdaf1711426", ts: 1795018355, from: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 145140, block: 26443065, type: "sell" },
    { hash: "0x5a6e05ecde0ccd590838f61eee684454164d625bf80707af0d69f119cc5a2012", ts: 1795016567, from: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 107167, block: 26442916, type: "sell" },
    { hash: "0x50b99c239b1b63fc82cbee4c1f1cf1cc0b00935a7e3469d937089982f668465a", ts: 1795016507, from: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 103539, block: 26442911, type: "sell" },
    { hash: "0x42208e3807383ca3971d8000074b9efcb6bada28942b61aa8df613eecbfae3fe", ts: 1795015943, from: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 138485, block: 26442864, type: "sell" },
    { hash: "0x999ff95928dbe92c93205e1f1e1950d4aa1bcefb12882c0b29ebdc2f84fe07ea", ts: 1795015463, from: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 141220, block: 26442824, type: "sell" },
    { hash: "0xe3a4053a9e96e05a4c46668be66bded5f073be0896e2271174c4c26505433b0a", ts: 1795012727, from: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 216949, block: 26442596, type: "sell" },
    { hash: "0x56a3c410400d114f0ec8f96211e14df8c2602a128928f09b3d4cb6721b3447d9", ts: 1794999995, from: "0xe06cdd36c3fb35f6ffb5933369595770da829419", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 140370, block: 26441536, type: "sell" },
    { hash: "0x56a3c410400d114f0ec8f96211e14df8c2602a128928f09b3d4cb6721b3447d9", ts: 1794999995, from: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", to: "0xe06cdd36c3fb35f6ffb5933369595770da829419", amount: 140370, block: 26441536, type: "transfer" },
    { hash: "0x4278fc4971a3438c26f7fd96730c5f12745c5cd34c4f48385d03e7bc393724d3", ts: 1794996875, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", amount: 131577, block: 26441276, type: "buy" },
    { hash: "0x52fd1bb8f9c5bb668a5f53c278b0b7299a30b3dea1fc04cc8351358e84ad2cf9", ts: 1794994391, from: "0xead224e9ac09ac94a3d4c0ab1f16bc4e7cb4574c", to: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", amount: 1950820, block: 26441069, type: "transfer" },
    { hash: "0x7b5b42d52fb21a203b57bcef83e0a67db14318507bea4aceb7d00fc7e747d7b3", ts: 1794987395, from: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 146209, block: 26440487, type: "sell" },
    { hash: "0xcb90c781ed4a507cc9c0f64ffa82b4b02bec39177f5ba485d1614c2719f5f85a", ts: 1794984443, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", amount: 108337, block: 26440243, type: "buy" },
    { hash: "0xa3bd76f117aedafe30bd4aa900dcf097b9ae0763ec37bac20e79bfd91d43438f", ts: 1794982991, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", amount: 108168, block: 26440122, type: "buy" },
    { hash: "0x9201f202b64cbc1b3b9cd5ffa83fc1269d84d135ec4d17c0a5facb4522582a18", ts: 1794981251, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x2d3ad81db81a9c83688e63f97b5da9b931275ced", amount: 147945, block: 26439977, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", net: 2948781, received: 2948781, sent: 0, txs: 2 },
    { wallet: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", net: 1950820, received: 1950820, sent: 0, txs: 1 },
    { wallet: "0x00000000000f0a86c92acc08dc208f429c58e900", net: 259435, received: 259435, sent: 0, txs: 2 },
    { wallet: "0x2d3ad81db81a9c83688e63f97b5da9b931275ced", net: 147945, received: 147945, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 86297, received: 87495, sent: 1198, txs: 5 },
    { wallet: "0x6876550fd9563399ed60239de3cd5babc7a6ad6a", net: 80548, received: 80548, sent: 0, txs: 1 },
    { wallet: "0xf3ac9dedc57181aa2807e2248a3ddbbc53765a3b", net: 54795, received: 54795, sent: 0, txs: 1 },
    { wallet: "0x5532d65385e664eef604976354608a9dc4d9ae7c", net: 50548, received: 50548, sent: 0, txs: 1 },
    { wallet: "0x45856439f71fd12ceb99d186b5544b2da7b5de30", net: 46575, received: 46575, sent: 0, txs: 1 },
    { wallet: "0x09fc9b7545020f6a51d113e495e0a451597969d3", net: 43543, received: 143580, sent: 100037, txs: 9 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 41918, received: 41918, sent: 0, txs: 2 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 38984, received: 496451, sent: 457467, txs: 19 },
    { wallet: "0x005f9baf886ee6ef143d063bf025df5faf1facac", net: 27397, received: 82192, sent: 54795, txs: 3 },
    { wallet: "0x8e92d28216ac924bbf01f2e7fe4fffd575ec3f17", net: 14378, received: 71530, sent: 57152, txs: 6 },
    { wallet: "0xbb0b683ebd2b2892ed03c0f4871cea073468ab75", net: 13562, received: 13562, sent: 0, txs: 1 },
    { wallet: "0x4ff2f85d8c0864f96de3da4b41272b0abdcca2f5", net: 11781, received: 11781, sent: 0, txs: 1 },
    { wallet: "0x3ba632ae3870943a88e799c6c58edac86407a416", net: 6986, received: 6986, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 6249, received: 6249, sent: 0, txs: 3 },
    { wallet: "0x8fc10b6fc4addc655143f1478689518a73d963cc", net: 5479, received: 5479, sent: 0, txs: 1 },
    { wallet: "0x311f520e51b3f5a6354d4e620443edb7ad59e996", net: 5342, received: 5342, sent: 0, txs: 1 },
    { wallet: "0x1a3fa486dcb22e687062adab636e7345628c96ab", net: 3650, received: 3650, sent: 0, txs: 1 },
    { wallet: "0x5d73e31d8588d928d2dcbea05dc8038d86730bf5", net: 2055, received: 2055, sent: 0, txs: 1 },
    { wallet: "0x747dd095f8b63a66d7c31f41bb22afb698224e36", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xcc282e2004428939ee5149a9e7872f0b4d5d5ec7", net: 1198, received: 1198, sent: 0, txs: 1 },
    { wallet: "0x722a6b207b2d49cc27bb2806d4de7b65d47a97b3", net: 959, received: 959, sent: 0, txs: 1 },
    { wallet: "0x180545218572e7497421936b14552e07d9f683e5", net: 959, received: 959, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 683, received: 912, sent: 229, txs: 9 },
    { wallet: "0x11ba910dad5d2f04f3e4790252213fd3e545a1c9", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x3822d8b402d6fcbe3187b08b1733ae2e2e46a2d3", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x980282821e627b5d6c8f99050d0394e885dcdcca", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x27ace13e9949900af2c5fdc1ad2aeb36b1e443a0", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xe6bd314d297a65b83aba0b079e129cab6f957765", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x2c6980908b4855932026671fe07e4a1f8ab2dc31", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1d7ce995313e3277c76bdea9448e43603e382409", net: 22, received: 22, sent: 0, txs: 1 },
    { wallet: "0x019211f714755fe64dd947c1938aedc019038788", net: 6, received: 6, sent: 0, txs: 1 },
    { wallet: "0x387a437ce1ed558aaccae8943107f90936ba473d", net: 1, received: 6957, sent: 6955, txs: 2 },
    { wallet: "0xa622c284e055a51fb97f6d1d5f48137437d24d2c", net: 0, received: 822, sent: 822, txs: 4 },
    { wallet: "0x9e95a7b56d70cb5619a2811ecd79d2c190ae70a7", net: 0, received: 822, sent: 822, txs: 4 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 953918, sent: 953918, txs: 38 },
    { wallet: "0x111116056ad60f0f4fb52d60852f9acd2fafca11", net: 0, received: 54690, sent: 54690, txs: 2 },
    { wallet: "0x6f1d91b39acb0c3d94095445bbea606aeef5e18c", net: 0, received: 54795, sent: 54795, txs: 3 },
    { wallet: "0xe96ea5fa60fa8cc01e55ad670a63ff6dc38b09df", net: 0, received: 54795, sent: 54795, txs: 3 },
    { wallet: "0xb57ff6e684ff7f7732f4e4d21069e90d567c0f30", net: 0, received: 959, sent: 959, txs: 2 },
    { wallet: "0xcaf0beadeaefc66fef60ac6526ab566d58c8647a", net: 0, received: 100037, sent: 100037, txs: 8 },
    { wallet: "0x5e83b45dd143d4c3ccfd760749692c792eb9237f", net: 0, received: 57152, sent: 57152, txs: 2 },
    { wallet: "0x8feab81d36e7576107d5de0758c1b839be31b4f6", net: 0, received: 143580, sent: 143580, txs: 10 },
    { wallet: "0x0729e2a4716d9f7dd17858d5d504426d228697f7", net: 0, received: 193122, sent: 193122, txs: 8 },
    { wallet: "0x79668909eb2687af290332ae84fe0bc4b2ed102c", net: 0, received: 2720, sent: 2720, txs: 2 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 0, received: 1370, sent: 1370, txs: 2 }
];

const WHALE_LABELS = {

};
