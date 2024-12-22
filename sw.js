const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"1657b0f5d80bf27956aefb7532a7fd3c","url":"./404.html"},{"revision":"cd8fc5b50b1d097af6a90267ba8e4480","url":"./about/index.html"},{"revision":"f78bbb07828532a4b71f47c44e604f4e","url":"./archives/2022/06/index.html"},{"revision":"00689b3f66de822c61418f61e8eea3ef","url":"./archives/2022/07/index.html"},{"revision":"e9aae2e68fcc2e98290e09e7035364c4","url":"./archives/2022/08/index.html"},{"revision":"8242cdd443a06cc266e260c84aec071a","url":"./archives/2022/10/index.html"},{"revision":"049224b0fcbbefc1679c2d87fced0d77","url":"./archives/2022/11/index.html"},{"revision":"ceb9a198b8c012d6a72831ff03844f3c","url":"./archives/2022/12/index.html"},{"revision":"81bc868ae8b823ec6e0861535e5ee3fe","url":"./archives/2022/index.html"},{"revision":"b2f49e679200f2545eeeacf5eb4f4aed","url":"./archives/2022/page/2/index.html"},{"revision":"bc5329abb640036ca2fda48dbbe4d619","url":"./archives/2023/02/index.html"},{"revision":"320821bc79dd1f9355ffb9baac148308","url":"./archives/2023/04/index.html"},{"revision":"581b044dc8861b3bcbd0161ae5f15489","url":"./archives/2023/index.html"},{"revision":"ada7f7da15013beeb4bdd9eba07d97a9","url":"./archives/2024/04/index.html"},{"revision":"a1e143e08d95664aa2405f426e1e9f6a","url":"./archives/2024/05/index.html"},{"revision":"9792fe86044b2882535548627cec5275","url":"./archives/2024/06/index.html"},{"revision":"4bc933768a2784e5db1a3dcdd6283f25","url":"./archives/2024/09/index.html"},{"revision":"ed2d9ee8bed358556359378dcb58ea63","url":"./archives/2024/index.html"},{"revision":"e59cf8eacb327cd17507c5981751344e","url":"./archives/index.html"},{"revision":"43524e3cab599f2c74d0cae15349525e","url":"./archives/page/2/index.html"},{"revision":"35ede4a1d4a28f4c6af0437887aecc7f","url":"./archives/page/3/index.html"},{"revision":"0053275d69d377b71750c0cf251d4f7a","url":"./categories/AI/index.html"},{"revision":"1af2262c95f12897e7eb867bf28c2caf","url":"./categories/Gridea/index.html"},{"revision":"fade3a242a9f334f03235bc938f1f302","url":"./categories/index.html"},{"revision":"e93e2bec3cd28496a8d4dce7507fb4c0","url":"./categories/Vercel/index.html"},{"revision":"4773947105632d9649238e4f5523df80","url":"./categories/休闲/index.html"},{"revision":"9b8cb1b1fefed661edf36ddf9c4cb237","url":"./categories/建站/index.html"},{"revision":"e44ce36ff55e175772dbd05e83d0fb7e","url":"./categories/科普/index.html"},{"revision":"e5d529bf984e61b36433e0f9c2484742","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"87518065427a64d50661174392cc2af5","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"726e973550de916cdf364d2e727a07f7","url":"./go/index.html"},{"revision":"92e27f6a58330aa8d97626f0c14dd6a4","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"a55ba263ada7eca1f4f51497f67ca3ac","url":"./link/index.html"},{"revision":"d9b44ce79e01f2e02902d073abe18fa3","url":"./message/index.html"},{"revision":"cf81e6636352e952caeb954bb148fca8","url":"./page/2/index.html"},{"revision":"ded9a1a315dbe18f74404d52579e7a18","url":"./page/3/index.html"},{"revision":"33fa994fc113f3a275d2b729bc1429cf","url":"./post/193912eb/index.html"},{"revision":"a81e29c7e51221b4c34cbec3189ef3c9","url":"./post/220b8380/index.html"},{"revision":"c0f38b219cdd712cf028332457bce7ac","url":"./post/24dc856c/index.html"},{"revision":"a42d26684885c1973dd25786a1d86cf8","url":"./post/3082b2c6/index.html"},{"revision":"c542234377f43444a6b2fe0d180d18ee","url":"./post/3df9585/index.html"},{"revision":"e02a5364889604928427d23c805eb2b5","url":"./post/4a17b156/index.html"},{"revision":"415efcf3c4ebcdca557f3842d16a1598","url":"./post/739f0a30/index.html"},{"revision":"cba83b585b0edd8ee8751a6cf5d6ba13","url":"./post/73fccf9a/index.html"},{"revision":"67f15ee61a93f6889fe0bbfda84fa77d","url":"./post/7ca5704e/index.html"},{"revision":"bab49e20cd201f4baa38535711155386","url":"./post/7fc77154/index.html"},{"revision":"8a62fe149ef84e9dcd31546292f84612","url":"./post/8097b5e3/index.html"},{"revision":"be9f422288adc51270dfc68e2ba7b919","url":"./post/8422c4dc/index.html"},{"revision":"844334a6dc4a82098fb976f78bdc0da9","url":"./post/99c7fa1c/index.html"},{"revision":"fb447e50774e9a8abad71be498ce4c96","url":"./post/9c60e209/index.html"},{"revision":"d44241b3dd3efbd73fa75e8fb42ac8b0","url":"./post/ae58d2f1/index.html"},{"revision":"ec5e2fbcd3dbe998c48c01b0cd808bdd","url":"./post/d4550abf/index.html"},{"revision":"1827c1df4251813f6d93f43164d31ffc","url":"./post/d50c4d0e/index.html"},{"revision":"69fd4c1bfc4d6ba66665213b0792a70a","url":"./post/db569493/index.html"},{"revision":"6c8d34e228af55876ebfbe4459942d03","url":"./post/dd83a796/index.html"},{"revision":"683c2cedae3e4e005771b3b7a1591e0b","url":"./post/f82f332a/index.html"},{"revision":"9a7ae7e2d0c7353daca5b260f7961ccd","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"dae6b2d8f14219f48c2ad3b2399aecda","url":"./tags/AI/index.html"},{"revision":"e22389473a69ed5b4e6e0f91d665186e","url":"./tags/Aplayer/index.html"},{"revision":"8ac0ddfac2a623109699165cd6267d8c","url":"./tags/Bing/index.html"},{"revision":"db8b15e00ac4b0073c1f28611363ec4d","url":"./tags/BUG/index.html"},{"revision":"7718befc33f1d8e60c2d82e77cfa85e2","url":"./tags/CDN/index.html"},{"revision":"e707c8bc5678e8f9454fd96e1d128349","url":"./tags/CMS/index.html"},{"revision":"91c77b9dfe95e4526f37ac9497c6f100","url":"./tags/css/index.html"},{"revision":"d9f3c288547941d64d22cc940cb41379","url":"./tags/DNS/index.html"},{"revision":"fa79ae22a0d4d29cf953a060a222e725","url":"./tags/Flash/index.html"},{"revision":"1615dea7b585ed6782c5c00b5e782b05","url":"./tags/GFW/index.html"},{"revision":"93248759989d1708f7317d5a98a64f67","url":"./tags/Gridea/index.html"},{"revision":"05af4a91e9496358a6d7213fb3c749b3","url":"./tags/HTML/index.html"},{"revision":"ad5249a2cce34d495e499475f39b79b4","url":"./tags/index.html"},{"revision":"695205ac9fc873513e05ce1c276bcf89","url":"./tags/JavaScript/index.html"},{"revision":"b75f86546d955160012ff6e0b2c090f0","url":"./tags/JQuery/index.html"},{"revision":"e4263a93850fbd430eb00e04da5800f4","url":"./tags/MetingJS/index.html"},{"revision":"550544990fe8c79f95dd3b52da356eb9","url":"./tags/NexT/index.html"},{"revision":"ea2d6ee630ddc0aa2c5498dd59878b86","url":"./tags/P2P/index.html"},{"revision":"64b3a98208a388e5daf1b171ee7146ef","url":"./tags/RSA/index.html"},{"revision":"66654b7c36d4a4d24e3d567707071397","url":"./tags/Vercel/index.html"},{"revision":"1500cbf2a475d2225a59f3b420f83c82","url":"./tags/分享/index.html"},{"revision":"257b232bfd103400db1e45f52b30dc09","url":"./tags/加密/index.html"},{"revision":"a86e254350b8ca4171057ffeac3c68e4","url":"./tags/加载动画/index.html"},{"revision":"bf3cbab86eefdfee831557145d2a0f8d","url":"./tags/右键菜单/index.html"},{"revision":"0526c8c90bcb3c88accc069be365bc8d","url":"./tags/域名/index.html"},{"revision":"b9a2d3a85c91fa1d4521cfb3f2e3452c","url":"./tags/密码学/index.html"},{"revision":"63c718a1f89a0d179b2448eb7a99672f","url":"./tags/建站/index.html"},{"revision":"bcb049fba639d9ec9abaf69c35f1d25c","url":"./tags/插件/index.html"},{"revision":"e5f751328f905c9ae3747e0161b3e92c","url":"./tags/服务器/index.html"},{"revision":"5c09a8c3297b5066f88333d7a6e07eac","url":"./tags/网页源码/index.html"},{"revision":"dece40eaa329ae5476dd39760b935e37","url":"./tags/美化/index.html"},{"revision":"bfbeb1a1e9426f8d43cbf187e0f350b0","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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