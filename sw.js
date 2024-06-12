const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"deab2b3f95bdb6c411cb71eb5216471f","url":"./404.html"},{"revision":"92b6ac196caea15395a21cfde0c6dde8","url":"./about/index.html"},{"revision":"5edfa957c5304ac0d5f36df572a6593d","url":"./archives/2022/06/index.html"},{"revision":"80cbf88c147fe7b9d6a3bd41af1ffa6e","url":"./archives/2022/07/index.html"},{"revision":"5814b807b91adbc9bc6ded300f9e1812","url":"./archives/2022/08/index.html"},{"revision":"0b9684690f267c2cfdde8895a2e7c1f5","url":"./archives/2022/10/index.html"},{"revision":"3f125bbbc214399ef5e50c71dde3f16d","url":"./archives/2022/11/index.html"},{"revision":"7ec3780e250a99bd4f4abbaed65da52a","url":"./archives/2022/12/index.html"},{"revision":"5d167a778ecfe2b988ea24073445e6e2","url":"./archives/2022/index.html"},{"revision":"33d5e027a02b18a454533cdcf58a8d62","url":"./archives/2022/page/2/index.html"},{"revision":"378f219bc0a7adcfc86f81d90e72f156","url":"./archives/2023/02/index.html"},{"revision":"1796b52991e0c74dd856b188295c091f","url":"./archives/2023/04/index.html"},{"revision":"8649af2037694a251d97ffb752da713d","url":"./archives/2023/index.html"},{"revision":"93521e37ac5b01073cc574c1dcb6b747","url":"./archives/2024/04/index.html"},{"revision":"95986b89fd0d5d70d46d4c39c85641d2","url":"./archives/2024/05/index.html"},{"revision":"72d5bfbc2a53a67ceafa9accc3184052","url":"./archives/2024/index.html"},{"revision":"0bb0710e7185e7201f1474a280ebf16d","url":"./archives/index.html"},{"revision":"f65b280ef873590a6651fe1036d423e4","url":"./archives/page/2/index.html"},{"revision":"05217deafbc2227b070a375e5e2b4e8e","url":"./categories/AI/index.html"},{"revision":"8863532cc829f12422660d1c38ccea67","url":"./categories/Gridea/index.html"},{"revision":"8543d40482f6a89bab7c60772b034ddd","url":"./categories/index.html"},{"revision":"a76d4a758c3b2a2dcd0a48429bb044da","url":"./categories/Vercel/index.html"},{"revision":"b90058e7741d8f7d125cdc2bf81a117e","url":"./categories/休闲/index.html"},{"revision":"bc8b1a74abd27f807faa83563e607867","url":"./categories/建站/index.html"},{"revision":"51645958c1d30efeda48a527a929c6fe","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"c13e1380071a69ba9bc39aca9d311b23","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"392419a380566e73cf5a1aef587d3079","url":"./go/index.html"},{"revision":"b3629d943c06bc220e88dcf60a72b890","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"4436f66b2a6f050f94cabc87ed963141","url":"./link/index.html"},{"revision":"a4495889e95e98e4012d66c0f4941a3e","url":"./message/index.html"},{"revision":"f46de83c9974b64eb6a7578d4cdecd56","url":"./page/2/index.html"},{"revision":"aa1e47520edf8f296b6d9c57d414f8ec","url":"./post/193912eb/index.html"},{"revision":"fc082bfd1a52f86ca7f34affa42f87cb","url":"./post/220b8380/index.html"},{"revision":"13c0331e4e7a7343acee4590f9a6584f","url":"./post/24dc856c/index.html"},{"revision":"1d9c304939b930469d79dce4aa9d74bc","url":"./post/3082b2c6/index.html"},{"revision":"fa370e7ca20f74aa35a8f734e2406d40","url":"./post/3df9585/index.html"},{"revision":"0f1d11088c0e47e229a9fe75181bcd09","url":"./post/4a17b156/index.html"},{"revision":"15b2c9d780512e5d239d291133927194","url":"./post/739f0a30/index.html"},{"revision":"b15294b5c128d11321a32018075efda1","url":"./post/73fccf9a/index.html"},{"revision":"127d3885a1c7ad4ff84fa095c02cbf0b","url":"./post/7ca5704e/index.html"},{"revision":"951a68b76407e4239d7120c787e93b65","url":"./post/7fc77154/index.html"},{"revision":"686940597c8176ac21844b0a290007e2","url":"./post/8422c4dc/index.html"},{"revision":"cbed1abf2680738c9497db9a81b041fe","url":"./post/99c7fa1c/index.html"},{"revision":"f0c2b77ad2d0b272242d321c6c64ae55","url":"./post/9c60e209/index.html"},{"revision":"396674f96076a27b0265b4d8bf39d524","url":"./post/ae58d2f1/index.html"},{"revision":"23ee95264546c987dbd76a5846d8e947","url":"./post/d4550abf/index.html"},{"revision":"36fb88e4dd47adce8d1ac0c6e32183b0","url":"./post/d50c4d0e/index.html"},{"revision":"f5f827a58d6bac55dbd7199f3181b50b","url":"./post/db569493/index.html"},{"revision":"bb8e8bfec78207fdfd4966c4fd2c893b","url":"./post/dd83a796/index.html"},{"revision":"f2fbf2776a7e5a0a3ff3524a00155dfa","url":"./post/f82f332a/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"4b0b6b44a0f0a4f98e98e4e0d9177e4c","url":"./tags/AI/index.html"},{"revision":"bc875ee70493262bd9930e1460f29a35","url":"./tags/Aplayer/index.html"},{"revision":"380ef767653c4fb1222fa0ed0c8d2738","url":"./tags/Bing/index.html"},{"revision":"dac04a57d2c49669cddf8c34b6a17da4","url":"./tags/BUG/index.html"},{"revision":"281f46746fd1f6e51d1d5c7912e0a131","url":"./tags/CDN/index.html"},{"revision":"8ce479aea179631c70618a116ee54e3b","url":"./tags/CMS/index.html"},{"revision":"8e5cf8faa00a26060be89440e47b8ca1","url":"./tags/css/index.html"},{"revision":"37d2adeec1111fe68fcfc846be673dbd","url":"./tags/DNS/index.html"},{"revision":"20cafd49e83468e63358ea415667bd25","url":"./tags/Flash/index.html"},{"revision":"c3ccd3e091fba4ffbdafadea51c2bf8e","url":"./tags/GFW/index.html"},{"revision":"a98aa6fea06e0693a510d429cf55af87","url":"./tags/Gridea/index.html"},{"revision":"e0ab05586c95cce63b9fbf755f6676d7","url":"./tags/HTML/index.html"},{"revision":"e33a9e3612dfd81b751436d16b5531d2","url":"./tags/index.html"},{"revision":"07fe5846e74ffb7993d2362fd912b4c9","url":"./tags/JavaScript/index.html"},{"revision":"707e34fff379945bfddd396bd399d41f","url":"./tags/JQuery/index.html"},{"revision":"7936c0a17a274cbac765e5195565fc3a","url":"./tags/MetingJS/index.html"},{"revision":"e8f126ec226dad95455c3fcaca8b64d5","url":"./tags/NexT/index.html"},{"revision":"74209816e81f0d964eba1e149d074ada","url":"./tags/Vercel/index.html"},{"revision":"23dbc14357be339363212719a8e48fd9","url":"./tags/分享/index.html"},{"revision":"32c73d369a90240e6b5e2fa69e205769","url":"./tags/加载动画/index.html"},{"revision":"4a685644979e1d5b6956c1532fb3a4c1","url":"./tags/右键菜单/index.html"},{"revision":"a3d6fe5f76a4d7e97dbb97224a3c28f8","url":"./tags/域名/index.html"},{"revision":"c666e894e70d50331b5f8cfda91e4039","url":"./tags/建站/index.html"},{"revision":"025f6583a735ecd144e39f28b1788689","url":"./tags/插件/index.html"},{"revision":"94ab30317937aa528f819346970108d7","url":"./tags/服务器/index.html"},{"revision":"0d70ec9275a5b9512cd53ecef3ebe1a0","url":"./tags/网页源码/index.html"},{"revision":"b13e666308bfbdaed053cb96e7bacf4d","url":"./tags/美化/index.html"},{"revision":"99bf6ba490dec42960d53581661d046f","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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