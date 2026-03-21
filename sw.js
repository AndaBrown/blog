const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"},{"revision":"d7fcac3e63a31032cd3c2d08b71c17ef","url":"./index.html"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"bd93d5144df335a7067779484f203a16","url":"./404.html"},{"revision":"f425931f53c9cae892fe2b85af3ce6aa","url":"./talks/index.html"},{"revision":"e9f2173451f55eb415adfc5f970406de","url":"./tags/index.html"},{"revision":"3a1b2a110a7a03d93b3903c75c555831","url":"./tags/美化/index.html"},{"revision":"66920b03f636b22906ffed9dd7434af9","url":"./tags/网页源码/index.html"},{"revision":"50865b61b2083eb3fd5808d67587df94","url":"./tags/服务器/index.html"},{"revision":"2b29e57a90a6377bd0816494ad89810b","url":"./tags/插件/index.html"},{"revision":"2c0551e86530eca6bf250220f65df4f1","url":"./tags/建站/index.html"},{"revision":"be0294e2c1b0c0ae37b3222819dfdd4b","url":"./tags/密码学/index.html"},{"revision":"4bffe6554334f9743faf1ae95801dda2","url":"./tags/域名/index.html"},{"revision":"df4841e2ca98b94fe6cb97e9d31c281b","url":"./tags/右键菜单/index.html"},{"revision":"bc9cf16bfec629e5d63df4ce493b2e5d","url":"./tags/区块链/index.html"},{"revision":"d9c89ee816f8d69626ff28044775abcf","url":"./tags/加载动画/index.html"},{"revision":"3fabaca0820c5a9a471bad828a340821","url":"./tags/加密货币/index.html"},{"revision":"3145a2ae9aa2668cc3879bee5517594c","url":"./tags/加密/index.html"},{"revision":"d3a507de018c18fa895fadc485db783c","url":"./tags/分享/index.html"},{"revision":"3f7e72ff43654292208799568fb58ce6","url":"./tags/css/index.html"},{"revision":"3535564bbf85883c37fcce1df305f7c1","url":"./tags/Vercel/index.html"},{"revision":"06d4590ab534a073e2f2e0ad4a595c31","url":"./tags/RSA/index.html"},{"revision":"cd029ace8f4e812c5b04f6f2116dd58a","url":"./tags/P2P/index.html"},{"revision":"8e28505b65107c4d4aea71dbdedf8359","url":"./tags/NexT/index.html"},{"revision":"66bd32f57d977a689760bf6060b87832","url":"./tags/MetingJS/index.html"},{"revision":"50ad27ad4f6b4232656f535ab1387cb2","url":"./tags/JavaScript/index.html"},{"revision":"96f735a2186722f002df6635396611e2","url":"./tags/JQuery/index.html"},{"revision":"58525a328d59006700f8ba58b12b643d","url":"./tags/HTML/index.html"},{"revision":"d1a1cc0007770289631219b6a2fdb79e","url":"./tags/Gridea/index.html"},{"revision":"9cc367177318cd684075dc34a608d8c2","url":"./tags/GFW/index.html"},{"revision":"b9a87ccbfcc251a12e5ccc06bcc39fc3","url":"./tags/Flash/index.html"},{"revision":"cf97a45b46b05f3dc8b3e61d69784896","url":"./tags/DNS/index.html"},{"revision":"61ef62607df26f0dec2b9d4deef80721","url":"./tags/CMS/index.html"},{"revision":"a2244962dada9212c6882f23f2a8d12a","url":"./tags/CDN/index.html"},{"revision":"130e426a2c593176e76017dcebf21599","url":"./tags/Bing/index.html"},{"revision":"fa02661f26cc015a00ed91917efc2c7b","url":"./tags/BUG/index.html"},{"revision":"7e6fc905fac6ea6089a4233ab5991e5f","url":"./tags/Aplayer/index.html"},{"revision":"223d0fda14b1d74621cde55bf0b3deda","url":"./tags/AI/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"5c0c876314bd2ee88c91a9ffcc1b26cb","url":"./post/fa97bd48/index.html"},{"revision":"6fc54b79d818186c8b482b5f0c8ab031","url":"./post/f82f332a/index.html"},{"revision":"8071d9bb0d0f57e0a823fbe8deff29f5","url":"./post/dd83a796/index.html"},{"revision":"4f9093e5e27fb96a23358a5fce6a9074","url":"./post/db569493/index.html"},{"revision":"2277a21df551251c0fd7300a5ff81b38","url":"./post/d50c4d0e/index.html"},{"revision":"86b0de75406ea2b1d5846a3a88b69c06","url":"./post/d4550abf/index.html"},{"revision":"2fae6cd816092e0dd68f609e152427a2","url":"./post/b9a3407d/index.html"},{"revision":"3e325599cd0b50f882c87e360b492d1b","url":"./post/ae58d2f1/index.html"},{"revision":"e031edfc4a4c44b21fc787eea1f0e599","url":"./post/9c60e209/index.html"},{"revision":"ffa3965c5571cea79ddaaf7bba89a16a","url":"./post/99c7fa1c/index.html"},{"revision":"8c581e8a475fa8381fa5a2ff48e02b16","url":"./post/8422c4dc/index.html"},{"revision":"3eef04b159f807c3281a925bf9e073de","url":"./post/8097b5e3/index.html"},{"revision":"28323709742b3b826937fd0f9623c227","url":"./post/7fc77154/index.html"},{"revision":"6d05f7a4f89872d807dd667cb93e13bd","url":"./post/7ca5704e/index.html"},{"revision":"dfca6b177a36d32c20cd70e7498fcc25","url":"./post/73fccf9a/index.html"},{"revision":"aa939fa637119fa42d2653b622b2f311","url":"./post/739f0a30/index.html"},{"revision":"518022ba228da09887effd68cd53e495","url":"./post/4a17b156/index.html"},{"revision":"17d489c13073b7b20520666365e51062","url":"./post/48bc1675/index.html"},{"revision":"99ad55349cbc860b85d9250dec615d38","url":"./post/3df9585/index.html"},{"revision":"d27ac396b5af88f933e23c990441ed9e","url":"./post/3082b2c6/index.html"},{"revision":"db479613d65561c5bd2abd2a02fedd01","url":"./post/24dc856c/index.html"},{"revision":"ba4f980b0602e4271b9df180d3fa9c00","url":"./post/220b8380/index.html"},{"revision":"d64a45aea3c72b5b377a94d57e884ddf","url":"./post/193912eb/index.html"},{"revision":"b2379980968249065f474f132641198e","url":"./page/3/index.html"},{"revision":"aa2f31835881df9063ed961271d09d1c","url":"./page/2/index.html"},{"revision":"f6b3354950631108131c6ee61ff63e0e","url":"./message/index.html"},{"revision":"0f634d20ac0b51599d410f2907beb2aa","url":"./link/index.html"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"19dd8cb0be70c13b22c5b764ddead895","url":"./cookies-instructions/index.html"},{"revision":"8706328991ebfda5b0296d453ba466e8","url":"./categories/index.html"},{"revision":"2493c3b42ef0bf6fc39063b9f749d0aa","url":"./categories/网页源码/index.html"},{"revision":"02869ce4e20bbefb1d9e3e8bcc51fc6d","url":"./categories/科普/index.html"},{"revision":"19890a13f1c887089443161e89e397d2","url":"./categories/建站/index.html"},{"revision":"e0dc2517ee3eb5e72d5f1e8370571151","url":"./categories/休闲/index.html"},{"revision":"765a2863f4d646e0ed1fc6e64f9f8a91","url":"./categories/Vercel/index.html"},{"revision":"6770af708b545c956d1fe519e791537c","url":"./categories/Gridea/index.html"},{"revision":"5dccd3d1cf6d68182c95af8a6a413436","url":"./categories/AI/index.html"},{"revision":"f67186a6a43a1d9960e878593ce5314f","url":"./archives/index.html"},{"revision":"24e7a157f82a7d927851de8f37c8baca","url":"./archives/page/3/index.html"},{"revision":"c9f3108e1d6523434972e7bc9cc7e704","url":"./archives/page/2/index.html"},{"revision":"750f059a9094b2ec7c8939f4d1c79b09","url":"./archives/2025/index.html"},{"revision":"f01885d90e0049a69f2aec36a4c00713","url":"./archives/2025/10/index.html"},{"revision":"5fdf3f2a65de2d08bf26303f45212f55","url":"./archives/2025/09/index.html"},{"revision":"cf22ba7eb71fab5297b3fcfa3b7a5464","url":"./archives/2024/index.html"},{"revision":"55cbeb736a806e47ca083bc2eb22a8c8","url":"./archives/2024/09/index.html"},{"revision":"ba634d55362a0447aa552b0cc4d9af47","url":"./archives/2024/06/index.html"},{"revision":"358b4aa97daa7cc6f461e8c789a9a6c1","url":"./archives/2024/05/index.html"},{"revision":"5de1e2f3f6947be3a0f153250776b778","url":"./archives/2024/04/index.html"},{"revision":"ead805a04a5948efcdc22c487844e37a","url":"./archives/2023/index.html"},{"revision":"f332d5366acfbea33bb5d5a7164d3694","url":"./archives/2023/04/index.html"},{"revision":"13da300513d66e58c820158e84aada48","url":"./archives/2023/02/index.html"},{"revision":"814c128cda838469e026ae5f451db318","url":"./archives/2022/index.html"},{"revision":"f78ce1818beb05fddd146f5ef85a8fe2","url":"./archives/2022/page/2/index.html"},{"revision":"80e4198f973d8faf9323f5a8e49b89e9","url":"./archives/2022/12/index.html"},{"revision":"35f045953031c7ef3842ecdef06579fb","url":"./archives/2022/11/index.html"},{"revision":"e09f273ab09079e1ce40faa2d51cd42f","url":"./archives/2022/10/index.html"},{"revision":"6d9fe071649e7653f6873d1b26e4cc49","url":"./archives/2022/08/index.html"},{"revision":"dd868252111e6be6f19f72fd7567a7b8","url":"./archives/2022/07/index.html"},{"revision":"fe3d2610592ed0ae637d53513926e49b","url":"./archives/2022/06/index.html"},{"revision":"8e5deb8193222b5e4add341c7afc22f6","url":"./about/index.html"}]);
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