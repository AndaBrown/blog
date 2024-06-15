const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"c917f35aae02158b2613721ee9291ccc","url":"./404.html"},{"revision":"29bea007698b807bb07e9e909f0d072b","url":"./about/index.html"},{"revision":"32c6586dc350525b36ad8bc08ecbc50f","url":"./archives/2022/06/index.html"},{"revision":"8451a19d2bcf06451552bd6cb3ab90e8","url":"./archives/2022/07/index.html"},{"revision":"1b8d7485e2d127fbc4a7e6f7cc7d0705","url":"./archives/2022/08/index.html"},{"revision":"a6022fbf79200fb514ac2ed5660e4493","url":"./archives/2022/10/index.html"},{"revision":"9291dcd695510b2e99302b00c5facbb8","url":"./archives/2022/11/index.html"},{"revision":"33fa3423372881936ef1e9c2e64f61da","url":"./archives/2022/12/index.html"},{"revision":"9f37437aba621a9e6a27d56d7be0e447","url":"./archives/2022/index.html"},{"revision":"0d307691016867c462c7c9c04debf0f6","url":"./archives/2022/page/2/index.html"},{"revision":"0633602e856e07c248d719044e52e08a","url":"./archives/2023/02/index.html"},{"revision":"3bd5ca2ccdea5ea390d0c543a22c2dc0","url":"./archives/2023/04/index.html"},{"revision":"242d434e3b6b8946d979906fbc20e185","url":"./archives/2023/index.html"},{"revision":"105151b78f45b7eba6b395263a069177","url":"./archives/2024/04/index.html"},{"revision":"af5c4ad11968aa0fd1ed1b605273dd78","url":"./archives/2024/05/index.html"},{"revision":"7b626b9d2afeb45827ac2046490e9a71","url":"./archives/2024/index.html"},{"revision":"e02a78d411e92dbbfe05928a0fd5eb31","url":"./archives/index.html"},{"revision":"1514b4623ad56c21b6d49cc9ad13a370","url":"./archives/page/2/index.html"},{"revision":"2b6b581ccb3a5c4a99128ec624727f6f","url":"./categories/AI/index.html"},{"revision":"c23dafaa1c727553fd8231f9d2ed1c4d","url":"./categories/Gridea/index.html"},{"revision":"b56ca78eed46cd20dee5eb4f8c4d137d","url":"./categories/index.html"},{"revision":"001457d3df932f247a56b705b421ecd5","url":"./categories/Vercel/index.html"},{"revision":"b51e7f614b0d38fb302463d3d22951f7","url":"./categories/休闲/index.html"},{"revision":"164bdc28ea80fea27cc9cd6d49dd8403","url":"./categories/建站/index.html"},{"revision":"0d5c56e0efb134e800cc3638b2be206d","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"e827386c592740f86e750b2dea79f0b5","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"392419a380566e73cf5a1aef587d3079","url":"./go/index.html"},{"revision":"f86ce645663694722e742ec5d86efa5d","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"965a546a97d94032887d696a42b98f87","url":"./link/index.html"},{"revision":"523202831c7add9d26384d2b2690fb2c","url":"./message/index.html"},{"revision":"64e7b5c2e71b9b5929f071ec32932be1","url":"./page/2/index.html"},{"revision":"bb8aa57f47901c84bf62cb9dff048319","url":"./post/193912eb/index.html"},{"revision":"3875f8f6d027b5a2f22c1379b7a5848e","url":"./post/220b8380/index.html"},{"revision":"f2619a0a716fe8a60ac3413425c5aea3","url":"./post/24dc856c/index.html"},{"revision":"2f6b768233adbc4c82d71b4d6b8b1433","url":"./post/3082b2c6/index.html"},{"revision":"871590ed635e42d27f53191a9770e381","url":"./post/3df9585/index.html"},{"revision":"381cd488e8a728c358f23d84e7be6e4a","url":"./post/4a17b156/index.html"},{"revision":"e84eae41eb286b39db353cd5541c9fb4","url":"./post/739f0a30/index.html"},{"revision":"84cdf3439220f017177cbb15537f2157","url":"./post/73fccf9a/index.html"},{"revision":"f680326923a2417a344be690c17756ce","url":"./post/7ca5704e/index.html"},{"revision":"6bf19de63d69f383fcff6ddeac004684","url":"./post/7fc77154/index.html"},{"revision":"134a5857fa45ce4f2eb8a8b5c263b7a2","url":"./post/8422c4dc/index.html"},{"revision":"90dd97091c5964792d90f8c6f94abf3e","url":"./post/99c7fa1c/index.html"},{"revision":"61b9391cfc6737f2ab4ed0642fa3bd49","url":"./post/9c60e209/index.html"},{"revision":"f8ebe335ab9826ca366f160ab159f872","url":"./post/ae58d2f1/index.html"},{"revision":"23ee95264546c987dbd76a5846d8e947","url":"./post/d4550abf/index.html"},{"revision":"c651d931126a4a0e43ffebfffb8ad940","url":"./post/d50c4d0e/index.html"},{"revision":"4e8a6048fa766f28e7b976195c4ca12e","url":"./post/db569493/index.html"},{"revision":"d80c50232006ce555013b1f141f260d9","url":"./post/dd83a796/index.html"},{"revision":"a99984600d104747e570ae943334fdd6","url":"./post/f82f332a/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"4c763070ea773a102aa70995e911e7d8","url":"./tags/AI/index.html"},{"revision":"1bc5d970268dfdd584987151f9ed5bf3","url":"./tags/Aplayer/index.html"},{"revision":"5bdcd44d1e8695592897a31c08cb6dbc","url":"./tags/Bing/index.html"},{"revision":"2de17202149ba79081a8f8c518bac4e3","url":"./tags/BUG/index.html"},{"revision":"aa66a89b857f497a009e49fcf677fdf1","url":"./tags/CDN/index.html"},{"revision":"6b234d1b5c88464be702276c52a024f8","url":"./tags/CMS/index.html"},{"revision":"4ca19a757aad3e9e36cc4fc9b680f35d","url":"./tags/css/index.html"},{"revision":"ba53c08a1d445de094602c7dd2c38191","url":"./tags/DNS/index.html"},{"revision":"324b637b111d427bb982742375fa44ea","url":"./tags/Flash/index.html"},{"revision":"4ec56be108b4891e511a6ffd98c49159","url":"./tags/GFW/index.html"},{"revision":"d44848b79fd6524b48fd58f8a6072b44","url":"./tags/Gridea/index.html"},{"revision":"36cd80496530f1cfbe939d7f158b95ed","url":"./tags/HTML/index.html"},{"revision":"608044b6fe2f33172394eede40797b4c","url":"./tags/index.html"},{"revision":"b730214d277bc1d18765d11e24a9ff46","url":"./tags/JavaScript/index.html"},{"revision":"848b6e0f4cbdcbc225fcc560ae283f0d","url":"./tags/JQuery/index.html"},{"revision":"6a9fc2a63ecca6f6955c7923fb07e3c7","url":"./tags/MetingJS/index.html"},{"revision":"7fc825e1a9f1e1188bfe9f228803b925","url":"./tags/NexT/index.html"},{"revision":"eb6d44a0c4a67b228daa98c4bbd61da1","url":"./tags/Vercel/index.html"},{"revision":"b5a16bb8f0bbc08ab4d5fb0ea6903d1b","url":"./tags/分享/index.html"},{"revision":"15617aa35647f62ed829e4a08b19d5d1","url":"./tags/加载动画/index.html"},{"revision":"892bdc8ba9467356d29560a7fcd738dc","url":"./tags/右键菜单/index.html"},{"revision":"f01799d3c115716a4e878767c97873c8","url":"./tags/域名/index.html"},{"revision":"8d99668a218d25251c2ded26fb99a25f","url":"./tags/建站/index.html"},{"revision":"3b9436bfa0297ed5b23c56e96c7a1715","url":"./tags/插件/index.html"},{"revision":"10eb1ed9b5a7e8f8650024e980d2b874","url":"./tags/服务器/index.html"},{"revision":"19224974f8acab5d43f84239657456b1","url":"./tags/网页源码/index.html"},{"revision":"bba265bb541c2452866bab645d15a65f","url":"./tags/美化/index.html"},{"revision":"9246921013be1947c347c8fb3a98035d","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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