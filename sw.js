const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"3eaf72f9a2719579635504e83d2bc979","url":"./404.html"},{"revision":"72dcef87e5a7d92762d87409697fdfed","url":"./about/index.html"},{"revision":"6c30516e0698c7780781aa278a422b25","url":"./archives/2022/06/index.html"},{"revision":"78e1567c47f7e9eb718156d2130dac7e","url":"./archives/2022/07/index.html"},{"revision":"4628cdc2b78611a709706918e701cc10","url":"./archives/2022/08/index.html"},{"revision":"e97ac43dda4d2c2c9f14022cebc1a0ed","url":"./archives/2022/10/index.html"},{"revision":"515b22cf334c696cc2aa6d648549ce7f","url":"./archives/2022/11/index.html"},{"revision":"005b8fdef0a1e178faf4e8dd04a741cf","url":"./archives/2022/12/index.html"},{"revision":"60fc211f24ad2e6889e9dba58ce82f3b","url":"./archives/2022/index.html"},{"revision":"62984dca36e316c8a3c08ecf7a4ac074","url":"./archives/2022/page/2/index.html"},{"revision":"d36f7aed48d4dfe2119b5fc0290e1a9c","url":"./archives/2023/02/index.html"},{"revision":"f92f2a8f23aac452ffd3c8107eba268b","url":"./archives/2023/04/index.html"},{"revision":"87821ffd8bb3d1c8026f6e40200daccb","url":"./archives/2023/index.html"},{"revision":"48af99e45bb2060eed853c973e6645f2","url":"./archives/2024/04/index.html"},{"revision":"4c5a0c3d7bdf1c761602ea2bd3c66d74","url":"./archives/2024/05/index.html"},{"revision":"b2ce23f046a2c28d04d893c175d93264","url":"./archives/2024/06/index.html"},{"revision":"aec96bb0741608a1a50fcb61d80cc956","url":"./archives/2024/09/index.html"},{"revision":"bfe1f805f155af75e2064096ca1f8f88","url":"./archives/2024/index.html"},{"revision":"e7fb6e0f7f9954b9c6ebfa205a8f2175","url":"./archives/index.html"},{"revision":"e2da16b229f84dfd2ff68218a2106d6d","url":"./archives/page/2/index.html"},{"revision":"21e837e89809d9c7d8cd952d6c76846d","url":"./archives/page/3/index.html"},{"revision":"38615bc30f30c2973bd4c38a376ae093","url":"./categories/AI/index.html"},{"revision":"9248b3e69411728a6664eea877ae307e","url":"./categories/Gridea/index.html"},{"revision":"e87b061d36526ed43d3f2e116615e9eb","url":"./categories/index.html"},{"revision":"db539ab119105aa783a6ab5cca3707e2","url":"./categories/Vercel/index.html"},{"revision":"6784e512f3a850f81d6fbce0d1139b1c","url":"./categories/休闲/index.html"},{"revision":"89685e472fc8a0529137851e38b49b26","url":"./categories/建站/index.html"},{"revision":"4cebcf945cac903cf935d696c89472ce","url":"./categories/科普/index.html"},{"revision":"52eccb043a8554a854da07e9a64c683b","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"fd2a66efefeb0faf95485451f8b5e90d","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"726e973550de916cdf364d2e727a07f7","url":"./go/index.html"},{"revision":"aeae4ba8bb0527f8e48a4e27efe5b0f7","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"93d5899ccd85a541f463a2dcd458151d","url":"./link/index.html"},{"revision":"ae67b392b1b7ccf4fc35486ee27ba972","url":"./message/index.html"},{"revision":"27bdb7e27c6c72214005a2231483edcf","url":"./page/2/index.html"},{"revision":"8f80567eed1f7b122b4bb0888aaef0aa","url":"./page/3/index.html"},{"revision":"33fa994fc113f3a275d2b729bc1429cf","url":"./post/193912eb/index.html"},{"revision":"a81e29c7e51221b4c34cbec3189ef3c9","url":"./post/220b8380/index.html"},{"revision":"c0f38b219cdd712cf028332457bce7ac","url":"./post/24dc856c/index.html"},{"revision":"a42d26684885c1973dd25786a1d86cf8","url":"./post/3082b2c6/index.html"},{"revision":"c542234377f43444a6b2fe0d180d18ee","url":"./post/3df9585/index.html"},{"revision":"e02a5364889604928427d23c805eb2b5","url":"./post/4a17b156/index.html"},{"revision":"415efcf3c4ebcdca557f3842d16a1598","url":"./post/739f0a30/index.html"},{"revision":"cba83b585b0edd8ee8751a6cf5d6ba13","url":"./post/73fccf9a/index.html"},{"revision":"67f15ee61a93f6889fe0bbfda84fa77d","url":"./post/7ca5704e/index.html"},{"revision":"bab49e20cd201f4baa38535711155386","url":"./post/7fc77154/index.html"},{"revision":"8a62fe149ef84e9dcd31546292f84612","url":"./post/8097b5e3/index.html"},{"revision":"be9f422288adc51270dfc68e2ba7b919","url":"./post/8422c4dc/index.html"},{"revision":"844334a6dc4a82098fb976f78bdc0da9","url":"./post/99c7fa1c/index.html"},{"revision":"fb447e50774e9a8abad71be498ce4c96","url":"./post/9c60e209/index.html"},{"revision":"d44241b3dd3efbd73fa75e8fb42ac8b0","url":"./post/ae58d2f1/index.html"},{"revision":"ec5e2fbcd3dbe998c48c01b0cd808bdd","url":"./post/d4550abf/index.html"},{"revision":"1827c1df4251813f6d93f43164d31ffc","url":"./post/d50c4d0e/index.html"},{"revision":"69fd4c1bfc4d6ba66665213b0792a70a","url":"./post/db569493/index.html"},{"revision":"6c8d34e228af55876ebfbe4459942d03","url":"./post/dd83a796/index.html"},{"revision":"683c2cedae3e4e005771b3b7a1591e0b","url":"./post/f82f332a/index.html"},{"revision":"9a7ae7e2d0c7353daca5b260f7961ccd","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"96448b01a573d119fd0d5287035e3131","url":"./tags/AI/index.html"},{"revision":"977c09c33f07142ee0a9e348560bd86f","url":"./tags/Aplayer/index.html"},{"revision":"363c85e7f3ad268ff158052cb25e4ad0","url":"./tags/Bing/index.html"},{"revision":"583c0cce60396a657fd2f9f6dd380d17","url":"./tags/BUG/index.html"},{"revision":"40fc8240114beb5829ad9bf3b42e6421","url":"./tags/CDN/index.html"},{"revision":"77bb56ba95bed5ad6b594eaa67d1ac9c","url":"./tags/CMS/index.html"},{"revision":"2ed262a5c7b6be02cfabd8477997a75b","url":"./tags/css/index.html"},{"revision":"a5c97c7f46b31e0398ba427678c66bf3","url":"./tags/DNS/index.html"},{"revision":"f44320e470694f5fdb8315406e9edee7","url":"./tags/Flash/index.html"},{"revision":"20d8557f519032ee05891a7369a26c78","url":"./tags/GFW/index.html"},{"revision":"67a754ec152056e2395c7fa79cd8e3c8","url":"./tags/Gridea/index.html"},{"revision":"8fd7be893950713ff380330d304ac2ac","url":"./tags/HTML/index.html"},{"revision":"a22e783ea9b489938f7e751e81b00a31","url":"./tags/index.html"},{"revision":"7f58d2cafb16376c4ef9cbf75bb0bbc7","url":"./tags/JavaScript/index.html"},{"revision":"55b409c49e334d439247eb4d37d60987","url":"./tags/JQuery/index.html"},{"revision":"d09b71f333b1c1f484d764cd3d129bcd","url":"./tags/MetingJS/index.html"},{"revision":"50730ca953786a9ed3144e94c14b7ce7","url":"./tags/NexT/index.html"},{"revision":"ff3a9efdd693cfbac4df58c50a36cf79","url":"./tags/P2P/index.html"},{"revision":"d46582b46fdb9f231c0ce4b3303ea412","url":"./tags/RSA/index.html"},{"revision":"9f4eb1e01b3c0909c3c59e56976f77d6","url":"./tags/Vercel/index.html"},{"revision":"953a7d3bf931c6bfec0c880a0651a097","url":"./tags/分享/index.html"},{"revision":"c645352680838ddca0a161bf7d9845a6","url":"./tags/加密/index.html"},{"revision":"34b03cfc8f5ea4bbf06e37fa02c982a0","url":"./tags/加载动画/index.html"},{"revision":"32ea4a6ed978aceacf5e90b9ca11b9e5","url":"./tags/右键菜单/index.html"},{"revision":"2b803dd8bdbdd00647c5b384d75bb4eb","url":"./tags/域名/index.html"},{"revision":"de3074e6b6d1693de4d476ee144cad34","url":"./tags/密码学/index.html"},{"revision":"9f54c2f2599ec5be247c8856894dc393","url":"./tags/建站/index.html"},{"revision":"30f78efa7af871db5214aca2bd6a7117","url":"./tags/插件/index.html"},{"revision":"8de479d107b460678cc5956b875818d4","url":"./tags/服务器/index.html"},{"revision":"65806548eaa1e66b90a3a2e4dbce65c5","url":"./tags/网页源码/index.html"},{"revision":"580f225910b1eb7e7f9e49809c1d8f0a","url":"./tags/美化/index.html"},{"revision":"b7174e858b4dba8de079a810607da411","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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
    /^https:\/\/i\.pixiv\.re/,
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