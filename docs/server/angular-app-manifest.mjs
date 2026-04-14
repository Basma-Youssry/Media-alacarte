
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Media-alacarte/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Media-alacarte"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 453, hash: 'eb324d37d989c656619c864b351cb7d3cdc5adc8bd027ef80d0d073b33ed5acd', text: () => import('.assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 966, hash: '253046d9f888d1804385c563a297d99108179ea320edb4983b25f26fa4261d67', text: () => import('.assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21590, hash: 'b167e3f39669bd225181fcfafa0f2d3712eab5f9d684cf5adbb2c68f2415d7b7', text: () => import('.assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('.assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
