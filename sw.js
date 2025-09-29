const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"c2400e51b90a244501595531c80c8dc1","url":"./404.html"},{"revision":"05db80b4e587e7e3a07772b99e7a03e2","url":"./about/index.html"},{"revision":"c47da28ea8e6272fac463a427f34c30d","url":"./archives/2022/06/index.html"},{"revision":"f1b61fff55483e15231aca9bd8b26a7e","url":"./archives/2022/07/index.html"},{"revision":"74d3c2799c7d87e8a781957976c2518e","url":"./archives/2022/08/index.html"},{"revision":"3260cbb293347a266757bdcda3d12576","url":"./archives/2022/10/index.html"},{"revision":"f55697247331dd3fa8f531efdf7bbe3f","url":"./archives/2022/11/index.html"},{"revision":"ed3a842a16fdd7ce174134eb351b2b13","url":"./archives/2022/12/index.html"},{"revision":"7a22c59c9dfe5c948037bd81bce30682","url":"./archives/2022/index.html"},{"revision":"188a78d28111a6127f995a1e1bcd4504","url":"./archives/2022/page/2/index.html"},{"revision":"82b2159d9548957f4882d66793a45cd1","url":"./archives/2023/02/index.html"},{"revision":"51444a9327d5c11d8abcc412574f2188","url":"./archives/2023/04/index.html"},{"revision":"43d7a7df32be4fdc5a5c867ce2a367c9","url":"./archives/2023/index.html"},{"revision":"040c2940e0694adeaceebeccc1a5cd32","url":"./archives/2024/04/index.html"},{"revision":"ce04c0cd46a6f3e6defb9c805552cda0","url":"./archives/2024/05/index.html"},{"revision":"f953a3ca122f0e8484dcc902fb648657","url":"./archives/2024/06/index.html"},{"revision":"e72e534bfc94786aae9b39336752b345","url":"./archives/2024/09/index.html"},{"revision":"0e68e0535fc33e610a3977be92c776d8","url":"./archives/2024/index.html"},{"revision":"6d8946462d9b5ba1506d283da8931c72","url":"./archives/2025/09/index.html"},{"revision":"c4c17617465e0a3ad641e9de82d8ee17","url":"./archives/2025/index.html"},{"revision":"a920b9601aa853d2ed63837d504df46f","url":"./archives/index.html"},{"revision":"36214a128930bef1c45f47c8ba874800","url":"./archives/page/2/index.html"},{"revision":"c4b8521618aa596bb07b70b2e9a50968","url":"./archives/page/3/index.html"},{"revision":"dc8a90bddf40b5b4d4d0c9987b473f22","url":"./categories/AI/index.html"},{"revision":"b31ca78b95e905bcec9e2cc55d23933b","url":"./categories/Gridea/index.html"},{"revision":"7812785e0a101221f86671ce0e60da95","url":"./categories/index.html"},{"revision":"c753d694dc9acc4c15d21ad7c50e149e","url":"./categories/Vercel/index.html"},{"revision":"7ed79d0dc5c932218ac2e2b4806fe124","url":"./categories/休闲/index.html"},{"revision":"67a64c2f164171d15534371c468e6ac4","url":"./categories/建站/index.html"},{"revision":"0bc1de9ae13c722d8a9a27b6f0505dbc","url":"./categories/科普/index.html"},{"revision":"72191eb3b6c19b8fd187e126b7aa2b17","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"6f730f4aa7aef9735a1014bd31d60927","url":"./cookies-instructions/index.html"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"cf96ee86ad67a6521205d4165e195232","url":"./index.html"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"1b26a8d4067f7f239d2d5d780099f73d","url":"./link/index.html"},{"revision":"cf437c8464202dfd40a7fa7a9c992e83","url":"./message/index.html"},{"revision":"fa5e47a8aee405e6ccfc7f2757e4e7ab","url":"./page/2/index.html"},{"revision":"36bc6562826b08a5fcbfce4230d6f998","url":"./page/3/index.html"},{"revision":"b22896572bea3003099124cd5880616b","url":"./post/193912eb/index.html"},{"revision":"0aa21daf2d23d4a0ae6f3eb057dac54d","url":"./post/220b8380/index.html"},{"revision":"ed4dac4228b2951bc65b953c88a063d5","url":"./post/24dc856c/index.html"},{"revision":"05c014a752f97ab52292fe55ee94f099","url":"./post/3082b2c6/index.html"},{"revision":"641960b3dd180344fb788633d77a7397","url":"./post/3df9585/index.html"},{"revision":"d2609498767eab2c6e536b97cc8ae660","url":"./post/4a17b156/index.html"},{"revision":"258faa451826aef4e2caafdaa69bc5db","url":"./post/739f0a30/index.html"},{"revision":"911ec140949157149af5b4c6e6cd2ad9","url":"./post/73fccf9a/index.html"},{"revision":"eec943088ae1348f86d56aad3994000e","url":"./post/7ca5704e/index.html"},{"revision":"fd37f353202b7219addcc0e272e80ed2","url":"./post/7fc77154/index.html"},{"revision":"5cbd7de2537e1c3cd0d5b3ef6354acf7","url":"./post/8097b5e3/index.html"},{"revision":"8416da540425c7177ae217dad46cb660","url":"./post/8422c4dc/index.html"},{"revision":"bea657c5c1412bc2c6e56f076801bd88","url":"./post/99c7fa1c/index.html"},{"revision":"82eeb17b5d8b8f9a65241fb21a235898","url":"./post/9c60e209/index.html"},{"revision":"1a2b90ed3549d2b670d8ba1acaf1042f","url":"./post/ae58d2f1/index.html"},{"revision":"8be84370d78e6c8e1bf6b7aa81f25433","url":"./post/b9a3407d/index.html"},{"revision":"7032bb490aad046718726cae05bdf077","url":"./post/d4550abf/index.html"},{"revision":"1443cdbf7335cb59497f715cb152ad69","url":"./post/d50c4d0e/index.html"},{"revision":"90235a9138ed602e57325d56dc3fc7f9","url":"./post/db569493/index.html"},{"revision":"6a3644d9f07ab0f73965676ded4f0256","url":"./post/dd83a796/index.html"},{"revision":"49131b3dc5e1724397c056b7a78cd966","url":"./post/f82f332a/index.html"},{"revision":"783aacc176b35549cce1ea4244534d8e","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"55e7d14f37d58606643e6fbf64840c34","url":"./tags/AI/index.html"},{"revision":"c6ebf344d5deb5671f04569d33f399ca","url":"./tags/Aplayer/index.html"},{"revision":"568da241c0f595118764eea8f50439bf","url":"./tags/Bing/index.html"},{"revision":"9a74cbac5fafae62ad081eb95767460d","url":"./tags/BUG/index.html"},{"revision":"155fa77c010179b1a63f66d6a904e579","url":"./tags/CDN/index.html"},{"revision":"a13e090fb80ef933cdd12baf41c212a5","url":"./tags/CMS/index.html"},{"revision":"0904f87f1557daec5ebbc66a64b5240a","url":"./tags/css/index.html"},{"revision":"9ca87160f43100221b676b71ae870607","url":"./tags/DNS/index.html"},{"revision":"95569dcde29298d772fd3375006a2c43","url":"./tags/Flash/index.html"},{"revision":"ed63977098773e192508a6e5fa44f6ed","url":"./tags/GFW/index.html"},{"revision":"4176765bf25c47586032197e3f367f4b","url":"./tags/Gridea/index.html"},{"revision":"ec4747d12d20ad1fe39a00e7d30abd03","url":"./tags/HTML/index.html"},{"revision":"a930312e8505346ee926c32b463be3ae","url":"./tags/index.html"},{"revision":"422bda54e96ee3c1afeab5c1c72030ac","url":"./tags/JavaScript/index.html"},{"revision":"3ebb60a8c70f09f9838cce7b0f79d1f0","url":"./tags/JQuery/index.html"},{"revision":"169be926f7e90e516fe56f2d232e9e9b","url":"./tags/MetingJS/index.html"},{"revision":"039d387f8349baf11f35ccc7a8a735d4","url":"./tags/NexT/index.html"},{"revision":"62cae085b0583730dfb7797165ffcb68","url":"./tags/P2P/index.html"},{"revision":"c7c34eb21216c35aa917e57c99abf982","url":"./tags/RSA/index.html"},{"revision":"ca979d4d60dec4b1c676d36aae54963a","url":"./tags/Vercel/index.html"},{"revision":"c0b95961688c129ecb922b871567a83a","url":"./tags/分享/index.html"},{"revision":"9a16da17ba3c22f297ab88b5207753ac","url":"./tags/加密/index.html"},{"revision":"a8192493dc608c7b146df70131147eab","url":"./tags/加密货币/index.html"},{"revision":"693e04447b763004f125bc384b573f3a","url":"./tags/加载动画/index.html"},{"revision":"00fb2c1edd5f5d36b7158e6e8e3b09c7","url":"./tags/区块链/index.html"},{"revision":"5db43fa6ca16cfb7833fd1aaa9fe447d","url":"./tags/右键菜单/index.html"},{"revision":"536b6d1c3bc2c920547b4ea66c5fd26c","url":"./tags/域名/index.html"},{"revision":"3b8986ea62d68874f37e6f7c620e497a","url":"./tags/密码学/index.html"},{"revision":"cbcbff921c89fedfcb965f023e439505","url":"./tags/建站/index.html"},{"revision":"7f911b97ae90096d81782fff34083ec1","url":"./tags/插件/index.html"},{"revision":"2f469c3b9111050d0e767a447c9232e9","url":"./tags/服务器/index.html"},{"revision":"e87d69d1800bdb0186b0b4edd08b7de1","url":"./tags/网页源码/index.html"},{"revision":"bcf5cf20e3fcf692dc58206191808ed6","url":"./tags/美化/index.html"},{"revision":"2951a82433d554bc1aba5da989813781","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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