const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"20d5ad00feac697c3f1ba0d3e07f9c32","url":"./404.html"},{"revision":"4deaa2f9754895db9ffd41916ffd7d19","url":"./about/index.html"},{"revision":"2db7e8b06897badb296fe636778e0d69","url":"./archives/2022/06/index.html"},{"revision":"cd37381a9ecc175c2ba31588cd71d196","url":"./archives/2022/07/index.html"},{"revision":"dd57836dd2e09994a56f62e62e90aa74","url":"./archives/2022/08/index.html"},{"revision":"1b06e1e14e539c2a0ebdeee3294a101f","url":"./archives/2022/10/index.html"},{"revision":"f117a6706a44e30e4b1ff4381a271e48","url":"./archives/2022/11/index.html"},{"revision":"f336cb0529139f1dab54818dc4df01dd","url":"./archives/2022/12/index.html"},{"revision":"413d5ce5c5238cb6b9fa76943ed93488","url":"./archives/2022/index.html"},{"revision":"e5ec12cb5f3aadd06191b9632fc96207","url":"./archives/2022/page/2/index.html"},{"revision":"8f6387b75240f5acd3d1367a6638377a","url":"./archives/2023/02/index.html"},{"revision":"a0cef3304223df744d6e98cf2b26ab9d","url":"./archives/2023/04/index.html"},{"revision":"32b5074f8cb90d7d3079cc48b62449d9","url":"./archives/2023/index.html"},{"revision":"4095c4270a9dbf398efd005e4a6e8a93","url":"./archives/2024/04/index.html"},{"revision":"943e1683ae10ce2bb73c530a49932d62","url":"./archives/2024/05/index.html"},{"revision":"fbb32b4fffe23fd72c2588b2497985ef","url":"./archives/2024/06/index.html"},{"revision":"0bd8a507c02d77dc83d5c889a0e9b96b","url":"./archives/2024/09/index.html"},{"revision":"3ffd7e1ebcc63e799f139f7622e22a0a","url":"./archives/2024/index.html"},{"revision":"b8c85d51b12a34b6195367e003ca3145","url":"./archives/index.html"},{"revision":"a10f2fa72df14959c94e2f3bf3fbcf59","url":"./archives/page/2/index.html"},{"revision":"ce3dd125d6673f2a324f15a082ef7e68","url":"./archives/page/3/index.html"},{"revision":"392c6ee7d3652fce90839876e6851b33","url":"./categories/AI/index.html"},{"revision":"d4cba3671e066ec3f57123a3dbbd507e","url":"./categories/Gridea/index.html"},{"revision":"5e4f64347adf4cf01e28d7472f7d4d23","url":"./categories/index.html"},{"revision":"ad4043f5a9529ba8257d6145cb9b433a","url":"./categories/Vercel/index.html"},{"revision":"1544094b388756405edb41781b1d39b1","url":"./categories/休闲/index.html"},{"revision":"a5e51837570342ed774fa7c78b896658","url":"./categories/建站/index.html"},{"revision":"db510fd055dd01ba3c56857d737823d8","url":"./categories/科普/index.html"},{"revision":"2649ae329e7936ca72eeb79c8beb41bf","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"ed34a3a23c0a19863b891141c50fc743","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"726e973550de916cdf364d2e727a07f7","url":"./go/index.html"},{"revision":"de9cf7823c81914faea0345103537bfe","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"b7faf394f124c640b8e6bdc3943c1dfc","url":"./link/index.html"},{"revision":"5a9c49a082d62ddea9be707a0354384b","url":"./message/index.html"},{"revision":"67c62fab541813ba3659efa43737761b","url":"./page/2/index.html"},{"revision":"f10ef4bd349532afeda77465e56df54b","url":"./page/3/index.html"},{"revision":"6bbcf90b3a5efae794ff8c31b591371d","url":"./post/193912eb/index.html"},{"revision":"04142271c51ca3ac21598bdc89e5f35e","url":"./post/220b8380/index.html"},{"revision":"274aa18655e9dbccc0668ffb8f273974","url":"./post/24dc856c/index.html"},{"revision":"1872262035657608bddba34d48ce039c","url":"./post/3082b2c6/index.html"},{"revision":"34a7a76204f404f894a94d28124a9bcd","url":"./post/3df9585/index.html"},{"revision":"255a6727bd17cf7f244995e3bd74d27c","url":"./post/4a17b156/index.html"},{"revision":"4f033e1408157b422a7f9536215b97e5","url":"./post/739f0a30/index.html"},{"revision":"9234f4c89a0af58ac5770eb66e74ee60","url":"./post/73fccf9a/index.html"},{"revision":"3cd8d6389c040d39dfe26efe60364cca","url":"./post/7ca5704e/index.html"},{"revision":"ed54a5bc263774c407657f0c7629123f","url":"./post/7fc77154/index.html"},{"revision":"db115dc0ec14a045d4c23b3b04d132f5","url":"./post/8097b5e3/index.html"},{"revision":"b9a541cb63adee2406f4ef4c02ed625a","url":"./post/8422c4dc/index.html"},{"revision":"1977e878acb38c2895d8a47ab23983b3","url":"./post/99c7fa1c/index.html"},{"revision":"725324c8a0c46466ed546070c4351507","url":"./post/9c60e209/index.html"},{"revision":"029e1c9b8d2ae002213578a06584c1b8","url":"./post/ae58d2f1/index.html"},{"revision":"1ef0b47f65180d123f493ca4db4ff20c","url":"./post/d4550abf/index.html"},{"revision":"8c648d9b5cb852e012046eb12d91c6bf","url":"./post/d50c4d0e/index.html"},{"revision":"db1893a4aa36194f691350bdc83c97c8","url":"./post/db569493/index.html"},{"revision":"6ead31c93203733ddbf5f6d1d94edfd4","url":"./post/dd83a796/index.html"},{"revision":"e3301984d226defaaf5defa8de84dbb6","url":"./post/f82f332a/index.html"},{"revision":"b4a5268baec87645af10f8a3f899d7d4","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"0c4b2c3ec4db89a47225563488ad5dd4","url":"./tags/AI/index.html"},{"revision":"10e8dc6b4d5f2a9358b01f915571167c","url":"./tags/Aplayer/index.html"},{"revision":"1eec2f542a94d6332236f017def91712","url":"./tags/Bing/index.html"},{"revision":"4be88a0ed0c67aa292c76d8c978157ce","url":"./tags/BUG/index.html"},{"revision":"db7671fd8b7c026466ebda051ff0b4f6","url":"./tags/CDN/index.html"},{"revision":"21da260d28cf2f4194f1c01c2015af1a","url":"./tags/CMS/index.html"},{"revision":"ead7edee53e25742a27e0a50ea19f71c","url":"./tags/css/index.html"},{"revision":"c08f8f12fb29ca74754616ede763f2d7","url":"./tags/DNS/index.html"},{"revision":"7630da47a51f7e27cfab939df575f874","url":"./tags/Flash/index.html"},{"revision":"93a54115943bb764ab74931fdf07211f","url":"./tags/GFW/index.html"},{"revision":"5f713e79f6a58229010462e63e7534ee","url":"./tags/Gridea/index.html"},{"revision":"26417e68ac563b522dad0a971da5ba3f","url":"./tags/HTML/index.html"},{"revision":"712c37afc3a7200555a54efb9bf37784","url":"./tags/index.html"},{"revision":"ebc52805cff07a05f18f314c141760d2","url":"./tags/JavaScript/index.html"},{"revision":"929b7eb7acad240cc0eeface09be75d4","url":"./tags/JQuery/index.html"},{"revision":"5c1617d126d3631e728e730d0bd3621d","url":"./tags/MetingJS/index.html"},{"revision":"2b56f2473fb6f7fc6c189f1baf603f07","url":"./tags/NexT/index.html"},{"revision":"3a13b93e968ef16c3add94b024c7505c","url":"./tags/P2P/index.html"},{"revision":"0ddf110c5886d0ab2d4247bc0d4d4503","url":"./tags/RSA/index.html"},{"revision":"cd561e98361bb2c264e1a925c43501cc","url":"./tags/Vercel/index.html"},{"revision":"4222ece272f97de9b02bc0087954ba0c","url":"./tags/分享/index.html"},{"revision":"aded058f81cde205f2ae50ebd0a0cb75","url":"./tags/加密/index.html"},{"revision":"47efd5cc66473db1f691736be7580371","url":"./tags/加载动画/index.html"},{"revision":"8b7d6263b18a205588bc0485b6af060c","url":"./tags/右键菜单/index.html"},{"revision":"e0e658058ffcc160a0464f66e251de9b","url":"./tags/域名/index.html"},{"revision":"cf0dc67919b6a022c599606a9d97bce9","url":"./tags/密码学/index.html"},{"revision":"d6c89469626b6ee1aadfe744b7666e5f","url":"./tags/建站/index.html"},{"revision":"781d9108440c1cac78a53384b11d77ee","url":"./tags/插件/index.html"},{"revision":"fd16309e38f4caa72c86c9edff2d1b18","url":"./tags/服务器/index.html"},{"revision":"5ee152c0024584eac5dc2a66a835f497","url":"./tags/网页源码/index.html"},{"revision":"7183ccad7a03f74096aa9ce4ddbca478","url":"./tags/美化/index.html"},{"revision":"002223ad71b87cc21e30acec5e6da319","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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
    /^https:\/\/i\.pixiv\.re/,
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