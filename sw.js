const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"e531447257771451a220332342e2a706","url":"./404.html"},{"revision":"c27dab644089111ade6cd53c8d77468b","url":"./about/index.html"},{"revision":"63116b307b7c2f6daa74edf3d5bfcc79","url":"./archives/2022/06/index.html"},{"revision":"580e3f01bc52e5dbb41dc3a5f9aae603","url":"./archives/2022/07/index.html"},{"revision":"e78ecc345bb4525a6b5995c284d77d19","url":"./archives/2022/08/index.html"},{"revision":"b97c843c77c7d773d71398c1f64744f9","url":"./archives/2022/10/index.html"},{"revision":"8260f98ded098e78ac13f847b6831ba1","url":"./archives/2022/11/index.html"},{"revision":"2b845d55f3f43a5534ef0c4b3155af84","url":"./archives/2022/12/index.html"},{"revision":"1e148067a91692429bac30580f35032f","url":"./archives/2022/index.html"},{"revision":"1e6e604ce247b47d1c5c5e4a1c6e2397","url":"./archives/2022/page/2/index.html"},{"revision":"219d3e7cc67e76bccccd225e3439a6fa","url":"./archives/2023/02/index.html"},{"revision":"c1f2a29f38da87b19a94a14c61ef0b7b","url":"./archives/2023/04/index.html"},{"revision":"2e7d5f62fb545820b183e3e1855c46a5","url":"./archives/2023/index.html"},{"revision":"116c605ca19a44f18c9ae99a184b69e5","url":"./archives/2024/04/index.html"},{"revision":"6b62a8f226525bcfc3c446d9b3820399","url":"./archives/2024/05/index.html"},{"revision":"0c84d718304b02e7b678c60849fdc40a","url":"./archives/2024/06/index.html"},{"revision":"5b5c62353be9222578ab282a98abcc47","url":"./archives/2024/index.html"},{"revision":"20ff4661e9010b8446d09683603ffb3f","url":"./archives/index.html"},{"revision":"61e0855e49979f18fa5ce673a5a65877","url":"./archives/page/2/index.html"},{"revision":"6240130f77aaedbd23d3e776d2399520","url":"./categories/AI/index.html"},{"revision":"050498c0008a464adb0e8cd3a948b6e1","url":"./categories/Gridea/index.html"},{"revision":"14eb74fa042db3d89a200ba3ab052177","url":"./categories/index.html"},{"revision":"12c14ba7454690b0d56ed34017e8cc77","url":"./categories/Vercel/index.html"},{"revision":"9aa99de8be9821deb5e308f25a951008","url":"./categories/休闲/index.html"},{"revision":"ac8b09f334a781d3d34ef4e26bef6d86","url":"./categories/建站/index.html"},{"revision":"b58274e93aefcdc761288baa7aa58563","url":"./categories/科普/index.html"},{"revision":"b4809dadf3d3f02b4854d8ca3674b49c","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"66619919cef7e8d3a1bdb17070cf371c","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"392419a380566e73cf5a1aef587d3079","url":"./go/index.html"},{"revision":"d940b11b6c5720f8225fe416f9835026","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"5d39a69bd994a69352504b3ffa72a98b","url":"./link/index.html"},{"revision":"6458e4556d3d3f844f81beee57e2bdf7","url":"./message/index.html"},{"revision":"8f26caefec6bed112ea75ab7f55582de","url":"./page/2/index.html"},{"revision":"bc04ce10d9389398cafc9876165a22c1","url":"./post/ /index.html"},{"revision":"559fdbfd38dcda2b4bae0b455ff92854","url":"./post/193912eb/index.html"},{"revision":"d5f9d4b6ae09b2c0b945cc1b2b01f040","url":"./post/220b8380/index.html"},{"revision":"7805ee47bdb318ad2274ef65b1ac0437","url":"./post/24dc856c/index.html"},{"revision":"eb9ee43543849b639f4dafe9c26bb7bf","url":"./post/3082b2c6/index.html"},{"revision":"a740c500b396806ec80ef37aea6c653c","url":"./post/3df9585/index.html"},{"revision":"4e41a1125926bfa2caad3800c1c442e1","url":"./post/4a17b156/index.html"},{"revision":"f67139ea3f7e4cd434e1522ee8df653f","url":"./post/739f0a30/index.html"},{"revision":"0c10bb7df61393af3b6d9cdeac77c21d","url":"./post/73fccf9a/index.html"},{"revision":"f99f206ef79778baffa896b874b0b529","url":"./post/7ca5704e/index.html"},{"revision":"efddcb47abe46cd34f86e573de61040d","url":"./post/7fc77154/index.html"},{"revision":"99594b8fa9b0ce88ccd98bc4234cf68c","url":"./post/8422c4dc/index.html"},{"revision":"feb16ef5eaf2d1fa328bfdd723faf847","url":"./post/99c7fa1c/index.html"},{"revision":"4706b4634f50732c356811a307c6f99c","url":"./post/9c60e209/index.html"},{"revision":"498738c823cfd56651300121d69499ee","url":"./post/ae58d2f1/index.html"},{"revision":"ed58625c86b63e04da59767c9aa719e0","url":"./post/d4550abf/index.html"},{"revision":"2aaf518900f28d4c76c6734e5882156d","url":"./post/d50c4d0e/index.html"},{"revision":"2dabe8a8d777826ffe9b431ae89c8c05","url":"./post/db569493/index.html"},{"revision":"6ce7daeb693efdc1843714ed4ef83107","url":"./post/dd83a796/index.html"},{"revision":"f9caf4c70ca07efbe235aaff646c2ee3","url":"./post/f82f332a/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"d55f7fc466f7ac99c86c866301957aa2","url":"./tags/AI/index.html"},{"revision":"701fb9ac34e9177065fb3526e9de0b19","url":"./tags/Aplayer/index.html"},{"revision":"87689f25e133b5e7945cc52c9f29d2b6","url":"./tags/Bing/index.html"},{"revision":"799d4263883a3d527cbeb079607f5ad9","url":"./tags/BUG/index.html"},{"revision":"6db05325632413b6f22cf995003d45bd","url":"./tags/CDN/index.html"},{"revision":"69d7cc016c5150ef90894316cbb1f0e5","url":"./tags/CMS/index.html"},{"revision":"d0f65527ebb7e32aa213fcbe2f5245ce","url":"./tags/css/index.html"},{"revision":"4a0526288d4c9e9b14b7c2395726615a","url":"./tags/DNS/index.html"},{"revision":"297973edf89c9ec6afe05828a9601c16","url":"./tags/Flash/index.html"},{"revision":"bf58710bf163d73fd553bd56511e64ce","url":"./tags/GFW/index.html"},{"revision":"2a8a54580a9a27ed84757ece828288bd","url":"./tags/Gridea/index.html"},{"revision":"41fb3ba7fbaee2a7f577ebf19b480f79","url":"./tags/HTML/index.html"},{"revision":"00f967ca9c51c4d9f187ce678ffcfafd","url":"./tags/index.html"},{"revision":"95a89864fc5737af47eec6f88d446e01","url":"./tags/JavaScript/index.html"},{"revision":"d7357527e3513ec7f3e41fcddd5eb40b","url":"./tags/JQuery/index.html"},{"revision":"01aaeed692b04e4c4cd8f103cf89cc2a","url":"./tags/MetingJS/index.html"},{"revision":"ff0115a56a75b786fe6af8fa259aad3f","url":"./tags/NexT/index.html"},{"revision":"538a9e12464dcc154baefdf23db92ceb","url":"./tags/RSA/index.html"},{"revision":"6df1a1eaf44fb50bbc2c8f7767c5fd19","url":"./tags/Vercel/index.html"},{"revision":"d8ffee8c91c8358b8fd2f69df4dce1c3","url":"./tags/分享/index.html"},{"revision":"e61982eb9563f26ef1fe3b6a398ee08c","url":"./tags/加密/index.html"},{"revision":"bfee88db1ec0f32f277bb362cd6756a0","url":"./tags/加载动画/index.html"},{"revision":"859367918e2c6d2f01861e620ab4a254","url":"./tags/右键菜单/index.html"},{"revision":"b51ccb9076c7256eb442ae861cdabc89","url":"./tags/域名/index.html"},{"revision":"ca5791f5072f2ed89f3f24cfd9c0b3cf","url":"./tags/密码学/index.html"},{"revision":"75629b7ab0a171f9c10f5ec816b70f3b","url":"./tags/建站/index.html"},{"revision":"88a72108d5ccd8c61038aeca0f953cd7","url":"./tags/插件/index.html"},{"revision":"4c439df07551a29a55eb325ee68f19f4","url":"./tags/服务器/index.html"},{"revision":"e6af086586211318f029c4c741f5f47d","url":"./tags/网页源码/index.html"},{"revision":"4e72097bf59705bd97af2d7755f2303f","url":"./tags/美化/index.html"},{"revision":"5a97a4fa0d5f89c2802ab01a9acb2abc","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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