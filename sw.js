const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"a713a4392b94fa312638b50e0030f168","url":"./404.html"},{"revision":"d92e80afe42fe72b071a5a35274ba0a6","url":"./about/index.html"},{"revision":"b43ebaad6d1179fd04225ba6ab91cf3b","url":"./archives/2022/06/index.html"},{"revision":"b09a2724cbe9d0afc1a3d6c75cd849a1","url":"./archives/2022/07/index.html"},{"revision":"f6b537a6a1c557db7d1bd56f2257635f","url":"./archives/2022/08/index.html"},{"revision":"334cb2c2867684438155a0bfd68a2fbc","url":"./archives/2022/10/index.html"},{"revision":"3607afacaa0a1ef5b3490371f49308ab","url":"./archives/2022/11/index.html"},{"revision":"07f9717ddb9ec2ff50e8371334a33ec1","url":"./archives/2022/12/index.html"},{"revision":"a8ce4f03e5bcb2367ab787b77a7e0ff3","url":"./archives/2022/index.html"},{"revision":"6814f45ba1279709b4befc762de3296d","url":"./archives/2022/page/2/index.html"},{"revision":"1ef0eac02143d95d7b611554774503a7","url":"./archives/2023/02/index.html"},{"revision":"f1e95f5b6ad5d98d9cb60ea674f48a0d","url":"./archives/2023/04/index.html"},{"revision":"02f8cd87c0885966a2d39d7ccaac13fe","url":"./archives/2023/index.html"},{"revision":"62b1ff7d31084a593cce53245730cda3","url":"./archives/2024/04/index.html"},{"revision":"1e0232d591421d3b9fbeea281501e8e7","url":"./archives/2024/05/index.html"},{"revision":"3de92129c6f050c606abcaddfdebfec2","url":"./archives/2024/06/index.html"},{"revision":"119b2b4770c9d4a0716fa211c6017cb4","url":"./archives/2024/09/index.html"},{"revision":"29330a21d27b5f9d748cb2653a18a185","url":"./archives/2024/index.html"},{"revision":"669063ba25c8397c5d15bbe06870d86c","url":"./archives/index.html"},{"revision":"5fec46802abc7125164cf6c61d168d2a","url":"./archives/page/2/index.html"},{"revision":"d960b6c7450bbdb8c22a8f7bf42e0f4e","url":"./archives/page/3/index.html"},{"revision":"60fd40db3a166fd36d24f0f67510d53d","url":"./categories/AI/index.html"},{"revision":"f58fd4ac72c4c08f0f76d26b3a82eb13","url":"./categories/Gridea/index.html"},{"revision":"1e01fad1dc56a7f9f883436371fcb276","url":"./categories/index.html"},{"revision":"ce9a2a7a88d98803638540463ddb7ad4","url":"./categories/Vercel/index.html"},{"revision":"4c25bb301f16453465bd6e2e6c460d61","url":"./categories/休闲/index.html"},{"revision":"f6ebe89874a84273729c0d40fe57ea45","url":"./categories/建站/index.html"},{"revision":"eb7e69935abf9aa2779d6e9b2a9e5e88","url":"./categories/科普/index.html"},{"revision":"bede0e988f322c73c8d906dabb91cc7e","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"ef53857e761700e2ade2a4f2bb7768a9","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"49042251484ab18660da771f47692b3f","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"802ca80b9606d70a19f4c83bf4445248","url":"./link/index.html"},{"revision":"95d0ffd6ecc3c8110dad9ec4ab5e06a0","url":"./message/index.html"},{"revision":"4bb1ef0719c293ade1a4d24bb524c8fd","url":"./page/2/index.html"},{"revision":"e39a95f71f45a7d530e03c092239c279","url":"./page/3/index.html"},{"revision":"c5949f4298903dbbe27e138b0ae79b49","url":"./post/193912eb/index.html"},{"revision":"5785de20c2a0e2db6f85b0f44380ef10","url":"./post/220b8380/index.html"},{"revision":"35d9617e9efc898baff33a5f4d257733","url":"./post/24dc856c/index.html"},{"revision":"15dfeb06acaf62936ff96ca715d66d08","url":"./post/3082b2c6/index.html"},{"revision":"d92cbbe069a4897933d68ae4fd60ae55","url":"./post/3df9585/index.html"},{"revision":"8f20df1ac57938ba030f3ef16c432605","url":"./post/4a17b156/index.html"},{"revision":"ee5bdc67483b00c41e7c2c7cb021e5ea","url":"./post/739f0a30/index.html"},{"revision":"7a41a7df9e1ad83419a6d9161fab90c4","url":"./post/73fccf9a/index.html"},{"revision":"c3502db23439ce45686d380c910bb1b1","url":"./post/7ca5704e/index.html"},{"revision":"2d54235080e665cbf07977a44a598ce3","url":"./post/7fc77154/index.html"},{"revision":"b51ca9da7a4c6f523d2ab2c150e79c39","url":"./post/8097b5e3/index.html"},{"revision":"c1a03d76706e95d62eeb43b363d0e410","url":"./post/8422c4dc/index.html"},{"revision":"f906865e1f5fa8e87e9aa5a73414d91e","url":"./post/99c7fa1c/index.html"},{"revision":"9eb16e6d4f0d2c97d6ef4b8d949f5f90","url":"./post/9c60e209/index.html"},{"revision":"cc183bd278cbdbebf6bc3c6650d2b831","url":"./post/ae58d2f1/index.html"},{"revision":"8745aa92c68886075ae81125776f3227","url":"./post/d4550abf/index.html"},{"revision":"477c72f230e8e407263733c720b31070","url":"./post/d50c4d0e/index.html"},{"revision":"3795728fd3f229b7b2ee11c434d7efcf","url":"./post/db569493/index.html"},{"revision":"4d13f6b9fe07a24a86475d1f0ffd1e8d","url":"./post/dd83a796/index.html"},{"revision":"9d8291191afb73936ac864496d9e3187","url":"./post/f82f332a/index.html"},{"revision":"73d943a1b846f861d432d122daa59ff1","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"fa6e0b2102d77b0400e5f66a5c7c908c","url":"./tags/AI/index.html"},{"revision":"536d36c9ec3232b5d147520f5d519304","url":"./tags/Aplayer/index.html"},{"revision":"399ef93fd40b2ed4844ebebd1ab6f283","url":"./tags/Bing/index.html"},{"revision":"57bd647dfbaa6554b7f83781f399af03","url":"./tags/BUG/index.html"},{"revision":"0e228d033acf531f692188cee2b0f6af","url":"./tags/CDN/index.html"},{"revision":"5d3e1d76723010eacf0006688eae4d0a","url":"./tags/CMS/index.html"},{"revision":"c5b10e9560f03e2d297d6206f418c891","url":"./tags/css/index.html"},{"revision":"db43d5225773884ab2d44c8f1118c3bd","url":"./tags/DNS/index.html"},{"revision":"4bf292671eb5a668d1bbaf630404d444","url":"./tags/Flash/index.html"},{"revision":"eff4a0f095dfc80d8a3da90a068d37c8","url":"./tags/GFW/index.html"},{"revision":"65009efe354e2ce575f50f579b677ef5","url":"./tags/Gridea/index.html"},{"revision":"52e39304c72436f6a4322eb2b07abd02","url":"./tags/HTML/index.html"},{"revision":"34232d8e776680eee3b2de475c77fb62","url":"./tags/index.html"},{"revision":"00e42cbddf4e8f9e9e9a30ddc64bf615","url":"./tags/JavaScript/index.html"},{"revision":"b8bb942e011e34e43257dd8ae1182b33","url":"./tags/JQuery/index.html"},{"revision":"ef6baa0dc1eef079bc3c6b9932f92878","url":"./tags/MetingJS/index.html"},{"revision":"bfd10edea16c4a70961d1e87e34f891d","url":"./tags/NexT/index.html"},{"revision":"03ad7302fca6f1da317b8210ecafa2f3","url":"./tags/P2P/index.html"},{"revision":"b42301733068675dbd6fbe1069cc5658","url":"./tags/RSA/index.html"},{"revision":"6b875e08cd159057c137a985e2df3d39","url":"./tags/Vercel/index.html"},{"revision":"4898ea4eb677ae6f9bd31377e893f9ca","url":"./tags/分享/index.html"},{"revision":"f17885c43586c939e63b737a85acb711","url":"./tags/加密/index.html"},{"revision":"ec1c079d8785b6215b76fd833ad521b6","url":"./tags/加载动画/index.html"},{"revision":"59ae20c08d2ee0ef4f3c23537e72f535","url":"./tags/右键菜单/index.html"},{"revision":"2c5f1f2e8fdef2536d91e0ac73ab8523","url":"./tags/域名/index.html"},{"revision":"9222358dbb22c082f28729ecbd6f46b1","url":"./tags/密码学/index.html"},{"revision":"13ed382caa22690150738d280ae231bd","url":"./tags/建站/index.html"},{"revision":"afdea759292d6f95615139c98a17e1e4","url":"./tags/插件/index.html"},{"revision":"75efc729d6448ed75389afd5d639b5ee","url":"./tags/服务器/index.html"},{"revision":"d232ab7c28f37c77fad5348c3ac37ff8","url":"./tags/网页源码/index.html"},{"revision":"ca0430c26f63d3994b6b4e1d3d90880b","url":"./tags/美化/index.html"},{"revision":"af70b380371be3639de835e0cb1f41e1","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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