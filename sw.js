const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"70b2ec5da76de5eb8c39c9716303382f","url":"./404.html"},{"revision":"8f4a79e4464f6bdd3ff421b4427b2b51","url":"./about/index.html"},{"revision":"58b54e4cb1f55855aba2b7c7a220d285","url":"./archives/2022/06/index.html"},{"revision":"7dd1d83a0fd2a90b4103bf00ec6b5166","url":"./archives/2022/07/index.html"},{"revision":"3f2f0f76b7d8fd7039d19f84fd0394ac","url":"./archives/2022/08/index.html"},{"revision":"2c5f81546797b360b44c3d4d98121874","url":"./archives/2022/10/index.html"},{"revision":"e25bd2359e03c09daf81d22f10343eec","url":"./archives/2022/11/index.html"},{"revision":"21e1e79921ac5904f5280106397a66fd","url":"./archives/2022/12/index.html"},{"revision":"0142de951efa68ffc991ee69a24ebbea","url":"./archives/2022/index.html"},{"revision":"e8f3dcc1c2aa69ff24ce67a066f31ebd","url":"./archives/2022/page/2/index.html"},{"revision":"d4f52c594d76ff620cf05b41bba0d464","url":"./archives/2023/02/index.html"},{"revision":"232a4dabf053f941307b2e303c9eda95","url":"./archives/2023/04/index.html"},{"revision":"73d7ba7315bf505418c529390f8472d5","url":"./archives/2023/index.html"},{"revision":"0013c3397ea2a31f395facb3b867306b","url":"./archives/2024/04/index.html"},{"revision":"89c62129c6e054f613a1be6ea1cf9e94","url":"./archives/2024/05/index.html"},{"revision":"7891831bdf8956ab8661cb6ad048752c","url":"./archives/2024/06/index.html"},{"revision":"08144c835ed21ba8afe3e08373bb76a8","url":"./archives/2024/09/index.html"},{"revision":"51961342ed5e6746fd3c038932e95a2b","url":"./archives/2024/index.html"},{"revision":"f4bc54b267a29620bbfe580e4ea5446b","url":"./archives/index.html"},{"revision":"a537b1ab85a88aad8b9f54e9ecc3be70","url":"./archives/page/2/index.html"},{"revision":"3fd6b10846f00ba573d20b6fdadf668f","url":"./archives/page/3/index.html"},{"revision":"9b48eadbac8fc2c8e41f7bbfd7d32291","url":"./categories/AI/index.html"},{"revision":"197f21426f2f0a5edfb38c57b60f3709","url":"./categories/Gridea/index.html"},{"revision":"0e5619203260dd18cfd9eef58f23d2ac","url":"./categories/index.html"},{"revision":"edd000be2a48cf3b9ce3421645b20c69","url":"./categories/Vercel/index.html"},{"revision":"85332e3664b4d8391a023fb1c8a11f51","url":"./categories/休闲/index.html"},{"revision":"e17dc994f492cb558c30fdff62afe03c","url":"./categories/建站/index.html"},{"revision":"3b725ce37b23721f963bf9096dae30a4","url":"./categories/科普/index.html"},{"revision":"5e0961f3c771d468608868200257088c","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"fee5aed853ddc7381ba0e2e29f80a07f","url":"./cookies-instructions/index.html"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"deee39b35827821f9f466b03b849b533","url":"./index.html"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"38c5688595451a52f4f41a6f6d246c3f","url":"./link/index.html"},{"revision":"dd474761ef7ea48d73ca69ef20783c4d","url":"./message/index.html"},{"revision":"c2e61f14ee8a047c381c1ca5f9fd2950","url":"./page/2/index.html"},{"revision":"aebd9b2908ad25aa0ff7b5be4f2e7c6d","url":"./page/3/index.html"},{"revision":"5381eaa4e73e48e3ef25db3e97ae5a26","url":"./post/193912eb/index.html"},{"revision":"23170ad327c36281654977605459ebd5","url":"./post/220b8380/index.html"},{"revision":"7a1f5e8bd7ad3ba3024b90293d9e3368","url":"./post/24dc856c/index.html"},{"revision":"34e2eb88522dca5b8e532a843f8b30c2","url":"./post/3082b2c6/index.html"},{"revision":"07ee2bff50925b8ae07d4acd7a056de7","url":"./post/3df9585/index.html"},{"revision":"51b57e57bda696bc0d80d5bf601d9584","url":"./post/4a17b156/index.html"},{"revision":"6c9c19d8f4f2d0376d4de1a429d92217","url":"./post/739f0a30/index.html"},{"revision":"4b91a4150412c0d585de3bd6f5de8d01","url":"./post/73fccf9a/index.html"},{"revision":"c88e4d00718d9d0a518d33f22264b35d","url":"./post/7ca5704e/index.html"},{"revision":"9f1ee516dd575dab4739e82a4a639ca1","url":"./post/7fc77154/index.html"},{"revision":"79e22143c7431abdd9d7c304f4151021","url":"./post/8097b5e3/index.html"},{"revision":"5e09fbcd57e4f6d9fd3985c6f1257644","url":"./post/8422c4dc/index.html"},{"revision":"8175bbc89fedd52466801b2219c73240","url":"./post/99c7fa1c/index.html"},{"revision":"5707bb731d076b7cc3a1aec30866feac","url":"./post/9c60e209/index.html"},{"revision":"a31013bee1173ebcc59a396d390e4300","url":"./post/ae58d2f1/index.html"},{"revision":"765d2fbc01ea168f87d75e7eace76805","url":"./post/d4550abf/index.html"},{"revision":"b73d02af24aa5c341086542a055e4355","url":"./post/d50c4d0e/index.html"},{"revision":"55cee205469982e3c88f9d50d59dc62a","url":"./post/db569493/index.html"},{"revision":"a383c550d40ce0a9ce6b914a39ae3824","url":"./post/dd83a796/index.html"},{"revision":"d10a050ad6ca7fa74d1de5288f2e07da","url":"./post/f82f332a/index.html"},{"revision":"573214246947f794204ff1d8db1fe3a3","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"4727dca2d936f721e094f950941ecddf","url":"./tags/AI/index.html"},{"revision":"7e4b7c165a55bf1428a7992a698ca8f1","url":"./tags/Aplayer/index.html"},{"revision":"e2b34a5aaaa2e83cc603bfae5e671e35","url":"./tags/Bing/index.html"},{"revision":"7ff6e6e2a79296d404225222b513705b","url":"./tags/BUG/index.html"},{"revision":"057c7d9082bb5c549ee8aaf8d510be88","url":"./tags/CDN/index.html"},{"revision":"b7b7713ce00ed3266d5d812ff054b7e1","url":"./tags/CMS/index.html"},{"revision":"26c580115021824e0068d4255d1566ee","url":"./tags/css/index.html"},{"revision":"d012f78439eed3f2b5e4612740d02e23","url":"./tags/DNS/index.html"},{"revision":"76efae04fd089a368b8ea57720beda5d","url":"./tags/Flash/index.html"},{"revision":"e5eb78a7c9ccd3ee0ffa658c0a802a68","url":"./tags/GFW/index.html"},{"revision":"3c0a2defbe62e2378f67c347c954c3bd","url":"./tags/Gridea/index.html"},{"revision":"c5c0a120b5d0a6df9577e8597c4233e3","url":"./tags/HTML/index.html"},{"revision":"4cee870603f45f7c1b844a7e4de259c7","url":"./tags/index.html"},{"revision":"811ec047bc1cf24f59d436d01801942a","url":"./tags/JavaScript/index.html"},{"revision":"3f414089a875a51ebf88bd1265e64a94","url":"./tags/JQuery/index.html"},{"revision":"fc93ced98d7882691f3ae41cbdf69f6e","url":"./tags/MetingJS/index.html"},{"revision":"7ecceae41a89dcf3da9d0bc9612c42ba","url":"./tags/NexT/index.html"},{"revision":"f72e1dd436d22d922e74eabefc4e3345","url":"./tags/P2P/index.html"},{"revision":"aeb13010d5c3ae0229e3ce6a5376ed02","url":"./tags/RSA/index.html"},{"revision":"62c5d98c3407b751613ff202dcb140b8","url":"./tags/Vercel/index.html"},{"revision":"a7e9eddc4dc994f54f32b7916f0772e3","url":"./tags/分享/index.html"},{"revision":"a0d93987dfcb98770fa401ddd2b37159","url":"./tags/加密/index.html"},{"revision":"20637a85f64e829bba975cee2cdfe447","url":"./tags/加载动画/index.html"},{"revision":"3b3c4b412358871bb88766d8e370a330","url":"./tags/右键菜单/index.html"},{"revision":"f2bdf7eba4229269ba9a11103b6a92b5","url":"./tags/域名/index.html"},{"revision":"4fcdb98fac0dd1058764e2272b12d4c4","url":"./tags/密码学/index.html"},{"revision":"204a9106cf21807023abdb9c0a93afa4","url":"./tags/建站/index.html"},{"revision":"47d245438d74b451cc67c849be8734e9","url":"./tags/插件/index.html"},{"revision":"97d7ff0bf2da339b78c3a94e5dc84b13","url":"./tags/服务器/index.html"},{"revision":"eb2a7f579a19b85f74dace09fd2ac873","url":"./tags/网页源码/index.html"},{"revision":"d859a8ff75cec34cf5124ea20479a0b8","url":"./tags/美化/index.html"},{"revision":"458ecb61394bb40668bbf25a506d96df","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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