const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"fbf15a5128bf943edea665dec393c597","url":"./404.html"},{"revision":"441a2bfd007a18d76cab3c2d0fbb0437","url":"./about/index.html"},{"revision":"f945bcfe805ecafd2deadc50d26968a2","url":"./archives/2022/06/index.html"},{"revision":"90a0e1369d9d15f93b11cefd9d3b351b","url":"./archives/2022/07/index.html"},{"revision":"dd2c5860b2965e850c385a262eea52f5","url":"./archives/2022/08/index.html"},{"revision":"ca2b54de6b41703f146bfa90d66be7c5","url":"./archives/2022/10/index.html"},{"revision":"c6d816f1e85ae151cae53a6bf599b129","url":"./archives/2022/11/index.html"},{"revision":"6635271fec21d1bff123f64c2cc0b1a5","url":"./archives/2022/12/index.html"},{"revision":"3a050ff62ca0807d5211557864b7c5a2","url":"./archives/2022/index.html"},{"revision":"48c98da5a30ed85dfcbb79c82b09b4ea","url":"./archives/2022/page/2/index.html"},{"revision":"3a7d59edfc5347e02267b01378e9839e","url":"./archives/2023/02/index.html"},{"revision":"5f0609be6cc85e929b446bf6f63ed5f2","url":"./archives/2023/04/index.html"},{"revision":"aecbe5830dd36410dadafa8f6c36d84b","url":"./archives/2023/index.html"},{"revision":"5d3024dcf00d1a7a39a309fa3984a62a","url":"./archives/2024/04/index.html"},{"revision":"1c73e18b70f61a6284c1413b938a93bb","url":"./archives/2024/05/index.html"},{"revision":"4b2a8f0d0108098278fef2d54f0a8805","url":"./archives/2024/06/index.html"},{"revision":"17600310a1b30225aa6c27cb2a8f86d9","url":"./archives/2024/index.html"},{"revision":"9a13c9d6986e938a7aca647591940057","url":"./archives/index.html"},{"revision":"abff98c609b3a0d7b83db8c9449c81df","url":"./archives/page/2/index.html"},{"revision":"bcb466b8bb3c191a5763409f659ac616","url":"./categories/AI/index.html"},{"revision":"e26bb2563e062b808bed2fab2b1a6318","url":"./categories/Gridea/index.html"},{"revision":"c6666c62093dbbc1fe5332a94f09d4cc","url":"./categories/index.html"},{"revision":"e7fca09950e6fecee0a874d4ac93e21f","url":"./categories/Vercel/index.html"},{"revision":"6f29cb807c8498458956ca1efcd31d85","url":"./categories/休闲/index.html"},{"revision":"5a4eecd2d0aebe95c174e3e00701fe98","url":"./categories/建站/index.html"},{"revision":"b47d3936d5aa56a8af6a4e9a3d2552be","url":"./categories/科普/index.html"},{"revision":"9342d3b8c64724664b889f729e6ca44c","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"e784f795bddf769c167b7676069fcbbe","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"e927ce0f52aa7a8faa564ac00240dfdd","url":"./go/index.html"},{"revision":"b2e854413a352e113f42371505890c11","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"49001c04ae9a7993d88d20d68030bf54","url":"./link/index.html"},{"revision":"d6a446a8e8b3e4cdb01890f2186e9b36","url":"./message/index.html"},{"revision":"d1badae2cea6838f23ffecabf78d8409","url":"./page/2/index.html"},{"revision":"4f8266f3bb41a52fec1cdc81fa9c1663","url":"./post/193912eb/index.html"},{"revision":"7bb108e24e08291b9f7d82ed2907f8f7","url":"./post/220b8380/index.html"},{"revision":"340c37d3f236ec3ebbde9e3aaecbe7ec","url":"./post/24dc856c/index.html"},{"revision":"f97a263e9f58f3cbd89d2de108948952","url":"./post/3082b2c6/index.html"},{"revision":"0c0da973515b1d25784ac56c2f3d374e","url":"./post/3df9585/index.html"},{"revision":"9b7ed59f52004b5834725efcd49f1a96","url":"./post/4a17b156/index.html"},{"revision":"b1b54c1b68e1e025af7277eb3f8708c1","url":"./post/739f0a30/index.html"},{"revision":"589be9c676e4fafa864a944b4bb02cca","url":"./post/73fccf9a/index.html"},{"revision":"b614e02b0770e0ae70ecfcc2f2924583","url":"./post/7ca5704e/index.html"},{"revision":"c00020f49d53940d47ad3cc0ee0ef8f3","url":"./post/7fc77154/index.html"},{"revision":"ea2cc55f7c8c66895e2eab9f360e2534","url":"./post/8097b5e3/index.html"},{"revision":"bb70cc71baa38452d4a46f7f1076a362","url":"./post/8422c4dc/index.html"},{"revision":"8920b75ab7d019f937d00b088a67521d","url":"./post/99c7fa1c/index.html"},{"revision":"c88f0e0a694a1fab7a39fdc77d0691b2","url":"./post/9c60e209/index.html"},{"revision":"97f7bfd3bcc124a044479fea958c8a5d","url":"./post/ae58d2f1/index.html"},{"revision":"79576ca08493c63067a07cc00e3232f3","url":"./post/d4550abf/index.html"},{"revision":"89b8c94231ce9cd70ac778a6cbe2beab","url":"./post/d50c4d0e/index.html"},{"revision":"14258a3afc8d5a1da7778f70e94d30ea","url":"./post/db569493/index.html"},{"revision":"b11b116fd6914b3c809563314297e9a0","url":"./post/dd83a796/index.html"},{"revision":"e8d33b679008b3062651bdffd4f3ffc9","url":"./post/f82f332a/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"fa711bff759d03e2f87d60e00f4a0ffe","url":"./tags/AI/index.html"},{"revision":"ffb0264514ac7efa9a104de5df12585a","url":"./tags/Aplayer/index.html"},{"revision":"fe4ce8840b3bd5ec69afd7a134a3a197","url":"./tags/Bing/index.html"},{"revision":"0a581d384567787445d91b552eb526ff","url":"./tags/BUG/index.html"},{"revision":"08a73462a7352cde036c8579170c193c","url":"./tags/CDN/index.html"},{"revision":"f7eed2e9ee5324a793b3894a02637d91","url":"./tags/CMS/index.html"},{"revision":"72276536bcde64d908cb35e9bab1b8bd","url":"./tags/css/index.html"},{"revision":"936bb50cdd9a71888946114c4a8f40a2","url":"./tags/DNS/index.html"},{"revision":"822a47450d8104899582d77827e17dba","url":"./tags/Flash/index.html"},{"revision":"146315789b4f58564a55c53f0c49ac19","url":"./tags/GFW/index.html"},{"revision":"5d24aa62abeca54b508ec2a2f21d8379","url":"./tags/Gridea/index.html"},{"revision":"3398b4af965507d1dc64da9fbc1e57c0","url":"./tags/HTML/index.html"},{"revision":"bceb190d204e0d2d7231a3db4ee59b4e","url":"./tags/index.html"},{"revision":"e9eaaabd870b9b34a8bf4d46d03c2dec","url":"./tags/JavaScript/index.html"},{"revision":"a2b599eb6d4f776bcf2d3fc358339440","url":"./tags/JQuery/index.html"},{"revision":"d19a20e3f3b5eb878c7a03dec0ab3366","url":"./tags/MetingJS/index.html"},{"revision":"fd77fafe847704fbb62b6c774c475b1d","url":"./tags/NexT/index.html"},{"revision":"b01dc794ebac4a62844bbd514f15ba86","url":"./tags/RSA/index.html"},{"revision":"f263089cdcd7b9b1e6c0e76ef1c70289","url":"./tags/Vercel/index.html"},{"revision":"b7fa0ba589b75ad509d6480ea90b1ec9","url":"./tags/分享/index.html"},{"revision":"591a8a96810f759693c178774b8cee5d","url":"./tags/加密/index.html"},{"revision":"1a4491985dcbe374ae8d3bcd6bcd5257","url":"./tags/加载动画/index.html"},{"revision":"fa192e43069a3f16636a48098d28f59a","url":"./tags/右键菜单/index.html"},{"revision":"189091422f82b61a263a1422fb0ee09e","url":"./tags/域名/index.html"},{"revision":"09003c703ed201302183674f56d53cea","url":"./tags/密码学/index.html"},{"revision":"49c5534b5785d969155fe64520e14644","url":"./tags/建站/index.html"},{"revision":"cc763fdd3db0f38c32386e00fee35fd4","url":"./tags/插件/index.html"},{"revision":"855a2fd55e5bccd2b7dc469f3e9a7d52","url":"./tags/服务器/index.html"},{"revision":"13b970ed80bd3d1dcf8ec8114e338f5a","url":"./tags/网页源码/index.html"},{"revision":"bc595177fefbaa5cce2228cfb9ef22c4","url":"./tags/美化/index.html"},{"revision":"76173a61f931e1da105d6d6b4c889013","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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