const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"c00e43ce06e6bd953d0cf81dc65ccf44","url":"./404.html"},{"revision":"5a094dfc5ffc1c587d8cb29fd7410925","url":"./about/index.html"},{"revision":"57a1876ceae24ff132cb8ebca182dd2c","url":"./archives/2022/06/index.html"},{"revision":"dd066307d06e2d52702b22cf91031212","url":"./archives/2022/07/index.html"},{"revision":"77cda94bb73ea4b63e590dbd32aee391","url":"./archives/2022/08/index.html"},{"revision":"086926b6574f528e80351fd970cd9584","url":"./archives/2022/10/index.html"},{"revision":"cb6d5ba36817054fd4f1098815739e46","url":"./archives/2022/11/index.html"},{"revision":"296f3b27b62ff2344f2a7b1a7ec6ce7e","url":"./archives/2022/12/index.html"},{"revision":"627a244067f21cf3f10f30b2608718b6","url":"./archives/2022/index.html"},{"revision":"c7350677b41623857666e7aedfaba9d3","url":"./archives/2022/page/2/index.html"},{"revision":"a7e083ec4ce55047be635cf300e85782","url":"./archives/2023/02/index.html"},{"revision":"38c94e8f66cd06d974a512b06fc390d6","url":"./archives/2023/04/index.html"},{"revision":"d46b559766587e400205c77287d3b76a","url":"./archives/2023/index.html"},{"revision":"2a47f23e096e391a1a4f1f858058594f","url":"./archives/2024/04/index.html"},{"revision":"774104bc3225d4ef6f6f3a6aa512aa6f","url":"./archives/2024/index.html"},{"revision":"69d61056afaa4f946a57bdced91bdd19","url":"./archives/index.html"},{"revision":"842b9329746ec17457dde4b3dc496508","url":"./archives/page/2/index.html"},{"revision":"66021525fe9f2e824ce189802a9a9fe9","url":"./categories/AI/index.html"},{"revision":"77006833f4f2dfc2a83d252ac5266177","url":"./categories/Gridea/index.html"},{"revision":"0f37c00992c505e867ae8393b29754e7","url":"./categories/index.html"},{"revision":"0bb9a27854d4b89ceeb5a2909d8c1cf7","url":"./categories/Vercel/index.html"},{"revision":"365a9cf973b2a6ca39107217ed51c87a","url":"./categories/休闲/index.html"},{"revision":"b82b128c24b61af94ef2762f8a1bb792","url":"./categories/建站/index.html"},{"revision":"5c9a9a902de79e9d355a96ed0399d6d6","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"913a7566b78ce187d5355a7d415e53b4","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"982f77e37adcb7ffe798a42e4df97d7f","url":"./go/index.html"},{"revision":"e3a242c843cfba440f9767369c6fd417","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"573cfd5e73184f2421e2f3b180c60cd4","url":"./link/index.html"},{"revision":"91afd65862e4e46e77cab2139b789b7e","url":"./message/index.html"},{"revision":"591c87029c9b2b5093db56893e0c4325","url":"./page/2/index.html"},{"revision":"cf985cb66a3d4ffff8ed390ffb50e455","url":"./post/193912eb/index.html"},{"revision":"960981ea745f4954cccf652c47ec11ab","url":"./post/220b8380/index.html"},{"revision":"5eedc3f1ef77cea2692483691afe7e2d","url":"./post/24dc856c/index.html"},{"revision":"5794b306c7f5350d26ff9a572164a9be","url":"./post/3082b2c6/index.html"},{"revision":"e50ca96c41aca9f65d78988582e8ae40","url":"./post/3df9585/index.html"},{"revision":"bed2c12972c290b0ea358c5ac825a2cc","url":"./post/4a17b156/index.html"},{"revision":"7846afe30cf68fb19d624e5bbb3b1c22","url":"./post/739f0a30/index.html"},{"revision":"f6834e9626a89af1b427b73fadd9c453","url":"./post/73fccf9a/index.html"},{"revision":"19731c63da276c085a31a0a978406bbe","url":"./post/7ca5704e/index.html"},{"revision":"7bf5750f80a00844cf4b3783b7b3a8ff","url":"./post/7fc77154/index.html"},{"revision":"1399ad965736efa404a11639a9e38590","url":"./post/8422c4dc/index.html"},{"revision":"dd7090e78af06e9a49a3a0e6735f3db5","url":"./post/9c60e209/index.html"},{"revision":"8dbb02647737ea3ac5bc85fe371c5f95","url":"./post/d50c4d0e/index.html"},{"revision":"b6577f31f750e08354af1f8e9b9865f2","url":"./post/db569493/index.html"},{"revision":"cb9c956cdfe90846c26ddc586ed512ca","url":"./post/dd83a796/index.html"},{"revision":"c17f609d3a4dd4e1ec37fb81f31c89f7","url":"./post/f82f332a/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"452b86ff1ab98f84a1d3396dc9c401a9","url":"./tags/AI/index.html"},{"revision":"c36f4e79024fe04f0061edf2a17792b2","url":"./tags/Aplayer/index.html"},{"revision":"74a464a41bad86b9b31190f0fef4b856","url":"./tags/Bing/index.html"},{"revision":"5c4b17dd00a617c8f984373e0eed8b11","url":"./tags/BUG/index.html"},{"revision":"6adbe7a0c8f5eaf4a1424cf1e3a060a7","url":"./tags/css/index.html"},{"revision":"46f5e73d7e71f31a061bd37ffb829994","url":"./tags/DNS/index.html"},{"revision":"32b37d1e5bb189f119a14bc49d43d9c2","url":"./tags/Flash/index.html"},{"revision":"672a5df1c2f8d848a03ed098284513ff","url":"./tags/GFW/index.html"},{"revision":"bc205eadfca5c9b6fc1e6746000639ee","url":"./tags/Gridea/index.html"},{"revision":"2461d5b09dbd87e6d50581e5401c0038","url":"./tags/HTML/index.html"},{"revision":"a18607a1b045fd6c52572cf5895bf996","url":"./tags/index.html"},{"revision":"6700b5736f391d2fdc2f08fe80d94c04","url":"./tags/JavaScript/index.html"},{"revision":"db42ae48393fd7d2322cce522908eb16","url":"./tags/JQuery/index.html"},{"revision":"61342685f8ddfc0f0f0c436d737e5f45","url":"./tags/MetingJS/index.html"},{"revision":"ab7c8164f9c386e9f6b8987e478d3a59","url":"./tags/NexT/index.html"},{"revision":"9f1246ffc105d5a4cfb9b19adb83c72b","url":"./tags/Vercel/index.html"},{"revision":"641b165caeaa8b7cfc33fcfd450ec246","url":"./tags/分享/index.html"},{"revision":"05c786f0349052eb15cde9bd6dc7e334","url":"./tags/加载动画/index.html"},{"revision":"04d9ebfed5ca83a6a293fd09ff68af42","url":"./tags/右键菜单/index.html"},{"revision":"42cb6ae7ea8bba43656b60b3cbef344f","url":"./tags/域名/index.html"},{"revision":"231c629f8dcfa57c8a75e164d70085f5","url":"./tags/建站/index.html"},{"revision":"7118f47a5cf3c806122380c75068622b","url":"./tags/插件/index.html"},{"revision":"4c0ea7bc5939f3e3408afd98fe1a4ec0","url":"./tags/服务器/index.html"},{"revision":"afd5dc38949657a712ea94e6b1f5c290","url":"./tags/网页源码/index.html"},{"revision":"ccafe8ee1a5c83400f1a52af290fde1e","url":"./tags/美化/index.html"}]);

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

workbox.googleAnalytics.initialize();