const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"b4c8c56f253387e0465f764eda126e13","url":"./404.html"},{"revision":"469131a86956ce281d01b71aafe73fc5","url":"./about/index.html"},{"revision":"925c433e481911373f5c1301b18bb276","url":"./archives/2022/06/index.html"},{"revision":"2ec788223b6f08576400bb0da3bd766e","url":"./archives/2022/07/index.html"},{"revision":"68a55ebdd79eff4b08138d276ae7ef06","url":"./archives/2022/08/index.html"},{"revision":"f4a919b211915d9c94a445950c6f7914","url":"./archives/2022/10/index.html"},{"revision":"493b3d09ca68a0dffdd9787e7acdd1a7","url":"./archives/2022/11/index.html"},{"revision":"a4d0af38fc00527964811b1e928e65fe","url":"./archives/2022/12/index.html"},{"revision":"a319e73a5ed958717707d6da55c44ce0","url":"./archives/2022/index.html"},{"revision":"f375e0ec56d9045562754232fef48b3b","url":"./archives/2022/page/2/index.html"},{"revision":"071420ca0fb84df23e52d9ba571c0938","url":"./archives/2023/02/index.html"},{"revision":"3c1034668a92209e97ca41a5123ae6b6","url":"./archives/2023/04/index.html"},{"revision":"b345fc13c4dc9baf6065c72637a97002","url":"./archives/2023/index.html"},{"revision":"7ed259120b907baeaf98027c79aa5ebc","url":"./archives/2024/04/index.html"},{"revision":"be91a23da5d5f8d887bbbb16c6c44395","url":"./archives/2024/05/index.html"},{"revision":"a8ccfa2738cd5758b90907cf5e266582","url":"./archives/2024/06/index.html"},{"revision":"c517033a8a39ea49414a53fc5028c26a","url":"./archives/2024/09/index.html"},{"revision":"56c57bfe7f7e796d1199553f56e65e61","url":"./archives/2024/index.html"},{"revision":"68b99f6c31e10a214c3ed9290b3c0d19","url":"./archives/index.html"},{"revision":"c235f67c0d3bd148d331f2cdec77ce38","url":"./archives/page/2/index.html"},{"revision":"669e94494c35c18bd7f52faff4217293","url":"./archives/page/3/index.html"},{"revision":"c94daf28fc9188a992e31a559c7e933d","url":"./categories/AI/index.html"},{"revision":"52c0301a2811e008768c11a7dbdd6875","url":"./categories/Gridea/index.html"},{"revision":"a81c309531371125f4577411e95515df","url":"./categories/index.html"},{"revision":"f2b9b95ceb03dd7c2b244005a3de3318","url":"./categories/Vercel/index.html"},{"revision":"5f41701444908bc115d1475f3b8c8c1b","url":"./categories/休闲/index.html"},{"revision":"93ac9963d0e830e7b3d84ac7972f4d77","url":"./categories/建站/index.html"},{"revision":"77c5a14b293d7ef079d12df114ab6198","url":"./categories/科普/index.html"},{"revision":"50d8f09b76d986c832bea64ed111c9d1","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"fa248328b105f53ca11ee7c7d75f452f","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"fc86ed809cf043dfa71725b83850ba2c","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"ec6faa3e678b50c9261c0ac6135ce534","url":"./link/index.html"},{"revision":"5c3f0a5e7583521d20540d1160833c72","url":"./message/index.html"},{"revision":"1c493f530836f171d81f06a9ce600fe8","url":"./page/2/index.html"},{"revision":"659ac29ae3510663e7dafe85d4386bad","url":"./page/3/index.html"},{"revision":"24a40c20c608da3ea5eebebfadd65138","url":"./post/193912eb/index.html"},{"revision":"62f6389ce933db4cbdbd4b7963d9bcf2","url":"./post/220b8380/index.html"},{"revision":"0720398b20d8235698abadac01e7f90e","url":"./post/24dc856c/index.html"},{"revision":"fa84193f82ecf411ac4e6218ce7d2469","url":"./post/3082b2c6/index.html"},{"revision":"e2d4098addbcc44e453d1e9e3360f978","url":"./post/3df9585/index.html"},{"revision":"2b2fe561541a63e91168f50fecd5fbb4","url":"./post/4a17b156/index.html"},{"revision":"e40f7384aabcf8335ed5401bdbbdd157","url":"./post/739f0a30/index.html"},{"revision":"26be8a4de678cb82e893487e05dcd9d6","url":"./post/73fccf9a/index.html"},{"revision":"b412ac656653f14b7cf71a10a2a36d8c","url":"./post/7ca5704e/index.html"},{"revision":"8a428451c18155e40191c04443c6631a","url":"./post/7fc77154/index.html"},{"revision":"84728a29980a22cef2ea51f6d6d7c5cc","url":"./post/8097b5e3/index.html"},{"revision":"ce9d1c5e13adea166b49eba3ecb9f53b","url":"./post/8422c4dc/index.html"},{"revision":"cc96a6dc8c2bd32d1a1943209508df05","url":"./post/99c7fa1c/index.html"},{"revision":"0dd9fac5c804ed0bc8b421bce441809a","url":"./post/9c60e209/index.html"},{"revision":"3202e713b422aebb2ffdc50f4cea7486","url":"./post/ae58d2f1/index.html"},{"revision":"5de1a9d46ed995ff34ebd0772520bf01","url":"./post/d4550abf/index.html"},{"revision":"fc6e4ba61dd13892cfec560d7e203198","url":"./post/d50c4d0e/index.html"},{"revision":"4bb6f5d4a9111f7e3ef2a155eb1097c7","url":"./post/db569493/index.html"},{"revision":"eebed0cdd6bfd85bcabe74de3feeb9f2","url":"./post/dd83a796/index.html"},{"revision":"b60a8c9b19d2fe547dbe1ad6bc011e5d","url":"./post/f82f332a/index.html"},{"revision":"83bbbbc5c1e2337497edfdb7366ab7ff","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"abcf71d547b2b883a724cb2032bc7b96","url":"./tags/AI/index.html"},{"revision":"5b2b3cce7e687127cadf9e6992244c7b","url":"./tags/Aplayer/index.html"},{"revision":"0683816a101c123ca160ece4fd332380","url":"./tags/Bing/index.html"},{"revision":"b84f89e96162c3221e05ca08c51c7b6e","url":"./tags/BUG/index.html"},{"revision":"bcebe277c392eb2af614d59e0d583261","url":"./tags/CDN/index.html"},{"revision":"11e6d70a841f9d3456ec3912edcc1525","url":"./tags/CMS/index.html"},{"revision":"60fed6d4a253970eaae25365feae49ab","url":"./tags/css/index.html"},{"revision":"93fb1e95bc6eb6aa20b6643ab28bf81d","url":"./tags/DNS/index.html"},{"revision":"a56b1cc3edacb63e8b899906bfdfdc14","url":"./tags/Flash/index.html"},{"revision":"299ae5004a6d24eb4e580f4639442dba","url":"./tags/GFW/index.html"},{"revision":"54520638ca128783266b556e4d47f9a0","url":"./tags/Gridea/index.html"},{"revision":"943a7851641f95c96f30fb419b9dcec9","url":"./tags/HTML/index.html"},{"revision":"01b9d66e87adf9f1e07915f6b1bcc562","url":"./tags/index.html"},{"revision":"afff5990c29dc939efca8d9cc662e89f","url":"./tags/JavaScript/index.html"},{"revision":"5af5479204123eb40a4fcc5facb0c4d1","url":"./tags/JQuery/index.html"},{"revision":"b1cbfbe1a645e7eb97afd81b3cc68e5c","url":"./tags/MetingJS/index.html"},{"revision":"ef8183fff08f0df9c1f96917a87c7f2f","url":"./tags/NexT/index.html"},{"revision":"a867ee55fedd08fb2a0f643d1fc46729","url":"./tags/P2P/index.html"},{"revision":"06dec9d99e69b5d2b47893d581fdc755","url":"./tags/RSA/index.html"},{"revision":"99498d759c0e2589fb66bf2410dfc38e","url":"./tags/Vercel/index.html"},{"revision":"26ac9eb2432b881df902188cd5b9e32f","url":"./tags/分享/index.html"},{"revision":"f7a847cdc8b0cca786bb0cf080352b35","url":"./tags/加密/index.html"},{"revision":"dbd67dc49526f069a09e7118d1ca1f9f","url":"./tags/加载动画/index.html"},{"revision":"ff513b4d2f1ab39d94e2a757ef890cdf","url":"./tags/右键菜单/index.html"},{"revision":"3d82a13a12801bb92b2e3f793b0fc7f8","url":"./tags/域名/index.html"},{"revision":"add80f38e92a90a9bfd924ad26019e6e","url":"./tags/密码学/index.html"},{"revision":"a14354a45e2eff1edbed2af062712fec","url":"./tags/建站/index.html"},{"revision":"6708914ad42c5143573d2cfbaec68935","url":"./tags/插件/index.html"},{"revision":"255d08c897e3d9720c63d3774d5f975b","url":"./tags/服务器/index.html"},{"revision":"90cb22fcee1fd1e4814f189cf9ce1489","url":"./tags/网页源码/index.html"},{"revision":"7c2742946fafae5bab2ac0eaa9916872","url":"./tags/美化/index.html"},{"revision":"d62505940348dc6140cd0168fe93cb11","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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