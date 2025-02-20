const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"fc4830e2e91dae57dc4d774f6cb71a46","url":"./404.html"},{"revision":"483d5ebf0406c0493144ed6dd04c3d20","url":"./about/index.html"},{"revision":"4be43eb7c5b5b930bbc7966de0e5b7c2","url":"./archives/2022/06/index.html"},{"revision":"4f8e3fc52e88b13626ca0fc1827762ea","url":"./archives/2022/07/index.html"},{"revision":"bd3cc6dc0c5b0e14704864d9e385c6e5","url":"./archives/2022/08/index.html"},{"revision":"14e4aab4834c41a7363e607cdb861552","url":"./archives/2022/10/index.html"},{"revision":"5ca1c39924e46e0597dbcbe253bdc8d7","url":"./archives/2022/11/index.html"},{"revision":"161e9a3368d79f62bdfdddac6c4f9871","url":"./archives/2022/12/index.html"},{"revision":"6f078d95764dc1a96a4260154c6b24b1","url":"./archives/2022/index.html"},{"revision":"20e4f7ecb24c7b67c9b9e1b8f1f90d47","url":"./archives/2022/page/2/index.html"},{"revision":"37741323878a22a911d1e84b6474d4d1","url":"./archives/2023/02/index.html"},{"revision":"46983785f411012c2c15e9c258c366b3","url":"./archives/2023/04/index.html"},{"revision":"8dec86fee96cb304ee0c4147d2b85010","url":"./archives/2023/index.html"},{"revision":"efd2f043d1726bef98890ecefb96523f","url":"./archives/2024/04/index.html"},{"revision":"ab0705d1977d5fa41b40af89542f7a6d","url":"./archives/2024/05/index.html"},{"revision":"6c037e950b7274f213320aaef9611d70","url":"./archives/2024/06/index.html"},{"revision":"80ddcd1f99679ca1be8ca4ea76d33c3f","url":"./archives/2024/09/index.html"},{"revision":"c202f4b8573da33d0bc04a8758a77ef7","url":"./archives/2024/index.html"},{"revision":"cba9f456b558e9f2d1fb5a67dde74b4c","url":"./archives/index.html"},{"revision":"e18b929c3e70da01defc3d0e66312d5d","url":"./archives/page/2/index.html"},{"revision":"54079fbddc0ea58fa6050b607a750573","url":"./archives/page/3/index.html"},{"revision":"17e7246b4dcb21fc581c58aa003a2fd4","url":"./categories/AI/index.html"},{"revision":"e3f95c853a839bb22f1e7022162926f5","url":"./categories/Gridea/index.html"},{"revision":"ccee1a8778031861395d6ee9c3b48af6","url":"./categories/index.html"},{"revision":"4f5922ff09bcdf475e4a38c32e443151","url":"./categories/Vercel/index.html"},{"revision":"05c5f2ae9108b3453a3f5caf220799e1","url":"./categories/休闲/index.html"},{"revision":"72b62a211752c2bdf2155dd6d77db54f","url":"./categories/建站/index.html"},{"revision":"53a674748e9a0cd393024dd2ef23aed4","url":"./categories/科普/index.html"},{"revision":"3e4ac4c7e7084924bce0e4a0a7f8ad69","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"0990566de2c5aa00cfb04512989da987","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"2d28e3ca349c5b97b7afa1a6ecb400b9","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"a60df130b66bf235e33545e684f0711a","url":"./link/index.html"},{"revision":"2f69c373b164554945477c2133367c0b","url":"./message/index.html"},{"revision":"8c7b6c3fa676c1cdf7e0fd749ae8d4ea","url":"./page/2/index.html"},{"revision":"6eb0cbc6e8c0caa614327edf530c1fdc","url":"./page/3/index.html"},{"revision":"24a40c20c608da3ea5eebebfadd65138","url":"./post/193912eb/index.html"},{"revision":"62f6389ce933db4cbdbd4b7963d9bcf2","url":"./post/220b8380/index.html"},{"revision":"0720398b20d8235698abadac01e7f90e","url":"./post/24dc856c/index.html"},{"revision":"fa84193f82ecf411ac4e6218ce7d2469","url":"./post/3082b2c6/index.html"},{"revision":"e2d4098addbcc44e453d1e9e3360f978","url":"./post/3df9585/index.html"},{"revision":"2b2fe561541a63e91168f50fecd5fbb4","url":"./post/4a17b156/index.html"},{"revision":"e40f7384aabcf8335ed5401bdbbdd157","url":"./post/739f0a30/index.html"},{"revision":"26be8a4de678cb82e893487e05dcd9d6","url":"./post/73fccf9a/index.html"},{"revision":"b412ac656653f14b7cf71a10a2a36d8c","url":"./post/7ca5704e/index.html"},{"revision":"8a428451c18155e40191c04443c6631a","url":"./post/7fc77154/index.html"},{"revision":"84728a29980a22cef2ea51f6d6d7c5cc","url":"./post/8097b5e3/index.html"},{"revision":"ce9d1c5e13adea166b49eba3ecb9f53b","url":"./post/8422c4dc/index.html"},{"revision":"cc96a6dc8c2bd32d1a1943209508df05","url":"./post/99c7fa1c/index.html"},{"revision":"0dd9fac5c804ed0bc8b421bce441809a","url":"./post/9c60e209/index.html"},{"revision":"3202e713b422aebb2ffdc50f4cea7486","url":"./post/ae58d2f1/index.html"},{"revision":"5de1a9d46ed995ff34ebd0772520bf01","url":"./post/d4550abf/index.html"},{"revision":"fc6e4ba61dd13892cfec560d7e203198","url":"./post/d50c4d0e/index.html"},{"revision":"4bb6f5d4a9111f7e3ef2a155eb1097c7","url":"./post/db569493/index.html"},{"revision":"eebed0cdd6bfd85bcabe74de3feeb9f2","url":"./post/dd83a796/index.html"},{"revision":"b60a8c9b19d2fe547dbe1ad6bc011e5d","url":"./post/f82f332a/index.html"},{"revision":"83bbbbc5c1e2337497edfdb7366ab7ff","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"0623f37c748e23a4d12bc6b4a2689e2a","url":"./tags/AI/index.html"},{"revision":"eff3b058dfd03215c3d8ae8e32f81072","url":"./tags/Aplayer/index.html"},{"revision":"3b9e1a5131fdf358c0779318b2781ffe","url":"./tags/Bing/index.html"},{"revision":"b04b4035acebc1e4b2df57d2884e8b2c","url":"./tags/BUG/index.html"},{"revision":"df4fb3cc9ac987164321c196b3d33403","url":"./tags/CDN/index.html"},{"revision":"8f05c75275382985606a807e5149ab3c","url":"./tags/CMS/index.html"},{"revision":"6f6284ef0f2dcfe01254958d0d9ec866","url":"./tags/css/index.html"},{"revision":"4eeb977ab8d7e5085ccb9f6b74a8ea11","url":"./tags/DNS/index.html"},{"revision":"6533aa413eb3d93c084a66fb7be3d9ec","url":"./tags/Flash/index.html"},{"revision":"5c195730f4c157dc9966752a6383d03f","url":"./tags/GFW/index.html"},{"revision":"ae9703e3fccd8bb61bd2d2654a43de79","url":"./tags/Gridea/index.html"},{"revision":"43e79fc290f0d783aab1ac3276340de9","url":"./tags/HTML/index.html"},{"revision":"992c74bcde509afd7a3b7670b79337ea","url":"./tags/index.html"},{"revision":"df172e7392c43e764929f3c9d75aad01","url":"./tags/JavaScript/index.html"},{"revision":"b3c56c9de6d605f1bb9698e31e0f1045","url":"./tags/JQuery/index.html"},{"revision":"a512f862a33aca5cf97aaad69f70387d","url":"./tags/MetingJS/index.html"},{"revision":"6f9cb05ebfea5f389ef9eb58d3a7b5b4","url":"./tags/NexT/index.html"},{"revision":"8966967dd4c9c94105c76b1bfbf3054a","url":"./tags/P2P/index.html"},{"revision":"eaf20d92a35fb6abb9626d5862353dc3","url":"./tags/RSA/index.html"},{"revision":"1ad07d0545346df4817f89592caaa1db","url":"./tags/Vercel/index.html"},{"revision":"1e0d81b38f706761730beb0d57ea43ad","url":"./tags/分享/index.html"},{"revision":"6f262d6467cf0e3ff2cd55423dae44b9","url":"./tags/加密/index.html"},{"revision":"6f7e453cd675f86f0cd72e4651120037","url":"./tags/加载动画/index.html"},{"revision":"037d711e90a75521f3b3f91d72195aad","url":"./tags/右键菜单/index.html"},{"revision":"7112588ddcf51dbec5ead9a5a10096bd","url":"./tags/域名/index.html"},{"revision":"f0bce33987bc4669f209a7c026ffd366","url":"./tags/密码学/index.html"},{"revision":"9c64d0b9f3b9cd39f8f796c1c94fcab2","url":"./tags/建站/index.html"},{"revision":"62b5824d01b6dedae91503d6a5de122f","url":"./tags/插件/index.html"},{"revision":"68110d5eb30875056f8f23c5bdaed6ed","url":"./tags/服务器/index.html"},{"revision":"2b9b7345cb54f21dc4c7f50d1fca6586","url":"./tags/网页源码/index.html"},{"revision":"6cda4fb84d8332aa3de0e1539ed946b9","url":"./tags/美化/index.html"},{"revision":"21b793017f515ed3a37361d962d5634c","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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