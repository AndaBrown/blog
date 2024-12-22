const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"28676c0f59f4d291b6879a23abcaddd0","url":"./404.html"},{"revision":"2a9fc7ff66a57a654076d6fc7324fcad","url":"./about/index.html"},{"revision":"9a0c81343edaaae831b5f3787d890edb","url":"./archives/2022/06/index.html"},{"revision":"a5d23abcea19ff720f414ca6ad941888","url":"./archives/2022/07/index.html"},{"revision":"261f7fb1c7a2af589262fdc2dd9409a4","url":"./archives/2022/08/index.html"},{"revision":"8ec5355ee64e4ad225aa32c5de90bd2f","url":"./archives/2022/10/index.html"},{"revision":"18ded8fd6226969749a7580bfe81ced8","url":"./archives/2022/11/index.html"},{"revision":"d740cf98bfcc7a14afa34120a4bda1a4","url":"./archives/2022/12/index.html"},{"revision":"15daabc2be7793a0b546367136445333","url":"./archives/2022/index.html"},{"revision":"3bbce434e57dd4afca921f2cd44e2a75","url":"./archives/2022/page/2/index.html"},{"revision":"df25a28501515bf285d3f012d1c84140","url":"./archives/2023/02/index.html"},{"revision":"3e2e739da9f87fa1328e1b84368e3acc","url":"./archives/2023/04/index.html"},{"revision":"08abf5663e5ea97a5a8235ad2d3fb367","url":"./archives/2023/index.html"},{"revision":"5f900ef8df17419a5b38b9e6b78f5ad9","url":"./archives/2024/04/index.html"},{"revision":"484515021d5e28d4a66827535dcb3029","url":"./archives/2024/05/index.html"},{"revision":"38c6f8d46defbfa1f6df683844c821af","url":"./archives/2024/06/index.html"},{"revision":"dbfbe19a2fa01fc07c71ae84f2bd41f1","url":"./archives/2024/09/index.html"},{"revision":"4f73c6c31f29628763548cdb1333f270","url":"./archives/2024/index.html"},{"revision":"caa794d699372c60ccaa9960b7109042","url":"./archives/index.html"},{"revision":"5643765f9c804b2d15b497d59b2da0a3","url":"./archives/page/2/index.html"},{"revision":"59a7566153d76b99cdac1844c8f8bd57","url":"./archives/page/3/index.html"},{"revision":"26ed6701b729b0ee27ffc53ebea030b8","url":"./categories/AI/index.html"},{"revision":"997de730b76610e7bea6ae1b4da8f948","url":"./categories/Gridea/index.html"},{"revision":"e7edcec7f39f8ad891321fbba45f971f","url":"./categories/index.html"},{"revision":"355e0546b1ca207a584f3eef0296d11e","url":"./categories/Vercel/index.html"},{"revision":"a03694dcad693df1e1c95b47c9927537","url":"./categories/休闲/index.html"},{"revision":"aea5cba87b05f7d9d0bea24802126da0","url":"./categories/建站/index.html"},{"revision":"e92cf07240a7f8cad8d6fcf7ccfc63bf","url":"./categories/科普/index.html"},{"revision":"497aa02c1e795f335d3b72308855d081","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"5c7dff9c8bcffb6e5848bb5ff7f81482","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"726e973550de916cdf364d2e727a07f7","url":"./go/index.html"},{"revision":"f90d9ee04e64f92dca4b5b160b87f356","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"ee8f7ba6ccad10d377344501ca32df99","url":"./link/index.html"},{"revision":"e7b8367b2ba5a00f83121d3788b45174","url":"./message/index.html"},{"revision":"acbc43d134108736c286eb57f7851fc6","url":"./page/2/index.html"},{"revision":"7d1a1930f0fa41d15b271cc12ca2874a","url":"./page/3/index.html"},{"revision":"6bbcf90b3a5efae794ff8c31b591371d","url":"./post/193912eb/index.html"},{"revision":"04142271c51ca3ac21598bdc89e5f35e","url":"./post/220b8380/index.html"},{"revision":"274aa18655e9dbccc0668ffb8f273974","url":"./post/24dc856c/index.html"},{"revision":"1872262035657608bddba34d48ce039c","url":"./post/3082b2c6/index.html"},{"revision":"34a7a76204f404f894a94d28124a9bcd","url":"./post/3df9585/index.html"},{"revision":"255a6727bd17cf7f244995e3bd74d27c","url":"./post/4a17b156/index.html"},{"revision":"7bbd62f24426f2c1152f0b872ab1ca73","url":"./post/739f0a30/index.html"},{"revision":"9234f4c89a0af58ac5770eb66e74ee60","url":"./post/73fccf9a/index.html"},{"revision":"3cd8d6389c040d39dfe26efe60364cca","url":"./post/7ca5704e/index.html"},{"revision":"ed54a5bc263774c407657f0c7629123f","url":"./post/7fc77154/index.html"},{"revision":"db115dc0ec14a045d4c23b3b04d132f5","url":"./post/8097b5e3/index.html"},{"revision":"b9a541cb63adee2406f4ef4c02ed625a","url":"./post/8422c4dc/index.html"},{"revision":"1977e878acb38c2895d8a47ab23983b3","url":"./post/99c7fa1c/index.html"},{"revision":"725324c8a0c46466ed546070c4351507","url":"./post/9c60e209/index.html"},{"revision":"029e1c9b8d2ae002213578a06584c1b8","url":"./post/ae58d2f1/index.html"},{"revision":"1ef0b47f65180d123f493ca4db4ff20c","url":"./post/d4550abf/index.html"},{"revision":"8c648d9b5cb852e012046eb12d91c6bf","url":"./post/d50c4d0e/index.html"},{"revision":"db1893a4aa36194f691350bdc83c97c8","url":"./post/db569493/index.html"},{"revision":"a0b38cad1be546f83367a677ec8d809f","url":"./post/dd83a796/index.html"},{"revision":"39025570b2e970bf4a1893a582f24229","url":"./post/f82f332a/index.html"},{"revision":"b4a5268baec87645af10f8a3f899d7d4","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"8eff6b1ea669829bcd67b168685ef401","url":"./tags/AI/index.html"},{"revision":"609225f62132e4288a29d02e1ac2b173","url":"./tags/Aplayer/index.html"},{"revision":"f242e02fa3de0139bdb4e6ef73866d8a","url":"./tags/Bing/index.html"},{"revision":"de2017caf846f2cfcfbd80186014ba80","url":"./tags/BUG/index.html"},{"revision":"dfc461c7ccdd0a7a25cd2bb8d4bf2665","url":"./tags/CDN/index.html"},{"revision":"694eaafb45ef1a7969b2becfa4a959e8","url":"./tags/CMS/index.html"},{"revision":"0f0747f55cbee33a4dda572cdc5f06f3","url":"./tags/css/index.html"},{"revision":"56e2de8a4b058645cd0d497c66a24916","url":"./tags/DNS/index.html"},{"revision":"6c4de5762ae66c0f2a5202b331b50f60","url":"./tags/Flash/index.html"},{"revision":"4d3827bb87da93cef68cc515308811f4","url":"./tags/GFW/index.html"},{"revision":"e3e996c7fe8617abb3a0f96f2f680f1f","url":"./tags/Gridea/index.html"},{"revision":"e33b6955182b7ae312a8030019d5f876","url":"./tags/HTML/index.html"},{"revision":"f754885ade7909be0ec4a3d54c7d58f9","url":"./tags/index.html"},{"revision":"de53e9ec49a9a07da9f09dd615d7ad4f","url":"./tags/JavaScript/index.html"},{"revision":"21513b13efbeafb8eeb50385c15526ca","url":"./tags/JQuery/index.html"},{"revision":"cf8352b4ad870c2d2f760a751fa30bf0","url":"./tags/MetingJS/index.html"},{"revision":"7ee634675513221b3ba034594479dfdf","url":"./tags/NexT/index.html"},{"revision":"f5f420d741d5f5e1850036cec02fe59d","url":"./tags/P2P/index.html"},{"revision":"cda3455e16733e9955be2ec8187d5d37","url":"./tags/RSA/index.html"},{"revision":"39332828d50387e8db95583fb67fd75a","url":"./tags/Vercel/index.html"},{"revision":"be00005cbad76dcf2dcad01134d70dc0","url":"./tags/分享/index.html"},{"revision":"77334b029bb25e9a45e35e43e840738f","url":"./tags/加密/index.html"},{"revision":"1b0c8306fed877d2b32504bbde848fc5","url":"./tags/加载动画/index.html"},{"revision":"c641893f786203f7d20d187788d9b0d2","url":"./tags/右键菜单/index.html"},{"revision":"b5473510ac120de1a2a7cfbc0059af9c","url":"./tags/域名/index.html"},{"revision":"f9bd65934dd850c5ba0fee4f93ae3837","url":"./tags/密码学/index.html"},{"revision":"9d190b97f88728b62d81cd7d4da361b2","url":"./tags/建站/index.html"},{"revision":"35ba6656abc5b1f6afa48a7fbe1bcb3a","url":"./tags/插件/index.html"},{"revision":"70e1de861fd0fbfa8cdb8a0d6095e318","url":"./tags/服务器/index.html"},{"revision":"086fa7a486831c61ab0cd58fa279d1aa","url":"./tags/网页源码/index.html"},{"revision":"a5a0caaa64ada0c8ddc285ed9092ff94","url":"./tags/美化/index.html"},{"revision":"1e751f5fb91c9aeb85a40fae53681f09","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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