
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Media-alacarte/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Media-alacarte/platform",
    "route": "/Media-alacarte"
  },
  {
    "renderMode": 2,
    "route": "/Media-alacarte/platform"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DKY2UVHM.js"
    ],
    "route": "/Media-alacarte/features"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JJV5AJPG.js"
    ],
    "route": "/Media-alacarte/benefits"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OWRA4XLY.js"
    ],
    "route": "/Media-alacarte/requestademo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4RQNNCXA.js"
    ],
    "route": "/Media-alacarte/contact-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TCSHHSCS.js"
    ],
    "route": "/Media-alacarte/about-us"
  },
  {
    "renderMode": 2,
    "route": "/Media-alacarte/auth"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VESKLHKE.js"
    ],
    "route": "/Media-alacarte/auth/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VNOJKLVJ.js"
    ],
    "route": "/Media-alacarte/auth/login"
  },
  {
    "renderMode": 2,
    "route": "/Media-alacarte/blank"
  },
  {
    "renderMode": 2,
    "route": "/Media-alacarte/blank/platform"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DKY2UVHM.js"
    ],
    "route": "/Media-alacarte/blank/features"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JJV5AJPG.js"
    ],
    "route": "/Media-alacarte/blank/benefits"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OWRA4XLY.js"
    ],
    "route": "/Media-alacarte/blank/requestademo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4RQNNCXA.js"
    ],
    "route": "/Media-alacarte/blank/contact-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TCSHHSCS.js"
    ],
    "route": "/Media-alacarte/blank/about-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZZ5T6TGL.js"
    ],
    "route": "/Media-alacarte/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 30491, hash: 'c969696bf9f559d25295d1f92b1cbbd0d27eee6381fa67392239739387755542', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12538, hash: 'cb411e13d612dd9719852d06d2af40ec520a114e4ceab41927da48b01fe22ddb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'platform/index.html': {size: 74455, hash: '1fe07af91cca360063d5102134a51de97620b3007aeb758d2c9933804c76a094', text: () => import('./assets-chunks/platform_index_html.mjs').then(m => m.default)},
    'features/index.html': {size: 45219, hash: '7978e16f1da4865a09a03ad699716d2ed8a29b64b898b711d63fb72625d1ff27', text: () => import('./assets-chunks/features_index_html.mjs').then(m => m.default)},
    'auth/index.html': {size: 42109, hash: '3b18ae0746f1dfed42beca7073732933604c4a22c71edb9062168842036376d2', text: () => import('./assets-chunks/auth_index_html.mjs').then(m => m.default)},
    'blank/platform/index.html': {size: 74455, hash: 'fb35119f53847876586e7adea3b008fc70877a72f89d61ae124b71cb6fcca569', text: () => import('./assets-chunks/blank_platform_index_html.mjs').then(m => m.default)},
    'about-us/index.html': {size: 45215, hash: '728c5ddda959b467a0ed4f64f0963056535c1aea01956bae8be858424f61d659', text: () => import('./assets-chunks/about-us_index_html.mjs').then(m => m.default)},
    'blank/benefits/index.html': {size: 45092, hash: 'f8a592578f0dc17c7b394386901433536d6078736fd2ba694347e49334892505', text: () => import('./assets-chunks/blank_benefits_index_html.mjs').then(m => m.default)},
    'blank/contact-us/index.html': {size: 45097, hash: '10f8477646f9fe9f09bc2a91433d77236e031e39ed207ae1f7cce72d591d87a2', text: () => import('./assets-chunks/blank_contact-us_index_html.mjs').then(m => m.default)},
    'auth/login/index.html': {size: 42234, hash: '8624a949f194f239023598f16be7b0a28193c53f4c1f5e3b7f72f3e6ca67b8ed', text: () => import('./assets-chunks/auth_login_index_html.mjs').then(m => m.default)},
    'benefits/index.html': {size: 45219, hash: 'abc923114ddffc3ad501ce8384a17f616f75f9e8f1567150e2f06ba1e6117151', text: () => import('./assets-chunks/benefits_index_html.mjs').then(m => m.default)},
    'blank/features/index.html': {size: 45092, hash: '49ddef3578d56212623d1d07288a384b26cce7e93cf4d82fcea43e8ef67cc59b', text: () => import('./assets-chunks/blank_features_index_html.mjs').then(m => m.default)},
    'contact-us/index.html': {size: 45224, hash: 'b025d6ac80aa39e1d37ce97d6961f9acc200c1d153bf3f1afdb46a4015f1cf4d', text: () => import('./assets-chunks/contact-us_index_html.mjs').then(m => m.default)},
    'blank/requestademo/index.html': {size: 45110, hash: '010cf086b27e4ed6932f6efdca3b3e3e7b0ac76fab34a952cb6f5978dd92d040', text: () => import('./assets-chunks/blank_requestademo_index_html.mjs').then(m => m.default)},
    'auth/register/index.html': {size: 42246, hash: '09471c3eb398d56ffce85d3776d4b50ede03d45de0b2c6dd4228029874435c84', text: () => import('./assets-chunks/auth_register_index_html.mjs').then(m => m.default)},
    'blank/about-us/index.html': {size: 45088, hash: '910ad0376d23210f3add8244e08d21624d7e0a4ee501adbd40b2490b2da47c7b', text: () => import('./assets-chunks/blank_about-us_index_html.mjs').then(m => m.default)},
    'blank/index.html': {size: 44955, hash: 'ed4bc0e2f4db6ffb82d9250ce7b8bb7f1f96e89c17c4b53d20dabee263abb2b7', text: () => import('./assets-chunks/blank_index_html.mjs').then(m => m.default)},
    'requestademo/index.html': {size: 45237, hash: 'a5df64d6cad0e9e6ef7e5178adfbf8389d0f946027263c4e9013e61281d7bdaf', text: () => import('./assets-chunks/requestademo_index_html.mjs').then(m => m.default)},
    'styles-7RQTLPS6.css': {size: 173486, hash: 'ZMh7fi0XXLY', text: () => import('./assets-chunks/styles-7RQTLPS6_css.mjs').then(m => m.default)}
  },
};
