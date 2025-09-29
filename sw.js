const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"8828c67dc433518a2478473be6430a82","url":"./404.html"},{"revision":"0aa5f17b45854f0e9d00b3cf0a17f274","url":"./about/index.html"},{"revision":"c0f73ce5dd154d1d6f52e2b521f76cf6","url":"./archives/2022/06/index.html"},{"revision":"12d5fd23e6100d45e9d4a00e118db313","url":"./archives/2022/07/index.html"},{"revision":"ce92c63ed610160eb52225fcaecf8315","url":"./archives/2022/08/index.html"},{"revision":"e29a430222d5c4f9f7219b35ffe84911","url":"./archives/2022/10/index.html"},{"revision":"dd434b3cc2718c7116eff1b0b4024a40","url":"./archives/2022/11/index.html"},{"revision":"639dca38b99192feae662edfc917bf81","url":"./archives/2022/12/index.html"},{"revision":"8f21734beb20ee38170b46f130d4d683","url":"./archives/2022/index.html"},{"revision":"9922a64ad5a5e77a96814e5d6ed31db2","url":"./archives/2022/page/2/index.html"},{"revision":"5d42ada02ab0d8c08a0e1f959af59f6f","url":"./archives/2023/02/index.html"},{"revision":"48f891e7aa61f6dc90f8fb35e8779731","url":"./archives/2023/04/index.html"},{"revision":"69a55ffed0d908397b8e6f533d6c3786","url":"./archives/2023/index.html"},{"revision":"eb5e175166dc000790aa2922a3b8f505","url":"./archives/2024/04/index.html"},{"revision":"de8af226998212c60b7f1efaf0da5e71","url":"./archives/2024/05/index.html"},{"revision":"6dd45817490a2a2f9556f137619c5947","url":"./archives/2024/06/index.html"},{"revision":"1773475ebffbd20691f0dcbe0d52c4a7","url":"./archives/2024/09/index.html"},{"revision":"b6da55ed0eea6e3755c53748ef3893e3","url":"./archives/2024/index.html"},{"revision":"84d35c21dbd8ed28b55297780ce3b232","url":"./archives/2025/09/index.html"},{"revision":"7169715c169af9337d135cb1076b96aa","url":"./archives/2025/index.html"},{"revision":"136a0fb1097c904e230b3c99cd217deb","url":"./archives/index.html"},{"revision":"018aa16a84c0d93fff741b00717fd23d","url":"./archives/page/2/index.html"},{"revision":"4187a62cd3091f282d9a10ff4f281423","url":"./archives/page/3/index.html"},{"revision":"e199d31d0a3e9d4a7c971f7f78f21ce6","url":"./categories/AI/index.html"},{"revision":"3c99bef480212e0f6c575f74c0bde6f5","url":"./categories/Gridea/index.html"},{"revision":"08d9c78250c5e262a0a8b0e7842d1497","url":"./categories/index.html"},{"revision":"42a48a7d45012b772c3a7c25d0274c30","url":"./categories/Vercel/index.html"},{"revision":"7f69446225605fa537e0265d4540290c","url":"./categories/休闲/index.html"},{"revision":"6a9779bdd0f36d65909dd60d68d96b47","url":"./categories/建站/index.html"},{"revision":"28db7c48fe515a7d7046a90740b24bac","url":"./categories/科普/index.html"},{"revision":"1e1be059b473226ec413f32e1fdfd466","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"178299977d6e24e6e4da996a6b0ec4aa","url":"./cookies-instructions/index.html"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"155c12ae19d4d3dbdef879cdf1c273aa","url":"./index.html"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"40108cdfd4cc042894153cb6456c1308","url":"./link/index.html"},{"revision":"04251d4c18699aaac44fd79f538e56d2","url":"./message/index.html"},{"revision":"de7b36d098eb0bb2e3b0f11f6fc62554","url":"./page/2/index.html"},{"revision":"ff469822054cacad1bfb05a122904d60","url":"./page/3/index.html"},{"revision":"011291494be1c864883d4f7c227a542e","url":"./post/193912eb/index.html"},{"revision":"bad569a6d59004aeb75728a9492f28c1","url":"./post/220b8380/index.html"},{"revision":"42b0f702097cedd96adc50c1f6c2e4f5","url":"./post/24dc856c/index.html"},{"revision":"8190fd08d24496db500886a3d748c019","url":"./post/3082b2c6/index.html"},{"revision":"48fb310af92df487a0b1364b2c62d88b","url":"./post/3df9585/index.html"},{"revision":"07304cc4bafb978a24cd1e5c62710f82","url":"./post/4a17b156/index.html"},{"revision":"935f96c31e36e043c8925fc10893062c","url":"./post/739f0a30/index.html"},{"revision":"53529ac99c04f9d73cf47d0b58d165a9","url":"./post/73fccf9a/index.html"},{"revision":"6f896da51819fdb02042bfe3f520a0a9","url":"./post/7ca5704e/index.html"},{"revision":"760f83055689b13ba6bad72cab4bfd2b","url":"./post/7fc77154/index.html"},{"revision":"89888df6f75329dce1cd20658ab654f6","url":"./post/8097b5e3/index.html"},{"revision":"0ec55303942047267e2a95d8fa991e18","url":"./post/8422c4dc/index.html"},{"revision":"0f6ec7141f7ab37e5d34f972dd16d50e","url":"./post/99c7fa1c/index.html"},{"revision":"a0d71e826bdf13385411e21416c0aa3f","url":"./post/9c60e209/index.html"},{"revision":"b8465666d2139fe39af822a92deb5019","url":"./post/ae58d2f1/index.html"},{"revision":"26e4d969411ac48e3d9a627b14d62f4f","url":"./post/b9a3407d/index.html"},{"revision":"1b05130dc119fad1da17f88c471a9092","url":"./post/d4550abf/index.html"},{"revision":"6e609f6fdeff42ecc760bdda038ba85c","url":"./post/d50c4d0e/index.html"},{"revision":"574226ad9f571d9d8ddce661bc1a9547","url":"./post/db569493/index.html"},{"revision":"1f6d03be117a56154dfad83ab5bef30e","url":"./post/dd83a796/index.html"},{"revision":"082a0e7296920a6f0b205b7a3420fbca","url":"./post/f82f332a/index.html"},{"revision":"3a3ea4305f8fb3de47ab7a052bed779f","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"415032549a28ab419c5de32ce80170ff","url":"./tags/AI/index.html"},{"revision":"0a639f72209470f8a3c65610831caa08","url":"./tags/Aplayer/index.html"},{"revision":"98b74d56e7c848d21e2d5a788f229f0b","url":"./tags/Bing/index.html"},{"revision":"450111173cef35168704c59ad656d5f2","url":"./tags/BUG/index.html"},{"revision":"3fa13e348af69c5c34a8cc0c930e0ec7","url":"./tags/CDN/index.html"},{"revision":"80c79a4c41bb575b85a71fc417c5bf21","url":"./tags/CMS/index.html"},{"revision":"204b062ed2146bca4cd5b38be0fd738e","url":"./tags/css/index.html"},{"revision":"629d6fcf9cca6bc955ae1e13e551b739","url":"./tags/DNS/index.html"},{"revision":"43eb83462cd7359ddab86e76d4f3ce9e","url":"./tags/Flash/index.html"},{"revision":"e946e00bc2902ec3b80adc336719f5d0","url":"./tags/GFW/index.html"},{"revision":"205eabfee08d7a745a3baa982ddb2395","url":"./tags/Gridea/index.html"},{"revision":"67016174acc7fc355fff58f5c8555a07","url":"./tags/HTML/index.html"},{"revision":"482e18d5e0885cb48c48c4a41b290aee","url":"./tags/index.html"},{"revision":"4a1fd3e5b6b581d36c326e8028c0bf5f","url":"./tags/JavaScript/index.html"},{"revision":"6768bc066e795b1c6234c4178120f33d","url":"./tags/JQuery/index.html"},{"revision":"90e55540a616348a8bec6f0765036896","url":"./tags/MetingJS/index.html"},{"revision":"67d84c94e230f4866872216fb1e73bbd","url":"./tags/NexT/index.html"},{"revision":"d6337ea815fb37f769dd752da06e8319","url":"./tags/P2P/index.html"},{"revision":"2773a5bd6f9247a9849a5bcd54db618e","url":"./tags/RSA/index.html"},{"revision":"9d5972abe0f5d85c13037708b6ce43e2","url":"./tags/Vercel/index.html"},{"revision":"7b73f35f12cba54ab7b89994834b18a6","url":"./tags/分享/index.html"},{"revision":"ec1f89e32e2b049831bfd2e1f2b86206","url":"./tags/加密/index.html"},{"revision":"228432afdf984b50c06a7129dcac8506","url":"./tags/加密货币/index.html"},{"revision":"61169c33c8eea929f7b308211fd143d9","url":"./tags/加载动画/index.html"},{"revision":"5b097438e7c354ed9529d254cb1ac9f8","url":"./tags/区块链/index.html"},{"revision":"3a93cf31a5752b99e42b2e37a5d09ea6","url":"./tags/右键菜单/index.html"},{"revision":"ad33bd0799958dea9b273e14ded8b41f","url":"./tags/域名/index.html"},{"revision":"ed6376a6258b20762a0e28d4ccc20325","url":"./tags/密码学/index.html"},{"revision":"2bca4fa823f88f9e68c2ecd06afaa592","url":"./tags/建站/index.html"},{"revision":"6cc6ebfd747f059904d902795d233d33","url":"./tags/插件/index.html"},{"revision":"ac362c2569ede390c10a9fe9c7a12275","url":"./tags/服务器/index.html"},{"revision":"199500b75df0390420c23ba21878172b","url":"./tags/网页源码/index.html"},{"revision":"5c1d67cd0327c5c7d5e7110c2fbe6809","url":"./tags/美化/index.html"},{"revision":"93d7a065b68d712e7461b00083146079","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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