const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"d89badfad463524c3d6574865ff8c710","url":"./404.html"},{"revision":"7df0e07b5431537504a5edad82fa02e3","url":"./about/index.html"},{"revision":"76ac25e2555d3b8d97f6f1432ebc4a58","url":"./archives/2022/06/index.html"},{"revision":"03336881373f8de077774c78d115a2db","url":"./archives/2022/07/index.html"},{"revision":"25d02bae9047f4cd37a899ab30d6011d","url":"./archives/2022/08/index.html"},{"revision":"b255badeab7820c8a18ba293b060b3fc","url":"./archives/2022/10/index.html"},{"revision":"b23839d220576da5b68249bcaf1feec4","url":"./archives/2022/11/index.html"},{"revision":"a59b9c78d538c8fd8f6a886a56228cb0","url":"./archives/2022/12/index.html"},{"revision":"b942650f5fd647ac2f06909bed383c5b","url":"./archives/2022/index.html"},{"revision":"dd0725d465fbf650f9192393ce195efa","url":"./archives/2022/page/2/index.html"},{"revision":"1e30cd7b5f3ef200405376620f3c8184","url":"./archives/2023/02/index.html"},{"revision":"19ce6e05613658d0e9b171b5b9d1e21f","url":"./archives/2023/04/index.html"},{"revision":"586998e7cd4d024d39261828c8bb64be","url":"./archives/2023/index.html"},{"revision":"692b81712403f825f63b782fbe1bf9bb","url":"./archives/2024/04/index.html"},{"revision":"c728216e67023b065a8e47751540bcf6","url":"./archives/2024/05/index.html"},{"revision":"d1823477b8a597ae29515bdbcd6f62fe","url":"./archives/2024/index.html"},{"revision":"b9ca14840ae8c066eeab71de0abdfca4","url":"./archives/index.html"},{"revision":"bae45b8f5b5146ac6df51fa8a736a3d0","url":"./archives/page/2/index.html"},{"revision":"79c83c2434ffda8b3341f86f6d517130","url":"./categories/AI/index.html"},{"revision":"f3cbaf6f09cea6818c26f38d65a2b19c","url":"./categories/Gridea/index.html"},{"revision":"25dfd972ba0600c41b2ab2d2c59cb0fe","url":"./categories/index.html"},{"revision":"1e23b53e7a289f7384dd598f5523f9be","url":"./categories/Vercel/index.html"},{"revision":"7ceca3802cf01080ecab10fc75aa72b5","url":"./categories/休闲/index.html"},{"revision":"91a7987501473bfe2486bdfbc132aed9","url":"./categories/建站/index.html"},{"revision":"db39ea6b4e44c5e66e676dd67b1b0669","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"4b839885b57bda3287a0d1d5385018a5","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"ca409985391bdc52d2a90be2b84d0405","url":"./go/index.html"},{"revision":"e989f0df5218e8254cf01b39b788821b","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"3d85c0186662ba831aa247306134a488","url":"./link/index.html"},{"revision":"04a421ca82d99a0563ae20d51ec2d64d","url":"./message/index.html"},{"revision":"b919b5bee8b5cdb41d7dd7a47b96e270","url":"./page/2/index.html"},{"revision":"7790468c79ec9c1f93ac6b26322d60a6","url":"./post/193912eb/index.html"},{"revision":"8c184873d3b8e4739aab1f6ac4889774","url":"./post/220b8380/index.html"},{"revision":"921784add241e8c674194ccda0ae279c","url":"./post/24dc856c/index.html"},{"revision":"472e7d2ef3fd0a46f4c25bb2a8faa118","url":"./post/3082b2c6/index.html"},{"revision":"f12f22ff59ef7c2dba0c0a23154eb371","url":"./post/3df9585/index.html"},{"revision":"a8039ffbf3fd6bd018847d8a5a254991","url":"./post/4a17b156/index.html"},{"revision":"624d64ef5206a6d4a47ced44557eaac2","url":"./post/739f0a30/index.html"},{"revision":"060f8837ce33f0530c4bfe34b851bb22","url":"./post/73fccf9a/index.html"},{"revision":"f6fec3cde3a497c18f9ca283e75f04df","url":"./post/7ca5704e/index.html"},{"revision":"b5ccf040e93211736a987e2b5585d919","url":"./post/7fc77154/index.html"},{"revision":"a2ee2f45428b2771caa3d7d6a712c443","url":"./post/8422c4dc/index.html"},{"revision":"635a3a46d2b9b385b0d6a7f22804c466","url":"./post/99c7fa1c/index.html"},{"revision":"182972281c25bbac29129bddbb1e6147","url":"./post/9c60e209/index.html"},{"revision":"2461f54dc06e615f19e9069f350641be","url":"./post/ae58d2f1/index.html"},{"revision":"4aca3c2710a92bdc47416096f42a6eb6","url":"./post/d4550abf/index.html"},{"revision":"72d4628143a92772f9846655eb847310","url":"./post/d50c4d0e/index.html"},{"revision":"32f754728c0a96e0be5865e95ca2e885","url":"./post/db569493/index.html"},{"revision":"44edce6d9fcadb1476b38aab11f2810e","url":"./post/dd83a796/index.html"},{"revision":"30acbe9dbd76a4269e93d15f4ab685b1","url":"./post/f82f332a/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"ab134e85d1a69ff5d64c74519e897384","url":"./tags/AI/index.html"},{"revision":"374a36198728edd3931c975605d20623","url":"./tags/Aplayer/index.html"},{"revision":"69e713898f232034cfa04895358d87d0","url":"./tags/Bing/index.html"},{"revision":"048abdaf2f7f96c1b0a74cfbe0e9127d","url":"./tags/BUG/index.html"},{"revision":"8ee8c168ebdabe134b6e6186b66b1798","url":"./tags/CDN/index.html"},{"revision":"bd4edf876927819614c2aa2f17180a8b","url":"./tags/CMS/index.html"},{"revision":"cf2c503573ae9a40766ccce6c8cc308c","url":"./tags/css/index.html"},{"revision":"965b536401debf8ea9e24175d14c01b1","url":"./tags/DNS/index.html"},{"revision":"28b10f028e22dabd9d85351cb9f49430","url":"./tags/Flash/index.html"},{"revision":"1fdaf430c9c16b9a33cd56930aa7a22a","url":"./tags/GFW/index.html"},{"revision":"c291f0c651ada8e663e057c91727d2ea","url":"./tags/Gridea/index.html"},{"revision":"3ba89430a7b271f92ccf2505299ab9ae","url":"./tags/HTML/index.html"},{"revision":"4e513d45f504707cea3ab223269e858a","url":"./tags/index.html"},{"revision":"cb49c765fdb8c6586b4f98fa21427b3d","url":"./tags/JavaScript/index.html"},{"revision":"1bf0f4626a6a83f07d2f7c74656e6e30","url":"./tags/JQuery/index.html"},{"revision":"7e3cd5bf0ed8942a6c16c57120eb8c87","url":"./tags/MetingJS/index.html"},{"revision":"c7313ed1ed68a8986935dbe8a20d6892","url":"./tags/NexT/index.html"},{"revision":"708cb181603f7691bc7a5896bde93ded","url":"./tags/Vercel/index.html"},{"revision":"de3b23fdc338e7b94202a073cd0efe83","url":"./tags/分享/index.html"},{"revision":"04375618748cdd2805bfc12e957bdff4","url":"./tags/加载动画/index.html"},{"revision":"423af50c103ebc0bbd4a1235ceeed919","url":"./tags/右键菜单/index.html"},{"revision":"f7ca4c5fda8b1fb5e448727c6a8dca54","url":"./tags/域名/index.html"},{"revision":"d3c4eeb85c823c2c6df2350575cf0de4","url":"./tags/建站/index.html"},{"revision":"7b80038f9bea3ff67bab7ed34ebb3814","url":"./tags/插件/index.html"},{"revision":"9e899ee171ad354e9b69efb225d24038","url":"./tags/服务器/index.html"},{"revision":"3ccb3527426cbdfe11efd75e89c5f205","url":"./tags/网页源码/index.html"},{"revision":"336bf63e1451f5b48f306fd708eed7d3","url":"./tags/美化/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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