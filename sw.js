const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"},{"revision":"7adbd6d614cd1ff54de47ec9e2b99ffe","url":"./index.html"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"c90edaf61bcb2da91d2bb74bca73976a","url":"./404.html"},{"revision":"9e5d73f156e16e380541992efd40ac27","url":"./talks/index.html"},{"revision":"7087804f19d30de081806a86cc2f3d13","url":"./tags/index.html"},{"revision":"0a6958886147316775e4dbfe89f0fa28","url":"./tags/美化/index.html"},{"revision":"d62fddbe40876a041bcccd4fa620e761","url":"./tags/网页源码/index.html"},{"revision":"e0e0df6846e377cd8c6abceb90f05aa0","url":"./tags/服务器/index.html"},{"revision":"9cefde85bb22e9d5bb4e0cdaffab0d5e","url":"./tags/插件/index.html"},{"revision":"1fcc35a884318543977d22193e0c0399","url":"./tags/建站/index.html"},{"revision":"2a1d51d907418dcf442d15d28d9babbe","url":"./tags/密码学/index.html"},{"revision":"87ae6a26a1be6aba1859126be078b068","url":"./tags/域名/index.html"},{"revision":"6821e3729322f766ab2aa63183cc20e2","url":"./tags/右键菜单/index.html"},{"revision":"f102491284b4f4ea36a248be868404df","url":"./tags/区块链/index.html"},{"revision":"aad24016733512bb61f33aa1c5c0fa0c","url":"./tags/加载动画/index.html"},{"revision":"12c1b406b72e9ce440b2f550d3493f1e","url":"./tags/加密货币/index.html"},{"revision":"4e90dce973f14a1f1826a90a02eec6c3","url":"./tags/加密/index.html"},{"revision":"196f19d99673abfe838388ea603422f5","url":"./tags/分享/index.html"},{"revision":"3cbb4ce80c535c495d054f98400220f4","url":"./tags/css/index.html"},{"revision":"9fec10a74d4bd6ac3aac718474082935","url":"./tags/Vercel/index.html"},{"revision":"d516ed8184dfae164318d2724972aa8b","url":"./tags/RSA/index.html"},{"revision":"6059baecf709766ca45719e6936abf5e","url":"./tags/P2P/index.html"},{"revision":"b9a8ff2c80cdb99cf857957989c5cea6","url":"./tags/NexT/index.html"},{"revision":"b8e9ef2ed89735626e0b7abd090e26d3","url":"./tags/MetingJS/index.html"},{"revision":"8ac095c41ad0d573c9e824c4091794e7","url":"./tags/JavaScript/index.html"},{"revision":"66bc7c14d581e97de0cd638ca5aa7401","url":"./tags/JQuery/index.html"},{"revision":"5260980f4ace4481fdfd4f0a65fb4227","url":"./tags/HTML/index.html"},{"revision":"521ffd56227e728deaf1007c18204a02","url":"./tags/Gridea/index.html"},{"revision":"92c16eca8492e795e89e9ed33d8eb32d","url":"./tags/GFW/index.html"},{"revision":"396ee6f43bde6ffa2c9dc9f88bd01ff2","url":"./tags/Flash/index.html"},{"revision":"84052243347317318beef42fcca0743c","url":"./tags/DNS/index.html"},{"revision":"852f61b1f2dcf89d0bf5cf572f7cea85","url":"./tags/CMS/index.html"},{"revision":"4880d6bcd4d0d99bc3a13ef9b08fca2e","url":"./tags/CDN/index.html"},{"revision":"81d9f991604c18bb6c1f1bb464143f49","url":"./tags/Bing/index.html"},{"revision":"3298775d50a5bc26aab7c85b7f3e2f18","url":"./tags/BUG/index.html"},{"revision":"71e63bcdd0055cce1f6eef215a0304ba","url":"./tags/Aplayer/index.html"},{"revision":"1728a340f8f368831c1743c040efa3af","url":"./tags/AI/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"88655123dab0329103bdd150f90e38b9","url":"./post/fa97bd48/index.html"},{"revision":"0bb6b3a17e12773037c68009c183221a","url":"./post/f82f332a/index.html"},{"revision":"a4c265fd9762261bf7018f92a1e7343e","url":"./post/dd83a796/index.html"},{"revision":"718cacfcd7701fb736dfc5c28e875123","url":"./post/db569493/index.html"},{"revision":"0c56bfd2b5311269400cb564c012b5e7","url":"./post/d50c4d0e/index.html"},{"revision":"36ea2e2f3fb25f1a900c22f12f175261","url":"./post/d4550abf/index.html"},{"revision":"cb498ada403370779d0cfe38d514a0e9","url":"./post/b9a3407d/index.html"},{"revision":"6f8b10ca304f68aaaa9312a9553f017a","url":"./post/ae58d2f1/index.html"},{"revision":"d51427e5eefad46e8bd8a66757fa8a09","url":"./post/9c60e209/index.html"},{"revision":"66511bdfea5cecf392899b7ef2333d7d","url":"./post/99c7fa1c/index.html"},{"revision":"abc529635c417e884aef78675dc8db48","url":"./post/8422c4dc/index.html"},{"revision":"64bb22c1e1795e3c2d94a381fbfd723b","url":"./post/8097b5e3/index.html"},{"revision":"fa1d8027e7b7309b5e9c262bddc41b28","url":"./post/7fc77154/index.html"},{"revision":"14e1a50e62dd31e4b807647d78231ebf","url":"./post/7ca5704e/index.html"},{"revision":"1e9b99f682b12f1c08128c003c4dec71","url":"./post/73fccf9a/index.html"},{"revision":"1a8869c8b4c37c72a1798d3a7ce7960e","url":"./post/739f0a30/index.html"},{"revision":"3c828837104062ce4593e67434d8f5d7","url":"./post/4a17b156/index.html"},{"revision":"be03873633443e619e47552c7f34d742","url":"./post/48bc1675/index.html"},{"revision":"5123c94b7bbae2c2e0a022b059c9707e","url":"./post/3df9585/index.html"},{"revision":"503ee5f4e51012201706bdcaf964089c","url":"./post/3082b2c6/index.html"},{"revision":"695e7a7e8d5a58ac620e1100f9a3023e","url":"./post/24dc856c/index.html"},{"revision":"505e8b1a9e40c59e02a8341ffa2f85b0","url":"./post/220b8380/index.html"},{"revision":"a859aa8bdb198bb26eb9b67ca8643821","url":"./post/193912eb/index.html"},{"revision":"f51d57d75225ea82042d2ab5641eeac1","url":"./page/3/index.html"},{"revision":"98eb737e648ee29c3e2bab88c6c15cd8","url":"./page/2/index.html"},{"revision":"7a6d547dd71c4244982ad81f15826813","url":"./message/index.html"},{"revision":"ab46e00075852ca5b34f0d092cd2b0df","url":"./link/index.html"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"dd488bfcbf59d5165478addc832b1426","url":"./cookies-instructions/index.html"},{"revision":"f64be87b869af54e95e2128f9c4655b0","url":"./categories/index.html"},{"revision":"de15a4df023f8f254da03b2fa4b9c19d","url":"./categories/网页源码/index.html"},{"revision":"f3b20fa4b57afe08c0a4610ce13a9392","url":"./categories/科普/index.html"},{"revision":"fc6413249ff9df73650450b8cdfaf0d3","url":"./categories/建站/index.html"},{"revision":"b0c1da0b219a2c7dda3255fb9ddd2c2e","url":"./categories/休闲/index.html"},{"revision":"bdb005ad2642ab25bc22e143d2d0a440","url":"./categories/Vercel/index.html"},{"revision":"a302800b9030a2f89f4767638edfe3d8","url":"./categories/Gridea/index.html"},{"revision":"608047063ddb6adf7e3fe1cf41376ba8","url":"./categories/AI/index.html"},{"revision":"23cde7790bd730ae00e69051c97be135","url":"./archives/index.html"},{"revision":"a3e46332ac8d5978ea503a60036ed9a2","url":"./archives/page/3/index.html"},{"revision":"57ef96deceb22a6ac2cec11055f0858b","url":"./archives/page/2/index.html"},{"revision":"a17678bb6f5fbba620c3469ad3cf9b6f","url":"./archives/2025/index.html"},{"revision":"941042c0ef41e7304fc7cf16f88ce918","url":"./archives/2025/10/index.html"},{"revision":"de3c819977c8084cccf3d7d16579c02f","url":"./archives/2025/09/index.html"},{"revision":"ee158f9d6c9ae76906a49113ac195d80","url":"./archives/2024/index.html"},{"revision":"cf7f0420683d0a3b2467ae46444f6bfe","url":"./archives/2024/09/index.html"},{"revision":"90654f5d3d2c83d8496e2e723ab96bc2","url":"./archives/2024/06/index.html"},{"revision":"bc4b1d529b2301d4f516a215bb9c75fa","url":"./archives/2024/05/index.html"},{"revision":"6832a29ff94d26f80af5e9ef7f6013a0","url":"./archives/2024/04/index.html"},{"revision":"a3d4b99613a56d75a6a22771611cdef2","url":"./archives/2023/index.html"},{"revision":"ad8ef3ca2d96baad2f91633cee8ab207","url":"./archives/2023/04/index.html"},{"revision":"d804470763a2916f72771e1d9e470d53","url":"./archives/2023/02/index.html"},{"revision":"67b0f4f8bfe3a83604782f0a43897f12","url":"./archives/2022/index.html"},{"revision":"d86b55b3a819f4f893ae6076ee1b8fd7","url":"./archives/2022/page/2/index.html"},{"revision":"b8cc2e6fc37cda91c9ce9934985c1981","url":"./archives/2022/12/index.html"},{"revision":"5854516f57e64e7b24ebc5b58f054a99","url":"./archives/2022/11/index.html"},{"revision":"424cacd49cbde5cf0f08a3036da724eb","url":"./archives/2022/10/index.html"},{"revision":"9492908f70cdfd4ecf76217d33e8bad5","url":"./archives/2022/08/index.html"},{"revision":"6b3cb6c404244157c700c7a6f3986ea6","url":"./archives/2022/07/index.html"},{"revision":"ba811e4cf52d3ff8ace59b51807bd2b5","url":"./archives/2022/06/index.html"},{"revision":"b668adf0ba9ea6fc39316db1df3187e2","url":"./about/index.html"}]);
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