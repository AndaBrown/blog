const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"fc2df592d6864392909ddd4acb23f2a1","url":"./404.html"},{"revision":"9f4a85d8dae8110c24e55982e48b8475","url":"./about/index.html"},{"revision":"01a28436326340abea1f9786ef09479e","url":"./archives/2022/06/index.html"},{"revision":"f5ac74957346693e891a4d99fa5175b7","url":"./archives/2022/07/index.html"},{"revision":"6b21e2be893eb584ad02614ab6cda36c","url":"./archives/2022/08/index.html"},{"revision":"f62d15cb41ccf85faa4fbbe745986d95","url":"./archives/2022/10/index.html"},{"revision":"b78e06b7093e0846f326354de1a21469","url":"./archives/2022/11/index.html"},{"revision":"6008dd9b6cf61d7cf378dece50b2ddc9","url":"./archives/2022/12/index.html"},{"revision":"12d8928448aeb4dd41df0936ca7d0ae2","url":"./archives/2022/index.html"},{"revision":"8c8bab3511fee4577c37f865c3f065ad","url":"./archives/2022/page/2/index.html"},{"revision":"22db143f7d4106874260a7bb2e7d7d17","url":"./archives/2023/02/index.html"},{"revision":"eb337aeca8f65b7686a9f00d3bb87f1a","url":"./archives/2023/04/index.html"},{"revision":"b2d58a6dd61555c6721e798abb8b9a95","url":"./archives/2023/index.html"},{"revision":"e129a8d19fed0abbfea96cbdcfcb0b6a","url":"./archives/2024/04/index.html"},{"revision":"a35ef51176c22b8dc1c1fb96eef65591","url":"./archives/2024/05/index.html"},{"revision":"f0de9774e50cf7356ccf3c3fafffff1b","url":"./archives/2024/06/index.html"},{"revision":"a06257f0bf17df4353ed80a7410eaf16","url":"./archives/2024/09/index.html"},{"revision":"5a2bb5c77a325f38e6ec51309917453c","url":"./archives/2024/index.html"},{"revision":"0c65b4cb94e961dafb16d353e3e76819","url":"./archives/index.html"},{"revision":"ee346778e734a6f4fc6bb62e6b61f5db","url":"./archives/page/2/index.html"},{"revision":"85617d04b00bd370e7baa39a83a0e8bb","url":"./archives/page/3/index.html"},{"revision":"17a441f941593c52791891dbe68c8d1c","url":"./categories/AI/index.html"},{"revision":"e4274629afe3b3f61b4e1614a9d21a75","url":"./categories/Gridea/index.html"},{"revision":"84bd5a732964dc2951bc7b633001c590","url":"./categories/index.html"},{"revision":"8e659fe0106e824d3764bd9d4921e754","url":"./categories/Vercel/index.html"},{"revision":"5b66e4f7dadbfa525ce761ea1d09ae51","url":"./categories/休闲/index.html"},{"revision":"cce61c28fc481ef80e72051a57eca724","url":"./categories/建站/index.html"},{"revision":"c263f4e2fb3cc2afc585879fc5e6131f","url":"./categories/科普/index.html"},{"revision":"7115bd6183e3bdd374bc6e0971c75214","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"677f1254e8185e5a6c1e676a0a7bf0ff","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"8668bffb29c1f1110e3b2681ce81a20e","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"8aa5ae20577380740188c5a4c05d1367","url":"./link/index.html"},{"revision":"66690392d38ddb00a45a49e313b43895","url":"./message/index.html"},{"revision":"a140d9a64662cfd9f9c81ac9c980427a","url":"./page/2/index.html"},{"revision":"93828357e1e24f400190c9ee57d9ab22","url":"./page/3/index.html"},{"revision":"c5949f4298903dbbe27e138b0ae79b49","url":"./post/193912eb/index.html"},{"revision":"5785de20c2a0e2db6f85b0f44380ef10","url":"./post/220b8380/index.html"},{"revision":"35d9617e9efc898baff33a5f4d257733","url":"./post/24dc856c/index.html"},{"revision":"15dfeb06acaf62936ff96ca715d66d08","url":"./post/3082b2c6/index.html"},{"revision":"d92cbbe069a4897933d68ae4fd60ae55","url":"./post/3df9585/index.html"},{"revision":"8f20df1ac57938ba030f3ef16c432605","url":"./post/4a17b156/index.html"},{"revision":"ee5bdc67483b00c41e7c2c7cb021e5ea","url":"./post/739f0a30/index.html"},{"revision":"7a41a7df9e1ad83419a6d9161fab90c4","url":"./post/73fccf9a/index.html"},{"revision":"c3502db23439ce45686d380c910bb1b1","url":"./post/7ca5704e/index.html"},{"revision":"2d54235080e665cbf07977a44a598ce3","url":"./post/7fc77154/index.html"},{"revision":"b51ca9da7a4c6f523d2ab2c150e79c39","url":"./post/8097b5e3/index.html"},{"revision":"c1a03d76706e95d62eeb43b363d0e410","url":"./post/8422c4dc/index.html"},{"revision":"f906865e1f5fa8e87e9aa5a73414d91e","url":"./post/99c7fa1c/index.html"},{"revision":"9eb16e6d4f0d2c97d6ef4b8d949f5f90","url":"./post/9c60e209/index.html"},{"revision":"cc183bd278cbdbebf6bc3c6650d2b831","url":"./post/ae58d2f1/index.html"},{"revision":"8745aa92c68886075ae81125776f3227","url":"./post/d4550abf/index.html"},{"revision":"477c72f230e8e407263733c720b31070","url":"./post/d50c4d0e/index.html"},{"revision":"3795728fd3f229b7b2ee11c434d7efcf","url":"./post/db569493/index.html"},{"revision":"4d13f6b9fe07a24a86475d1f0ffd1e8d","url":"./post/dd83a796/index.html"},{"revision":"9d8291191afb73936ac864496d9e3187","url":"./post/f82f332a/index.html"},{"revision":"73d943a1b846f861d432d122daa59ff1","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"b93953a9658bdb79bf854421a97940d7","url":"./tags/AI/index.html"},{"revision":"a3df652323caec9b5ef56b5288d44ef0","url":"./tags/Aplayer/index.html"},{"revision":"806fb12eb66f31a1e231f26ba2fc9897","url":"./tags/Bing/index.html"},{"revision":"c9c57da309dd9e4c0ac273a3ccdc3d3d","url":"./tags/BUG/index.html"},{"revision":"1caeb3cd56b6805c3999a623cd053f3f","url":"./tags/CDN/index.html"},{"revision":"8d1f82a7406bc800f457a685826b5973","url":"./tags/CMS/index.html"},{"revision":"0d40e308559b6a0041e1941111931594","url":"./tags/css/index.html"},{"revision":"ad141dc13fc6d6d28529ae4d331f9d62","url":"./tags/DNS/index.html"},{"revision":"731c8e3536c88a6b9644208fd199e5e1","url":"./tags/Flash/index.html"},{"revision":"408c722a4fe34f961dbfaccb4cc1f132","url":"./tags/GFW/index.html"},{"revision":"328630f040449bc4394a733b48f912f3","url":"./tags/Gridea/index.html"},{"revision":"11e3771a86d94b4fa9c4c2d530eb31a3","url":"./tags/HTML/index.html"},{"revision":"eb39d19d31e67dbefa8d4a07e014f19c","url":"./tags/index.html"},{"revision":"4a13f87b5c6866ebf2afbf1c17d8ce71","url":"./tags/JavaScript/index.html"},{"revision":"3a22bc97d4909aff809dc871273abd7b","url":"./tags/JQuery/index.html"},{"revision":"4e3188653cff1e50c805cf1e19d1081f","url":"./tags/MetingJS/index.html"},{"revision":"e1696e77aa6456b683887774b872fd84","url":"./tags/NexT/index.html"},{"revision":"05db8935783bcd54bd0bbeb61cacfefd","url":"./tags/P2P/index.html"},{"revision":"f987c17ab15ccb99d081c58b68413dba","url":"./tags/RSA/index.html"},{"revision":"164ebb455b84db7e6b8e76a224417d85","url":"./tags/Vercel/index.html"},{"revision":"496b86d3ff11921f5df86ec4540a0327","url":"./tags/分享/index.html"},{"revision":"0eb4af8f09ce77f62212255330bf2680","url":"./tags/加密/index.html"},{"revision":"01206cb135c9e6a0c59aec6833f839fd","url":"./tags/加载动画/index.html"},{"revision":"e82dea95b9b1af96c8207341dfea44c7","url":"./tags/右键菜单/index.html"},{"revision":"0a4151f5657f3f5ecba32371df7629ba","url":"./tags/域名/index.html"},{"revision":"91db824a986cf8185699b5e4a2c4ead6","url":"./tags/密码学/index.html"},{"revision":"f2c102a1c8f59c9f512943613c68198a","url":"./tags/建站/index.html"},{"revision":"41e9ec46fb201a9326ed015cb4c9a4fc","url":"./tags/插件/index.html"},{"revision":"12b35d8da5e5aa47ffce093a95eb368a","url":"./tags/服务器/index.html"},{"revision":"cd935a9b5f478d1e738fce7b8b75c4e3","url":"./tags/网页源码/index.html"},{"revision":"1f2f0b2ff72367818149b585892f59d2","url":"./tags/美化/index.html"},{"revision":"5222118c1c805f5cbc50d9ba4d580d32","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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