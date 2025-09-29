const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"c2400e51b90a244501595531c80c8dc1","url":"./404.html"},{"revision":"f1f4268c0bbe935d91b70b7af39b92b5","url":"./about/index.html"},{"revision":"181a1d4b8174d82b4e382da96915f9d1","url":"./archives/2022/06/index.html"},{"revision":"42e1c00041de76c82c21d2d751d70298","url":"./archives/2022/07/index.html"},{"revision":"1c6a63f182df2e9de76d7c7f915ac43b","url":"./archives/2022/08/index.html"},{"revision":"f5f18fc7f478e42a73e79cf4a3823f6d","url":"./archives/2022/10/index.html"},{"revision":"275511347a270a5a127c5d657e8ebeaf","url":"./archives/2022/11/index.html"},{"revision":"fd982ac1d5ab6816634535d61c9bea88","url":"./archives/2022/12/index.html"},{"revision":"ab20fd3150b12c222a56b8aa820e0698","url":"./archives/2022/index.html"},{"revision":"ca0e695cc93592dc8e44770a2387f3f1","url":"./archives/2022/page/2/index.html"},{"revision":"710d832aba79d4f750bbdb5362afcebb","url":"./archives/2023/02/index.html"},{"revision":"e1e818864772de3564117315953df1c6","url":"./archives/2023/04/index.html"},{"revision":"1ec9900ed9357d6187713f2e65dcf9ee","url":"./archives/2023/index.html"},{"revision":"dc9d1f58691149a2818bc0857963d3c4","url":"./archives/2024/04/index.html"},{"revision":"68cb27bc27d955c5afa584fd7d47b64a","url":"./archives/2024/05/index.html"},{"revision":"f0e7a52fccfdcf2f8b6b9522770cb463","url":"./archives/2024/06/index.html"},{"revision":"5abc62dc318c3a819c9e9b755982a941","url":"./archives/2024/09/index.html"},{"revision":"9b86fcf5688e55f16c97f32da7ac18c5","url":"./archives/2024/index.html"},{"revision":"a69c3cc36e57366da76e0981a1a4a7ef","url":"./archives/2025/09/index.html"},{"revision":"e31d765017edf2baf852e805a3e44303","url":"./archives/2025/index.html"},{"revision":"3428a09916407f694d87e0b2fc47b6b1","url":"./archives/index.html"},{"revision":"dafc41617289280cdd81b5b65ecfc919","url":"./archives/page/2/index.html"},{"revision":"da9896ab85ada05c745d7e75a1dc4ffa","url":"./archives/page/3/index.html"},{"revision":"7e58718f8b5ca24046ea1338e8d7790b","url":"./categories/AI/index.html"},{"revision":"d4553f84c965bbfbf045002550cbb7bd","url":"./categories/Gridea/index.html"},{"revision":"8203f79300e7c3f9cc90a988b7937b75","url":"./categories/index.html"},{"revision":"61dee7d367ca62f0463857d6e65164b0","url":"./categories/Vercel/index.html"},{"revision":"885debd56e6e731112be1ae9ad7139fc","url":"./categories/休闲/index.html"},{"revision":"53876b855e6dde02258a7305a0f5c894","url":"./categories/建站/index.html"},{"revision":"f2cd25ff27e3868caeb542c3ba0046f0","url":"./categories/科普/index.html"},{"revision":"75e6c1e91bd796c1f112efb111a56549","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"12f00e83e9365c09083e88410d9bcd26","url":"./cookies-instructions/index.html"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"51f532f5c4a44b5450195275518de8d3","url":"./index.html"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"a7eadeba44d13cbb615551869bd8d171","url":"./link/index.html"},{"revision":"d8ce6aa03bf6d76be43c81f68bdca0c9","url":"./message/index.html"},{"revision":"674032c1d6404fb02c36942bb3d12b7b","url":"./page/2/index.html"},{"revision":"097630a1cd86a1c266e62a3b943a1529","url":"./page/3/index.html"},{"revision":"cf6520a925b3bd2ddb4ccd483f12709f","url":"./post/193912eb/index.html"},{"revision":"50ce148a08f49faca333238e73144547","url":"./post/220b8380/index.html"},{"revision":"935fadf4f77ba3e082bf00143ff99e55","url":"./post/24dc856c/index.html"},{"revision":"87b181b2dc0cdf2028cb62a79595ec72","url":"./post/3082b2c6/index.html"},{"revision":"af7c83713ce8e2c21c77b3ef4d7cfe79","url":"./post/3df9585/index.html"},{"revision":"2605cd28e974d8340bf10b1aca14f5c0","url":"./post/4a17b156/index.html"},{"revision":"57a9e632b3647484ccefd18bc2396f81","url":"./post/739f0a30/index.html"},{"revision":"d0a819e6be2c614281ef65fddf6a57fb","url":"./post/73fccf9a/index.html"},{"revision":"3ccfeb266db78e72ab3ef1a986689339","url":"./post/7ca5704e/index.html"},{"revision":"f2a190ab6760666b9ed2b82c2da9abed","url":"./post/7fc77154/index.html"},{"revision":"d7ff7167a972c593715499c1191c3cc8","url":"./post/8097b5e3/index.html"},{"revision":"044df9d7ac329ef8272efb6b1d3f0a94","url":"./post/8422c4dc/index.html"},{"revision":"0f196c8b4b9f64f22417c3e857975da2","url":"./post/99c7fa1c/index.html"},{"revision":"678ec045eb3f5cfaeb545c38b734b226","url":"./post/9c60e209/index.html"},{"revision":"2813c53e30efe2533845dae4cd8956fd","url":"./post/ae58d2f1/index.html"},{"revision":"a9f61607691cad802f442fb48f71fbab","url":"./post/b9a3407d/index.html"},{"revision":"1c0cfef4181063368e708cb4de699f19","url":"./post/d4550abf/index.html"},{"revision":"26bbd0e083c97c3804885d1261f94c9a","url":"./post/d50c4d0e/index.html"},{"revision":"05f1496c7d20e99fd664fc54c0fe6137","url":"./post/db569493/index.html"},{"revision":"e229c4828cee5b28737d78724d793c84","url":"./post/dd83a796/index.html"},{"revision":"99095e2e3d806c0e242c1e5c64835e8d","url":"./post/f82f332a/index.html"},{"revision":"9d7e270d785017679fe44499758d95ea","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"874cc032c4f86d3acf0843a48c594a09","url":"./tags/AI/index.html"},{"revision":"882785ae36c2ad0d660d9676ec942f34","url":"./tags/Aplayer/index.html"},{"revision":"d9c7db970323a8cd381116feb4996283","url":"./tags/Bing/index.html"},{"revision":"cd15b83a1e8af124280cd8ad191d8129","url":"./tags/BUG/index.html"},{"revision":"66d816d8fef2a9556771851fa3ea0054","url":"./tags/CDN/index.html"},{"revision":"073bffdee013060e3fdd67bb4bb1d76a","url":"./tags/CMS/index.html"},{"revision":"4a333e9bccbc94335a7b0c4b60bf020c","url":"./tags/css/index.html"},{"revision":"f3a77915cf772e5c575f1d002a0dd996","url":"./tags/DNS/index.html"},{"revision":"2d1f472035ae4ae04b31ed34a5a0156f","url":"./tags/Flash/index.html"},{"revision":"e9d62c4e520fe97e4d80fba968ce55c4","url":"./tags/GFW/index.html"},{"revision":"3ac00cc4fa49fd4292e82d3eded1cae3","url":"./tags/Gridea/index.html"},{"revision":"86fbc192101982340067a4934edec75a","url":"./tags/HTML/index.html"},{"revision":"cee52219c4845e16e5c83110bf23ba5c","url":"./tags/index.html"},{"revision":"85fb6abf740a12748b8f6ac38533d0db","url":"./tags/JavaScript/index.html"},{"revision":"1bc217f2effe1d9030297966bd508e8e","url":"./tags/JQuery/index.html"},{"revision":"0f0113c0ee19e41edc3482592f301f18","url":"./tags/MetingJS/index.html"},{"revision":"18009e86360b25f2922a80185dbbef5a","url":"./tags/NexT/index.html"},{"revision":"1a73756594b75f54962c32ae9acc27a0","url":"./tags/P2P/index.html"},{"revision":"af65fca9e66acae592e4d84a2b410a68","url":"./tags/RSA/index.html"},{"revision":"e2356aadbe298bdae81ff9957f336da1","url":"./tags/Vercel/index.html"},{"revision":"c4fc00f625a6dc6c3e29f25c02be3dd7","url":"./tags/分享/index.html"},{"revision":"5f9ac3c671e938530592fb6e2364ca82","url":"./tags/加密/index.html"},{"revision":"c19020d4ccfe87dcb5da3919905996f8","url":"./tags/加密货币/index.html"},{"revision":"fdf6edaf16cf06c2e8d4f6d78066a621","url":"./tags/加载动画/index.html"},{"revision":"d8f960854185f9eeed32cfc9defc3f8f","url":"./tags/区块链/index.html"},{"revision":"030303bd21414497e430e05ecc7b192b","url":"./tags/右键菜单/index.html"},{"revision":"1a280b26497ff7d940562a2f52d9e918","url":"./tags/域名/index.html"},{"revision":"dfdbe112a80e8e24737f9084c67dcf64","url":"./tags/密码学/index.html"},{"revision":"a26ca36d69f2bc8b41f8e44cb9d88f6c","url":"./tags/建站/index.html"},{"revision":"9838288cfeec2a06271dfacdb71ec38c","url":"./tags/插件/index.html"},{"revision":"29b9c015de16a1431e2c02b8018414a2","url":"./tags/服务器/index.html"},{"revision":"7da45af39f41b017fe408e7f4cc419f9","url":"./tags/网页源码/index.html"},{"revision":"da9accc36ae3145e1c81200b1ff4bdd2","url":"./tags/美化/index.html"},{"revision":"1e5b8b9f6de9ee02130d0e444c9db592","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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