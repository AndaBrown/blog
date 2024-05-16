const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"3ece70b262279b9f2d562f2bfed69f3a","url":"./404.html"},{"revision":"ad318d3cf3ed7646fd3b188a273d6ed4","url":"./about/index.html"},{"revision":"de471a07f154792693dd2b58cae86aac","url":"./archives/2022/06/index.html"},{"revision":"a66a8f8b21c77682ccd0b7ffd7abd2ec","url":"./archives/2022/07/index.html"},{"revision":"bc67a6df8d70be1be06f1c6a13bee4cf","url":"./archives/2022/08/index.html"},{"revision":"48172730ff962e386af7b2afb29ec332","url":"./archives/2022/10/index.html"},{"revision":"534710b73530a7b3d5f443a8fad935f5","url":"./archives/2022/11/index.html"},{"revision":"36083c6c8c8d5d65b6309e8c9dfe4910","url":"./archives/2022/12/index.html"},{"revision":"c6e128c6be6b09992a627b52c2a89182","url":"./archives/2022/index.html"},{"revision":"3865bcbe0166ed28234554c2731d7dfa","url":"./archives/2022/page/2/index.html"},{"revision":"2b0d0bfb484b7cd63dfff8f868452538","url":"./archives/2023/02/index.html"},{"revision":"9a2a9f9fb39cf3a4ba6ef9c49a27b689","url":"./archives/2023/04/index.html"},{"revision":"99c67070c21bc929dee75abf2c544295","url":"./archives/2023/index.html"},{"revision":"33d9735d86156341d3ccaac5d270f2f6","url":"./archives/2024/04/index.html"},{"revision":"9796f421f22f2aaf6fb9f958f8e001b1","url":"./archives/2024/index.html"},{"revision":"7b326242bdd29ccd159d489501540ea5","url":"./archives/index.html"},{"revision":"db3d01caf557d03d1e9b3b74a18a6025","url":"./archives/page/2/index.html"},{"revision":"ebaf7d63f29cc77c3c33029fd783ba0f","url":"./categories/AI/index.html"},{"revision":"b36985c9b5f4f7b20a7c232e6b2e7383","url":"./categories/Gridea/index.html"},{"revision":"7ba3d89b48d240a744579847670c8974","url":"./categories/index.html"},{"revision":"df02d9970f34fb26c625b29561576675","url":"./categories/Vercel/index.html"},{"revision":"1424b6f019fbdd2021aeb8b2665d6d05","url":"./categories/休闲/index.html"},{"revision":"400c13c4f52c41ed7dab6b5f3f4f40cd","url":"./categories/建站/index.html"},{"revision":"751ab39e5404c3befcb2c6913aaf907f","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"14ba9c9e103ac4f4662f2de4ebf4d067","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"8852c5db28bf383d64ac0fb773b8b755","url":"./go/index.html"},{"revision":"f3aab15bda3e97e1fdd807c1c06f3537","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"651be6dbc78bac33fa6223998cb3c490","url":"./link/index.html"},{"revision":"9fe1a281b2160d8d2e130d2df122bb17","url":"./message/index.html"},{"revision":"47d7d0f5f7e9a33cac05225f976ef12f","url":"./page/2/index.html"},{"revision":"399dd32c6910f695c86a4daeb0439c96","url":"./post/193912eb/index.html"},{"revision":"35afd37d9da92ff6b662d8f2addca8f2","url":"./post/220b8380/index.html"},{"revision":"db53d842417aa6b90f997eefbae8b071","url":"./post/24dc856c/index.html"},{"revision":"5ddb4bec29a797691e486df05e1fa8eb","url":"./post/3082b2c6/index.html"},{"revision":"84200cc08b420119d6a2b3c667ec7e20","url":"./post/3df9585/index.html"},{"revision":"a63d50e4e347e4d171c9871fea4bc8ef","url":"./post/4a17b156/index.html"},{"revision":"86bda4aaadf80752b0e2fc54687f8e74","url":"./post/739f0a30/index.html"},{"revision":"32408caedd6a50f281cbc0b9e79c5bac","url":"./post/73fccf9a/index.html"},{"revision":"cdcd4f2d83a800f5323554392386af4b","url":"./post/7ca5704e/index.html"},{"revision":"b9f6b41e4ef14e968e1c8d5cd6b4fad7","url":"./post/7fc77154/index.html"},{"revision":"ac5563bb07a3ab96207904addc917aaa","url":"./post/8422c4dc/index.html"},{"revision":"ccd27d36a937f51686dbc16f621a7d0c","url":"./post/99c7fa1c/index.html"},{"revision":"8d28a5db3701237e29ca49920c8d3134","url":"./post/9c60e209/index.html"},{"revision":"b0be14148bd83c8529996f436a1092b7","url":"./post/d4550abf/index.html"},{"revision":"41062bd1e0df7362109eae941068b15d","url":"./post/d50c4d0e/index.html"},{"revision":"250cd910013310c6de729ace4002acf8","url":"./post/db569493/index.html"},{"revision":"9b71eaaccdb257b1c79c539ae3ef7292","url":"./post/dd83a796/index.html"},{"revision":"031ae152a7dfa72578367344055e6af7","url":"./post/f82f332a/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"e51597a9c6e5a8f187972c265e861c37","url":"./tags/AI/index.html"},{"revision":"8c6951d5774b319e51572eaad72fffe7","url":"./tags/Aplayer/index.html"},{"revision":"c3ddeb64d80679d22fc9b620f927591c","url":"./tags/Bing/index.html"},{"revision":"e73e332e26c01c0e309fdd3b6d5bb4b8","url":"./tags/BUG/index.html"},{"revision":"436ebc4abb8854e33ae252f3d10a3b20","url":"./tags/CMS/index.html"},{"revision":"06658065b9b8a4d7cec6a6a099194029","url":"./tags/css/index.html"},{"revision":"0814a5d57a1061fe0b20bc936df78b25","url":"./tags/DNS/index.html"},{"revision":"4b407a497a3aecb49ff72cb0686cfd6b","url":"./tags/Flash/index.html"},{"revision":"e29ee6e991497c3679fa759ff8f2beb2","url":"./tags/GFW/index.html"},{"revision":"7898e6bcd658deedff83f357cb93959b","url":"./tags/Gridea/index.html"},{"revision":"f4c4d389159a0da1edc9eded0eaf690e","url":"./tags/HTML/index.html"},{"revision":"663a1c8ef69bab5b8e12abb225764676","url":"./tags/index.html"},{"revision":"733b1d75113e2404f121b7e5a8986794","url":"./tags/JavaScript/index.html"},{"revision":"c8f5e756b1b9ff4e302773213d25557c","url":"./tags/JQuery/index.html"},{"revision":"11350d624042db2c09f014e5ebe9feaf","url":"./tags/MetingJS/index.html"},{"revision":"653d42dc1f9994d2c9ddb19de319bb1e","url":"./tags/NexT/index.html"},{"revision":"82c4adb68410468da479e49ebd764c5e","url":"./tags/Vercel/index.html"},{"revision":"ea84720333658ac04725a1a8f297e422","url":"./tags/分享/index.html"},{"revision":"9e317111c448cc60d9382ac80318bc59","url":"./tags/加载动画/index.html"},{"revision":"b7d130f091fba37d1c021ff3b4e629bd","url":"./tags/右键菜单/index.html"},{"revision":"70508e7c3c1e708ed52e684a46c1fdcc","url":"./tags/域名/index.html"},{"revision":"354c3063888b0159a72008882a209700","url":"./tags/建站/index.html"},{"revision":"5655a10acc08a871d57d2dbfac464021","url":"./tags/插件/index.html"},{"revision":"14c2883f1b4e4956bf86c71402ca0692","url":"./tags/服务器/index.html"},{"revision":"8499e432bbb0636cc1439b5b5354752f","url":"./tags/网页源码/index.html"},{"revision":"430e3653a92bdc68a096a504120c0894","url":"./tags/美化/index.html"}]);
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