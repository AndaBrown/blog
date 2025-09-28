const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"70b2ec5da76de5eb8c39c9716303382f","url":"./404.html"},{"revision":"22bd09fb9f77ee8ba1bb0a192dc953be","url":"./about/index.html"},{"revision":"a836a02d860beb7201365499f9b26b37","url":"./archives/2022/06/index.html"},{"revision":"c83fe49721fb6fa07f9686520c665b57","url":"./archives/2022/07/index.html"},{"revision":"db2f917b933813e8cf50f84515d0a6b8","url":"./archives/2022/08/index.html"},{"revision":"8fc8beda4b1dfddfca0b14955463fe78","url":"./archives/2022/10/index.html"},{"revision":"393d9e320d7dbd4e096c8cc11855b0f3","url":"./archives/2022/11/index.html"},{"revision":"11f826425fabf324b2f54fbfe5051673","url":"./archives/2022/12/index.html"},{"revision":"8bb4b87d687dcf36e598f15b72316c43","url":"./archives/2022/index.html"},{"revision":"35fad2e8f81915312135493057393293","url":"./archives/2022/page/2/index.html"},{"revision":"19edb602c62622dc4870e383430f65b9","url":"./archives/2023/02/index.html"},{"revision":"dd1478da676a3c808239d079458339a5","url":"./archives/2023/04/index.html"},{"revision":"1ba80fe4fc4d9fad5a95d40f928b208a","url":"./archives/2023/index.html"},{"revision":"f0094b93646627f4f68b1aa193da7aac","url":"./archives/2024/04/index.html"},{"revision":"e5ec0adbc0f9099b515cbf1d849883f4","url":"./archives/2024/05/index.html"},{"revision":"259b5a21d5b0f73ba8fcf61ffc216858","url":"./archives/2024/06/index.html"},{"revision":"bf43af1a8aa5e5e7e862039366bb4a1e","url":"./archives/2024/09/index.html"},{"revision":"26dbcd5efb03c5ce9bb6b87f2071f280","url":"./archives/2024/index.html"},{"revision":"ba98d917851d8ed19a679ea8cb51b8ff","url":"./archives/index.html"},{"revision":"b83ec19b756c65769507efd75253005f","url":"./archives/page/2/index.html"},{"revision":"5655be2e75d59aa5195e7c5259927515","url":"./archives/page/3/index.html"},{"revision":"e5d13b0e8c8af41b875382f341380b30","url":"./categories/AI/index.html"},{"revision":"657797f852227eeda3bc5733d38ddbe3","url":"./categories/Gridea/index.html"},{"revision":"b6e5da00dd14c0bb6b243d57cf56e60e","url":"./categories/index.html"},{"revision":"ffc2699621f621be63bbbaa01eb79a1c","url":"./categories/Vercel/index.html"},{"revision":"775dc199e3bd89a9239b95f0b12400a5","url":"./categories/休闲/index.html"},{"revision":"0f01923ae6030e2969ae7c23a0537806","url":"./categories/建站/index.html"},{"revision":"a2fd25d0829a283c718b6b141e741493","url":"./categories/科普/index.html"},{"revision":"8982f065dddb5d740d94d9208c0e199c","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"dfff221a069217f2845f92ef60bc6c01","url":"./cookies-instructions/index.html"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"9da787718cb1ff8876761fa2ff2c0d79","url":"./index.html"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"dbd85006256c7b214223366c4b6dabb5","url":"./link/index.html"},{"revision":"04f83c77fe5a5dc596cba340c00c4304","url":"./message/index.html"},{"revision":"82544747312cc220b9ab34e8fa643156","url":"./page/2/index.html"},{"revision":"697c8c9781be6028d72d8c6ba75b156f","url":"./page/3/index.html"},{"revision":"5381eaa4e73e48e3ef25db3e97ae5a26","url":"./post/193912eb/index.html"},{"revision":"23170ad327c36281654977605459ebd5","url":"./post/220b8380/index.html"},{"revision":"7a1f5e8bd7ad3ba3024b90293d9e3368","url":"./post/24dc856c/index.html"},{"revision":"34e2eb88522dca5b8e532a843f8b30c2","url":"./post/3082b2c6/index.html"},{"revision":"07ee2bff50925b8ae07d4acd7a056de7","url":"./post/3df9585/index.html"},{"revision":"51b57e57bda696bc0d80d5bf601d9584","url":"./post/4a17b156/index.html"},{"revision":"6c9c19d8f4f2d0376d4de1a429d92217","url":"./post/739f0a30/index.html"},{"revision":"4b91a4150412c0d585de3bd6f5de8d01","url":"./post/73fccf9a/index.html"},{"revision":"c88e4d00718d9d0a518d33f22264b35d","url":"./post/7ca5704e/index.html"},{"revision":"9f1ee516dd575dab4739e82a4a639ca1","url":"./post/7fc77154/index.html"},{"revision":"79e22143c7431abdd9d7c304f4151021","url":"./post/8097b5e3/index.html"},{"revision":"5e09fbcd57e4f6d9fd3985c6f1257644","url":"./post/8422c4dc/index.html"},{"revision":"8175bbc89fedd52466801b2219c73240","url":"./post/99c7fa1c/index.html"},{"revision":"5707bb731d076b7cc3a1aec30866feac","url":"./post/9c60e209/index.html"},{"revision":"a31013bee1173ebcc59a396d390e4300","url":"./post/ae58d2f1/index.html"},{"revision":"765d2fbc01ea168f87d75e7eace76805","url":"./post/d4550abf/index.html"},{"revision":"b73d02af24aa5c341086542a055e4355","url":"./post/d50c4d0e/index.html"},{"revision":"55cee205469982e3c88f9d50d59dc62a","url":"./post/db569493/index.html"},{"revision":"a383c550d40ce0a9ce6b914a39ae3824","url":"./post/dd83a796/index.html"},{"revision":"d10a050ad6ca7fa74d1de5288f2e07da","url":"./post/f82f332a/index.html"},{"revision":"573214246947f794204ff1d8db1fe3a3","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"df8afcb57ce8b20a16520672f2f38f24","url":"./tags/AI/index.html"},{"revision":"f760364f29767675acaa68f2225ea5db","url":"./tags/Aplayer/index.html"},{"revision":"03114f99c43727ba7dc9e0347e23eb13","url":"./tags/Bing/index.html"},{"revision":"a11aa91880f2927c50ef403c3ea72662","url":"./tags/BUG/index.html"},{"revision":"d9871c63489fcd9e0602320d5b3f8c8e","url":"./tags/CDN/index.html"},{"revision":"d7965c1c5379808d8ac3076ccf0d83bf","url":"./tags/CMS/index.html"},{"revision":"440308db0d6594c7f6c462945f9f4daf","url":"./tags/css/index.html"},{"revision":"ae86b722148a5b4073b61c7f4989d244","url":"./tags/DNS/index.html"},{"revision":"6b6f1443e52032daadec8ce7f4fe7bba","url":"./tags/Flash/index.html"},{"revision":"f35df46d3426a713e9a41dc7599a7d1a","url":"./tags/GFW/index.html"},{"revision":"f1ff8439834a53ce5f03baff0b33001b","url":"./tags/Gridea/index.html"},{"revision":"089c0af5c0b23b45aae107fed1502e05","url":"./tags/HTML/index.html"},{"revision":"1bde05276ec7a2bb59bc5cf31e3dba9c","url":"./tags/index.html"},{"revision":"d35c694eca604722a0ecda1cfcef1c77","url":"./tags/JavaScript/index.html"},{"revision":"a75f8ce48d73f61b6b008fcc6ebac656","url":"./tags/JQuery/index.html"},{"revision":"6a50ff3a39f95331c68560e648306d2e","url":"./tags/MetingJS/index.html"},{"revision":"7d58c28161d78f701e7293ff394d11c4","url":"./tags/NexT/index.html"},{"revision":"56633fea797caaa6c53a9ca17ad23fba","url":"./tags/P2P/index.html"},{"revision":"00d644cce8e1e534bc0a7ed617bf4826","url":"./tags/RSA/index.html"},{"revision":"50851c2107dd3cb1997c632eb90af25c","url":"./tags/Vercel/index.html"},{"revision":"50deec7f88fec1b60592610422e8f931","url":"./tags/分享/index.html"},{"revision":"e73dc6e4c3194efc861f9cbb9e809290","url":"./tags/加密/index.html"},{"revision":"34db1f2a9a05af08be62e9e9377f04b9","url":"./tags/加载动画/index.html"},{"revision":"78b44fe2da00cfd6879cedf71affe944","url":"./tags/右键菜单/index.html"},{"revision":"a8b686a4f79626dee647a1f80bf3cf5b","url":"./tags/域名/index.html"},{"revision":"0cb0cc542ddb49e1db1b116845565d27","url":"./tags/密码学/index.html"},{"revision":"abd89cf921880d08c26ad284fa0d602a","url":"./tags/建站/index.html"},{"revision":"fc21277806394a86ca551bce9864c844","url":"./tags/插件/index.html"},{"revision":"5e2fda051077f7504dae4ce6d8fdb9ad","url":"./tags/服务器/index.html"},{"revision":"129ae764e60df2e799bd1a99e7701489","url":"./tags/网页源码/index.html"},{"revision":"a4c4450cc7382e3e4f6a52161a366790","url":"./tags/美化/index.html"},{"revision":"abab4d856610ff91ffe7853d77d1c553","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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