const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"70b2ec5da76de5eb8c39c9716303382f","url":"./404.html"},{"revision":"1da0e80024803c345af7cede896473d2","url":"./about/index.html"},{"revision":"e6da4b0b89ade4ac73f9328532157a50","url":"./archives/2022/06/index.html"},{"revision":"fc22b6418ac156c4fdb850c9235bce02","url":"./archives/2022/07/index.html"},{"revision":"d576cf89dfd127011336ee19501b62a7","url":"./archives/2022/08/index.html"},{"revision":"bbf06172ed139217e3ad18565df9ca74","url":"./archives/2022/10/index.html"},{"revision":"d45ad6f94fdfa861dae3efeb26b4a804","url":"./archives/2022/11/index.html"},{"revision":"4da459a100dd4d6256eec8d3381a24e6","url":"./archives/2022/12/index.html"},{"revision":"61dfe0a09688b0995d732b73f5239a8f","url":"./archives/2022/index.html"},{"revision":"0c26577714af7d60ca60913e01e46cf2","url":"./archives/2022/page/2/index.html"},{"revision":"01ffbe8ef7b2b6b2f8fb97e4641da680","url":"./archives/2023/02/index.html"},{"revision":"8f0ecb024a2dd6c6fb29798aa7cbe1aa","url":"./archives/2023/04/index.html"},{"revision":"483e3c79c07069b285ddd173ab65bbd9","url":"./archives/2023/index.html"},{"revision":"0827ea5b754f393d10b7b0e968083c01","url":"./archives/2024/04/index.html"},{"revision":"db2142f03fb0ba9689f24f00a0aaf633","url":"./archives/2024/05/index.html"},{"revision":"bc243d1ee96e65db85fc30ae651bff3a","url":"./archives/2024/06/index.html"},{"revision":"df74807b00a3f6397d7982226db1c381","url":"./archives/2024/09/index.html"},{"revision":"66448d3ce6ac2b170956a0b4f927b57d","url":"./archives/2024/index.html"},{"revision":"91e618790967c15c7fcbb1a7cdf2c50c","url":"./archives/index.html"},{"revision":"8d76e01aa5a57afa7e8364b898560976","url":"./archives/page/2/index.html"},{"revision":"5937e9f33c411fd2fcb78c21d5687497","url":"./archives/page/3/index.html"},{"revision":"8db737106c90dc6e6ca67e1e9a0e78ad","url":"./categories/AI/index.html"},{"revision":"5f5fac0aaa2fd72fe753b740fd3cbd40","url":"./categories/Gridea/index.html"},{"revision":"1d3fe82a968d8694eff995e51898046c","url":"./categories/index.html"},{"revision":"a28380ac1082c53dfebae7b37078b382","url":"./categories/Vercel/index.html"},{"revision":"4a01870f05ea2cb41bf8c3e4dcb59983","url":"./categories/休闲/index.html"},{"revision":"ef58bc2bbefcbe513ca555a43af75ac4","url":"./categories/建站/index.html"},{"revision":"4ecb6d8055022336b6e297d815849246","url":"./categories/科普/index.html"},{"revision":"620cd7a79d53607c9e22709792e67d69","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"5203cc7ccc2cdb29078358052d775c58","url":"./cookies-instructions/index.html"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"3ea84420a05dfb5f08d97f52d69a618e","url":"./index.html"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"3285c836c36c10a490cfcef05737ecfe","url":"./link/index.html"},{"revision":"48e1d576605df9d1748e3fea0950201b","url":"./message/index.html"},{"revision":"69b73483e0aaa36284dc1da052bea458","url":"./page/2/index.html"},{"revision":"0318a81a64b930bdb1d8db91486f079a","url":"./page/3/index.html"},{"revision":"5381eaa4e73e48e3ef25db3e97ae5a26","url":"./post/193912eb/index.html"},{"revision":"23170ad327c36281654977605459ebd5","url":"./post/220b8380/index.html"},{"revision":"7a1f5e8bd7ad3ba3024b90293d9e3368","url":"./post/24dc856c/index.html"},{"revision":"34e2eb88522dca5b8e532a843f8b30c2","url":"./post/3082b2c6/index.html"},{"revision":"07ee2bff50925b8ae07d4acd7a056de7","url":"./post/3df9585/index.html"},{"revision":"51b57e57bda696bc0d80d5bf601d9584","url":"./post/4a17b156/index.html"},{"revision":"6c9c19d8f4f2d0376d4de1a429d92217","url":"./post/739f0a30/index.html"},{"revision":"4b91a4150412c0d585de3bd6f5de8d01","url":"./post/73fccf9a/index.html"},{"revision":"c88e4d00718d9d0a518d33f22264b35d","url":"./post/7ca5704e/index.html"},{"revision":"9f1ee516dd575dab4739e82a4a639ca1","url":"./post/7fc77154/index.html"},{"revision":"79e22143c7431abdd9d7c304f4151021","url":"./post/8097b5e3/index.html"},{"revision":"5e09fbcd57e4f6d9fd3985c6f1257644","url":"./post/8422c4dc/index.html"},{"revision":"8175bbc89fedd52466801b2219c73240","url":"./post/99c7fa1c/index.html"},{"revision":"5707bb731d076b7cc3a1aec30866feac","url":"./post/9c60e209/index.html"},{"revision":"a31013bee1173ebcc59a396d390e4300","url":"./post/ae58d2f1/index.html"},{"revision":"765d2fbc01ea168f87d75e7eace76805","url":"./post/d4550abf/index.html"},{"revision":"b73d02af24aa5c341086542a055e4355","url":"./post/d50c4d0e/index.html"},{"revision":"55cee205469982e3c88f9d50d59dc62a","url":"./post/db569493/index.html"},{"revision":"a383c550d40ce0a9ce6b914a39ae3824","url":"./post/dd83a796/index.html"},{"revision":"d10a050ad6ca7fa74d1de5288f2e07da","url":"./post/f82f332a/index.html"},{"revision":"573214246947f794204ff1d8db1fe3a3","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"82369d1f8a5500a4bf0bffe0e3fc7dc4","url":"./tags/AI/index.html"},{"revision":"c84dae4eab27acdbab47768422ac9de3","url":"./tags/Aplayer/index.html"},{"revision":"14892256a1f104fe98401db185e7fe8e","url":"./tags/Bing/index.html"},{"revision":"245e1593c3eb2845482fc482df0577c3","url":"./tags/BUG/index.html"},{"revision":"b34863d7dfbd2872084a1cca3ae27006","url":"./tags/CDN/index.html"},{"revision":"2d34541288cf1d353d4da221be73c844","url":"./tags/CMS/index.html"},{"revision":"f1d74fbcc4f5667324661c82db226cc9","url":"./tags/css/index.html"},{"revision":"a5a32f07ddf88614746de2158a88d999","url":"./tags/DNS/index.html"},{"revision":"21609f893dfa049a82363adcf93c220a","url":"./tags/Flash/index.html"},{"revision":"959da499e99056c7567cb71a4e1047ac","url":"./tags/GFW/index.html"},{"revision":"0bbf8601cb0ca97cef4eb20788b7a449","url":"./tags/Gridea/index.html"},{"revision":"127f517eb9b0e2b6788872a6f4263fa7","url":"./tags/HTML/index.html"},{"revision":"dbe6c66e9635cef275320f969eb27110","url":"./tags/index.html"},{"revision":"2e8e0423318200b93cccc9bfe0c2a32b","url":"./tags/JavaScript/index.html"},{"revision":"af8f0b6aab325fc2088356ac732133b3","url":"./tags/JQuery/index.html"},{"revision":"91050cedc4226991d655d77aa8284390","url":"./tags/MetingJS/index.html"},{"revision":"6d538bb7ff69ed4b71eafff56111e42b","url":"./tags/NexT/index.html"},{"revision":"73908c7f366a8dac2953f3088a2e4b7b","url":"./tags/P2P/index.html"},{"revision":"61345cb5f2bd59f035957434e78330ac","url":"./tags/RSA/index.html"},{"revision":"a93d127008af9b10b34e00764c0e7230","url":"./tags/Vercel/index.html"},{"revision":"e0ba648a5492ed84a81fa3835df0e132","url":"./tags/分享/index.html"},{"revision":"e83c6a1351e0a22a822ac4e2108df58e","url":"./tags/加密/index.html"},{"revision":"79f4349e4ebf6854079f6c41c6a13eb9","url":"./tags/加载动画/index.html"},{"revision":"a078248ae7d034039dfbdb23621cb848","url":"./tags/右键菜单/index.html"},{"revision":"b7ce9a40f7c4ce5cf725e25db686869c","url":"./tags/域名/index.html"},{"revision":"b895e8fbfd7fb7e5db9bcd02a31e690c","url":"./tags/密码学/index.html"},{"revision":"766f9c047495e417c1f7e50678daa80f","url":"./tags/建站/index.html"},{"revision":"bc25f5c118d344cb42f2fa17c41f8f08","url":"./tags/插件/index.html"},{"revision":"c4f1f27c6c573d72f559221aa576667b","url":"./tags/服务器/index.html"},{"revision":"894c578f3f6ae28c6ea64802171ad2a1","url":"./tags/网页源码/index.html"},{"revision":"9a8b5cef9318d1778eece679643a11db","url":"./tags/美化/index.html"},{"revision":"5f3168f536f61be62fdddc45d8955942","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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