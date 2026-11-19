// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "November 19, 2026 at 03:02 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 214;
const WHALE_TOTAL_VOLUME      = 16197652;
const WHALE_BIGGEST_SINGLE    = 2891630;

const WHALE_TRANSFERS = [
    { hash: "0x0ac1279e67d8c54e1df4b2c5ade7acff6a798b951c510236be1ad90fa5c0a11e", ts: 1795094555, from: "0x6a5e67040d5550ca4e1573fa29e511ed045c2315", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 1972603, block: 26449397, type: "transfer" },
    { hash: "0x28c8f37f6475bf3838bb42eeef3011789e8b81b650f4d19ad44d7ca664f9d217", ts: 1795094339, from: "0xe29a56bb873f6166bcafee7e2287a9acb7710741", to: "0x6a5e67040d5550ca4e1573fa29e511ed045c2315", amount: 1972603, block: 26449379, type: "transfer" },
    { hash: "0x05507d96372eb6680c57ccb9c1d1a37020fc68071b4f356cb36dd1b820c09d9d", ts: 1795094291, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xe29a56bb873f6166bcafee7e2287a9acb7710741", amount: 1972603, block: 26449375, type: "transfer" },
    { hash: "0xfb7c26329f34b0d8a549d2c3463d3dc795e93671280fbefa3a0442fbf2cec1b4", ts: 1795091615, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x2d01fc265c78b1fafe1211616bae5951725fc8ed", amount: 109589, block: 26449153, type: "transfer" },
    { hash: "0x16707a73cb0c4117be3c98fc699cc81e37150d3d5acf2651e771ff880b5684a9", ts: 1795091147, from: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 181709, block: 26449114, type: "sell" },
    { hash: "0xe21c13279d2bb6f240a71beaa39cb316c96168bca01ac0cf6b26f5dfa598cbc6", ts: 1795091123, from: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 182025, block: 26449112, type: "sell" },
    { hash: "0x6ca95e0044f1454e7bdd8eceb7a9668fa92ab9c8b3a9e504d7697f66b13959c1", ts: 1795091087, from: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 129043, block: 26449109, type: "sell" },
    { hash: "0x50086bb30bd87b72f6bc6c1303f64d8c83677e1aa2ce8806fbbd414fc7c44e4b", ts: 1795090187, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", amount: 680170, block: 26449034, type: "transfer" },
    { hash: "0x5b0abfb1086ca97dc8694d7b6d50e8fc1bde8541b1e20bf93e36fe03dc54f337", ts: 1795088771, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", amount: 236920, block: 26448916, type: "buy" },
    { hash: "0x90afe63502dc6887024262d3cb490a9b73b7f52b45e877a48be3ef76782309f5", ts: 1795087235, from: "0xe2efb81eb3571e9a6711ced6edee00e8c2311907", to: "0x1c37ee5b8ba8f018637e7f3f816db2e4add1f56e", amount: 557646, block: 26448788, type: "transfer" },
    { hash: "0x4d920f2ed3cb6e58b50edc5767becf51148578362a659e7d876774760eec2670", ts: 1795085171, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x78bb5b1b173ff84d0ec7b9354e791152d66ad780", amount: 284932, block: 26448617, type: "transfer" },
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
    { hash: "0x999ff95928dbe92c93205e1f1e1950d4aa1bcefb12882c0b29ebdc2f84fe07ea", ts: 1795015463, from: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 141220, block: 26442824, type: "sell" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", net: 2948781, received: 2948781, sent: 0, txs: 2 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 1291644, received: 1973016, sent: 681371, txs: 4 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 680170, received: 680170, sent: 0, txs: 1 },
    { wallet: "0x1c37ee5b8ba8f018637e7f3f816db2e4add1f56e", net: 557646, received: 557646, sent: 0, txs: 1 },
    { wallet: "0x78bb5b1b173ff84d0ec7b9354e791152d66ad780", net: 284932, received: 284932, sent: 0, txs: 1 },
    { wallet: "0x00000000000f0a86c92acc08dc208f429c58e900", net: 259435, received: 259435, sent: 0, txs: 2 },
    { wallet: "0x2d01fc265c78b1fafe1211616bae5951725fc8ed", net: 109589, received: 109589, sent: 0, txs: 1 },
    { wallet: "0xe41698520e4817b55c1841859a36847d50f0c82f", net: 83855, received: 83855, sent: 0, txs: 1 },
    { wallet: "0x008df49980b9c15fbb70cc97d3c3ac97746c3d1d", net: 83562, received: 83562, sent: 0, txs: 1 },
    { wallet: "0x5532d65385e664eef604976354608a9dc4d9ae7c", net: 50548, received: 50548, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 41918, received: 41918, sent: 0, txs: 2 },
    { wallet: "0x005f9baf886ee6ef143d063bf025df5faf1facac", net: 27397, received: 27397, sent: 0, txs: 1 },
    { wallet: "0x67336cec42645f55059eff241cb02ea5cc52ff86", net: 25979, received: 343420, sent: 317441, txs: 8 },
    { wallet: "0x2d3ad81db81a9c83688e63f97b5da9b931275ced", net: 24658, received: 24658, sent: 0, txs: 1 },
    { wallet: "0x45856439f71fd12ceb99d186b5544b2da7b5de30", net: 23288, received: 46575, sent: 23288, txs: 2 },
    { wallet: "0x09027911b136ea8f66603658194c165dcc9eede8", net: 23288, received: 23288, sent: 0, txs: 1 },
    { wallet: "0x7cf626900639615d37676002acefa59630031669", net: 17808, received: 17808, sent: 0, txs: 1 },
    { wallet: "0x6876550fd9563399ed60239de3cd5babc7a6ad6a", net: 13425, received: 13425, sent: 0, txs: 1 },
    { wallet: "0x4cf385855183202172e7b8614e077ea7778c8f3c", net: 12603, received: 12603, sent: 0, txs: 1 },
    { wallet: "0x311f520e51b3f5a6354d4e620443edb7ad59e996", net: 5342, received: 5342, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 4384, received: 4384, sent: 0, txs: 1 },
    { wallet: "0xc3debe01ea653562bf479e560e5bd7d907b5d890", net: 4247, received: 4247, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 2720, received: 2720, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x747dd095f8b63a66d7c31f41bb22afb698224e36", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xcc282e2004428939ee5149a9e7872f0b4d5d5ec7", net: 1201, received: 1201, sent: 0, txs: 1 },
    { wallet: "0x722a6b207b2d49cc27bb2806d4de7b65d47a97b3", net: 959, received: 959, sent: 0, txs: 1 },
    { wallet: "0x180545218572e7497421936b14552e07d9f683e5", net: 959, received: 959, sent: 0, txs: 1 },
    { wallet: "0x50e8e34147929096ab69b3316ac0f1adf8b684c1", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xd4ecca8f08ac6fadaed2cb141637c95ee4c74d43", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 663, received: 892, sent: 229, txs: 7 },
    { wallet: "0x11ba910dad5d2f04f3e4790252213fd3e545a1c9", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x27ace13e9949900af2c5fdc1ad2aeb36b1e443a0", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x95bf7463cea10a1c1ec2286b39a962b85ac7e530", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x40b2f1262a394a69f4446ceebca52bc58eb92bf4", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x3c9108700724d9d96cff2ac8979d6ad2a8d469ae", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1d7ce995313e3277c76bdea9448e43603e382409", net: 22, received: 22, sent: 0, txs: 1 },
    { wallet: "0x019211f714755fe64dd947c1938aedc019038788", net: 6, received: 6, sent: 0, txs: 1 },
    { wallet: "0x6a5e67040d5550ca4e1573fa29e511ed045c2315", net: 0, received: 1972603, sent: 1972603, txs: 2 },
    { wallet: "0xe29a56bb873f6166bcafee7e2287a9acb7710741", net: 0, received: 1972603, sent: 1972603, txs: 2 },
    { wallet: "0xad729fcd02e52938c29284d0ab3b4f1c3f66802c", net: 0, received: 274, sent: 274, txs: 2 },
    { wallet: "0xcaf0beadeaefc66fef60ac6526ab566d58c8647a", net: 0, received: 188128, sent: 188128, txs: 14 },
    { wallet: "0x0729e2a4716d9f7dd17858d5d504426d228697f7", net: 0, received: 195374, sent: 195374, txs: 10 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 995315, sent: 995315, txs: 48 },
    { wallet: "0xa622c284e055a51fb97f6d1d5f48137437d24d2c", net: 0, received: 413, sent: 413, txs: 2 },
    { wallet: "0x111116056ad60f0f4fb52d60852f9acd2fafca11", net: 0, received: 54690, sent: 54690, txs: 2 },
    { wallet: "0x6f1d91b39acb0c3d94095445bbea606aeef5e18c", net: 0, received: 54795, sent: 54795, txs: 3 }
];

const WHALE_LABELS = {

};
