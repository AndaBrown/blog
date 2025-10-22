const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"9c6f0a56ab2042b8267ab91922a89abe","url":"./404.html"},{"revision":"1c988b48da68d17684d60eebe27b785c","url":"./about/index.html"},{"revision":"830516dbec406d3a860245048d736fa3","url":"./archives/2022/06/index.html"},{"revision":"733219d7aad73252b7c1ee0eb213c6f4","url":"./archives/2022/07/index.html"},{"revision":"de1f47db2125ba8ad7ca330d96106114","url":"./archives/2022/08/index.html"},{"revision":"4c8ca0b087bc07debdcb822298bcce7d","url":"./archives/2022/10/index.html"},{"revision":"f650f250b6f7318b86a48d12c46b6bd6","url":"./archives/2022/11/index.html"},{"revision":"964fff90460540cdf3dc2a83d6175f6c","url":"./archives/2022/12/index.html"},{"revision":"614c7dca124949de19d386b10c0cd251","url":"./archives/2022/index.html"},{"revision":"d65a0aa078e359804ab02b72d136612f","url":"./archives/2022/page/2/index.html"},{"revision":"632ebfcb288c65c5ec9de86774b9eabe","url":"./archives/2023/02/index.html"},{"revision":"6fe700c5c6fa1db6d2417af86d884e57","url":"./archives/2023/04/index.html"},{"revision":"7d563fe7f02786a6a689453af8fa469a","url":"./archives/2023/index.html"},{"revision":"524be226533117579be3b14ca63ec1b9","url":"./archives/2024/04/index.html"},{"revision":"6f1070faaf21edaacec762ae765887e2","url":"./archives/2024/05/index.html"},{"revision":"684fcdf8449faf4d7679f22670814172","url":"./archives/2024/06/index.html"},{"revision":"7c86ad1d63533087932dab880796a835","url":"./archives/2024/09/index.html"},{"revision":"cb1638336f2521ca3d70a0c387f06ec4","url":"./archives/2024/index.html"},{"revision":"f04b33542b1b88d332fdd9057d09c06c","url":"./archives/2025/09/index.html"},{"revision":"15dc79a076e49513d24682f974a3b937","url":"./archives/2025/10/index.html"},{"revision":"36dc8c29036d936ec1ac5987ebbc4397","url":"./archives/2025/index.html"},{"revision":"2edca020d00f8d363b1ba2d8f9a74eb5","url":"./archives/index.html"},{"revision":"515bb7eda2761185d59ffeee6178fad4","url":"./archives/page/2/index.html"},{"revision":"0cd3e2a4fb3c3a3cb15d2a7554c451b0","url":"./archives/page/3/index.html"},{"revision":"59d279af01a79de67abf76fb258ec507","url":"./categories/AI/index.html"},{"revision":"d0ab2dfdb13eb49e6b0c8666932fe540","url":"./categories/Gridea/index.html"},{"revision":"d17891c356ddaa9beb19f4f14020c124","url":"./categories/index.html"},{"revision":"2d6d3130201d5123db00b4004f1cc505","url":"./categories/Vercel/index.html"},{"revision":"828f2642c1729847d4c05406b33c2c03","url":"./categories/休闲/index.html"},{"revision":"2f103910a489d27974f1e01011f39e81","url":"./categories/建站/index.html"},{"revision":"be3d5d4f3fa551b783fedec4be50b8db","url":"./categories/科普/index.html"},{"revision":"c7d17b63c2eefd21de93744d932878c9","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"5ed9287ba0abb95c82ce4b9f0be92e34","url":"./cookies-instructions/index.html"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"8c7b596b32b1acb60cc4d211316377ff","url":"./index.html"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"0f47b3d5fd3629bf6576c2e6c952c7bc","url":"./link/index.html"},{"revision":"e41d12e6d161e5f3b0913a29284ffa98","url":"./message/index.html"},{"revision":"34c91b080033490cae50f8cbe5463f9e","url":"./page/2/index.html"},{"revision":"9633cff4957d11610d7cd92ad782b24a","url":"./page/3/index.html"},{"revision":"bf27a78ae615a1828cfd269f8b10a020","url":"./post/193912eb/index.html"},{"revision":"f04e0cd16804c3bd68446c0789973dd2","url":"./post/220b8380/index.html"},{"revision":"19b60d0b2afb8f1dc996ebf739b4e1e8","url":"./post/24dc856c/index.html"},{"revision":"eeb1a6ae75277e027284cc9d6e33eca3","url":"./post/3082b2c6/index.html"},{"revision":"af97155b566e0b9b3d102af522c76a4e","url":"./post/3df9585/index.html"},{"revision":"1bd65db18db8632dfce811628e049e07","url":"./post/48bc1675/index.html"},{"revision":"2004c257ddeb20b11c1b957ee6267985","url":"./post/4a17b156/index.html"},{"revision":"a59545ff1a8c46bd05db42352bc2087f","url":"./post/739f0a30/index.html"},{"revision":"51cd9c872389badbb125ce1ff9cd541b","url":"./post/73fccf9a/index.html"},{"revision":"1916b0e990e1228583a3799ab52a6f1e","url":"./post/7ca5704e/index.html"},{"revision":"f1e7069b19730e35547623e9d7d64fdb","url":"./post/7fc77154/index.html"},{"revision":"6420a8df82dcb4efb19e829218689309","url":"./post/8097b5e3/index.html"},{"revision":"1b6aa549efeda850b319adb5af8bd319","url":"./post/8422c4dc/index.html"},{"revision":"ac565b8bb6512f6b3befd5a9fdd6ce28","url":"./post/99c7fa1c/index.html"},{"revision":"1fc2016cda7536e8a090211d5b25652f","url":"./post/9c60e209/index.html"},{"revision":"40dace1fbea605a62691cbf60c7cc99c","url":"./post/ae58d2f1/index.html"},{"revision":"84de2c875bc289da59b49d655d1d3595","url":"./post/b9a3407d/index.html"},{"revision":"be0d2c65e68c457509b2047cba350605","url":"./post/d4550abf/index.html"},{"revision":"09490903c31206e5d31204c988299cbb","url":"./post/d50c4d0e/index.html"},{"revision":"5931964c4285436fbf71dd932d349e12","url":"./post/db569493/index.html"},{"revision":"bba6630afc543bef5deb501be6a28c55","url":"./post/dd83a796/index.html"},{"revision":"ba927addf319c68cd30ec84956f2222c","url":"./post/f82f332a/index.html"},{"revision":"30a421593eb500a511c1e9a32c7954a6","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"5bdcd1aad80cf4fc0ec4f41b7d3002b2","url":"./tags/AI/index.html"},{"revision":"083522a58fe88301039bc2f556db8d61","url":"./tags/Aplayer/index.html"},{"revision":"31b80c6d7beef03ad431f2181ea2e46f","url":"./tags/Bing/index.html"},{"revision":"bd3c47d80701da366ae2732c8386cbb0","url":"./tags/BUG/index.html"},{"revision":"9bfeac16ef420e5698498da20287df81","url":"./tags/CDN/index.html"},{"revision":"a9fb28f3d0119e68554d176ed51158d5","url":"./tags/CMS/index.html"},{"revision":"86eefe9b617d6e0bfa608c3ccd0e952f","url":"./tags/css/index.html"},{"revision":"e366027d4eb541c7c7a24b1888ed5467","url":"./tags/DNS/index.html"},{"revision":"34e3d391f9143bc4a70f525169064ab0","url":"./tags/Flash/index.html"},{"revision":"ceef79176ef5490c49403f1d3c938336","url":"./tags/GFW/index.html"},{"revision":"72e6125bdfa981ef83af395f07ddef09","url":"./tags/Gridea/index.html"},{"revision":"e81f334f6a257d902e16c804e6f04d99","url":"./tags/HTML/index.html"},{"revision":"e19d85a534d4fcf57af5c212fbfacce4","url":"./tags/index.html"},{"revision":"97c4206d63e047de2ad3b735628fc8ef","url":"./tags/JavaScript/index.html"},{"revision":"9b91d3e5c4bb0fb2e7433c606baf12dc","url":"./tags/JQuery/index.html"},{"revision":"26bd0606417152a9c9ed8e428db0406d","url":"./tags/MetingJS/index.html"},{"revision":"9f1808ebb9df6cb982ec9bdabd54e2df","url":"./tags/NexT/index.html"},{"revision":"11e85440208cfc9daf1f77206fe26263","url":"./tags/P2P/index.html"},{"revision":"882f3ea06f06d17d3393f40217a7a4c9","url":"./tags/RSA/index.html"},{"revision":"facc1905f2079d018855a45224c4d1a0","url":"./tags/Vercel/index.html"},{"revision":"7c9f1dc93833c41e9e24e58e22ad595c","url":"./tags/分享/index.html"},{"revision":"3a3315c8a62be538647ace291d464038","url":"./tags/加密/index.html"},{"revision":"4b15b3f22b722ee1648872a75df87db3","url":"./tags/加密货币/index.html"},{"revision":"e014797c78cb7b01419b4495c4215d8e","url":"./tags/加载动画/index.html"},{"revision":"844bac8aa9a16c52d9ef47e725cead19","url":"./tags/区块链/index.html"},{"revision":"dc4b44da045654173beb44a05c0379da","url":"./tags/右键菜单/index.html"},{"revision":"8cf85248e732769b31d57add8dd43128","url":"./tags/域名/index.html"},{"revision":"5aca25783e7bcb0bacf56955ae66654f","url":"./tags/密码学/index.html"},{"revision":"ec2d03793365f9cd9d2973f74e8c7f84","url":"./tags/建站/index.html"},{"revision":"2c363aa3021402a4628c5e534260f55e","url":"./tags/插件/index.html"},{"revision":"b8b4f30296109a397ba0bf946f78cc96","url":"./tags/服务器/index.html"},{"revision":"9df81a74821e30f019928d1a3ca0ac40","url":"./tags/网页源码/index.html"},{"revision":"2fa73b4e469d6dfb3643a2a822d15360","url":"./tags/美化/index.html"},{"revision":"b47fe1781f033fb66e484b2e1bd40e8c","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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