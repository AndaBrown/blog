const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"},{"revision":"4697b177c993517f71aa6f647c0d4abf","url":"./index.html"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"c90edaf61bcb2da91d2bb74bca73976a","url":"./404.html"},{"revision":"3799f7b6ebad35b440b2b42c89e3d95a","url":"./talks/index.html"},{"revision":"dee118076d9c9d3470160db4327476bd","url":"./tags/index.html"},{"revision":"ea74ab56bc17fcb75e7c282ae376c375","url":"./tags/美化/index.html"},{"revision":"d64ff70d65752318e4fc2a0363a2d1b5","url":"./tags/网页源码/index.html"},{"revision":"0cb5f09c4cf6765f9fa41267dc181363","url":"./tags/服务器/index.html"},{"revision":"f2eb00cc5f52d17c657b02d0d8a848e0","url":"./tags/插件/index.html"},{"revision":"4c09203d8a61af47b00d8b2cd13a6535","url":"./tags/建站/index.html"},{"revision":"fb29d48a462887de9062927a785cbad6","url":"./tags/密码学/index.html"},{"revision":"3dd1507bfde07b62c69855be513b0c89","url":"./tags/域名/index.html"},{"revision":"0bf0ac9b999ecc48da789187082803c8","url":"./tags/右键菜单/index.html"},{"revision":"15390520fc81ecff6b4183767bfa784e","url":"./tags/区块链/index.html"},{"revision":"519eea5f13089068fc6a4ec521b1e7cb","url":"./tags/加载动画/index.html"},{"revision":"b983ef24fee88487d58be4051c99075b","url":"./tags/加密货币/index.html"},{"revision":"b418d4dd27c4bec55542c8514d7d513e","url":"./tags/加密/index.html"},{"revision":"3dcbe5ce158284993f519b9c68a45de3","url":"./tags/分享/index.html"},{"revision":"01e96d09720a24cb7b839b11f9ba0121","url":"./tags/css/index.html"},{"revision":"55af106fa3d11775315339e04c9285fc","url":"./tags/Vercel/index.html"},{"revision":"4c60d32b38621c5930e86676593d05a5","url":"./tags/RSA/index.html"},{"revision":"5f95d51a417ccdeea9d8f5787ee96203","url":"./tags/P2P/index.html"},{"revision":"eff81e297aaeaa4d8148285b62c49aa1","url":"./tags/NexT/index.html"},{"revision":"321387ae07832a5b0ec3655991a9312e","url":"./tags/MetingJS/index.html"},{"revision":"18052a67bfc7f45ed808b11dd9f4a9e5","url":"./tags/JavaScript/index.html"},{"revision":"3a82f3395ccc8e51a5ad6e34d93862ba","url":"./tags/JQuery/index.html"},{"revision":"0596f66d9c94d0c0b8430c05fd292f91","url":"./tags/HTML/index.html"},{"revision":"93f08fcf1fcf3a57bb15b8f17cb75d1a","url":"./tags/Gridea/index.html"},{"revision":"ec957ee7c5a6d808119520747f209df2","url":"./tags/GFW/index.html"},{"revision":"d4317d6f07efc863d0da2308ca9c7714","url":"./tags/Flash/index.html"},{"revision":"f7aa32cc40171db80a156767dcd3de91","url":"./tags/DNS/index.html"},{"revision":"93019537a93f6eae49630152d4aabc72","url":"./tags/CMS/index.html"},{"revision":"f626f155c393fac31e61895e1f5e0e50","url":"./tags/CDN/index.html"},{"revision":"0c80562476cb23e757163330f97a46ec","url":"./tags/Bing/index.html"},{"revision":"0a3f2e5c1ef346824c11cb8e8b55bd4a","url":"./tags/BUG/index.html"},{"revision":"2da03834a48632ff60ba506c4370302f","url":"./tags/Aplayer/index.html"},{"revision":"1b121d10fcd2480b18334033026562f3","url":"./tags/AI/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"88655123dab0329103bdd150f90e38b9","url":"./post/fa97bd48/index.html"},{"revision":"0bb6b3a17e12773037c68009c183221a","url":"./post/f82f332a/index.html"},{"revision":"a4c265fd9762261bf7018f92a1e7343e","url":"./post/dd83a796/index.html"},{"revision":"718cacfcd7701fb736dfc5c28e875123","url":"./post/db569493/index.html"},{"revision":"0c56bfd2b5311269400cb564c012b5e7","url":"./post/d50c4d0e/index.html"},{"revision":"36ea2e2f3fb25f1a900c22f12f175261","url":"./post/d4550abf/index.html"},{"revision":"cb498ada403370779d0cfe38d514a0e9","url":"./post/b9a3407d/index.html"},{"revision":"6f8b10ca304f68aaaa9312a9553f017a","url":"./post/ae58d2f1/index.html"},{"revision":"d51427e5eefad46e8bd8a66757fa8a09","url":"./post/9c60e209/index.html"},{"revision":"66511bdfea5cecf392899b7ef2333d7d","url":"./post/99c7fa1c/index.html"},{"revision":"abc529635c417e884aef78675dc8db48","url":"./post/8422c4dc/index.html"},{"revision":"64bb22c1e1795e3c2d94a381fbfd723b","url":"./post/8097b5e3/index.html"},{"revision":"fa1d8027e7b7309b5e9c262bddc41b28","url":"./post/7fc77154/index.html"},{"revision":"14e1a50e62dd31e4b807647d78231ebf","url":"./post/7ca5704e/index.html"},{"revision":"1e9b99f682b12f1c08128c003c4dec71","url":"./post/73fccf9a/index.html"},{"revision":"1a8869c8b4c37c72a1798d3a7ce7960e","url":"./post/739f0a30/index.html"},{"revision":"3c828837104062ce4593e67434d8f5d7","url":"./post/4a17b156/index.html"},{"revision":"be03873633443e619e47552c7f34d742","url":"./post/48bc1675/index.html"},{"revision":"5123c94b7bbae2c2e0a022b059c9707e","url":"./post/3df9585/index.html"},{"revision":"503ee5f4e51012201706bdcaf964089c","url":"./post/3082b2c6/index.html"},{"revision":"695e7a7e8d5a58ac620e1100f9a3023e","url":"./post/24dc856c/index.html"},{"revision":"505e8b1a9e40c59e02a8341ffa2f85b0","url":"./post/220b8380/index.html"},{"revision":"a859aa8bdb198bb26eb9b67ca8643821","url":"./post/193912eb/index.html"},{"revision":"4ee2a251aead049c320cc793d2f7a235","url":"./page/3/index.html"},{"revision":"e71a84b73a719d53f92844f7c89bd43e","url":"./page/2/index.html"},{"revision":"20d0a3d9302b0626bb2a7bcda0edc523","url":"./message/index.html"},{"revision":"303a696fcabe7fd9cb2def481df8f190","url":"./link/index.html"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"bf7313fcf41061cd73767216fe6cabbe","url":"./cookies-instructions/index.html"},{"revision":"12be7f3dcc0e04d6fb72cc21dd7b2ac8","url":"./categories/index.html"},{"revision":"b9e1ad09e4e12e806794adbf895e182d","url":"./categories/网页源码/index.html"},{"revision":"fc6a2efe72ae60585b099ed070d3ce37","url":"./categories/科普/index.html"},{"revision":"5a9963b080d05310e4f88f15b1c5d36e","url":"./categories/建站/index.html"},{"revision":"3427196c7d5720c26a6d0b4b1c2f931a","url":"./categories/休闲/index.html"},{"revision":"8d9577203bc10cfaf151418b7c747fee","url":"./categories/Vercel/index.html"},{"revision":"d0167b73c6160b8dd32c0034b8d3046a","url":"./categories/Gridea/index.html"},{"revision":"5df34e8480c222111b1446289f281fa2","url":"./categories/AI/index.html"},{"revision":"eff24e38b497d49e73d72a20a9c818ad","url":"./archives/index.html"},{"revision":"ae4be1b5ef8ea8f845f4c76ff963a686","url":"./archives/page/3/index.html"},{"revision":"1211a49c88baa87fdad90a5e88959a2c","url":"./archives/page/2/index.html"},{"revision":"8f973ff6e467f9d61e62fa67b625c5f5","url":"./archives/2025/index.html"},{"revision":"386a49f0448ca3346e20e1f46b011e9e","url":"./archives/2025/10/index.html"},{"revision":"f7608da17ac4e916ebb192a059ee4500","url":"./archives/2025/09/index.html"},{"revision":"a48b567165833a39b9d3a173a112d38d","url":"./archives/2024/index.html"},{"revision":"1426239755d87707797047aaa942817a","url":"./archives/2024/09/index.html"},{"revision":"90af07a1ba002f97e8c2a3bff0ec5743","url":"./archives/2024/06/index.html"},{"revision":"29ea6e03d668783c869cc66ae95920e3","url":"./archives/2024/05/index.html"},{"revision":"95196f1c099ec2a5dbec5170414c2ba0","url":"./archives/2024/04/index.html"},{"revision":"2b3ebb586633472e8a8b1c6486cbea43","url":"./archives/2023/index.html"},{"revision":"7036bb70f5d8136b23b72e0e6b3b20ca","url":"./archives/2023/04/index.html"},{"revision":"c647c7504ba4b4d15c2c89b2691aa2c8","url":"./archives/2023/02/index.html"},{"revision":"ed6c1b88cfdc530387b8c4897d62d98a","url":"./archives/2022/index.html"},{"revision":"dd31d679ca566bdbfe37a977080e1cab","url":"./archives/2022/page/2/index.html"},{"revision":"117499dd60b11ff4d3ad79b3b8e29367","url":"./archives/2022/12/index.html"},{"revision":"d79324052eb49cad4d1843ca10e7138d","url":"./archives/2022/11/index.html"},{"revision":"11e2b980903e2f4e534db74da7fcf3cd","url":"./archives/2022/10/index.html"},{"revision":"3d0b65b4afcf0dda49f735c89e81c7c2","url":"./archives/2022/08/index.html"},{"revision":"70d213ad88337eaaf16c843ce416ee36","url":"./archives/2022/07/index.html"},{"revision":"184bc4cda6cdc82f4e8bc4c432ba5afc","url":"./archives/2022/06/index.html"},{"revision":"617c7d3a6b120468d74b732309b57da4","url":"./about/index.html"}]);
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