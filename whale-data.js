// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "October 7, 2026 at 03:46 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 153;
const WHALE_TOTAL_VOLUME      = 17707029;
const WHALE_BIGGEST_SINGLE    = 5698224;

const WHALE_TRANSFERS = [
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
    { hash: "0xb3f0fa691f5615eb22cd92a026b5b8834b88890a9e0811cfde58b942654bcb4b", ts: 1791290603, from: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 170837, block: 26133409, type: "sell" },
    { hash: "0x689f7005f57a71590029bc8a1f58845220091216de2598f5591dd14ce6ad8e83", ts: 1791288935, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", amount: 233700, block: 26133270, type: "transfer" },
    { hash: "0xe0aa81ab77d5ddfed8abe60fa6ef17041925c415e65c2f278d25ac86c51f2272", ts: 1791288359, from: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 170408, block: 26133222, type: "sell" },
    { hash: "0x82aa0d094084e9f9749a3320de3348ad0742f234980f871e720832161ebdde21", ts: 1791287039, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", amount: 170960, block: 26133112, type: "buy" },
    { hash: "0xa5bb0ef10d6c47fd2d9ff437f7ee010de8a01554c2b5532d317bb22787c3a1bd", ts: 1791287039, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", amount: 170960, block: 26133112, type: "buy" },
    { hash: "0x0c911cf5d6cd82e2945534adf3b8b5609ee61946c4b0a34c28dc3f6dc52ced44", ts: 1791287027, from: "0xe06cdd36c3fb35f6ffb5933369595770da829419", to: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", amount: 254724, block: 26133111, type: "transfer" },
    { hash: "0x0c911cf5d6cd82e2945534adf3b8b5609ee61946c4b0a34c28dc3f6dc52ced44", ts: 1791287027, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0xe06cdd36c3fb35f6ffb5933369595770da829419", amount: 254724, block: 26133111, type: "buy" },
    { hash: "0x5b8702b77a630c5d80a26efdcbad452ecd03a8f039bd4b52f5270d98cc411ac8", ts: 1791279707, from: "0xf733c29e2918271490d8318846f617b16e613be0", to: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", amount: 1745937, block: 26132508, type: "transfer" },
    { hash: "0x6164e79bf6b16eebf434195809e329cac10d2c055f680257ce92b7ddad03d8f5", ts: 1791279023, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xf733c29e2918271490d8318846f617b16e613be0", amount: 1745937, block: 26132451, type: "transfer" },
    { hash: "0x1d7ccd179c22d62d7b07f1c99df057ce78560cbd38e89d203564a365de7d5f38", ts: 1791278963, from: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 170769, block: 26132446, type: "sell" },
    { hash: "0x39164e77adb77cead8c689cf8e950b5de0c6fc3c317ac96725484da4e3d20cae", ts: 1791278963, from: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 170769, block: 26132446, type: "sell" },
    { hash: "0x13262e386bc3346186c0192e8fc986bb48f667b4f6e58cd43e82f1473f6230b8", ts: 1791275483, from: "0xada3344693f368cd0ebf510f26617ad4213bf5b3", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 116261, block: 26132158, type: "sell" },
    { hash: "0x13262e386bc3346186c0192e8fc986bb48f667b4f6e58cd43e82f1473f6230b8", ts: 1791275483, from: "0xb300000b72deaeb607a12d5f54773d1c19c7028d", to: "0xada3344693f368cd0ebf510f26617ad4213bf5b3", amount: 116261, block: 26132158, type: "transfer" },
    { hash: "0x13262e386bc3346186c0192e8fc986bb48f667b4f6e58cd43e82f1473f6230b8", ts: 1791275483, from: "0x1df103c45eac65077b96543efe4ea90d0886a69d", to: "0xb300000b72deaeb607a12d5f54773d1c19c7028d", amount: 116261, block: 26132158, type: "transfer" },
    { hash: "0xd5cf8c57d1f6d6138d9831ac9a0bd29c505f641f3397ca3b780505d4cecc3399", ts: 1791273023, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", amount: 170923, block: 26131955, type: "buy" },
    { hash: "0x6d18feeb354b87f9cafe12f3240c7e517b25653153ea0cdb67ed699a25470e4f", ts: 1791273023, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", amount: 170923, block: 26131955, type: "buy" },
    { hash: "0x1e1aa39e12818ba38b6c795c1f4c538b06fcab6aca0c896ca3b33fa55b923bd1", ts: 1791273023, from: "0x1f2f10d1c40777ae1da742455c65828ff36df387", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 276305, block: 26131955, type: "sell" },
    { hash: "0x1e1aa39e12818ba38b6c795c1f4c538b06fcab6aca0c896ca3b33fa55b923bd1", ts: 1791273023, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x1f2f10d1c40777ae1da742455c65828ff36df387", amount: 276305, block: 26131955, type: "buy" },
    { hash: "0xd16cc0ccc97b32bb48c766f35983b02fbb2311224f168eaf34f4fa2fe5c257ff", ts: 1791272819, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", amount: 171478, block: 26131938, type: "buy" },
    { hash: "0x101d908ce61f0c4dcc2b41b307df2d9bdf30e43f384db4c8cb8cbc1469c4c6c0", ts: 1791272819, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", amount: 171478, block: 26131938, type: "buy" },
    { hash: "0xac1b2c2f7a621edc86110ad59b3ec0c75f0a29f3611fc37925466efc3fd9243e", ts: 1791272351, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xf22a74499a1e85904e4cf8d9ae78978cbeed939f", amount: 288056, block: 26131899, type: "transfer" },
    { hash: "0x6a96b97746e5f6807b29361d219e61b46eca6d68b5d664a25a9000890aaae8ee", ts: 1791269567, from: "0x84988ba7b5e8ca0d68f5cc3a2399cd66ac175d50", to: "0x1df103c45eac65077b96543efe4ea90d0886a69d", amount: 116261, block: 26131667, type: "transfer" },
    { hash: "0x929187ec583d3f1dd6e3c51fd2d901b41c530dd86603823e86996dfcec17cdf9", ts: 1791268523, from: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 129006, block: 26131582, type: "sell" },
    { hash: "0x929187ec583d3f1dd6e3c51fd2d901b41c530dd86603823e86996dfcec17cdf9", ts: 1791268523, from: "0x7ba98b5263b87a206d6d1d6087588e479167700a", to: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", amount: 129200, block: 26131582, type: "transfer" },
    { hash: "0x33d976cff831f935ec2c0dc19148e10d4e5fd3604012c920101a1b860cd1af58", ts: 1791268487, from: "0xf74e4b7fae0e0bbfcd98a2f2800ff4e0229e53da", to: "0x7ba98b5263b87a206d6d1d6087588e479167700a", amount: 129452, block: 26131579, type: "transfer" },
    { hash: "0x8ec4735d01c53474f2bc69ab06b9e3cd57eecbd98e0e4a0f3cc91e8bb72aa865", ts: 1791268355, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xf74e4b7fae0e0bbfcd98a2f2800ff4e0229e53da", amount: 129452, block: 26131568, type: "transfer" },
    { hash: "0xba77cca217dc96117e235996f30de55183ee416cd3d09d81f710394953528a37", ts: 1791267527, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", amount: 171827, block: 26131499, type: "buy" },
    { hash: "0x51dd59d7e2999d3f7c3ef1b86758bf73c517b212ebef1262e2cd113bded7ed8c", ts: 1791267527, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", amount: 171827, block: 26131499, type: "buy" },
    { hash: "0xcd448b02702f5cae2de7909185d7c9c938697b6d4326507a24e13114d81a5f79", ts: 1791267527, from: "0x1f2f10d1c40777ae1da742455c65828ff36df387", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 227653, block: 26131499, type: "sell" },
    { hash: "0xcd448b02702f5cae2de7909185d7c9c938697b6d4326507a24e13114d81a5f79", ts: 1791267527, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x1f2f10d1c40777ae1da742455c65828ff36df387", amount: 227653, block: 26131499, type: "buy" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x07faaf79ce52d727f2cc7ea3d22e43fa75d5b873", net: 7600000, received: 7600000, sent: 0, txs: 5 },
    { wallet: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", net: 1754902, received: 1754902, sent: 0, txs: 2 },
    { wallet: "0x4c21dde8e465461568e4f66551ab6715c0025005", net: 349315, received: 349315, sent: 0, txs: 1 },
    { wallet: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", net: 342157, received: 342157, sent: 0, txs: 2 },
    { wallet: "0xf22a74499a1e85904e4cf8d9ae78978cbeed939f", net: 288056, received: 288056, sent: 0, txs: 1 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 233700, received: 233700, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 208050, received: 256102, sent: 48051, txs: 7 },
    { wallet: "0xf732ebce4e66e48ac2ba592648c62aeeb52d9f73", net: 46575, received: 46575, sent: 0, txs: 1 },
    { wallet: "0x2fb2c92431b35188007b2b1e0b0c717f9b7dae75", net: 14795, received: 14795, sent: 0, txs: 1 },
    { wallet: "0x9a779d68c726bb636f4a57b62ad866fb2ded39c3", net: 11857, received: 11857, sent: 0, txs: 1 },
    { wallet: "0x1485e810d675528c4d56ccc508990a13643d86e9", net: 9589, received: 9589, sent: 0, txs: 1 },
    { wallet: "0xc8fd6e59234ffadda514ab10bf70020de0f8e975", net: 8904, received: 8904, sent: 0, txs: 1 },
    { wallet: "0x10dbc99c90234e4447f0366e8368d688f622475a", net: 8500, received: 8500, sent: 0, txs: 1 },
    { wallet: "0x03cd59f707e0442bf82bf49216ce90500c2bf609", net: 8490, received: 8490, sent: 0, txs: 1 },
    { wallet: "0x35851963d843668e433a1d97fddc4d1974323a6b", net: 7294, received: 7294, sent: 0, txs: 1 },
    { wallet: "0x3e99c419d7441939415177c9f79589e77bc0b3e2", net: 4795, received: 4795, sent: 0, txs: 1 },
    { wallet: "0xc94124792221a2cff88e002a34aa57939ceef1f4", net: 4647, received: 4647, sent: 0, txs: 1 },
    { wallet: "0x6f983e1cdab14ed5b72686df0f308b5a3c5acd3d", net: 2877, received: 2877, sent: 0, txs: 1 },
    { wallet: "0x1a4e5a4f2b185ec6c8054c3eff6824250a0ccfec", net: 2652, received: 2652, sent: 0, txs: 1 },
    { wallet: "0xfd9072f3715419414e2345da949fe5048c839877", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 2138, received: 2138, sent: 0, txs: 9 },
    { wallet: "0x77c98f81d7a5feaaa0ef1e780cda2ebc1881605f", net: 1829, received: 1829, sent: 0, txs: 1 },
    { wallet: "0x311f520e51b3f5a6354d4e620443edb7ad59e996", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x2a76a5be3bca8200f7810600ed9201103746810b", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", net: 1612, received: 684595, sent: 682983, txs: 8 },
    { wallet: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", net: 1443, received: 514265, sent: 512822, txs: 6 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 1260, received: 1260, sent: 0, txs: 1 },
    { wallet: "0xcc282e2004428939ee5149a9e7872f0b4d5d5ec7", net: 972, received: 972, sent: 0, txs: 1 },
    { wallet: "0x4f3889331539ab2ed976dbaf67c8def36deeed15", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x9df14235393c7a9d2bc38db6c12c61b699e094c6", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0xc3debe01ea653562bf479e560e5bd7d907b5d890", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0x980282821e627b5d6c8f99050d0394e885dcdcca", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x5987d62c93f864fff531f79c1f6c8da51eaffce2", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x7c876bdaa5c038e19f633714f622f6def949b102", net: 51, received: 11908, sent: 11857, txs: 2 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 304153, sent: 304153, txs: 14 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 326628, sent: 326628, txs: 21 },
    { wallet: "0xd308fc4ec59cf2779eb75787810f05fc80fedb60", net: 0, received: 7945, sent: 7945, txs: 3 },
    { wallet: "0xd43026d607c66f4ecadd408867e8ba9af05f3875", net: 0, received: 7945, sent: 7945, txs: 2 },
    { wallet: "0x9e95a7b56d70cb5619a2811ecd79d2c190ae70a7", net: 0, received: 822, sent: 821, txs: 3 },
    { wallet: "0x8c44eaff180b7c5823044cfc5c3e8e8a0a23ec66", net: 0, received: 1260, sent: 1260, txs: 2 },
    { wallet: "0x2d84a18d4d1356420f3115e4d11e26680671c62d", net: 0, received: 1370, sent: 1370, txs: 3 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 0, received: 1370, sent: 1370, txs: 2 },
    { wallet: "0x5e83b45dd143d4c3ccfd760749692c792eb9237f", net: 0, received: 8965, sent: 8965, txs: 2 },
    { wallet: "0x8e92d28216ac924bbf01f2e7fe4fffd575ec3f17", net: 0, received: 8965, sent: 8965, txs: 2 },
    { wallet: "0x9f295940caf9c8ee99c76baa8524eb1812e8c23f", net: 0, received: 30822, sent: 30822, txs: 4 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 144417, sent: 144417, txs: 12 },
    { wallet: "0x1644d2477f809cc2c71bccfd6dc9497e3f83210d", net: 0, received: 8490, sent: 8490, txs: 2 },
    { wallet: "0x8df62ab17eed29125d410385ccb619095cc6f976", net: 0, received: 17534, sent: 17534, txs: 3 }
];

const WHALE_LABELS = {

};
