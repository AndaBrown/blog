const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"6fd4869e09658c105505012b43a7ac58","url":"./404.html"},{"revision":"3d38c48864aa008e781645ba5a993b0d","url":"./about/index.html"},{"revision":"84efb0f663a35fabeee5258d0696ffd2","url":"./archives/2022/06/index.html"},{"revision":"7c816c4f2c192b7a96f3abc5a7788bfe","url":"./archives/2022/07/index.html"},{"revision":"6e01a86ba0ca7332ebdb360127338216","url":"./archives/2022/08/index.html"},{"revision":"863f1c2e492f358bfa6571c5ad6df5d8","url":"./archives/2022/10/index.html"},{"revision":"7d97cd683fc40dfc04d783c1f7b58f0b","url":"./archives/2022/11/index.html"},{"revision":"3b300a2e927185401ccc2de1e7ae1de0","url":"./archives/2022/12/index.html"},{"revision":"f2a3975cc661e6a0bc9553b68f03707e","url":"./archives/2022/index.html"},{"revision":"0891408cf6644333e1a1384323a82130","url":"./archives/2022/page/2/index.html"},{"revision":"2e2a250d531f080f8713b38a8a019821","url":"./archives/2023/02/index.html"},{"revision":"fdc86285e0582c3a454897a1f050beb0","url":"./archives/2023/04/index.html"},{"revision":"44a0ca234ec6478437885996b72cdfa3","url":"./archives/2023/index.html"},{"revision":"56aae5218b4c1f4e7d4cd93864e41d09","url":"./archives/2024/04/index.html"},{"revision":"94f8319e60d746cffa6500dd4ba75967","url":"./archives/2024/index.html"},{"revision":"6e33b93d2b55fa0a5c0ae066bf6e8f04","url":"./archives/index.html"},{"revision":"9f89d7eb59062bc43112270fba0a2f06","url":"./archives/page/2/index.html"},{"revision":"0d74e57a675066502b32e9715a98cb7f","url":"./categories/AI/index.html"},{"revision":"eb1d711afca5c88f18a9ce469a8eccd6","url":"./categories/Gridea/index.html"},{"revision":"a8b4d49b0616432553462a4ca343f141","url":"./categories/index.html"},{"revision":"e5a479c5bd13f2d4fe36bc169c205199","url":"./categories/Vercel/index.html"},{"revision":"454b374f663167dab9b0a7a4b2fc3aab","url":"./categories/休闲/index.html"},{"revision":"cdb4e19f1667ec761d6d74e4044e9769","url":"./categories/建站/index.html"},{"revision":"2a34f701143fd83218087fc16f75b481","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"f26456a063349770b950db6253d12712","url":"./cookies-instructions/index.html"},{"revision":"205c3f8ce8bcb56d669a1c6ed35878e4","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"8852c5db28bf383d64ac0fb773b8b755","url":"./go/index.html"},{"revision":"b22c5837f69e76a2cc7148178bc6211e","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"e3a89a5560001fc7f66ae0d809d1c476","url":"./link/index.html"},{"revision":"135004b3c641ab9b338f45d26dde2d3c","url":"./message/index.html"},{"revision":"751d7196f9c8275100633702698b5a94","url":"./page/2/index.html"},{"revision":"399dd32c6910f695c86a4daeb0439c96","url":"./post/193912eb/index.html"},{"revision":"35afd37d9da92ff6b662d8f2addca8f2","url":"./post/220b8380/index.html"},{"revision":"db53d842417aa6b90f997eefbae8b071","url":"./post/24dc856c/index.html"},{"revision":"5ddb4bec29a797691e486df05e1fa8eb","url":"./post/3082b2c6/index.html"},{"revision":"84200cc08b420119d6a2b3c667ec7e20","url":"./post/3df9585/index.html"},{"revision":"a63d50e4e347e4d171c9871fea4bc8ef","url":"./post/4a17b156/index.html"},{"revision":"86bda4aaadf80752b0e2fc54687f8e74","url":"./post/739f0a30/index.html"},{"revision":"32408caedd6a50f281cbc0b9e79c5bac","url":"./post/73fccf9a/index.html"},{"revision":"cdcd4f2d83a800f5323554392386af4b","url":"./post/7ca5704e/index.html"},{"revision":"b9f6b41e4ef14e968e1c8d5cd6b4fad7","url":"./post/7fc77154/index.html"},{"revision":"ac5563bb07a3ab96207904addc917aaa","url":"./post/8422c4dc/index.html"},{"revision":"ccd27d36a937f51686dbc16f621a7d0c","url":"./post/99c7fa1c/index.html"},{"revision":"8d28a5db3701237e29ca49920c8d3134","url":"./post/9c60e209/index.html"},{"revision":"b0be14148bd83c8529996f436a1092b7","url":"./post/d4550abf/index.html"},{"revision":"41062bd1e0df7362109eae941068b15d","url":"./post/d50c4d0e/index.html"},{"revision":"250cd910013310c6de729ace4002acf8","url":"./post/db569493/index.html"},{"revision":"9b71eaaccdb257b1c79c539ae3ef7292","url":"./post/dd83a796/index.html"},{"revision":"031ae152a7dfa72578367344055e6af7","url":"./post/f82f332a/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"8c382cab8a5c9775b5bb0640cd08e308","url":"./tags/AI/index.html"},{"revision":"8de5f3cfd6884522851e7c4d6cac643e","url":"./tags/Aplayer/index.html"},{"revision":"fa4a64aa02e5ea27a877b072b4420bec","url":"./tags/Bing/index.html"},{"revision":"b12ac12677773c4a2d615869c3897ac3","url":"./tags/BUG/index.html"},{"revision":"4abd23f0a4c7902842875bbb01605908","url":"./tags/CMS/index.html"},{"revision":"c350e1c7b29f6b1f76de1fd1b22a23e1","url":"./tags/css/index.html"},{"revision":"6505397d1b17f154181c72184b7bfc56","url":"./tags/DNS/index.html"},{"revision":"e13a1b0f2f8aec3614a85cd60f38508a","url":"./tags/Flash/index.html"},{"revision":"18ac9b7adf5f39c91195d151f203fded","url":"./tags/GFW/index.html"},{"revision":"2f338ee5e0a3b6906039677d6ef56ca2","url":"./tags/Gridea/index.html"},{"revision":"02c2f0af4d22566df2d966279789a54c","url":"./tags/HTML/index.html"},{"revision":"2c5fccdc851e1e8ca038756aa082c4db","url":"./tags/index.html"},{"revision":"0e0c8332e6c15d6188db535cdafbb46b","url":"./tags/JavaScript/index.html"},{"revision":"098c2b5f1213a2c6f4ca63781701af25","url":"./tags/JQuery/index.html"},{"revision":"a487b386d13b671048fc26cc2434bbd3","url":"./tags/MetingJS/index.html"},{"revision":"8a41b5208775316fbf4ccdc9c95aa73b","url":"./tags/NexT/index.html"},{"revision":"61d14a9cf92646c0ed71669b6e0805e5","url":"./tags/Vercel/index.html"},{"revision":"6bf710db090134ada163679e7d4e27c8","url":"./tags/分享/index.html"},{"revision":"c7bb18f4c20356b732c7470727239446","url":"./tags/加载动画/index.html"},{"revision":"99ec3bd439ff293d6fe6bfba27a74c06","url":"./tags/右键菜单/index.html"},{"revision":"6d11221216a3e7460b1bfa9e4521b4c2","url":"./tags/域名/index.html"},{"revision":"ff1e205bdc1acbc23d9825cc7b367001","url":"./tags/建站/index.html"},{"revision":"ff0740299ef1f43dcc28f20c082519a1","url":"./tags/插件/index.html"},{"revision":"01af503f01122759647334cdbfe0ca54","url":"./tags/服务器/index.html"},{"revision":"95277018d53dc050676bc0a9d491fbce","url":"./tags/网页源码/index.html"},{"revision":"5bd0b3f6cbc0774f65e89c2f0fe39cf9","url":"./tags/美化/index.html"}]);
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