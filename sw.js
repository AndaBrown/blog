const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"},{"revision":"bbb697218321779148ff10be725d91ea","url":"./index.html"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"c90edaf61bcb2da91d2bb74bca73976a","url":"./404.html"},{"revision":"b8d8afe586750d0191b0309159f841a3","url":"./talks/index.html"},{"revision":"3b1294124120406d79b8b8b12ce5a702","url":"./tags/index.html"},{"revision":"7d60e10bdca5ecfa11485fad83d60bdd","url":"./tags/美化/index.html"},{"revision":"dfb76cbdcf0d40d5e68f176b7e57a5f8","url":"./tags/网页源码/index.html"},{"revision":"df4ffdc68ae1f47df4bd0ad06e06d65b","url":"./tags/服务器/index.html"},{"revision":"a6d366b8f4cd4fc6ce5f9bef05287932","url":"./tags/插件/index.html"},{"revision":"63f733420b2e865231e729374cc0fadf","url":"./tags/建站/index.html"},{"revision":"e1e8d8bdb393d7ac18056e3fe6b7e943","url":"./tags/密码学/index.html"},{"revision":"29c35ab8d4a4c96d18d9de9eceeaf472","url":"./tags/域名/index.html"},{"revision":"3ac6629def1fc6d462bf5261cf74bdac","url":"./tags/右键菜单/index.html"},{"revision":"26a4ca7d76867e6ddb1d67ed1d61ef8d","url":"./tags/区块链/index.html"},{"revision":"3dbd59d89ff2a74bcc405d828badb212","url":"./tags/加载动画/index.html"},{"revision":"17a208dde75cf33f8db17578e9fcf75e","url":"./tags/加密货币/index.html"},{"revision":"ce351daa2615f7080caad8852d122e9a","url":"./tags/加密/index.html"},{"revision":"81fec33d7ec997823d4a960ff107b9ff","url":"./tags/分享/index.html"},{"revision":"07455088ae11fad527c1e397baa5fb18","url":"./tags/css/index.html"},{"revision":"05499f4aeb27a4b62b30edb0113fa168","url":"./tags/Vercel/index.html"},{"revision":"9acaf5479f4619838b9a6bea31108c89","url":"./tags/RSA/index.html"},{"revision":"27cdd58c3900da70f385a0082d9a41d7","url":"./tags/P2P/index.html"},{"revision":"50383e4ef6279af511aa254f5909a33a","url":"./tags/NexT/index.html"},{"revision":"7b84411a2849319305f658180666afb7","url":"./tags/MetingJS/index.html"},{"revision":"c885f66bec2b70d885b3da26d3d12022","url":"./tags/JavaScript/index.html"},{"revision":"bd507f21e2025a9f6a2d8ae9276d580d","url":"./tags/JQuery/index.html"},{"revision":"a261c59fbdbe54960234cf1e89000594","url":"./tags/HTML/index.html"},{"revision":"12d82e9ed6dcf0ac5e96a0042015f0fa","url":"./tags/Gridea/index.html"},{"revision":"370a8c5086ff17f1f489a935a0a5a5d7","url":"./tags/GFW/index.html"},{"revision":"0b2973aff0b426a4e86e189bb6078a39","url":"./tags/Flash/index.html"},{"revision":"d4604665b4b3f65d96dabf3d94b9e7c9","url":"./tags/DNS/index.html"},{"revision":"4e1cfdee4b36840e09eade6fe4f9f450","url":"./tags/CMS/index.html"},{"revision":"260b09996df60964950b68390a0f239e","url":"./tags/CDN/index.html"},{"revision":"c9d622735df6dd0899bb739f0a76c706","url":"./tags/Bing/index.html"},{"revision":"fd697a064c82bec12598a48d88dc45d4","url":"./tags/BUG/index.html"},{"revision":"abf0e2869a2825df29e0665746a427b1","url":"./tags/Aplayer/index.html"},{"revision":"2717d57e087737318352eb38d2f77337","url":"./tags/AI/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"88655123dab0329103bdd150f90e38b9","url":"./post/fa97bd48/index.html"},{"revision":"0bb6b3a17e12773037c68009c183221a","url":"./post/f82f332a/index.html"},{"revision":"a4c265fd9762261bf7018f92a1e7343e","url":"./post/dd83a796/index.html"},{"revision":"718cacfcd7701fb736dfc5c28e875123","url":"./post/db569493/index.html"},{"revision":"0c56bfd2b5311269400cb564c012b5e7","url":"./post/d50c4d0e/index.html"},{"revision":"36ea2e2f3fb25f1a900c22f12f175261","url":"./post/d4550abf/index.html"},{"revision":"cb498ada403370779d0cfe38d514a0e9","url":"./post/b9a3407d/index.html"},{"revision":"6f8b10ca304f68aaaa9312a9553f017a","url":"./post/ae58d2f1/index.html"},{"revision":"d51427e5eefad46e8bd8a66757fa8a09","url":"./post/9c60e209/index.html"},{"revision":"66511bdfea5cecf392899b7ef2333d7d","url":"./post/99c7fa1c/index.html"},{"revision":"abc529635c417e884aef78675dc8db48","url":"./post/8422c4dc/index.html"},{"revision":"64bb22c1e1795e3c2d94a381fbfd723b","url":"./post/8097b5e3/index.html"},{"revision":"fa1d8027e7b7309b5e9c262bddc41b28","url":"./post/7fc77154/index.html"},{"revision":"14e1a50e62dd31e4b807647d78231ebf","url":"./post/7ca5704e/index.html"},{"revision":"1e9b99f682b12f1c08128c003c4dec71","url":"./post/73fccf9a/index.html"},{"revision":"1a8869c8b4c37c72a1798d3a7ce7960e","url":"./post/739f0a30/index.html"},{"revision":"3c828837104062ce4593e67434d8f5d7","url":"./post/4a17b156/index.html"},{"revision":"be03873633443e619e47552c7f34d742","url":"./post/48bc1675/index.html"},{"revision":"5123c94b7bbae2c2e0a022b059c9707e","url":"./post/3df9585/index.html"},{"revision":"503ee5f4e51012201706bdcaf964089c","url":"./post/3082b2c6/index.html"},{"revision":"695e7a7e8d5a58ac620e1100f9a3023e","url":"./post/24dc856c/index.html"},{"revision":"505e8b1a9e40c59e02a8341ffa2f85b0","url":"./post/220b8380/index.html"},{"revision":"a859aa8bdb198bb26eb9b67ca8643821","url":"./post/193912eb/index.html"},{"revision":"87bc9d21ef742f4b7f78a86ab533c97d","url":"./page/3/index.html"},{"revision":"82acc26f655ba57c5a5584c965c6b699","url":"./page/2/index.html"},{"revision":"014b4f1792e40e7198233d1590951c12","url":"./message/index.html"},{"revision":"75e9432c526aa7e0c8715f6f6cf9b239","url":"./link/index.html"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"bf855660e6080ae39649b5f730d4ac39","url":"./cookies-instructions/index.html"},{"revision":"262e0ef1975f3d130ea4dfd2e242c792","url":"./categories/index.html"},{"revision":"67d6d29054f863f805c5545cddb89d6b","url":"./categories/网页源码/index.html"},{"revision":"d156ca78e75084912c7fa00ac8d5d902","url":"./categories/科普/index.html"},{"revision":"9cffe78be123d6a2fa0286bd58aa4a18","url":"./categories/建站/index.html"},{"revision":"4eda4586eda968a55647002812a854c5","url":"./categories/休闲/index.html"},{"revision":"0cf220b67131c04a0ad4477044a15c8d","url":"./categories/Vercel/index.html"},{"revision":"9693663a2216e7f65f67f7bbbb114d08","url":"./categories/Gridea/index.html"},{"revision":"cb763a66706d580d99cda79d50418bac","url":"./categories/AI/index.html"},{"revision":"6ec50936df4f4106878fc41e0e352cef","url":"./archives/index.html"},{"revision":"611b36d6d5c76d585e448b3c9f8b2d77","url":"./archives/page/3/index.html"},{"revision":"e184d7507d8130ea7a91d629ccf5ac0e","url":"./archives/page/2/index.html"},{"revision":"3f0943bb7ba2848907536f30bdd45681","url":"./archives/2025/index.html"},{"revision":"a3fadea565822d63fee818d9a112cd8c","url":"./archives/2025/10/index.html"},{"revision":"28627f55e6292d90f91371c42e917223","url":"./archives/2025/09/index.html"},{"revision":"80d05898bf173db805417e2c7f5529ac","url":"./archives/2024/index.html"},{"revision":"008384d931b2546bbd1d8107452d313e","url":"./archives/2024/09/index.html"},{"revision":"6142e05d5c53849e7ae8d89fd21dfcf5","url":"./archives/2024/06/index.html"},{"revision":"a9109fe4bb1702a3f74ae07e2082fb9a","url":"./archives/2024/05/index.html"},{"revision":"1a50fb3032e38a1a5319ab074e1e4cbc","url":"./archives/2024/04/index.html"},{"revision":"9d427b15bc924b4de1a59dcb80c8057a","url":"./archives/2023/index.html"},{"revision":"ab6efb38ae634edb3531b1f25e80b854","url":"./archives/2023/04/index.html"},{"revision":"d3e25b4cc4b5ccedd0b35748f6309da5","url":"./archives/2023/02/index.html"},{"revision":"e6a60f659484e96bec66af7375932ead","url":"./archives/2022/index.html"},{"revision":"c339c698c682f1ecd5df3c45fb55018e","url":"./archives/2022/page/2/index.html"},{"revision":"ac54cf51cdaff8c18d6e77201adfbf3d","url":"./archives/2022/12/index.html"},{"revision":"ddc3f1f91e71aace63426fac99ccde36","url":"./archives/2022/11/index.html"},{"revision":"64d3f9ced69d362122016254373ee18e","url":"./archives/2022/10/index.html"},{"revision":"0eea2e0bad8ea134665048ecb4a09ce6","url":"./archives/2022/08/index.html"},{"revision":"35256659a6080099bbae4110b9ec7c71","url":"./archives/2022/07/index.html"},{"revision":"22bb73fca70d8f30e3266d085eca6b12","url":"./archives/2022/06/index.html"},{"revision":"0c6d3c57c7f7909f4526455045e23ec4","url":"./about/index.html"}]);
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