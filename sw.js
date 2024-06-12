const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"a5c78c19b6d1a75b841435085c2b9824","url":"./404.html"},{"revision":"1a7593f76ff92d8ae797370d4cfc181d","url":"./about/index.html"},{"revision":"9f3a2b3645f7ae2801e82269861e5fc0","url":"./archives/2022/06/index.html"},{"revision":"769ec7943078dc0c3e18bccfecd56a90","url":"./archives/2022/07/index.html"},{"revision":"7077ff0c87067c8ab19e625e27c951fc","url":"./archives/2022/08/index.html"},{"revision":"0ca85dde439bffab167f13aea47bd540","url":"./archives/2022/10/index.html"},{"revision":"2bcd168654617e8eb41e0c6ae1405c87","url":"./archives/2022/11/index.html"},{"revision":"948a01361e7fab94f555ffc25078b8e0","url":"./archives/2022/12/index.html"},{"revision":"57bf1ff3c7c1548ef4b0cd3075f399f7","url":"./archives/2022/index.html"},{"revision":"ddc3e352229bd5da44ed2b4e0209c47e","url":"./archives/2022/page/2/index.html"},{"revision":"66da51fc40ec0f2eb4e654688573c6e2","url":"./archives/2023/02/index.html"},{"revision":"f6e4e0e2965746b190683137d2fb965a","url":"./archives/2023/04/index.html"},{"revision":"4459566605bda30f6498d5460a6e2ecb","url":"./archives/2023/index.html"},{"revision":"e5ed1f7f5181d13532fa6bfa1c83b6ba","url":"./archives/2024/04/index.html"},{"revision":"ce7266641b83e0549d327d4b7e98b55f","url":"./archives/2024/05/index.html"},{"revision":"b44e1431b8923b9d6d2a5dec790a72b9","url":"./archives/2024/index.html"},{"revision":"a8c583cab41ed138b5f47f91baa6290e","url":"./archives/index.html"},{"revision":"78c286e67cecd4804b7498eaf10ea91b","url":"./archives/page/2/index.html"},{"revision":"15605ed9ca0709443839f47e9b2bb23e","url":"./categories/AI/index.html"},{"revision":"41d8e12de44be94ba4b5d0eaccb6ed39","url":"./categories/Gridea/index.html"},{"revision":"0cd3efd4c4c0611ccc4dad5c970bdae2","url":"./categories/index.html"},{"revision":"43831194fb1d701800e9026e17dedac3","url":"./categories/Vercel/index.html"},{"revision":"27a7c00318e4b3d810cbb03b23bbaaed","url":"./categories/休闲/index.html"},{"revision":"769edd2b60ad89c5baeb8d55fc8e732b","url":"./categories/建站/index.html"},{"revision":"058e685e11e51696ba6f30f294275148","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"dc239dd4d6f9933c9a0989d4a10ae020","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"392419a380566e73cf5a1aef587d3079","url":"./go/index.html"},{"revision":"f62efdbed38c415d08ee599ed582a753","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"75e4708496b876be0c10d0568e03442b","url":"./link/index.html"},{"revision":"1ddfa77dc70b01b89a9a736a1135ed75","url":"./message/index.html"},{"revision":"46c9dd06e5a5724090905894f00eac15","url":"./page/2/index.html"},{"revision":"b60f623235d375b43f2985c84753a42f","url":"./post/193912eb/index.html"},{"revision":"95c2a56638a2658579909a6c0ad99a96","url":"./post/220b8380/index.html"},{"revision":"8bd9913ec028e70a8608dcb376e33623","url":"./post/24dc856c/index.html"},{"revision":"87a41227c202190eb3740da1a067d257","url":"./post/3082b2c6/index.html"},{"revision":"3a56e5bb33538eb6e9320dc648569b65","url":"./post/3df9585/index.html"},{"revision":"d0dbd7f09be4d79d8cae97e95d87a9c1","url":"./post/4a17b156/index.html"},{"revision":"254c0bd33578cb8bd165aefbc1333c4a","url":"./post/739f0a30/index.html"},{"revision":"8ffb51c8f4a6977c151de7d018efc888","url":"./post/73fccf9a/index.html"},{"revision":"ea531a4477faf266e64a624d0b6f5795","url":"./post/7ca5704e/index.html"},{"revision":"16a1af36ac05284ca210f1db68086834","url":"./post/7fc77154/index.html"},{"revision":"1b40e3a308dc1bab15ffb0f0d3f92032","url":"./post/8422c4dc/index.html"},{"revision":"0713ce4ca71a19a3167555b3fd6886a4","url":"./post/99c7fa1c/index.html"},{"revision":"2255d151377edb9a21150cac0fcdda63","url":"./post/9c60e209/index.html"},{"revision":"1292e803cf7206d5e74b44d719a75cae","url":"./post/ae58d2f1/index.html"},{"revision":"23ee95264546c987dbd76a5846d8e947","url":"./post/d4550abf/index.html"},{"revision":"a70b1594ca884d59d919cf820a2029b8","url":"./post/d50c4d0e/index.html"},{"revision":"685ce7ffefc3ef878f4a3a0e0c6794b8","url":"./post/db569493/index.html"},{"revision":"2fced73dd3fbb652b24e5725f6e2eeab","url":"./post/dd83a796/index.html"},{"revision":"a15469854a19ca301196ac8e6812ddab","url":"./post/f82f332a/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"958c8569074fcea645dd4216c9426ed4","url":"./tags/AI/index.html"},{"revision":"b01bf032d3c61349477b1a24662f8366","url":"./tags/Aplayer/index.html"},{"revision":"14d9b2281244cf60b29a2854178884f6","url":"./tags/Bing/index.html"},{"revision":"17b8829097dcc320cb6b85e27f4775e2","url":"./tags/BUG/index.html"},{"revision":"bff485d3e564b6c635d6d2f5dfcb10fa","url":"./tags/CDN/index.html"},{"revision":"4cc7e522e6d367495909a4fb57823a07","url":"./tags/CMS/index.html"},{"revision":"62cbdecfca9842c50b1615deee0473f2","url":"./tags/css/index.html"},{"revision":"21e5ae71d67cf419059946e4927e1ac6","url":"./tags/DNS/index.html"},{"revision":"d8892a9be5eb2bc9a05e4e5703f640f0","url":"./tags/Flash/index.html"},{"revision":"d1545039590685233bd389213c25e3bb","url":"./tags/GFW/index.html"},{"revision":"d05127c2c27dc417e2d4f25a71c65439","url":"./tags/Gridea/index.html"},{"revision":"e419a5e57d7916cdd3f81510d4f32ebb","url":"./tags/HTML/index.html"},{"revision":"48f385f4895502e5b010afaf27084b51","url":"./tags/index.html"},{"revision":"68c7ce0ef143a7c32516a3d77585764d","url":"./tags/JavaScript/index.html"},{"revision":"231d074ce8ccc39402b0e6bfcc0587f7","url":"./tags/JQuery/index.html"},{"revision":"5ded4e01cf6210dadaaa577078662790","url":"./tags/MetingJS/index.html"},{"revision":"425ab156c254200c4e78afa39446c77b","url":"./tags/NexT/index.html"},{"revision":"ca7963d6739ef5c0a3791aefda37fda7","url":"./tags/Vercel/index.html"},{"revision":"67ebf3cbda9f896f8aa3da8fa6b744c8","url":"./tags/分享/index.html"},{"revision":"b6863599cd26130b07635044fcd5a280","url":"./tags/加载动画/index.html"},{"revision":"4900e53dbde864067a9836d86e6e0c77","url":"./tags/右键菜单/index.html"},{"revision":"458087a9aaac3db3bd506504928d5da9","url":"./tags/域名/index.html"},{"revision":"4052e33d130be209bf651c07b65567b3","url":"./tags/建站/index.html"},{"revision":"d91e244f58c337b415d289ac31fa26e6","url":"./tags/插件/index.html"},{"revision":"8f4d425046ee670d21bfeff1af137656","url":"./tags/服务器/index.html"},{"revision":"049b19ae30c93b5ece107d2ede731742","url":"./tags/网页源码/index.html"},{"revision":"336c1a3e64b8910480066629e8345a48","url":"./tags/美化/index.html"},{"revision":"3786988dd3a91bf30d10480043a712de","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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