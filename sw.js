const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"ca88bbcf51f3799b87bb39843c6688c0","url":"./404.html"},{"revision":"580103f92c84bb8cf59d55379d771103","url":"./about/index.html"},{"revision":"1f6c8f4e12d069f0856a8820af27f322","url":"./archives/2022/06/index.html"},{"revision":"37c30e7cf98329aa52c6a9ad699e2953","url":"./archives/2022/07/index.html"},{"revision":"c8adb595b655032d6abdb0d409b618ce","url":"./archives/2022/08/index.html"},{"revision":"9fddabb7bd264d0c5ec57bc912190682","url":"./archives/2022/10/index.html"},{"revision":"cb1be0746323b0e965707c6bdc5af5b0","url":"./archives/2022/11/index.html"},{"revision":"61b9a2761229a402c14742c9ead256ea","url":"./archives/2022/12/index.html"},{"revision":"a234915cc42d5a3c1f7396ca6211d123","url":"./archives/2022/index.html"},{"revision":"494abf1553e85e63aafcb5e27b3e53f6","url":"./archives/2022/page/2/index.html"},{"revision":"83aa9fd268260d8de4b3d479119c7f51","url":"./archives/2023/02/index.html"},{"revision":"3e4e54b1a23a353e855b8651544a6b22","url":"./archives/2023/04/index.html"},{"revision":"435639295a69ccab8cf968b2a75dad62","url":"./archives/2023/index.html"},{"revision":"8462ba5db74219a835228ca55b1049f1","url":"./archives/2024/04/index.html"},{"revision":"0336255f4dbce75a75aaa0b636cce05d","url":"./archives/2024/05/index.html"},{"revision":"d639517706c677abe39dbc65a920c0da","url":"./archives/2024/06/index.html"},{"revision":"46fa228a3c38c9419c759c2a29a66f78","url":"./archives/2024/index.html"},{"revision":"674f54b1febf691a7e6a9f3cfadd8020","url":"./archives/index.html"},{"revision":"6471a4ab7107112f4bb2dbd8232a0211","url":"./archives/page/2/index.html"},{"revision":"6f662430d7dfc0ce0e1435d6c7838696","url":"./categories/AI/index.html"},{"revision":"1b64e00ac43e965b600b7d30eaabe813","url":"./categories/Gridea/index.html"},{"revision":"9400d1800f44d9f01114c77909f4a797","url":"./categories/index.html"},{"revision":"1786ee723fb79ddb1de923e7db880e28","url":"./categories/Vercel/index.html"},{"revision":"15ff26609f2642e811f71d30ddcdc8bf","url":"./categories/休闲/index.html"},{"revision":"3c3ca65fb369092b5e077a14eb96e571","url":"./categories/建站/index.html"},{"revision":"0d1aeffd4107da759b536919861904cc","url":"./categories/科普/index.html"},{"revision":"65d02d16f32fd32ae9325286ed6adc7e","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"4f7569b220e931d41786df77a40926b1","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"e927ce0f52aa7a8faa564ac00240dfdd","url":"./go/index.html"},{"revision":"edb71a0fb194a4f15a558127b7ea5b33","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"08f6afb59d8579c68d41c61ec2df7ad6","url":"./link/index.html"},{"revision":"fd6c91bd7d6cd89484e7fe6e948c1a47","url":"./message/index.html"},{"revision":"38591148f32874dcc78d4e251649df0e","url":"./page/2/index.html"},{"revision":"312d80953dc7ea3e4d83dbebd190f1d3","url":"./post/193912eb/index.html"},{"revision":"0161f3701e476f1ad7bfd54355a5d045","url":"./post/220b8380/index.html"},{"revision":"6784188f7e9623515baad16e647aa58e","url":"./post/24dc856c/index.html"},{"revision":"d2f7d01e13745bea5aa07ebe1bc293fd","url":"./post/3082b2c6/index.html"},{"revision":"e0723938fb79911d104761e4070af3bc","url":"./post/3df9585/index.html"},{"revision":"777a8bb8207d7ce6a006fae475e0c5eb","url":"./post/4a17b156/index.html"},{"revision":"e6ff737230448ba9e3185b6a9ca7df4a","url":"./post/739f0a30/index.html"},{"revision":"c3c7ee995d96556c664599eb9dc12f7e","url":"./post/73fccf9a/index.html"},{"revision":"136769b0ed999124031af4dfc2dabfec","url":"./post/7ca5704e/index.html"},{"revision":"8b2f3453b7d1b26520334f4925e2f291","url":"./post/7fc77154/index.html"},{"revision":"69ed15c8dcac6faca2f23dae7bfc120b","url":"./post/8097b5e3/index.html"},{"revision":"d5742fe0acd1e2a93c9229e6ff115164","url":"./post/8422c4dc/index.html"},{"revision":"bf6b944ca4c64834da6845a2bd96dfbc","url":"./post/99c7fa1c/index.html"},{"revision":"11eeff7cbf800c3f56475f94e4674640","url":"./post/9c60e209/index.html"},{"revision":"f33351c4ac879b585b128b91681cddaf","url":"./post/ae58d2f1/index.html"},{"revision":"faadd9aa4aae15110544f64e15630423","url":"./post/d4550abf/index.html"},{"revision":"ff7e3c8435399f18a78ca4a1f9d27399","url":"./post/d50c4d0e/index.html"},{"revision":"1e1df18d6e610b276e4ce78a4e708873","url":"./post/db569493/index.html"},{"revision":"82ca6e1aaa6c148488d4e1387de8355a","url":"./post/dd83a796/index.html"},{"revision":"510699cb84e8d2766e757ffb1f05951f","url":"./post/f82f332a/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"8aff063d15a47b734d0b30e7838dcefd","url":"./tags/AI/index.html"},{"revision":"bafc40d2c4819f657e7505869a1420ad","url":"./tags/Aplayer/index.html"},{"revision":"cb73704d55f9193e8ff66cd0bee3aefc","url":"./tags/Bing/index.html"},{"revision":"42a763e93a99742c58d3538611e2add3","url":"./tags/BUG/index.html"},{"revision":"e5392b2447478c2699e84488e19fd559","url":"./tags/CDN/index.html"},{"revision":"3f9085bb88e8d7c5a45de884eb02de23","url":"./tags/CMS/index.html"},{"revision":"870901a6e50b2b15acbf58a03a222669","url":"./tags/css/index.html"},{"revision":"9d601cab9960ef4c82190fab54849f24","url":"./tags/DNS/index.html"},{"revision":"20cc4dc2b3e18dcc72b1ef0f4ecbba36","url":"./tags/Flash/index.html"},{"revision":"33034283ab47d05b35d3b87fae33e64c","url":"./tags/GFW/index.html"},{"revision":"36f8792df7370a9954a96a718119f04d","url":"./tags/Gridea/index.html"},{"revision":"a3a90f869325ca6e97d5a5bb110b8e63","url":"./tags/HTML/index.html"},{"revision":"2dd9c112d75147b97591f325e8f3494e","url":"./tags/index.html"},{"revision":"71f07a6f56be170493e484931e9dedf3","url":"./tags/JavaScript/index.html"},{"revision":"9b7746f417206a2044bdf38a714cf812","url":"./tags/JQuery/index.html"},{"revision":"593095abff731b94c7f5d97a1f778d72","url":"./tags/MetingJS/index.html"},{"revision":"4786d387e327ce941fbf24e8c663faa6","url":"./tags/NexT/index.html"},{"revision":"152ec6ee3fc3ad97108e8b78b4737279","url":"./tags/RSA/index.html"},{"revision":"132e552e51c79a563414c286aa65fec4","url":"./tags/Vercel/index.html"},{"revision":"68dbadc129288f02299a9ea04e8f1580","url":"./tags/分享/index.html"},{"revision":"44fac16e2274897a5fec46323309f77a","url":"./tags/加密/index.html"},{"revision":"d775a2b4f0b62469deeea5e40ef26aae","url":"./tags/加载动画/index.html"},{"revision":"1bbe21dd5be0b3eadb84eafa32afcf17","url":"./tags/右键菜单/index.html"},{"revision":"5e62cbcb8be9ec8099b4c286d220a5d7","url":"./tags/域名/index.html"},{"revision":"28055d6c8d22966001832c7793a68525","url":"./tags/密码学/index.html"},{"revision":"0c5b2221b2002b7b2a5f0d22b19d167a","url":"./tags/建站/index.html"},{"revision":"198ee11a06ac218f165e7beb6030179a","url":"./tags/插件/index.html"},{"revision":"5a8ee9e1de72bec375a4413acbf2c8ed","url":"./tags/服务器/index.html"},{"revision":"1d70b9630774acf6f63264ba63fbf587","url":"./tags/网页源码/index.html"},{"revision":"60708464a4e8cc8c12d34e589f4b76c8","url":"./tags/美化/index.html"},{"revision":"1c07df98024da55e2dd0184172efc4a6","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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