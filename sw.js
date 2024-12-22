const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"35c32a132a31fa464185902b95ccd888","url":"./404.html"},{"revision":"bd928a1ad3ab6db9be44713601bc8be4","url":"./about/index.html"},{"revision":"a6b79c3374cbde700aee33382525e295","url":"./archives/2022/06/index.html"},{"revision":"8fc8048cc3c37eb04ed53c4143ca9899","url":"./archives/2022/07/index.html"},{"revision":"1a01edc48844337a25404c79ed29e8b6","url":"./archives/2022/08/index.html"},{"revision":"a595b47b576d77e57f4943742926335f","url":"./archives/2022/10/index.html"},{"revision":"593ab8a158721ff65045fc5c59444f90","url":"./archives/2022/11/index.html"},{"revision":"bd36bfbf0b968265e379238d2e8074bb","url":"./archives/2022/12/index.html"},{"revision":"e85e9d9d163282c6ab12567d51b4c926","url":"./archives/2022/index.html"},{"revision":"d1965149fce9c44c024013e9dedecd19","url":"./archives/2022/page/2/index.html"},{"revision":"7fc9e53a6275ad32bdda4606c2d880a9","url":"./archives/2023/02/index.html"},{"revision":"fc1e4e333126952af81e5162fc6ebd62","url":"./archives/2023/04/index.html"},{"revision":"85dd2c058bec07677a31fc782298f15d","url":"./archives/2023/index.html"},{"revision":"608f6987288c4092cdbd9be97887474a","url":"./archives/2024/04/index.html"},{"revision":"f4592843b1b3566a059b1478b99d4a2a","url":"./archives/2024/05/index.html"},{"revision":"8b77e0ff936aa383f120623c74e8f9f5","url":"./archives/2024/06/index.html"},{"revision":"47dcaa488f207ac4c4bbd3b4f8e86bcd","url":"./archives/2024/09/index.html"},{"revision":"7ada89dd2ca1df29e1c82af8105dc503","url":"./archives/2024/index.html"},{"revision":"e9806418fc497c42f26f90c65bb77a98","url":"./archives/index.html"},{"revision":"dff653c21e8ab10a8ca61dadaae962e0","url":"./archives/page/2/index.html"},{"revision":"0dec2c7025c623c327007e576244f70c","url":"./archives/page/3/index.html"},{"revision":"079cde07fa640d0a6592c7520566b9de","url":"./categories/AI/index.html"},{"revision":"b2ffe52a654d68378e3e485d905fd8a7","url":"./categories/Gridea/index.html"},{"revision":"8f9fc79edca4fa3d3e1f11683e0a0806","url":"./categories/index.html"},{"revision":"946c605dfbd57a42e3077ed8f92e17fd","url":"./categories/Vercel/index.html"},{"revision":"c6753187ab44844950e9f7b9d999e86b","url":"./categories/休闲/index.html"},{"revision":"da76e6e516791dcffdab6a7b0ac0047d","url":"./categories/建站/index.html"},{"revision":"7921abc52cf5355dfe8a24a30740d4b6","url":"./categories/科普/index.html"},{"revision":"64e1650d2afefa877963dd6bd5496b3e","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"7ac1ae27234afdd7dea2cd768ece0dcd","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"726e973550de916cdf364d2e727a07f7","url":"./go/index.html"},{"revision":"a4d47d780726ee891a888f0dc41016b6","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"43b765c2e79ef51fa1cfc8da01e53f57","url":"./link/index.html"},{"revision":"9835d7b318a2503fc7d17009d3595cbe","url":"./message/index.html"},{"revision":"a4fd45bb33d204a2d72e8f94948c0ce4","url":"./page/2/index.html"},{"revision":"d909101faee29ec9d65bf70ca8069ee2","url":"./page/3/index.html"},{"revision":"6bbcf90b3a5efae794ff8c31b591371d","url":"./post/193912eb/index.html"},{"revision":"04142271c51ca3ac21598bdc89e5f35e","url":"./post/220b8380/index.html"},{"revision":"274aa18655e9dbccc0668ffb8f273974","url":"./post/24dc856c/index.html"},{"revision":"1872262035657608bddba34d48ce039c","url":"./post/3082b2c6/index.html"},{"revision":"34a7a76204f404f894a94d28124a9bcd","url":"./post/3df9585/index.html"},{"revision":"255a6727bd17cf7f244995e3bd74d27c","url":"./post/4a17b156/index.html"},{"revision":"7bbd62f24426f2c1152f0b872ab1ca73","url":"./post/739f0a30/index.html"},{"revision":"9234f4c89a0af58ac5770eb66e74ee60","url":"./post/73fccf9a/index.html"},{"revision":"3cd8d6389c040d39dfe26efe60364cca","url":"./post/7ca5704e/index.html"},{"revision":"ed54a5bc263774c407657f0c7629123f","url":"./post/7fc77154/index.html"},{"revision":"db115dc0ec14a045d4c23b3b04d132f5","url":"./post/8097b5e3/index.html"},{"revision":"b9a541cb63adee2406f4ef4c02ed625a","url":"./post/8422c4dc/index.html"},{"revision":"1977e878acb38c2895d8a47ab23983b3","url":"./post/99c7fa1c/index.html"},{"revision":"725324c8a0c46466ed546070c4351507","url":"./post/9c60e209/index.html"},{"revision":"029e1c9b8d2ae002213578a06584c1b8","url":"./post/ae58d2f1/index.html"},{"revision":"1ef0b47f65180d123f493ca4db4ff20c","url":"./post/d4550abf/index.html"},{"revision":"8c648d9b5cb852e012046eb12d91c6bf","url":"./post/d50c4d0e/index.html"},{"revision":"db1893a4aa36194f691350bdc83c97c8","url":"./post/db569493/index.html"},{"revision":"a0b38cad1be546f83367a677ec8d809f","url":"./post/dd83a796/index.html"},{"revision":"39025570b2e970bf4a1893a582f24229","url":"./post/f82f332a/index.html"},{"revision":"b4a5268baec87645af10f8a3f899d7d4","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"2ba55b578c86bf35614c52eec8b643c2","url":"./tags/AI/index.html"},{"revision":"b818c118c7a74a7c373411872647be3b","url":"./tags/Aplayer/index.html"},{"revision":"87be49782cb2fd7d01f7e84f699c8d09","url":"./tags/Bing/index.html"},{"revision":"fd540391881467afba6c6cf5437eb28c","url":"./tags/BUG/index.html"},{"revision":"bcb2b429d2e06e238806c53613425057","url":"./tags/CDN/index.html"},{"revision":"8a1e129ce912b87194cb75e2aad2f661","url":"./tags/CMS/index.html"},{"revision":"12578ddc83cc353587d6d084eccc15a3","url":"./tags/css/index.html"},{"revision":"bc270be16acff1eacf92048a5a0e698f","url":"./tags/DNS/index.html"},{"revision":"f89018c2eec4a050e900798ac9766706","url":"./tags/Flash/index.html"},{"revision":"a5b526c3e2066d9b600e7535010f3b1b","url":"./tags/GFW/index.html"},{"revision":"80ef4c69e4d2d7a3f6a58647d7c0b278","url":"./tags/Gridea/index.html"},{"revision":"524a01b236b9f104b000d925f660e24c","url":"./tags/HTML/index.html"},{"revision":"49c683e0b1a563c30ed10c8e00a9700d","url":"./tags/index.html"},{"revision":"cc15bc8380f4e9dafe2b37a64aee4499","url":"./tags/JavaScript/index.html"},{"revision":"e42ca5cdc52e10cb7c094f5d28d56aa5","url":"./tags/JQuery/index.html"},{"revision":"99327de85e733e3ed42a2844f7e4dbdc","url":"./tags/MetingJS/index.html"},{"revision":"e4858db8c1bebe26328170db174c0f19","url":"./tags/NexT/index.html"},{"revision":"4c8a8597b035729f5f5406d890544628","url":"./tags/P2P/index.html"},{"revision":"549ad2fd833e165975e1fa0a1ba7ca2c","url":"./tags/RSA/index.html"},{"revision":"b2248dae0e181251aca01c0193d72012","url":"./tags/Vercel/index.html"},{"revision":"4676991f6291e868899906dfcda9a3d2","url":"./tags/分享/index.html"},{"revision":"414953fbd77b75afdc515e1fad8c5158","url":"./tags/加密/index.html"},{"revision":"350e4386bb5a37b61d4e3c6be33c21ce","url":"./tags/加载动画/index.html"},{"revision":"a2827bc0bc933244a136bdae7dd6fe55","url":"./tags/右键菜单/index.html"},{"revision":"fa67e8d90156afaf30fa93e0174f651c","url":"./tags/域名/index.html"},{"revision":"556b9c84f0cf7179242433786de81584","url":"./tags/密码学/index.html"},{"revision":"b8ba3633e3e53a801bfa24576412427f","url":"./tags/建站/index.html"},{"revision":"9cfd5764788b0b7c994bae93af169beb","url":"./tags/插件/index.html"},{"revision":"66fa73ed21332e0092f8032356a604ac","url":"./tags/服务器/index.html"},{"revision":"83da8909bf1f176242e30bcd3450665b","url":"./tags/网页源码/index.html"},{"revision":"cdada5893be80cb250d23df25da5caa6","url":"./tags/美化/index.html"},{"revision":"15d0e4a7748a8cdbe0edc7d1383ec842","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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