const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"61bff0c7e0faff4f137d414c747bd6f0","url":"./404.html"},{"revision":"7e562ba9be4d9c595e4dc7d9f6ab69d6","url":"./about/index.html"},{"revision":"870b698d90d4194b72a5864ecf38571d","url":"./archives/2022/06/index.html"},{"revision":"a40114e66c95d4850c17eedb8942f356","url":"./archives/2022/07/index.html"},{"revision":"10a0babaacf4727807e2db45b9839c9c","url":"./archives/2022/08/index.html"},{"revision":"3822c67ae57df524776ee4298a77fa55","url":"./archives/2022/10/index.html"},{"revision":"38372b91137ebe476d96d393ce911c09","url":"./archives/2022/11/index.html"},{"revision":"f25654a87be65e5dd1bd4a6bb3c77e36","url":"./archives/2022/12/index.html"},{"revision":"66be986e0d5bd744b62cfff256ad6927","url":"./archives/2022/index.html"},{"revision":"317f10bda5e3760dce073a7f99c05a32","url":"./archives/2022/page/2/index.html"},{"revision":"437a2e047bad7b8b9356c74f605f5cc0","url":"./archives/2023/02/index.html"},{"revision":"0d756aa1d89b0412d0183b96528fe4c0","url":"./archives/2023/04/index.html"},{"revision":"a718ad35228a7c175d37e8dd95f2d7a0","url":"./archives/2023/index.html"},{"revision":"96e08924f82053203c19a737eaa67ea8","url":"./archives/2024/04/index.html"},{"revision":"6953893a436765803959e8a50ba794f8","url":"./archives/2024/05/index.html"},{"revision":"caacd4c901afb0db7047d9bb92bddf88","url":"./archives/2024/index.html"},{"revision":"fb2d4f9a0db865de03fcc2a60493fe1e","url":"./archives/index.html"},{"revision":"0c854fc9637d9528748329af675565bf","url":"./archives/page/2/index.html"},{"revision":"60383ffdc1d919f6e56683becd328da4","url":"./categories/AI/index.html"},{"revision":"37392cfc14bfcf74382d0fa653e6d24a","url":"./categories/Gridea/index.html"},{"revision":"ee10e9990c418e62f0d07368535a07b6","url":"./categories/index.html"},{"revision":"5d6e6e9a88d6242cf56d240ef8ecb435","url":"./categories/Vercel/index.html"},{"revision":"f4002938b1a82457c1ca7057f5f76051","url":"./categories/休闲/index.html"},{"revision":"7c3ddf227d2ce18296f5690171b4e271","url":"./categories/建站/index.html"},{"revision":"6945f437ff5b0767fbae43b21d4b5711","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"1561ed20b11caa6272dba1edd820373c","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"392419a380566e73cf5a1aef587d3079","url":"./go/index.html"},{"revision":"7c8b0f5e824158066109e807a2e32cbc","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"90af68601d5f5b3faecb682d4693e6f6","url":"./link/index.html"},{"revision":"fc76c2ef5f30ef52b91a372a9b2e809e","url":"./message/index.html"},{"revision":"4d9844ee615256b4647ee40a6261f889","url":"./page/2/index.html"},{"revision":"b36bd37c40bb8a316dfa2970dfde55fd","url":"./post/193912eb/index.html"},{"revision":"fdea7677338c9867bcd34882ba4034ab","url":"./post/220b8380/index.html"},{"revision":"068ea1ca439367d2bc43424a5ad7e0df","url":"./post/24dc856c/index.html"},{"revision":"03271752928019ce7b818ff32956e9de","url":"./post/3082b2c6/index.html"},{"revision":"ee3e73feb696d148b8a9aa1841ace84c","url":"./post/3df9585/index.html"},{"revision":"703860c989a48093a6a23eb6149c6ab6","url":"./post/4a17b156/index.html"},{"revision":"1f840588fe48ef53cf6ff0d44fe61338","url":"./post/739f0a30/index.html"},{"revision":"1fbe41cd8bf0b831e9c50d6c3ee04d96","url":"./post/73fccf9a/index.html"},{"revision":"ae332a0f481d13dc801a0fef4dee7ac3","url":"./post/7ca5704e/index.html"},{"revision":"b809e1b1cd3e334bd53024eaad6d40ba","url":"./post/7fc77154/index.html"},{"revision":"049955e3f1ad8340ca32b159f4e354c7","url":"./post/8422c4dc/index.html"},{"revision":"989908a0fe7acc6194e635aab77573b0","url":"./post/99c7fa1c/index.html"},{"revision":"6c12963d8884eb02a165e76e012e792c","url":"./post/9c60e209/index.html"},{"revision":"6479024c518f5558e3a6ae4692c96f4f","url":"./post/ae58d2f1/index.html"},{"revision":"23ee95264546c987dbd76a5846d8e947","url":"./post/d4550abf/index.html"},{"revision":"68089590f19d9ebe5312e5d0e00a2135","url":"./post/d50c4d0e/index.html"},{"revision":"0068f7021405ae8219635dc5ed32a6a6","url":"./post/db569493/index.html"},{"revision":"f3fe3046bdc9a6200398f91a554d8e2f","url":"./post/dd83a796/index.html"},{"revision":"71faa986bc304f0c5db37f653c304bbf","url":"./post/f82f332a/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"562c7d50efa1dbd34801d3d83faf0c0b","url":"./tags/AI/index.html"},{"revision":"8818787f39b1350c5c4a1bb94ace63d7","url":"./tags/Aplayer/index.html"},{"revision":"5ccf0a4871ec15792cb34ee91ecbf4af","url":"./tags/Bing/index.html"},{"revision":"a6b9eed3f48a7ea65519d402e49f7e71","url":"./tags/BUG/index.html"},{"revision":"a89d6e36b0975bd69225d201fe8e9c12","url":"./tags/CDN/index.html"},{"revision":"1f8d709be74809c1c647b195ad74e83b","url":"./tags/CMS/index.html"},{"revision":"6b348cbf5e7afe49d387ef63af20c464","url":"./tags/css/index.html"},{"revision":"fd153b15c67bf0fdb83690c8b50f093e","url":"./tags/DNS/index.html"},{"revision":"a741ae8bc2082ea6be82306e9c69300d","url":"./tags/Flash/index.html"},{"revision":"7865b6f38e61128095f42a5bbe497437","url":"./tags/GFW/index.html"},{"revision":"cafbe28c08dea492b0ac9c3959fca1d5","url":"./tags/Gridea/index.html"},{"revision":"d38d68e7eaff5344234e5a4ad255126e","url":"./tags/HTML/index.html"},{"revision":"7075bd4663017d4d014a493b62f1f4c5","url":"./tags/index.html"},{"revision":"433168b589a4052f718e15e3d7e8fdc6","url":"./tags/JavaScript/index.html"},{"revision":"202417e0833666c4ef5fe2bcebacbdd0","url":"./tags/JQuery/index.html"},{"revision":"ceb45bc1f4e8f78d557752176444fd67","url":"./tags/MetingJS/index.html"},{"revision":"05fd024c9caefe32bb52238d18fa49d2","url":"./tags/NexT/index.html"},{"revision":"88e01e9c3f78ad43f2186389973b8138","url":"./tags/Vercel/index.html"},{"revision":"7e4c12575ee935b3f2ecdb5350fa31bf","url":"./tags/分享/index.html"},{"revision":"a95da3ce9d13bb92d0f37920502e42aa","url":"./tags/加载动画/index.html"},{"revision":"b8f0d41cb17d6ec0cb8354be6f10fe7f","url":"./tags/右键菜单/index.html"},{"revision":"7fd9e8d7ae5d7952c1908ab2eb36b6f0","url":"./tags/域名/index.html"},{"revision":"6089a5e52006c8138760b59ab5a3c919","url":"./tags/建站/index.html"},{"revision":"3e691752482d69325b2de23626095cf7","url":"./tags/插件/index.html"},{"revision":"1af688ae93975623bf7f02e6bc4743ad","url":"./tags/服务器/index.html"},{"revision":"24017cde96fe2bc454d2b2b31860fe07","url":"./tags/网页源码/index.html"},{"revision":"1c6b7ffaffa50b9ecb78cf8ddb6dbcde","url":"./tags/美化/index.html"},{"revision":"fde392e9dad32f4f1970a8675578285b","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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