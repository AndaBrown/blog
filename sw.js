const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"c2400e51b90a244501595531c80c8dc1","url":"./404.html"},{"revision":"adb274bd779af88866d8051076a4eede","url":"./about/index.html"},{"revision":"fdc7542a486e3d3cbe70d7f047145178","url":"./archives/2022/06/index.html"},{"revision":"ec34b5f66a3b22d1cd16108eb8997963","url":"./archives/2022/07/index.html"},{"revision":"836b9685f9ca48abbfbdb9cef30b8d4e","url":"./archives/2022/08/index.html"},{"revision":"dfbbe39e0e72f918fa0a0abc83535661","url":"./archives/2022/10/index.html"},{"revision":"488a0fae38108db76644fa464361f768","url":"./archives/2022/11/index.html"},{"revision":"b11103f5b8f1e02ed6439704c9d160db","url":"./archives/2022/12/index.html"},{"revision":"2a2e94c5b81f765f0cff94d2ac8f7f17","url":"./archives/2022/index.html"},{"revision":"a02d3058a2fc9e37270391ef48f3ff2a","url":"./archives/2022/page/2/index.html"},{"revision":"8d751ff8847e816a3fc1c9ccc8eadbba","url":"./archives/2023/02/index.html"},{"revision":"34a145b9364ae0b6d757276b3fa8d260","url":"./archives/2023/04/index.html"},{"revision":"8fe2ff99349bc2843b44c2afee107bbe","url":"./archives/2023/index.html"},{"revision":"a422971e6b0c76d21460d7a4b317ba36","url":"./archives/2024/04/index.html"},{"revision":"53c06f744411afd38d59a6c7bc584c5f","url":"./archives/2024/05/index.html"},{"revision":"553bf6a1844df12d2b6b0e85d622e85c","url":"./archives/2024/06/index.html"},{"revision":"3ee6cf2f1ff32e9ab448ff91dc7e10d7","url":"./archives/2024/09/index.html"},{"revision":"95220858ec0386529cffb3ca4415d4ce","url":"./archives/2024/index.html"},{"revision":"aa9b646931c1fcdbbe9495b3fd9d6724","url":"./archives/2025/09/index.html"},{"revision":"08a44dd4403904bc59ded4e3127d9c7b","url":"./archives/2025/index.html"},{"revision":"b6b6b6fce35c1227a9630d9fe3cccb93","url":"./archives/index.html"},{"revision":"586a74b1d820d9171d09b9f53d2080c8","url":"./archives/page/2/index.html"},{"revision":"1e722d88cb3500713f0ee68afe380c71","url":"./archives/page/3/index.html"},{"revision":"41e39ae58d0c6c93fb7f10ff893100c4","url":"./categories/AI/index.html"},{"revision":"164cd9e2e050c0d81e0fcc1ce5f0ec0b","url":"./categories/Gridea/index.html"},{"revision":"53c86f1b8218bb66787ae3469dbc29fb","url":"./categories/index.html"},{"revision":"62e078df0ce58df44e23f484b0a32816","url":"./categories/Vercel/index.html"},{"revision":"f498e8bcee746c33bd4337c6de61b293","url":"./categories/休闲/index.html"},{"revision":"2510f0e928134e90d59d5629132584dd","url":"./categories/建站/index.html"},{"revision":"dd4c4a36302b69d4c0f0c7b5c3b5a7ac","url":"./categories/科普/index.html"},{"revision":"149b18bedf6f0f86ca94aa073beaaeca","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"076dcfe9f6ad0676a93330a9cf627111","url":"./cookies-instructions/index.html"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"b17efc638452059777cb9ebc271d9584","url":"./index.html"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"55ee7c0898d6c8e4e7bfbd5d559076df","url":"./link/index.html"},{"revision":"774092a9a36f6bde8037e33ed224343f","url":"./message/index.html"},{"revision":"9ec20424fcfe4e9db5881ce52f0d1d05","url":"./page/2/index.html"},{"revision":"d2082a949618b71d4b48e16dc1066c24","url":"./page/3/index.html"},{"revision":"cf6520a925b3bd2ddb4ccd483f12709f","url":"./post/193912eb/index.html"},{"revision":"50ce148a08f49faca333238e73144547","url":"./post/220b8380/index.html"},{"revision":"935fadf4f77ba3e082bf00143ff99e55","url":"./post/24dc856c/index.html"},{"revision":"87b181b2dc0cdf2028cb62a79595ec72","url":"./post/3082b2c6/index.html"},{"revision":"af7c83713ce8e2c21c77b3ef4d7cfe79","url":"./post/3df9585/index.html"},{"revision":"2605cd28e974d8340bf10b1aca14f5c0","url":"./post/4a17b156/index.html"},{"revision":"57a9e632b3647484ccefd18bc2396f81","url":"./post/739f0a30/index.html"},{"revision":"d0a819e6be2c614281ef65fddf6a57fb","url":"./post/73fccf9a/index.html"},{"revision":"3ccfeb266db78e72ab3ef1a986689339","url":"./post/7ca5704e/index.html"},{"revision":"f2a190ab6760666b9ed2b82c2da9abed","url":"./post/7fc77154/index.html"},{"revision":"d7ff7167a972c593715499c1191c3cc8","url":"./post/8097b5e3/index.html"},{"revision":"044df9d7ac329ef8272efb6b1d3f0a94","url":"./post/8422c4dc/index.html"},{"revision":"0f196c8b4b9f64f22417c3e857975da2","url":"./post/99c7fa1c/index.html"},{"revision":"678ec045eb3f5cfaeb545c38b734b226","url":"./post/9c60e209/index.html"},{"revision":"2813c53e30efe2533845dae4cd8956fd","url":"./post/ae58d2f1/index.html"},{"revision":"a9f61607691cad802f442fb48f71fbab","url":"./post/b9a3407d/index.html"},{"revision":"1c0cfef4181063368e708cb4de699f19","url":"./post/d4550abf/index.html"},{"revision":"26bbd0e083c97c3804885d1261f94c9a","url":"./post/d50c4d0e/index.html"},{"revision":"05f1496c7d20e99fd664fc54c0fe6137","url":"./post/db569493/index.html"},{"revision":"e229c4828cee5b28737d78724d793c84","url":"./post/dd83a796/index.html"},{"revision":"99095e2e3d806c0e242c1e5c64835e8d","url":"./post/f82f332a/index.html"},{"revision":"9d7e270d785017679fe44499758d95ea","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"c7c7204c9d02027343c1504567affaf4","url":"./tags/AI/index.html"},{"revision":"8e705bf0146885af8397f38b6c24ea6b","url":"./tags/Aplayer/index.html"},{"revision":"e5900085060f926c1e6946a20cba6450","url":"./tags/Bing/index.html"},{"revision":"c1e31061425de366b5f632019b8d95ba","url":"./tags/BUG/index.html"},{"revision":"e4d2ec4f4213b02c0b41d5630fc99637","url":"./tags/CDN/index.html"},{"revision":"353cbd81361bb6c025232545e05e816f","url":"./tags/CMS/index.html"},{"revision":"787b2b26281e0a31f1186a4e42e62c56","url":"./tags/css/index.html"},{"revision":"2200fc50a722a493dd781c7a17f853eb","url":"./tags/DNS/index.html"},{"revision":"e2b1d5d03476346e54817969df797658","url":"./tags/Flash/index.html"},{"revision":"6c493f862c501c38c778f15844f58493","url":"./tags/GFW/index.html"},{"revision":"63e686ceef72dfe7a9c68bdaf1fee96f","url":"./tags/Gridea/index.html"},{"revision":"986a94c2aee139cdefe40c5088ea2532","url":"./tags/HTML/index.html"},{"revision":"4f7aedeea3d23d95c2a75dd3d04e9bf8","url":"./tags/index.html"},{"revision":"9196c497ce3afe044eaf4c315f2d106e","url":"./tags/JavaScript/index.html"},{"revision":"aa56c3335cb469979b35a1cc5bfcae3f","url":"./tags/JQuery/index.html"},{"revision":"e9d01dfe006832e3aac6fd1475912416","url":"./tags/MetingJS/index.html"},{"revision":"dbda7647544f6f52567c78da0c522817","url":"./tags/NexT/index.html"},{"revision":"9de4b33ea445981885d8319309b1ad1b","url":"./tags/P2P/index.html"},{"revision":"65b0f02c59de7de5d849de5c25e7dc3f","url":"./tags/RSA/index.html"},{"revision":"ea306ccc3c24c5ab4f07533909751282","url":"./tags/Vercel/index.html"},{"revision":"23525e6de0b0160e2e8826df8013c41a","url":"./tags/分享/index.html"},{"revision":"0aaa91817ac4116e53197eafbd6a365a","url":"./tags/加密/index.html"},{"revision":"3f6689efee4ffc5d2641384771e5ea07","url":"./tags/加密货币/index.html"},{"revision":"568189d8db0ade076cf7ff5bfe163d9b","url":"./tags/加载动画/index.html"},{"revision":"b8b035785f28a97d1f5b3667806d9b65","url":"./tags/区块链/index.html"},{"revision":"3beb05fee0d6500dd35e8d3f0cd774cb","url":"./tags/右键菜单/index.html"},{"revision":"5e0c462d6ed01f8c0ba4194f694ece64","url":"./tags/域名/index.html"},{"revision":"3c9ed153f2d173a98723403865f41a22","url":"./tags/密码学/index.html"},{"revision":"df81d95cb24a96b40b72e82ecee4e65d","url":"./tags/建站/index.html"},{"revision":"68dff376b0057094fda4751a6217d1ac","url":"./tags/插件/index.html"},{"revision":"fcba870ed8983df18e8d74338df77a67","url":"./tags/服务器/index.html"},{"revision":"d0a040f4c05198324cda56c8d185aedc","url":"./tags/网页源码/index.html"},{"revision":"d5c7f4a66ca8a46858672c8a3308d8bb","url":"./tags/美化/index.html"},{"revision":"62cd9868daf0f27822e1e800ee997b86","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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