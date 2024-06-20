const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"a9f32e91e8b8e31fe89678fdf87000c2","url":"./404.html"},{"revision":"c3374b5bee8ddd2765fd6725a6104286","url":"./about/index.html"},{"revision":"72c8138b558502381000678ff26eee91","url":"./archives/2022/06/index.html"},{"revision":"062f2b73bcd0c5d5d5c2cab46e1fbc6a","url":"./archives/2022/07/index.html"},{"revision":"efeaf15897968247264a6678ad031f58","url":"./archives/2022/08/index.html"},{"revision":"89735592582ee1289ba1edbf87bc9726","url":"./archives/2022/10/index.html"},{"revision":"3db7de048801ee213a3263b428b1d8fc","url":"./archives/2022/11/index.html"},{"revision":"fa5966204ebc8d4e35a0079400e16666","url":"./archives/2022/12/index.html"},{"revision":"54d22e5280cbe35bc8a5d7def6fb623a","url":"./archives/2022/index.html"},{"revision":"97c84b4c1e54a3f79964fae1cfff4267","url":"./archives/2022/page/2/index.html"},{"revision":"432838d548e9879f796bde96e7774fc0","url":"./archives/2023/02/index.html"},{"revision":"fb428c743ffb1f5997c3e4aa9d5aeaac","url":"./archives/2023/04/index.html"},{"revision":"87fdb4c0b49f53b75344d91d9c2b45ea","url":"./archives/2023/index.html"},{"revision":"14582532fa8d9612c5b2851f044419ed","url":"./archives/2024/04/index.html"},{"revision":"4e9077f55727c6ea027ce647939ebceb","url":"./archives/2024/05/index.html"},{"revision":"52911c6cdfba1adc4f36f4bbf95507d1","url":"./archives/2024/06/index.html"},{"revision":"08231db68025fc6bfec56392d40cd104","url":"./archives/2024/index.html"},{"revision":"87334f16f464f982131bce30cb414471","url":"./archives/index.html"},{"revision":"a9e954c8a0b44c70f339a0f0193fc1b0","url":"./archives/page/2/index.html"},{"revision":"743c124633717793409d1abad186d3bc","url":"./categories/AI/index.html"},{"revision":"9ad9a47c2d86fe7f9e571f352de090ad","url":"./categories/Gridea/index.html"},{"revision":"f45a2da1cbe33e7d1d5e3f56271515a2","url":"./categories/index.html"},{"revision":"e7d33a5e3a5b611589908490c0e3a6a7","url":"./categories/Vercel/index.html"},{"revision":"562629dc71ccc64d12da74e3419fd1d7","url":"./categories/休闲/index.html"},{"revision":"712d89dc09a25402e395844041ee75bf","url":"./categories/建站/index.html"},{"revision":"6a12f1ad799f9785f00b3faa0844fc0c","url":"./categories/科普/index.html"},{"revision":"50016712394650a0a9862342a1c256cb","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"5278906b76dc8ef63648c0379c08b485","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"e927ce0f52aa7a8faa564ac00240dfdd","url":"./go/index.html"},{"revision":"2d7d5f9445a9f75ca2c618c7aaa1d88d","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"901f256082016657a306bd6f3d368b3f","url":"./link/index.html"},{"revision":"c3d6314a70dd97f4a6aa6a5c2f44d67b","url":"./message/index.html"},{"revision":"24b157183c29e6abf9316f63ce058a31","url":"./page/2/index.html"},{"revision":"634f9a564333411df26474514785bbab","url":"./post/193912eb/index.html"},{"revision":"120292e51b24194904506456080632e4","url":"./post/220b8380/index.html"},{"revision":"46f2e54d0132320ab0597f63d51bc976","url":"./post/24dc856c/index.html"},{"revision":"3c3d653588999628de876aa520ba6a91","url":"./post/3082b2c6/index.html"},{"revision":"52817e8018072099c211cb6b48ee90cd","url":"./post/3df9585/index.html"},{"revision":"8b3b320579c9d94e7c6efc12ad43e95f","url":"./post/4a17b156/index.html"},{"revision":"b3f285e7139957c3278349a08cd6bc86","url":"./post/739f0a30/index.html"},{"revision":"3f9ad695fd54f9f85bceb0d793559aea","url":"./post/73fccf9a/index.html"},{"revision":"cd2d2e3208b6e8ee1b6f9eed1741144b","url":"./post/7ca5704e/index.html"},{"revision":"a7f9c6238efc70ac98bd0d62a1121beb","url":"./post/7fc77154/index.html"},{"revision":"ea2cc55f7c8c66895e2eab9f360e2534","url":"./post/8097b5e3/index.html"},{"revision":"4cc260c522d7bfb49c53669aafe959e4","url":"./post/8422c4dc/index.html"},{"revision":"a5ecf4b9e1503dea4d76ef9f1ad6a609","url":"./post/99c7fa1c/index.html"},{"revision":"104efb66a374ae178a90cda53eb98017","url":"./post/9c60e209/index.html"},{"revision":"7a485b12baf09eea9128fead8e6c7a17","url":"./post/ae58d2f1/index.html"},{"revision":"79576ca08493c63067a07cc00e3232f3","url":"./post/d4550abf/index.html"},{"revision":"9c09046d21fdfd37b2f4737f0f9a46b2","url":"./post/d50c4d0e/index.html"},{"revision":"94903c0dcd830c4b17d04cab01e11488","url":"./post/db569493/index.html"},{"revision":"4f2dda4cc9cdd5761cef69b6e36c0071","url":"./post/dd83a796/index.html"},{"revision":"89f9648c7fa024ddaafdb79e81dfa426","url":"./post/f82f332a/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"9b84e0149a33ff1177172b941bdd476e","url":"./tags/AI/index.html"},{"revision":"49b77bf0b780b743926f2d1a2980f675","url":"./tags/Aplayer/index.html"},{"revision":"1f7ef19292e92b80b0cea0337848459d","url":"./tags/Bing/index.html"},{"revision":"f250ebb85bf2a639eded472e7e251ce2","url":"./tags/BUG/index.html"},{"revision":"25553d32b53adbf3fb1c0d6a8ffda140","url":"./tags/CDN/index.html"},{"revision":"b54698073e6fc81d8cb7a301371caff3","url":"./tags/CMS/index.html"},{"revision":"3d71eebf91bdd3c41bdb6310d8fdd908","url":"./tags/css/index.html"},{"revision":"bdae06f6af843ae307ae9a9ccc3614cc","url":"./tags/DNS/index.html"},{"revision":"27d711967489b4f60528486ea008fc27","url":"./tags/Flash/index.html"},{"revision":"01c00fa7aeefcc384805f96107e58341","url":"./tags/GFW/index.html"},{"revision":"a7c474c351182a8d1246ba4f13f58718","url":"./tags/Gridea/index.html"},{"revision":"f011abaee3e5847c69556a3c7846cb07","url":"./tags/HTML/index.html"},{"revision":"f1a8e55db06b8016ec3431bab6af0aaa","url":"./tags/index.html"},{"revision":"9f9551bcf9c5a8d948e1aa8616924880","url":"./tags/JavaScript/index.html"},{"revision":"8a0a2fbc37edcf79f22e71ed8e29c099","url":"./tags/JQuery/index.html"},{"revision":"750f9af4c584a2b7bc33510489131644","url":"./tags/MetingJS/index.html"},{"revision":"9839ca67ecc2d87e842e99cc56952280","url":"./tags/NexT/index.html"},{"revision":"e76c0a0d6da12d904a9230012924cedf","url":"./tags/RSA/index.html"},{"revision":"b52b867ceaedab3de4550ed34ff1e87e","url":"./tags/Vercel/index.html"},{"revision":"1a0095ff96dffb15c23e206bca5b6ef9","url":"./tags/分享/index.html"},{"revision":"78beec0dc5775a82c2449d93b580646b","url":"./tags/加密/index.html"},{"revision":"17f346192b84a910f86379cea9b13317","url":"./tags/加载动画/index.html"},{"revision":"d27635bb388e9a32f5d7daba314fc0d5","url":"./tags/右键菜单/index.html"},{"revision":"def12f18b4208853787e12efb7ebe816","url":"./tags/域名/index.html"},{"revision":"87c197223526f2d391a13db42c172595","url":"./tags/密码学/index.html"},{"revision":"2d1ddb812c1900fb9c67bd73f0e896fb","url":"./tags/建站/index.html"},{"revision":"82e820a5f11612e36c320032728bef60","url":"./tags/插件/index.html"},{"revision":"62ece27d4c72e306e7aff618715b58a1","url":"./tags/服务器/index.html"},{"revision":"57d584ec54cb156a99b74c282a31b5d4","url":"./tags/网页源码/index.html"},{"revision":"4638e1ef69f959abce1c50147b55e003","url":"./tags/美化/index.html"},{"revision":"93de62e337a6dfd30728b1fff99ad172","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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