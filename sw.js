const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"70b2ec5da76de5eb8c39c9716303382f","url":"./404.html"},{"revision":"5965d35a6be797e19fbe2185f098bdd7","url":"./about/index.html"},{"revision":"5672b2a0c42928895f1e2e97676b2f64","url":"./archives/2022/06/index.html"},{"revision":"064a0fcb66eabc5a31fac4ed7b8ae1bb","url":"./archives/2022/07/index.html"},{"revision":"80d462cfb2dab51cbd6f60beb0737f03","url":"./archives/2022/08/index.html"},{"revision":"8ba32a53f50c006f612142f182c2f991","url":"./archives/2022/10/index.html"},{"revision":"73f6681b101ace730095c47bf0ff5c4a","url":"./archives/2022/11/index.html"},{"revision":"014d933beef0f28f791ecdc1ed2cb9f3","url":"./archives/2022/12/index.html"},{"revision":"bdd903e2005132573f10c09131c88bf3","url":"./archives/2022/index.html"},{"revision":"0f7e32bbefd19fbe8fe05766be7d5a7f","url":"./archives/2022/page/2/index.html"},{"revision":"9ff2c9b384aafad080a1a20323db7283","url":"./archives/2023/02/index.html"},{"revision":"d38b9927fd46a02751464c9ae1c70fad","url":"./archives/2023/04/index.html"},{"revision":"b21bb056582113e8bb5f8c8e8fa6e3b8","url":"./archives/2023/index.html"},{"revision":"f07746ddc1e5bb55542b36b51bd8e04b","url":"./archives/2024/04/index.html"},{"revision":"a0a7bf327fe672140fd4970657d76e64","url":"./archives/2024/05/index.html"},{"revision":"51b6efcec22335a8b868e339b79549e0","url":"./archives/2024/06/index.html"},{"revision":"4d0871c22debf2139eca6a1f2b234cb6","url":"./archives/2024/09/index.html"},{"revision":"8255e4e99065a9309262067e3b3d8e33","url":"./archives/2024/index.html"},{"revision":"653e551992d3d7ee2159237aea18f25c","url":"./archives/index.html"},{"revision":"f1de988c056ec38c560089c29e46595b","url":"./archives/page/2/index.html"},{"revision":"ccb5f4afae44f512e044baeff0e6d023","url":"./archives/page/3/index.html"},{"revision":"75164a99aa2008d8976a23da756e4538","url":"./categories/AI/index.html"},{"revision":"5e543f8b63eadc1f023e0323f5d466c0","url":"./categories/Gridea/index.html"},{"revision":"b7ec3148d50f997af84f8f017395a5b6","url":"./categories/index.html"},{"revision":"b482138f3020acbbbccd00bc6a7517b3","url":"./categories/Vercel/index.html"},{"revision":"08afa39b9f7f9c7957567d9652783481","url":"./categories/休闲/index.html"},{"revision":"e4b67aebdf0f78963f1e43efb44f7405","url":"./categories/建站/index.html"},{"revision":"8152bb8c9dc0a93761e183296273459c","url":"./categories/科普/index.html"},{"revision":"a0bf5c98125fc5b10d6cf765a2d54b02","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"3ef793cba6558b6e584f0e9d2fe6adc1","url":"./cookies-instructions/index.html"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"81afc3914c20a3aa7fa60d97cd3f879e","url":"./index.html"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"17423d64fef726ec77dd4d9140ab3130","url":"./link/index.html"},{"revision":"40383c4f930e00fb8a053e531e240214","url":"./message/index.html"},{"revision":"4759788a698abe32f9f0088312e9fddf","url":"./page/2/index.html"},{"revision":"8714ee97fe919359b6a49c23d46173d9","url":"./page/3/index.html"},{"revision":"5381eaa4e73e48e3ef25db3e97ae5a26","url":"./post/193912eb/index.html"},{"revision":"23170ad327c36281654977605459ebd5","url":"./post/220b8380/index.html"},{"revision":"7a1f5e8bd7ad3ba3024b90293d9e3368","url":"./post/24dc856c/index.html"},{"revision":"34e2eb88522dca5b8e532a843f8b30c2","url":"./post/3082b2c6/index.html"},{"revision":"07ee2bff50925b8ae07d4acd7a056de7","url":"./post/3df9585/index.html"},{"revision":"51b57e57bda696bc0d80d5bf601d9584","url":"./post/4a17b156/index.html"},{"revision":"6c9c19d8f4f2d0376d4de1a429d92217","url":"./post/739f0a30/index.html"},{"revision":"4b91a4150412c0d585de3bd6f5de8d01","url":"./post/73fccf9a/index.html"},{"revision":"c88e4d00718d9d0a518d33f22264b35d","url":"./post/7ca5704e/index.html"},{"revision":"9f1ee516dd575dab4739e82a4a639ca1","url":"./post/7fc77154/index.html"},{"revision":"79e22143c7431abdd9d7c304f4151021","url":"./post/8097b5e3/index.html"},{"revision":"5e09fbcd57e4f6d9fd3985c6f1257644","url":"./post/8422c4dc/index.html"},{"revision":"8175bbc89fedd52466801b2219c73240","url":"./post/99c7fa1c/index.html"},{"revision":"5707bb731d076b7cc3a1aec30866feac","url":"./post/9c60e209/index.html"},{"revision":"a31013bee1173ebcc59a396d390e4300","url":"./post/ae58d2f1/index.html"},{"revision":"765d2fbc01ea168f87d75e7eace76805","url":"./post/d4550abf/index.html"},{"revision":"b73d02af24aa5c341086542a055e4355","url":"./post/d50c4d0e/index.html"},{"revision":"55cee205469982e3c88f9d50d59dc62a","url":"./post/db569493/index.html"},{"revision":"a383c550d40ce0a9ce6b914a39ae3824","url":"./post/dd83a796/index.html"},{"revision":"d10a050ad6ca7fa74d1de5288f2e07da","url":"./post/f82f332a/index.html"},{"revision":"573214246947f794204ff1d8db1fe3a3","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"201c3ba47cc4dd6e0a84d3312b849d60","url":"./tags/AI/index.html"},{"revision":"915dfaba2aee22a354eed97f4a94c2b3","url":"./tags/Aplayer/index.html"},{"revision":"06d4b13ca4ce7e839525e4d491fec380","url":"./tags/Bing/index.html"},{"revision":"9bd73bff3af1e574635c7f45d141f821","url":"./tags/BUG/index.html"},{"revision":"a11d40510d7b1cf34da79e6e56b8952d","url":"./tags/CDN/index.html"},{"revision":"1d629146b9bda79ba61ffc297df2d748","url":"./tags/CMS/index.html"},{"revision":"361d781be099b227bb6cc7746d4495e8","url":"./tags/css/index.html"},{"revision":"8176e78622fe653e39d15eb0ce90eebd","url":"./tags/DNS/index.html"},{"revision":"c6bdd6914a89c5081751ba66e308f92b","url":"./tags/Flash/index.html"},{"revision":"ad6b6f0ea52b798b2883581c560bb885","url":"./tags/GFW/index.html"},{"revision":"87fcc47ea1e523c546434282e8361241","url":"./tags/Gridea/index.html"},{"revision":"218e77a367c0acdf17115f4a96c0b778","url":"./tags/HTML/index.html"},{"revision":"db2b269374d47b2af90b80cfc6e78ddd","url":"./tags/index.html"},{"revision":"286f2892ddf432ff6a3adede32eca251","url":"./tags/JavaScript/index.html"},{"revision":"729b0f3a772a0bb58b8eed4f0ffd41d8","url":"./tags/JQuery/index.html"},{"revision":"5f75321462741f26fe94d9ed660c7e17","url":"./tags/MetingJS/index.html"},{"revision":"893c5c709dfcb4002ff2c3153f10b686","url":"./tags/NexT/index.html"},{"revision":"bbea12ca3dc12beb536ca4083f07f104","url":"./tags/P2P/index.html"},{"revision":"7c6d4f437aa93ab34cbc29c3b924e637","url":"./tags/RSA/index.html"},{"revision":"1bb500ad448faed891abea18958029c8","url":"./tags/Vercel/index.html"},{"revision":"1c4e26fd8ac66e9336e329fa1b40554a","url":"./tags/分享/index.html"},{"revision":"b7a73b94592ff3204415a9bcc9befd46","url":"./tags/加密/index.html"},{"revision":"d094d145a08ccd3dd47b6f0a77f62f6f","url":"./tags/加载动画/index.html"},{"revision":"519d69705bd1b128fd02073599ccc7d1","url":"./tags/右键菜单/index.html"},{"revision":"cfdf69e9d8404bd02149e70c1b9ab631","url":"./tags/域名/index.html"},{"revision":"edcaa444cb030e6c27c281d3e7a21032","url":"./tags/密码学/index.html"},{"revision":"96dabbeda79bc5f77ee22e8502a6be6e","url":"./tags/建站/index.html"},{"revision":"c03e0ab8c51c6658e1f64ad491a2a2e1","url":"./tags/插件/index.html"},{"revision":"89c1c528dc2582d3a6825811147b6aa3","url":"./tags/服务器/index.html"},{"revision":"25df5f66102d9ab3f53f3c0538b5f274","url":"./tags/网页源码/index.html"},{"revision":"f51b9cb8dfdd7132fd008fa254ce72d4","url":"./tags/美化/index.html"},{"revision":"a316efdb359c01c0ae3e608aa6700dd5","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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