const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"},{"revision":"742676d2f8a7e322b9c2e5c17f17d3c8","url":"./index.html"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"c90edaf61bcb2da91d2bb74bca73976a","url":"./404.html"},{"revision":"8499abeccc7ae459f8de7d4e8966d259","url":"./talks/index.html"},{"revision":"54a6c342b1654c38abafd155599ec2ab","url":"./tags/index.html"},{"revision":"4a07f9e6766f006f0efbaee310ee7100","url":"./tags/美化/index.html"},{"revision":"22ca1ee177b4d267194593b10bb4c587","url":"./tags/网页源码/index.html"},{"revision":"0b3015666d13639821fd8942c13831e8","url":"./tags/服务器/index.html"},{"revision":"3a3075f3febbdd6c4009aa35234fcba9","url":"./tags/插件/index.html"},{"revision":"f34d4eada3a6a613f96e981e50e373bf","url":"./tags/建站/index.html"},{"revision":"b4edb9abc41e117d1dfb561296f8221a","url":"./tags/密码学/index.html"},{"revision":"00e76a3537f062bf8b65cd3b2fa528e8","url":"./tags/域名/index.html"},{"revision":"1d625c13c531b2bdbfc628fcf97a40a7","url":"./tags/右键菜单/index.html"},{"revision":"c7e0bf62c6ca5a4b342ace6333d560cf","url":"./tags/区块链/index.html"},{"revision":"849adfe1d9cc29d8080a4cc782157ad1","url":"./tags/加载动画/index.html"},{"revision":"db173d12c1926bf2d478f4f679f5b16d","url":"./tags/加密货币/index.html"},{"revision":"a3d600ac75705f2e98e8f29423dee2c8","url":"./tags/加密/index.html"},{"revision":"6ac382816dad68e10292ed5b805130e4","url":"./tags/分享/index.html"},{"revision":"b9cd0b89ce89adc6545e02fcf7855461","url":"./tags/css/index.html"},{"revision":"f4a6f830c5450ddfac73cc9e80cc5629","url":"./tags/Vercel/index.html"},{"revision":"8aa804613c1c16210d6d0b10a5a17cbc","url":"./tags/RSA/index.html"},{"revision":"f0e6b87c6ede0d3235bac31fead65868","url":"./tags/P2P/index.html"},{"revision":"1fdfc61640b6bef5522475365790bcb1","url":"./tags/NexT/index.html"},{"revision":"63e9ddba75cd8f61994050afd16141ce","url":"./tags/MetingJS/index.html"},{"revision":"f16653800c78347ac10457f7cc4bcd68","url":"./tags/JavaScript/index.html"},{"revision":"013d1dd57a515ad22dc966c7d59c3de1","url":"./tags/JQuery/index.html"},{"revision":"65ba578bdd763fa8f9cdc4ae145ae9cb","url":"./tags/HTML/index.html"},{"revision":"705b499cbad35bebf2f2fa273fa8c9fb","url":"./tags/Gridea/index.html"},{"revision":"f3f1ac57dd8357ce0b9b3913a2aba996","url":"./tags/GFW/index.html"},{"revision":"af3171135a832292ce869f5391848186","url":"./tags/Flash/index.html"},{"revision":"64d68e3ff0bb1c2c06e08ab1450a45d5","url":"./tags/DNS/index.html"},{"revision":"6307cfb5f0a47ec3f6bf4155db0008d5","url":"./tags/CMS/index.html"},{"revision":"cd8d56401048c3d3bda3f9e8ef338921","url":"./tags/CDN/index.html"},{"revision":"48eff7cbcf227e3cd70065f88c5ff094","url":"./tags/Bing/index.html"},{"revision":"bd372d61b4825eae90d1f458e0c2c8d8","url":"./tags/BUG/index.html"},{"revision":"b3d54be5b75a770a969bb87bc210c69e","url":"./tags/Aplayer/index.html"},{"revision":"f69e7337ecde562ff3fb765d3bc9a779","url":"./tags/AI/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"88655123dab0329103bdd150f90e38b9","url":"./post/fa97bd48/index.html"},{"revision":"0bb6b3a17e12773037c68009c183221a","url":"./post/f82f332a/index.html"},{"revision":"a4c265fd9762261bf7018f92a1e7343e","url":"./post/dd83a796/index.html"},{"revision":"718cacfcd7701fb736dfc5c28e875123","url":"./post/db569493/index.html"},{"revision":"0c56bfd2b5311269400cb564c012b5e7","url":"./post/d50c4d0e/index.html"},{"revision":"36ea2e2f3fb25f1a900c22f12f175261","url":"./post/d4550abf/index.html"},{"revision":"cb498ada403370779d0cfe38d514a0e9","url":"./post/b9a3407d/index.html"},{"revision":"6f8b10ca304f68aaaa9312a9553f017a","url":"./post/ae58d2f1/index.html"},{"revision":"d51427e5eefad46e8bd8a66757fa8a09","url":"./post/9c60e209/index.html"},{"revision":"66511bdfea5cecf392899b7ef2333d7d","url":"./post/99c7fa1c/index.html"},{"revision":"abc529635c417e884aef78675dc8db48","url":"./post/8422c4dc/index.html"},{"revision":"64bb22c1e1795e3c2d94a381fbfd723b","url":"./post/8097b5e3/index.html"},{"revision":"fa1d8027e7b7309b5e9c262bddc41b28","url":"./post/7fc77154/index.html"},{"revision":"14e1a50e62dd31e4b807647d78231ebf","url":"./post/7ca5704e/index.html"},{"revision":"1e9b99f682b12f1c08128c003c4dec71","url":"./post/73fccf9a/index.html"},{"revision":"1a8869c8b4c37c72a1798d3a7ce7960e","url":"./post/739f0a30/index.html"},{"revision":"3c828837104062ce4593e67434d8f5d7","url":"./post/4a17b156/index.html"},{"revision":"be03873633443e619e47552c7f34d742","url":"./post/48bc1675/index.html"},{"revision":"5123c94b7bbae2c2e0a022b059c9707e","url":"./post/3df9585/index.html"},{"revision":"503ee5f4e51012201706bdcaf964089c","url":"./post/3082b2c6/index.html"},{"revision":"695e7a7e8d5a58ac620e1100f9a3023e","url":"./post/24dc856c/index.html"},{"revision":"505e8b1a9e40c59e02a8341ffa2f85b0","url":"./post/220b8380/index.html"},{"revision":"a859aa8bdb198bb26eb9b67ca8643821","url":"./post/193912eb/index.html"},{"revision":"cd5eeab00510efa89c19c5300a898b11","url":"./page/3/index.html"},{"revision":"c6f261bca78ab8376f1074c7c49bc7d1","url":"./page/2/index.html"},{"revision":"d36bbc68dc68c233b0cd4c1094d17ba6","url":"./message/index.html"},{"revision":"9ff45cf7ea69460272bd33e1d9999a0d","url":"./link/index.html"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"7553d85b6ff1d4f8c24a2134927f5b8f","url":"./cookies-instructions/index.html"},{"revision":"c7775299fc2a310b702e8741a1a37568","url":"./categories/index.html"},{"revision":"45526b952bb63856da84768d0a3e5f45","url":"./categories/网页源码/index.html"},{"revision":"de81f00de68164606d5431c06e85aa5b","url":"./categories/科普/index.html"},{"revision":"865dd094cb4f885504a49c1e6299143d","url":"./categories/建站/index.html"},{"revision":"f42273c7ba63d7f40f9a484cebefa62b","url":"./categories/休闲/index.html"},{"revision":"7ff88002b4efd0a26c73f527b89e3320","url":"./categories/Vercel/index.html"},{"revision":"50003cc8ab6661e904375dd65727d8f5","url":"./categories/Gridea/index.html"},{"revision":"c556d069d550f626523613a5990b3d39","url":"./categories/AI/index.html"},{"revision":"ff7f053ff0d86e2f3486c765254c7e0e","url":"./archives/index.html"},{"revision":"bcdfb8459a50a10077a4b97fc71f5235","url":"./archives/page/3/index.html"},{"revision":"db09b19c216999eff53a5ec790de1e0e","url":"./archives/page/2/index.html"},{"revision":"2affcefbc1f0f97bee0eca9696f1a746","url":"./archives/2025/index.html"},{"revision":"5312ea5b7cc7da409d170602c5ca2b00","url":"./archives/2025/10/index.html"},{"revision":"7974fd6127624a2d1baf24565245d3af","url":"./archives/2025/09/index.html"},{"revision":"e9b8703e7af300d65b087801f8fbaeac","url":"./archives/2024/index.html"},{"revision":"52e31756311470be6760481443776d26","url":"./archives/2024/09/index.html"},{"revision":"859a532c5008b995d565fe4e100cbf4b","url":"./archives/2024/06/index.html"},{"revision":"5e9a5263891b373cfe8357b86f5622a5","url":"./archives/2024/05/index.html"},{"revision":"f16f39678bac38cf849a19ff6efd948f","url":"./archives/2024/04/index.html"},{"revision":"1630bad9aa2d3b94982ca860ef8f53db","url":"./archives/2023/index.html"},{"revision":"08569c7b68d4f04e4bbaa94e0a3e8748","url":"./archives/2023/04/index.html"},{"revision":"5da47e6d7f601f020de55e35b3a0a2f1","url":"./archives/2023/02/index.html"},{"revision":"1ee61b14ce474f5943f898e5a9ced3a9","url":"./archives/2022/index.html"},{"revision":"94b8186805d79e4b3e9654970f5eedb3","url":"./archives/2022/page/2/index.html"},{"revision":"05234ff51663b076b1dcf59659ad266c","url":"./archives/2022/12/index.html"},{"revision":"a2591b7afeb1f9057ce9afda900aef00","url":"./archives/2022/11/index.html"},{"revision":"aca362905e259b6bd0f557b5f1533298","url":"./archives/2022/10/index.html"},{"revision":"a0ee01cd9fe6929688671748270ccffa","url":"./archives/2022/08/index.html"},{"revision":"c7d773d280b1f309d164ec3479518d80","url":"./archives/2022/07/index.html"},{"revision":"6f328d22b4862f22f9efcce81bac9305","url":"./archives/2022/06/index.html"},{"revision":"f876b9b2a3f5680e8982d4c94657561c","url":"./about/index.html"}]);
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