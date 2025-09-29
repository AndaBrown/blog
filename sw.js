const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"8828c67dc433518a2478473be6430a82","url":"./404.html"},{"revision":"bf9b79eba2344369ec2d8711c02b463b","url":"./about/index.html"},{"revision":"a632d21687bc845b2d33f46f9fef2670","url":"./archives/2022/06/index.html"},{"revision":"e18a7bbc662b47fe6c36c2873bc87fe2","url":"./archives/2022/07/index.html"},{"revision":"15208f890d850f13ba1c2b74bff946d9","url":"./archives/2022/08/index.html"},{"revision":"409c512c3e88ccbe8bdd9fcb74525ae7","url":"./archives/2022/10/index.html"},{"revision":"38026877e9fdbc55fa6095819001df5f","url":"./archives/2022/11/index.html"},{"revision":"1979852071ea5d02d1fc505a72d682a4","url":"./archives/2022/12/index.html"},{"revision":"5c011c8f0be9e46b8e3e1cb4cfc89c39","url":"./archives/2022/index.html"},{"revision":"a2437b58a5785c785e0a4dfc6b6ae9e3","url":"./archives/2022/page/2/index.html"},{"revision":"a67a86cc9d45fdb4e947d09eddb6b8f5","url":"./archives/2023/02/index.html"},{"revision":"0ea172b4f71c3f9bdb7dad95287e82a4","url":"./archives/2023/04/index.html"},{"revision":"e6077cc6d8c90e1980ca110d408786a0","url":"./archives/2023/index.html"},{"revision":"c0c0dbd64f27d296bd59bea7366232d1","url":"./archives/2024/04/index.html"},{"revision":"5e666f519a410e237e2190529d210bc5","url":"./archives/2024/05/index.html"},{"revision":"c75adc750440856323976b0710b85cbb","url":"./archives/2024/06/index.html"},{"revision":"84cb6494a1c53d6338d86e57a4ebd51c","url":"./archives/2024/09/index.html"},{"revision":"0bcd24092dac7daf2e5218118158a698","url":"./archives/2024/index.html"},{"revision":"787d96a5a83314196849f279883333aa","url":"./archives/2025/09/index.html"},{"revision":"dcf3fb4f8d441f79d6af07b708ec4f27","url":"./archives/2025/index.html"},{"revision":"44704a898df72f2ba8ab322fcf56a0f8","url":"./archives/index.html"},{"revision":"8135973a73d99b5b55684cb9ffbc9cc3","url":"./archives/page/2/index.html"},{"revision":"2895c2edc9c1498346bf707f4bd73156","url":"./archives/page/3/index.html"},{"revision":"2bae315774f9d999b9419e09097363bf","url":"./categories/AI/index.html"},{"revision":"23b65896d385fef5ac59ba592ffe4755","url":"./categories/Gridea/index.html"},{"revision":"731503bb221051182b32316e68785037","url":"./categories/index.html"},{"revision":"83a05bf3a607b97029000e7124080130","url":"./categories/Vercel/index.html"},{"revision":"3f096e704f8e0f7133ff03d053fc0ccf","url":"./categories/休闲/index.html"},{"revision":"60a687b9dc7cd77f7f02d492bcd4b29b","url":"./categories/建站/index.html"},{"revision":"3dfd91cb2b73ae66fd3eca0df115b6ec","url":"./categories/科普/index.html"},{"revision":"116755fae72249f56b007be0828dd97b","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"d569b510a1269a27382205421aefbd22","url":"./cookies-instructions/index.html"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"f9bd92271dcd89aecb2f09030ba50ca9","url":"./index.html"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"bf8254dfd199d8b4a11c92983ebfb056","url":"./link/index.html"},{"revision":"96fb5a339ca6908eb95f0d914d41dd6a","url":"./message/index.html"},{"revision":"1f9e7c0d47636e70c111e9a86c9b40b9","url":"./page/2/index.html"},{"revision":"45df6feead412db2d765f8a16d24fa0e","url":"./page/3/index.html"},{"revision":"011291494be1c864883d4f7c227a542e","url":"./post/193912eb/index.html"},{"revision":"bad569a6d59004aeb75728a9492f28c1","url":"./post/220b8380/index.html"},{"revision":"42b0f702097cedd96adc50c1f6c2e4f5","url":"./post/24dc856c/index.html"},{"revision":"8190fd08d24496db500886a3d748c019","url":"./post/3082b2c6/index.html"},{"revision":"48fb310af92df487a0b1364b2c62d88b","url":"./post/3df9585/index.html"},{"revision":"07304cc4bafb978a24cd1e5c62710f82","url":"./post/4a17b156/index.html"},{"revision":"935f96c31e36e043c8925fc10893062c","url":"./post/739f0a30/index.html"},{"revision":"53529ac99c04f9d73cf47d0b58d165a9","url":"./post/73fccf9a/index.html"},{"revision":"6f896da51819fdb02042bfe3f520a0a9","url":"./post/7ca5704e/index.html"},{"revision":"760f83055689b13ba6bad72cab4bfd2b","url":"./post/7fc77154/index.html"},{"revision":"89888df6f75329dce1cd20658ab654f6","url":"./post/8097b5e3/index.html"},{"revision":"0ec55303942047267e2a95d8fa991e18","url":"./post/8422c4dc/index.html"},{"revision":"0f6ec7141f7ab37e5d34f972dd16d50e","url":"./post/99c7fa1c/index.html"},{"revision":"a0d71e826bdf13385411e21416c0aa3f","url":"./post/9c60e209/index.html"},{"revision":"b8465666d2139fe39af822a92deb5019","url":"./post/ae58d2f1/index.html"},{"revision":"2d0ca464bb696a76a2e36f4dfd957b7a","url":"./post/b9a3407d/index.html"},{"revision":"1b05130dc119fad1da17f88c471a9092","url":"./post/d4550abf/index.html"},{"revision":"6e609f6fdeff42ecc760bdda038ba85c","url":"./post/d50c4d0e/index.html"},{"revision":"574226ad9f571d9d8ddce661bc1a9547","url":"./post/db569493/index.html"},{"revision":"1f6d03be117a56154dfad83ab5bef30e","url":"./post/dd83a796/index.html"},{"revision":"082a0e7296920a6f0b205b7a3420fbca","url":"./post/f82f332a/index.html"},{"revision":"3a3ea4305f8fb3de47ab7a052bed779f","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"7200241f10cb6db8451adf90c26a857b","url":"./tags/AI/index.html"},{"revision":"7e5040ee8cf7a0255127433a3f592db0","url":"./tags/Aplayer/index.html"},{"revision":"5b72580634539d8e8288280bfe165881","url":"./tags/Bing/index.html"},{"revision":"30b6e08aa47a0b8ac453233d49bb91ec","url":"./tags/BUG/index.html"},{"revision":"eb6254c02c1e3acbb3aa899635ad7387","url":"./tags/CDN/index.html"},{"revision":"df6eccc2bd7a1381c8d9fe9acaf8fc91","url":"./tags/CMS/index.html"},{"revision":"fc37a0200c81cbabcd403d0ffcc073bf","url":"./tags/css/index.html"},{"revision":"3e2f3e4ee894dbca3a9ccf60f9fdb3d2","url":"./tags/DNS/index.html"},{"revision":"1711ac6f1e6dbfda44a0e0298fc1911c","url":"./tags/Flash/index.html"},{"revision":"be0a3c43c09860958fa18f90a7113a56","url":"./tags/GFW/index.html"},{"revision":"a8eb1bf9e0131cc3f1b955d71e24e41a","url":"./tags/Gridea/index.html"},{"revision":"a44df77ef396b090cb6fa6a372a45bf4","url":"./tags/HTML/index.html"},{"revision":"2b01d870fa78db638acf47325e3ecb3c","url":"./tags/index.html"},{"revision":"d091d98a23302169a7fa640ad789811f","url":"./tags/JavaScript/index.html"},{"revision":"dfcb73ca445ae8d1fbc4353e3b852ae2","url":"./tags/JQuery/index.html"},{"revision":"51528d41bd7cc29cf75f57cb661113bf","url":"./tags/MetingJS/index.html"},{"revision":"af6738e64024c43b9f6093fd612aba3f","url":"./tags/NexT/index.html"},{"revision":"ae4ec6cc73ca563dc6da6c1f07e56b11","url":"./tags/P2P/index.html"},{"revision":"674961fc43362a16c6c521dcbb32fce6","url":"./tags/RSA/index.html"},{"revision":"25b51ba8e52e6dcbad6ef84a2d0b8c40","url":"./tags/Vercel/index.html"},{"revision":"d8a300b50af52d1ad375f65424e51d82","url":"./tags/分享/index.html"},{"revision":"a3fe3463f9a3c2be580e10662b5dfbb3","url":"./tags/加密/index.html"},{"revision":"4f101433c637a2fdbb90294b6fb92f7e","url":"./tags/加密货币/index.html"},{"revision":"ee83ad6469c3afec022135df5c1c4a54","url":"./tags/加载动画/index.html"},{"revision":"9702ee56bcbb8f97c4156ed6ff42e301","url":"./tags/区块链/index.html"},{"revision":"1cc1e7d90673981d155b4b2a8dc845c5","url":"./tags/右键菜单/index.html"},{"revision":"ce26528d1d1791a2db197a574795648a","url":"./tags/域名/index.html"},{"revision":"61ed930d53a411fad139bac35928bab7","url":"./tags/密码学/index.html"},{"revision":"e01161f0e0cf044978c7ceb560041ce3","url":"./tags/建站/index.html"},{"revision":"a9d89a7b06e2a717e45858bbae2f0210","url":"./tags/插件/index.html"},{"revision":"52f5605d974e8ee21f64e41dd29b181e","url":"./tags/服务器/index.html"},{"revision":"f687fd030d75fdb2101e65b452e02368","url":"./tags/网页源码/index.html"},{"revision":"e0400e3f92e696c255b013c64040cbc4","url":"./tags/美化/index.html"},{"revision":"ae51a73c1674ce74ab521cf0d08c37d2","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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