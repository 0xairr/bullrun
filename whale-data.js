// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "November 22, 2026 at 01:54 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 189;
const WHALE_TOTAL_VOLUME      = 12446570;
const WHALE_BIGGEST_SINGLE    = 1328000;

const WHALE_TRANSFERS = [
    { hash: "0xd0656d6f8cd40153c8409467960e8dec8a4fb95448c985efa46a83d7532d174f", ts: 1795350287, from: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 164013, block: 26470637, type: "sell" },
    { hash: "0x41e663c22be26b5e0c15a4cd6ca0097154435d8504392d9b17210d9d8054a6df", ts: 1795350167, from: "0x111116056ad60f0f4fb52d60852f9acd2fafca11", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 132462, block: 26470627, type: "sell" },
    { hash: "0x41e663c22be26b5e0c15a4cd6ca0097154435d8504392d9b17210d9d8054a6df", ts: 1795350167, from: "0xce5422d95915914c89590c057fbebb3d328cd3d6", to: "0x111116056ad60f0f4fb52d60852f9acd2fafca11", amount: 132462, block: 26470627, type: "transfer" },
    { hash: "0xdbfbec40d79214851e1a8bebced7701580142d430f1cb5e542ab96bb681c51b6", ts: 1795349879, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", amount: 164113, block: 26470603, type: "buy" },
    { hash: "0xf6971984ecf43813a4b50bde103d09f13a7bff7f4e570fdcab02be9ede459f5c", ts: 1795343639, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x2d01fc265c78b1fafe1211616bae5951725fc8ed", amount: 164384, block: 26470085, type: "transfer" },
    { hash: "0xac4b3202a3348dedfb6fd87ca9c87fadd3bbb586049497072564c84d3a75fffb", ts: 1795342127, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x67336cec42645f55059eff241cb02ea5cc52ff86", amount: 131028, block: 26469959, type: "buy" },
    { hash: "0x8949732b491719fd44176bbfe4ab664bab832de6993f7cda220cbd624ccd5c21", ts: 1795341395, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", amount: 165555, block: 26469898, type: "buy" },
    { hash: "0x381d37c54b2fb85079dda238c933cb19e8d1b7bc4a5c497ecd102f2390a84a1b", ts: 1795335695, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", amount: 453784, block: 26469426, type: "buy" },
    { hash: "0x8f37935ad168a096d05cd5967912a254a5137d7504887638d82280490d9a0af2", ts: 1795335167, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x67336cec42645f55059eff241cb02ea5cc52ff86", amount: 130110, block: 26469382, type: "buy" },
    { hash: "0xdf231f61688fd9191a0210c634516c18cd6aa9f5d3154123762d74bb024dd6fb", ts: 1795333691, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", amount: 168697, block: 26469259, type: "buy" },
    { hash: "0x1d60fc00e99fd26060015ccfd3540f3b9bcbbc292bcca0f1e9c20656cd0fcd76", ts: 1795332983, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", amount: 327826, block: 26469200, type: "buy" },
    { hash: "0xac1b995836b69e45a78ff3eb6d9e956d20817f6efe03ec7779fea3289bffa531", ts: 1795332971, from: "0x111116056ad60f0f4fb52d60852f9acd2fafca11", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 557646, block: 26469199, type: "sell" },
    { hash: "0xac1b995836b69e45a78ff3eb6d9e956d20817f6efe03ec7779fea3289bffa531", ts: 1795332971, from: "0x74de5d4fcbf63e00296fd95d33236b9794016631", to: "0x111116056ad60f0f4fb52d60852f9acd2fafca11", amount: 557646, block: 26469199, type: "transfer" },
    { hash: "0xac1b995836b69e45a78ff3eb6d9e956d20817f6efe03ec7779fea3289bffa531", ts: 1795332971, from: "0x1c37ee5b8ba8f018637e7f3f816db2e4add1f56e", to: "0x74de5d4fcbf63e00296fd95d33236b9794016631", amount: 557646, block: 26469199, type: "transfer" },
    { hash: "0x8fec62e4399b7ccb593169a49980f6576ce6b352d295ba943718a996f7f083eb", ts: 1795332779, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x67336cec42645f55059eff241cb02ea5cc52ff86", amount: 234705, block: 26469183, type: "buy" },
    { hash: "0xf1c1fc6ad05a317070ab17440a600e0afe7b8062203227d2e7b6822863d59e1d", ts: 1795332683, from: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 1328000, block: 26469175, type: "transfer" },
    { hash: "0xd20aad76af28608e2cd3d31a391d4fe170e9232d091a76ad80e448029ad3053d", ts: 1795327211, from: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", to: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", amount: 1328000, block: 26468721, type: "transfer" },
    { hash: "0xd742ac89bfdba9a2662c0e7e5e8755c86e168d681c32f9e0ed9c3c479d2cb6de", ts: 1795327163, from: "0x09fc9b7545020f6a51d113e495e0a451597969d3", to: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", amount: 1328000, block: 26468717, type: "transfer" },
    { hash: "0x20dc17250a69569e27a68d9d4b0b2aad8d49897e04624a7734a8da701c1570bb", ts: 1795327127, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x09fc9b7545020f6a51d113e495e0a451597969d3", amount: 374036, block: 26468714, type: "transfer" },
    { hash: "0x37dbcf14e749bc7424810b2d99e0ae70a6693c765422e005106bd1ae10aafb2d", ts: 1795327091, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x09fc9b7545020f6a51d113e495e0a451597969d3", amount: 1279660, block: 26468711, type: "transfer" },
    { hash: "0xb1eaf95f886e6e7bab6d2aa90762620326bae06efad566739c40500db59fabf7", ts: 1795325927, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x6ba9f986d7ab9b884d356679e8af4ba5969415fa", amount: 158904, block: 26468614, type: "transfer" },
    { hash: "0x41a671550dc081d0bb250d2a85eb3f89b332157054af7dd85573259b9974325c", ts: 1795315475, from: "0xe7be77a38ccd0109c6dee5014b4c4aab5bfdb8aa", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 147426, block: 26467745, type: "sell" },
    { hash: "0x8b9a63ae0f7699811881aaf5b0e4afe8052a0aa5e5cd79f8ef885646a2cc05af", ts: 1795315415, from: "0x6876550fd9563399ed60239de3cd5babc7a6ad6a", to: "0xe7be77a38ccd0109c6dee5014b4c4aab5bfdb8aa", amount: 147671, block: 26467740, type: "transfer" },
    { hash: "0x169f38d60005ccfa2b8d3cb88bb1c236610f23c7ba1e6fd87096a0a4884d43fc", ts: 1795315379, from: "0x2d3ad81db81a9c83688e63f97b5da9b931275ced", to: "0x08a3a9f967c830a6eaf1024d2e42daa8bbed9510", amount: 246575, block: 26467737, type: "transfer" },
    { hash: "0x84f2a12d006b91da31c8c72f9e1bbced10d180b1d097c6e4690359de72228f2d", ts: 1795315163, from: "0x00000000000f0a86c92acc08dc208f429c58e900", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 150155, block: 26467719, type: "sell" },
    { hash: "0xdee3a6ca101f5816d8f59465c7892318dcf1abe440887b1925f1a382d4f1d860", ts: 1795304951, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x67336cec42645f55059eff241cb02ea5cc52ff86", amount: 195444, block: 26466870, type: "buy" },
    { hash: "0x26e8902342af2b832e28edcff21e1a501107beb049bf539476364ed206659386", ts: 1795302539, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x67336cec42645f55059eff241cb02ea5cc52ff86", amount: 194312, block: 26466670, type: "buy" },
    { hash: "0x3bc7bb0635398d028f304f899472d06d802f4dbc9056cd038c71ded4fa482f9f", ts: 1795295759, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x2970e620ff7cb1fc2d26ea6672df1378e866fe5b", amount: 343425, block: 26466106, type: "transfer" },
    { hash: "0xf8c4873e224dcd8f5c95a73a60127d747b7387a26a4b102df9b47c6dcb8105c1", ts: 1795281647, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x67336cec42645f55059eff241cb02ea5cc52ff86", amount: 209996, block: 26464933, type: "buy" },
    { hash: "0x535506873a2bc8c7396b7b58a2c9abe622d79ec9815dbc606b3e3c8074611154", ts: 1795280579, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x67336cec42645f55059eff241cb02ea5cc52ff86", amount: 125303, block: 26464845, type: "buy" },
    { hash: "0x33bef0a9ad865b032f410aa2198045a43005add67eda93c6e1b5b231f0a205b7", ts: 1795279139, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x67336cec42645f55059eff241cb02ea5cc52ff86", amount: 289180, block: 26464725, type: "buy" },
    { hash: "0x1e557beb245ffe82ff98e585a7d9d9da661ebfcf52f1e6cd42241da9f331f92e", ts: 1795278803, from: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 175319, block: 26464697, type: "sell" },
    { hash: "0x685130658c2763ab3db19ebd37afce6640dae0bb3d054ec673e01f3521d77bc0", ts: 1795270127, from: "0xe41698520e4817b55c1841859a36847d50f0c82f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 109979, block: 26463978, type: "sell" },
    { hash: "0x77fe60c85a15b57c2408142b564386e5d57feb3e02908affd7c557cdb7b965d2", ts: 1795269791, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", amount: 130240, block: 26463950, type: "buy" },
    { hash: "0x1fb9a4e9479210cbe5f4f8bc520daae562d59d77708a0625305940bb9b120bb3", ts: 1795269671, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", amount: 142868, block: 26463940, type: "buy" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x67336cec42645f55059eff241cb02ea5cc52ff86", net: 1510078, received: 1510078, sent: 0, txs: 8 },
    { wallet: "0x51c72848c68a965f66fa7a88855f9f7784502a7f", net: 460686, received: 1246868, sent: 786182, txs: 14 },
    { wallet: "0x2970e620ff7cb1fc2d26ea6672df1378e866fe5b", net: 343425, received: 343425, sent: 0, txs: 1 },
    { wallet: "0x08a3a9f967c830a6eaf1024d2e42daa8bbed9510", net: 246575, received: 246575, sent: 0, txs: 1 },
    { wallet: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", net: 168697, received: 168697, sent: 0, txs: 1 },
    { wallet: "0x2d01fc265c78b1fafe1211616bae5951725fc8ed", net: 164384, received: 164384, sent: 0, txs: 1 },
    { wallet: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", net: 164113, received: 164113, sent: 0, txs: 1 },
    { wallet: "0x6ba9f986d7ab9b884d356679e8af4ba5969415fa", net: 158904, received: 158904, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 41918, received: 41918, sent: 0, txs: 2 },
    { wallet: "0x005f9baf886ee6ef143d063bf025df5faf1facac", net: 27397, received: 27397, sent: 0, txs: 1 },
    { wallet: "0xc630ca552411570fc71aae30d7c585221c57d46e", net: 23425, received: 23425, sent: 0, txs: 1 },
    { wallet: "0x7cf626900639615d37676002acefa59630031669", net: 17808, received: 17808, sent: 0, txs: 1 },
    { wallet: "0xde2b49aa480dd2eaf663a59426ee43f37e72a1a4", net: 14247, received: 14247, sent: 0, txs: 1 },
    { wallet: "0x30cfadcdd83701dd41baab255a110290d9bc968b", net: 9315, received: 9315, sent: 0, txs: 1 },
    { wallet: "0xfba8cdd846b80fabcac617df0f4794b3df73e700", net: 9041, received: 9041, sent: 0, txs: 1 },
    { wallet: "0x6f3f1c8909123a22e94d87f8efb373817bd05b4f", net: 5479, received: 5479, sent: 0, txs: 1 },
    { wallet: "0x0f36eb8f227aa28e2eb2705724233addabd61e15", net: 2466, received: 2466, sent: 0, txs: 1 },
    { wallet: "0xdfc90a70d89bece5ac9331fbd680e3306e9afc15", net: 1918, received: 1918, sent: 0, txs: 1 },
    { wallet: "0xa0952edc243077c05148828cc5432c37486858c3", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", net: 1542, received: 165555, sent: 164013, txs: 2 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 902, received: 2720, sent: 1818, txs: 2 },
    { wallet: "0x2bf95eed899ad8d06403e06a7e5c77524ba31ae5", net: 894, received: 894, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 706, received: 706, sent: 0, txs: 5 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x3822d8b402d6fcbe3187b08b1733ae2e2e46a2d3", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x8c4807b73bd80862e034757b455534e1c857814f", net: 4, received: 4, sent: 0, txs: 1 },
    { wallet: "0x0729e2a4716d9f7dd17858d5d504426d228697f7", net: 0, received: 38651, sent: 38651, txs: 8 },
    { wallet: "0x60ea90c65287050d888c747c19453a077b1ebffa", net: 0, received: 1809, sent: 1809, txs: 4 },
    { wallet: "0x195627f03fe2668d65c763cd39eec45b1d76c8ee", net: 0, received: 850, sent: 850, txs: 2 },
    { wallet: "0xaddc26a3854feabfd20d6bf658254088d83a425a", net: 0, received: 850, sent: 850, txs: 2 },
    { wallet: "0x111116056ad60f0f4fb52d60852f9acd2fafca11", net: 0, received: 690108, sent: 690108, txs: 4 },
    { wallet: "0xb36599414542f6630d411485d968f25592ca9091", net: 0, received: 1818, sent: 1818, txs: 2 },
    { wallet: "0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae", net: 0, received: 1818, sent: 1818, txs: 2 },
    { wallet: "0x72ab1b98b60a9251cc00ab1c3bbe9f48cdfdca40", net: 0, received: 1818, sent: 1818, txs: 2 },
    { wallet: "0x3b950ff939b009845aabcff82772ce8b4dcd0f49", net: 0, received: 1818, sent: 1818, txs: 2 },
    { wallet: "0xb1a78eea2125efcf4c9153c551b3ece73e8a3ca7", net: 0, received: 9498, sent: 9498, txs: 2 },
    { wallet: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", net: 0, received: 397165, sent: 397165, txs: 13 },
    { wallet: "0x74de5d4fcbf63e00296fd95d33236b9794016631", net: 0, received: 557646, sent: 557646, txs: 2 },
    { wallet: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", net: 0, received: 1328000, sent: 1328000, txs: 2 },
    { wallet: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", net: 0, received: 1328000, sent: 1328000, txs: 2 },
    { wallet: "0xcaf0beadeaefc66fef60ac6526ab566d58c8647a", net: 0, received: 1079280, sent: 1079280, txs: 60 },
    { wallet: "0xa622c284e055a51fb97f6d1d5f48137437d24d2c", net: 0, received: 822, sent: 822, txs: 4 },
    { wallet: "0x9e95a7b56d70cb5619a2811ecd79d2c190ae70a7", net: 0, received: 822, sent: 822, txs: 4 },
    { wallet: "0xe7be77a38ccd0109c6dee5014b4c4aab5bfdb8aa", net: 0, received: 147671, sent: 147671, txs: 3 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 0, received: 1370, sent: 1370, txs: 2 },
    { wallet: "0x8e101ce0cd87c816dcfd4d02f7e21983901def94", net: 0, received: 54452, sent: 54452, txs: 2 },
    { wallet: "0xdc949e168631246d05d0b12c6ac9573d2e8da185", net: 0, received: 49411, sent: 49411, txs: 2 }
];

const WHALE_LABELS = {

};
