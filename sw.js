const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"70b2ec5da76de5eb8c39c9716303382f","url":"./404.html"},{"revision":"42fa4790a29875b27cf541501dd0e235","url":"./about/index.html"},{"revision":"1e2e792cf2025b6c44fe272c665c0c69","url":"./archives/2022/06/index.html"},{"revision":"ad9c0ee455763e0be0d1648ba9be5558","url":"./archives/2022/07/index.html"},{"revision":"c12bc118066cd2b1647949ca38a6c239","url":"./archives/2022/08/index.html"},{"revision":"b726ae012fbaac0c5d5f5c6fcf92dd52","url":"./archives/2022/10/index.html"},{"revision":"f593c59dc52f3cc254dc019b567f4fc2","url":"./archives/2022/11/index.html"},{"revision":"4dd5872633187f1abb452f5447f30993","url":"./archives/2022/12/index.html"},{"revision":"94f03291965150bf18a565138e7d82d8","url":"./archives/2022/index.html"},{"revision":"b251b0b3b98ab94d5b35aafca2fdd55e","url":"./archives/2022/page/2/index.html"},{"revision":"9e5a4bc55018fa44c5c7ce64abc78172","url":"./archives/2023/02/index.html"},{"revision":"f4102c441762013638be23c0be446e45","url":"./archives/2023/04/index.html"},{"revision":"e62c8de4fb1b2da53f3bce959bbcf53f","url":"./archives/2023/index.html"},{"revision":"d214cc7c4b72b0bfb94f928d14238440","url":"./archives/2024/04/index.html"},{"revision":"2e620005e140998e00daed6f87780298","url":"./archives/2024/05/index.html"},{"revision":"ef9573ef62666dc44e0eeacd142908ec","url":"./archives/2024/06/index.html"},{"revision":"d61e81a9c39cdb71a92c324ea80fcc40","url":"./archives/2024/09/index.html"},{"revision":"2076bc744449ccd2467249baabc42fad","url":"./archives/2024/index.html"},{"revision":"e77b5f42d2ad5d279f021d804aaff97e","url":"./archives/index.html"},{"revision":"044ed8df560bf488ac58e881791ef29f","url":"./archives/page/2/index.html"},{"revision":"f307099a54d278a40d1305f0c8d962cf","url":"./archives/page/3/index.html"},{"revision":"3db2d09fdcf6da37f768a8021bc6d267","url":"./categories/AI/index.html"},{"revision":"7a38a7b2730be3c6e9fe7f00252d8be4","url":"./categories/Gridea/index.html"},{"revision":"6ebfa32c9b5fc1719d033ac5bcadc8b1","url":"./categories/index.html"},{"revision":"21e1799b18794eca94e8879290af31eb","url":"./categories/Vercel/index.html"},{"revision":"a7a639d32d7ac8113495ec9ced60d1c3","url":"./categories/休闲/index.html"},{"revision":"ec45e82db6d88574e71bf53bf79c2806","url":"./categories/建站/index.html"},{"revision":"a3db94d54ecaba2860bfbf1c25f8773d","url":"./categories/科普/index.html"},{"revision":"16f9b9b83e990ec82f0d03c226394e55","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"1f43d17dfe9d72169f47ceb64e1e322b","url":"./cookies-instructions/index.html"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"a790b741907433f2f7aaf4a3570e1d33","url":"./index.html"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"284079997288edd1e4362ce616bb6ebe","url":"./link/index.html"},{"revision":"b328894767f99652cb4148569018c7a7","url":"./message/index.html"},{"revision":"04732c8a9c427172a8bde93989117ca5","url":"./page/2/index.html"},{"revision":"54c9f3ea83eb6c95b6f9c3b60654d91a","url":"./page/3/index.html"},{"revision":"5381eaa4e73e48e3ef25db3e97ae5a26","url":"./post/193912eb/index.html"},{"revision":"23170ad327c36281654977605459ebd5","url":"./post/220b8380/index.html"},{"revision":"7a1f5e8bd7ad3ba3024b90293d9e3368","url":"./post/24dc856c/index.html"},{"revision":"34e2eb88522dca5b8e532a843f8b30c2","url":"./post/3082b2c6/index.html"},{"revision":"07ee2bff50925b8ae07d4acd7a056de7","url":"./post/3df9585/index.html"},{"revision":"51b57e57bda696bc0d80d5bf601d9584","url":"./post/4a17b156/index.html"},{"revision":"6c9c19d8f4f2d0376d4de1a429d92217","url":"./post/739f0a30/index.html"},{"revision":"4b91a4150412c0d585de3bd6f5de8d01","url":"./post/73fccf9a/index.html"},{"revision":"c88e4d00718d9d0a518d33f22264b35d","url":"./post/7ca5704e/index.html"},{"revision":"9f1ee516dd575dab4739e82a4a639ca1","url":"./post/7fc77154/index.html"},{"revision":"79e22143c7431abdd9d7c304f4151021","url":"./post/8097b5e3/index.html"},{"revision":"5e09fbcd57e4f6d9fd3985c6f1257644","url":"./post/8422c4dc/index.html"},{"revision":"8175bbc89fedd52466801b2219c73240","url":"./post/99c7fa1c/index.html"},{"revision":"5707bb731d076b7cc3a1aec30866feac","url":"./post/9c60e209/index.html"},{"revision":"a31013bee1173ebcc59a396d390e4300","url":"./post/ae58d2f1/index.html"},{"revision":"765d2fbc01ea168f87d75e7eace76805","url":"./post/d4550abf/index.html"},{"revision":"b73d02af24aa5c341086542a055e4355","url":"./post/d50c4d0e/index.html"},{"revision":"55cee205469982e3c88f9d50d59dc62a","url":"./post/db569493/index.html"},{"revision":"a383c550d40ce0a9ce6b914a39ae3824","url":"./post/dd83a796/index.html"},{"revision":"d10a050ad6ca7fa74d1de5288f2e07da","url":"./post/f82f332a/index.html"},{"revision":"573214246947f794204ff1d8db1fe3a3","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"7279463fca6dc21998a9d1915adbdf5e","url":"./tags/AI/index.html"},{"revision":"5c6f63778c409c3214df545d95331833","url":"./tags/Aplayer/index.html"},{"revision":"a24471ae5aaf70c20066364678b33103","url":"./tags/Bing/index.html"},{"revision":"c9e600825a1a0dbbb55f8a7b39e00c2c","url":"./tags/BUG/index.html"},{"revision":"81c5626f1457eb04c19eb1d6dd9c8528","url":"./tags/CDN/index.html"},{"revision":"dcc4cf67346d23bb636137b171b13835","url":"./tags/CMS/index.html"},{"revision":"223a31cc525251c26a3184d92d93f61d","url":"./tags/css/index.html"},{"revision":"e2aa3baa252071a0e21b3d537901e065","url":"./tags/DNS/index.html"},{"revision":"1ba1d721e8075bb8f51d84a9b7e842ec","url":"./tags/Flash/index.html"},{"revision":"212c787243d269fb75bd0396a86e261e","url":"./tags/GFW/index.html"},{"revision":"c4111c3f209054f9b78167dc2f80a7fb","url":"./tags/Gridea/index.html"},{"revision":"7081d184cd0ec16d961900b3496a6516","url":"./tags/HTML/index.html"},{"revision":"c79d5c105aa79d405428a45f596b4b94","url":"./tags/index.html"},{"revision":"bfe25f21c67c4c66feb7827c8098d2fd","url":"./tags/JavaScript/index.html"},{"revision":"5333043b8606177cab4900366b8971f6","url":"./tags/JQuery/index.html"},{"revision":"d04f3a225307eaba17369d361d9965fe","url":"./tags/MetingJS/index.html"},{"revision":"09b65e6ee79030ff8b1582ac44c2a9bd","url":"./tags/NexT/index.html"},{"revision":"538e225a1630fa6625cc070dce55fbbd","url":"./tags/P2P/index.html"},{"revision":"2b0292d375d0ebb6b85091e3af959dde","url":"./tags/RSA/index.html"},{"revision":"943750ff35b457638af10d72695c491e","url":"./tags/Vercel/index.html"},{"revision":"f203f45ee3b3f7cb263d41847cae0dda","url":"./tags/分享/index.html"},{"revision":"d112644148a0e8ddd3a1097d562078cf","url":"./tags/加密/index.html"},{"revision":"0528f9e495eeb0f3aedefd542edc42fd","url":"./tags/加载动画/index.html"},{"revision":"3b704b65dd8c736a56af16d6df8577a8","url":"./tags/右键菜单/index.html"},{"revision":"73032419f169b7bff0d37d8f8ea4c512","url":"./tags/域名/index.html"},{"revision":"56c9c3e26d75d5cb9536ab74468489de","url":"./tags/密码学/index.html"},{"revision":"2c842dad81ba2e91bcc2cf9889e50d88","url":"./tags/建站/index.html"},{"revision":"4590ba388d1460f9f09b4470dfc725dc","url":"./tags/插件/index.html"},{"revision":"16184fe8e0d02c069be5ea130057e21d","url":"./tags/服务器/index.html"},{"revision":"587cffebc2e603c4f5ca4ae2b8d8b8cb","url":"./tags/网页源码/index.html"},{"revision":"a20184fdc390d86d10f7b05a12961997","url":"./tags/美化/index.html"},{"revision":"83d49948acc0229751ec5e895a73b547","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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