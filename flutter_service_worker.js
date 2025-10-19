'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1a4a097e17ceee03ae7a8df9253ac51a",
".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1bd73f45936d75ce848ae8aca2edaf2a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b8d9019cd0bd78fc517de5f3b04d92af",
".git/logs/refs/heads/main": "a32d854a25774583965ced27c0149db8",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/02/b1c66b09d8a9b5588d3f5dfd6fddfbcae7ccbb": "cf72c7ef5e509f3a3cccec3d363c2730",
".git/objects/03/d310e46fd3e55ecddd7a37cc1037687999d7d4": "8979a445850aee06801f678ff9976f10",
".git/objects/04/5a455e0d4e43655f7ae61e06db13ce77153d2a": "d0c09a7275bca1e91e7ec4c4eed1e5b1",
".git/objects/06/2b2c8ab5038f7ae3dff57b7baf0eeb77cd6ed2": "05d9f1e633ea12319fa31ebf03907d7d",
".git/objects/06/4d23da8cdb486f1f6d197bacb589f51192a3ed": "2fffbfe9915c3a0931939ce83fe93be6",
".git/objects/06/55e314c7c06c4e42d8966b5b27c983ba8c6dc5": "2bb6c2fd18c8c243cedd5760ce505811",
".git/objects/07/70e9aa00d2a8d4efc62a9aad89822f43c419f2": "1a517122d60ab101a5ab1c5194db08b1",
".git/objects/0b/11d9ad5bcea1dbb26e63dd473e1e3732278154": "6c9b514956b2cf47a30d0bb5bf44d7c5",
".git/objects/0d/1d3e9b78c665de7f9f58110d7431b8eb04feb8": "57755ccbfa681a170632b89e2b47c2fa",
".git/objects/0d/1d848868fdb28e8d33dd980a80833722c0e705": "fe9ffc9b7a71231d8224ffca64373f8d",
".git/objects/0e/aae67318df12538917c70e0375914156e13338": "b158eead36ac6aeaa5aab941cbc11d20",
".git/objects/13/92733247ed624024e15bcda52cc0e0a1dc64af": "d2ae3725001afe98b476aa169c3d819a",
".git/objects/16/10bf5bbf53853792df981592f44129c2eb6461": "24af9edfee492b9e8eeadde9db227db2",
".git/objects/16/db9f3da8c50297c84beb824c49af40e877fbc2": "b6106e23af127d0edc97420ecf4792e6",
".git/objects/16/f9c3f862782d34b09e2e5fcb32c7527871dd1f": "4859de70a95b2afffb92818fedec27f3",
".git/objects/17/744a48681753ef0c3baa0be7a75df1cc1a8449": "eac02bbc29c105718519bf85cbcfef38",
".git/objects/17/e24ef2cd82bdbd5a4e89fc534e20a0cec542b2": "f9189a1151a2a1595d99815d510ec8f4",
".git/objects/1a/35eb0f3b9f868bb465b9a0823d060515a5e392": "56d4c63fa0fedb1ebd5cf5eb6a320eec",
".git/objects/1d/3a4a33d91e7bec7de00a3dd83e3739eb1e7b0e": "1c9ad13c8e164bfc2198730688b5d790",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/21/270112e1cbf5b3ee1b8b91767ec1dbbbff07e8": "3f1c3be394627dd22b81094528413918",
".git/objects/22/dacf4c876149434c72c23a1d3d1ca0bf5f05ed": "e8b829744b9b237fcf6185f4e7227e08",
".git/objects/23/6370d16aec4c9d938d3825c050e495de613256": "53e57eca10959f8c0721c66eebd16175",
".git/objects/23/feb39f09018542da2ebd1413b288fca2d89c59": "52b25ac82cf5d441d764f92b0ff323a1",
".git/objects/24/2c53ccb5b4bce1be3a7e1f84965a8007d9ef6d": "c57bacff9da59ef0e0efb59c60282cf5",
".git/objects/24/6a861a77e28073ff254655f032b155c3b2158c": "79770b75cba5c9b62bf501c3931e04ca",
".git/objects/26/118aef7c37abb468cbedd60fa423567b74fbd1": "6e277d66257abc02713e422d15a52e54",
".git/objects/29/252073c381581102f7f01a7f864c0a4af3ccb5": "98c5868fa9663d06019824ec79df75c8",
".git/objects/29/30b81361ed99978292d94748ae8cfef3089c6c": "008bcc798e197a39c5c9db49be6fd89b",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2b/5e0370fcebeb63895e70af8684357792229d21": "d16c9c42760d39a5163852e793b08d69",
".git/objects/2c/dade254ebb4012489053db0f38e059d9d3b03b": "69b878540fa8bff79365709db8ef9a77",
".git/objects/2f/a7f9f3f2e2e71625ce46217bb71e0a223af089": "54b7852bba5e2af67863a6c21e5891a3",
".git/objects/30/b8933d23611fc4a7ced409fadbed07cabfb91d": "f8bc30032528f7cfe23f5b745971f7d7",
".git/objects/32/782ed884ac17fe6dfa929676ede8b87a2e493a": "63081b582d3a41b63b0cb1db520f0c79",
".git/objects/33/dae7970f7bcb1b214af766de9b4caf57e057ed": "8ead93f0519c8d25f25955b8ad846948",
".git/objects/34/aaf6340af2404403c6aa8805b7bda12d852228": "709605e2a9a68d2fa42aad50f1da35e1",
".git/objects/36/8c4c7a4af189a8cee7f0156ed1482c2afa7379": "19f613c10298b33f8fd81878b9d3e796",
".git/objects/37/469896389136f4788f47d542800ce936b3eb12": "3eb174183df3984a1dc443bc5cada716",
".git/objects/37/4efb40f8999f987ca362c4a39d1b1572b1326c": "3497551125a0b1130ec14f35135a1a84",
".git/objects/37/6306f7f37e23961bcd3e308a7aa35c95c9bcf5": "59171e18baf6764199bead6598d2913e",
".git/objects/3a/ce84dea034c4cace0d8322ec09c1a59028bc80": "c3186da8f9d94114a97db7984163c7be",
".git/objects/3a/dccfeaf18e09bb347acebc2762ece032f5a8d5": "74913b794a3b2aaf6102c37469e7d155",
".git/objects/3b/bad2a8be022a5bfa26e33cd1b5b7824a51bc7f": "b14c072cd4a2b08ffbc12220fd1293a2",
".git/objects/3f/61230143d7d727beb0e564d13fed4c744cceec": "07be5298d3c9a4ac2c7881a829762437",
".git/objects/43/beb16ae3cdef763cb70207e023103d9882b996": "63d1039ead48a479ceb80012ee5388c0",
".git/objects/47/44337bf9aad07279e7b64a0cde913249c9bbdd": "dd923a03da8f093056f51702a06dc0f2",
".git/objects/48/98e297a96884b5b3c438e9210c3bbb5010f245": "cbc876a7baad681a504f13f255f1ade8",
".git/objects/4c/82c2562281efadd230fdd5f3ae123274c018fd": "d3174180826409b4fcdbaf1fa19cb957",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4e/1b333b9c323be39c82c411065e46fc611d8199": "cdb8a495c9d8d97149add2d47e811278",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/50/a5770d840a44970858af367411f1e987f37480": "c7ad5501dac726ea88843e7f443454ce",
".git/objects/55/2992bd744f660883ffa32fb05bed1716e571d1": "912d92250fcaa072bedeb6e2eb745140",
".git/objects/58/97064e3bae77508870d83e4c9e23568c36a677": "9133cab306d15d88267064649cef0896",
".git/objects/58/ba1672b9d934bac41ca24e8876f9a99842e351": "3edd79bfdb7572e1951d96c08639d1dc",
".git/objects/59/775afc3812d291d9a9df395b41ff33120596f8": "be94765866a86061c3561945cfe2381a",
".git/objects/5a/baa9455473bcf377cc5ca943de946b3ce096f5": "34671a8fb344553a56858ae0d49592e9",
".git/objects/5a/fc0cfb0e1a1177016e5b51228abc35d78543c8": "3d010c39e8ca34b36b1676a4b084a214",
".git/objects/5d/87568cea5655f343fbf466645e81f6a887e31e": "918a2cc56d41f6bf721321a1157e1505",
".git/objects/5e/053d23b5a865d59825d44574bd7767eede11e4": "1484cf71426c2e069a9206b9207ab3ca",
".git/objects/5f/01b82267b998ebc37d020095c4163395fbfefd": "38bc87378cbd91f3d4ab4ed49740cae7",
".git/objects/60/10a63ccd4ebe357608a77c7547aa6f6e45d183": "a6a34bc757dd5387e9f4d00634f07678",
".git/objects/60/128cd9feb42ac1e117e8eb826af400c0f42ffc": "65a05d8645f5e60b9611c63212e81411",
".git/objects/60/cb6bb22f01cef6e0c58dc9fcf05361958022ea": "a98870ccc824b49f424863ad030ce780",
".git/objects/66/71f04154488fa37eafc35650947907d1b2b3a6": "01c749aa618a985d9a25998943ff15a2",
".git/objects/6a/06d3400ed1a72740cbe62650a1c3e8cc409af5": "16119924a093c84e1b59ca2ab7ec18bd",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/d541eb2e16eb4add7d3f58aa96c2abb2b1b4f0": "ef2338e30d36dcd23e0933bc7aaa9045",
".git/objects/6d/f201d12e7321403c2cb66cb19749f5a05f5e0b": "295a542fb28f2cd5100c85749e3f69de",
".git/objects/6f/dfc35d8927fb55f4801327458893f02d1bd278": "88d91cbf3aff82ced976b343bb8f56d1",
".git/objects/71/0fad74aeb3dc96a663814f4f59084ecbfb3102": "8b11448b16ade654c57e4d86a99c8872",
".git/objects/74/781b02c61861b0d45e978d67e03d4117c84b00": "a0c53dceec3e146176270a9d2deae4df",
".git/objects/75/389a58d208e0e8606c122ac03f687e6f5e3b19": "d8487c4dcc081e74aac2786799fdec3a",
".git/objects/78/c627e918563efd0ef2324da3c09582148db0b6": "05f3f59c5869b1b440b3c46c620796dc",
".git/objects/7a/1c68216ce7c2df60e54f0553b9bc111e5ec1f5": "2cf9ad427b8158b14e824b4a8b14c516",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7b/498d31051efeeb4b695c5beccf414475554b5e": "0095655a17745bcda3696e7bdc6a29bf",
".git/objects/7b/aa1642a798064ffa4e8e9b0a1892bfe1729734": "210dbdf518e1cffad82b5319685ff73a",
".git/objects/7b/b70cc4e7451f73703708e8615a7801fb2bfe68": "283c313357b5735594124b00daa4f05d",
".git/objects/7c/089c1c826b913915f612f1d8a1ae8e1db1b768": "fc36494607cd12cdf540e8d7d9e254d3",
".git/objects/7e/0ed4c2c40b8fe123ed5b85693b97f52433cbd6": "76103125ef9a241e5665ef09875a74d9",
".git/objects/80/66306cce7145354b70351088d6a2c10b7204ff": "f6da2b5cd738f8c7d0e080615ebc2e24",
".git/objects/80/e803e58ab9a2131a5cce82db544d2fd6e1c83f": "b0ecd634ee792cf4e17ee7e2b1a95257",
".git/objects/83/e3537151ea083e53b4369865577b203a69df8e": "cde9540963505530b3de31d109f8866a",
".git/objects/84/1ab19895b8eca2092549c1b6a5bd87b8dfafd6": "c7785646f7bf458eccc2e5debca9adc6",
".git/objects/84/d6611d6a021404318ab495a6e3371c177cfc28": "854882019dc85a94802bbd9453d72de1",
".git/objects/85/aca9252dcfe956467c3a5b53fde7b22b86691b": "51ec3ceee7b1bccced9343c61b879482",
".git/objects/87/0859ef3c3a746a4008e7ba5c2d389a18340d92": "91bc6d41d0d759be43851361a40c6736",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/b28a6710d38f232dfab3472701656cf21d5310": "e37e7e9e18dd4b547fa777fbad4a79b7",
".git/objects/8d/b85c5ff7332f2598afca4331108ac2e974708a": "613262e0e2a5c429a217631fab39093c",
".git/objects/8e/44350f485ab54b41eadc2e8c659c4c263e9357": "9ad4c2dadf5279112b0eb97a684b2c32",
".git/objects/8e/d84231439d4b3884fdace62e7900144d920730": "175bd930f64150ad02e66f51f2db817e",
".git/objects/95/8216b6f6318c49a3335f6dfc8674f0e4779109": "dbab9287ee7954494814e0ae368112a0",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/99/994b722df77f674803d55013bf37818f47faeb": "996b3007894451709ddd6520eb61ae04",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9c/2272017c3fe5205c93c25e2328e5837a52c40b": "70033e5ff5b098b1a90044e182f0adda",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/ad/73f09b19e34d5533cbcc9582cb8da3432a91ab": "a4da0596b66e84652cd6dc65f9a2a54c",
".git/objects/ae/a65e4bb061e62aad00363f4afeca8c53206575": "3a8b6bad55c14f39f7aeede7afd8f6e3",
".git/objects/af/eaaff5e04b8bd437829dfa2dfa4509fd9d47cc": "9c627a238518c72b628ae44434cf8eaf",
".git/objects/b3/5a9cde7a3a82f1b3721e89a2ff581c8683f043": "6081ce6c5dde506a1ed9bc15bed18e0a",
".git/objects/b3/e631fca017a18c0ffad814738af6578dfc58e9": "b06552a21b035f581f0bcd59ef3e17c3",
".git/objects/b4/db871a876645584b7b9d76090b8ad62f12866b": "227ba64e2756f92e44153d6fe3d97e23",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/993b97c7acc6786978ba35c0b2d740ae82d574": "4fecd2fb34b07d133f78c7ca5b3fe09d",
".git/objects/b8/53214a8f236d9372368d6255bd331818137c10": "4854f4bbc9c871f9677e79ec4e291cbe",
".git/objects/b8/f28c45176fd1a4c0a58e7e3bad8b4069fa3ea6": "26c0124c46eeab4ccfa055d5c97c9744",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/2784efe207dac508dff7a93879a9ac9162e24c": "0ffc1a913b5683a3bcd5fafdc811caa8",
".git/objects/ba/b3ba9795dcecf9e755b117f2f10026389d98c1": "e22dfcdf29e46d349f13e5d86d9b028c",
".git/objects/c2/b212e2bf5c85aae041a2128f1ee8e33c11b047": "30500f05d77d957485defccb5affad5e",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c5/1a8e04d6fc032ad9c6c07e73b8a90a63b2464e": "bdef76a22ccd8528ebcaf363d9638254",
".git/objects/c6/887edce513afab5057c11557825adcc1ead653": "833c68dec5e8c63d9daad51be6c76855",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/ca/6dc2b2214d67fd2b5f557ab8c5eb82cf12e156": "08e1618c1a41329cbc5f5775c6f6ca98",
".git/objects/cb/c7fe1221cadae357a680a0c57b856e1f6c0eaf": "201db21f6891c7eaf7ebcb82c25c25f8",
".git/objects/cd/c5feb522e29b7ecbe3d22626e4e1e72f4485e3": "c38341a214d2d7818d12dee7318eb30a",
".git/objects/ce/2e66dcb9abf9738e919e87355259c33f7a3de2": "071d7f7ebf14189ba2df2b09f2bc3f62",
".git/objects/ce/5579988c119e2e3e150ed6b0f672cc459b1eca": "dfdf3a46188095efea18dff2b5b8d322",
".git/objects/cf/0ef1e96b923d7fee55fb20a865dfc12212228c": "8de3a7f5240d4bd5cd23b21fe6cdf2db",
".git/objects/d0/5cc495a9b199d633b5accdde9001cb80c1c3e2": "0e0b1bf1d77edd9a87665116c08ab444",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/9f398735283c4809a303ed08eece3e65bd286f": "17cc8f342be031bd0f3afeed42d7c61d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/b7ea4fb8961d5d6c445f4baf5f904c030fe3ac": "dcd6c658882fc468450accee832bd38c",
".git/objects/e0/05470d212697ebc72c3e3d1342d35bb6c652fc": "fa9e508441a339e980a450c7d9289ba1",
".git/objects/e1/0991ed1e0027aae63a1b9146ff16bfa282bc23": "90a00859fe05eed3211e16e7c10725a5",
".git/objects/e3/bb5e604a06ef7fd4cd2c0f44764f8ecaa69724": "1f0603304a7e61625fd40023e3b19472",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e5/38c60a5e3bffe03e0a2594b26e449f628ee8af": "1dc2f62e4948231bca3be0a8999cdb15",
".git/objects/e9/6ad8173b11825de25a1002a498421f288c2031": "67f08dd40d64dd21b1886ea475d2b904",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ef/40d9aef8eb10a3584afb60f25c7e3b16bbb419": "bc91e8e3b76c0f22543a47b484ca516a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/af392fd5137f368bee615714f30592db99033b": "953cf38116d9fa8d0ee1de08bf841208",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f9/87902c0d069861fb125288485c7a3704a726a8": "19fde3125b7a55ebe818e3a5ea307542",
".git/objects/fc/ee511d4694159f469681c679a5bebc2b2244ae": "1bf35ca2a6459d2567a5facc7c838657",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/ff/a0059866e6945802e19906c9e42989d85ea41e": "d3a3cb7ed9887cd38901ab608b7b5672",
".git/refs/heads/main": "0bf58acf5647ac80f5902949b60afe07",
"assets/AssetManifest.bin": "191f40021a020d8ed4640c7ff9eb54bc",
"assets/AssetManifest.bin.json": "f56602cb9fc9d29ffea2aec871f91b87",
"assets/AssetManifest.json": "3fc7dabdca341ceb075b07b5dbb12735",
"assets/assets/amusement/disney.png": "064e5979629beb00b4b1210b959e9c15",
"assets/assets/amusement/fujiq.png": "d04ae5ee19df63279348662fc11a1dac",
"assets/assets/amusement/ghibli_park.png": "6508574f0b71f523a284291e5b854976",
"assets/assets/amusement/sanrio.png": "0b3973bf98d133b038369e0d1fa2f2ec",
"assets/assets/amusement/universal.png": "d48baddf5c2d0d799245e238c148e8af",
"assets/assets/anime_logo.png": "58f784107c4f10f823ee3a53be47196b",
"assets/assets/banner.png": "9ef7727a54e9419e86104f3c5c70d2c6",
"assets/assets/cafe_bg.jpg": "78f2cecb2f507193b1c3d250e4b154ec",
"assets/assets/Cerydra.jpg": "32734effe7aed6f53aa1531b7389ddf8",
"assets/assets/chibi_logo.jpg": "64eedd90f1fcaa61d40a7be64e392364",
"assets/assets/dancing-cat-dancing.gif": "0fb9257d10d448b2061776116be34294",
"assets/assets/events/autumn_kyoto.png": "9e9ce34eee80b1e927c59d7b88f021bd",
"assets/assets/events/concert.png": "eb4fba79af3e3c88f9dc2d08e31ac929",
"assets/assets/events/matsuri.png": "14252bde4767d944e37d6f1ed5788ed6",
"assets/assets/events/sale.png": "83b1855fc10b3363c1f205504373c7d6",
"assets/assets/events/sapporo_snow.png": "f0c2231f2e558364dc93183dcd3e31fd",
"assets/assets/experience/ghibli.png": "1668b68938d9e9a7909aa2a6053f255e",
"assets/assets/experience/samurai.png": "f09492113589b7912ec9bae2ae9a986b",
"assets/assets/experience/sumo.png": "5dbabf42b72a27df40053f787a4ec97d",
"assets/assets/experience/tea_ceremony.png": "f961acc9eaec1796e2926fc21faedf1a",
"assets/assets/fonts/Poppins-Regular.ttf": "731a28a413d642522667a2de8681ff35",
"assets/assets/fonts/Poppins-SemiBold.ttf": "e63b93dfac2600782654e2b87910d681",
"assets/assets/food/dotonbori.png": "04f07c94d792c26ae49abcfe5c7151fa",
"assets/assets/food/goldengai.png": "b95bf9493440eb572a260bb58f8506b9",
"assets/assets/food/nishiki.png": "18611fc1ab475b99cc81ce581919ed60",
"assets/assets/food/ramen.png": "616ec88e114863f2ea1c0b4364e4ad3e",
"assets/assets/food/sushi.png": "8d2500943c044427e46ad6d9caa7f4b3",
"assets/assets/hotel/hoshinoya.png": "a5b81a5e2933ccd5bdebe604213ea1e9",
"assets/assets/hotel/kyoto_ryokan.png": "65b8a3688c41d5665b5b48446db6de56",
"assets/assets/hotel/park_hyatt.png": "83b7f82dc577db0313d3844ceedd5b85",
"assets/assets/hotel/tokyo_grand.png": "d397aa45ee6d9c9c06d7f5a4261d016d",
"assets/assets/popular/hakone.png": "e730cbad2da2489fab214a33ffa126e7",
"assets/assets/popular/kyoto.png": "1c7dc802d371e02201ab2dc4392068ea",
"assets/assets/popular/mtfuji.png": "0ace232d9bb20f98282abeb5cfdec1a3",
"assets/assets/popular/shibuya.png": "7d2bfb2b788715ab76be4b316d144f45",
"assets/assets/popular/tokyo_tower.png": "abb1894171d50a3dbfbeaa3f7d23ccbc",
"assets/assets/seasons/autumn.png": "0414924e8acc568eabbbe748b519619e",
"assets/assets/seasons/spring.png": "1d05ded94bbc030a5d8dd66444b7722e",
"assets/assets/seasons/summer.png": "992080afbc6c386e5f36461eaf3bb70e",
"assets/assets/seasons/winter.png": "9ccbe6d946e5767dd6ee96592894bd70",
"assets/assets/shop/akihabara.png": "060c8b169620b55f288e2cea7e31b436",
"assets/assets/shop/ginza.png": "1627b87645b29d134c6af57aa207c850",
"assets/assets/shop/nakamise.png": "b0711656419c677adc0551437a7a3608",
"assets/assets/shop/omotesando.png": "9fa190f90de60add15323c8db821a765",
"assets/assets/shop/shinsaibashi.png": "b8aef63de5d583091c86f1c168712fa6",
"assets/assets/souvenirs/keychain.png": "8034351623ea2937fa950558f2d278d1",
"assets/assets/souvenirs/magnet.png": "872e2b46702aa47f4685c707fe4bb39d",
"assets/assets/souvenirs/postcard.png": "149764b65a7fc7e1d109b74bc5361f2b",
"assets/assets/transport/ana.png": "e15b6ee41efdc89390e2b0591a5d5c9c",
"assets/assets/transport/bus.png": "5db67ffb39447b5e503e59e4e3a2d915",
"assets/assets/transport/jal.png": "89dad368406a3efc24a2cd44105a4f7f",
"assets/assets/transport/jrpass.png": "1cfda8a2564319a74f63e10bbd9583e7",
"assets/assets/transport/metro.png": "55f9ba837538eb88da3c9c9513550ad1",
"assets/assets/transport/shinkansen.png": "b011535592ddbf8fdd71f64f587fcbe2",
"assets/assets/transport/suica.png": "3525e1519b51278d695c3aaca9c99b46",
"assets/assets/waypoints/fukuoka.png": "ddb7ae7086e7738fbe8e79474073402e",
"assets/assets/waypoints/kyoto.png": "6de9dba3688e0e525040c2abe17382b4",
"assets/assets/waypoints/osaka.png": "a5dbef73f81b5036db671ccdda343393",
"assets/assets/waypoints/sapporo.png": "11998dac965e5b0d359f0dc2b57f8145",
"assets/assets/waypoints/tokyo.png": "d4ce3a6015cdcbbec81a438e382ab4a2",
"assets/FontManifest.json": "6059f3e024a23dcb1bf02b6706d53d0d",
"assets/fonts/MaterialIcons-Regular.otf": "16500736270689926ed2cea2ec99ea32",
"assets/NOTICES": "613707c725d7ef69d08784c89b50d46b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "4bdcf32dfd92731cfa6bdfa29d1a3fc6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d8e444b76bd2c90ea4c9cec3628696a3",
"/": "d8e444b76bd2c90ea4c9cec3628696a3",
"main.dart.js": "6a6edeae286e6728af9928006848bc0f",
"manifest.json": "71e0154c18320c9ca4cbf26c3e30935d",
"version.json": "322dfa94430cc69aa45ce83495f46466"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
