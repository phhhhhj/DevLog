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
    "revision": "18f54c084b75197f73511dc2aab2af2a"
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
    "url": "assets/js/8.4a29ad06.js",
    "revision": "8e2413d61c95c5bc276f28251e22b7b5"
  },
  {
    "url": "assets/js/9.670188ac.js",
    "revision": "bfb44121a5e175df8283e5297433880f"
  },
  {
    "url": "assets/js/app.c9b0c345.js",
    "revision": "e97758ae91454e38af5c8793ce3d0cba"
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
    "revision": "5f5b3cb5c6d953cc19c18335e5f8f6c0"
  },
  {
    "url": "sample.html",
    "revision": "dc1559acdbe8d444869646585df5c8df"
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
