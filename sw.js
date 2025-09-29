const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"c2400e51b90a244501595531c80c8dc1","url":"./404.html"},{"revision":"550ce6194bad784cebf855a17b1e59eb","url":"./about/index.html"},{"revision":"2de69a22af4df1a7f88a159bb1ee11ee","url":"./archives/2022/06/index.html"},{"revision":"74291d626fb577873873b9789d608a89","url":"./archives/2022/07/index.html"},{"revision":"297721f35ed77e8adf525913410f49f8","url":"./archives/2022/08/index.html"},{"revision":"bdc2f185ead56bb5dbba3213f707ec9b","url":"./archives/2022/10/index.html"},{"revision":"dec42a89385b87149c039c346b44d357","url":"./archives/2022/11/index.html"},{"revision":"bfb435748b314314e0181e6d3fb1e659","url":"./archives/2022/12/index.html"},{"revision":"f27171af94894a21e41221316b81e54c","url":"./archives/2022/index.html"},{"revision":"adfa1e1010038e00f30f296adbe67da2","url":"./archives/2022/page/2/index.html"},{"revision":"dcd637b9cb5aa92ed100615e771c2e2f","url":"./archives/2023/02/index.html"},{"revision":"cd7ab4b70442b3124063bab4ce324327","url":"./archives/2023/04/index.html"},{"revision":"ec3934b485afc437cf0ebc557994b36b","url":"./archives/2023/index.html"},{"revision":"0699865a4728c5f2a8e309241eed8223","url":"./archives/2024/04/index.html"},{"revision":"0cccb8d1a6711db11ea4351ef3fd2619","url":"./archives/2024/05/index.html"},{"revision":"18228b6aecaca2d9a27e9ad4080ab1d9","url":"./archives/2024/06/index.html"},{"revision":"d0598e58eb67460b13ead4b654c37380","url":"./archives/2024/09/index.html"},{"revision":"ab4c25709c74ba994316b57a87acca56","url":"./archives/2024/index.html"},{"revision":"26f2f01a97cf22f6bc6c77e688952767","url":"./archives/2025/09/index.html"},{"revision":"87ccaa97a74fcc05b1fca0596d876773","url":"./archives/2025/index.html"},{"revision":"490309497f0e9df522e71a6466ea5d4d","url":"./archives/index.html"},{"revision":"a25ceb8aee0943063edbc0a965f5ee6e","url":"./archives/page/2/index.html"},{"revision":"7907aeec34dc70ce28ca6040204cfa06","url":"./archives/page/3/index.html"},{"revision":"6a2ccf1c76fb1b4eee3be129d71c372c","url":"./categories/AI/index.html"},{"revision":"5736918de5f84c1de461dafdd763a752","url":"./categories/Gridea/index.html"},{"revision":"b6ea318cd713cf36a5aa8754a9dfd519","url":"./categories/index.html"},{"revision":"d3c0ed32cb5ba7950564584be251b565","url":"./categories/Vercel/index.html"},{"revision":"6e5e6086828108776576f66e0200b72d","url":"./categories/休闲/index.html"},{"revision":"513067b0797f1328754e07def1126ee8","url":"./categories/建站/index.html"},{"revision":"a4a4df05523fbf4dbc7d8ee6f16c32f4","url":"./categories/科普/index.html"},{"revision":"8eba56fe401ceb8c1e72773a33632888","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"63c4100474d78404ce21cb2fd801ccef","url":"./cookies-instructions/index.html"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"4d2c0557b3725340e0efde6a2d315770","url":"./index.html"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"735fbef3064e8ecda426d0655faf02ca","url":"./link/index.html"},{"revision":"7d6ffd3bac4d7999c921053fe0576dd1","url":"./message/index.html"},{"revision":"012ba9ba1eb8f913b42b023c10fc5364","url":"./page/2/index.html"},{"revision":"f42f79da65b572e6235649edd26d8109","url":"./page/3/index.html"},{"revision":"cf6520a925b3bd2ddb4ccd483f12709f","url":"./post/193912eb/index.html"},{"revision":"50ce148a08f49faca333238e73144547","url":"./post/220b8380/index.html"},{"revision":"935fadf4f77ba3e082bf00143ff99e55","url":"./post/24dc856c/index.html"},{"revision":"87b181b2dc0cdf2028cb62a79595ec72","url":"./post/3082b2c6/index.html"},{"revision":"af7c83713ce8e2c21c77b3ef4d7cfe79","url":"./post/3df9585/index.html"},{"revision":"2605cd28e974d8340bf10b1aca14f5c0","url":"./post/4a17b156/index.html"},{"revision":"57a9e632b3647484ccefd18bc2396f81","url":"./post/739f0a30/index.html"},{"revision":"d0a819e6be2c614281ef65fddf6a57fb","url":"./post/73fccf9a/index.html"},{"revision":"3ccfeb266db78e72ab3ef1a986689339","url":"./post/7ca5704e/index.html"},{"revision":"f2a190ab6760666b9ed2b82c2da9abed","url":"./post/7fc77154/index.html"},{"revision":"d7ff7167a972c593715499c1191c3cc8","url":"./post/8097b5e3/index.html"},{"revision":"044df9d7ac329ef8272efb6b1d3f0a94","url":"./post/8422c4dc/index.html"},{"revision":"0f196c8b4b9f64f22417c3e857975da2","url":"./post/99c7fa1c/index.html"},{"revision":"678ec045eb3f5cfaeb545c38b734b226","url":"./post/9c60e209/index.html"},{"revision":"2813c53e30efe2533845dae4cd8956fd","url":"./post/ae58d2f1/index.html"},{"revision":"a9f61607691cad802f442fb48f71fbab","url":"./post/b9a3407d/index.html"},{"revision":"1c0cfef4181063368e708cb4de699f19","url":"./post/d4550abf/index.html"},{"revision":"26bbd0e083c97c3804885d1261f94c9a","url":"./post/d50c4d0e/index.html"},{"revision":"05f1496c7d20e99fd664fc54c0fe6137","url":"./post/db569493/index.html"},{"revision":"e229c4828cee5b28737d78724d793c84","url":"./post/dd83a796/index.html"},{"revision":"99095e2e3d806c0e242c1e5c64835e8d","url":"./post/f82f332a/index.html"},{"revision":"9d7e270d785017679fe44499758d95ea","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"6e7e8f8f75c358ba109fd56ced0f27a6","url":"./tags/AI/index.html"},{"revision":"c2c3eb7f2ae5cf5497ff369f4a4b4fac","url":"./tags/Aplayer/index.html"},{"revision":"5239928208b60a4d3aad7ab63d941c16","url":"./tags/Bing/index.html"},{"revision":"f46c221144656aee7ba42bd2335a7809","url":"./tags/BUG/index.html"},{"revision":"42c947944aea5dcdc16b3079b801fe6e","url":"./tags/CDN/index.html"},{"revision":"4e7c0aaff0868571d4eb4729e3c11c3f","url":"./tags/CMS/index.html"},{"revision":"ae8fee43510b6abfb896e08a683373ec","url":"./tags/css/index.html"},{"revision":"cec4d8a8bbcf1e6f867067cf69c49329","url":"./tags/DNS/index.html"},{"revision":"f21aebfb1dc377cfeefbfa056a35de54","url":"./tags/Flash/index.html"},{"revision":"9665f9b93adcb837a66f58c2bd28056b","url":"./tags/GFW/index.html"},{"revision":"f397baac55dc31e3bbd23c0d6e036ddc","url":"./tags/Gridea/index.html"},{"revision":"5e1058e6e8aa5d754426e454433802f3","url":"./tags/HTML/index.html"},{"revision":"59082ed743e8badb8570d6b89f8e5afd","url":"./tags/index.html"},{"revision":"273bf8a3c7e636c5517d11b7cc135402","url":"./tags/JavaScript/index.html"},{"revision":"3c9eb39678ca06425fe67f9355d0ac75","url":"./tags/JQuery/index.html"},{"revision":"e2b9fe3dfe455fa6f9438863e154c754","url":"./tags/MetingJS/index.html"},{"revision":"e6fb9612cfad0c8515dd01e151d430c4","url":"./tags/NexT/index.html"},{"revision":"3d7064bcc31be375bed2bb3640a83de5","url":"./tags/P2P/index.html"},{"revision":"2cb8cb62d1a59ad89281d60ec6d7f48c","url":"./tags/RSA/index.html"},{"revision":"23e8e1976892979d27afd1108bf18ac2","url":"./tags/Vercel/index.html"},{"revision":"6857ded22ed843cd60a5d48f494ce69c","url":"./tags/分享/index.html"},{"revision":"5c5474d630f340518da4c5132e4e136b","url":"./tags/加密/index.html"},{"revision":"5bf1ea50555cfbcc07038d168360c1d8","url":"./tags/加密货币/index.html"},{"revision":"2ff535af164a222d78f7754e4b4d0573","url":"./tags/加载动画/index.html"},{"revision":"cf3991fdc25a4700983085c1d461239e","url":"./tags/区块链/index.html"},{"revision":"466180979f0050c5a6bee28b093b379b","url":"./tags/右键菜单/index.html"},{"revision":"77138234901e39826cbb6a8ae8d99f98","url":"./tags/域名/index.html"},{"revision":"4544105f5740397e195d6dd81d348a1e","url":"./tags/密码学/index.html"},{"revision":"ed6fce5a1db51de859ab6a98243d26ad","url":"./tags/建站/index.html"},{"revision":"69f92e2c62b210a641233ddb78a20a8c","url":"./tags/插件/index.html"},{"revision":"8cdddf71a6f4f5336c69ee7ad8200a45","url":"./tags/服务器/index.html"},{"revision":"2e6528de74e6e2edd02ebeebf076a4ec","url":"./tags/网页源码/index.html"},{"revision":"6ae93d43518cbc52537e842866054d72","url":"./tags/美化/index.html"},{"revision":"820509342b90d1b8343668000893894d","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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