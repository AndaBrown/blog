const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"},{"revision":"78325d4629c311b14a8a3925096655dd","url":"./index.html"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"cca0f0a056ee55999e0140d2e129786e","url":"./404.html"},{"revision":"34f4b3e6e8fa246cfc227483ac2af853","url":"./talks/index.html"},{"revision":"95abce41a2668c0c8987399ffe90a6fd","url":"./tags/index.html"},{"revision":"35804b308219f580fee0a42871894587","url":"./tags/美化/index.html"},{"revision":"58dc4e643cf3c21d6c2b39d1c05f6c5c","url":"./tags/网页源码/index.html"},{"revision":"e87d6aa78a7b5001467b169a40893e6e","url":"./tags/服务器/index.html"},{"revision":"d4e6169ae0e3582101a3cac3df936305","url":"./tags/插件/index.html"},{"revision":"e0f4e5273e78549ba0a74d490236361d","url":"./tags/建站/index.html"},{"revision":"2a73bff4c4c139b2f5a54641e870b9d8","url":"./tags/密码学/index.html"},{"revision":"9b88a02a7390fbfc8aacc7a2b811c678","url":"./tags/域名/index.html"},{"revision":"e5417a609c7c7ac8c0c5701843221d1d","url":"./tags/右键菜单/index.html"},{"revision":"951cbf9917181d025902050095af4786","url":"./tags/区块链/index.html"},{"revision":"801e04dc3ee71c8f9e78095a804ba88d","url":"./tags/加载动画/index.html"},{"revision":"cd851cf0a4d9723962e800fd13b3fc70","url":"./tags/加密货币/index.html"},{"revision":"0ac65a655d7ea8a36c11769a418026e4","url":"./tags/加密/index.html"},{"revision":"1fabe911e6421444c5f6ffa1869f069e","url":"./tags/分享/index.html"},{"revision":"8dff8ad018ce4c7b0175cc9de5e4be7a","url":"./tags/css/index.html"},{"revision":"ba712644c9a180c648f0ed48e6ec06dc","url":"./tags/Vercel/index.html"},{"revision":"d162a1f7d3e7ff6840dde1910cb00c5f","url":"./tags/RSA/index.html"},{"revision":"761082a00a4919c054479a934f716303","url":"./tags/P2P/index.html"},{"revision":"230a69dfc99598ef4435c20e5a6f7e3f","url":"./tags/NexT/index.html"},{"revision":"4149af69d8447b8112137d2bfbc50906","url":"./tags/MetingJS/index.html"},{"revision":"a57353bf27bffcbb3f559fee0fd62b8d","url":"./tags/JavaScript/index.html"},{"revision":"39d719355f3b15a925056607af399073","url":"./tags/JQuery/index.html"},{"revision":"c9419ee5b4bf948b0a27611cdcf3564a","url":"./tags/HTML/index.html"},{"revision":"3b7b4ccb1eebcf4e4415fa43e4f8435d","url":"./tags/Gridea/index.html"},{"revision":"0abcc9eadc1478906663e887187a028f","url":"./tags/GFW/index.html"},{"revision":"f7fcee8d4e3a075816f16eeb19bbbae1","url":"./tags/Flash/index.html"},{"revision":"9979b79b6f4d7108d55a3ab28ce084a3","url":"./tags/DNS/index.html"},{"revision":"d310d9d122ac08543cb1ff63c92a7103","url":"./tags/CMS/index.html"},{"revision":"4ae659dfd6f3433091902b1320da1f4b","url":"./tags/CDN/index.html"},{"revision":"0fe3c5669862333da873b1aebc344242","url":"./tags/Bing/index.html"},{"revision":"cbef1b323030f441d400d1bdbef83a94","url":"./tags/BUG/index.html"},{"revision":"e1ee2f3bd790da126e49f23d22917e51","url":"./tags/Aplayer/index.html"},{"revision":"c666c6b0350764b4e1df96e3ef2ff967","url":"./tags/AI/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"0f3deea5ac206394d3bc59d71e5824fd","url":"./post/fa97bd48/index.html"},{"revision":"265bf0edbc697dc4681b99223e2ccb4b","url":"./post/f82f332a/index.html"},{"revision":"aec722642c812f0b9260a08b445c933b","url":"./post/dd83a796/index.html"},{"revision":"634af6e3fbb9ba6a188d3ad2bce01300","url":"./post/db569493/index.html"},{"revision":"5a52f2a951319a594d527766a2f6ed3b","url":"./post/d50c4d0e/index.html"},{"revision":"6e35a56dc444dad4b17e226d36e82080","url":"./post/d4550abf/index.html"},{"revision":"5bd58e6b32313ff8336902a872b4cbe0","url":"./post/b9a3407d/index.html"},{"revision":"74ac1608205df2e98e0275c598f0aed5","url":"./post/ae58d2f1/index.html"},{"revision":"8c5ed8eb3b22e9bd608b67a7a8e4be34","url":"./post/9c60e209/index.html"},{"revision":"058719f00ddba88b4775a3ee5038a553","url":"./post/99c7fa1c/index.html"},{"revision":"0683fbb3844cb6bcb09d65c233542bf8","url":"./post/8422c4dc/index.html"},{"revision":"9c79b8e8f4b32ae8a295053d55596614","url":"./post/8097b5e3/index.html"},{"revision":"1142e35bea62d6e20fd6b077462a58e0","url":"./post/7fc77154/index.html"},{"revision":"95b1b07484bfa3d139b47613b43871d1","url":"./post/7ca5704e/index.html"},{"revision":"e960457810ea6cf988c192bfea0cc30e","url":"./post/73fccf9a/index.html"},{"revision":"d3e91d346022deea59639f90c027c5a6","url":"./post/739f0a30/index.html"},{"revision":"be3be4ef8428871d66451fe18f4798ce","url":"./post/4a17b156/index.html"},{"revision":"586a86aaf19b464551ebb8dca4a99a94","url":"./post/48bc1675/index.html"},{"revision":"28f1a761d62fe78967e55232b1f2c43f","url":"./post/454446b9/index.html"},{"revision":"d7055ca06900fb6ccc7c3f56eaa9d960","url":"./post/3df9585/index.html"},{"revision":"44c26eef05b7bd0b5793b8a2a2786d2e","url":"./post/3082b2c6/index.html"},{"revision":"1a833e29cf71fc8276a830ead983c5ff","url":"./post/24dc856c/index.html"},{"revision":"4f7b1ca2324f68d91990b37274a3ba19","url":"./post/220b8380/index.html"},{"revision":"4912a3c5ee25a75b2fc74abb16fc0be8","url":"./post/193912eb/index.html"},{"revision":"eae398a1118240a01cc7bc3c62e632d6","url":"./page/3/index.html"},{"revision":"cd5cdce24acc414252c9c5917d881928","url":"./page/2/index.html"},{"revision":"a2fd85879acd16fa274de327f27db328","url":"./message/index.html"},{"revision":"0a1def430c0a37703c25d33ca7bf47a9","url":"./link/index.html"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"e46858d2d1b3d424ba2e86d991f57c1e","url":"./cookies-instructions/index.html"},{"revision":"8dbf1ef4146755d3edd07fbc8fa17bd4","url":"./categories/index.html"},{"revision":"a11103fc8f4607c8552f2e8f8af18934","url":"./categories/记录/index.html"},{"revision":"f6cb4a737bd595107c757d967d23259a","url":"./categories/网页源码/index.html"},{"revision":"c2571e8bec1364fbb3dee9d08f93fd8f","url":"./categories/科普/index.html"},{"revision":"c567feff74692e1782b5cb6d70ffa361","url":"./categories/建站/index.html"},{"revision":"4a40b7a7cd3eb65a7342ea161b436218","url":"./categories/休闲/index.html"},{"revision":"4aa09c2059272a4e8ab49ce9ac902a21","url":"./categories/Vercel/index.html"},{"revision":"1b77c363a44fee36b6b695606d0595a0","url":"./categories/Gridea/index.html"},{"revision":"6e047a0177004fdc5ac3fad0c21af159","url":"./categories/AI/index.html"},{"revision":"bead6e3c40192a9357180a3ef2d239fa","url":"./archives/index.html"},{"revision":"75a73e6db6a90b6796734bc5e9aba57e","url":"./archives/page/3/index.html"},{"revision":"3f913a4eaaab181d38dd40c9e27945da","url":"./archives/page/2/index.html"},{"revision":"c57ea6b9973790247a1391c61cc38103","url":"./archives/2026/index.html"},{"revision":"4fb8a103245cfca358dc5ca86a516ae5","url":"./archives/2026/04/index.html"},{"revision":"a4d767a0205e24df86ab241dcc919b31","url":"./archives/2025/index.html"},{"revision":"7c00a182c52997e02f2d0cdec1e0ed0e","url":"./archives/2025/10/index.html"},{"revision":"76e5b1e772b3f85ce9fdfc99854bb6a8","url":"./archives/2025/09/index.html"},{"revision":"5bba4c902a312bc099594dea34c7392b","url":"./archives/2024/index.html"},{"revision":"6af5ab977752bb976d471c07482612dc","url":"./archives/2024/09/index.html"},{"revision":"ab25de373898867d4ff341fd084890b1","url":"./archives/2024/06/index.html"},{"revision":"1135dc5e369ec2b2cc64f24bdb19626b","url":"./archives/2024/05/index.html"},{"revision":"ef4fda8a715230b119e85660f5bf8b0d","url":"./archives/2024/04/index.html"},{"revision":"ee9ffdf16237cd55a518a3d51b2151cf","url":"./archives/2023/index.html"},{"revision":"9e78f5c1961c90f50687e8e89b3d33a2","url":"./archives/2023/04/index.html"},{"revision":"9f23f585a4b21d917c4231f0648ddcf1","url":"./archives/2023/02/index.html"},{"revision":"64ff95b592939d309a7f5ae2a6239421","url":"./archives/2022/index.html"},{"revision":"925ba7f0fa735bdeccf7b4390b921655","url":"./archives/2022/page/2/index.html"},{"revision":"00b34cb9d056c1806e1eaac80a935658","url":"./archives/2022/12/index.html"},{"revision":"45c4e5359728d9e30a6425a542c3156d","url":"./archives/2022/11/index.html"},{"revision":"d75ee825909d9e136e0477e98216532d","url":"./archives/2022/10/index.html"},{"revision":"d784efa393e3e424c1f864da12c6c2b4","url":"./archives/2022/08/index.html"},{"revision":"6299157f15851fe793b0cfc5fb94121c","url":"./archives/2022/07/index.html"},{"revision":"f9f7d1d945d42b2bca296d68c1ea520f","url":"./archives/2022/06/index.html"},{"revision":"e3c827e82a13c96363a46b71ca520509","url":"./about/index.html"}]);
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