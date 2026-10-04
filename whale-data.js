// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "October 4, 2026 at 11:39 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 182;
const WHALE_TOTAL_VOLUME      = 4950323;
const WHALE_BIGGEST_SINGLE    = 251097;

const WHALE_TRANSFERS = [
    { hash: "0x5e2694cdfd0ba8a20ada64f14e727161f0b6fcc4e840ede0ce2a0f85882e600b", ts: 1791113567, from: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 164289, block: 26118712, type: "sell" },
    { hash: "0xc7092bafa4acbe6f5466cb8fedb06233e52574a212236b25dc1651ad4d8b1a22", ts: 1791094439, from: "0x8bb88a3eafd6ba0b6cce254c0c447c4cf5860afe", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 154425, block: 26117125, type: "sell" },
    { hash: "0x65ab37d43869e573f2f436cfa2176761d7d42820cc0f9257de75121651201828", ts: 1791088451, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", amount: 164701, block: 26116627, type: "buy" },
    { hash: "0x323666bda199b696f25f647a774fa85c86d413fb6994c731ad4022bdab5fc2a9", ts: 1791088451, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", amount: 164701, block: 26116627, type: "buy" },
    { hash: "0x9582d09beb271d2568fef0ed02d6bf9a456b6c47c90580dea7cbe78602c1c587", ts: 1791081419, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", amount: 165607, block: 26116043, type: "buy" },
    { hash: "0x55b164f3271c6ea7823e2995c1cbf365dc81483f1052b083a25066d17630d481", ts: 1791081419, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", amount: 165607, block: 26116043, type: "buy" },
    { hash: "0xa3bb3fd9f1dbe6b2a9df23be390ee4b2bf0f37656e80e78001e9884fcca56d1e", ts: 1791052199, from: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 164215, block: 26113613, type: "sell" },
    { hash: "0x24a89061c7a025a3c327452cb4fd735645d54e04dcb8c5660b93f390de3ecdfd", ts: 1791052199, from: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 164215, block: 26113613, type: "sell" },
    { hash: "0x96c58dfd3a19001a5d01c1a056143efb5b894d14b9ededa4329375dcc589f037", ts: 1791043235, from: "0x8bb88a3eafd6ba0b6cce254c0c447c4cf5860afe", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 126645, block: 26112870, type: "sell" },
    { hash: "0x68c6827a6258009267f6197b59af9e4d81981091a0517dcbb7fb3891bdb0fcca", ts: 1791043199, from: "0x8bb88a3eafd6ba0b6cce254c0c447c4cf5860afe", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 145264, block: 26112867, type: "sell" },
    { hash: "0x843b7fbef4a7eee3fd606a801c3281c501f720e5e886329bed1c913921b9fa0b", ts: 1791042707, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", amount: 164490, block: 26112826, type: "buy" },
    { hash: "0x1629e0c4d5ce454ca32e8fcadca6e28fbdb55e38f9bc9764786e146b365e5ef4", ts: 1791042707, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", amount: 145520, block: 26112826, type: "buy" },
    { hash: "0x48d8a229de4b09100cb3bd052f2b13b8724fb5a75637bc6b69fae6f53162a1ff", ts: 1791042347, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", amount: 165014, block: 26112796, type: "buy" },
    { hash: "0x5272481a8b2cf1cf62f9ce112cb0958e5b1a892b5a992226a2c581cd735582d0", ts: 1791042347, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", amount: 165014, block: 26112796, type: "buy" },
    { hash: "0xd768a543899ed2cd1a171050fd70286c1d843e9ae46dea2f19ff88786a16a152", ts: 1791042347, from: "0x1f2f10d1c40777ae1da742455c65828ff36df387", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 251097, block: 26112796, type: "sell" },
    { hash: "0xd768a543899ed2cd1a171050fd70286c1d843e9ae46dea2f19ff88786a16a152", ts: 1791042347, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x1f2f10d1c40777ae1da742455c65828ff36df387", amount: 251097, block: 26112796, type: "buy" },
    { hash: "0x4f0df524ae173c5b38faed3a42db2d770b7c52adc167cd44a0a14b25acedc19e", ts: 1791042167, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", amount: 165357, block: 26112781, type: "buy" },
    { hash: "0xbbcae75520445bec71dfbc53105e72f535660ed0061a93091524e661b3de27fd", ts: 1791042095, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", amount: 165925, block: 26112775, type: "buy" },
    { hash: "0xe875959c5d243f4a27fef6fad5ffead922b83220b1af57c20a2edae70e2d29c8", ts: 1791042095, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", amount: 165925, block: 26112775, type: "buy" },
    { hash: "0x021579a253403c7a47a61a02904e5b2f09c9e92f3f4afe08caae782310a8777a", ts: 1791042047, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", amount: 166499, block: 26112771, type: "buy" },
    { hash: "0xf5366cce347203b777402b93a4397ac9fc3c819878bb2a1ca771ea58f4443d2c", ts: 1791042047, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", amount: 166499, block: 26112771, type: "buy" },
    { hash: "0x1040e80bd9538fae10da2e4481b013b0b2b7424f10515d8cc94d1acd9331a059", ts: 1791042047, from: "0x1f2f10d1c40777ae1da742455c65828ff36df387", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 145549, block: 26112771, type: "sell" },
    { hash: "0x1040e80bd9538fae10da2e4481b013b0b2b7424f10515d8cc94d1acd9331a059", ts: 1791042047, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x1f2f10d1c40777ae1da742455c65828ff36df387", amount: 145549, block: 26112771, type: "buy" },
    { hash: "0x87aae6eab689553b0280a8324eb4f9d5545db5877b173b9b976efabf122a1348", ts: 1791037187, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8bb88a3eafd6ba0b6cce254c0c447c4cf5860afe", amount: 101255, block: 26112368, type: "buy" },
    { hash: "0x96fd24a3a7b27b897684216e754c9f47550036fb3b3fa029a8a49f13d8c60dcf", ts: 1791036479, from: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 166604, block: 26112309, type: "sell" },
    { hash: "0xaaacc37bbcaddd1195bbebb98d1c1b7c819cd2907aae7ecbe8f155ba2aacd16d", ts: 1791036479, from: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 166604, block: 26112309, type: "sell" },
    { hash: "0x259c902ec420a907cd153e0a88c766c8d6e67756f2d390b77fd6a0c0b647389e", ts: 1791036251, from: "0xe06cdd36c3fb35f6ffb5933369595770da829419", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 119193, block: 26112290, type: "sell" },
    { hash: "0x259c902ec420a907cd153e0a88c766c8d6e67756f2d390b77fd6a0c0b647389e", ts: 1791036251, from: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", to: "0xe06cdd36c3fb35f6ffb5933369595770da829419", amount: 119193, block: 26112290, type: "transfer" },
    { hash: "0x737878baee3dec65070a7f315970df38aeaa48b03e45b0f0251255c5b0e53ca5", ts: 1791030647, from: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 165334, block: 26111825, type: "sell" },
    { hash: "0x6f15c980a2d4d9b0fed2c1fbbcc330430d4b9a381a8eb4e844c6053e4257f54e", ts: 1791028403, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", amount: 166243, block: 26111638, type: "buy" },
    { hash: "0x739b24d049011337e1b67f062d5bc03475292f39d3b46fd91631cd20b34eb8bd", ts: 1791028403, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8bb88a3eafd6ba0b6cce254c0c447c4cf5860afe", amount: 102693, block: 26111638, type: "buy" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", net: 665416, received: 829631, sent: 164215, txs: 6 },
    { wallet: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", net: 660025, received: 826629, sent: 166604, txs: 6 },
    { wallet: "0x09fc9b7545020f6a51d113e495e0a451597969d3", net: 202089, received: 202089, sent: 0, txs: 8 },
    { wallet: "0xf81b45b1663b7ea8716c74796d99bbe4ea26f488", net: 91724, received: 91724, sent: 0, txs: 2 },
    { wallet: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", net: 66570, received: 99990, sent: 33420, txs: 4 },
    { wallet: "0xde795c7407df50133d25fd17e51b97a67d356e93", net: 41257, received: 41257, sent: 0, txs: 1 },
    { wallet: "0x4e5468a7fec3ae9bd430e116bb05d5bdecfd2cdc", net: 18082, received: 18082, sent: 0, txs: 1 },
    { wallet: "0xbbc2e9fadd02f03bda75894d84148862f294983a", net: 15890, received: 15890, sent: 0, txs: 1 },
    { wallet: "0x6b67a3e46e45916a199bb58d060cc5fc728db778", net: 14384, received: 14384, sent: 0, txs: 1 },
    { wallet: "0x40e42b7cb4f24ad764c77d4e3e96611d6e306d2b", net: 10137, received: 10137, sent: 0, txs: 1 },
    { wallet: "0x5bfdb327168803a1b33c6062ef28ac0e3fe88e31", net: 8377, received: 8377, sent: 0, txs: 1 },
    { wallet: "0x1d923b519b39c7aaf1e3056a827d50d234391e98", net: 8332, received: 8332, sent: 0, txs: 1 },
    { wallet: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", net: 7653, received: 174257, sent: 166604, txs: 3 },
    { wallet: "0xfd5202a038eda39b048ae1b3e581b3e9558e95ea", net: 4155, received: 4155, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0xfe15f6fe5c100188ca9425c262935677a70d05e3", net: 2055, received: 2055, sent: 0, txs: 1 },
    { wallet: "0x4005d4b50140bcf6221b3ae8df455e10600a02c0", net: 1918, received: 1918, sent: 0, txs: 1 },
    { wallet: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", net: 1484, received: 495322, sent: 493838, txs: 6 },
    { wallet: "0x08975eb9695e5ce896f7416daa9a5f62e81142b3", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x47670e064a9cf54102481f199915e392ce357d60", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xdfc90a70d89bece5ac9331fbd680e3306e9afc15", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x9b6436a7873759d6fff96edb1d6a1410f3c08402", net: 424, received: 424, sent: 0, txs: 1 },
    { wallet: "0x5987d62c93f864fff531f79c1f6c8da51eaffce2", net: 411, received: 411, sent: 0, txs: 2 },
    { wallet: "0x980282821e627b5d6c8f99050d0394e885dcdcca", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x3c9108700724d9d96cff2ac8979d6ad2a8d469ae", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 238, received: 238, sent: 0, txs: 6 },
    { wallet: "0x11ba910dad5d2f04f3e4790252213fd3e545a1c9", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 128, received: 128, sent: 0, txs: 1 },
    { wallet: "0xb8d2d5475731da2d2828573faf0fb7a508d3a3e6", net: 95, received: 134, sent: 39, txs: 2 },
    { wallet: "0xaa4cfa900b322bdb38dbe82d7c5cb47e5b2f9de9", net: 80, received: 80, sent: 0, txs: 1 },
    { wallet: "0xb1a78eea2125efcf4c9153c551b3ece73e8a3ca7", net: 63, received: 63, sent: 0, txs: 1 },
    { wallet: "0x7c2be919979586204ef406d853a83cf4083061d8", net: 16, received: 16, sent: 0, txs: 1 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 79372, sent: 79372, txs: 16 },
    { wallet: "0x1644d2477f809cc2c71bccfd6dc9497e3f83210d", net: 0, received: 41257, sent: 41257, txs: 2 },
    { wallet: "0x8feab81d36e7576107d5de0758c1b839be31b4f6", net: 0, received: 202089, sent: 202089, txs: 16 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 411010, sent: 411010, txs: 12 },
    { wallet: "0x111116053f09d34a7eae8102887004445176ca11", net: 0, received: 51370, sent: 51370, txs: 3 },
    { wallet: "0x28d59e2e8d87b4b272a75b384f6f593a41b4df4a", net: 0, received: 51370, sent: 51370, txs: 2 },
    { wallet: "0x2c0552e5dcb79b064fd23e358a86810bc5994244", net: 0, received: 46802, sent: 46802, txs: 2 },
    { wallet: "0x66a9893cc07d91d95644aedd05d03f95e1dba8af", net: 0, received: 32466, sent: 32466, txs: 2 },
    { wallet: "0x006d0e0d006109f0020f3050000a713780b7b000", net: 0, received: 32466, sent: 32466, txs: 2 },
    { wallet: "0x049a8b42486e99e4f0d1bd173639429a8eff3a1f", net: 0, received: 466, sent: 466, txs: 3 },
    { wallet: "0xf37368141cd56a8039c3cf63a5add3c06d820526", net: 0, received: 822, sent: 822, txs: 2 },
    { wallet: "0x2d84a18d4d1356420f3115e4d11e26680671c62d", net: 0, received: 1370, sent: 1370, txs: 3 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 0, received: 1370, sent: 1370, txs: 2 },
    { wallet: "0x8e29fb98ba7f111461609cc50c49fae14db8e893", net: 0, received: 5753, sent: 5753, txs: 3 }
];

const WHALE_LABELS = {

};
