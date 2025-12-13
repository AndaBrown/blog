const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"},{"revision":"657bc4589748a149674edd6109daa0cc","url":"./index.html"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"c90edaf61bcb2da91d2bb74bca73976a","url":"./404.html"},{"revision":"528c2e4286d8709bdc5f2d852acad174","url":"./talks/index.html"},{"revision":"6d2b47a690c17fb0c0a764e80389d9ef","url":"./tags/index.html"},{"revision":"7f9a543c9a9be11095767e24ecb5ae21","url":"./tags/美化/index.html"},{"revision":"0d1e3c38b84efb4e785be559672f727b","url":"./tags/网页源码/index.html"},{"revision":"969dfc3348be8112c66a215b024af49c","url":"./tags/服务器/index.html"},{"revision":"4045b3349c1c1ec149656f76398e9674","url":"./tags/插件/index.html"},{"revision":"dc04984c0729c12e358507bd905a7261","url":"./tags/建站/index.html"},{"revision":"17fda1021ae40381b7591bdaadab09b2","url":"./tags/密码学/index.html"},{"revision":"f0e72463aae30c3e6367c1e6a513135f","url":"./tags/域名/index.html"},{"revision":"950b7eb64ed9bdb236bec16b7509cddb","url":"./tags/右键菜单/index.html"},{"revision":"5d3da41222db11df9c189f8e863ad2e8","url":"./tags/区块链/index.html"},{"revision":"53f704d65853fd6a3f8e2ecffa2a87a1","url":"./tags/加载动画/index.html"},{"revision":"9828af20f330f501d0d2bc3fd43351b2","url":"./tags/加密货币/index.html"},{"revision":"e022dd00c6b05786596a80631720c20f","url":"./tags/加密/index.html"},{"revision":"380025c53b4683c1de9685faa6291aec","url":"./tags/分享/index.html"},{"revision":"2d2eb68c01ed1944079b6d8d16d5735d","url":"./tags/css/index.html"},{"revision":"ab5b6ab91c51d130bea18e3de8c0f4d9","url":"./tags/Vercel/index.html"},{"revision":"92312b9c11123ef8fafd1af0a1197230","url":"./tags/RSA/index.html"},{"revision":"6770710a9d42de8fdf8df6d936d769f3","url":"./tags/P2P/index.html"},{"revision":"b49a95a63b65ad623d0875c2c999029b","url":"./tags/NexT/index.html"},{"revision":"ef1e3bc9508b003ca131c4b882a8e95d","url":"./tags/MetingJS/index.html"},{"revision":"883cd5cb87193a95120f8167293cd327","url":"./tags/JavaScript/index.html"},{"revision":"0c3c0958a24c9f05e5b6ef736644b0a0","url":"./tags/JQuery/index.html"},{"revision":"a002e0d3e7f6c870c3497bebaa4008fa","url":"./tags/HTML/index.html"},{"revision":"8725b0e8e12545a1a07970080327824d","url":"./tags/Gridea/index.html"},{"revision":"4d5fb0750a625201a8f9f6f3830300dc","url":"./tags/GFW/index.html"},{"revision":"19b22a2ebbe02a7904153e90447cf98e","url":"./tags/Flash/index.html"},{"revision":"68557d3089eeaa5122fbbc29d0cc9cd2","url":"./tags/DNS/index.html"},{"revision":"1982d654e35de3b672a118896e1776b3","url":"./tags/CMS/index.html"},{"revision":"d552401924643efa0a7f277b84850a53","url":"./tags/CDN/index.html"},{"revision":"a6c1d909142a9b4b8d81b1ca01c046db","url":"./tags/Bing/index.html"},{"revision":"7a1689ddd61788dd26fc3ea6e918be93","url":"./tags/BUG/index.html"},{"revision":"c3b52f66a334eac35d55a4b71a0b8a03","url":"./tags/Aplayer/index.html"},{"revision":"d52ae609acd659b283a29d7b20d4a4c5","url":"./tags/AI/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"88655123dab0329103bdd150f90e38b9","url":"./post/fa97bd48/index.html"},{"revision":"0bb6b3a17e12773037c68009c183221a","url":"./post/f82f332a/index.html"},{"revision":"a4c265fd9762261bf7018f92a1e7343e","url":"./post/dd83a796/index.html"},{"revision":"718cacfcd7701fb736dfc5c28e875123","url":"./post/db569493/index.html"},{"revision":"0c56bfd2b5311269400cb564c012b5e7","url":"./post/d50c4d0e/index.html"},{"revision":"36ea2e2f3fb25f1a900c22f12f175261","url":"./post/d4550abf/index.html"},{"revision":"cb498ada403370779d0cfe38d514a0e9","url":"./post/b9a3407d/index.html"},{"revision":"6f8b10ca304f68aaaa9312a9553f017a","url":"./post/ae58d2f1/index.html"},{"revision":"d51427e5eefad46e8bd8a66757fa8a09","url":"./post/9c60e209/index.html"},{"revision":"66511bdfea5cecf392899b7ef2333d7d","url":"./post/99c7fa1c/index.html"},{"revision":"abc529635c417e884aef78675dc8db48","url":"./post/8422c4dc/index.html"},{"revision":"64bb22c1e1795e3c2d94a381fbfd723b","url":"./post/8097b5e3/index.html"},{"revision":"fa1d8027e7b7309b5e9c262bddc41b28","url":"./post/7fc77154/index.html"},{"revision":"14e1a50e62dd31e4b807647d78231ebf","url":"./post/7ca5704e/index.html"},{"revision":"1e9b99f682b12f1c08128c003c4dec71","url":"./post/73fccf9a/index.html"},{"revision":"1a8869c8b4c37c72a1798d3a7ce7960e","url":"./post/739f0a30/index.html"},{"revision":"3c828837104062ce4593e67434d8f5d7","url":"./post/4a17b156/index.html"},{"revision":"be03873633443e619e47552c7f34d742","url":"./post/48bc1675/index.html"},{"revision":"5123c94b7bbae2c2e0a022b059c9707e","url":"./post/3df9585/index.html"},{"revision":"503ee5f4e51012201706bdcaf964089c","url":"./post/3082b2c6/index.html"},{"revision":"695e7a7e8d5a58ac620e1100f9a3023e","url":"./post/24dc856c/index.html"},{"revision":"505e8b1a9e40c59e02a8341ffa2f85b0","url":"./post/220b8380/index.html"},{"revision":"a859aa8bdb198bb26eb9b67ca8643821","url":"./post/193912eb/index.html"},{"revision":"6de53899759cc07303da4e75ec338c5f","url":"./page/3/index.html"},{"revision":"00a6cddea92f7863b715b54079594c95","url":"./page/2/index.html"},{"revision":"b0f54ef1572fac019ae7d6fbbbfe93cd","url":"./message/index.html"},{"revision":"d002ead6e3a4e494b12febea7a1c6435","url":"./link/index.html"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"9773b1a2be058f6718344687964d9382","url":"./cookies-instructions/index.html"},{"revision":"69c8cabc19a0e45efb4229b2b68cfc4e","url":"./categories/index.html"},{"revision":"3a92e974a5e52a8b2a53875c39dd1273","url":"./categories/网页源码/index.html"},{"revision":"f4a494d9b98fa52896e69e5cc320820f","url":"./categories/科普/index.html"},{"revision":"ed5169f85685c8f42b3cefedb1518443","url":"./categories/建站/index.html"},{"revision":"7208f6bec2ffd95af7914fe976f286c1","url":"./categories/休闲/index.html"},{"revision":"efb3b6f47ea2f4ec40d0f5774a83a828","url":"./categories/Vercel/index.html"},{"revision":"8dce873d3ab46755ed12ec43acb00fcf","url":"./categories/Gridea/index.html"},{"revision":"415a772ca51de0369ee861c540353c5a","url":"./categories/AI/index.html"},{"revision":"ba4c59951261998bfaddbd1ec0c2afa9","url":"./archives/index.html"},{"revision":"7c942ef9d3d5ed583a9e7664727cc9b7","url":"./archives/page/3/index.html"},{"revision":"a1ce14b8d759eee4e7f62cc3e7d966c9","url":"./archives/page/2/index.html"},{"revision":"17360e9a32edf65a41ead94d8d26dc51","url":"./archives/2025/index.html"},{"revision":"e5e20f8bb17e389f558eea76620ffa9a","url":"./archives/2025/10/index.html"},{"revision":"d255409d5673b79ecbfa0401ac3ec6f3","url":"./archives/2025/09/index.html"},{"revision":"adb1f27ca4c40738b464651f7fcc2248","url":"./archives/2024/index.html"},{"revision":"bf35c2d67d17ccee8e9f13852d4664ac","url":"./archives/2024/09/index.html"},{"revision":"061265626c6ebf94fa696f294486815a","url":"./archives/2024/06/index.html"},{"revision":"10a46492f9b73f8631182f02bbe3bcd7","url":"./archives/2024/05/index.html"},{"revision":"a7734c85380ee68b5bd3bae471ad9801","url":"./archives/2024/04/index.html"},{"revision":"fdd22d40c113a06aecfae49e5d1f70a8","url":"./archives/2023/index.html"},{"revision":"161a619ef17806bd80feaffc497773fb","url":"./archives/2023/04/index.html"},{"revision":"fce12f62d9602795a7825926f5e76a94","url":"./archives/2023/02/index.html"},{"revision":"24c3822a15db8d83cc5d12203a7dc256","url":"./archives/2022/index.html"},{"revision":"e7c24627b86d3ba2868e4ab2fc523ed3","url":"./archives/2022/page/2/index.html"},{"revision":"28f305bd4cd11f4e408569eaaaafb4f2","url":"./archives/2022/12/index.html"},{"revision":"151e8eabc6d332f36d735f28d9eb9cad","url":"./archives/2022/11/index.html"},{"revision":"255e4eceb6b52fdf76c4218e0dbf2bf2","url":"./archives/2022/10/index.html"},{"revision":"3f4f8bb350c9b42b248fd622896e3df4","url":"./archives/2022/08/index.html"},{"revision":"798950608aa221211353e665bb6035d3","url":"./archives/2022/07/index.html"},{"revision":"da34fd63b43d0efa1582a1f99025a814","url":"./archives/2022/06/index.html"},{"revision":"452b1f3a5c1d93405403eeedc2307064","url":"./about/index.html"}]);
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