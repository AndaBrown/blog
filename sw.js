const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"01a01a887cb0dbf17c6add0d6e8029f8","url":"./404.html"},{"revision":"e17afe9eb146e00023f5e4231a9357ae","url":"./about/index.html"},{"revision":"6195eaa1deeec0955721e122b4dbff6c","url":"./archives/2022/06/index.html"},{"revision":"230fcc1a25b49266a9faee7691be8892","url":"./archives/2022/07/index.html"},{"revision":"143fd379e2f8f06af712c5d17d36062e","url":"./archives/2022/08/index.html"},{"revision":"8a3ebc4ab40a7187feb7406bea9abe24","url":"./archives/2022/10/index.html"},{"revision":"42ea3bad018c0f15ea8bcfcd88f466da","url":"./archives/2022/11/index.html"},{"revision":"08d3c0c7f5c5f7beb2b32ce0f04ef7cf","url":"./archives/2022/12/index.html"},{"revision":"8c0dd571b6d3dd51ff491b1af3ce0c50","url":"./archives/2022/index.html"},{"revision":"d6295573ce783cead0f8ae17fa5c845f","url":"./archives/2022/page/2/index.html"},{"revision":"1f06cdd9d72707d670c183c8cb4afdbb","url":"./archives/2023/02/index.html"},{"revision":"0fdf9de326868c706751086352663d62","url":"./archives/2023/04/index.html"},{"revision":"702934184a8fccb42a0871569f948527","url":"./archives/2023/index.html"},{"revision":"81c31cf9d92fc2be63335bd843797572","url":"./archives/2024/04/index.html"},{"revision":"91b08852d2fe5782205a7e9962576fbc","url":"./archives/2024/05/index.html"},{"revision":"69476ba3dfd7bcd9518cbb0c7c4cb561","url":"./archives/2024/06/index.html"},{"revision":"1d2e8396f2a2f8c7f3e12d3967fdbb59","url":"./archives/2024/09/index.html"},{"revision":"b68aa8d1ea80949ec81472d10e63309f","url":"./archives/2024/index.html"},{"revision":"a7384e610f88bcd1af64f7c53185f659","url":"./archives/index.html"},{"revision":"d5a72eca2f3bc0926bef58b1f5b5db14","url":"./archives/page/2/index.html"},{"revision":"dfe3be8bd8a563337e13eb90e3f24905","url":"./archives/page/3/index.html"},{"revision":"53cc0cd1d455cf99ad9de785e258f396","url":"./categories/AI/index.html"},{"revision":"ec5a312ebea19bb85d43c0f6880e554f","url":"./categories/Gridea/index.html"},{"revision":"a24b15c8ec92beb2bdecc7558c336321","url":"./categories/index.html"},{"revision":"d3ed4051b3f80b62c3e7509fd2ea10fa","url":"./categories/Vercel/index.html"},{"revision":"af0ddc082997393b86f806a5d1b12d11","url":"./categories/休闲/index.html"},{"revision":"352c585e702f0d5e747ad77b2b1e87ef","url":"./categories/建站/index.html"},{"revision":"e9a50db9d010a8e320ae3532a4240738","url":"./categories/科普/index.html"},{"revision":"deef94a022bb63b0f55cae97538fd5f2","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"f50ded5daf8bbdf862d415da64cef9aa","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"36928338b6aa288471ef438dc8029a6c","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"8aa1d895b672b3f48591981f84ab15c9","url":"./link/index.html"},{"revision":"268544ef32f610a4ff9e364c16700ba3","url":"./message/index.html"},{"revision":"3f6ea78ba9cf6c45b1d4b05e7f55fd76","url":"./page/2/index.html"},{"revision":"c14b899fbd2d3e6a590f200c09d6e07d","url":"./page/3/index.html"},{"revision":"24a40c20c608da3ea5eebebfadd65138","url":"./post/193912eb/index.html"},{"revision":"62f6389ce933db4cbdbd4b7963d9bcf2","url":"./post/220b8380/index.html"},{"revision":"0720398b20d8235698abadac01e7f90e","url":"./post/24dc856c/index.html"},{"revision":"fa84193f82ecf411ac4e6218ce7d2469","url":"./post/3082b2c6/index.html"},{"revision":"e2d4098addbcc44e453d1e9e3360f978","url":"./post/3df9585/index.html"},{"revision":"2b2fe561541a63e91168f50fecd5fbb4","url":"./post/4a17b156/index.html"},{"revision":"e40f7384aabcf8335ed5401bdbbdd157","url":"./post/739f0a30/index.html"},{"revision":"26be8a4de678cb82e893487e05dcd9d6","url":"./post/73fccf9a/index.html"},{"revision":"b412ac656653f14b7cf71a10a2a36d8c","url":"./post/7ca5704e/index.html"},{"revision":"8a428451c18155e40191c04443c6631a","url":"./post/7fc77154/index.html"},{"revision":"84728a29980a22cef2ea51f6d6d7c5cc","url":"./post/8097b5e3/index.html"},{"revision":"ce9d1c5e13adea166b49eba3ecb9f53b","url":"./post/8422c4dc/index.html"},{"revision":"cc96a6dc8c2bd32d1a1943209508df05","url":"./post/99c7fa1c/index.html"},{"revision":"0dd9fac5c804ed0bc8b421bce441809a","url":"./post/9c60e209/index.html"},{"revision":"3202e713b422aebb2ffdc50f4cea7486","url":"./post/ae58d2f1/index.html"},{"revision":"5de1a9d46ed995ff34ebd0772520bf01","url":"./post/d4550abf/index.html"},{"revision":"fc6e4ba61dd13892cfec560d7e203198","url":"./post/d50c4d0e/index.html"},{"revision":"4bb6f5d4a9111f7e3ef2a155eb1097c7","url":"./post/db569493/index.html"},{"revision":"eebed0cdd6bfd85bcabe74de3feeb9f2","url":"./post/dd83a796/index.html"},{"revision":"b60a8c9b19d2fe547dbe1ad6bc011e5d","url":"./post/f82f332a/index.html"},{"revision":"83bbbbc5c1e2337497edfdb7366ab7ff","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"0a31758249d374b89a149eb37eadcc6d","url":"./tags/AI/index.html"},{"revision":"c1312b8d2b53ba3b3e4fef406bfda6bd","url":"./tags/Aplayer/index.html"},{"revision":"30359ba1f2fe600c4a1acbd4179ad100","url":"./tags/Bing/index.html"},{"revision":"7a11d4b945338ccd843203b2bdeb495a","url":"./tags/BUG/index.html"},{"revision":"d7a65b5ac936fbef253400bb01f34ec3","url":"./tags/CDN/index.html"},{"revision":"15ccbc70251349620d15ecdd558bca7d","url":"./tags/CMS/index.html"},{"revision":"e698259bb5457eb52f853bd513d7dbe7","url":"./tags/css/index.html"},{"revision":"7d897bf117b1a162d8f53c86715d43e3","url":"./tags/DNS/index.html"},{"revision":"be073d67420c0d518f02282925c57f71","url":"./tags/Flash/index.html"},{"revision":"557973891103a59ecf6236af1745f735","url":"./tags/GFW/index.html"},{"revision":"b91278fa2175d66c5286847918c47017","url":"./tags/Gridea/index.html"},{"revision":"1699f47c78b8dc1faecea7ad953c9f78","url":"./tags/HTML/index.html"},{"revision":"bbb1ef083b095ae6a9921eda6c9f59fe","url":"./tags/index.html"},{"revision":"bebc74ca6a1c402155a1a54f36f220d6","url":"./tags/JavaScript/index.html"},{"revision":"579f22a7908175f1b1f38d41b78b7157","url":"./tags/JQuery/index.html"},{"revision":"2b38f504918e2053d7a838c6f6f48346","url":"./tags/MetingJS/index.html"},{"revision":"b4db5b2068dbe554a644eaca13dcfff3","url":"./tags/NexT/index.html"},{"revision":"b45cf2a8f15246493d30e40ed4ed694c","url":"./tags/P2P/index.html"},{"revision":"e0d5be02f6e45ae0176f9e4143409483","url":"./tags/RSA/index.html"},{"revision":"912f7056217c5d81ce43eab9b6797175","url":"./tags/Vercel/index.html"},{"revision":"54ffa003e3b3e37894f1f502f2b68ba7","url":"./tags/分享/index.html"},{"revision":"7366b8b4a8bbd5c346c347c6513e2c03","url":"./tags/加密/index.html"},{"revision":"99182c51e56bb6482b81eb6045baf5ed","url":"./tags/加载动画/index.html"},{"revision":"351a119f4be83a67a73840b2a8824629","url":"./tags/右键菜单/index.html"},{"revision":"27df0589f256f0155290cb76d39bb51d","url":"./tags/域名/index.html"},{"revision":"848288808ad4dcb4f274f901ca73b50c","url":"./tags/密码学/index.html"},{"revision":"0f0930af54f238148185e5bb882566ea","url":"./tags/建站/index.html"},{"revision":"56a5b16bd2c2efcd2a1afd06170ad5da","url":"./tags/插件/index.html"},{"revision":"e97ddb415dae1ccb59b62dc106187093","url":"./tags/服务器/index.html"},{"revision":"5935c50207da34db79d3aefa435ec974","url":"./tags/网页源码/index.html"},{"revision":"60bfdc8792c5fbd0c881d78abe451275","url":"./tags/美化/index.html"},{"revision":"f0c85b7659e8535f6ae4b3f77800aeac","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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