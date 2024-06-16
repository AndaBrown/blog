const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"1d4dc3a830eae92cab4f6144650f2582","url":"./404.html"},{"revision":"ec5da80037872a593719ab3cc86173ea","url":"./about/index.html"},{"revision":"c6deb61dc927fbfcdf33272e6de231bf","url":"./archives/2022/06/index.html"},{"revision":"fee8f168ef39123e6aeb85604cb77948","url":"./archives/2022/07/index.html"},{"revision":"ca5a4a9687da6fae19c3ce8071950828","url":"./archives/2022/08/index.html"},{"revision":"ffaa97a1a790ef90fd36d28df2e7c01b","url":"./archives/2022/10/index.html"},{"revision":"21163afa529d72dbd863f1517e779eae","url":"./archives/2022/11/index.html"},{"revision":"9a0fb12150191fd384cb991796053382","url":"./archives/2022/12/index.html"},{"revision":"66e4132a2972e1253e89c83dffb3060c","url":"./archives/2022/index.html"},{"revision":"6adc81d8c2b2478c3dd031e7e4182da6","url":"./archives/2022/page/2/index.html"},{"revision":"623db072451472af8d60a71b3d542dc8","url":"./archives/2023/02/index.html"},{"revision":"eb09dab3ed49d55c5b7132f636ffd203","url":"./archives/2023/04/index.html"},{"revision":"75c2c883983a39a62227fd99bb76a50f","url":"./archives/2023/index.html"},{"revision":"5800b0db5151a076832acc0d17e13c47","url":"./archives/2024/04/index.html"},{"revision":"73325674457b4648a79126794d540405","url":"./archives/2024/05/index.html"},{"revision":"b7bab3f15eab0e9ce9da2c7fffa5ad06","url":"./archives/2024/06/index.html"},{"revision":"6be33b68fecef3311c00a6453f253235","url":"./archives/2024/index.html"},{"revision":"37512edb1a32a5447b339a50b04b55a4","url":"./archives/index.html"},{"revision":"d59bcd1951b40e708eed589b45cfa771","url":"./archives/page/2/index.html"},{"revision":"8c7dd3aebdf7c63df515dea923c2b55f","url":"./categories/AI/index.html"},{"revision":"e5c8025b78593fb704ec084adc3a74b0","url":"./categories/Gridea/index.html"},{"revision":"6d9b544173e37fb7ab0b0072100ca611","url":"./categories/index.html"},{"revision":"09078ddeb496be1e4e7e739f1c08fabb","url":"./categories/Vercel/index.html"},{"revision":"2de63891784c82cfd232435246b4142f","url":"./categories/休闲/index.html"},{"revision":"52fe5c887b3a4193a4354c2eed034166","url":"./categories/建站/index.html"},{"revision":"ed1b8e31a4fe26c6cf191a0eea684b98","url":"./categories/科普/index.html"},{"revision":"aa4d8b255938d015341adbdb120bf6ff","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"73cd2b69df61d53b171f3df785d7a9c2","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"392419a380566e73cf5a1aef587d3079","url":"./go/index.html"},{"revision":"2d9367c2f83654d6641f7c1092bb5e49","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"40ebc4dde17f9d167b3aeb539d60e9a8","url":"./link/index.html"},{"revision":"d0b592f01c3452470478dcc9e5164d27","url":"./message/index.html"},{"revision":"2efbd272b1e20aa9de81eb72a5d1923f","url":"./page/2/index.html"},{"revision":"78a869b53f0fc809d517ced723a11f19","url":"./post/193912eb/index.html"},{"revision":"0ce3491ee0bc66114b3700975aae6bb2","url":"./post/220b8380/index.html"},{"revision":"016a65e4e29f7b45c82e5461b9e31b6d","url":"./post/24dc856c/index.html"},{"revision":"a9cf65abd3337892f9a674183404c299","url":"./post/3082b2c6/index.html"},{"revision":"260d14dfa72e143b4190ecf58bfcb95a","url":"./post/3df9585/index.html"},{"revision":"482056e58d73c40c3f1622c94ca573eb","url":"./post/4a17b156/index.html"},{"revision":"d881a630ce13a5cc1d62ba49d820d4c3","url":"./post/739f0a30/index.html"},{"revision":"889d90554ffbe204b5d6e40c79c6f1c4","url":"./post/73fccf9a/index.html"},{"revision":"ff801d16bdfd14a7940d1a7521d1e180","url":"./post/7ca5704e/index.html"},{"revision":"d80b05db2075f20c4c2fd337617ea825","url":"./post/7fc77154/index.html"},{"revision":"ea2cc55f7c8c66895e2eab9f360e2534","url":"./post/8097b5e3/index.html"},{"revision":"8b1329b553efd197673bd20f212d5952","url":"./post/8422c4dc/index.html"},{"revision":"496841bb375b3539056ff0f17bd67822","url":"./post/99c7fa1c/index.html"},{"revision":"6b4ce3979d7a6ae9580e7655a8580a71","url":"./post/9c60e209/index.html"},{"revision":"2b99243d4e04ab8fbe1482669588840b","url":"./post/ae58d2f1/index.html"},{"revision":"79576ca08493c63067a07cc00e3232f3","url":"./post/d4550abf/index.html"},{"revision":"27ee830344e0fce7d89f8ac20829a21f","url":"./post/d50c4d0e/index.html"},{"revision":"c5ff3bcff0a2d77890607abe8b9e7d75","url":"./post/db569493/index.html"},{"revision":"648f70b2c0fc4160a81ac713edd4e793","url":"./post/dd83a796/index.html"},{"revision":"d70f512e773c595f4d7dd7a513263712","url":"./post/f82f332a/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"6e813b4d3a60374069d2ae2fb625e9cc","url":"./tags/AI/index.html"},{"revision":"1c087253a207f7746ecbaff15ec22a22","url":"./tags/Aplayer/index.html"},{"revision":"478e56a5769f6b21161483b20b93090d","url":"./tags/Bing/index.html"},{"revision":"0f36f4bceee27ed292026c50ee71ebff","url":"./tags/BUG/index.html"},{"revision":"5c58e7d52112a3258ecb1e0724c53329","url":"./tags/CDN/index.html"},{"revision":"c711ff72d05efcfda2734d73706eea20","url":"./tags/CMS/index.html"},{"revision":"64ad3b31a8c28106249f38ae282caba3","url":"./tags/css/index.html"},{"revision":"90247de3513bde21dc933525dc7338ea","url":"./tags/DNS/index.html"},{"revision":"7512a571595f08c26ed411e326268c30","url":"./tags/Flash/index.html"},{"revision":"617d68c6bf484addeb5c0bfd266aa6b1","url":"./tags/GFW/index.html"},{"revision":"4b65856be5d59bf9d5c0fa8562410416","url":"./tags/Gridea/index.html"},{"revision":"9f350a886ec402b25929106defd9a66a","url":"./tags/HTML/index.html"},{"revision":"df53e3b4aedb28ec41384da86518cf14","url":"./tags/index.html"},{"revision":"dbe844146051e11e0160b1fbb3e05bca","url":"./tags/JavaScript/index.html"},{"revision":"d780db59e639c0bed11bd7712403353f","url":"./tags/JQuery/index.html"},{"revision":"b7f11a7589a9f9f569735d27b66f84f6","url":"./tags/MetingJS/index.html"},{"revision":"726f0bf098056089523e588084501a47","url":"./tags/NexT/index.html"},{"revision":"d9027ea1711cbca2bba4bb4ef5124274","url":"./tags/RSA/index.html"},{"revision":"c9bed43ca00ba2b8e62861b8fb2b1866","url":"./tags/Vercel/index.html"},{"revision":"d0f7d4e1c54dbc98d6ef2533607a1e85","url":"./tags/分享/index.html"},{"revision":"c0ce561b038e80674becaf0f0029a279","url":"./tags/加密/index.html"},{"revision":"d428396420e43c18495d723e8a22a6be","url":"./tags/加载动画/index.html"},{"revision":"821a4525b3ba84e86af8eb122a81bc93","url":"./tags/右键菜单/index.html"},{"revision":"56c79ef1caf06860d8557958c51a658e","url":"./tags/域名/index.html"},{"revision":"8cfbbf9970dd60f2fb1c8ddc58944fab","url":"./tags/密码学/index.html"},{"revision":"a544aa013980bb2f2ed8b90c7f98c1e8","url":"./tags/建站/index.html"},{"revision":"65869d6f34c513eac3d9dfcc27eefffd","url":"./tags/插件/index.html"},{"revision":"9c7bffcf03198a1db98e4b0e298ece9c","url":"./tags/服务器/index.html"},{"revision":"0c838ba6a5554f7d88fb10b1a685db3e","url":"./tags/网页源码/index.html"},{"revision":"6aa19b141f3bcd9809d8048feffe51f8","url":"./tags/美化/index.html"},{"revision":"0c910fc2a9b28e19d798d89d63691b08","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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