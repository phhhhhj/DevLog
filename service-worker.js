/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8c14b2cc412911d7b80ef3eb42a43b6f"
  },
  {
    "url": "assets/css/0.styles.e42cd381.css",
    "revision": "66605f12555218a8ee225e3adbd963e6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.85871594.js",
    "revision": "0e773dbcd1a699a52334440e233a7f6f"
  },
  {
    "url": "assets/js/2.7c391a28.js",
    "revision": "8ec87a6154262e9a6d736e1ee2d67a92"
  },
  {
    "url": "assets/js/3.3d6323e6.js",
    "revision": "45a33667d74ec6f0d966da17d6d4ff21"
  },
  {
    "url": "assets/js/4.18eb377b.js",
    "revision": "dce3ae0863d6a028fd92d113bf3d76a0"
  },
  {
    "url": "assets/js/5.24bc503c.js",
    "revision": "8cea34b391fdc64fc2370c0b01dbce85"
  },
  {
    "url": "assets/js/6.e81359bb.js",
    "revision": "094949ac90316153bc6452752f5bc598"
  },
  {
    "url": "assets/js/7.955ffda7.js",
    "revision": "638a09de14e830d2e65624c3fdb8a82a"
  },
  {
    "url": "assets/js/8.5df1bc95.js",
    "revision": "edd045fa76558a1156f80c00e5e1fcde"
  },
  {
    "url": "assets/js/9.670188ac.js",
    "revision": "bfb44121a5e175df8283e5297433880f"
  },
  {
    "url": "assets/js/app.4c2f0165.js",
    "revision": "82f7d9f6b9cad6489e8487dd177290df"
  },
  {
    "url": "images/logo_192.png",
    "revision": "83597ec91eac75dc8aef1ddb5abd1669"
  },
  {
    "url": "images/moonstar.png",
    "revision": "43f0fd9a0825406eec6749643253923a"
  },
  {
    "url": "index.html",
    "revision": "dfa5c630e8cf1f8e351fc1a4941869ab"
  },
  {
    "url": "sample.html",
    "revision": "e070d84b2b5be1509d0b8810c8384fba"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
