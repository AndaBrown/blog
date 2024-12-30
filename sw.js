const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"012dd86005837b730405683106a76dbd","url":"./404.html"},{"revision":"4a26d744a04da3ce48841150dee1c145","url":"./about/index.html"},{"revision":"c88983aafebc6991747ec5fd4b1b5532","url":"./archives/2022/06/index.html"},{"revision":"4c1ef2451e7686d9826c318baa450f3d","url":"./archives/2022/07/index.html"},{"revision":"2a6231c3ee74f5078296c8c33a3ee5e7","url":"./archives/2022/08/index.html"},{"revision":"85f8b6198ccd49a929c3cbedce7324a1","url":"./archives/2022/10/index.html"},{"revision":"d25639e8f11882ab18d20f98b8a05389","url":"./archives/2022/11/index.html"},{"revision":"75bd936ddaf658ce9dd3daa42a83c0a2","url":"./archives/2022/12/index.html"},{"revision":"6a91529047c9e809d915a415a7dacf7f","url":"./archives/2022/index.html"},{"revision":"8337ce973cb7ad179720ec803e8780af","url":"./archives/2022/page/2/index.html"},{"revision":"cf3295f8c8f7453e6a8857259ac7b3ed","url":"./archives/2023/02/index.html"},{"revision":"6b7505fe6034c5537861dd29ec541e17","url":"./archives/2023/04/index.html"},{"revision":"6b948c1f8130384c2ca3f5a02866e821","url":"./archives/2023/index.html"},{"revision":"a8574e927422abbbc0b4a3307cee7311","url":"./archives/2024/04/index.html"},{"revision":"13f3b731f10bee13f234af75741288af","url":"./archives/2024/05/index.html"},{"revision":"5047a52e908335d956a02f2f4120e4f7","url":"./archives/2024/06/index.html"},{"revision":"c2bd4b0598b99d45932466c71122be0b","url":"./archives/2024/09/index.html"},{"revision":"c47d71510d2f334e99608690a28b2dfd","url":"./archives/2024/index.html"},{"revision":"d72b5b2864780b8a83570c9c31be7d6a","url":"./archives/index.html"},{"revision":"3a8161e7b394fb4758627ae555ffcdf6","url":"./archives/page/2/index.html"},{"revision":"6bc03bc2fd6a86e7a2dfb51fc2e7e359","url":"./archives/page/3/index.html"},{"revision":"4b750928fb234464ed555bccdeee8121","url":"./categories/AI/index.html"},{"revision":"526c8f35337952a76a61c06baf103fc1","url":"./categories/Gridea/index.html"},{"revision":"a85d84604aaea017f257471362ee46e5","url":"./categories/index.html"},{"revision":"b15d2ff333cc26e5a263f78eeb77f58b","url":"./categories/Vercel/index.html"},{"revision":"4a6c2b110198e430f0fda4dd338caba0","url":"./categories/休闲/index.html"},{"revision":"24b24ca2ced1b6b8e853cd3868eb7709","url":"./categories/建站/index.html"},{"revision":"c7fe4e5596c8f3beb753ecbf2d956f95","url":"./categories/科普/index.html"},{"revision":"c29bc4664cd51c350b2922a0b17c0a77","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"089948d7403d37732f3d2ed6d2f5186b","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"726e973550de916cdf364d2e727a07f7","url":"./go/index.html"},{"revision":"2fa3f37e2d4e88fd812be20a6cf1df89","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"b2c5805621f015b9e810819cab57e229","url":"./link/index.html"},{"revision":"ba0ef208651b75a326239ab1e5da8635","url":"./message/index.html"},{"revision":"1130b461fbae67611c5ce802068bd48d","url":"./page/2/index.html"},{"revision":"6abc88dfe66b9f5303f95b77a7875dcc","url":"./page/3/index.html"},{"revision":"c5949f4298903dbbe27e138b0ae79b49","url":"./post/193912eb/index.html"},{"revision":"5785de20c2a0e2db6f85b0f44380ef10","url":"./post/220b8380/index.html"},{"revision":"35d9617e9efc898baff33a5f4d257733","url":"./post/24dc856c/index.html"},{"revision":"15dfeb06acaf62936ff96ca715d66d08","url":"./post/3082b2c6/index.html"},{"revision":"d92cbbe069a4897933d68ae4fd60ae55","url":"./post/3df9585/index.html"},{"revision":"8f20df1ac57938ba030f3ef16c432605","url":"./post/4a17b156/index.html"},{"revision":"ee5bdc67483b00c41e7c2c7cb021e5ea","url":"./post/739f0a30/index.html"},{"revision":"7a41a7df9e1ad83419a6d9161fab90c4","url":"./post/73fccf9a/index.html"},{"revision":"c3502db23439ce45686d380c910bb1b1","url":"./post/7ca5704e/index.html"},{"revision":"2d54235080e665cbf07977a44a598ce3","url":"./post/7fc77154/index.html"},{"revision":"b51ca9da7a4c6f523d2ab2c150e79c39","url":"./post/8097b5e3/index.html"},{"revision":"c1a03d76706e95d62eeb43b363d0e410","url":"./post/8422c4dc/index.html"},{"revision":"f906865e1f5fa8e87e9aa5a73414d91e","url":"./post/99c7fa1c/index.html"},{"revision":"9eb16e6d4f0d2c97d6ef4b8d949f5f90","url":"./post/9c60e209/index.html"},{"revision":"cc183bd278cbdbebf6bc3c6650d2b831","url":"./post/ae58d2f1/index.html"},{"revision":"8745aa92c68886075ae81125776f3227","url":"./post/d4550abf/index.html"},{"revision":"477c72f230e8e407263733c720b31070","url":"./post/d50c4d0e/index.html"},{"revision":"3795728fd3f229b7b2ee11c434d7efcf","url":"./post/db569493/index.html"},{"revision":"4d13f6b9fe07a24a86475d1f0ffd1e8d","url":"./post/dd83a796/index.html"},{"revision":"9d8291191afb73936ac864496d9e3187","url":"./post/f82f332a/index.html"},{"revision":"73d943a1b846f861d432d122daa59ff1","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"78baf73a0afcab0a46fe3443ed899552","url":"./tags/AI/index.html"},{"revision":"73e1803e97866c3696400e54198f2f89","url":"./tags/Aplayer/index.html"},{"revision":"ce8a2c9906f1176811e717892e03bb88","url":"./tags/Bing/index.html"},{"revision":"0c8e9e26d61af201509a7b8fc63e5eaa","url":"./tags/BUG/index.html"},{"revision":"29f6cc3f061904748d4513896c3a06c9","url":"./tags/CDN/index.html"},{"revision":"78bbeac5ccb29de0b79e910ade9da093","url":"./tags/CMS/index.html"},{"revision":"696a27578ce4c83f5eb0b0757844d524","url":"./tags/css/index.html"},{"revision":"d91ab6ff9d5a60c465fc5b10ebc5d80b","url":"./tags/DNS/index.html"},{"revision":"be42dee90ae02a0347fe4b2b4afc35db","url":"./tags/Flash/index.html"},{"revision":"9862d797e231bc52f6f9791fbab1f900","url":"./tags/GFW/index.html"},{"revision":"ca8a50637992e3bb601e9b9b84b724d1","url":"./tags/Gridea/index.html"},{"revision":"9d6c84c6ae3fdcaca28a464af443ad2c","url":"./tags/HTML/index.html"},{"revision":"047a736de1a0a79771337c619476435c","url":"./tags/index.html"},{"revision":"431d09edfee20efcc01c45f3b2ab6e3e","url":"./tags/JavaScript/index.html"},{"revision":"2b82390409b7c5fef63e942f83f8131f","url":"./tags/JQuery/index.html"},{"revision":"bcb8b4fb11d8942148c69861ee641130","url":"./tags/MetingJS/index.html"},{"revision":"6e9b14c2e77854427ef6b974c3f4bf55","url":"./tags/NexT/index.html"},{"revision":"e5ffab0328ab121e9a7bb2d1d2987857","url":"./tags/P2P/index.html"},{"revision":"992fea0c10145d7bc04f93e053050e5e","url":"./tags/RSA/index.html"},{"revision":"028cc283973f0c7102eb85f5590385c4","url":"./tags/Vercel/index.html"},{"revision":"3b5ac0b72efa27eac728b6e03e8e8c56","url":"./tags/分享/index.html"},{"revision":"d57af3e341082c4ddf0daf4750eb04df","url":"./tags/加密/index.html"},{"revision":"ab3980007f63a3b2d5f6d2c413619fa6","url":"./tags/加载动画/index.html"},{"revision":"fa953431715f1fd3a584a3c2a93308fa","url":"./tags/右键菜单/index.html"},{"revision":"77d0f346caa42cd59dbcc69034ca25db","url":"./tags/域名/index.html"},{"revision":"05e149ecf4f287420d46a404ed13058a","url":"./tags/密码学/index.html"},{"revision":"272d115b36cc5e18e5a979a1c221bfb7","url":"./tags/建站/index.html"},{"revision":"14a8bc22986ee320e7e9198ad77837b7","url":"./tags/插件/index.html"},{"revision":"5dbc7605e1db29916adcaa2e4e24ee76","url":"./tags/服务器/index.html"},{"revision":"71e8c43be0d5a9fe4c11dec1518109af","url":"./tags/网页源码/index.html"},{"revision":"ce4a595288989e1c2e07f38a1e263401","url":"./tags/美化/index.html"},{"revision":"c6b2efd43c1571dcb43519d5349ceb9e","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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