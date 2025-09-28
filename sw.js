const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"70b2ec5da76de5eb8c39c9716303382f","url":"./404.html"},{"revision":"752de2f5f5ae7dee621440c53f93bda9","url":"./about/index.html"},{"revision":"fd64e4c310b7d0e803bc3a3a794840a4","url":"./archives/2022/06/index.html"},{"revision":"37845d5ec9f9408d832f0556f54ab57a","url":"./archives/2022/07/index.html"},{"revision":"9bae3ce560bf8e4d0ca8f5293e08d5be","url":"./archives/2022/08/index.html"},{"revision":"05b91fff677bd004f83a6a2dcbfc588b","url":"./archives/2022/10/index.html"},{"revision":"1b7af523a66db15fe67ed7f42b495a84","url":"./archives/2022/11/index.html"},{"revision":"4372e3c2402dcedae97d47d3a298eaaf","url":"./archives/2022/12/index.html"},{"revision":"518e18a4fc05327298da31a6b9663512","url":"./archives/2022/index.html"},{"revision":"2a89421f3d77c43fb8915418029047d7","url":"./archives/2022/page/2/index.html"},{"revision":"58d824b80e1b3a9d3b73f0dbb072f375","url":"./archives/2023/02/index.html"},{"revision":"a47ce6adcd7d5a31ee962a8fcc966d9a","url":"./archives/2023/04/index.html"},{"revision":"bd0ce4251d2a925c31a700a7a9fe3f85","url":"./archives/2023/index.html"},{"revision":"5bb86097f4054a7bcaa7c2a49723cc91","url":"./archives/2024/04/index.html"},{"revision":"9df4a6129b40c3c5a08a177baa704729","url":"./archives/2024/05/index.html"},{"revision":"ffbbcd6aaa757e80bf67dafae0e3d460","url":"./archives/2024/06/index.html"},{"revision":"a091f3af36207aa1fa5e751c67640a92","url":"./archives/2024/09/index.html"},{"revision":"294d40daed6dd74fce50312be5a58b79","url":"./archives/2024/index.html"},{"revision":"bb955740157238d2e30ca8dbd68d15f8","url":"./archives/index.html"},{"revision":"cc38f3c6966e55bd611fd9a2215d5526","url":"./archives/page/2/index.html"},{"revision":"6535240577bd98cf9d60dbeb0c39555d","url":"./archives/page/3/index.html"},{"revision":"d51d7880374f7553d26e6b38dd53f410","url":"./categories/AI/index.html"},{"revision":"02e5ee686cadcd79d04f6804469fd9ec","url":"./categories/Gridea/index.html"},{"revision":"e88d367e3196cf2a4b18c91a73162155","url":"./categories/index.html"},{"revision":"f88a8ee0b58d5b654d38bffc80e443db","url":"./categories/Vercel/index.html"},{"revision":"259df55c0e585a1ea5d0f87967f65388","url":"./categories/休闲/index.html"},{"revision":"7cf7084052040d42121870b1633e6825","url":"./categories/建站/index.html"},{"revision":"c780f34fa36ba6d956c8486970993edb","url":"./categories/科普/index.html"},{"revision":"574d00da66c102d9bfc259442a1eac55","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"dae477daa86019fe93426d740352519c","url":"./cookies-instructions/index.html"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"528e06a9a9a752a50ce1773e3222ad29","url":"./index.html"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"79735debeb26e6ba40ea2c2ae4a02e22","url":"./link/index.html"},{"revision":"19c7067c310a1a3e872e011cc012e718","url":"./message/index.html"},{"revision":"ca52b50511ea3e56126420e5c3655ee4","url":"./page/2/index.html"},{"revision":"9321664eb71642ca03484a300e02b1e9","url":"./page/3/index.html"},{"revision":"5381eaa4e73e48e3ef25db3e97ae5a26","url":"./post/193912eb/index.html"},{"revision":"23170ad327c36281654977605459ebd5","url":"./post/220b8380/index.html"},{"revision":"7a1f5e8bd7ad3ba3024b90293d9e3368","url":"./post/24dc856c/index.html"},{"revision":"34e2eb88522dca5b8e532a843f8b30c2","url":"./post/3082b2c6/index.html"},{"revision":"07ee2bff50925b8ae07d4acd7a056de7","url":"./post/3df9585/index.html"},{"revision":"51b57e57bda696bc0d80d5bf601d9584","url":"./post/4a17b156/index.html"},{"revision":"6c9c19d8f4f2d0376d4de1a429d92217","url":"./post/739f0a30/index.html"},{"revision":"4b91a4150412c0d585de3bd6f5de8d01","url":"./post/73fccf9a/index.html"},{"revision":"c88e4d00718d9d0a518d33f22264b35d","url":"./post/7ca5704e/index.html"},{"revision":"9f1ee516dd575dab4739e82a4a639ca1","url":"./post/7fc77154/index.html"},{"revision":"79e22143c7431abdd9d7c304f4151021","url":"./post/8097b5e3/index.html"},{"revision":"5e09fbcd57e4f6d9fd3985c6f1257644","url":"./post/8422c4dc/index.html"},{"revision":"8175bbc89fedd52466801b2219c73240","url":"./post/99c7fa1c/index.html"},{"revision":"5707bb731d076b7cc3a1aec30866feac","url":"./post/9c60e209/index.html"},{"revision":"a31013bee1173ebcc59a396d390e4300","url":"./post/ae58d2f1/index.html"},{"revision":"765d2fbc01ea168f87d75e7eace76805","url":"./post/d4550abf/index.html"},{"revision":"b73d02af24aa5c341086542a055e4355","url":"./post/d50c4d0e/index.html"},{"revision":"55cee205469982e3c88f9d50d59dc62a","url":"./post/db569493/index.html"},{"revision":"a383c550d40ce0a9ce6b914a39ae3824","url":"./post/dd83a796/index.html"},{"revision":"d10a050ad6ca7fa74d1de5288f2e07da","url":"./post/f82f332a/index.html"},{"revision":"573214246947f794204ff1d8db1fe3a3","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"727dc96ada2f86cc6bb9f03b2e0cae18","url":"./tags/AI/index.html"},{"revision":"ff9866a52b0aa4bf60b495c4e07fbcd0","url":"./tags/Aplayer/index.html"},{"revision":"7467f58ed96b0c7ee74199dadc47c47f","url":"./tags/Bing/index.html"},{"revision":"927b1bc0cdfaf35e9860f2cc1f28155e","url":"./tags/BUG/index.html"},{"revision":"d226e1d6118c1f66d39db0f1b8760640","url":"./tags/CDN/index.html"},{"revision":"1f4b5417a7d99ab05d6b7d6256aef66b","url":"./tags/CMS/index.html"},{"revision":"d94efb20a435b3770e28a7db43e34ae6","url":"./tags/css/index.html"},{"revision":"d6d32b9eaa0c6f509e3ca186c31c3630","url":"./tags/DNS/index.html"},{"revision":"579b38eef2371e5adf7832c67852f698","url":"./tags/Flash/index.html"},{"revision":"bf34c41c3e79a015db6fadce1c861aa1","url":"./tags/GFW/index.html"},{"revision":"0ccecb5441543115f73132aad2473c7e","url":"./tags/Gridea/index.html"},{"revision":"3e858439b86a0cf4f244df69264406f7","url":"./tags/HTML/index.html"},{"revision":"048100d5f3bf295cba556f6c862f8c99","url":"./tags/index.html"},{"revision":"851460295715348fcc5cdafe1685d6bb","url":"./tags/JavaScript/index.html"},{"revision":"d975dfc4f8616d972511c2e9eab9cd2d","url":"./tags/JQuery/index.html"},{"revision":"7567a3ad6ea8a94fac41f4727208a53b","url":"./tags/MetingJS/index.html"},{"revision":"a279b2b35a7f1d5ae6aa0b87c3d62f67","url":"./tags/NexT/index.html"},{"revision":"ae03de1d08e167488d56f64a600d68f8","url":"./tags/P2P/index.html"},{"revision":"2d2ec872c0cb9ae409252febdd9b1010","url":"./tags/RSA/index.html"},{"revision":"376bdca3ab01bbe2da1979d0caa20254","url":"./tags/Vercel/index.html"},{"revision":"f9cd323f42acdd1657dca884cfbccdfa","url":"./tags/分享/index.html"},{"revision":"48d3e9a8a9ac3a86eb720d371830ef0a","url":"./tags/加密/index.html"},{"revision":"d78320b52098f8c8d7c88d16a8e7659c","url":"./tags/加载动画/index.html"},{"revision":"83225e7d61b571a6c42bedf3b3086e3e","url":"./tags/右键菜单/index.html"},{"revision":"4ca73b260983ca9531b937d1ac75f1cc","url":"./tags/域名/index.html"},{"revision":"8df08ab67db524ada0100e8450331ec4","url":"./tags/密码学/index.html"},{"revision":"1d9a33648e42e7092c993ac67838c8c9","url":"./tags/建站/index.html"},{"revision":"6b75bcd0bb77a3707c96c81d7136fc8c","url":"./tags/插件/index.html"},{"revision":"eed6e2842d43a2103e9969baebae5201","url":"./tags/服务器/index.html"},{"revision":"18653541fa978b2dab2aef71f089c63f","url":"./tags/网页源码/index.html"},{"revision":"426c79a1a1cda06b205f7b28ef21447a","url":"./tags/美化/index.html"},{"revision":"2e96bc940e33e562bd2c7bea0ef08611","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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

// Pixiv Images
workbox.routing.registerRoute(
    /^https:\/\/i\.pixiv\.(?:nl|re)/,
    new workbox.strategies.CacheFirst({
        cacheName: "pixiv-re",
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

//Bing Wallpaper
workbox.routing.registerRoute(
    /^https:\/\/api\.dujin\.org/,
    new workbox.strategies.CacheFirst({
        cacheName: "bing-wallpaper",
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