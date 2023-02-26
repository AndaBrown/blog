const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"04ce5e2003db8cc49c9e569726fe4b0c","url":"./404.html"},{"revision":"4b1050af520ca5c17f1a26d4f5a9f4aa","url":"./about/index.html"},{"revision":"f9713e821391316c64061dd9f1cdf16d","url":"./archives/2022/06/index.html"},{"revision":"75d50827fa3f1c2fa36e044b11d3fc78","url":"./archives/2022/07/index.html"},{"revision":"57012bb7e477965247d73211b0c3fe22","url":"./archives/2022/08/index.html"},{"revision":"192c05e49706cce4d9e7bd76b3e42b0f","url":"./archives/2022/10/index.html"},{"revision":"1fba0f38409f8de8af1bea7bdb89cf31","url":"./archives/2022/11/index.html"},{"revision":"5f6200441e66b96a0f86c7debd8d17f7","url":"./archives/2022/12/index.html"},{"revision":"3b3de90d36a31a990d76e6aaf6f34e40","url":"./archives/2022/index.html"},{"revision":"bb28d149438a109c362ad14e702add25","url":"./archives/2022/page/2/index.html"},{"revision":"ac8278480da9e46fe163f1f9d0d72124","url":"./archives/2023/02/index.html"},{"revision":"89463de79158c2ce3c33c7f2fec43332","url":"./archives/2023/index.html"},{"revision":"373f306c22f5266a0febe94d83d9f351","url":"./archives/index.html"},{"revision":"4bf3ab73e4c360ce7c776fe3c89afb95","url":"./archives/page/2/index.html"},{"revision":"3f70e7c35724ba63dc367c7c22f7c185","url":"./categories/Gridea/index.html"},{"revision":"1f64eac435b8ffb13494428c11c856d8","url":"./categories/index.html"},{"revision":"54478fd1d3f02f080823696e541a0596","url":"./categories/Vercel/index.html"},{"revision":"86e3461c3525e785f5b83c821227cf54","url":"./categories/休闲/index.html"},{"revision":"4c02a0f98ed2680fc79e028c0465cdf2","url":"./categories/建站/index.html"},{"revision":"4f91ceaffbc9af6663da2b5c432a95c4","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"6163f103b46da63a7ae84f7052a207fc","url":"./cookies-instructions/index.html"},{"revision":"4252cf4b91097427e40c22fd46f002fe","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"982f77e37adcb7ffe798a42e4df97d7f","url":"./go/index.html"},{"revision":"fe4e40848b7691b4a598dde46a1c8897","url":"./index.html"},{"revision":"5a6ecf34399a1729b115064d2f283227","url":"./js/main.js"},{"revision":"786b8da5325888c55c04e6b6687bf9f5","url":"./js/search/algolia.js"},{"revision":"1ec55c21e97cc170ee4dadaf96b44806","url":"./js/search/local-search.js"},{"revision":"bc064917c366036544975274bb20a01d","url":"./js/tw_cn.js"},{"revision":"0dccc99f6a5b70b9ccfbf58d2c6eec5b","url":"./js/utils.js"},{"revision":"8d57d6c8071662d26c1ba4bb03652430","url":"./link/index.html"},{"revision":"a15697b60e96eb88989773869ec97ed4","url":"./message/index.html"},{"revision":"31bfbf1c37e64a7361e0d96f225f633d","url":"./page/2/index.html"},{"revision":"bbb12ed70d7b7658efb55c96c5ab1e73","url":"./post/193912eb/index.html"},{"revision":"4b2cb9c4d83a3d7f21823f64d2d73e1b","url":"./post/220b8380/index.html"},{"revision":"c762a2a02842440f527bd991407442a5","url":"./post/24dc856c/index.html"},{"revision":"95a9baaeb44bc6eb5b2e3714a123c904","url":"./post/3082b2c6/index.html"},{"revision":"bdeae48579ba773836961ebd5ae148b4","url":"./post/3df9585/index.html"},{"revision":"b744369a8a93adc92768ae49be9d3dc7","url":"./post/4a17b156/index.html"},{"revision":"7f5cc4e5179d4232ac0561af4ef983b5","url":"./post/73fccf9a/index.html"},{"revision":"f3854f5a7792307676496f39a0d247df","url":"./post/7ca5704e/index.html"},{"revision":"fbf54bfa716343e8b50d31f1a33fd61c","url":"./post/7fc77154/index.html"},{"revision":"c79784c65f38ebac2f0aa660d09665d3","url":"./post/8422c4dc/index.html"},{"revision":"85f0e0d5512c1a1aa4e3d34612eb7dae","url":"./post/9c60e209/index.html"},{"revision":"db65996858489198dae37144e083fe8b","url":"./post/d50c4d0e/index.html"},{"revision":"7dc90018386ec42adfb3cce493d2d7ec","url":"./post/db569493/index.html"},{"revision":"52aef3a070175cc1703499535d1a66f4","url":"./post/dd83a796/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"5eafbc274b84da58360d3b5dd0b25fd7","url":"./tags/Aplayer/index.html"},{"revision":"885c41865fe9ec7e83084ef48d1a7248","url":"./tags/BUG/index.html"},{"revision":"6eb64f132b8b4fb89d7f4949231013eb","url":"./tags/css/index.html"},{"revision":"05e4809715ff41818cc2d60b99da451d","url":"./tags/DNS/index.html"},{"revision":"8beecf740620f4cfa92748fa34180b95","url":"./tags/Flash/index.html"},{"revision":"2808e5e65f046e8d5bfca035803c8b62","url":"./tags/GFW/index.html"},{"revision":"fa124724dbfd31863212aac9c50e3192","url":"./tags/Gridea/index.html"},{"revision":"fdf76fd70aca25e9aee341ffc96040e7","url":"./tags/HTML/index.html"},{"revision":"bdd84693758941720479d0919c25926c","url":"./tags/index.html"},{"revision":"118553cb775f8f077cb749886a5d611a","url":"./tags/JavaScript/index.html"},{"revision":"bdc0296b7d3fdc376fd2c785b62eece7","url":"./tags/JQuery/index.html"},{"revision":"da14be8661fcabe192ce4c6b60a53b90","url":"./tags/MetingJS/index.html"},{"revision":"52acb112f222d67e9e5a9aca84f3c2cc","url":"./tags/NexT/index.html"},{"revision":"5835dac2820b4a72826b9e98b7ee3bab","url":"./tags/Vercel/index.html"},{"revision":"ba4a777af2e63e64ef8c304f5a35c598","url":"./tags/加载动画/index.html"},{"revision":"47738c082adbf25d724776f2891ea171","url":"./tags/右键菜单/index.html"},{"revision":"a06eeba549fa217683c6c58826bfd640","url":"./tags/域名/index.html"},{"revision":"06b4e06474abeeeef2c99787b1576780","url":"./tags/建站/index.html"},{"revision":"df94e44e124caf975288c6d00eb698fa","url":"./tags/插件/index.html"},{"revision":"014ab187f3f27cd72fa18595f42cdc7f","url":"./tags/网页源码/index.html"},{"revision":"82468616c4d799bd8f62e59b774a5010","url":"./tags/美化/index.html"}]);

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

workbox.googleAnalytics.initialize();