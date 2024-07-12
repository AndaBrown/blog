const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"a0f221b85620d60e78d99294676bcd72","url":"./404.html"},{"revision":"b76bf328acfd0a48a1f96057489513bc","url":"./about/index.html"},{"revision":"a814460517f383a996de3daa06e57f76","url":"./archives/2022/06/index.html"},{"revision":"b8d7793a015b222aa07d443816f68fe7","url":"./archives/2022/07/index.html"},{"revision":"05be5a358f3f7363a3f12ddcde23bfea","url":"./archives/2022/08/index.html"},{"revision":"381802c35633fc452b8a101377705f60","url":"./archives/2022/10/index.html"},{"revision":"453b3994c79a7779938246e82354fdbd","url":"./archives/2022/11/index.html"},{"revision":"ad5116ff4cd4d8fddc2189f321d90222","url":"./archives/2022/12/index.html"},{"revision":"e4902b7c78943b35c71c157edf9512e2","url":"./archives/2022/index.html"},{"revision":"f1811e61fde7027ad730f7ae56c9a231","url":"./archives/2022/page/2/index.html"},{"revision":"afcdc7a8dac903bd73534d389fb77e58","url":"./archives/2023/02/index.html"},{"revision":"f1a417b72eafb7a5f40bdb34204e04e9","url":"./archives/2023/04/index.html"},{"revision":"389e641dd3dc2415db00802db7374018","url":"./archives/2023/index.html"},{"revision":"332ecee4d18606c68e3801d8381c43e7","url":"./archives/2024/04/index.html"},{"revision":"db928ce50efcfe8762d2bfc3f2ae9578","url":"./archives/2024/05/index.html"},{"revision":"13ca3996f2172668c9d96d2ffbc3aa2d","url":"./archives/2024/06/index.html"},{"revision":"8de644d521d401f853b3df7d1debf450","url":"./archives/2024/index.html"},{"revision":"c655d452ba68cb51dcdc310608b7a5b1","url":"./archives/index.html"},{"revision":"7ff9c7a112b7edc066b4fb0ac5ff47b0","url":"./archives/page/2/index.html"},{"revision":"7ab42f6c1acbe9cabd8487b110de9fec","url":"./categories/AI/index.html"},{"revision":"b252dd174bd789e560be294c0ed4ef28","url":"./categories/Gridea/index.html"},{"revision":"ed7821fc523dfb6bf36785b63e0eb04d","url":"./categories/index.html"},{"revision":"2940bb073586319868085bb42d7946a4","url":"./categories/Vercel/index.html"},{"revision":"e7ea249f00e5ed272ed833e6d8fa3bc8","url":"./categories/休闲/index.html"},{"revision":"65ef52bd0640ab4fa7df426a2b8c6603","url":"./categories/建站/index.html"},{"revision":"0faf6cc3e9bc277b4cd56c2c1ecc6a9b","url":"./categories/科普/index.html"},{"revision":"784d59934602add93af376bdd5cf16b0","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"9ffe9d97fbf4c293fc8a5dc62a480321","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"e927ce0f52aa7a8faa564ac00240dfdd","url":"./go/index.html"},{"revision":"71510826295e9d73adcc4c2f51d83379","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"67200298be5743476ad8b6b9aaeb03d8","url":"./link/index.html"},{"revision":"b40fbe03c817b9fb0cecd1c1fbb5d364","url":"./message/index.html"},{"revision":"4c735128efa0669951d0df12ae3e338d","url":"./page/2/index.html"},{"revision":"312d80953dc7ea3e4d83dbebd190f1d3","url":"./post/193912eb/index.html"},{"revision":"0161f3701e476f1ad7bfd54355a5d045","url":"./post/220b8380/index.html"},{"revision":"6784188f7e9623515baad16e647aa58e","url":"./post/24dc856c/index.html"},{"revision":"d2f7d01e13745bea5aa07ebe1bc293fd","url":"./post/3082b2c6/index.html"},{"revision":"e0723938fb79911d104761e4070af3bc","url":"./post/3df9585/index.html"},{"revision":"777a8bb8207d7ce6a006fae475e0c5eb","url":"./post/4a17b156/index.html"},{"revision":"e6ff737230448ba9e3185b6a9ca7df4a","url":"./post/739f0a30/index.html"},{"revision":"c3c7ee995d96556c664599eb9dc12f7e","url":"./post/73fccf9a/index.html"},{"revision":"136769b0ed999124031af4dfc2dabfec","url":"./post/7ca5704e/index.html"},{"revision":"8b2f3453b7d1b26520334f4925e2f291","url":"./post/7fc77154/index.html"},{"revision":"69ed15c8dcac6faca2f23dae7bfc120b","url":"./post/8097b5e3/index.html"},{"revision":"d5742fe0acd1e2a93c9229e6ff115164","url":"./post/8422c4dc/index.html"},{"revision":"bf6b944ca4c64834da6845a2bd96dfbc","url":"./post/99c7fa1c/index.html"},{"revision":"11eeff7cbf800c3f56475f94e4674640","url":"./post/9c60e209/index.html"},{"revision":"f33351c4ac879b585b128b91681cddaf","url":"./post/ae58d2f1/index.html"},{"revision":"faadd9aa4aae15110544f64e15630423","url":"./post/d4550abf/index.html"},{"revision":"ff7e3c8435399f18a78ca4a1f9d27399","url":"./post/d50c4d0e/index.html"},{"revision":"1e1df18d6e610b276e4ce78a4e708873","url":"./post/db569493/index.html"},{"revision":"82ca6e1aaa6c148488d4e1387de8355a","url":"./post/dd83a796/index.html"},{"revision":"510699cb84e8d2766e757ffb1f05951f","url":"./post/f82f332a/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"420403246082b0007a5e830b52bd8b85","url":"./tags/AI/index.html"},{"revision":"15776d379ad02eec4407a9bd46d64382","url":"./tags/Aplayer/index.html"},{"revision":"8f364b5c5f1ca4213965638491ee5bfc","url":"./tags/Bing/index.html"},{"revision":"e280fd03d082e7b26004af3fdfbc6e2b","url":"./tags/BUG/index.html"},{"revision":"7ec81e5526983a3579a27f596fb32949","url":"./tags/CDN/index.html"},{"revision":"c64f1572173ca3f5754b482e68207d99","url":"./tags/CMS/index.html"},{"revision":"d90f047bb7586df994c83e4a7b52822f","url":"./tags/css/index.html"},{"revision":"125a6b9677cddbe4497bf1f24f8afc65","url":"./tags/DNS/index.html"},{"revision":"d9bc05781ff4da3edf08d54450ff4d48","url":"./tags/Flash/index.html"},{"revision":"852752c31ce294559270e33585336b08","url":"./tags/GFW/index.html"},{"revision":"930f5746fbcfbbc0724919319ea4fc19","url":"./tags/Gridea/index.html"},{"revision":"e78777b51063b174a9c15c6aaf7e0ceb","url":"./tags/HTML/index.html"},{"revision":"db793979606d8fe982f4f8b1d5567d05","url":"./tags/index.html"},{"revision":"0be7b44fc932a8659602d9897b25aa98","url":"./tags/JavaScript/index.html"},{"revision":"340130b9660e56c5217a0c76994e48ea","url":"./tags/JQuery/index.html"},{"revision":"efa772265869e888939a9ec46ef7309e","url":"./tags/MetingJS/index.html"},{"revision":"68f41d36b0032a7fe914886ba7bb6ffc","url":"./tags/NexT/index.html"},{"revision":"1cd291877720a9444e22efce65284559","url":"./tags/RSA/index.html"},{"revision":"891a22e540ce6346c3bea8b771c4ef2e","url":"./tags/Vercel/index.html"},{"revision":"66a458e40be9dc6660db23c7aedfa452","url":"./tags/分享/index.html"},{"revision":"fe57cf38dd829c682e687655a30fafd5","url":"./tags/加密/index.html"},{"revision":"78dc5270c42725f3fe0bf3838cab20b3","url":"./tags/加载动画/index.html"},{"revision":"edc5c1be43c6ab9126db72e8d4371d4a","url":"./tags/右键菜单/index.html"},{"revision":"dd5e8f5b7b8b9a56c5c38abc207a3018","url":"./tags/域名/index.html"},{"revision":"af1eb077b00f566b0d29558620a5b57a","url":"./tags/密码学/index.html"},{"revision":"553b63f2472ff755498f1afaf6f4c2f9","url":"./tags/建站/index.html"},{"revision":"e5e4a5fc1b153d050495b31e81e000d6","url":"./tags/插件/index.html"},{"revision":"b974354af9f0e650d2596b59003f11a6","url":"./tags/服务器/index.html"},{"revision":"99da27bc5f09cdcc6cb4eaed50e2e19d","url":"./tags/网页源码/index.html"},{"revision":"1d9ff5a37fc9f723ed42698488158b92","url":"./tags/美化/index.html"},{"revision":"351e81723185bb307304af2bad77c9a3","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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