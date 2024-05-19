const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"b0c2fc6d67715d919439e1cc824fb3cb","url":"./404.html"},{"revision":"1f89000e5d72d2f4db29d680c32d7b3b","url":"./about/index.html"},{"revision":"8b8f0f346b7873e2ceccfa8d020dc933","url":"./archives/2022/06/index.html"},{"revision":"db97453f96d4c065d3abb982f2cb1294","url":"./archives/2022/07/index.html"},{"revision":"8ba16d5b03d84b86d11e61ec72c2fdb8","url":"./archives/2022/08/index.html"},{"revision":"3a6ebb73229da499743b4608a542dd0d","url":"./archives/2022/10/index.html"},{"revision":"bc0203e28d9e9e4632313d87d97d9473","url":"./archives/2022/11/index.html"},{"revision":"ffadf42bf2850cc697e470d897e29989","url":"./archives/2022/12/index.html"},{"revision":"e14bd3e0aa216d7abf5a9ec4447f9717","url":"./archives/2022/index.html"},{"revision":"7e7b581107e158e0f623e5bcf4d29229","url":"./archives/2022/page/2/index.html"},{"revision":"c62bb9c6bc702000f0dcce69bb527b7e","url":"./archives/2023/02/index.html"},{"revision":"5332b6de5e350f578a6ca7bd7f9e9456","url":"./archives/2023/04/index.html"},{"revision":"efc90b18bfbd27a6b926915b21429472","url":"./archives/2023/index.html"},{"revision":"1e60f79137860773010171dae2a6e978","url":"./archives/2024/04/index.html"},{"revision":"f2505c03b0a1b81c405e863183af83b0","url":"./archives/2024/05/index.html"},{"revision":"94a3c455bf73872407cea1ec03c65015","url":"./archives/2024/index.html"},{"revision":"67b10b0f673c1f7d82d469184f5adb5c","url":"./archives/index.html"},{"revision":"46ef9d3547d565443dd5d011d9edcc18","url":"./archives/page/2/index.html"},{"revision":"e715907cc1d20fcc0af7520c651d480c","url":"./categories/AI/index.html"},{"revision":"dbbbda83809ca091d1b7f79b2617e365","url":"./categories/Gridea/index.html"},{"revision":"5a4afcdd06502b2d8d3dc46f5635e695","url":"./categories/index.html"},{"revision":"a0166ec1169a4b95c38b6c233dc778b6","url":"./categories/Vercel/index.html"},{"revision":"cf8730f35649bf739dc7a03fa8aa3a15","url":"./categories/休闲/index.html"},{"revision":"33a163a7e8bc7dc6787ce61df4e31092","url":"./categories/建站/index.html"},{"revision":"3ceae2db8aa36152b10878be53cd288c","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"e9a5d44a2a8fdcb8b158578fad325700","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"8852c5db28bf383d64ac0fb773b8b755","url":"./go/index.html"},{"revision":"6d44e89651c21f21dcc945b0af753f67","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"41e4710bc4b3a0f24605ce39fdee4dec","url":"./link/index.html"},{"revision":"4d982f8edb45ca7a6e185feeb75a3531","url":"./message/index.html"},{"revision":"1f98f2fa60e1a5016be855c7a018f5cc","url":"./page/2/index.html"},{"revision":"17dfbe999f55bb54b88c3ffab47b3a3b","url":"./post/193912eb/index.html"},{"revision":"661322322be8ee4609deb2737bb74d2c","url":"./post/220b8380/index.html"},{"revision":"4ae6846cd5c2414c9e9114aa3821e64b","url":"./post/24dc856c/index.html"},{"revision":"bab7ad108838574fb8177d192425b69f","url":"./post/3082b2c6/index.html"},{"revision":"1cc02a02fc5e5bcd4474144c41320e18","url":"./post/3df9585/index.html"},{"revision":"fd69ddbefc5e2dd335e4c78ef544555e","url":"./post/4a17b156/index.html"},{"revision":"df5aced8ade7308944bb5d40e018e50f","url":"./post/739f0a30/index.html"},{"revision":"cdcc17e46c6139a3b09227ced2bbbb5c","url":"./post/73fccf9a/index.html"},{"revision":"a64f00d1d81b7a2a423a3ccdcf38c0ce","url":"./post/7ca5704e/index.html"},{"revision":"68ed64bbba96ebeaa32cbc86d978c70d","url":"./post/7fc77154/index.html"},{"revision":"5cfb9d1289ec1ed3c98b4c506a697d43","url":"./post/8422c4dc/index.html"},{"revision":"4ff6e2d13d2c0fec557cb3962f285a3d","url":"./post/99c7fa1c/index.html"},{"revision":"aedd13628bb203140d831de7cce5e013","url":"./post/9c60e209/index.html"},{"revision":"f28df08f9859d9878ca58d1c4a2a37f2","url":"./post/ae58d2f1/index.html"},{"revision":"c4483339ee641fb424828ab10f2679da","url":"./post/d4550abf/index.html"},{"revision":"12e0a9d892535773e55376631ad3fddc","url":"./post/d50c4d0e/index.html"},{"revision":"605d1b8c716fea77cff85fc9392717cf","url":"./post/db569493/index.html"},{"revision":"73bda1720075ba98700178bf943e57e0","url":"./post/dd83a796/index.html"},{"revision":"7c9dfb7c96e64cdbb596153326c503e7","url":"./post/f82f332a/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"6a265144b9f05297813a5a604150c3f6","url":"./tags/AI/index.html"},{"revision":"078eccb4cf88cd3cfdde1f3dc4fb2e16","url":"./tags/Aplayer/index.html"},{"revision":"11904b8985cdc751300ae54abfc73983","url":"./tags/Bing/index.html"},{"revision":"0768ea98fc0c2da89d2eb8269e60eb7b","url":"./tags/BUG/index.html"},{"revision":"dfdcc96c3a67c02482427cfe30f5e503","url":"./tags/CDN/index.html"},{"revision":"19ac106c8d97e5f648f79b6fed952b97","url":"./tags/CMS/index.html"},{"revision":"28544a31a18cc9bc898f2de0c3325659","url":"./tags/css/index.html"},{"revision":"a3b57dddb13e43e0ebbec13e191a3ca8","url":"./tags/DNS/index.html"},{"revision":"59826670ab9c53cdd3291f081b6564df","url":"./tags/Flash/index.html"},{"revision":"94c21ecbf8a8f56c476ef6b4678eed68","url":"./tags/GFW/index.html"},{"revision":"6b913046cb1c407bca7f4287cf0b8112","url":"./tags/Gridea/index.html"},{"revision":"853f354d6f9b97fbdc2de20f1bd972a2","url":"./tags/HTML/index.html"},{"revision":"d72194383dc924f7b42acc31cb231c56","url":"./tags/index.html"},{"revision":"d40d1968d1b9c7f9c1e61c8fd2abbd22","url":"./tags/JavaScript/index.html"},{"revision":"fc84d33539cd0210c24a82742064e601","url":"./tags/JQuery/index.html"},{"revision":"ba982c5f3b9cc5edd8103765de679443","url":"./tags/MetingJS/index.html"},{"revision":"1e30ec2687d45b885f220b0b02183186","url":"./tags/NexT/index.html"},{"revision":"fb1f51a980dc997c99e5f03c93c11372","url":"./tags/Vercel/index.html"},{"revision":"5c73f42d049863233a2bf67842643f3a","url":"./tags/分享/index.html"},{"revision":"e7c53417b72021e0ac4b9a83e5497bc2","url":"./tags/加载动画/index.html"},{"revision":"1c6c8da3145bbc2cac958de145efc183","url":"./tags/右键菜单/index.html"},{"revision":"f631c2fb90844c6605633898a1575ad4","url":"./tags/域名/index.html"},{"revision":"416ba1ce34fd07ead4f52a1ed01cb945","url":"./tags/建站/index.html"},{"revision":"ffc86dceeb68c75fd032de3026a8a803","url":"./tags/插件/index.html"},{"revision":"5f7760fd99ce1ffda8bedc3516a6fbf4","url":"./tags/服务器/index.html"},{"revision":"dbb58dbdd7d912dcf1bb7177600f45b0","url":"./tags/网页源码/index.html"},{"revision":"97cc57dcd8da2e2af0849dce5cf01bba","url":"./tags/美化/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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