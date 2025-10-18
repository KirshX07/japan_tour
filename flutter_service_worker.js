'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4fd894c1c27ce004084b140f762b300e",
"assets/AssetManifest.bin.json": "33504bd92ad0ad4eb68af5c7594d9c90",
"assets/AssetManifest.json": "05bdbbe6ed7e5da10181c66505b6b66b",
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
"assets/fonts/MaterialIcons-Regular.otf": "b6e88b1a9bec666b03be07a48f5618c1",
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
"flutter_bootstrap.js": "e99029210f7f04efcf58273623c8d84a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d8e444b76bd2c90ea4c9cec3628696a3",
"/": "d8e444b76bd2c90ea4c9cec3628696a3",
"main.dart.js": "296c5acb1d1fd0116f917bd3281432a2",
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
