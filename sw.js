const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"9c6f0a56ab2042b8267ab91922a89abe","url":"./404.html"},{"revision":"3054bf456e060846675799cb60c6d0f2","url":"./about/index.html"},{"revision":"31fa3cc1b430bb4d877e947f4b5b3d0f","url":"./archives/2022/06/index.html"},{"revision":"914f7df13d1a6cf86b88a80e974a5f6b","url":"./archives/2022/07/index.html"},{"revision":"379e3607bf9dc38d06f9385ebabec809","url":"./archives/2022/08/index.html"},{"revision":"a16eb8c0c0f30caf9deff58accda3c99","url":"./archives/2022/10/index.html"},{"revision":"ac378bb5dac91db65c2599f6f08bc27f","url":"./archives/2022/11/index.html"},{"revision":"6c9bb02aa9a49876b2bc046c28a620bd","url":"./archives/2022/12/index.html"},{"revision":"77e886bd89087be6a79954797b2367aa","url":"./archives/2022/index.html"},{"revision":"754a80aeb3f8494c4097622bfedccd7e","url":"./archives/2022/page/2/index.html"},{"revision":"280049e6e0973280262e7a5bf1c3ffb1","url":"./archives/2023/02/index.html"},{"revision":"dc388c22c4d9d5732e69fdf0e860f624","url":"./archives/2023/04/index.html"},{"revision":"d95441ed01bfd6d1cee834c8ea88f222","url":"./archives/2023/index.html"},{"revision":"7b89ddb153b761f057663f35ed2ff071","url":"./archives/2024/04/index.html"},{"revision":"9085bc1238dcba8203a73c8dea14d960","url":"./archives/2024/05/index.html"},{"revision":"d2b9936081f93a32ddb6cdb50338aba5","url":"./archives/2024/06/index.html"},{"revision":"9fb52004b2dfa4b87c23ac83dda502fe","url":"./archives/2024/09/index.html"},{"revision":"e694703e0fb0f555038006beada86ed1","url":"./archives/2024/index.html"},{"revision":"6bd07ad425c9b8830b0d609990fd68f9","url":"./archives/2025/09/index.html"},{"revision":"42c063690b01d83fcca00d636681c664","url":"./archives/2025/10/index.html"},{"revision":"e27dc732f42c37f908705a62bb96f48d","url":"./archives/2025/index.html"},{"revision":"7b9ad42593f649ab6c773fa995520cc6","url":"./archives/index.html"},{"revision":"3f15a60e15c1afc6ec9191006cdb428e","url":"./archives/page/2/index.html"},{"revision":"be293872be24c15d76073e28aa3cf9cb","url":"./archives/page/3/index.html"},{"revision":"5c88cb4a531d38c735171abbd6b759fd","url":"./categories/AI/index.html"},{"revision":"42bed0a618e6018ba6440fe54b67d06d","url":"./categories/Gridea/index.html"},{"revision":"d14c125785b8f893c01d49a7965afd54","url":"./categories/index.html"},{"revision":"dd43d9ac1a59166417d34ebbe068f51c","url":"./categories/Vercel/index.html"},{"revision":"6389ab37786edc297cfe2e39938a18b4","url":"./categories/休闲/index.html"},{"revision":"ceb38bb58e6c614e587e012c64ab69c8","url":"./categories/建站/index.html"},{"revision":"ed038b2ca12c4ea5ab635b006273d0b2","url":"./categories/科普/index.html"},{"revision":"3e0fff1821a40b8bbd9e92a0bdeae4dd","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"aacc2d0f63a40158efaf385eb02ff428","url":"./cookies-instructions/index.html"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"187d4df38ae8bffbaa31bf76a7effc4f","url":"./index.html"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"9aaea5aab444544b2058d1cd0032f8e4","url":"./link/index.html"},{"revision":"7387d672e6781b87614755bcf154db96","url":"./message/index.html"},{"revision":"5855be75fb53662033a50e9275c1895c","url":"./page/2/index.html"},{"revision":"ec8525c81746d6e38cbbbbe6ed5f8ca5","url":"./page/3/index.html"},{"revision":"dc5cf7a69b865a700d327a103f52fd71","url":"./post/193912eb/index.html"},{"revision":"a7b766e0db22e0abbfb27eac585e2918","url":"./post/220b8380/index.html"},{"revision":"9211d25d1de1f1f631700344c9b3b26d","url":"./post/24dc856c/index.html"},{"revision":"d73df4e1244b10ad65d84c119192577b","url":"./post/3082b2c6/index.html"},{"revision":"ef428cc728943015f0b913a57e394637","url":"./post/3df9585/index.html"},{"revision":"d236a7f92e8254d5cfd71243c7eac263","url":"./post/48bc1675/index.html"},{"revision":"cb67ae33d363af2932749adce7ff6615","url":"./post/4a17b156/index.html"},{"revision":"cfe515f08e0b0978db6f232ead3ff10e","url":"./post/739f0a30/index.html"},{"revision":"2bde96a45f723a6ee4ac84b47ec33d87","url":"./post/73fccf9a/index.html"},{"revision":"e3f6f2a6b1c253a483a88bbf9bc18380","url":"./post/7ca5704e/index.html"},{"revision":"3b91fa4360c62a3e4f6173b461b9023e","url":"./post/7fc77154/index.html"},{"revision":"8a1bc6064da67351744bd1b259e0d7f3","url":"./post/8097b5e3/index.html"},{"revision":"ac6289e0f37338852291017cb2b850c0","url":"./post/8422c4dc/index.html"},{"revision":"ae647759587f9011a757f1d8998eb31e","url":"./post/99c7fa1c/index.html"},{"revision":"7732bc52ca3e8c678e05051aca4d7f9a","url":"./post/9c60e209/index.html"},{"revision":"16f211c2afad7e9d62dddab71b7b11c3","url":"./post/ae58d2f1/index.html"},{"revision":"fe3712429bd9b1f38f637cf037039d45","url":"./post/b9a3407d/index.html"},{"revision":"7848a02e5dbebeca724d66087788de3c","url":"./post/d4550abf/index.html"},{"revision":"7b6b652ec92c5691f7b8bc235a79c3e5","url":"./post/d50c4d0e/index.html"},{"revision":"9fc7ce446b81c40955d72fc859d1ab9d","url":"./post/db569493/index.html"},{"revision":"09770727bcb83c3ebf382491143e96d5","url":"./post/dd83a796/index.html"},{"revision":"ff3519c0ddad6e9c74f6f57fafcc93e9","url":"./post/f82f332a/index.html"},{"revision":"fbe60407b11cd468c980b5bb05cd1b59","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"016ae84b8a0cc37de9a494f003cd52bf","url":"./tags/AI/index.html"},{"revision":"1502cca17cf7d09b3cefb7bd82503b58","url":"./tags/Aplayer/index.html"},{"revision":"6b530f32fe775a69842cd55cfe8fcfaa","url":"./tags/Bing/index.html"},{"revision":"21426131fdf1fd42478f46afb8d5f6e0","url":"./tags/BUG/index.html"},{"revision":"b7505e58eb4581fb4aa8b802cb5a156d","url":"./tags/CDN/index.html"},{"revision":"ca2f87f11dd2bfd4405faf4c55f28b28","url":"./tags/CMS/index.html"},{"revision":"fa74559e72a6047019a06b32cb7a063f","url":"./tags/css/index.html"},{"revision":"5468134acae95e115f01631d256150d1","url":"./tags/DNS/index.html"},{"revision":"710c3a619a6c399cc856ff56273e8f6a","url":"./tags/Flash/index.html"},{"revision":"ebd69e0c056147ed4c4e165fcaf339ce","url":"./tags/GFW/index.html"},{"revision":"5013d217dfd1727987c6e0c6318d0651","url":"./tags/Gridea/index.html"},{"revision":"8f36f5be0af7136dae037aae19e95f7d","url":"./tags/HTML/index.html"},{"revision":"b1e652d466c98fa9e4a7563b98adbbb9","url":"./tags/index.html"},{"revision":"fd01d5b91c6238121ade636cf92af82b","url":"./tags/JavaScript/index.html"},{"revision":"8d46fd28508f2373376c1694d0025ffe","url":"./tags/JQuery/index.html"},{"revision":"8bde59bd6467a75e69768eb78d8411a8","url":"./tags/MetingJS/index.html"},{"revision":"97df18067de94c8497f3bc0aa7a527c6","url":"./tags/NexT/index.html"},{"revision":"44633c0db0cf62f5134923ae88abb0e2","url":"./tags/P2P/index.html"},{"revision":"79b7c83ac4bd06d035914067844dfa5c","url":"./tags/RSA/index.html"},{"revision":"cc7ed8df60217a48e336ea84f33e71b0","url":"./tags/Vercel/index.html"},{"revision":"6a85c257d03c743f2c678c434a1cbd6a","url":"./tags/分享/index.html"},{"revision":"3de877bb8586b3464dc6b6ea1316781e","url":"./tags/加密/index.html"},{"revision":"999d4fae30e5ccd8d88a4c41bad39b4a","url":"./tags/加密货币/index.html"},{"revision":"901d251b12ed987f0ea84449a124ce5a","url":"./tags/加载动画/index.html"},{"revision":"d96588ab9fc7c220924ce33990cc1872","url":"./tags/区块链/index.html"},{"revision":"260a69076dc771f47bc9a836dd47bbd3","url":"./tags/右键菜单/index.html"},{"revision":"fcf7813d657254d331296675dbe9d345","url":"./tags/域名/index.html"},{"revision":"81ad91ec69d663d8867d4d363c670dc2","url":"./tags/密码学/index.html"},{"revision":"0f242f8c430f2ecec5fd739fca3f642a","url":"./tags/建站/index.html"},{"revision":"34cb7d84463ddf894bbdae7ed2356744","url":"./tags/插件/index.html"},{"revision":"17778e90423bddbc94615b2a2572ae8a","url":"./tags/服务器/index.html"},{"revision":"c9f17be029e91d7e8788e30f5c4ecf4f","url":"./tags/网页源码/index.html"},{"revision":"22ce981789f8006ca4093eace5495af6","url":"./tags/美化/index.html"},{"revision":"a658639804848fa582d538492f3ef175","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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