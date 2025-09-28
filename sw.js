const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"70b2ec5da76de5eb8c39c9716303382f","url":"./404.html"},{"revision":"13459a577d7870c1cdd25ed43341ecf5","url":"./about/index.html"},{"revision":"d7f6494c438c0f7d0acb06196b9438b0","url":"./archives/2022/06/index.html"},{"revision":"a311f99aaaef789a50b5453f50d8fe83","url":"./archives/2022/07/index.html"},{"revision":"f9b3d9ffff49733070f1a12f337af92f","url":"./archives/2022/08/index.html"},{"revision":"89b6c8998c52132ccc275a564394905c","url":"./archives/2022/10/index.html"},{"revision":"73756ed0eaeede5d11cae54a12c31709","url":"./archives/2022/11/index.html"},{"revision":"6b20b99bf2d8e4f64a74eeb772427e60","url":"./archives/2022/12/index.html"},{"revision":"d9096ed396b590c336b4879c1ba5ec1b","url":"./archives/2022/index.html"},{"revision":"a167fcec2cebe76c8dc1229f54ae20d7","url":"./archives/2022/page/2/index.html"},{"revision":"2dd5c0c3bfaeb110b88a011f7d67c995","url":"./archives/2023/02/index.html"},{"revision":"f91093de6102191eb583c11bef24e238","url":"./archives/2023/04/index.html"},{"revision":"73b4d27155dc04127cbc580d01041d82","url":"./archives/2023/index.html"},{"revision":"1215ea2e98be687aa20f324ad998a363","url":"./archives/2024/04/index.html"},{"revision":"ee011973ea1bdac2eaa2f9a846a1a08f","url":"./archives/2024/05/index.html"},{"revision":"416acceee7b748910522d29cf601aeba","url":"./archives/2024/06/index.html"},{"revision":"c4c9dd425275c8592efb72c4190aa236","url":"./archives/2024/09/index.html"},{"revision":"0504deab60347402d84a568ed7ebf522","url":"./archives/2024/index.html"},{"revision":"a57a7b53c0bd93cd05e6f335009c4c2e","url":"./archives/index.html"},{"revision":"e0b943f52334a18317b31ee5fc4c79b8","url":"./archives/page/2/index.html"},{"revision":"8c68e4dbba69446aded6516a9a529d2a","url":"./archives/page/3/index.html"},{"revision":"d78849d9b64968492f0e9ebfc839b65f","url":"./categories/AI/index.html"},{"revision":"ddf7f8a6c4b86989b5266aa502462dc2","url":"./categories/Gridea/index.html"},{"revision":"ccd05f60e4406b7f8bd736e3cd48ba05","url":"./categories/index.html"},{"revision":"eabe6793e72c07be4626628f7b3928dd","url":"./categories/Vercel/index.html"},{"revision":"b411fb20a917efdeaa4a99acffd16636","url":"./categories/休闲/index.html"},{"revision":"51c24d56450b0a472e488ce9017987ea","url":"./categories/建站/index.html"},{"revision":"fc247806f112afa27f88913051e62a3a","url":"./categories/科普/index.html"},{"revision":"93cf4b9760302f6af7cbad66307a283f","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"b4803ded1607ad8b3c6f26ea696e2672","url":"./cookies-instructions/index.html"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"fc99442f307d5459f450e6d8f37992be","url":"./index.html"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"ff4678beca250163059571b1e2cfbe12","url":"./link/index.html"},{"revision":"664f7e9c21b5368edc981ef91a929c30","url":"./message/index.html"},{"revision":"f4a4b0375afd94cf5f87df02cdded2e7","url":"./page/2/index.html"},{"revision":"ab70f662f4e4627211be6f866f0f7234","url":"./page/3/index.html"},{"revision":"5381eaa4e73e48e3ef25db3e97ae5a26","url":"./post/193912eb/index.html"},{"revision":"23170ad327c36281654977605459ebd5","url":"./post/220b8380/index.html"},{"revision":"7a1f5e8bd7ad3ba3024b90293d9e3368","url":"./post/24dc856c/index.html"},{"revision":"34e2eb88522dca5b8e532a843f8b30c2","url":"./post/3082b2c6/index.html"},{"revision":"07ee2bff50925b8ae07d4acd7a056de7","url":"./post/3df9585/index.html"},{"revision":"51b57e57bda696bc0d80d5bf601d9584","url":"./post/4a17b156/index.html"},{"revision":"6c9c19d8f4f2d0376d4de1a429d92217","url":"./post/739f0a30/index.html"},{"revision":"4b91a4150412c0d585de3bd6f5de8d01","url":"./post/73fccf9a/index.html"},{"revision":"c88e4d00718d9d0a518d33f22264b35d","url":"./post/7ca5704e/index.html"},{"revision":"9f1ee516dd575dab4739e82a4a639ca1","url":"./post/7fc77154/index.html"},{"revision":"79e22143c7431abdd9d7c304f4151021","url":"./post/8097b5e3/index.html"},{"revision":"5e09fbcd57e4f6d9fd3985c6f1257644","url":"./post/8422c4dc/index.html"},{"revision":"8175bbc89fedd52466801b2219c73240","url":"./post/99c7fa1c/index.html"},{"revision":"5707bb731d076b7cc3a1aec30866feac","url":"./post/9c60e209/index.html"},{"revision":"a31013bee1173ebcc59a396d390e4300","url":"./post/ae58d2f1/index.html"},{"revision":"765d2fbc01ea168f87d75e7eace76805","url":"./post/d4550abf/index.html"},{"revision":"b73d02af24aa5c341086542a055e4355","url":"./post/d50c4d0e/index.html"},{"revision":"55cee205469982e3c88f9d50d59dc62a","url":"./post/db569493/index.html"},{"revision":"a383c550d40ce0a9ce6b914a39ae3824","url":"./post/dd83a796/index.html"},{"revision":"d10a050ad6ca7fa74d1de5288f2e07da","url":"./post/f82f332a/index.html"},{"revision":"573214246947f794204ff1d8db1fe3a3","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"2eb953e4280f24db0f295ca568fa699e","url":"./tags/AI/index.html"},{"revision":"55f4ece7fd04c8a0b98b48fdfac050b6","url":"./tags/Aplayer/index.html"},{"revision":"9ee2e76ba7d230ab9ae60b08d7896e67","url":"./tags/Bing/index.html"},{"revision":"4b8019ed699d403a2a1ebff95dfdc971","url":"./tags/BUG/index.html"},{"revision":"2fefb9a71b2c51eb0b39b7c50dc23858","url":"./tags/CDN/index.html"},{"revision":"5fb397615322e312c0f286941feaae3e","url":"./tags/CMS/index.html"},{"revision":"bae8298927adf52a88170b17212c5583","url":"./tags/css/index.html"},{"revision":"09432a569d0fbf00b98d02b815a624df","url":"./tags/DNS/index.html"},{"revision":"a3225b65209f7ea755375bd9fe501798","url":"./tags/Flash/index.html"},{"revision":"1f974f27d73d0fb2e89f2e72ffc7d675","url":"./tags/GFW/index.html"},{"revision":"b06cd6dff1a7f0a6fef070ec98e97d19","url":"./tags/Gridea/index.html"},{"revision":"be2b25284087ccd71870b23966573e73","url":"./tags/HTML/index.html"},{"revision":"58ea857f4029e40c84d226d9ed50fbf0","url":"./tags/index.html"},{"revision":"5a9fe787912246ab904b65878d2e04da","url":"./tags/JavaScript/index.html"},{"revision":"da9fb99d5306910414f031b50e238ca8","url":"./tags/JQuery/index.html"},{"revision":"90bf4b55a525f6735f9399551bda5fed","url":"./tags/MetingJS/index.html"},{"revision":"3e07ecaf8dbc0effa7e1e4aee573da6e","url":"./tags/NexT/index.html"},{"revision":"24e7a2918887cf2904efa92a1855d358","url":"./tags/P2P/index.html"},{"revision":"295d4682baaf19fe74aadf0fa7871afc","url":"./tags/RSA/index.html"},{"revision":"91c9dd51d35e194d4d63838e2d896e1e","url":"./tags/Vercel/index.html"},{"revision":"83736c6a0f5a0adf004996202dd9b19b","url":"./tags/分享/index.html"},{"revision":"baee3b2765434a79be2c3431c0789140","url":"./tags/加密/index.html"},{"revision":"404813cf1f5d31a748d27c8271ddf548","url":"./tags/加载动画/index.html"},{"revision":"eab353376aa30a25cae478679d15c018","url":"./tags/右键菜单/index.html"},{"revision":"f763d966486b53a95af26db6eb3cb86b","url":"./tags/域名/index.html"},{"revision":"95422b621cefe2afbebdac7b7d582d31","url":"./tags/密码学/index.html"},{"revision":"8de65a646e23e88b4d916983e4c8d350","url":"./tags/建站/index.html"},{"revision":"6573a99bb62df46b20249e8d108d9b98","url":"./tags/插件/index.html"},{"revision":"791106b1f8c3df919c6c030dc369f2aa","url":"./tags/服务器/index.html"},{"revision":"b06d4c36defa2f29a718f1fa74d2aa29","url":"./tags/网页源码/index.html"},{"revision":"f27b5562275c70e6aadd055078e0cab5","url":"./tags/美化/index.html"},{"revision":"2809d4bcae0423308ae04487193ebf2e","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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