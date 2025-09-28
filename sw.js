const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"70b2ec5da76de5eb8c39c9716303382f","url":"./404.html"},{"revision":"6473cf2c86f8b76d4415a79a90c07bc2","url":"./about/index.html"},{"revision":"e51a5a2b4f4206fe324ca23df4eb29e4","url":"./archives/2022/06/index.html"},{"revision":"2d7c09e46b9d444f33a796573cd39da6","url":"./archives/2022/07/index.html"},{"revision":"3682c86c15b7f1f7ab66ae2e4fe8fc84","url":"./archives/2022/08/index.html"},{"revision":"f9090bb6cf5da026264f613d4fda5246","url":"./archives/2022/10/index.html"},{"revision":"2a6928351683a7b8ed32ed29f823ab56","url":"./archives/2022/11/index.html"},{"revision":"35a8a89b892281bb24ee1a1f0986c5c8","url":"./archives/2022/12/index.html"},{"revision":"8260112a6c93a59c90ed44c919b33620","url":"./archives/2022/index.html"},{"revision":"0ca0df1c5979b43ab1177ced3cdba973","url":"./archives/2022/page/2/index.html"},{"revision":"c3a04ac8a8d3fef6f89711daf06ae15a","url":"./archives/2023/02/index.html"},{"revision":"37f306c680354e7fd197e671d458a529","url":"./archives/2023/04/index.html"},{"revision":"763f382285e71e686b85cb7145994e95","url":"./archives/2023/index.html"},{"revision":"b0feb1739494741603e68f3313afcf45","url":"./archives/2024/04/index.html"},{"revision":"cb93ab33e124fadadf5d8871c43ef3f7","url":"./archives/2024/05/index.html"},{"revision":"f8431731bbb5d3a8470eb0efa598715d","url":"./archives/2024/06/index.html"},{"revision":"e70ee2f17c7661330dd4f949b15cdb6b","url":"./archives/2024/09/index.html"},{"revision":"c11d7d52435cc5565fc22cbfeea1683f","url":"./archives/2024/index.html"},{"revision":"d3b1b017394e4261c4b3dee861e08a60","url":"./archives/index.html"},{"revision":"5feaae98b4663b190c3181de37a19359","url":"./archives/page/2/index.html"},{"revision":"6b0ad698c81331843af4563c8b34b792","url":"./archives/page/3/index.html"},{"revision":"cb6ee8a9b77f8c180a0e0f00d0fcb2e6","url":"./categories/AI/index.html"},{"revision":"ced5486742827441bc31140988a7990a","url":"./categories/Gridea/index.html"},{"revision":"84988ba02bfd8c9cc1476dc2df54e1c7","url":"./categories/index.html"},{"revision":"75fc0953c5121532deb1ca2a3fca2282","url":"./categories/Vercel/index.html"},{"revision":"698aaeeed7cb1095c7f8563b8d706586","url":"./categories/休闲/index.html"},{"revision":"62dcc8d2be3a77045b3139b428797202","url":"./categories/建站/index.html"},{"revision":"32a41542d33c75ef3b5d84455872477c","url":"./categories/科普/index.html"},{"revision":"172deb75ac397eb0bc60b81cdf95954f","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"0faa65f087b8f7432e82881a8746ba2f","url":"./cookies-instructions/index.html"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"5fbe16894b2a1c7fc06b36e68f828e03","url":"./index.html"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"e5f923160a4d38266bbd20dcfa3f1636","url":"./link/index.html"},{"revision":"7d68186cb4b967d9ba2a2f03110b4b63","url":"./message/index.html"},{"revision":"52dddc644148990e4490d2eedc0fa5b3","url":"./page/2/index.html"},{"revision":"5caa08b75102a9d5f97bea10ba5f71fd","url":"./page/3/index.html"},{"revision":"5381eaa4e73e48e3ef25db3e97ae5a26","url":"./post/193912eb/index.html"},{"revision":"23170ad327c36281654977605459ebd5","url":"./post/220b8380/index.html"},{"revision":"7a1f5e8bd7ad3ba3024b90293d9e3368","url":"./post/24dc856c/index.html"},{"revision":"34e2eb88522dca5b8e532a843f8b30c2","url":"./post/3082b2c6/index.html"},{"revision":"07ee2bff50925b8ae07d4acd7a056de7","url":"./post/3df9585/index.html"},{"revision":"51b57e57bda696bc0d80d5bf601d9584","url":"./post/4a17b156/index.html"},{"revision":"6c9c19d8f4f2d0376d4de1a429d92217","url":"./post/739f0a30/index.html"},{"revision":"4b91a4150412c0d585de3bd6f5de8d01","url":"./post/73fccf9a/index.html"},{"revision":"c88e4d00718d9d0a518d33f22264b35d","url":"./post/7ca5704e/index.html"},{"revision":"9f1ee516dd575dab4739e82a4a639ca1","url":"./post/7fc77154/index.html"},{"revision":"79e22143c7431abdd9d7c304f4151021","url":"./post/8097b5e3/index.html"},{"revision":"5e09fbcd57e4f6d9fd3985c6f1257644","url":"./post/8422c4dc/index.html"},{"revision":"8175bbc89fedd52466801b2219c73240","url":"./post/99c7fa1c/index.html"},{"revision":"5707bb731d076b7cc3a1aec30866feac","url":"./post/9c60e209/index.html"},{"revision":"a31013bee1173ebcc59a396d390e4300","url":"./post/ae58d2f1/index.html"},{"revision":"765d2fbc01ea168f87d75e7eace76805","url":"./post/d4550abf/index.html"},{"revision":"b73d02af24aa5c341086542a055e4355","url":"./post/d50c4d0e/index.html"},{"revision":"55cee205469982e3c88f9d50d59dc62a","url":"./post/db569493/index.html"},{"revision":"a383c550d40ce0a9ce6b914a39ae3824","url":"./post/dd83a796/index.html"},{"revision":"d10a050ad6ca7fa74d1de5288f2e07da","url":"./post/f82f332a/index.html"},{"revision":"573214246947f794204ff1d8db1fe3a3","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"2f1c271b6c12af24e63d5460833b4d15","url":"./tags/AI/index.html"},{"revision":"8159b7134b92024bfbce3e921d30db75","url":"./tags/Aplayer/index.html"},{"revision":"fa86ed10670b268a0e3b67c630622d04","url":"./tags/Bing/index.html"},{"revision":"4be23cef4ff4e24648c83eb4bdecc3a3","url":"./tags/BUG/index.html"},{"revision":"505261e74c950bb483787224850c1249","url":"./tags/CDN/index.html"},{"revision":"0ea8863e5b98bb59fac4d01d3de69d7d","url":"./tags/CMS/index.html"},{"revision":"bd0fe01969b64a5f57b8f66051833a41","url":"./tags/css/index.html"},{"revision":"00980f2e47fbc788ce358f93c319ffba","url":"./tags/DNS/index.html"},{"revision":"ce8aa424b36a2b577d1bc25268a5b087","url":"./tags/Flash/index.html"},{"revision":"a5f609b6249439619ecf45f58bec3945","url":"./tags/GFW/index.html"},{"revision":"70602ae193c72abddc4961031af7fe47","url":"./tags/Gridea/index.html"},{"revision":"e68c19722bc556debc0f389f9a4460de","url":"./tags/HTML/index.html"},{"revision":"44ecbd15e7f2c6ebb90a80225721ea3a","url":"./tags/index.html"},{"revision":"af5165975083cd71a32755023faeedc0","url":"./tags/JavaScript/index.html"},{"revision":"055116c0bdb4af2a06beb8aef81e46c9","url":"./tags/JQuery/index.html"},{"revision":"64d69ddb727c30160f51f88a6703c875","url":"./tags/MetingJS/index.html"},{"revision":"4ee45c6dd41e380589bbc3c80c7603ef","url":"./tags/NexT/index.html"},{"revision":"0f408d4f968b666d830479ec7df712c7","url":"./tags/P2P/index.html"},{"revision":"f752bb1691d18ffbf8ffc9a8867dd12e","url":"./tags/RSA/index.html"},{"revision":"a7f52e6755f23238f5c74ab4571e2c7d","url":"./tags/Vercel/index.html"},{"revision":"cc6a96a643f1b4306a3aa8761f309809","url":"./tags/分享/index.html"},{"revision":"8c2ade520f77045c4eef66e87fe9dd68","url":"./tags/加密/index.html"},{"revision":"e58ffca9186611b74da425aa47ce791f","url":"./tags/加载动画/index.html"},{"revision":"b1120cc2b36af9d86a39fb6574ce86c0","url":"./tags/右键菜单/index.html"},{"revision":"19615fc8681ccf0a7b96fafcad52d993","url":"./tags/域名/index.html"},{"revision":"2b9861d2e15c865b904a71ed1d121e52","url":"./tags/密码学/index.html"},{"revision":"0ca8a6ffaea0408bc5b85bdf6cbf2794","url":"./tags/建站/index.html"},{"revision":"dc1d7fc71ac6600619698ec1532b25f5","url":"./tags/插件/index.html"},{"revision":"39a28b1577fc3224a195e8948b3f039e","url":"./tags/服务器/index.html"},{"revision":"d3324dfe9093b9d09c3a5b9fab2a009a","url":"./tags/网页源码/index.html"},{"revision":"25589fee033d95601fb0ee70969ed555","url":"./tags/美化/index.html"},{"revision":"ddfc71d32e315a739a33e5ab7f6eb58a","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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