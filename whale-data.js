// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "October 8, 2026 at 12:38 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 164;
const WHALE_TOTAL_VOLUME      = 4898510;
const WHALE_BIGGEST_SINGLE    = 629172;

const WHALE_TRANSFERS = [
    { hash: "0x7fb23ce629d232447a4dac62ac7ed9a5b81c324b64c8e3f2c45967a373307c58", ts: 1791461087, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", amount: 106203, block: 26147564, type: "transfer" },
    { hash: "0x658588cc453bcae46fa447c920d838172ceede8f52e7a919ca8920b155f5d310", ts: 1791419543, from: "0xe06cdd36c3fb35f6ffb5933369595770da829419", to: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", amount: 286904, block: 26144115, type: "transfer" },
    { hash: "0x658588cc453bcae46fa447c920d838172ceede8f52e7a919ca8920b155f5d310", ts: 1791419543, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0xe06cdd36c3fb35f6ffb5933369595770da829419", amount: 286904, block: 26144115, type: "buy" },
    { hash: "0x6754e9b86f2135d0c063d6e180014b3ef8db4d2c09df31873b4b3b38f7353078", ts: 1791419531, from: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 287119, block: 26144114, type: "sell" },
    { hash: "0x6754e9b86f2135d0c063d6e180014b3ef8db4d2c09df31873b4b3b38f7353078", ts: 1791419531, from: "0xf22a74499a1e85904e4cf8d9ae78978cbeed939f", to: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", amount: 287550, block: 26144114, type: "transfer" },
    { hash: "0x3e4a46c493e7049dd992dbb75079de4b2cf6af8486a3cfc7c270b40ed31447f0", ts: 1791417275, from: "0x8ffe1ce5721dbb6858036c0bad5af6126e9fe8b9", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 247000, block: 26143928, type: "transfer" },
    { hash: "0x666dd868175a29c0dc3c521c8decd91425bb5c21d09c964c018475721443389a", ts: 1791416663, from: "0xdc949e168631246d05d0b12c6ac9573d2e8da185", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 629172, block: 26143877, type: "transfer" },
    { hash: "0x9dc937266804c687be6ef5faf7c74bdb27578315a527b6f8710847aaa04a9597", ts: 1791416603, from: "0x4015afef85dfe9020c37e094fca46e56854dc5c6", to: "0x8ffe1ce5721dbb6858036c0bad5af6126e9fe8b9", amount: 247000, block: 26143872, type: "transfer" },
    { hash: "0x19f90f490d821b0d70ea750641f8f67f58bd3a052633aacc167b5d0cbe8acef0", ts: 1791416495, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xdc949e168631246d05d0b12c6ac9573d2e8da185", amount: 629172, block: 26143863, type: "transfer" },
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
    { hash: "0x56960b5188f624b7b4ecb590e7d5c8d0ab7f63a99a5fc1402e5caa6982401279", ts: 1791384095, from: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", to: "0xe06cdd36c3fb35f6ffb5933369595770da829419", amount: 115267, block: 26141171, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 523291, received: 629995, sent: 106704, txs: 4 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 427502, received: 542769, sent: 115267, txs: 14 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 269779, received: 269779, sent: 0, txs: 3 },
    { wallet: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", net: 199995, received: 199995, sent: 0, txs: 2 },
    { wallet: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", net: 198040, received: 198040, sent: 0, txs: 1 },
    { wallet: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", net: 197297, received: 197297, sent: 0, txs: 1 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 106203, received: 106203, sent: 0, txs: 1 },
    { wallet: "0x8cc85c69a540fc453427176036e996931ed06418", net: 95342, received: 95342, sent: 0, txs: 1 },
    { wallet: "0x19888e92ee029e6641e178ebd2346fc1f7d845bd", net: 41644, received: 41644, sent: 0, txs: 1 },
    { wallet: "0xe8446569ee2311ac5c455cf97e6eb5cd594356ea", net: 24110, received: 24110, sent: 0, txs: 1 },
    { wallet: "0x9f7200b9b336fd27b57094910428c0c9e59eb657", net: 17534, received: 17534, sent: 0, txs: 1 },
    { wallet: "0x5bfdb327168803a1b33c6062ef28ac0e3fe88e31", net: 15157, received: 15157, sent: 0, txs: 1 },
    { wallet: "0x03cd59f707e0442bf82bf49216ce90500c2bf609", net: 7208, received: 7208, sent: 0, txs: 1 },
    { wallet: "0x0a1673ae3f75744178a4aa50f76c4299c6f02e18", net: 5342, received: 5342, sent: 0, txs: 1 },
    { wallet: "0x04cfa080e66a42f9e08a9ace11b3c86f05f4e4f9", net: 4658, received: 4658, sent: 0, txs: 1 },
    { wallet: "0x5532d65385e664eef604976354608a9dc4d9ae7c", net: 3699, received: 3699, sent: 0, txs: 1 },
    { wallet: "0x40b2f1262a394a69f4446ceebca52bc58eb92bf4", net: 2329, received: 2329, sent: 0, txs: 1 },
    { wallet: "0x8e116b4bf95b990b9240e84ad674bd10c0b0759c", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x89741b45a5f35c42735508e3e586e55f275c13d0", net: 1938, received: 1938, sent: 0, txs: 1 },
    { wallet: "0xee24dffca375eaa986e0159cbec5994f759c03ce", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1168, received: 1168, sent: 0, txs: 11 },
    { wallet: "0xfd9072f3715419414e2345da949fe5048c839877", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x1f0d9b1835e7b2844d94b0038c80ac387a439fcc", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x907262769c7143796829c3d9595d8d4007e65cd1", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x3c2d4c38e1e28d7f09409c196f4e6658ce83060f", net: 959, received: 959, sent: 0, txs: 2 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 959, received: 959, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 959, received: 959, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 774, received: 774, sent: 0, txs: 2 },
    { wallet: "0x3c9108700724d9d96cff2ac8979d6ad2a8d469ae", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xcc282e2004428939ee5149a9e7872f0b4d5d5ec7", net: 501, received: 501, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x7d8eb200c45c273e3bef1bc55c09f76805158e96", net: 42, received: 42, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 29, received: 29, sent: 0, txs: 1 },
    { wallet: "0x111117c5c0a3a28efe871fea13dc093909d11111", net: 10, received: 197, sent: 187, txs: 2 },
    { wallet: "0x05e7c72498fdecf1c3638b66af2740adea8d7f8f", net: 2, received: 20868, sent: 20866, txs: 2 },
    { wallet: "0x81fc131b87abe507d647ddec6a49e1a0540f54b8", net: 0, received: 4658, sent: 4658, txs: 2 },
    { wallet: "0x0955c444c80e5ceb80174334493ac7504f483714", net: 0, received: 9626, sent: 9626, txs: 2 },
    { wallet: "0xc0dfdb9e7a392c3dbbe7c6fbe8fbc1789c9fe05e", net: 0, received: 9655, sent: 9655, txs: 3 },
    { wallet: "0x77f40a04c3f552a0dfe82282de73db30d34c6e25", net: 0, received: 9655, sent: 9655, txs: 2 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 315255, sent: 315255, txs: 11 },
    { wallet: "0x7764c8727dab012fce187df0736dab2b00ef691c", net: 0, received: 9863, sent: 9863, txs: 3 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 658037, sent: 658037, txs: 28 },
    { wallet: "0x66a9893cc07d91d95644aedd05d03f95e1dba8af", net: 0, received: 5241, sent: 5241, txs: 4 },
    { wallet: "0x8feab81d36e7576107d5de0758c1b839be31b4f6", net: 0, received: 197, sent: 197, txs: 2 },
    { wallet: "0x22cab81e0fee2bad5b015dbbeb6a374a1b8738de", net: 0, received: 4110, sent: 4110, txs: 2 },
    { wallet: "0x6532c2c4d01f27712586509a369166b5948c442a", net: 0, received: 4110, sent: 4110, txs: 2 },
    { wallet: "0x689c30597e93dfd0e7877c77bb26ff19c6f9ef07", net: 0, received: 22780, sent: 22780, txs: 4 }
];

const WHALE_LABELS = {

};
