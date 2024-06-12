const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"0f28bdd23fada89ae58be7c86ca1b982","url":"./404.html"},{"revision":"b1c41c57c2dddfcfb88df910e4881b24","url":"./about/index.html"},{"revision":"b1e7fb1ea1edbb5a484e819394c025c9","url":"./archives/2022/06/index.html"},{"revision":"7609b59eaf5f26f9fcf9aa48edc5bc30","url":"./archives/2022/07/index.html"},{"revision":"c039fabff0ebbe700425b7a24b821ae1","url":"./archives/2022/08/index.html"},{"revision":"6cdf1d908afd98d0a380b9f6b7071cce","url":"./archives/2022/10/index.html"},{"revision":"d69204f783b34028716459652d3e064c","url":"./archives/2022/11/index.html"},{"revision":"92958cc6d06b4427ccdc96630e4e536e","url":"./archives/2022/12/index.html"},{"revision":"5b528bb105f43144e92fe7d42915a7b6","url":"./archives/2022/index.html"},{"revision":"65fb73730f8318e568786833073f87e2","url":"./archives/2022/page/2/index.html"},{"revision":"3dbd892590b2802e348205e0fa9010f2","url":"./archives/2023/02/index.html"},{"revision":"72c65830a731e8c73faf74ced38f4fd7","url":"./archives/2023/04/index.html"},{"revision":"a93798d9d270b7cf88ddce289de4d288","url":"./archives/2023/index.html"},{"revision":"73a629185cdb509a6019959e90889f21","url":"./archives/2024/04/index.html"},{"revision":"5334df198bdfaf86f70523f1a62ec7d2","url":"./archives/2024/05/index.html"},{"revision":"279f67d427a8245ed68ec7c0dff584f8","url":"./archives/2024/index.html"},{"revision":"7e54c158d9182f8ca8192273ae5e22f2","url":"./archives/index.html"},{"revision":"f6d3a3d649966481b55b1b16ae68ac44","url":"./archives/page/2/index.html"},{"revision":"0b97f5292c1eb0fddea10c6774682964","url":"./categories/AI/index.html"},{"revision":"25267b27b45822f999737610e7912603","url":"./categories/Gridea/index.html"},{"revision":"6a2748c5de075256ac3f21572d052a33","url":"./categories/index.html"},{"revision":"4d17a75da9cfb2c4b5b0d22b14570eed","url":"./categories/Vercel/index.html"},{"revision":"91d695daeb7cad8eddb60f95501286b7","url":"./categories/休闲/index.html"},{"revision":"2bc6188390f0ad0cd68587c299300279","url":"./categories/建站/index.html"},{"revision":"465b6361aa7840e376ff98aa8b54ee2a","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"0bc78487500fb9c6675da66615781aac","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"73685c41cd018884f98eb5972d9a4cdd","url":"./go/index.html"},{"revision":"9e7413178534f6cbe22556365d10683e","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"940adef34f97109d612f1ce379d85485","url":"./link/index.html"},{"revision":"648283f57bf23f695eb2a3403821781b","url":"./message/index.html"},{"revision":"4b6e332c88e9aecda3c7401de7da9b06","url":"./page/2/index.html"},{"revision":"5fec5527c73cce2935013e0719e1154e","url":"./post/193912eb/index.html"},{"revision":"9e8080e2de07b7af6778b33b07b8a5ba","url":"./post/220b8380/index.html"},{"revision":"9153be6a9ccc92eab406855f7b9fcac6","url":"./post/24dc856c/index.html"},{"revision":"efe6d63502a2cfa8ff46476985c5fe55","url":"./post/3082b2c6/index.html"},{"revision":"69e5ae404deeb684f42b4534aad9a14e","url":"./post/3df9585/index.html"},{"revision":"7a674271e7852f3d14cd7c7d2ecb9183","url":"./post/4a17b156/index.html"},{"revision":"5b4c971d5456f06c235564d380dd58ac","url":"./post/739f0a30/index.html"},{"revision":"0f4c78eef6d63284d3391102ad31aeb9","url":"./post/73fccf9a/index.html"},{"revision":"e7fadd8e93324ef1c4354433710b53b5","url":"./post/7ca5704e/index.html"},{"revision":"c18b795121b39ab993a1165a373289f1","url":"./post/7fc77154/index.html"},{"revision":"f1e9844db96ec7b7d0f2a4537bc9d127","url":"./post/8422c4dc/index.html"},{"revision":"9254ee8b87041e9a1471c5a5b483662b","url":"./post/99c7fa1c/index.html"},{"revision":"d5601658dd257a84b8f1b236de06b936","url":"./post/9c60e209/index.html"},{"revision":"2c42475cace0c6e5fd9f7bf44dd9fe90","url":"./post/ae58d2f1/index.html"},{"revision":"ccbc7c24e8763f7b3a83f77782e3f265","url":"./post/d4550abf/index.html"},{"revision":"0d4bc2baba68d336d227c77eb94ce61b","url":"./post/d50c4d0e/index.html"},{"revision":"f86cef4b4c7120594c4ee550504604f8","url":"./post/db569493/index.html"},{"revision":"eb9acdf126aa6029090574af6c3d02d3","url":"./post/dd83a796/index.html"},{"revision":"b0d8274c443e5d205776a0442c0bacef","url":"./post/f82f332a/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"187604138dc23841886c14e299ce3e7a","url":"./tags/AI/index.html"},{"revision":"621835d717b9f318518fc66dc239832d","url":"./tags/Aplayer/index.html"},{"revision":"8439a1c9dde847ff4397325f12bca3d2","url":"./tags/Bing/index.html"},{"revision":"5a1ee410fb8f04be54d9ce79208c9464","url":"./tags/BUG/index.html"},{"revision":"3925c9af07c2430333d9d90b054ebd92","url":"./tags/CDN/index.html"},{"revision":"a01cb4b829d40c1d8573517956943c3e","url":"./tags/CMS/index.html"},{"revision":"e4fe29b304a082faf725b93e3b3e8334","url":"./tags/css/index.html"},{"revision":"e05a8dd22be22eb65e3d6013bcde2fb7","url":"./tags/DNS/index.html"},{"revision":"0181d5f66266185bb568061f151f0720","url":"./tags/Flash/index.html"},{"revision":"b80782733f9e5bf968170d4e723dac47","url":"./tags/GFW/index.html"},{"revision":"655ec45fdd88d44ce3ad4e76ce3faf88","url":"./tags/Gridea/index.html"},{"revision":"18b32a62fea5a941513395d2e52a1557","url":"./tags/HTML/index.html"},{"revision":"72829b97747d7e16b4051c72693cad3a","url":"./tags/index.html"},{"revision":"c17199633cfdea6bc6dbc0f14b8bbd06","url":"./tags/JavaScript/index.html"},{"revision":"2d16f865d4160c489f55df0eb65aa1ed","url":"./tags/JQuery/index.html"},{"revision":"32c2b3804eef04ba47a20d463a9bc5a8","url":"./tags/MetingJS/index.html"},{"revision":"2476c91a89e16b76c27e4c01bc8f21b2","url":"./tags/NexT/index.html"},{"revision":"09b4d4b1a7847a6eea73d38e33582204","url":"./tags/Vercel/index.html"},{"revision":"bb4e72fb78d2196f842edfc909a05f86","url":"./tags/分享/index.html"},{"revision":"90771021f6f55eddaf6254176a1916db","url":"./tags/加载动画/index.html"},{"revision":"487f5fd8aaba37171e8bc96b6456d3be","url":"./tags/右键菜单/index.html"},{"revision":"5b32643ea958751b3a159ee83634d83b","url":"./tags/域名/index.html"},{"revision":"ee142324ba41ffdba7e82c1067252903","url":"./tags/建站/index.html"},{"revision":"7a8a7e81bc593c61eb8e4d937ddcb147","url":"./tags/插件/index.html"},{"revision":"2ea31ce32d0cd51cd92e43009f75eab4","url":"./tags/服务器/index.html"},{"revision":"e0ae8fbc2481d046c17868965f9d2291","url":"./tags/网页源码/index.html"},{"revision":"1d5b25104fa3250356a8c0fed3ea1aee","url":"./tags/美化/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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