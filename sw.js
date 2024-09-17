const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"c0d2eced157fd2986b3ba9047b20caab","url":"./404.html"},{"revision":"542843c1e01cb97cda39854979d1d843","url":"./about/index.html"},{"revision":"351fbd8af2757eb700c4993d92c150fc","url":"./archives/2022/06/index.html"},{"revision":"78eac66ece11f45d921bd04cc34ba6d9","url":"./archives/2022/07/index.html"},{"revision":"8b9636f9575dfb0f1bc75ed0531e6646","url":"./archives/2022/08/index.html"},{"revision":"d8f0f898aa63d07ebb50b0b43828061d","url":"./archives/2022/10/index.html"},{"revision":"05e5fd654a1d79a41ca42a4d15930365","url":"./archives/2022/11/index.html"},{"revision":"410fa986622b91f3676c1bd3fd873286","url":"./archives/2022/12/index.html"},{"revision":"7a6f409cf27f3a23c9f8d2f7213bd1b5","url":"./archives/2022/index.html"},{"revision":"2aa6c68e2a755eb3574ae8b584df1fc2","url":"./archives/2022/page/2/index.html"},{"revision":"08ea72970e58bcf4cbb62ad4d1fad25d","url":"./archives/2023/02/index.html"},{"revision":"184a417a08bd2873f0843143d8187a23","url":"./archives/2023/04/index.html"},{"revision":"12c0fbcccd6316a8ff71ee8474c01444","url":"./archives/2023/index.html"},{"revision":"bfe343196b5193bc2a673d67955f918a","url":"./archives/2024/04/index.html"},{"revision":"08ac7a1b12ba2ef98c5fd473505e2eed","url":"./archives/2024/05/index.html"},{"revision":"0925d7e8aa9d029ce5e5df1a97e8ac1b","url":"./archives/2024/06/index.html"},{"revision":"915a9646a6f9a8e7c9d53dfd310fe8d3","url":"./archives/2024/09/index.html"},{"revision":"44e0ce7bc646e50b84bea6917aa30025","url":"./archives/2024/index.html"},{"revision":"cbaf428979cea06f48226a3f0486b1d1","url":"./archives/index.html"},{"revision":"8fd525cfc53a989f33f437ca0574c326","url":"./archives/page/2/index.html"},{"revision":"7b4e7ed854f47c45f7e9f8870b47479e","url":"./archives/page/3/index.html"},{"revision":"b589f102337d124dbdc47a8efa90e391","url":"./categories/AI/index.html"},{"revision":"5689ff011e56a83dc148d9e4d07871a2","url":"./categories/Gridea/index.html"},{"revision":"b9bafe6c98d8a96de14114f861b78d3a","url":"./categories/index.html"},{"revision":"c0ae2a18747c100f654443936aa5abf2","url":"./categories/Vercel/index.html"},{"revision":"5185afe1dfc8de723955571721d3f19f","url":"./categories/休闲/index.html"},{"revision":"c7f4e5ac1822125ea8e27e3603371931","url":"./categories/建站/index.html"},{"revision":"4be84c59b93738a93ac9981eb74c6081","url":"./categories/科普/index.html"},{"revision":"155305ad023bc2c8517fcf9bc7c5d21c","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"337eb330b5c5473bfcf8eb50df24d36e","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"726e973550de916cdf364d2e727a07f7","url":"./go/index.html"},{"revision":"fd6915ae39bec840c2a3896f8719f28c","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"2c61c81503864f99703f7fc4c1d82ff0","url":"./link/index.html"},{"revision":"af77274e9d9586164baf5b748ebd6918","url":"./message/index.html"},{"revision":"7e305934fc209b2a47cd1c5d4a837fd0","url":"./page/2/index.html"},{"revision":"99c64b518c2cc1ad17cb57801a8a1b5c","url":"./page/3/index.html"},{"revision":"6bbcf90b3a5efae794ff8c31b591371d","url":"./post/193912eb/index.html"},{"revision":"04142271c51ca3ac21598bdc89e5f35e","url":"./post/220b8380/index.html"},{"revision":"274aa18655e9dbccc0668ffb8f273974","url":"./post/24dc856c/index.html"},{"revision":"1872262035657608bddba34d48ce039c","url":"./post/3082b2c6/index.html"},{"revision":"34a7a76204f404f894a94d28124a9bcd","url":"./post/3df9585/index.html"},{"revision":"255a6727bd17cf7f244995e3bd74d27c","url":"./post/4a17b156/index.html"},{"revision":"4f033e1408157b422a7f9536215b97e5","url":"./post/739f0a30/index.html"},{"revision":"9234f4c89a0af58ac5770eb66e74ee60","url":"./post/73fccf9a/index.html"},{"revision":"3cd8d6389c040d39dfe26efe60364cca","url":"./post/7ca5704e/index.html"},{"revision":"ed54a5bc263774c407657f0c7629123f","url":"./post/7fc77154/index.html"},{"revision":"db115dc0ec14a045d4c23b3b04d132f5","url":"./post/8097b5e3/index.html"},{"revision":"b9a541cb63adee2406f4ef4c02ed625a","url":"./post/8422c4dc/index.html"},{"revision":"1977e878acb38c2895d8a47ab23983b3","url":"./post/99c7fa1c/index.html"},{"revision":"725324c8a0c46466ed546070c4351507","url":"./post/9c60e209/index.html"},{"revision":"029e1c9b8d2ae002213578a06584c1b8","url":"./post/ae58d2f1/index.html"},{"revision":"1ef0b47f65180d123f493ca4db4ff20c","url":"./post/d4550abf/index.html"},{"revision":"8c648d9b5cb852e012046eb12d91c6bf","url":"./post/d50c4d0e/index.html"},{"revision":"db1893a4aa36194f691350bdc83c97c8","url":"./post/db569493/index.html"},{"revision":"6ead31c93203733ddbf5f6d1d94edfd4","url":"./post/dd83a796/index.html"},{"revision":"e3301984d226defaaf5defa8de84dbb6","url":"./post/f82f332a/index.html"},{"revision":"b4a5268baec87645af10f8a3f899d7d4","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"84a6dd8cb0d7b8b98c0a3948f19308de","url":"./tags/AI/index.html"},{"revision":"5041626651a75663eda805c9d0df3a3a","url":"./tags/Aplayer/index.html"},{"revision":"30e929eb1ffcd9809269dd4cff13112b","url":"./tags/Bing/index.html"},{"revision":"1b28acdbc927d7c81af03e988108f951","url":"./tags/BUG/index.html"},{"revision":"dc3653e87e52c20a7d8f0d3ca1b7745e","url":"./tags/CDN/index.html"},{"revision":"52bf892f16541dcaa546c39106e7021c","url":"./tags/CMS/index.html"},{"revision":"05dccdb6985203069ae827dbb53266c2","url":"./tags/css/index.html"},{"revision":"8a50b8c5562850f91ba9efe816962748","url":"./tags/DNS/index.html"},{"revision":"b2cfd705cf5323eebca3d6a3e124685d","url":"./tags/Flash/index.html"},{"revision":"28605b05571d001e316e144a15b6de17","url":"./tags/GFW/index.html"},{"revision":"d77147397acb4f5df507799fc6502ede","url":"./tags/Gridea/index.html"},{"revision":"10d5fa485caa7af8b0bfc06293d5f42d","url":"./tags/HTML/index.html"},{"revision":"1ba036bf6eae5e7390224111089532d1","url":"./tags/index.html"},{"revision":"0e3e96cae3787e3d763d2cf311a3f179","url":"./tags/JavaScript/index.html"},{"revision":"20839548b8ff4469909cb01e9daea957","url":"./tags/JQuery/index.html"},{"revision":"8d91141563ca3cd0888286aaa235dc39","url":"./tags/MetingJS/index.html"},{"revision":"a233fd129a8b4aa0f8e52b2f729efe5b","url":"./tags/NexT/index.html"},{"revision":"b992929e4750232c465a8654fa79e581","url":"./tags/P2P/index.html"},{"revision":"f52e21967e6ac2967b5854ca465a8591","url":"./tags/RSA/index.html"},{"revision":"efc2b0d42a71a371fd62cab32598289b","url":"./tags/Vercel/index.html"},{"revision":"397a6eb3298c5e226bce15bdaf817c72","url":"./tags/分享/index.html"},{"revision":"c737c90c440ef01cb472805c45ad9ffa","url":"./tags/加密/index.html"},{"revision":"d37e53aae68755b32af2149a96cb5691","url":"./tags/加载动画/index.html"},{"revision":"c84afd9309d764de317555df4629a9af","url":"./tags/右键菜单/index.html"},{"revision":"066f542479fcae91a6e7af00afb0665c","url":"./tags/域名/index.html"},{"revision":"b94a70ea9c796bd2f1099bbdaedb3c25","url":"./tags/密码学/index.html"},{"revision":"1e1982cd54e7e2822cbf32a620b77786","url":"./tags/建站/index.html"},{"revision":"cd7cd9e5af3f0db54fefecc1a1741681","url":"./tags/插件/index.html"},{"revision":"cecd434cf7853ebf4ae484e51944a891","url":"./tags/服务器/index.html"},{"revision":"8a92a53901dbb973cec7a186a7db7ba2","url":"./tags/网页源码/index.html"},{"revision":"7ba3f1101b84ac4b3bc060a3a61bbdea","url":"./tags/美化/index.html"},{"revision":"862f6e24ecc2a4cf86c565e12e96d328","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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