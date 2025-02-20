const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"07700487d737496e6b359182ba57f2be","url":"./404.html"},{"revision":"047fe1937012000a05ecaeed20f5ad5e","url":"./about/index.html"},{"revision":"2082133166de55607ed6002a76fee7bc","url":"./archives/2022/06/index.html"},{"revision":"35146cb0be1d450cb7b4d8de14a2d6a9","url":"./archives/2022/07/index.html"},{"revision":"450151cfe48a06fd864b0e23b1f2acf4","url":"./archives/2022/08/index.html"},{"revision":"a9c11fd1b312e8d771a2e12ad8c2edcb","url":"./archives/2022/10/index.html"},{"revision":"aeaaa11ae85dd76a024894f246e64e7f","url":"./archives/2022/11/index.html"},{"revision":"57d2780afc96cacd33d01e785be34bbb","url":"./archives/2022/12/index.html"},{"revision":"c95638c6f54bf98de9d6412e7cf6bcc6","url":"./archives/2022/index.html"},{"revision":"968a817761bfe9bacad6832403808530","url":"./archives/2022/page/2/index.html"},{"revision":"94e2066213e5623f7b4a13757758556e","url":"./archives/2023/02/index.html"},{"revision":"efd16cdb2fcb77c1ad923f8d7fcf3b5b","url":"./archives/2023/04/index.html"},{"revision":"24bb7a221ceb980b40b5682729feeb9e","url":"./archives/2023/index.html"},{"revision":"8e672109281aed8532d30ad6152cf375","url":"./archives/2024/04/index.html"},{"revision":"09bd935dc58d00b6a8c5495c7ea04bcc","url":"./archives/2024/05/index.html"},{"revision":"e32b4a6d6cf805da74f41f29741b527c","url":"./archives/2024/06/index.html"},{"revision":"afb546f51a305cf6577a90b301b518c9","url":"./archives/2024/09/index.html"},{"revision":"1d565333cdbe972ad4b041da6077aa5c","url":"./archives/2024/index.html"},{"revision":"ed8e0cd42e6573554274bdcc44e44308","url":"./archives/index.html"},{"revision":"5e15146449dbd053473e2f8a79a33e72","url":"./archives/page/2/index.html"},{"revision":"928c2abd92f0abd1af4b2092b930e59b","url":"./archives/page/3/index.html"},{"revision":"82936059e7615aeef2014c53cec65335","url":"./categories/AI/index.html"},{"revision":"526c20c76a50a67b47b2f0c696b1b671","url":"./categories/Gridea/index.html"},{"revision":"001c1ccda14809ac517d24b72b45545b","url":"./categories/index.html"},{"revision":"c4bf6681421a4fa689fcf5976d1b74db","url":"./categories/Vercel/index.html"},{"revision":"0c0dcad2ea98dfef9a27b8d230a14b21","url":"./categories/休闲/index.html"},{"revision":"27e98de7970ac4f9d6866f7b0b94ce0d","url":"./categories/建站/index.html"},{"revision":"21b96424e757cb66eb7db0b0751a8d61","url":"./categories/科普/index.html"},{"revision":"255bde9a31827269a65ce70610e46be6","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"9a419dc1f4b9124627299338bc9e9ab9","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"cdf55d2246bd274d6e0c41a050070639","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"63984fb594b234f02e79652f1283e63d","url":"./link/index.html"},{"revision":"7cb173baaecfd8f88fd387b1741ce99c","url":"./message/index.html"},{"revision":"1a9c64dffa943fa2f6614eb658cb4dac","url":"./page/2/index.html"},{"revision":"9737799d7d39010504a93c199e40876e","url":"./page/3/index.html"},{"revision":"24a40c20c608da3ea5eebebfadd65138","url":"./post/193912eb/index.html"},{"revision":"62f6389ce933db4cbdbd4b7963d9bcf2","url":"./post/220b8380/index.html"},{"revision":"0720398b20d8235698abadac01e7f90e","url":"./post/24dc856c/index.html"},{"revision":"fa84193f82ecf411ac4e6218ce7d2469","url":"./post/3082b2c6/index.html"},{"revision":"e2d4098addbcc44e453d1e9e3360f978","url":"./post/3df9585/index.html"},{"revision":"2b2fe561541a63e91168f50fecd5fbb4","url":"./post/4a17b156/index.html"},{"revision":"e40f7384aabcf8335ed5401bdbbdd157","url":"./post/739f0a30/index.html"},{"revision":"26be8a4de678cb82e893487e05dcd9d6","url":"./post/73fccf9a/index.html"},{"revision":"b412ac656653f14b7cf71a10a2a36d8c","url":"./post/7ca5704e/index.html"},{"revision":"8a428451c18155e40191c04443c6631a","url":"./post/7fc77154/index.html"},{"revision":"84728a29980a22cef2ea51f6d6d7c5cc","url":"./post/8097b5e3/index.html"},{"revision":"ce9d1c5e13adea166b49eba3ecb9f53b","url":"./post/8422c4dc/index.html"},{"revision":"cc96a6dc8c2bd32d1a1943209508df05","url":"./post/99c7fa1c/index.html"},{"revision":"0dd9fac5c804ed0bc8b421bce441809a","url":"./post/9c60e209/index.html"},{"revision":"3202e713b422aebb2ffdc50f4cea7486","url":"./post/ae58d2f1/index.html"},{"revision":"5de1a9d46ed995ff34ebd0772520bf01","url":"./post/d4550abf/index.html"},{"revision":"fc6e4ba61dd13892cfec560d7e203198","url":"./post/d50c4d0e/index.html"},{"revision":"4bb6f5d4a9111f7e3ef2a155eb1097c7","url":"./post/db569493/index.html"},{"revision":"eebed0cdd6bfd85bcabe74de3feeb9f2","url":"./post/dd83a796/index.html"},{"revision":"b60a8c9b19d2fe547dbe1ad6bc011e5d","url":"./post/f82f332a/index.html"},{"revision":"83bbbbc5c1e2337497edfdb7366ab7ff","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"8970f777fd2c3f9cfa2a94e1a10ae5fb","url":"./tags/AI/index.html"},{"revision":"2aebfe8f9ef34056c444b9f9ddb16409","url":"./tags/Aplayer/index.html"},{"revision":"27221d15dd73ea5f534fcf0ed5e2d94e","url":"./tags/Bing/index.html"},{"revision":"9b93fa65eea3428b6873d3e3d82f7d7a","url":"./tags/BUG/index.html"},{"revision":"6c0e62152c642ed481f99b4b2f6931dd","url":"./tags/CDN/index.html"},{"revision":"3f1df7e31fe3b881201aba71b72e348f","url":"./tags/CMS/index.html"},{"revision":"64928c29028ec401d6c789814137a522","url":"./tags/css/index.html"},{"revision":"83ff9256d933bbd778d0f0bc4e5c3e74","url":"./tags/DNS/index.html"},{"revision":"824f00bb78d1a408d6e052d34cc23bfc","url":"./tags/Flash/index.html"},{"revision":"ea8044579370ec312ad28b11d55bccd5","url":"./tags/GFW/index.html"},{"revision":"aec0b01875dc108086ab46ef5f282c5f","url":"./tags/Gridea/index.html"},{"revision":"d014fb41e2025abde04e73504b4dfe42","url":"./tags/HTML/index.html"},{"revision":"f2d2d2b1bb4c75a6ac2b3a3bf73b3209","url":"./tags/index.html"},{"revision":"a16245587d40937e90730f9ca49d949a","url":"./tags/JavaScript/index.html"},{"revision":"6737cafc5f8b59f96f2cb4d905364b44","url":"./tags/JQuery/index.html"},{"revision":"ea2fe8043722b8de79c357e46b59edc0","url":"./tags/MetingJS/index.html"},{"revision":"111797ec1c45c22079111460c7384a4a","url":"./tags/NexT/index.html"},{"revision":"72bb09e88c7f4a02e38d4a4dc1015bdf","url":"./tags/P2P/index.html"},{"revision":"1d2a77bf902322e290c1205f6a3cdd4b","url":"./tags/RSA/index.html"},{"revision":"9ea87383090e85d4e45e0dad345a55d5","url":"./tags/Vercel/index.html"},{"revision":"eac1cd3a57377e73af7a578c6174ceae","url":"./tags/分享/index.html"},{"revision":"05c1bfa63e908686c9901923bc84dfe7","url":"./tags/加密/index.html"},{"revision":"10ef32a36220c40cafcfed2a5cf4a069","url":"./tags/加载动画/index.html"},{"revision":"5b3d72bf3978ab38100c81f91c26b5f2","url":"./tags/右键菜单/index.html"},{"revision":"28d53766c5e0fa82431464fbee00a18d","url":"./tags/域名/index.html"},{"revision":"f9aee192c43dcdde19f8ed2d6de8e5b0","url":"./tags/密码学/index.html"},{"revision":"181f80bba414fbdaa583e89b5c261e94","url":"./tags/建站/index.html"},{"revision":"6e13ce3f72728145f60927d581758a2b","url":"./tags/插件/index.html"},{"revision":"28b686ad4c172055f5609b6bdd9992ce","url":"./tags/服务器/index.html"},{"revision":"af083f9815e8cac415b4000dc5954b11","url":"./tags/网页源码/index.html"},{"revision":"30e3abf56e98f490ac97ee8873b27749","url":"./tags/美化/index.html"},{"revision":"2c77fda6a68ccc850ad521d38af208b2","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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