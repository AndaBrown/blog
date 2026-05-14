const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"},{"revision":"6230b9ee285e04f2ef35f539d9757405","url":"./index.html"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"cca0f0a056ee55999e0140d2e129786e","url":"./404.html"},{"revision":"f2ae66579d934d88da97e3902ab9fd58","url":"./talks/index.html"},{"revision":"839ea42ccda9292afca1bca6d43d3632","url":"./tags/index.html"},{"revision":"1a88da507ae58f477da2384240e84d31","url":"./tags/美化/index.html"},{"revision":"519a4e3181d08083bd2158852d79bdfd","url":"./tags/网页源码/index.html"},{"revision":"2b2caed691dc5b03ba2db13b1631af43","url":"./tags/服务器/index.html"},{"revision":"dc1341169735a5eb1accc3fd1fc7f03e","url":"./tags/插件/index.html"},{"revision":"24020715a65d2f9e068f8e011264b865","url":"./tags/建站/index.html"},{"revision":"add29c28e45a65f5cec2a7afb516650c","url":"./tags/密码学/index.html"},{"revision":"4fffb80799011eef9f391aca7b1af327","url":"./tags/域名/index.html"},{"revision":"8279eeaa09ba3859b55d74ef7cf1c20a","url":"./tags/右键菜单/index.html"},{"revision":"b156656832145ac994c4a233ce006b84","url":"./tags/区块链/index.html"},{"revision":"85f7765d4cb088ac7d3e277a13dacf28","url":"./tags/加载动画/index.html"},{"revision":"173e5a15565088f92e4c44f3c4bc9218","url":"./tags/加密货币/index.html"},{"revision":"8a0131258bc9022963c32b5ecb3207dd","url":"./tags/加密/index.html"},{"revision":"a49e1356f46853a1e2d12415c3450529","url":"./tags/分享/index.html"},{"revision":"73105914662da041db9b46ced04ad3d2","url":"./tags/css/index.html"},{"revision":"d2b5936d4f3bafaf01a80475f1b164dc","url":"./tags/Vercel/index.html"},{"revision":"681278a6fd833103276e9dd21dee3a6b","url":"./tags/RSA/index.html"},{"revision":"6b447324b5fbafa5b0fe05645b75b00a","url":"./tags/P2P/index.html"},{"revision":"138edfc21afe2d65485ee7504b5a6246","url":"./tags/NexT/index.html"},{"revision":"3a1409921574589f0e7e0463ac7b1cda","url":"./tags/MetingJS/index.html"},{"revision":"d1830cd20b905b53f19d3d953d66de2a","url":"./tags/JavaScript/index.html"},{"revision":"7de84bd5a5873480ed0ad17140449d53","url":"./tags/JQuery/index.html"},{"revision":"d8b866c1ddeb046c1b84ac2f41e8dec1","url":"./tags/HTML/index.html"},{"revision":"49258802a8c2937d1a03b0c04f3a4ba3","url":"./tags/Gridea/index.html"},{"revision":"10b4637bcbfd7d8f13d7b86ae8a437f8","url":"./tags/GFW/index.html"},{"revision":"67350dc90f1b1179444bc73c1a7b3fda","url":"./tags/Flash/index.html"},{"revision":"5a5d107e63c05f9451d19820014606d6","url":"./tags/DNS/index.html"},{"revision":"ba8b191e39681408fb03298fb87ba98d","url":"./tags/CMS/index.html"},{"revision":"888b8e7c96409b3ec45194be239f69ff","url":"./tags/CDN/index.html"},{"revision":"c3b4a976aa9acb165fb4288f2c9a66dc","url":"./tags/Bing/index.html"},{"revision":"84b95fc97acdb33156744e63f6fa651b","url":"./tags/BUG/index.html"},{"revision":"1b98c6cfb505f7dad7d83e24609c7a96","url":"./tags/Aplayer/index.html"},{"revision":"f03bdcc723ebb07f84b5f9e0356591ba","url":"./tags/AI/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"0f3deea5ac206394d3bc59d71e5824fd","url":"./post/fa97bd48/index.html"},{"revision":"265bf0edbc697dc4681b99223e2ccb4b","url":"./post/f82f332a/index.html"},{"revision":"aec722642c812f0b9260a08b445c933b","url":"./post/dd83a796/index.html"},{"revision":"634af6e3fbb9ba6a188d3ad2bce01300","url":"./post/db569493/index.html"},{"revision":"5a52f2a951319a594d527766a2f6ed3b","url":"./post/d50c4d0e/index.html"},{"revision":"6e35a56dc444dad4b17e226d36e82080","url":"./post/d4550abf/index.html"},{"revision":"603a02d5fba0d7f195cfc9843afdb7a0","url":"./post/b9a3407d/index.html"},{"revision":"74ac1608205df2e98e0275c598f0aed5","url":"./post/ae58d2f1/index.html"},{"revision":"8c5ed8eb3b22e9bd608b67a7a8e4be34","url":"./post/9c60e209/index.html"},{"revision":"058719f00ddba88b4775a3ee5038a553","url":"./post/99c7fa1c/index.html"},{"revision":"0683fbb3844cb6bcb09d65c233542bf8","url":"./post/8422c4dc/index.html"},{"revision":"41bb5683446a2ef586cb6ecf49b4ee68","url":"./post/8097b5e3/index.html"},{"revision":"1142e35bea62d6e20fd6b077462a58e0","url":"./post/7fc77154/index.html"},{"revision":"95b1b07484bfa3d139b47613b43871d1","url":"./post/7ca5704e/index.html"},{"revision":"e960457810ea6cf988c192bfea0cc30e","url":"./post/73fccf9a/index.html"},{"revision":"d3e91d346022deea59639f90c027c5a6","url":"./post/739f0a30/index.html"},{"revision":"be3be4ef8428871d66451fe18f4798ce","url":"./post/4a17b156/index.html"},{"revision":"2f94d88983aa308617bd271f346316e6","url":"./post/48bc1675/index.html"},{"revision":"28f1a761d62fe78967e55232b1f2c43f","url":"./post/454446b9/index.html"},{"revision":"d7055ca06900fb6ccc7c3f56eaa9d960","url":"./post/3df9585/index.html"},{"revision":"44c26eef05b7bd0b5793b8a2a2786d2e","url":"./post/3082b2c6/index.html"},{"revision":"1a833e29cf71fc8276a830ead983c5ff","url":"./post/24dc856c/index.html"},{"revision":"4f7b1ca2324f68d91990b37274a3ba19","url":"./post/220b8380/index.html"},{"revision":"4912a3c5ee25a75b2fc74abb16fc0be8","url":"./post/193912eb/index.html"},{"revision":"9776bbd3a2df8bac54baef640d900ef2","url":"./page/3/index.html"},{"revision":"f7058606870df9f0f1a03857df426b92","url":"./page/2/index.html"},{"revision":"8c0dd37522b99be9bc2f2ffb836005da","url":"./message/index.html"},{"revision":"0564dc50225a575e5fd05858c9a52ff9","url":"./link/index.html"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"48da3ea1034e4a59715f572794f85dc2","url":"./cookies-instructions/index.html"},{"revision":"50d614f47923caef4d2983da50c29436","url":"./categories/index.html"},{"revision":"dc3dc89ebfdd711dc7f392e8415b0c2c","url":"./categories/记录/index.html"},{"revision":"569d511ec19b8c6dfd9685865732dc85","url":"./categories/网页源码/index.html"},{"revision":"da2c25f3424397633a7021db38e6b138","url":"./categories/科普/index.html"},{"revision":"6800dadcbb577fc48e5f9fc64cd476e7","url":"./categories/建站/index.html"},{"revision":"2da5a43b0567a6f8a9875a9327463e5b","url":"./categories/休闲/index.html"},{"revision":"19d104d965f82f669417bcc6807dc34d","url":"./categories/Vercel/index.html"},{"revision":"4a81506fbae77c955bf796535a28fcbe","url":"./categories/Gridea/index.html"},{"revision":"2d1303d6354e6eae713dd779029daafe","url":"./categories/AI/index.html"},{"revision":"49cdb558d8ee64b7a6bfe4b248a8b983","url":"./archives/index.html"},{"revision":"d2ca300b483a8eafab67049108dd5b52","url":"./archives/page/3/index.html"},{"revision":"95a7131e5008df6df77514d0dca6e1f9","url":"./archives/page/2/index.html"},{"revision":"52331cf237ce1be74fd25241c835230e","url":"./archives/2026/index.html"},{"revision":"a4b6b580194b0d0c1a36cffac39a112f","url":"./archives/2026/04/index.html"},{"revision":"1a9609fe1ab548e639682d5b117acc16","url":"./archives/2025/index.html"},{"revision":"cda83c620cbaa1f62ef9e7df4f9023a7","url":"./archives/2025/10/index.html"},{"revision":"7384663249fb6ea254920f836beede2e","url":"./archives/2025/09/index.html"},{"revision":"f1a2c80f1cce67be1c53de58e4eda7e9","url":"./archives/2024/index.html"},{"revision":"677d6ea3a131ff5ef37fc7a4d5d9757f","url":"./archives/2024/09/index.html"},{"revision":"3b35bfbb1d674563c72658399584c11b","url":"./archives/2024/06/index.html"},{"revision":"19108209c8b2a6e3fe9e912a4940e48b","url":"./archives/2024/05/index.html"},{"revision":"5bf4e4e199c5d04b8613adf28f0d3cd0","url":"./archives/2024/04/index.html"},{"revision":"a4cf7780830e57ed5e85f5b1febe2168","url":"./archives/2023/index.html"},{"revision":"f3382d679055f9adb7ce4805ee89cd3d","url":"./archives/2023/04/index.html"},{"revision":"2e2de42ebad6976c9d823d459ef394f1","url":"./archives/2023/02/index.html"},{"revision":"558526e7f172ea0481fc10d193908c25","url":"./archives/2022/index.html"},{"revision":"ffb76972ca5613be41fc4b8c8a464e98","url":"./archives/2022/page/2/index.html"},{"revision":"a02e81bfb86af04afa9b8fcddadbb564","url":"./archives/2022/12/index.html"},{"revision":"1a79adce224bf68d6c369afc1c2459d0","url":"./archives/2022/11/index.html"},{"revision":"51aaa311736d0dd4fd53f4b9efdba0f7","url":"./archives/2022/10/index.html"},{"revision":"a2c16eb11a3968fe605cb269be4528db","url":"./archives/2022/08/index.html"},{"revision":"cc4fd5c19533820d8d67c7825933236c","url":"./archives/2022/07/index.html"},{"revision":"1a1767dfdd9d65dcb0b76f17a7520dcf","url":"./archives/2022/06/index.html"},{"revision":"c3aa2d3e9d0dcca33e76a115ad0bc56b","url":"./about/index.html"}]);
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