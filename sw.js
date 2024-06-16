const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"1adf84ae563529f4de0b5305805e8d54","url":"./404.html"},{"revision":"538f43e948975344b4361ba63fcf6c1e","url":"./about/index.html"},{"revision":"442e6e598289bf5b54e2684725435e4b","url":"./archives/2022/06/index.html"},{"revision":"69c1631c90d11c2e2285eea8cf49acd4","url":"./archives/2022/07/index.html"},{"revision":"c3eeca7153ee85044dd6e20035caf364","url":"./archives/2022/08/index.html"},{"revision":"0b6a8a675ff3c79c92159e83b8260ca6","url":"./archives/2022/10/index.html"},{"revision":"f4723e993baf01e4ee1c2d8dd604f8a5","url":"./archives/2022/11/index.html"},{"revision":"c1cb74b0b46ad2ec776d7a10ad6fd0ab","url":"./archives/2022/12/index.html"},{"revision":"7c1834a9e145012555e250b7cf1aa7be","url":"./archives/2022/index.html"},{"revision":"e987a07cc2b4169d75b3c4a3915b7b5f","url":"./archives/2022/page/2/index.html"},{"revision":"6af11a9c94e899b10c269726c57ee4a4","url":"./archives/2023/02/index.html"},{"revision":"87dc2e1ef23104297b11f6555568ccbf","url":"./archives/2023/04/index.html"},{"revision":"1cd541d2b4fb27fcb4f500f002830aab","url":"./archives/2023/index.html"},{"revision":"ab7513bbe679b691ddd49552e169fb09","url":"./archives/2024/04/index.html"},{"revision":"9224b92ef058ba0162a01bca08a3fd44","url":"./archives/2024/05/index.html"},{"revision":"46ff73530cff146b9cbe5c7941e39028","url":"./archives/2024/06/index.html"},{"revision":"94edebf182c4f1fb5805cc4aeb1dfef3","url":"./archives/2024/index.html"},{"revision":"f71fbcec2d5875dd51ef5120754148bc","url":"./archives/index.html"},{"revision":"c796ccb77b26660b9be5d67fea9a5bca","url":"./archives/page/2/index.html"},{"revision":"b382f4558ccc601939a88f7101a47f0c","url":"./categories/AI/index.html"},{"revision":"b540149f7a4048fbad20941fbd67eacc","url":"./categories/Gridea/index.html"},{"revision":"4dcded2f72c2adeae4f6be73f3271e27","url":"./categories/index.html"},{"revision":"41668014008e04687cb1c4de93af8929","url":"./categories/Vercel/index.html"},{"revision":"24a28df0f9511e5c2c8a2afd12ee0d85","url":"./categories/休闲/index.html"},{"revision":"48dd4748cb37fb67bb1aaba83bbb8c08","url":"./categories/建站/index.html"},{"revision":"1ee9f4536adf20c046f364041b99021f","url":"./categories/科普/index.html"},{"revision":"189baf0c6e86ccf0195fa08c452dcade","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"705eeea587632edad80b5711a73aeef8","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"392419a380566e73cf5a1aef587d3079","url":"./go/index.html"},{"revision":"8b82a1921d4f9f59e3fe41680d0004ab","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"3597fbd77fffb20ad65ff88652f7442a","url":"./link/index.html"},{"revision":"2c29ea8c812e21e8c0ddde90d2428e12","url":"./message/index.html"},{"revision":"e911f0d6520c86f91347f1f5a91e466c","url":"./page/2/index.html"},{"revision":"bc04ce10d9389398cafc9876165a22c1","url":"./post/ /index.html"},{"revision":"edd471a2c30a8d7df161c16711e0976e","url":"./post/193912eb/index.html"},{"revision":"76f46d44c841e75e2013d006ce6e8031","url":"./post/220b8380/index.html"},{"revision":"fb9bebae545f4cc802378b9413b5255a","url":"./post/24dc856c/index.html"},{"revision":"309b4f74b535eb14df4c82c3d4de5cf0","url":"./post/3082b2c6/index.html"},{"revision":"cc9d70069094ed552582cec74f93edd0","url":"./post/3df9585/index.html"},{"revision":"f0cf5c4e611d3691e6cdea13fd760a4f","url":"./post/4a17b156/index.html"},{"revision":"83ea962e87e91734a78e06fc72ff3e27","url":"./post/739f0a30/index.html"},{"revision":"cff3762012ca820f122ac32e4dfb458d","url":"./post/73fccf9a/index.html"},{"revision":"b05646ad18993f4d98a2ce02041c5c88","url":"./post/7ca5704e/index.html"},{"revision":"5e6fd3d6ad0a97c0642da830fac26509","url":"./post/7fc77154/index.html"},{"revision":"7fc21bea0451d1823e1b2810fe76d4fe","url":"./post/8422c4dc/index.html"},{"revision":"cf403aaa8ae9894e3267a8f27036faa5","url":"./post/99c7fa1c/index.html"},{"revision":"9402c48180ea55c5d6202358fb907387","url":"./post/9c60e209/index.html"},{"revision":"53d541c2bf9bf2dc34b79f1c6cc81105","url":"./post/ae58d2f1/index.html"},{"revision":"ed58625c86b63e04da59767c9aa719e0","url":"./post/d4550abf/index.html"},{"revision":"93d28ae22a576d4aef90583e86ddd29c","url":"./post/d50c4d0e/index.html"},{"revision":"e043f9827c799e5310a117744c092537","url":"./post/db569493/index.html"},{"revision":"b52b01e91b1c448e438053933c0a705e","url":"./post/dd83a796/index.html"},{"revision":"d8ea0e4b5e6bddd1f1fe892364960ae5","url":"./post/f82f332a/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"d39e246ff81dd6ad204a334cc0f02ddf","url":"./tags/AI/index.html"},{"revision":"c306c07bb1d8c613786de9e96006ef4b","url":"./tags/Aplayer/index.html"},{"revision":"2ac3782444f7b9499cd4cd160c3f45d2","url":"./tags/Bing/index.html"},{"revision":"b0b484e34cbefdb7b0a0bc2111cbf0bb","url":"./tags/BUG/index.html"},{"revision":"886dd6d53e4cf51c2f11782991aef56b","url":"./tags/CDN/index.html"},{"revision":"411c9e63d666b0e4b1022e459efe7bfd","url":"./tags/CMS/index.html"},{"revision":"067623c530518fac8b2f4fee93c4f047","url":"./tags/css/index.html"},{"revision":"f86a980d1d28d48b779f67b49734f435","url":"./tags/DNS/index.html"},{"revision":"62a0888e8664496095c4ce3ce97e8101","url":"./tags/Flash/index.html"},{"revision":"4316dbe581881ea3347735a1d27fd356","url":"./tags/GFW/index.html"},{"revision":"8672a069a306271620fd68c505ef8a3c","url":"./tags/Gridea/index.html"},{"revision":"406f27684a4b040d561508b004690452","url":"./tags/HTML/index.html"},{"revision":"c8767ae43c3d5e4030e8a47cb9d30fc3","url":"./tags/index.html"},{"revision":"a95b92553cf8f9f8ef4e0c974d86486d","url":"./tags/JavaScript/index.html"},{"revision":"6dce39b5156d08c7d377d3b7b476b5a3","url":"./tags/JQuery/index.html"},{"revision":"9fa285da9ecf332b962a30eeab79205f","url":"./tags/MetingJS/index.html"},{"revision":"4d9d4746c6c344ba04406d6346a807b7","url":"./tags/NexT/index.html"},{"revision":"e1d98581cc85c40c37409d4c1c82d6b1","url":"./tags/RSA/index.html"},{"revision":"46f65923b337534cc7072fee009ffe00","url":"./tags/Vercel/index.html"},{"revision":"85e2cfb5eedb0aec6e15850fbbf7d37a","url":"./tags/分享/index.html"},{"revision":"48fda591fd2a554b51b6434e4444e3fe","url":"./tags/加密/index.html"},{"revision":"17d9fd0cd50df67a14e8d1a88fc98908","url":"./tags/加载动画/index.html"},{"revision":"7c3803a24fd4d87a3a90c3f166e7f649","url":"./tags/右键菜单/index.html"},{"revision":"f065f28bda3746fb948a060392985177","url":"./tags/域名/index.html"},{"revision":"39340be3cff528b8abb4427095f573ec","url":"./tags/密码学/index.html"},{"revision":"5f6f17f60898e7dfc5a84d6982608de6","url":"./tags/建站/index.html"},{"revision":"3808747669d795d9241fb1b9d733fe33","url":"./tags/插件/index.html"},{"revision":"e1ae8655d57e3cce751e9f79627d69e9","url":"./tags/服务器/index.html"},{"revision":"5ec709a11ddcc80629ca47ee7738d140","url":"./tags/网页源码/index.html"},{"revision":"71e4257ad879591f8b7e7553e71b2203","url":"./tags/美化/index.html"},{"revision":"858c2636f2782b81b14493a577bdedec","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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