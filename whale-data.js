// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "September 26, 2026 at 08:31 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 279;
const WHALE_TOTAL_VOLUME      = 16880477;
const WHALE_BIGGEST_SINGLE    = 9917424;

const WHALE_TRANSFERS = [
    { hash: "0xe08df0e486555d9c43c0f98b1763c7685f4dc6584e793878ee9c417564ba588b", ts: 1790452571, from: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 167444, block: 26063857, type: "sell" },
    { hash: "0xe4cb7b973412eba274b72de06330df60d807d5e176d070c597b0d0331812cf8e", ts: 1790449919, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x28234c8ba32ff7063c3b96e0d7728e8f3607fc03", amount: 553973, block: 26063636, type: "transfer" },
    { hash: "0xf6d9f8a35fe372f21465418aa8371811b2e46d17071d2645059a20e10bdaff65", ts: 1790448047, from: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 166656, block: 26063480, type: "sell" },
    { hash: "0xe584eb472c88aa51d57ca2d7238332e3fe9e0ab46e8a69cc65905644bdf74bac", ts: 1790448023, from: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 165919, block: 26063478, type: "sell" },
    { hash: "0x33b4f016408514bc8cc851bce2eb7b175ed4515c1380f2c9a4304cfcb00e80a4", ts: 1790445611, from: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 165186, block: 26063277, type: "sell" },
    { hash: "0x92e725e7a423984307425af05869f737fa63c68e24df3fc42aa3d3e76bdda90a", ts: 1790428343, from: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 164858, block: 26061846, type: "sell" },
    { hash: "0x91074daf40ae7529a9489e47465d37365fbb026b35882e71abc647daa42ea1bf", ts: 1790427455, from: "0xe06cdd36c3fb35f6ffb5933369595770da829419", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 200663, block: 26061772, type: "sell" },
    { hash: "0x91074daf40ae7529a9489e47465d37365fbb026b35882e71abc647daa42ea1bf", ts: 1790427455, from: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", to: "0xe06cdd36c3fb35f6ffb5933369595770da829419", amount: 200663, block: 26061772, type: "transfer" },
    { hash: "0xe4f9a53814efb5d6b6a71ba5742417fbb0c2626a02c37f326abc532938cc919f", ts: 1790426327, from: "0xa73072adc6c34859426fcc29bc6ca2cac07c93c3", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 150242, block: 26061678, type: "sell" },
    { hash: "0x235ca6fa27f0fe4c435fb3bfb72e761332e2b707ab054fe5ee305a87a8e97baf", ts: 1790422127, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 26061329, type: "sell" },
    { hash: "0x490b192b5dfc703ccf806de627be0ffbf15627bf2238c8cd27e96417a8e6e7e6", ts: 1790416451, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 26060859, type: "buy" },
    { hash: "0xe6871b5e2f177be640e4359dfa9b8f9aa814e66d222f44f154db02304be50c70", ts: 1790411123, from: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 163068, block: 26060418, type: "sell" },
    { hash: "0x178aedda6283002809bdd35b73fe54e9e49cb99c837ca8a7e6b018203872c388", ts: 1790410799, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 26060391, type: "sell" },
    { hash: "0xd64778ab7876f04ce4a2ae3b568236397070c94f1f5fccdaedad2145c4d4007e", ts: 1790409191, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", amount: 163348, block: 26060258, type: "buy" },
    { hash: "0xbd80c43b2ef8f42b60303b85b73b4a9da721546af08afa2ad2a5bb9aefdedf07", ts: 1790409191, from: "0x1f2f10d1c40777ae1da742455c65828ff36df387", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 137287, block: 26060258, type: "sell" },
    { hash: "0xbd80c43b2ef8f42b60303b85b73b4a9da721546af08afa2ad2a5bb9aefdedf07", ts: 1790409191, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x1f2f10d1c40777ae1da742455c65828ff36df387", amount: 137287, block: 26060258, type: "buy" },
    { hash: "0x54096ed8a79160af0974d217d1a7d2edbdbb697964e54b8b748d3f45b257e202", ts: 1790409167, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", amount: 164074, block: 26060256, type: "buy" },
    { hash: "0x02652dc9feecf3951d44d0397708719c5aba04bb17cd52158e8d4b4645afbfc0", ts: 1790409167, from: "0x1f2f10d1c40777ae1da742455c65828ff36df387", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 116826, block: 26060256, type: "sell" },
    { hash: "0x02652dc9feecf3951d44d0397708719c5aba04bb17cd52158e8d4b4645afbfc0", ts: 1790409167, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x1f2f10d1c40777ae1da742455c65828ff36df387", amount: 116826, block: 26060256, type: "buy" },
    { hash: "0xfa2c35668b761f585cfb1dfe1c2847d7cbb65998f2a5abfd6ac9890804a8f6dd", ts: 1790404283, from: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 820330, block: 26059853, type: "transfer" },
    { hash: "0x4b14542a87a9075b8d14c81340bf0699c04c016142a68b0c449cdd061e5486db", ts: 1790403431, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 26059782, type: "buy" },
    { hash: "0x9be3a397988cc0211493f98866c3283fa66425ce46789545c037fbe1aeee3916", ts: 1790401463, from: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", to: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", amount: 820330, block: 26059618, type: "transfer" },
    { hash: "0x111ba6a32beb8998f07686c3165b72fc3b75b153cf96d1e24a9b2b95517c5322", ts: 1790401463, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", amount: 165985, block: 26059618, type: "buy" },
    { hash: "0xd661e5f3cf3c55b17a15b82bd405151a85592bb730e82f6797bc40c7d1dd2394", ts: 1790401283, from: "0x09fc9b7545020f6a51d113e495e0a451597969d3", to: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", amount: 820330, block: 26059603, type: "transfer" },
    { hash: "0xbfd384cc3de8d3c0e66435f65f8000e098dc9a1cc32f0b790d274d723c51fa30", ts: 1790394143, from: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 166106, block: 26059010, type: "sell" },
    { hash: "0xf3964ec8ab85489ea5d329714ef9a95bc44f3636243dad0b665f0083a53ac721", ts: 1790376227, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", amount: 168153, block: 26057526, type: "buy" },
    { hash: "0xd7bf670076f5c935d56f88b778c8c6577012142b1fceeeea79b74625092f0bfd", ts: 1790370203, from: "0x66a9893cc07d91d95644aedd05d03f95e1dba8af", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 138082, block: 26057026, type: "sell" },
    { hash: "0xd7bf670076f5c935d56f88b778c8c6577012142b1fceeeea79b74625092f0bfd", ts: 1790370203, from: "0x006d0e0d006109f0020f3050000a713780b7b000", to: "0x66a9893cc07d91d95644aedd05d03f95e1dba8af", amount: 138082, block: 26057026, type: "transfer" },
    { hash: "0xd7bf670076f5c935d56f88b778c8c6577012142b1fceeeea79b74625092f0bfd", ts: 1790370203, from: "0x2309fcccf962a358e7b4e2de43662a846bb64067", to: "0x006d0e0d006109f0020f3050000a713780b7b000", amount: 138082, block: 26057026, type: "transfer" },
    { hash: "0x37d7d215735c5d26932dc87e14031238d3d579e610168bfee057fc516cd1a0aa", ts: 1790370179, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0x504ce9e51e508c85a161058c12e970a903d482fc", amount: 153253, block: 26057024, type: "transfer" },
    { hash: "0x46c1ce24ef85523d6a50097786a6d8281cca47ea2704c236396ca86182d2d801", ts: 1790368619, from: "0xdc2692379ef39a8a115ccdf56080645d35d1eb20", to: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", amount: 9917424, block: 26056894, type: "transfer" },
    { hash: "0x3565d5930e926f0a115deb8d1894ea19318cf701c8783f162b2a7dd5cd7912c3", ts: 1790368259, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x1ec1e78a1a059bfd69c47cc606f96281cf966ed4", amount: 100000, block: 26056866, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", net: 10014455, received: 10014455, sent: 0, txs: 2 },
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 861460, received: 861460, sent: 0, txs: 2 },
    { wallet: "0x28234c8ba32ff7063c3b96e0d7728e8f3607fc03", net: 553973, received: 553973, sent: 0, txs: 1 },
    { wallet: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", net: 331567, received: 497486, sent: 165919, txs: 4 },
    { wallet: "0x67336cec42645f55059eff241cb02ea5cc52ff86", net: 156195, received: 247675, sent: 91480, txs: 4 },
    { wallet: "0x504ce9e51e508c85a161058c12e970a903d482fc", net: 153253, received: 153253, sent: 0, txs: 1 },
    { wallet: "0x1ec1e78a1a059bfd69c47cc606f96281cf966ed4", net: 100000, received: 100000, sent: 0, txs: 1 },
    { wallet: "0x09fc9b7545020f6a51d113e495e0a451597969d3", net: 57144, received: 877474, sent: 820330, txs: 35 },
    { wallet: "0x72401fc4f4761e69b6d59ec0c4db084b6c44d4c7", net: 33355, received: 33355, sent: 0, txs: 1 },
    { wallet: "0x64794b027f5d8ae9e7e5b333c8ab2ed8cf730ed1", net: 33144, received: 33144, sent: 0, txs: 1 },
    { wallet: "0x0a1354ba9359d7aded40faf11bbe590e2c14bec7", net: 33144, received: 33144, sent: 0, txs: 1 },
    { wallet: "0x769981b6ad0a44c8cf43ae297ee8e7fccc9f451b", net: 32192, received: 32192, sent: 0, txs: 2 },
    { wallet: "0x2c4a0fbcdfa7e4b841b0574550fd5aa7dbb3079e", net: 27534, received: 27534, sent: 0, txs: 1 },
    { wallet: "0x663be09177f64abf43694177c05300a7fd28667d", net: 18082, received: 18082, sent: 0, txs: 1 },
    { wallet: "0x78bb5b1b173ff84d0ec7b9354e791152d66ad780", net: 16438, received: 16438, sent: 0, txs: 1 },
    { wallet: "0xfcb931c2aec4464c0a256c1766bf868493277cfc", net: 16301, received: 16301, sent: 0, txs: 1 },
    { wallet: "0x35851963d843668e433a1d97fddc4d1974323a6b", net: 13729, received: 13729, sent: 0, txs: 1 },
    { wallet: "0xec45a4c5cfb7b3030078649ad070441de83a0999", net: 13652, received: 13652, sent: 0, txs: 1 },
    { wallet: "0xf68f7da978ca3cd9acbcb80672c9bde2e050b35f", net: 13151, received: 13151, sent: 0, txs: 1 },
    { wallet: "0xce7219393216eee8f9768809494f1d2fb84d89ee", net: 12776, received: 12776, sent: 0, txs: 1 },
    { wallet: "0xe57624df33b86b82a594543aaddc7032e0a0d264", net: 12511, received: 12511, sent: 0, txs: 1 },
    { wallet: "0x5c9d1a6c9753e711db9b880b0404cd653a0e0032", net: 12329, received: 12329, sent: 0, txs: 1 },
    { wallet: "0xf301d11baaefe7e724865ce410d4cbd9c099a307", net: 8767, received: 8767, sent: 0, txs: 1 },
    { wallet: "0x58a3bfcc09411fc55327e262ee140bfe10905987", net: 6671, received: 6671, sent: 0, txs: 1 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 6671, received: 6671, sent: 0, txs: 1 },
    { wallet: "0x6f983e1cdab14ed5b72686df0f308b5a3c5acd3d", net: 6164, received: 6164, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 5610, received: 5610, sent: 0, txs: 4 },
    { wallet: "0xec3b05d01d02b58b2392d8fccb7823d0c0094a00", net: 4441, received: 4441, sent: 0, txs: 1 },
    { wallet: "0x7b7561db3020853674935f651dd1dc233c194a41", net: 4384, received: 4384, sent: 0, txs: 1 },
    { wallet: "0x74f8e6127e91d044f970d04af1e85bcd38d8acce", net: 4293, received: 8653, sent: 4360, txs: 2 },
    { wallet: "0x2f9af2b6aedb07f4c3c908d0cf43735a0d74c128", net: 3319, received: 3319, sent: 0, txs: 1 },
    { wallet: "0x23710ee704d16e42e1a03d1d2dcf3b62ea9b961c", net: 2403, received: 2403, sent: 0, txs: 1 },
    { wallet: "0xf3b41e096731dffff3cb4a28ad989a825ffd9d67", net: 1507, received: 1507, sent: 0, txs: 1 },
    { wallet: "0x1b0b1ad3e6a2fb69c48c2913fea012bc38f0a2e9", net: 959, received: 959, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 833, received: 833, sent: 0, txs: 15 },
    { wallet: "0x5d73e31d8588d928d2dcbea05dc8038d86730bf5", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xb8d2d5475731da2d2828573faf0fb7a508d3a3e6", net: 593, received: 2317, sent: 1724, txs: 6 },
    { wallet: "0x311f520e51b3f5a6354d4e620443edb7ad59e996", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x27ace13e9949900af2c5fdc1ad2aeb36b1e443a0", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x11ba910dad5d2f04f3e4790252213fd3e545a1c9", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x980282821e627b5d6c8f99050d0394e885dcdcca", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x322ec64e23a20354808c0b40fbc81f1bf877a949", net: 9, received: 9, sent: 0, txs: 2 },
    { wallet: "0xe52148d1d400b8b565c331eb348df1d4f3457ff3", net: 1, received: 38512, sent: 38511, txs: 7 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 274311, sent: 274311, txs: 38 }
];

const WHALE_LABELS = {

};
