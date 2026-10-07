// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "October 7, 2026 at 12:28 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 136;
const WHALE_TOTAL_VOLUME      = 26668255;
const WHALE_BIGGEST_SINGLE    = 7600000;

const WHALE_TRANSFERS = [
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
    { hash: "0x9e02092590663ee66afce9bce8421f3af564e8db184c1f9b923e655e670b2deb", ts: 1791339491, from: "0xedc6b3f95f3e4ef39318a13bd1757716686d269a", to: "0x07faaf79ce52d727f2cc7ea3d22e43fa75d5b873", amount: 5698224, block: 26137469, type: "transfer" },
    { hash: "0xba71e0c393fa226ffd5ad7d1f996c012254d2f0d8e9b044de73eab8ae09755c3", ts: 1791314303, from: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 170161, block: 26135376, type: "sell" },
    { hash: "0x2ea4e2e0cc99f9c6aa6c976d30cc95c7406c7674d210523cdc268e090fcb6517", ts: 1791311951, from: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 171302, block: 26135180, type: "sell" },
    { hash: "0x2b5ed063c19e0021a606c9e2df7211585bb5484a25fbafe8b27504fb3f550743", ts: 1791311951, from: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 171302, block: 26135180, type: "sell" },
    { hash: "0xc97dedca50a6613b200b4f8519f434a273bb3eb3a35065ed7e5e41485bb07a0d", ts: 1791307019, from: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 170751, block: 26134769, type: "sell" },
    { hash: "0x6848fce79d970bf23966ac4cdfee7e6b347781c8774dcba1d1568583bf4b4f8a", ts: 1791307019, from: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 170751, block: 26134769, type: "sell" },
    { hash: "0x518e6ebeb918af0fafc6005def69e4237303ba9929dfd7512d4d86f54440df81", ts: 1791304247, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x4c21dde8e465461568e4f66551ab6715c0025005", amount: 349315, block: 26134539, type: "transfer" },
    { hash: "0x7f4d3a307529af0a5410c8447db858b7e8e277165149662bd4f18da528327c07", ts: 1791300323, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", amount: 171234, block: 26134213, type: "buy" },
    { hash: "0x4ef9dca12caaf0a684c9497895af68a7778269ae0850d2e17fadc345744d7de0", ts: 1791300323, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", amount: 171234, block: 26134213, type: "buy" },
    { hash: "0xb3f0fa691f5615eb22cd92a026b5b8834b88890a9e0811cfde58b942654bcb4b", ts: 1791290603, from: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 170837, block: 26133409, type: "sell" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 7504930, received: 7605607, sent: 100677, txs: 4 },
    { wallet: "0x4c21dde8e465461568e4f66551ab6715c0025005", net: 349315, received: 349315, sent: 0, txs: 1 },
    { wallet: "0x156e44ff557727476b9fe84338cdddaa41fa4854", net: 256986, received: 456986, sent: 200000, txs: 2 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 224783, received: 224783, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 197420, received: 197910, sent: 489, txs: 2 },
    { wallet: "0x4f012297d6f611da1fc66111e1e65fd83d313f5a", net: 188966, received: 188966, sent: 0, txs: 1 },
    { wallet: "0xf68d2bfcecd7895bba05a7451dd09a1749026454", net: 174521, received: 174521, sent: 0, txs: 1 },
    { wallet: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", net: 171234, received: 171234, sent: 0, txs: 1 },
    { wallet: "0x1a87aaec7927ab2527bf790625cc12843ede910e", net: 70222, received: 100677, sent: 30455, txs: 3 },
    { wallet: "0xf732ebce4e66e48ac2ba592648c62aeeb52d9f73", net: 46575, received: 46575, sent: 0, txs: 1 },
    { wallet: "0x1308535a9d6bc643e76c198d28b1092b2fde0a60", net: 30455, received: 30455, sent: 0, txs: 1 },
    { wallet: "0x2fb2c92431b35188007b2b1e0b0c717f9b7dae75", net: 14795, received: 14795, sent: 0, txs: 1 },
    { wallet: "0x9a779d68c726bb636f4a57b62ad866fb2ded39c3", net: 11857, received: 11857, sent: 0, txs: 1 },
    { wallet: "0x1485e810d675528c4d56ccc508990a13643d86e9", net: 9589, received: 9589, sent: 0, txs: 1 },
    { wallet: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", net: 8965, received: 8965, sent: 0, txs: 1 },
    { wallet: "0xc8fd6e59234ffadda514ab10bf70020de0f8e975", net: 8904, received: 8904, sent: 0, txs: 1 },
    { wallet: "0x03cd59f707e0442bf82bf49216ce90500c2bf609", net: 8490, received: 8490, sent: 0, txs: 1 },
    { wallet: "0x49a2299840a9a5495cae51415548c2b1344bd4f3", net: 8219, received: 8219, sent: 0, txs: 1 },
    { wallet: "0x35851963d843668e433a1d97fddc4d1974323a6b", net: 7294, received: 7294, sent: 0, txs: 1 },
    { wallet: "0x98ffc1988c0b283c5f78fdfcc76d1cb67b3f6cd4", net: 4806, received: 4806, sent: 0, txs: 1 },
    { wallet: "0x3e99c419d7441939415177c9f79589e77bc0b3e2", net: 4795, received: 4795, sent: 0, txs: 1 },
    { wallet: "0xc94124792221a2cff88e002a34aa57939ceef1f4", net: 4647, received: 4647, sent: 0, txs: 1 },
    { wallet: "0xfd9072f3715419414e2345da949fe5048c839877", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x722a6b207b2d49cc27bb2806d4de7b65d47a97b3", net: 2055, received: 2055, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1980, received: 1980, sent: 0, txs: 9 },
    { wallet: "0x77c98f81d7a5feaaa0ef1e780cda2ebc1881605f", net: 1829, received: 1829, sent: 0, txs: 1 },
    { wallet: "0x47670e064a9cf54102481f199915e392ce357d60", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x311f520e51b3f5a6354d4e620443edb7ad59e996", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x1b0b1ad3e6a2fb69c48c2913fea012bc38f0a2e9", net: 1507, received: 1507, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x4f3889331539ab2ed976dbaf67c8def36deeed15", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xc3debe01ea653562bf479e560e5bd7d907b5d890", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0xcc282e2004428939ee5149a9e7872f0b4d5d5ec7", net: 489, received: 489, sent: 0, txs: 1 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x980282821e627b5d6c8f99050d0394e885dcdcca", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x9e95a7b56d70cb5619a2811ecd79d2c190ae70a7", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x39faf1de461849163e390d0a57d1eaa632064a49", net: 339, received: 339, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 150, received: 224934, sent: 224783, txs: 4 },
    { wallet: "0x80fd48b7777490e5c3c07f02bcfe94af2cb59223", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x7c876bdaa5c038e19f633714f622f6def949b102", net: 51, received: 11908, sent: 11857, txs: 2 },
    { wallet: "0x0fe4b65be3215098a599512ba28ffae10a34fc3e", net: 0, received: 5607, sent: 5607, txs: 2 },
    { wallet: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", net: 0, received: 224783, sent: 224783, txs: 2 },
    { wallet: "0x8099def9bbbcd3362f4568b321322a9161fbb36b", net: 0, received: 199373, sent: 199373, txs: 2 },
    { wallet: "0x1986306841109f9fc143b209b798bd83a12c56d7", net: 0, received: 200000, sent: 200000, txs: 3 },
    { wallet: "0xb57ff6e684ff7f7732f4e4d21069e90d567c0f30", net: 0, received: 2055, sent: 2055, txs: 2 },
    { wallet: "0x2f6c24fcace697f8f52d14c94a57e9eb1e2666a1", net: 0, received: 5607, sent: 5607, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 44801, sent: 44801, txs: 8 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 69835, sent: 69835, txs: 16 },
    { wallet: "0x666fedd4cdd4e890a5ad20e7b60975409435a64a", net: 0, received: 25228, sent: 25228, txs: 3 }
];

const WHALE_LABELS = {

};
