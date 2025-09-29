const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"70b2ec5da76de5eb8c39c9716303382f","url":"./404.html"},{"revision":"cdaa0a4199a956f034beb5bb06f3189a","url":"./about/index.html"},{"revision":"c1cd893e62e3ab41ac8767f3315fc888","url":"./archives/2022/06/index.html"},{"revision":"08c55da2988abf9844cef425f9e477cd","url":"./archives/2022/07/index.html"},{"revision":"c2ec369da7dcc27c3eb1b67edc952cbf","url":"./archives/2022/08/index.html"},{"revision":"b6525dc61999ca000ca3c626a6040621","url":"./archives/2022/10/index.html"},{"revision":"3055a718931ca437450897747815cd37","url":"./archives/2022/11/index.html"},{"revision":"1b0d09aadd04e1edc7027bbb6e581893","url":"./archives/2022/12/index.html"},{"revision":"524e9116a9f88cc8935599ba5094b06b","url":"./archives/2022/index.html"},{"revision":"7c043b0ddcaad3286fc37cf91a8e446b","url":"./archives/2022/page/2/index.html"},{"revision":"0bd613018c3431d9cb5c20ed56f6374f","url":"./archives/2023/02/index.html"},{"revision":"1f08cbc82edac60faff267d079a9acb5","url":"./archives/2023/04/index.html"},{"revision":"7579be8a773e694d5a0152b42e7acfa2","url":"./archives/2023/index.html"},{"revision":"a8fa76da5678c4c8c205b510ef1847d0","url":"./archives/2024/04/index.html"},{"revision":"caf26b7f327b98f3d663e0fd52abf17b","url":"./archives/2024/05/index.html"},{"revision":"0aef7cccd76a01e5517ba89984d03640","url":"./archives/2024/06/index.html"},{"revision":"8aecb791062d87a928e5970cc1de05f6","url":"./archives/2024/09/index.html"},{"revision":"0c7a58db9d73ad1499712b850038e5fb","url":"./archives/2024/index.html"},{"revision":"9d06c0e055c11bacc520a297332ecfcb","url":"./archives/index.html"},{"revision":"ccfeca874cfbe35fdec0158b4fb46e80","url":"./archives/page/2/index.html"},{"revision":"a3af8261f612c06df5669d5ae900a4fc","url":"./archives/page/3/index.html"},{"revision":"38daec3bc554937d074e9c677fd38a32","url":"./categories/AI/index.html"},{"revision":"dd9123f45f10cee483486aaf998ddf57","url":"./categories/Gridea/index.html"},{"revision":"beb7cc1c041c78c3b8e5742114c0f498","url":"./categories/index.html"},{"revision":"428011a9192f292f4509e021e51131de","url":"./categories/Vercel/index.html"},{"revision":"8e03609b424fb896d0cedbb359ba5197","url":"./categories/休闲/index.html"},{"revision":"7b2efacba7a11d54a0a7f6e7c5f83946","url":"./categories/建站/index.html"},{"revision":"dfaa8734dcc0c78a1f502c6429c05816","url":"./categories/科普/index.html"},{"revision":"37367a5bb9323f413b8321597d2d7d4f","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"cd99de495d6c7c9d1aeb42feeff2f852","url":"./cookies-instructions/index.html"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"06462e2b888b6e2e95a390f3993ce477","url":"./index.html"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"7bcca28c30dfc94d78cc971c7d2d682f","url":"./link/index.html"},{"revision":"8902b19ca17edeab1b6e4dda07a1495d","url":"./message/index.html"},{"revision":"5b0b48b787f93a9b4f76bdde24c6ace1","url":"./page/2/index.html"},{"revision":"cebbc513c27e937318b1a926b4155508","url":"./page/3/index.html"},{"revision":"5381eaa4e73e48e3ef25db3e97ae5a26","url":"./post/193912eb/index.html"},{"revision":"23170ad327c36281654977605459ebd5","url":"./post/220b8380/index.html"},{"revision":"7a1f5e8bd7ad3ba3024b90293d9e3368","url":"./post/24dc856c/index.html"},{"revision":"34e2eb88522dca5b8e532a843f8b30c2","url":"./post/3082b2c6/index.html"},{"revision":"07ee2bff50925b8ae07d4acd7a056de7","url":"./post/3df9585/index.html"},{"revision":"51b57e57bda696bc0d80d5bf601d9584","url":"./post/4a17b156/index.html"},{"revision":"6c9c19d8f4f2d0376d4de1a429d92217","url":"./post/739f0a30/index.html"},{"revision":"4b91a4150412c0d585de3bd6f5de8d01","url":"./post/73fccf9a/index.html"},{"revision":"c88e4d00718d9d0a518d33f22264b35d","url":"./post/7ca5704e/index.html"},{"revision":"9f1ee516dd575dab4739e82a4a639ca1","url":"./post/7fc77154/index.html"},{"revision":"79e22143c7431abdd9d7c304f4151021","url":"./post/8097b5e3/index.html"},{"revision":"5e09fbcd57e4f6d9fd3985c6f1257644","url":"./post/8422c4dc/index.html"},{"revision":"8175bbc89fedd52466801b2219c73240","url":"./post/99c7fa1c/index.html"},{"revision":"5707bb731d076b7cc3a1aec30866feac","url":"./post/9c60e209/index.html"},{"revision":"a31013bee1173ebcc59a396d390e4300","url":"./post/ae58d2f1/index.html"},{"revision":"765d2fbc01ea168f87d75e7eace76805","url":"./post/d4550abf/index.html"},{"revision":"b73d02af24aa5c341086542a055e4355","url":"./post/d50c4d0e/index.html"},{"revision":"55cee205469982e3c88f9d50d59dc62a","url":"./post/db569493/index.html"},{"revision":"a383c550d40ce0a9ce6b914a39ae3824","url":"./post/dd83a796/index.html"},{"revision":"d10a050ad6ca7fa74d1de5288f2e07da","url":"./post/f82f332a/index.html"},{"revision":"573214246947f794204ff1d8db1fe3a3","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"f352165febabc26530aab1dab732f8cd","url":"./tags/AI/index.html"},{"revision":"a64b40afe18bb705a6a599d2b47b50e6","url":"./tags/Aplayer/index.html"},{"revision":"d4d44476506fab87e5dbd52ab17745b9","url":"./tags/Bing/index.html"},{"revision":"a8dc3be21f0d4a67fb324d537573ab48","url":"./tags/BUG/index.html"},{"revision":"a6c99240915c28cdc9b711b5c31d3ced","url":"./tags/CDN/index.html"},{"revision":"f125366157135f7de9744d06d2d2d44c","url":"./tags/CMS/index.html"},{"revision":"4c2fc52c903c3fbece21aaffd3d42ede","url":"./tags/css/index.html"},{"revision":"ffedb603f477e2c22c95560523417f4f","url":"./tags/DNS/index.html"},{"revision":"e86a0f0931933fca43dff29b183b2463","url":"./tags/Flash/index.html"},{"revision":"f49ad9bee2748e59d55b96b8e57b42a3","url":"./tags/GFW/index.html"},{"revision":"aa731f2872970352c52c4ac4567fe931","url":"./tags/Gridea/index.html"},{"revision":"1f1724b74bd070ae16f0a0d08e06b06f","url":"./tags/HTML/index.html"},{"revision":"19250915739143803cda62f0d5cc061d","url":"./tags/index.html"},{"revision":"7137e1a47816f4613d348a3337c84e85","url":"./tags/JavaScript/index.html"},{"revision":"563d171be508ab56f8d8ef634dc739aa","url":"./tags/JQuery/index.html"},{"revision":"5324003ec32d48c3375634053a444f47","url":"./tags/MetingJS/index.html"},{"revision":"46fb87109ddc2da16733d9b014fddc61","url":"./tags/NexT/index.html"},{"revision":"a50576c5b2fc38855c0c011172b78224","url":"./tags/P2P/index.html"},{"revision":"f8b55d23ebdb2323a97b2dd0b05c3fcb","url":"./tags/RSA/index.html"},{"revision":"a8a9e25d872de0c9334bdf05dfae1dcf","url":"./tags/Vercel/index.html"},{"revision":"befe6191bc692471d0dce7e568f0c946","url":"./tags/分享/index.html"},{"revision":"1fedd80c9d7409f6a78ba2669bb9625f","url":"./tags/加密/index.html"},{"revision":"08698e7996e354595c30b1d2228a2557","url":"./tags/加载动画/index.html"},{"revision":"adcabcc0b0268a28b5bcfad7af92f2db","url":"./tags/右键菜单/index.html"},{"revision":"7effdba6df383d9bf7150af4201f0f62","url":"./tags/域名/index.html"},{"revision":"2f492ab4eeb9805cbfe6b4f8bdc40544","url":"./tags/密码学/index.html"},{"revision":"6bfa4d4acb62ee73cb8e17618995932e","url":"./tags/建站/index.html"},{"revision":"a3888c1b1e08148b8eb0c28811fc9275","url":"./tags/插件/index.html"},{"revision":"6d2a5b2cbbe4c789b9807d587f1cd174","url":"./tags/服务器/index.html"},{"revision":"7bd5ad729a2c1108fadded74efee04a9","url":"./tags/网页源码/index.html"},{"revision":"8cdd8b3146949186917f168b0755c7c0","url":"./tags/美化/index.html"},{"revision":"29745d77bb457eb3570f13611118a9b4","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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