
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/platform",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/platform"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DKY2UVHM.js"
    ],
    "route": "/features"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JJV5AJPG.js"
    ],
    "route": "/benefits"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OWRA4XLY.js"
    ],
    "route": "/requestademo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4RQNNCXA.js"
    ],
    "route": "/contact-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TCSHHSCS.js"
    ],
    "route": "/about-us"
  },
  {
    "renderMode": 2,
    "route": "/auth"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VESKLHKE.js"
    ],
    "route": "/auth/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VNOJKLVJ.js"
    ],
    "route": "/auth/login"
  },
  {
    "renderMode": 2,
    "route": "/blank"
  },
  {
    "renderMode": 2,
    "route": "/blank/platform"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DKY2UVHM.js"
    ],
    "route": "/blank/features"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JJV5AJPG.js"
    ],
    "route": "/blank/benefits"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OWRA4XLY.js"
    ],
    "route": "/blank/requestademo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4RQNNCXA.js"
    ],
    "route": "/blank/contact-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TCSHHSCS.js"
    ],
    "route": "/blank/about-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZZ5T6TGL.js"
    ],
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 30476, hash: '4bd11771c83cdeb639f7e72b627d4ad567196b71f5b15d2d7b0bb3737500114b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12523, hash: 'e8b9157ae94c84524dc75ef589c0691d66376344b1bc58a2b3bd6aa57ea61218', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'features/index.html': {size: 44964, hash: 'b5aedf3149c9cb14a6c4853cfc80e55ee986ab888d2a07a59c322679481969ba', text: () => import('./assets-chunks/features_index_html.mjs').then(m => m.default)},
    'platform/index.html': {size: 74320, hash: '8ab6475ccdc901fcf676e40fd8b836c1ce3394f625fee09889f12f2c2dd51950', text: () => import('./assets-chunks/platform_index_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 44960, hash: '070d0b9a20b6beb7cfe55de8b7b1b58f30f875b47533a2f2088fc56386fbc7e6', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'blank/platform/index.html': {size: 74320, hash: 'fba90901bf4d783ee5e73bd9c44389f4f7ff00d2920af0b6a58d256dae628ab6', text: () => import('./assets-chunks/blank_platform_index_html.mjs').then(m => m.default)},
    'blank/contact-us/index.html': {size: 44842, hash: 'cd7b5942be26b18f4795d907e13404b970b461e04bf6002ad03543e400b9a42d', text: () => import('./assets-chunks/blank_contact-us_index_html.mjs').then(m => m.default)},
    'auth/index.html': {size: 41929, hash: 'fd97a69e0995bc1b70aa1a7737b95fc14648bde7983524dd2aa4b356bf6e3be0', text: () => import('./assets-chunks/auth_index_html.mjs').then(m => m.default)},
    'benefits/index.html': {size: 44964, hash: 'a832802ac4cdcdefe684326acfc192151db24e9ff4505e8c9f98f202cdfeecbc', text: () => import('./assets-chunks/benefits_index_html.mjs').then(m => m.default)},
    'blank/benefits/index.html': {size: 44837, hash: '6c8187b19e89ec3194e8793177c389d1d70fe6cab08b5a8fcebdb7f27ee1a52b', text: () => import('./assets-chunks/blank_benefits_index_html.mjs').then(m => m.default)},
    'contact-us/index.html': {size: 44969, hash: '44a0c38a36781f5c7e544c667a6c249afd6563ac4f9c548c43f8af7f3e707431', text: () => import('./assets-chunks/contact-us_index_html.mjs').then(m => m.default)},
    'blank/features/index.html': {size: 44837, hash: '90eaf4aae9ea58aafb3a0a1a4f71c79adb203f46774141c0818b584f61883692', text: () => import('./assets-chunks/blank_features_index_html.mjs').then(m => m.default)},
    'auth/login/index.html': {size: 42054, hash: 'dde720ec9b232ada70a51ac06e55560320d6d3c6bbbe5ff4f54587160bdc4b11', text: () => import('./assets-chunks/auth_login_index_html.mjs').then(m => m.default)},
    'auth/register/index.html': {size: 42066, hash: '62a163a326bc8e7aa44ae0570cbf0336ae2d14c71964a7c2d8d643d9b81f3730', text: () => import('./assets-chunks/auth_register_index_html.mjs').then(m => m.default)},
    'blank/about-us/index.html': {size: 44833, hash: '76c8dcb83a45118762751005ac8fa157ab06459ad4f93c791f05999b1fc917d8', text: () => import('./assets-chunks/blank_about-us_index_html.mjs').then(m => m.default)},
    'blank/requestademo/index.html': {size: 44855, hash: '5b6ca81d0c573b95707172eed18738923f445c9433777d4b8dbeca5087b73d92', text: () => import('./assets-chunks/blank_requestademo_index_html.mjs').then(m => m.default)},
    'requestademo/index.html': {size: 44982, hash: '58a5c9edfaed78cbc962f176312ed55b87da8d5584a0e36a30109ad8ef8611af', text: () => import('./assets-chunks/requestademo_index_html.mjs').then(m => m.default)},
    'blank/index.html': {size: 44700, hash: 'd681c6143dee1d3b4a3b9185481c2ceb6fa893be0350bdbf023e0c6a2c64b014', text: () => import('./assets-chunks/blank_index_html.mjs').then(m => m.default)},
    'styles-7RQTLPS6.css': {size: 173486, hash: 'ZMh7fi0XXLY', text: () => import('./assets-chunks/styles-7RQTLPS6_css.mjs').then(m => m.default)}
  },
};
