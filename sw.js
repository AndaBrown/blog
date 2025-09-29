const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"70b2ec5da76de5eb8c39c9716303382f","url":"./404.html"},{"revision":"ad611dd2586427e68b9a5117340a5423","url":"./about/index.html"},{"revision":"f010b1333e3caf160d9395a5699985cd","url":"./archives/2022/06/index.html"},{"revision":"a237c75410b933188e89d3aa8a0016f1","url":"./archives/2022/07/index.html"},{"revision":"c0cc7cf51bcaa2286cbbf3cb5805ea0c","url":"./archives/2022/08/index.html"},{"revision":"3c1f914780b6c5b783c7be8f482502b7","url":"./archives/2022/10/index.html"},{"revision":"57c118880d9c64b422fc02652d3b56bc","url":"./archives/2022/11/index.html"},{"revision":"de0b54fa6c2456d16e65bcccd9b140ef","url":"./archives/2022/12/index.html"},{"revision":"6ebe5bc09d37161488a6b9caa48c1bc5","url":"./archives/2022/index.html"},{"revision":"58290f7ce30f3039d4e783a5de96483e","url":"./archives/2022/page/2/index.html"},{"revision":"cd23974f6869dcafc7e642bee75ac498","url":"./archives/2023/02/index.html"},{"revision":"3003a934576cb57228e3fa9793264b4e","url":"./archives/2023/04/index.html"},{"revision":"300005b8313f8fe31f48bbde863d5c18","url":"./archives/2023/index.html"},{"revision":"c06a809468f46912a2d4a74bf2e7607e","url":"./archives/2024/04/index.html"},{"revision":"309a38ac302bdd02a3e5d07c890f992d","url":"./archives/2024/05/index.html"},{"revision":"ad62af84aa7e71c94fb6a17bc436230f","url":"./archives/2024/06/index.html"},{"revision":"3c60cdf21215e3ed814880db572a395d","url":"./archives/2024/09/index.html"},{"revision":"26cc76c9da9600535b130582fe73ad59","url":"./archives/2024/index.html"},{"revision":"f099fd5b83c86820dcea7fd84361cd8f","url":"./archives/index.html"},{"revision":"d1bee829d4e2ba23fa8d838941f3cf33","url":"./archives/page/2/index.html"},{"revision":"f858d0f4abf381f9562ced4190a48f6e","url":"./archives/page/3/index.html"},{"revision":"bd1c9d1175ccf09cb88a03d51217639d","url":"./categories/AI/index.html"},{"revision":"cfb682264a35a04895519a07c21e422a","url":"./categories/Gridea/index.html"},{"revision":"f36c6daedffd772c91c9f67dbfe7ce08","url":"./categories/index.html"},{"revision":"97ddc5796b599ab32eba98b430bd6774","url":"./categories/Vercel/index.html"},{"revision":"4c674b55ca240a0e99b996d806721597","url":"./categories/休闲/index.html"},{"revision":"704f7f4e19b9990118db358ca0001861","url":"./categories/建站/index.html"},{"revision":"50595e7f4bec14d8b0e90646e287ec07","url":"./categories/科普/index.html"},{"revision":"eee2ae9dde38167157e37f844cf80cf3","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"b21a8cb44e7dd3f5f99fc567f2d591af","url":"./cookies-instructions/index.html"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"06e9af36fe442948783e88dc40990afb","url":"./index.html"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"bc0031edbc0a1add206853930d926c86","url":"./link/index.html"},{"revision":"555be9bc113ac7231cf51342bbe900b2","url":"./message/index.html"},{"revision":"7060e9cd790c218ce2f8936d3b6dc82b","url":"./page/2/index.html"},{"revision":"a3a05e06d26bc0d0d059796e5cf032c7","url":"./page/3/index.html"},{"revision":"5381eaa4e73e48e3ef25db3e97ae5a26","url":"./post/193912eb/index.html"},{"revision":"23170ad327c36281654977605459ebd5","url":"./post/220b8380/index.html"},{"revision":"7a1f5e8bd7ad3ba3024b90293d9e3368","url":"./post/24dc856c/index.html"},{"revision":"34e2eb88522dca5b8e532a843f8b30c2","url":"./post/3082b2c6/index.html"},{"revision":"07ee2bff50925b8ae07d4acd7a056de7","url":"./post/3df9585/index.html"},{"revision":"51b57e57bda696bc0d80d5bf601d9584","url":"./post/4a17b156/index.html"},{"revision":"6c9c19d8f4f2d0376d4de1a429d92217","url":"./post/739f0a30/index.html"},{"revision":"4b91a4150412c0d585de3bd6f5de8d01","url":"./post/73fccf9a/index.html"},{"revision":"c88e4d00718d9d0a518d33f22264b35d","url":"./post/7ca5704e/index.html"},{"revision":"9f1ee516dd575dab4739e82a4a639ca1","url":"./post/7fc77154/index.html"},{"revision":"79e22143c7431abdd9d7c304f4151021","url":"./post/8097b5e3/index.html"},{"revision":"5e09fbcd57e4f6d9fd3985c6f1257644","url":"./post/8422c4dc/index.html"},{"revision":"8175bbc89fedd52466801b2219c73240","url":"./post/99c7fa1c/index.html"},{"revision":"5707bb731d076b7cc3a1aec30866feac","url":"./post/9c60e209/index.html"},{"revision":"a31013bee1173ebcc59a396d390e4300","url":"./post/ae58d2f1/index.html"},{"revision":"765d2fbc01ea168f87d75e7eace76805","url":"./post/d4550abf/index.html"},{"revision":"b73d02af24aa5c341086542a055e4355","url":"./post/d50c4d0e/index.html"},{"revision":"55cee205469982e3c88f9d50d59dc62a","url":"./post/db569493/index.html"},{"revision":"a383c550d40ce0a9ce6b914a39ae3824","url":"./post/dd83a796/index.html"},{"revision":"d10a050ad6ca7fa74d1de5288f2e07da","url":"./post/f82f332a/index.html"},{"revision":"573214246947f794204ff1d8db1fe3a3","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"71cbac4269a1cebc1a9b29e64449b55e","url":"./tags/AI/index.html"},{"revision":"1e52caaf473dc955fa4d2cb2486fc4a1","url":"./tags/Aplayer/index.html"},{"revision":"3c89fae1d9b7bdcbcfb9e293548fc0ad","url":"./tags/Bing/index.html"},{"revision":"3f02ba6f9fe2c5dcb413e5001e62a907","url":"./tags/BUG/index.html"},{"revision":"0acf3603bdbf388720104dc7e6ff8602","url":"./tags/CDN/index.html"},{"revision":"c55085e20486403975e65392e3010707","url":"./tags/CMS/index.html"},{"revision":"aa99d54516732a45a429b4888557f743","url":"./tags/css/index.html"},{"revision":"76b694ad1cd1ba5fdaee98a55e0be890","url":"./tags/DNS/index.html"},{"revision":"15ee2eea3ea9250a02be6e744c3fad6a","url":"./tags/Flash/index.html"},{"revision":"03c9dd7a7423203b4b21f6a4677c1e86","url":"./tags/GFW/index.html"},{"revision":"64d00a38c5981cc3923185a452e229a2","url":"./tags/Gridea/index.html"},{"revision":"c1760590e395e1e9ee50ac8a52a771fd","url":"./tags/HTML/index.html"},{"revision":"f74e609702dc66f164d1f1817dc077d4","url":"./tags/index.html"},{"revision":"2b4208bae0946449b16fdc36e8e34df0","url":"./tags/JavaScript/index.html"},{"revision":"2180447d50f470f7a15eaf12771577f5","url":"./tags/JQuery/index.html"},{"revision":"9df6ef04cc2a6dbae26cebbcf064506d","url":"./tags/MetingJS/index.html"},{"revision":"680e844f2b134c90557e4d1321923f85","url":"./tags/NexT/index.html"},{"revision":"36cfaa6182cf98bb1a4d3206fe0b19dc","url":"./tags/P2P/index.html"},{"revision":"4ade5099d74286aa9286f968656e5e62","url":"./tags/RSA/index.html"},{"revision":"1d55eb35462b269f22fbc274b1f1664e","url":"./tags/Vercel/index.html"},{"revision":"bcdd746554a8a1286e73a4b82793c6d1","url":"./tags/分享/index.html"},{"revision":"1899d3ef1d4c35b3900824752abf3c59","url":"./tags/加密/index.html"},{"revision":"73fd2638b1bf9ef86f6f4757f4db95ea","url":"./tags/加载动画/index.html"},{"revision":"9443941cd4e1ca951ddf5863964969ef","url":"./tags/右键菜单/index.html"},{"revision":"13f89b0746f75695ccc105b49923a335","url":"./tags/域名/index.html"},{"revision":"d0cf7bac84193849ffdcdc391e81c854","url":"./tags/密码学/index.html"},{"revision":"b6327903bf8c3536378574c1f0805a16","url":"./tags/建站/index.html"},{"revision":"fc7ffe53901b8b2d2653040a7bafc104","url":"./tags/插件/index.html"},{"revision":"9b4ba0122090af27bb0cb47886584395","url":"./tags/服务器/index.html"},{"revision":"ab6a87806d78ff7819f7e7542cdec86a","url":"./tags/网页源码/index.html"},{"revision":"afed2bdc17360b687b7edb45b5f449c8","url":"./tags/美化/index.html"},{"revision":"58ff300d5771d360d6232597a7097d04","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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