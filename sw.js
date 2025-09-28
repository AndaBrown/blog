const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"70b2ec5da76de5eb8c39c9716303382f","url":"./404.html"},{"revision":"c40b895b5654fbc774cc6c7b0211eefd","url":"./about/index.html"},{"revision":"f82d85ac80135950c00985ba0818f662","url":"./archives/2022/06/index.html"},{"revision":"1ec5e6a3c6e2cff588920b2b4e1c971e","url":"./archives/2022/07/index.html"},{"revision":"91cc8e970adcc270db8fe1927211c417","url":"./archives/2022/08/index.html"},{"revision":"a0ed97a2702b7ab4b3d25c8b5e3e4c1e","url":"./archives/2022/10/index.html"},{"revision":"7fe0eb1ceddb77071306e0fd18bd99ad","url":"./archives/2022/11/index.html"},{"revision":"e00ff4641c3e5f5fb2ef4f6b18e9977a","url":"./archives/2022/12/index.html"},{"revision":"61d15fe07543f2c568fa11e38bb5fae7","url":"./archives/2022/index.html"},{"revision":"4c341f2d61bd3cdb307bf72d91033c7e","url":"./archives/2022/page/2/index.html"},{"revision":"6e6b657a19ecd3f6ac81b6fbcc34ac87","url":"./archives/2023/02/index.html"},{"revision":"e84fc88485cab6c7ddbfdbe8ae932298","url":"./archives/2023/04/index.html"},{"revision":"d186be077998a5695f07763fc2ad2062","url":"./archives/2023/index.html"},{"revision":"4f61a7fd65012670a0f1cbc142584ee9","url":"./archives/2024/04/index.html"},{"revision":"c02973142e564a9fdc1a179d5f345801","url":"./archives/2024/05/index.html"},{"revision":"e077e5acc375a1e0f3790c4b9f33fe7e","url":"./archives/2024/06/index.html"},{"revision":"1bb28b6c370757fb53b6aef3db5f28d6","url":"./archives/2024/09/index.html"},{"revision":"ce17a1750fab317dfbb9e72f3e86158b","url":"./archives/2024/index.html"},{"revision":"90346df892a80ed3385be6d32b6268ed","url":"./archives/index.html"},{"revision":"40ec29fbc7c3152e5e5f83e4a5cc6f64","url":"./archives/page/2/index.html"},{"revision":"d13455ea00067634991ffe0b0f3fe186","url":"./archives/page/3/index.html"},{"revision":"1c969c8a75552169b7432ff31a435642","url":"./categories/AI/index.html"},{"revision":"0c601a8ab32f6a43c63f0da2641fae26","url":"./categories/Gridea/index.html"},{"revision":"4ed9332a94bbefd971dc65b38abd9f20","url":"./categories/index.html"},{"revision":"44fa6b02187fa8f2f5bb6257a5feabc7","url":"./categories/Vercel/index.html"},{"revision":"6d00a2af44ec3fb8473ea9d95907ffa4","url":"./categories/休闲/index.html"},{"revision":"40fc32d6b6927568e01ae0837f2e22d3","url":"./categories/建站/index.html"},{"revision":"937f892f2be11c00dc48a6dc3fce8682","url":"./categories/科普/index.html"},{"revision":"99b2523b53013b0aacaf5743879c0235","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"b443334956c4b4e5bf083f40d7b98ab7","url":"./cookies-instructions/index.html"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"69a8f8b3c7683d2daf671529dddefde2","url":"./index.html"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"385787ba172ac583f315280c5a23ede4","url":"./link/index.html"},{"revision":"f934ae57997811dfdbfd26f77ba7e4ba","url":"./message/index.html"},{"revision":"b89c6a640f16257c5f21ba2af3f92c92","url":"./page/2/index.html"},{"revision":"e13e4437890f615b487828648a74458a","url":"./page/3/index.html"},{"revision":"5381eaa4e73e48e3ef25db3e97ae5a26","url":"./post/193912eb/index.html"},{"revision":"23170ad327c36281654977605459ebd5","url":"./post/220b8380/index.html"},{"revision":"7a1f5e8bd7ad3ba3024b90293d9e3368","url":"./post/24dc856c/index.html"},{"revision":"34e2eb88522dca5b8e532a843f8b30c2","url":"./post/3082b2c6/index.html"},{"revision":"07ee2bff50925b8ae07d4acd7a056de7","url":"./post/3df9585/index.html"},{"revision":"51b57e57bda696bc0d80d5bf601d9584","url":"./post/4a17b156/index.html"},{"revision":"6c9c19d8f4f2d0376d4de1a429d92217","url":"./post/739f0a30/index.html"},{"revision":"4b91a4150412c0d585de3bd6f5de8d01","url":"./post/73fccf9a/index.html"},{"revision":"c88e4d00718d9d0a518d33f22264b35d","url":"./post/7ca5704e/index.html"},{"revision":"9f1ee516dd575dab4739e82a4a639ca1","url":"./post/7fc77154/index.html"},{"revision":"79e22143c7431abdd9d7c304f4151021","url":"./post/8097b5e3/index.html"},{"revision":"5e09fbcd57e4f6d9fd3985c6f1257644","url":"./post/8422c4dc/index.html"},{"revision":"8175bbc89fedd52466801b2219c73240","url":"./post/99c7fa1c/index.html"},{"revision":"5707bb731d076b7cc3a1aec30866feac","url":"./post/9c60e209/index.html"},{"revision":"a31013bee1173ebcc59a396d390e4300","url":"./post/ae58d2f1/index.html"},{"revision":"765d2fbc01ea168f87d75e7eace76805","url":"./post/d4550abf/index.html"},{"revision":"b73d02af24aa5c341086542a055e4355","url":"./post/d50c4d0e/index.html"},{"revision":"55cee205469982e3c88f9d50d59dc62a","url":"./post/db569493/index.html"},{"revision":"a383c550d40ce0a9ce6b914a39ae3824","url":"./post/dd83a796/index.html"},{"revision":"d10a050ad6ca7fa74d1de5288f2e07da","url":"./post/f82f332a/index.html"},{"revision":"573214246947f794204ff1d8db1fe3a3","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"e581616742da685de71fb011b4e28008","url":"./tags/AI/index.html"},{"revision":"00fd99815d1664220a7706b3cdf4ec3a","url":"./tags/Aplayer/index.html"},{"revision":"e99df359c02688ac6d6415cead43dc84","url":"./tags/Bing/index.html"},{"revision":"a911d1e6d48ba4e755c89ca1050fc59b","url":"./tags/BUG/index.html"},{"revision":"3179c798b39269a58ce243981040c03a","url":"./tags/CDN/index.html"},{"revision":"b7df639771a95a9f6a2691b515cd89e4","url":"./tags/CMS/index.html"},{"revision":"df6760c459efe105263075408d6b0ee9","url":"./tags/css/index.html"},{"revision":"c8370e0b4733f9225903b10a76c8c6da","url":"./tags/DNS/index.html"},{"revision":"781fc122a3248b95dc5ae7b2a9303158","url":"./tags/Flash/index.html"},{"revision":"6d5208a5d0af71ac4632c06dcfefae93","url":"./tags/GFW/index.html"},{"revision":"28a02b750a389fdf5e14649618ab780d","url":"./tags/Gridea/index.html"},{"revision":"b910e23d64d898a18a60e3ab21244518","url":"./tags/HTML/index.html"},{"revision":"cbbff01abfcfa24ea8d96b8b8e8a2088","url":"./tags/index.html"},{"revision":"3f8b25905a84b415c802cb4f96461a87","url":"./tags/JavaScript/index.html"},{"revision":"70ca83e86ee733a082747371882cc0c7","url":"./tags/JQuery/index.html"},{"revision":"38cb206ce90c436d554e3f46283ad9a1","url":"./tags/MetingJS/index.html"},{"revision":"e6ad8c5f95d59d9952a20230d319c2e5","url":"./tags/NexT/index.html"},{"revision":"9dc137301e37b521495d700effd1daf2","url":"./tags/P2P/index.html"},{"revision":"14b10e0b90886850148e9eef767e4aa3","url":"./tags/RSA/index.html"},{"revision":"1142425f46c231bf7d37359531a14900","url":"./tags/Vercel/index.html"},{"revision":"98276bc83cc2e6edbc6b4b514101a2b7","url":"./tags/分享/index.html"},{"revision":"a2d9d0b9c54c3cfdcce3d5f93eb940c8","url":"./tags/加密/index.html"},{"revision":"adb59b6f4b46b0d98644de9c3403a218","url":"./tags/加载动画/index.html"},{"revision":"954d8d5a73c7563391dca2f09eb02d4a","url":"./tags/右键菜单/index.html"},{"revision":"7326f15375d154669d88d9ba3a7529b5","url":"./tags/域名/index.html"},{"revision":"d610c80a3c03fe0c9f9ae24b027d49d7","url":"./tags/密码学/index.html"},{"revision":"2887019ad20b4624b1e4181ce3e7e812","url":"./tags/建站/index.html"},{"revision":"a8f21324ac8397c2c7888f9d2fc6361e","url":"./tags/插件/index.html"},{"revision":"030c55886638f976296cfe693439fdc4","url":"./tags/服务器/index.html"},{"revision":"d418209987cf961349828b49a26e1bf9","url":"./tags/网页源码/index.html"},{"revision":"cddfb0101fe6719e53cff5a18ed133dd","url":"./tags/美化/index.html"},{"revision":"a9e05bf5bcfb694f81706e482edef1e8","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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