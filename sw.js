const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"c90edaf61bcb2da91d2bb74bca73976a","url":"./404.html"},{"revision":"898e1101910c25cf89f8f94fbad712aa","url":"./about/index.html"},{"revision":"1dfd581487ee6751e2622a6b80c41eb9","url":"./archives/2022/06/index.html"},{"revision":"d285dce721c2ad29e5e83ef9f16bfdcc","url":"./archives/2022/07/index.html"},{"revision":"0189dbc1489cff5aab3e33bc7f52c551","url":"./archives/2022/08/index.html"},{"revision":"4b5ce5a43f3bb45d66f399c7ab36eb1b","url":"./archives/2022/10/index.html"},{"revision":"b3615c03a76e37893dc6c15c36c3cee8","url":"./archives/2022/11/index.html"},{"revision":"73bfcd731560bd7c436d710f762bd61b","url":"./archives/2022/12/index.html"},{"revision":"e9e4431912f13a861f816662458c6e72","url":"./archives/2022/index.html"},{"revision":"3d2e00b7ca29bda153df736cce17d405","url":"./archives/2022/page/2/index.html"},{"revision":"cecc5e0021a4679489f680d54c0f3cee","url":"./archives/2023/02/index.html"},{"revision":"d77eeef45243b90f1ef788f652791d60","url":"./archives/2023/04/index.html"},{"revision":"726e5b1797f8566ecc6a34dd205a01aa","url":"./archives/2023/index.html"},{"revision":"abaa8820d9457c6378ae39d91668480b","url":"./archives/2024/04/index.html"},{"revision":"3ba1d5fa2c1c77c8a0ab3a3b05752c70","url":"./archives/2024/05/index.html"},{"revision":"ef83459c4975cdf92ab316937eb3eb1b","url":"./archives/2024/06/index.html"},{"revision":"63f9d4a60cef97f1781342c36816f348","url":"./archives/2024/09/index.html"},{"revision":"8f420db31111fa76751505426aa4d928","url":"./archives/2024/index.html"},{"revision":"0c65b11084ec52473c44a269aa69f3d8","url":"./archives/2025/09/index.html"},{"revision":"cbed751596b8d7f5900b9d1c77067629","url":"./archives/2025/10/index.html"},{"revision":"59b906581133da160edc24072607c98a","url":"./archives/2025/index.html"},{"revision":"0429e1aa810276178a37a9c453a72d2d","url":"./archives/index.html"},{"revision":"3bb290354b9cf137a8e1ccfa6f0f6e22","url":"./archives/page/2/index.html"},{"revision":"3bf0f875f62d2cb6b6d758788e9e88a7","url":"./archives/page/3/index.html"},{"revision":"83ff42fb9512015bd5093fabb49ffd54","url":"./categories/AI/index.html"},{"revision":"2e508f19294e4d13ab02c79d5562b39f","url":"./categories/Gridea/index.html"},{"revision":"b6011ca319132b54d45210556317408f","url":"./categories/index.html"},{"revision":"20728201f4fa001de54416171ad1544a","url":"./categories/Vercel/index.html"},{"revision":"7ffed09f321ef3313fe56895812a2573","url":"./categories/休闲/index.html"},{"revision":"10f8d8f05ef5a87b8e1af8c5493b58bb","url":"./categories/建站/index.html"},{"revision":"72f4d98ad5941cfd49514637228336a4","url":"./categories/科普/index.html"},{"revision":"ee471e1ffdd203677014e56797b81a0e","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"989388b8250336b6dfe77665d4fa16cd","url":"./cookies-instructions/index.html"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"c2513a0c2efc78382c6c5ffbe667ef0c","url":"./index.html"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"9760bb68896b100b69bd2b1621841d21","url":"./link/index.html"},{"revision":"09d6be0395349cfc5c363ca77ab56a2b","url":"./message/index.html"},{"revision":"7dbad7ed80c38f21fe1c5133eaf19511","url":"./page/2/index.html"},{"revision":"549e0c2fef8c430b3446db72b7acbf53","url":"./page/3/index.html"},{"revision":"a859aa8bdb198bb26eb9b67ca8643821","url":"./post/193912eb/index.html"},{"revision":"505e8b1a9e40c59e02a8341ffa2f85b0","url":"./post/220b8380/index.html"},{"revision":"695e7a7e8d5a58ac620e1100f9a3023e","url":"./post/24dc856c/index.html"},{"revision":"503ee5f4e51012201706bdcaf964089c","url":"./post/3082b2c6/index.html"},{"revision":"5123c94b7bbae2c2e0a022b059c9707e","url":"./post/3df9585/index.html"},{"revision":"be03873633443e619e47552c7f34d742","url":"./post/48bc1675/index.html"},{"revision":"3c828837104062ce4593e67434d8f5d7","url":"./post/4a17b156/index.html"},{"revision":"1a8869c8b4c37c72a1798d3a7ce7960e","url":"./post/739f0a30/index.html"},{"revision":"1e9b99f682b12f1c08128c003c4dec71","url":"./post/73fccf9a/index.html"},{"revision":"14e1a50e62dd31e4b807647d78231ebf","url":"./post/7ca5704e/index.html"},{"revision":"fa1d8027e7b7309b5e9c262bddc41b28","url":"./post/7fc77154/index.html"},{"revision":"64bb22c1e1795e3c2d94a381fbfd723b","url":"./post/8097b5e3/index.html"},{"revision":"abc529635c417e884aef78675dc8db48","url":"./post/8422c4dc/index.html"},{"revision":"66511bdfea5cecf392899b7ef2333d7d","url":"./post/99c7fa1c/index.html"},{"revision":"d51427e5eefad46e8bd8a66757fa8a09","url":"./post/9c60e209/index.html"},{"revision":"6f8b10ca304f68aaaa9312a9553f017a","url":"./post/ae58d2f1/index.html"},{"revision":"cb498ada403370779d0cfe38d514a0e9","url":"./post/b9a3407d/index.html"},{"revision":"36ea2e2f3fb25f1a900c22f12f175261","url":"./post/d4550abf/index.html"},{"revision":"0c56bfd2b5311269400cb564c012b5e7","url":"./post/d50c4d0e/index.html"},{"revision":"718cacfcd7701fb736dfc5c28e875123","url":"./post/db569493/index.html"},{"revision":"a4c265fd9762261bf7018f92a1e7343e","url":"./post/dd83a796/index.html"},{"revision":"0bb6b3a17e12773037c68009c183221a","url":"./post/f82f332a/index.html"},{"revision":"88655123dab0329103bdd150f90e38b9","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"a30d8f48730fff7726e92596fabe3dd6","url":"./tags/AI/index.html"},{"revision":"fac06ce877cb7aa0819e80a9667e57a2","url":"./tags/Aplayer/index.html"},{"revision":"f58ccf6d932392077f393945ba72afd5","url":"./tags/Bing/index.html"},{"revision":"616df014063e72c162c5e4c2e9cefb5c","url":"./tags/BUG/index.html"},{"revision":"e7e8d78a27a48ed0cf7a232750f73873","url":"./tags/CDN/index.html"},{"revision":"e6c2e48a4501eef1d04b42e3cec15dbb","url":"./tags/CMS/index.html"},{"revision":"2aa32646c2f8d4a600bad546d5d5ed08","url":"./tags/css/index.html"},{"revision":"cb04bbce91d7e643ce086100069c51c6","url":"./tags/DNS/index.html"},{"revision":"95ae8a7ab3a10318728284dc6c88dabc","url":"./tags/Flash/index.html"},{"revision":"239abfb3c49bf6846404a626a2975dfe","url":"./tags/GFW/index.html"},{"revision":"63f92463e7cde6dfef29711c5de6c429","url":"./tags/Gridea/index.html"},{"revision":"9867d0c57b9f787a5f31e3d5d31acd79","url":"./tags/HTML/index.html"},{"revision":"dcfff77c345eaf0844f33953f1102f24","url":"./tags/index.html"},{"revision":"a4b8afe09c6150638349654df96e1254","url":"./tags/JavaScript/index.html"},{"revision":"807ed3b1cfe853c8b8d2ad41785e4ebe","url":"./tags/JQuery/index.html"},{"revision":"1d70b739a5fdacb9fcf09ca0bdc22fe1","url":"./tags/MetingJS/index.html"},{"revision":"39f42d79e60b9bbdc77247ee6cbdd491","url":"./tags/NexT/index.html"},{"revision":"03bd359067f596bd726c6df323892e66","url":"./tags/P2P/index.html"},{"revision":"cc208574d07cd4ed883fa21fda7b0447","url":"./tags/RSA/index.html"},{"revision":"7dd6b2729b1a3e397403d06fc7771c40","url":"./tags/Vercel/index.html"},{"revision":"8fbea64cb4c58d0c0bed0df1844996dc","url":"./tags/分享/index.html"},{"revision":"e38b34551dfaccef6a2ba654dc1c963d","url":"./tags/加密/index.html"},{"revision":"17d8b92765e281ab86537d2fffc047b6","url":"./tags/加密货币/index.html"},{"revision":"14f1335c61c73709870f3bf6b042b86a","url":"./tags/加载动画/index.html"},{"revision":"c592880f42f5da25cdcfcfa1bb405c06","url":"./tags/区块链/index.html"},{"revision":"8f2016a7f824497fe350ebf4f0a0d30b","url":"./tags/右键菜单/index.html"},{"revision":"bc5c3b52eca42cfdca451060febf74b6","url":"./tags/域名/index.html"},{"revision":"7dfceaced006312401cab45779cc6c61","url":"./tags/密码学/index.html"},{"revision":"17efb0396147339f45e83587f04e7984","url":"./tags/建站/index.html"},{"revision":"81690d6fb9f957f4451503124a01527e","url":"./tags/插件/index.html"},{"revision":"f3eade397a4e8dbda9429cd11a760dc9","url":"./tags/服务器/index.html"},{"revision":"d1034bdee7fd768a49ef1170dbcb2629","url":"./tags/网页源码/index.html"},{"revision":"354956870754abbc39106636dd4f5fe3","url":"./tags/美化/index.html"},{"revision":"ee48266d82a07f3792a2514e718c68e6","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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