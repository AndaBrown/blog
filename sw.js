const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"0e1a3bcc09d565975278ab8b327c25cb","url":"./404.html"},{"revision":"60fe375f401e83f249ecc4b14c4121a3","url":"./about/index.html"},{"revision":"5a866a161f285cc3f85c4929292946e1","url":"./archives/2022/06/index.html"},{"revision":"cf230be7e3321e189d5438d089c7f1ba","url":"./archives/2022/07/index.html"},{"revision":"4a3452dd24fbb6fa6cdbcae2f55fff10","url":"./archives/2022/08/index.html"},{"revision":"ba88a0e6cbcb5751df5bbfd3d403edb1","url":"./archives/2022/10/index.html"},{"revision":"b1b7d12d48835277529a9fbfb5f8660f","url":"./archives/2022/11/index.html"},{"revision":"028b04a1b34ae810d550ec30865a603d","url":"./archives/2022/12/index.html"},{"revision":"89443e2ba5d8354e97c98c8c557a89bd","url":"./archives/2022/index.html"},{"revision":"63a07115e1680d38d99d293da532bd49","url":"./archives/2022/page/2/index.html"},{"revision":"2cbbc5cbe73b3ed93695ee846b01c932","url":"./archives/2023/02/index.html"},{"revision":"0d04156d7fa9fe42ab0ab20257d56c83","url":"./archives/2023/04/index.html"},{"revision":"06358aa3a63d2c73936ffd6ea9e98374","url":"./archives/2023/index.html"},{"revision":"28ca0e8ba1bada327a977cbde475824f","url":"./archives/2024/04/index.html"},{"revision":"5c7d4f7567288804706cded3f6d86a9c","url":"./archives/2024/05/index.html"},{"revision":"103e3266e546ce1fccc662c8e754ea5b","url":"./archives/2024/06/index.html"},{"revision":"93d2e2b397c123dc9ee9d78db8e2cccb","url":"./archives/2024/09/index.html"},{"revision":"fe9acd30cfa465c2c129db07c486d5ac","url":"./archives/2024/index.html"},{"revision":"c2de9b39c6fff890a73cf13eb1e118ef","url":"./archives/index.html"},{"revision":"d5bccd43af76ddaa85be0ab4199556d9","url":"./archives/page/2/index.html"},{"revision":"c86e26686bf7a7061f6f8bba54c25ead","url":"./archives/page/3/index.html"},{"revision":"eb9a22ad13c08ba3dfe5799652eec6b1","url":"./categories/AI/index.html"},{"revision":"4fe766c40f1f53681182a1b65d5a2ce5","url":"./categories/Gridea/index.html"},{"revision":"07401fe2c834dda58541d83f116e6f07","url":"./categories/index.html"},{"revision":"6e003398f765646a4a7c9db43a349f38","url":"./categories/Vercel/index.html"},{"revision":"870539f7570455d5582a2eaadf47f01b","url":"./categories/休闲/index.html"},{"revision":"9ea3eadc61e604c159f6dbcd8c45c2d1","url":"./categories/建站/index.html"},{"revision":"3e17a24a84e3d96659d2aaede10eeee1","url":"./categories/科普/index.html"},{"revision":"866628b3181ddbc6b2fe395b47f3e47f","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"4838acbf7f40ecea1cda8e43067f0b9b","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"726e973550de916cdf364d2e727a07f7","url":"./go/index.html"},{"revision":"afaad9a2ae073e9b3849c1744dea835e","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"5145ce2d589d2df183b60c051547e1bf","url":"./link/index.html"},{"revision":"eca8aa74b63da6a2924dc09b2ab0fd99","url":"./message/index.html"},{"revision":"0a0454d8b6a5d8e464b1d7491eb419a0","url":"./page/2/index.html"},{"revision":"f85feedd1c32cfec8967e6c8d7fe968d","url":"./page/3/index.html"},{"revision":"33fa994fc113f3a275d2b729bc1429cf","url":"./post/193912eb/index.html"},{"revision":"a81e29c7e51221b4c34cbec3189ef3c9","url":"./post/220b8380/index.html"},{"revision":"c0f38b219cdd712cf028332457bce7ac","url":"./post/24dc856c/index.html"},{"revision":"a42d26684885c1973dd25786a1d86cf8","url":"./post/3082b2c6/index.html"},{"revision":"c542234377f43444a6b2fe0d180d18ee","url":"./post/3df9585/index.html"},{"revision":"e02a5364889604928427d23c805eb2b5","url":"./post/4a17b156/index.html"},{"revision":"415efcf3c4ebcdca557f3842d16a1598","url":"./post/739f0a30/index.html"},{"revision":"cba83b585b0edd8ee8751a6cf5d6ba13","url":"./post/73fccf9a/index.html"},{"revision":"67f15ee61a93f6889fe0bbfda84fa77d","url":"./post/7ca5704e/index.html"},{"revision":"bab49e20cd201f4baa38535711155386","url":"./post/7fc77154/index.html"},{"revision":"8a62fe149ef84e9dcd31546292f84612","url":"./post/8097b5e3/index.html"},{"revision":"be9f422288adc51270dfc68e2ba7b919","url":"./post/8422c4dc/index.html"},{"revision":"844334a6dc4a82098fb976f78bdc0da9","url":"./post/99c7fa1c/index.html"},{"revision":"fb447e50774e9a8abad71be498ce4c96","url":"./post/9c60e209/index.html"},{"revision":"d44241b3dd3efbd73fa75e8fb42ac8b0","url":"./post/ae58d2f1/index.html"},{"revision":"ec5e2fbcd3dbe998c48c01b0cd808bdd","url":"./post/d4550abf/index.html"},{"revision":"1827c1df4251813f6d93f43164d31ffc","url":"./post/d50c4d0e/index.html"},{"revision":"69fd4c1bfc4d6ba66665213b0792a70a","url":"./post/db569493/index.html"},{"revision":"6c8d34e228af55876ebfbe4459942d03","url":"./post/dd83a796/index.html"},{"revision":"683c2cedae3e4e005771b3b7a1591e0b","url":"./post/f82f332a/index.html"},{"revision":"9a7ae7e2d0c7353daca5b260f7961ccd","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"622245cf670cc18264214b812685a3b6","url":"./tags/AI/index.html"},{"revision":"35eddc345dbc405d6cebd10c45b072b4","url":"./tags/Aplayer/index.html"},{"revision":"580657c07151d33a4f1951898a1183e8","url":"./tags/Bing/index.html"},{"revision":"1679080d12b47d21beeec41cefbcd8e1","url":"./tags/BUG/index.html"},{"revision":"08334231ebf8d09e646887eeff465e1b","url":"./tags/CDN/index.html"},{"revision":"5537c2c0dfd9bacc4856a7308b87b81e","url":"./tags/CMS/index.html"},{"revision":"14fd641496b3876c8e63cd61b21c41d9","url":"./tags/css/index.html"},{"revision":"edd0455f67bd0bbc118051139749811c","url":"./tags/DNS/index.html"},{"revision":"b195daa06b0180b64d23250a8f9326ef","url":"./tags/Flash/index.html"},{"revision":"5b77e5663bdc8e9e72662549f93ccbdd","url":"./tags/GFW/index.html"},{"revision":"66db74325169d348a8b9778286680e63","url":"./tags/Gridea/index.html"},{"revision":"63e937a0f6d3b1af450857bdf2afec2f","url":"./tags/HTML/index.html"},{"revision":"0fa8d6cda2deca4f28f80480fe399fce","url":"./tags/index.html"},{"revision":"965b68b0d5f9d9ac39edc92160f017d9","url":"./tags/JavaScript/index.html"},{"revision":"275950f207e0efec5aa38f96929055a9","url":"./tags/JQuery/index.html"},{"revision":"ddc66a343f90fb6d01231fbdc68a1e7e","url":"./tags/MetingJS/index.html"},{"revision":"2bf7d2dcd52e39efde61c0bba8526e17","url":"./tags/NexT/index.html"},{"revision":"2b467306d6a1fed0eaf6de7d4c8ce00d","url":"./tags/P2P/index.html"},{"revision":"f628b22b5e3018a7dbaf949401454e40","url":"./tags/RSA/index.html"},{"revision":"3e614aace0560c48e50ea45c416e6452","url":"./tags/Vercel/index.html"},{"revision":"ad830ad1600481ad083cc904cc7de267","url":"./tags/分享/index.html"},{"revision":"e3e1624f1b0d33a6a2118e1c1d032e8e","url":"./tags/加密/index.html"},{"revision":"9ec29443a5af5b277fbb612664531b7e","url":"./tags/加载动画/index.html"},{"revision":"6026c4269acd62e64eba00ac71591a37","url":"./tags/右键菜单/index.html"},{"revision":"e23689598d2dc1bbcf7dbf2ce11d12d2","url":"./tags/域名/index.html"},{"revision":"0434acaed8506c6ecd26176487a3df5d","url":"./tags/密码学/index.html"},{"revision":"89620ddcc97057dfe7512bff9be4d25d","url":"./tags/建站/index.html"},{"revision":"00f2cde9aa3219e5e0cadc6b10293998","url":"./tags/插件/index.html"},{"revision":"49fdabc8defe731108f0557c14371eea","url":"./tags/服务器/index.html"},{"revision":"0a14265e70f007286e24e8f6fd517102","url":"./tags/网页源码/index.html"},{"revision":"19ba0b8bd1ac6c3b1f230e65b2c3db08","url":"./tags/美化/index.html"},{"revision":"9e69d699b606a83ba9b20528a063ea0d","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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