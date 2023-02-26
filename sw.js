const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"8c7398455b9cb821045b83b31f586998","url":"./404.html"},{"revision":"4e5326075967ed7d078a8f571991ece5","url":"./about/index.html"},{"revision":"1b299d48e4e6d87578a953c74064a2b1","url":"./archives/2022/06/index.html"},{"revision":"0a26a13a9fb7ee14f08323594bdb4102","url":"./archives/2022/07/index.html"},{"revision":"3cbc86e22e89102ca81bedc9ee5e3648","url":"./archives/2022/08/index.html"},{"revision":"e9e7fe92d90a142e2cd06fcb6310929d","url":"./archives/2022/10/index.html"},{"revision":"02ebad1b98787b3d4f27ab1b6febbc45","url":"./archives/2022/11/index.html"},{"revision":"7efe33639829437b8f4dcd1d363e81d2","url":"./archives/2022/12/index.html"},{"revision":"5a7ad3fc76f3de506aca027fd85eee14","url":"./archives/2022/index.html"},{"revision":"c928068ad10eb8d44be94986fe909d71","url":"./archives/2022/page/2/index.html"},{"revision":"240e113b32ca0826237078a58faee7ad","url":"./archives/2023/02/index.html"},{"revision":"e42eb9a14ccf779679dac3a6a53eada7","url":"./archives/2023/index.html"},{"revision":"7751e0c204ad8d71ad346ec298627008","url":"./archives/index.html"},{"revision":"4b2e0789c08163e9ca4a4dba4599f887","url":"./archives/page/2/index.html"},{"revision":"60845f042b2aa68af1edeed6800e3cf5","url":"./categories/Gridea/index.html"},{"revision":"ccb02887f62fbb9ed801aa4cd587ffdd","url":"./categories/index.html"},{"revision":"9accc5bf530ddcb14249a75e4bb38a38","url":"./categories/Vercel/index.html"},{"revision":"040b32d4039152f8ca1e1b717d4f1917","url":"./categories/休闲/index.html"},{"revision":"2ea28261e61574fd59ca020f78aa1e35","url":"./categories/建站/index.html"},{"revision":"5adb78a9ba5cde78bc2308e0b1c1ba53","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"4bfe0bc9e8e486058fd724770043ea71","url":"./cookies-instructions/index.html"},{"revision":"4252cf4b91097427e40c22fd46f002fe","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"982f77e37adcb7ffe798a42e4df97d7f","url":"./go/index.html"},{"revision":"87b54707e262b179a1c53741b745cda4","url":"./index.html"},{"revision":"5a6ecf34399a1729b115064d2f283227","url":"./js/main.js"},{"revision":"786b8da5325888c55c04e6b6687bf9f5","url":"./js/search/algolia.js"},{"revision":"1ec55c21e97cc170ee4dadaf96b44806","url":"./js/search/local-search.js"},{"revision":"bc064917c366036544975274bb20a01d","url":"./js/tw_cn.js"},{"revision":"0dccc99f6a5b70b9ccfbf58d2c6eec5b","url":"./js/utils.js"},{"revision":"52a0a740418676fd49625506e2bfef7a","url":"./link/index.html"},{"revision":"c1378ea973d309fe65d80dc32babfc6b","url":"./message/index.html"},{"revision":"437ae6e73fb49ba1ac80689ec3d3dc20","url":"./page/2/index.html"},{"revision":"6961f3a806541c846c86a9bd63b8655b","url":"./post/193912eb/index.html"},{"revision":"83d544d3426875d92aa0cd6b3f44e5fe","url":"./post/220b8380/index.html"},{"revision":"e71e5fa0934bed2192d320aac559fe76","url":"./post/24dc856c/index.html"},{"revision":"67b4581a1ab4930595a7735ed9cc21f4","url":"./post/3082b2c6/index.html"},{"revision":"75132601814b1b2f6c897d7924869d98","url":"./post/3df9585/index.html"},{"revision":"9524ae0f4904a5e3ff160aae93708450","url":"./post/4a17b156/index.html"},{"revision":"b9762dc8594f3dedce8492102230b8d2","url":"./post/73fccf9a/index.html"},{"revision":"d1b27363f33695ed078d81a9899e0d26","url":"./post/7ca5704e/index.html"},{"revision":"0934d7942c2d0a48925582ba88085aa4","url":"./post/7fc77154/index.html"},{"revision":"04a37c7a7a7e8b44f8104aac1d1dace4","url":"./post/8422c4dc/index.html"},{"revision":"e8b90ac03c5e539926cac9e70f09a445","url":"./post/9c60e209/index.html"},{"revision":"22c82c1b3199a15d45c4e5425e191761","url":"./post/d50c4d0e/index.html"},{"revision":"03dc4a78f90081fb49e12ccb2da48772","url":"./post/db569493/index.html"},{"revision":"aa40cba7cd48dc789bd29a6b1ce3a3fb","url":"./post/dd83a796/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"5712addc830990eb95563b895fe618bf","url":"./tags/Aplayer/index.html"},{"revision":"3646449f423470ec908027d714e0e04a","url":"./tags/BUG/index.html"},{"revision":"b671da2f47e0b18ce4d93c12c9506b14","url":"./tags/css/index.html"},{"revision":"1d9fb70dc1dfc89ee9dd0ed746b92a0a","url":"./tags/DNS/index.html"},{"revision":"e3d26d14c7cfafc6f9e10f1f682993c1","url":"./tags/Flash/index.html"},{"revision":"51e0e43dfe2649b280f1e6d69864a165","url":"./tags/GFW/index.html"},{"revision":"80f1cfac455e85d4e0070e4c74859e1a","url":"./tags/Gridea/index.html"},{"revision":"bcc1e42c8a414c37cb83d50c1ad46ec3","url":"./tags/HTML/index.html"},{"revision":"f1d9e2611b4c38139dc8c71750a8d1e6","url":"./tags/index.html"},{"revision":"b17f0c03f0b5d5b1f590aaf394127072","url":"./tags/JavaScript/index.html"},{"revision":"94598aa4b53c85f12864461c1c5060b5","url":"./tags/JQuery/index.html"},{"revision":"f890b78f053c381dd236bcae8995d6d5","url":"./tags/MetingJS/index.html"},{"revision":"ba61ac6c381ec9a45e4e9260d30118e8","url":"./tags/NexT/index.html"},{"revision":"d0760c5352ffd8c5838aa2c7a9bdacab","url":"./tags/Vercel/index.html"},{"revision":"886e602d5d687fed2dfa4490330df885","url":"./tags/加载动画/index.html"},{"revision":"c2b5e48d978125be30220ab33f6f679a","url":"./tags/右键菜单/index.html"},{"revision":"b26d180878ee4040ec4725fe9ecacc8f","url":"./tags/域名/index.html"},{"revision":"ea9bcd19711718fe057e8ab1db39c2a5","url":"./tags/建站/index.html"},{"revision":"bdecca7e71b4517f82a76fdfe86e5a20","url":"./tags/插件/index.html"},{"revision":"26668edf172b1cb34829e8d5233d8ed9","url":"./tags/网页源码/index.html"},{"revision":"a10fc3bc0f331c0298b9bf8221ba831e","url":"./tags/美化/index.html"}]);

workbox.precaching.cleanupOutdatedCaches();

// Images
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Fonts
workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "fonts",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Google Fonts
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Static Libraries
workbox.routing.registerRoute(
    /^https:\/\/cdn\.jsdelivr\.net/,
    new workbox.strategies.CacheFirst({
        cacheName: "static-libs",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

workbox.googleAnalytics.initialize();