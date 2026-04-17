const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"},{"revision":"a243d88c0e9e47191badc1f51ac037b9","url":"./index.html"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"bd93d5144df335a7067779484f203a16","url":"./404.html"},{"revision":"0de7468015b55c83501dbd3fdb366c7f","url":"./talks/index.html"},{"revision":"304bd88f6059ea6166c19b2eb4ec4568","url":"./tags/index.html"},{"revision":"2e0e6e1e501899869511ae08540e0b7a","url":"./tags/美化/index.html"},{"revision":"a12edfbd5ff8437b9b358a988faf1520","url":"./tags/网页源码/index.html"},{"revision":"bb4d47e117b96b918071baceef38a6cf","url":"./tags/服务器/index.html"},{"revision":"99491916459ac3bf74696d70354afbdf","url":"./tags/插件/index.html"},{"revision":"a3b3ef79befe4c63c63fe1b55ddfd87a","url":"./tags/建站/index.html"},{"revision":"0a85b227f402f3f840621388e673b19b","url":"./tags/密码学/index.html"},{"revision":"85ee969a634cb9bb7f40259c72de48b8","url":"./tags/域名/index.html"},{"revision":"48d2da27fc135971d514ecb134fa0c47","url":"./tags/右键菜单/index.html"},{"revision":"fa2ff914a035b3759413b263d6e69230","url":"./tags/区块链/index.html"},{"revision":"fe24b763d3660752dc04d1f2a669b8ec","url":"./tags/加载动画/index.html"},{"revision":"703af93b89d86d8a97a9d746cc943f56","url":"./tags/加密货币/index.html"},{"revision":"cfd799e1db976b66f6e388085d816bae","url":"./tags/加密/index.html"},{"revision":"ee240c6c524d32a19bc204d6b799076b","url":"./tags/分享/index.html"},{"revision":"bf46ad824bee2ac3695a7eda2d89b14e","url":"./tags/css/index.html"},{"revision":"3a5498e43826b695cbf9f7dba56d49b3","url":"./tags/Vercel/index.html"},{"revision":"d88b0182964dd29e70354597c3c6dddd","url":"./tags/RSA/index.html"},{"revision":"6d5466e0edd8b0e9d87e971dbea14d6c","url":"./tags/P2P/index.html"},{"revision":"65c3f2eb8b810ea3fe2553720006da20","url":"./tags/NexT/index.html"},{"revision":"f7ec2f4658b0af7547dbf731d3ba6a4b","url":"./tags/MetingJS/index.html"},{"revision":"e63acc506f856f20c5b8f201fc21dabb","url":"./tags/JavaScript/index.html"},{"revision":"5fe1a5d406be0bad021830172c2e4cbb","url":"./tags/JQuery/index.html"},{"revision":"541d1be89f8eac28124710ff2ae3f2fd","url":"./tags/HTML/index.html"},{"revision":"2feb32211ff33b935764ac3f0e3d0177","url":"./tags/Gridea/index.html"},{"revision":"d7e9a1d48fbcf7c35a9ae95e4f749975","url":"./tags/GFW/index.html"},{"revision":"39861410507afef37b7039fe762b71a8","url":"./tags/Flash/index.html"},{"revision":"2cb4049e810abcfe7158155782fbae16","url":"./tags/DNS/index.html"},{"revision":"376175acec236fcd7f84c5793975ea99","url":"./tags/CMS/index.html"},{"revision":"ec68fdb3e480c86676e3795aad5d42b7","url":"./tags/CDN/index.html"},{"revision":"65cf58024856e3df6f7c2f48449775c8","url":"./tags/Bing/index.html"},{"revision":"bd81b9686214e3f58d6ae70964eb7469","url":"./tags/BUG/index.html"},{"revision":"4499aa4bde2a70cda41f95aadbe47c40","url":"./tags/Aplayer/index.html"},{"revision":"eff458af7acd144c4b358a285e422730","url":"./tags/AI/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"5c0c876314bd2ee88c91a9ffcc1b26cb","url":"./post/fa97bd48/index.html"},{"revision":"6fc54b79d818186c8b482b5f0c8ab031","url":"./post/f82f332a/index.html"},{"revision":"8071d9bb0d0f57e0a823fbe8deff29f5","url":"./post/dd83a796/index.html"},{"revision":"4f9093e5e27fb96a23358a5fce6a9074","url":"./post/db569493/index.html"},{"revision":"2277a21df551251c0fd7300a5ff81b38","url":"./post/d50c4d0e/index.html"},{"revision":"86b0de75406ea2b1d5846a3a88b69c06","url":"./post/d4550abf/index.html"},{"revision":"2fae6cd816092e0dd68f609e152427a2","url":"./post/b9a3407d/index.html"},{"revision":"3e325599cd0b50f882c87e360b492d1b","url":"./post/ae58d2f1/index.html"},{"revision":"e031edfc4a4c44b21fc787eea1f0e599","url":"./post/9c60e209/index.html"},{"revision":"ffa3965c5571cea79ddaaf7bba89a16a","url":"./post/99c7fa1c/index.html"},{"revision":"8c581e8a475fa8381fa5a2ff48e02b16","url":"./post/8422c4dc/index.html"},{"revision":"3eef04b159f807c3281a925bf9e073de","url":"./post/8097b5e3/index.html"},{"revision":"28323709742b3b826937fd0f9623c227","url":"./post/7fc77154/index.html"},{"revision":"6d05f7a4f89872d807dd667cb93e13bd","url":"./post/7ca5704e/index.html"},{"revision":"dfca6b177a36d32c20cd70e7498fcc25","url":"./post/73fccf9a/index.html"},{"revision":"aa939fa637119fa42d2653b622b2f311","url":"./post/739f0a30/index.html"},{"revision":"518022ba228da09887effd68cd53e495","url":"./post/4a17b156/index.html"},{"revision":"17d489c13073b7b20520666365e51062","url":"./post/48bc1675/index.html"},{"revision":"99ad55349cbc860b85d9250dec615d38","url":"./post/3df9585/index.html"},{"revision":"d27ac396b5af88f933e23c990441ed9e","url":"./post/3082b2c6/index.html"},{"revision":"db479613d65561c5bd2abd2a02fedd01","url":"./post/24dc856c/index.html"},{"revision":"ba4f980b0602e4271b9df180d3fa9c00","url":"./post/220b8380/index.html"},{"revision":"d64a45aea3c72b5b377a94d57e884ddf","url":"./post/193912eb/index.html"},{"revision":"12f6739df69252dacb856937d7a1c02e","url":"./page/3/index.html"},{"revision":"3c3c1ffdad64b5202467944daa686579","url":"./page/2/index.html"},{"revision":"0107ffda4ec49da0e0fed1ff280e1722","url":"./message/index.html"},{"revision":"79b99f001d2deb074f89f9e06dcee870","url":"./link/index.html"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"d1b130ca5c7c9c967de59f6a1c9d3219","url":"./cookies-instructions/index.html"},{"revision":"2dafef953a991ab80324a23965dc8704","url":"./categories/index.html"},{"revision":"9d52a2316e964b8d2b351e4445b8a0e8","url":"./categories/网页源码/index.html"},{"revision":"332c28c07f8cf7e6ec2a0a47463e0c06","url":"./categories/科普/index.html"},{"revision":"34eedab13676da8f2b11fdce3c776d22","url":"./categories/建站/index.html"},{"revision":"4cc4a96f0cfc5b9409f8c9c44bbe032d","url":"./categories/休闲/index.html"},{"revision":"f588a0c4be969bccb6bf2580d3534370","url":"./categories/Vercel/index.html"},{"revision":"d3e9745e4e4816dde780ee807ce32a7d","url":"./categories/Gridea/index.html"},{"revision":"c61918de0fb428aeb2807f6a23dea298","url":"./categories/AI/index.html"},{"revision":"ff5aaad012bf643d6f27bf0011389bb0","url":"./archives/index.html"},{"revision":"0027fee880cc51761854efbdb50d44a3","url":"./archives/page/3/index.html"},{"revision":"3272a1b5531ebcb899d0fd2877eeee3a","url":"./archives/page/2/index.html"},{"revision":"870d4326eb4c12a915d4c5875377a18e","url":"./archives/2025/index.html"},{"revision":"3b53ea03db20024ecfd0a9869dee130e","url":"./archives/2025/10/index.html"},{"revision":"c64ec1da3e948130fb14713915360d8f","url":"./archives/2025/09/index.html"},{"revision":"89974a2b49c34c899f081f3fc6802177","url":"./archives/2024/index.html"},{"revision":"da21585bb93b56fa23274d8b486724f0","url":"./archives/2024/09/index.html"},{"revision":"93e36df720060dd1085acfdf8b826649","url":"./archives/2024/06/index.html"},{"revision":"1daa943c87c32328379268059a5968da","url":"./archives/2024/05/index.html"},{"revision":"794c390822b52ee803025bc6641d428c","url":"./archives/2024/04/index.html"},{"revision":"272bbb7eb3fd1ca5d8d61a1ff18a9b27","url":"./archives/2023/index.html"},{"revision":"fb48f6317a46b93f7dbb499cbaf8aad1","url":"./archives/2023/04/index.html"},{"revision":"13b3514df162b54d3a8d6188c6942186","url":"./archives/2023/02/index.html"},{"revision":"860f085fa8ee0dbcd7b2f7bcfa96d4b3","url":"./archives/2022/index.html"},{"revision":"941f44c36bebaaa0da419a6f4e8dcd79","url":"./archives/2022/page/2/index.html"},{"revision":"17178b9dfcc20c576c7b8a600b3eb459","url":"./archives/2022/12/index.html"},{"revision":"e94530199b7f4a4198548af7f4d3b527","url":"./archives/2022/11/index.html"},{"revision":"ca9b7ace21d7c538c3fad5d03a96b29e","url":"./archives/2022/10/index.html"},{"revision":"8ecf1b478711fd9e6254d23dc93833de","url":"./archives/2022/08/index.html"},{"revision":"e566dafea6cebe933a1cf290d20a58fa","url":"./archives/2022/07/index.html"},{"revision":"78dd3f5161564a374eac61363253d55b","url":"./archives/2022/06/index.html"},{"revision":"5d8157ad4f1aa3978ea74eed33a74216","url":"./about/index.html"}]);
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