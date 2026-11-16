// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "November 16, 2026 at 02:30 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 275;
const WHALE_TOTAL_VOLUME      = 290629901;
const WHALE_BIGGEST_SINGLE    = 279284664;

const WHALE_TRANSFERS = [
    { hash: "0x686184891a8f9d4d4e1e7f0e6e0eb0c1983e07e75fc7434e3ab89c5bee442946", ts: 1794838775, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x67336cec42645f55059eff241cb02ea5cc52ff86", amount: 163927, block: 26428146, type: "buy" },
    { hash: "0x970f3816b06f24901f4c79bec26beda86ca8b80703f5227e42a5d05505dc39cd", ts: 1794838523, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", amount: 146690, block: 26428125, type: "buy" },
    { hash: "0xdc44468a97d007ea9677f2ce1dfd10a606399af1be8b06d236daf69fca96b12c", ts: 1794833315, from: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 450289, block: 26427692, type: "transfer" },
    { hash: "0x509c7a3995b45a25f93b9f2ece5849155502c2062c6632abe1e34da245786926", ts: 1794832715, from: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 101375, block: 26427643, type: "sell" },
    { hash: "0x4c4cad431c8e2e4f3670861d11e7ef8b1fc8c060ae7e9e5b26769a028c51b342", ts: 1794826463, from: "0x005f9baf886ee6ef143d063bf025df5faf1facac", to: "0xf3ac9dedc57181aa2807e2248a3ddbbc53765a3b", amount: 630137, block: 26427122, type: "transfer" },
    { hash: "0x1dce41889d69f0a3a323ffc5980b8c73872e8627d146ee2ad9200e8cdd4ee61d", ts: 1794821687, from: "0x23617e59a5925b2a4bf75d73ff6711cd0b29de85", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 129885, block: 26426725, type: "sell" },
    { hash: "0x1dce41889d69f0a3a323ffc5980b8c73872e8627d146ee2ad9200e8cdd4ee61d", ts: 1794821687, from: "0x9206d46e1d35c85946f20a22aeba7b94fe797f2a", to: "0x23617e59a5925b2a4bf75d73ff6711cd0b29de85", amount: 129885, block: 26426725, type: "transfer" },
    { hash: "0x1412b68aa6f7f70e725fc98ba8896cbdd66c81b0373f5fc9e509f6506dd84a24", ts: 1794809675, from: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 126037, block: 26425724, type: "sell" },
    { hash: "0xe41eea6e76c917437b329aa07c57eab823f321da2c3ea49972020d9cfa4ac426", ts: 1794808859, from: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 138963, block: 26425656, type: "sell" },
    { hash: "0x142f20e5d938e16895166d8384cb5e38f39f16b6aabdc0132bd4cadc5b05b8be", ts: 1794808559, from: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 111088, block: 26425631, type: "sell" },
    { hash: "0x89302a0a37af14d03c7b932b82e4b3ae9ceadd2209b40f5643959681423a8e6f", ts: 1794803315, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xc882b111a75c0c657fc507c04fbfcd2cc984f071", amount: 279284664, block: 26425195, type: "transfer" },
    { hash: "0x612685895960ecb3411a961f1664eb6ba093f23a43ed8f62e8b0fcf62aaea880", ts: 1794802079, from: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 142899, block: 26425092, type: "sell" },
    { hash: "0x92251a3df791c7274d7357fa6afaeb9009242c0cc65df69f4b4344b0f1190ade", ts: 1794800843, from: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 132911, block: 26424989, type: "sell" },
    { hash: "0x5803ace1a0726e23710b69df8a6e65399473d93285ae49bcfdb3a6b9e31e5f49", ts: 1794799439, from: "0x7782cf9033832342c66e9a289a457ff0655c60af", to: "0xdb2bd65155a631c990dbccd2a095039c6f0e10d9", amount: 131507, block: 26424872, type: "transfer" },
    { hash: "0xcaf2bd07745a075e33bfb698e25ef32538481d9491ad5f3c5cc63d0ee4a92a3b", ts: 1794799403, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x7782cf9033832342c66e9a289a457ff0655c60af", amount: 131507, block: 26424869, type: "transfer" },
    { hash: "0xaeec9a5845f9b86029278c0d9bc7cd3aaafca563502e4ebe6c5faa479886b95a", ts: 1794796079, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x67336cec42645f55059eff241cb02ea5cc52ff86", amount: 180227, block: 26424592, type: "buy" },
    { hash: "0xaa61a42ec44610bc049cc87cbad617d1cf5ea00b7f6cc9432562a104e8f2db13", ts: 1794794447, from: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 432186, block: 26424456, type: "sell" },
    { hash: "0x4e52c2cb609ac989515d6ffc26584bf9f9c64deba02a48fdd1f6ca5dddce1100", ts: 1794789791, from: "0x67336cec42645f55059eff241cb02ea5cc52ff86", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 112291, block: 26424069, type: "sell" },
    { hash: "0xf7f74be2a16c43839098d9efec7b06219f352165be6761378002863d395e3a24", ts: 1794787295, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x67336cec42645f55059eff241cb02ea5cc52ff86", amount: 115029, block: 26423862, type: "buy" },
    { hash: "0x06fc2c4dcc5ec096626e718230c1344822ad9141a63b29ced7498d3b32a4917a", ts: 1794787115, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", amount: 108909, block: 26423847, type: "buy" },
    { hash: "0xfae0833a7f4c3a4a956b6d06943cc6739c436db9dbf2a5d28d379a5613f2ae3a", ts: 1794783863, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", amount: 150298, block: 26423576, type: "buy" },
    { hash: "0x494b9e88d5df9d476c477df49d3c73907af2c7716cf7cf0a874db9aed4071f2c", ts: 1794783671, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", amount: 132027, block: 26423560, type: "buy" },
    { hash: "0xe015d6c0c32e5c833b6f38a37a9f5bdb2a76779f508c5859ac55d39551e67f49", ts: 1794782351, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x67336cec42645f55059eff241cb02ea5cc52ff86", amount: 106438, block: 26423450, type: "buy" },
    { hash: "0x9fbd2cc69281d95ba9810e4b3307eee05bb21f2f531e5a2564db72373b11d037", ts: 1794780443, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", amount: 150201, block: 26423292, type: "buy" },
    { hash: "0x54c35c39bb3fcec788ae12ac66d95a9ae2899b7743fe607d49acea7db9efd26c", ts: 1794777611, from: "0x67336cec42645f55059eff241cb02ea5cc52ff86", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 167871, block: 26423058, type: "sell" },
    { hash: "0x610abc124d9fb96c9f22d1e27b5ac04ff06f9476ad63c53c7c9e668852bed274", ts: 1794777539, from: "0x8bb88a3eafd6ba0b6cce254c0c447c4cf5860afe", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100543, block: 26423052, type: "sell" },
    { hash: "0x8d9490e0d38e6ee01894e25e236c85d0b2c39a5681a309b1051ef56cc561791e", ts: 1794777527, from: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 162765, block: 26423051, type: "sell" },
    { hash: "0x166dd8111e35961ba412bc96041b764a2edd5f74199e490baa536dfae3da705a", ts: 1794777227, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xb7719c42635c42073a115a25c7e26a31d8451d6a", amount: 1868493, block: 26423026, type: "transfer" },
    { hash: "0x44839b09d570cd81081d048fc4d6fd4c9427adc101bb68112f5e59867d357fa4", ts: 1794777107, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xbe4ae6e24d12dbd180517f126765178bae81f341", amount: 3260822, block: 26423016, type: "transfer" },
    { hash: "0x6e26beff0da8917c3d1b797accc1a20bce91297faf039370dd576cbf225c7087", ts: 1794777095, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xbe4ae6e24d12dbd180517f126765178bae81f341", amount: 180822, block: 26423015, type: "transfer" },
    { hash: "0x8869b2b16332a51c2838ce0f9bd1bfbd70290804c27bc18e5efa52fa45e57774", ts: 1794773279, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x67336cec42645f55059eff241cb02ea5cc52ff86", amount: 103773, block: 26422697, type: "buy" },
    { hash: "0x8b62ad841b30b8bbc315a2b3fa0a55c49ff13ce526b46fe8188845b966615b6a", ts: 1794773243, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x67336cec42645f55059eff241cb02ea5cc52ff86", amount: 184470, block: 26422694, type: "buy" },
    { hash: "0xa3c520d10c87ad7bd1a7fc313a16acdc2424b8e3aa8fe0eb9b2e8b2798c3ad61", ts: 1794770975, from: "0x05e7c72498fdecf1c3638b66af2740adea8d7f8f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 125241, block: 26422505, type: "sell" },
    { hash: "0x2e24baf2b85662df6c21633ac883cb1e9d7666013afc33c5a2dee35e93242087", ts: 1794770963, from: "0x9642b23ed1e01df1092b92641051881a322f5d4e", to: "0x05e7c72498fdecf1c3638b66af2740adea8d7f8f", amount: 125243, block: 26422504, type: "transfer" },
    { hash: "0x930b53813183c95d465800c0bafe3b8cc905213d8257a5569896d4542aac0d64", ts: 1794770495, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x67336cec42645f55059eff241cb02ea5cc52ff86", amount: 115029, block: 26422465, type: "buy" },
    { hash: "0xe3a052274a99359c22af4b43566c0a7a6c697eab0a5f7e64d9542275554f309e", ts: 1794769511, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", amount: 129750, block: 26422383, type: "buy" },
    { hash: "0xe6a80e75aa5e65f4e8d52aae520951e7da2f5659fad054506074d352f4261e60", ts: 1794760187, from: "0xe06cdd36c3fb35f6ffb5933369595770da829419", to: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", amount: 190760, block: 26421608, type: "transfer" },
    { hash: "0xe6a80e75aa5e65f4e8d52aae520951e7da2f5659fad054506074d352f4261e60", ts: 1794760187, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0xe06cdd36c3fb35f6ffb5933369595770da829419", amount: 190760, block: 26421608, type: "buy" },
    { hash: "0x49ac72b9883f650a7ed5fb2911362ac34e0fa99ddea9b8e27e4642d1e5f25142", ts: 1794753647, from: "0x67336cec42645f55059eff241cb02ea5cc52ff86", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 171407, block: 26421063, type: "sell" },
    { hash: "0x84322f0b901f839254eaf34ce5bc48d51b9c9a29326559a538808c3322fadb7b", ts: 1794753083, from: "0x67336cec42645f55059eff241cb02ea5cc52ff86", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 112782, block: 26421017, type: "sell" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xc882b111a75c0c657fc507c04fbfcd2cc984f071", net: 279284664, received: 279284664, sent: 0, txs: 1 },
    { wallet: "0xbe4ae6e24d12dbd180517f126765178bae81f341", net: 3441644, received: 3441644, sent: 0, txs: 2 },
    { wallet: "0xb7719c42635c42073a115a25c7e26a31d8451d6a", net: 1868493, received: 1868493, sent: 0, txs: 1 },
    { wallet: "0x8bb88a3eafd6ba0b6cce254c0c447c4cf5860afe", net: 658815, received: 1199721, sent: 540906, txs: 35 },
    { wallet: "0xf3ac9dedc57181aa2807e2248a3ddbbc53765a3b", net: 630137, received: 630137, sent: 0, txs: 1 },
    { wallet: "0x67336cec42645f55059eff241cb02ea5cc52ff86", net: 478985, received: 1224099, sent: 745114, txs: 16 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 441592, received: 450289, sent: 8698, txs: 3 },
    { wallet: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", net: 146690, received: 146690, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 115261, received: 966383, sent: 851122, txs: 31 },
    { wallet: "0x17d83011d4e39fea3af78d926291f6c7e832f0b4", net: 63014, received: 63014, sent: 0, txs: 1 },
    { wallet: "0xc07f8b8d4b5a5c7cc420267c3f50eb0c9e72f306", net: 57534, received: 57534, sent: 0, txs: 1 },
    { wallet: "0x77664634f36ecffc00045b25f0ad5f8a8512e702", net: 54795, received: 54795, sent: 0, txs: 1 },
    { wallet: "0xeef9f6e1e637c9278a76dbc9d3563a13d41ba8df", net: 53151, received: 53151, sent: 0, txs: 1 },
    { wallet: "0x366132380b6df8bbaddb6d03b1bb4db88622cd6c", net: 49315, received: 49315, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 41918, received: 41918, sent: 0, txs: 2 },
    { wallet: "0xf2441a1ec29d3a153add6f7350918a8adbec2da0", net: 41314, received: 41314, sent: 0, txs: 1 },
    { wallet: "0x6f1d91b39acb0c3d94095445bbea606aeef5e18c", net: 27397, received: 27397, sent: 0, txs: 1 },
    { wallet: "0x2f36fb837850aa0a491cc2a5a075c90f5153a3fd", net: 25616, received: 25616, sent: 0, txs: 1 },
    { wallet: "0x09027911b136ea8f66603658194c165dcc9eede8", net: 23288, received: 23288, sent: 0, txs: 1 },
    { wallet: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", net: 20027, received: 20027, sent: 0, txs: 1 },
    { wallet: "0x7cf626900639615d37676002acefa59630031669", net: 17808, received: 17808, sent: 0, txs: 1 },
    { wallet: "0x5e70961a0d7ce565e367b42bf835993d738023b9", net: 13699, received: 13699, sent: 0, txs: 1 },
    { wallet: "0xf8ec5ff27729cd8f6aadf2c2c85452e6899e6be2", net: 9589, received: 9589, sent: 0, txs: 1 },
    { wallet: "0xcc282e2004428939ee5149a9e7872f0b4d5d5ec7", net: 5197, received: 5197, sent: 0, txs: 1 },
    { wallet: "0x1839d0ceacae935199a8bb7ffac616835e13ccb6", net: 4932, received: 4932, sent: 0, txs: 1 },
    { wallet: "0x3faa2c738f76f76526231c035c74184f3be5feb7", net: 4932, received: 4932, sent: 0, txs: 1 },
    { wallet: "0x817dafcee58beef498fe640dbe0fac09929920aa", net: 3500, received: 3500, sent: 0, txs: 1 },
    { wallet: "0x2d4a0455a0c8bb573665aedaa2fa4d987539e6bd", net: 3274, received: 3274, sent: 0, txs: 1 },
    { wallet: "0xfa319d8756ae02f9a497c6ef97e687c2440e7c43", net: 3207, received: 3207, sent: 0, txs: 1 },
    { wallet: "0x88c40cd47ec72e481051c1c495fd0e7a23a30cee", net: 3014, received: 3014, sent: 0, txs: 1 },
    { wallet: "0x3822d8b402d6fcbe3187b08b1733ae2e2e46a2d3", net: 2740, received: 2740, sent: 0, txs: 1 },
    { wallet: "0xdfc90a70d89bece5ac9331fbd680e3306e9afc15", net: 2740, received: 2740, sent: 0, txs: 1 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 1507, received: 1507, sent: 0, txs: 1 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 790, received: 790, sent: 0, txs: 9 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0x9e95a7b56d70cb5619a2811ecd79d2c190ae70a7", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x29b71fd85d1148098e7400b23880cafbaf19342f", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x9ef1d6daffd8135ecfb2c438fe4b607df6212935", net: 2, received: 2, sent: 0, txs: 1 },
    { wallet: "0x05e7c72498fdecf1c3638b66af2740adea8d7f8f", net: 2, received: 125243, sent: 125241, txs: 2 },
    { wallet: "0x69a3136b94daa2dd4a76c5c1560e0d95dc9022ba", net: 2, received: 2, sent: 0, txs: 2 },
    { wallet: "0x0729e2a4716d9f7dd17858d5d504426d228697f7", net: 0, received: 110221, sent: 110221, txs: 8 },
    { wallet: "0x61069bea4361ec129593aa34ab84975e7d8273cf", net: 0, received: 37260, sent: 37260, txs: 2 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 1817506, sent: 1817506, txs: 62 },
    { wallet: "0xef9257dc2f876376047f3be1aadeed7cfe9a81b4", net: 0, received: 4795, sent: 4795, txs: 3 },
    { wallet: "0xa62e9768da140c8a8cd52fab246f602d34b0d40f", net: 0, received: 4795, sent: 4795, txs: 2 },
    { wallet: "0x23617e59a5925b2a4bf75d73ff6711cd0b29de85", net: 0, received: 138176, sent: 138176, txs: 4 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 3647, sent: 3647, txs: 2 }
];

const WHALE_LABELS = {

};
