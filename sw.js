const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"dc8333e32e8dae616cd51d3bde1d534d","url":"./404.html"},{"revision":"02c30dfb6d7e68ac99b5e9a4ca1a44db","url":"./about/index.html"},{"revision":"fe339e4b76b0d11dbd2c6ac598ac5f03","url":"./archives/2022/06/index.html"},{"revision":"b7101cde263a275576115bfa40c457f9","url":"./archives/2022/07/index.html"},{"revision":"91666dce952bac5de3ea1460ef4c5f75","url":"./archives/2022/08/index.html"},{"revision":"1dfae35cafe5e093a10d5606065b1c38","url":"./archives/2022/10/index.html"},{"revision":"0014121732e74ba5e3fec2ed105dcd08","url":"./archives/2022/11/index.html"},{"revision":"4fbc7d38631cdb1ae536e77ddba7bc46","url":"./archives/2022/12/index.html"},{"revision":"bee17de2d2ec7046066eb3bae34f3919","url":"./archives/2022/index.html"},{"revision":"210f8743b8ac421fea4890b01bff679b","url":"./archives/2022/page/2/index.html"},{"revision":"b40c77bca6b75916cb09552c90f1a902","url":"./archives/2023/02/index.html"},{"revision":"8b0ba8acc810b541a0578195b8c7c458","url":"./archives/2023/04/index.html"},{"revision":"10f66d8d936bf1cf0af757f46bb00fb3","url":"./archives/2023/index.html"},{"revision":"80aee7ba8ff114e96c0b5103160862c9","url":"./archives/2024/04/index.html"},{"revision":"58bf93a260967d4d81544f9066a06d67","url":"./archives/2024/index.html"},{"revision":"e0903c89ce5898cf689402cc28640411","url":"./archives/index.html"},{"revision":"8705f899aa5ad2ce7d1f1c452738ab16","url":"./archives/page/2/index.html"},{"revision":"ab5b7afb03074f5aef408add20944755","url":"./categories/AI/index.html"},{"revision":"3d0d8ac185a826c7035244a03daaf626","url":"./categories/Gridea/index.html"},{"revision":"b66836b29dd8c91ba7dc0444830a13c0","url":"./categories/index.html"},{"revision":"a36a9112a7f7726c97ebd158d9e67310","url":"./categories/Vercel/index.html"},{"revision":"8ebdb09b4f07b079a8ad6b276f3fe68a","url":"./categories/休闲/index.html"},{"revision":"fb6072452f8b72f2db2deca7e8175504","url":"./categories/建站/index.html"},{"revision":"16927648b131d787db61887a7b742fcb","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"8c9bac74bd45848b2e26958e299dbb70","url":"./cookies-instructions/index.html"},{"revision":"205c3f8ce8bcb56d669a1c6ed35878e4","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"a039682de79e768c90e6266971910743","url":"./go/index.html"},{"revision":"64bd3111ce82fc61cca50547af34d742","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"35da209c863be9a2e95636987adc3f56","url":"./link/index.html"},{"revision":"71dd7d27475fe909cce3e73c93975405","url":"./message/index.html"},{"revision":"77e9cc53f92e48419a933fcde44ee87d","url":"./page/2/index.html"},{"revision":"399dd32c6910f695c86a4daeb0439c96","url":"./post/193912eb/index.html"},{"revision":"35afd37d9da92ff6b662d8f2addca8f2","url":"./post/220b8380/index.html"},{"revision":"db53d842417aa6b90f997eefbae8b071","url":"./post/24dc856c/index.html"},{"revision":"5ddb4bec29a797691e486df05e1fa8eb","url":"./post/3082b2c6/index.html"},{"revision":"84200cc08b420119d6a2b3c667ec7e20","url":"./post/3df9585/index.html"},{"revision":"a63d50e4e347e4d171c9871fea4bc8ef","url":"./post/4a17b156/index.html"},{"revision":"86bda4aaadf80752b0e2fc54687f8e74","url":"./post/739f0a30/index.html"},{"revision":"32408caedd6a50f281cbc0b9e79c5bac","url":"./post/73fccf9a/index.html"},{"revision":"cdcd4f2d83a800f5323554392386af4b","url":"./post/7ca5704e/index.html"},{"revision":"b9f6b41e4ef14e968e1c8d5cd6b4fad7","url":"./post/7fc77154/index.html"},{"revision":"ac5563bb07a3ab96207904addc917aaa","url":"./post/8422c4dc/index.html"},{"revision":"ccd27d36a937f51686dbc16f621a7d0c","url":"./post/99c7fa1c/index.html"},{"revision":"8d28a5db3701237e29ca49920c8d3134","url":"./post/9c60e209/index.html"},{"revision":"b0be14148bd83c8529996f436a1092b7","url":"./post/d4550abf/index.html"},{"revision":"41062bd1e0df7362109eae941068b15d","url":"./post/d50c4d0e/index.html"},{"revision":"250cd910013310c6de729ace4002acf8","url":"./post/db569493/index.html"},{"revision":"9b71eaaccdb257b1c79c539ae3ef7292","url":"./post/dd83a796/index.html"},{"revision":"031ae152a7dfa72578367344055e6af7","url":"./post/f82f332a/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"8e630ea4be0ddc3f59c0d4083c1b4f9d","url":"./tags/AI/index.html"},{"revision":"3228706c938858ef5fa10a592e81fa0a","url":"./tags/Aplayer/index.html"},{"revision":"c56d6964445a45d3cb40c222cc37eed8","url":"./tags/Bing/index.html"},{"revision":"4e50831b002c56c0136af2547e4c4e07","url":"./tags/BUG/index.html"},{"revision":"fbeb78f7ed6db3fda91c7e7af981ad84","url":"./tags/CMS/index.html"},{"revision":"88955d1cc685d4d4b4fa292454a897ce","url":"./tags/css/index.html"},{"revision":"e27e4b5fbee62aa41eacd433b63806da","url":"./tags/DNS/index.html"},{"revision":"d33dd2165a571b01a1ad48bfe8e9345c","url":"./tags/Flash/index.html"},{"revision":"8fd34c68fe43c4d33186a6be7a9c8f8e","url":"./tags/GFW/index.html"},{"revision":"c374919fae6eba138a8e1b1f5b6599ec","url":"./tags/Gridea/index.html"},{"revision":"f4925158f06cf53e851420589fcceb4d","url":"./tags/HTML/index.html"},{"revision":"ac255740dacaf4f9bef37ea0a9d61b83","url":"./tags/index.html"},{"revision":"2f00e6b8e1a70acbe677f720730047d0","url":"./tags/JavaScript/index.html"},{"revision":"51dd14f22e1e24843eec597e0f8d13d1","url":"./tags/JQuery/index.html"},{"revision":"2d3b7b6b6484ea5e16462a4e2d40accf","url":"./tags/MetingJS/index.html"},{"revision":"ce6497152e328d4ec2a3ca5b36c44c2b","url":"./tags/NexT/index.html"},{"revision":"383f8073d672af6b228a7fdf5e8c6f8a","url":"./tags/Vercel/index.html"},{"revision":"01a4e42a7e8a9350257fe30f77b50226","url":"./tags/分享/index.html"},{"revision":"93d3214604d73aee79c02d2ae5356c3b","url":"./tags/加载动画/index.html"},{"revision":"08011f6639dd98a3f2f63a07b6d99774","url":"./tags/右键菜单/index.html"},{"revision":"ac7240ca1c0fa2ee0d4b7731ad180917","url":"./tags/域名/index.html"},{"revision":"3ebf14b58c66a9ae29df8c7cbf8fc28f","url":"./tags/建站/index.html"},{"revision":"08b2dd835f268d1a9a4bf325ab3722a5","url":"./tags/插件/index.html"},{"revision":"264980e6ae558e53054a4fd66978007b","url":"./tags/服务器/index.html"},{"revision":"cf86eb1d875dcae8674999335a8a6d05","url":"./tags/网页源码/index.html"},{"revision":"5dfc2c63707caecb4cb045cddaa3557a","url":"./tags/美化/index.html"}]);
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