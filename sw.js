const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"70b2ec5da76de5eb8c39c9716303382f","url":"./404.html"},{"revision":"bdc2a74922defa173b9df91914665319","url":"./about/index.html"},{"revision":"3f60e6b30120a606a67639cc5a31082f","url":"./archives/2022/06/index.html"},{"revision":"f336c21bbac0413b3340208d87bba10b","url":"./archives/2022/07/index.html"},{"revision":"e9cc751f7224064eef3fed5c248e959c","url":"./archives/2022/08/index.html"},{"revision":"9a30e4818d94986c8d1b9a9c3804bdbe","url":"./archives/2022/10/index.html"},{"revision":"4cf1c53cb90404f304f19bca979950cc","url":"./archives/2022/11/index.html"},{"revision":"289d4686b6b1f0093b0aea1e82ca260c","url":"./archives/2022/12/index.html"},{"revision":"cc2402f92a80e5837281dde89600823a","url":"./archives/2022/index.html"},{"revision":"a90fd26b8cd6f7c35a240b81b64cdc34","url":"./archives/2022/page/2/index.html"},{"revision":"4f338b9ea221358992ac5161c8cde89a","url":"./archives/2023/02/index.html"},{"revision":"179db06fafae7592d91d64389ab5a6c8","url":"./archives/2023/04/index.html"},{"revision":"47a76ec2165cae44cefa64fa614fce5d","url":"./archives/2023/index.html"},{"revision":"41c876d8937940e9f93912f4c6f3437c","url":"./archives/2024/04/index.html"},{"revision":"4b26b05e618180fbe10438597b9e9c98","url":"./archives/2024/05/index.html"},{"revision":"608a6f62227cb98d9c99b461a7d1a70a","url":"./archives/2024/06/index.html"},{"revision":"00b17b1d1d7dee1924304f00f739aa36","url":"./archives/2024/09/index.html"},{"revision":"7414f3bc2635116e54ae1a50a9214e48","url":"./archives/2024/index.html"},{"revision":"47560ecdd205b43cc9aafb275e8e9743","url":"./archives/index.html"},{"revision":"44fb4d83ee8fb145e5386ba0ce0b38af","url":"./archives/page/2/index.html"},{"revision":"05d05ac4bda2c52a2f4266bb4bc639c0","url":"./archives/page/3/index.html"},{"revision":"99d022f0f5a1620ace2064a81df91ae5","url":"./categories/AI/index.html"},{"revision":"71771fea4468e13c57438d98c78f705b","url":"./categories/Gridea/index.html"},{"revision":"aa6887cc7f4dc8321b5c289efed73d92","url":"./categories/index.html"},{"revision":"d7d781614e8facc73d8c182211b837d9","url":"./categories/Vercel/index.html"},{"revision":"4e8315f747203987a95ae22f157ac81e","url":"./categories/休闲/index.html"},{"revision":"dfa6032be18a86f1794c690245638049","url":"./categories/建站/index.html"},{"revision":"d4a5fa29c33944155df78b3e11c1b059","url":"./categories/科普/index.html"},{"revision":"a939662e5a09906dbc805e8fc0da4ab0","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"fe6058fc047f73116655361366fdfe7f","url":"./cookies-instructions/index.html"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"7810d778a885efa0b4ad272c85b257a6","url":"./index.html"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"c6059f4e0f6bec5cdab0b9098c9a95a5","url":"./link/index.html"},{"revision":"4581f0cf860f10200d043018b50fde4b","url":"./message/index.html"},{"revision":"2cdcca5edccffa4908e5f38700651aca","url":"./page/2/index.html"},{"revision":"c9f2f8f73c8b8c4cbb18f848db25b1e3","url":"./page/3/index.html"},{"revision":"5381eaa4e73e48e3ef25db3e97ae5a26","url":"./post/193912eb/index.html"},{"revision":"23170ad327c36281654977605459ebd5","url":"./post/220b8380/index.html"},{"revision":"7a1f5e8bd7ad3ba3024b90293d9e3368","url":"./post/24dc856c/index.html"},{"revision":"34e2eb88522dca5b8e532a843f8b30c2","url":"./post/3082b2c6/index.html"},{"revision":"07ee2bff50925b8ae07d4acd7a056de7","url":"./post/3df9585/index.html"},{"revision":"51b57e57bda696bc0d80d5bf601d9584","url":"./post/4a17b156/index.html"},{"revision":"6c9c19d8f4f2d0376d4de1a429d92217","url":"./post/739f0a30/index.html"},{"revision":"4b91a4150412c0d585de3bd6f5de8d01","url":"./post/73fccf9a/index.html"},{"revision":"c88e4d00718d9d0a518d33f22264b35d","url":"./post/7ca5704e/index.html"},{"revision":"9f1ee516dd575dab4739e82a4a639ca1","url":"./post/7fc77154/index.html"},{"revision":"79e22143c7431abdd9d7c304f4151021","url":"./post/8097b5e3/index.html"},{"revision":"5e09fbcd57e4f6d9fd3985c6f1257644","url":"./post/8422c4dc/index.html"},{"revision":"8175bbc89fedd52466801b2219c73240","url":"./post/99c7fa1c/index.html"},{"revision":"5707bb731d076b7cc3a1aec30866feac","url":"./post/9c60e209/index.html"},{"revision":"a31013bee1173ebcc59a396d390e4300","url":"./post/ae58d2f1/index.html"},{"revision":"765d2fbc01ea168f87d75e7eace76805","url":"./post/d4550abf/index.html"},{"revision":"b73d02af24aa5c341086542a055e4355","url":"./post/d50c4d0e/index.html"},{"revision":"55cee205469982e3c88f9d50d59dc62a","url":"./post/db569493/index.html"},{"revision":"a383c550d40ce0a9ce6b914a39ae3824","url":"./post/dd83a796/index.html"},{"revision":"d10a050ad6ca7fa74d1de5288f2e07da","url":"./post/f82f332a/index.html"},{"revision":"573214246947f794204ff1d8db1fe3a3","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"12a2aed9586d059c7b9f3b4ed620eaa3","url":"./tags/AI/index.html"},{"revision":"fa368462068bbf02f9a2f374d19adc84","url":"./tags/Aplayer/index.html"},{"revision":"3d19d386299f41a528da6d4d7fd13dce","url":"./tags/Bing/index.html"},{"revision":"c07d98a35e0626f10f91bf7c6e8f656a","url":"./tags/BUG/index.html"},{"revision":"5b2a47225040981db368e7708a4d0be6","url":"./tags/CDN/index.html"},{"revision":"40818a35f14a0978b1492d8c7e39ba4c","url":"./tags/CMS/index.html"},{"revision":"247a6a01a9b3afa6a42cd9e22b564757","url":"./tags/css/index.html"},{"revision":"f6a72cb8f252880176090acde422537c","url":"./tags/DNS/index.html"},{"revision":"aa385b24ce89967f3a0d24b48de2cf04","url":"./tags/Flash/index.html"},{"revision":"0f692cab966aa185c517fac1f0c17a51","url":"./tags/GFW/index.html"},{"revision":"075ef023b12a20d3d8bb7314b251ec6f","url":"./tags/Gridea/index.html"},{"revision":"1f9042f69723a0f191750c3ab6ff8021","url":"./tags/HTML/index.html"},{"revision":"11ac281866cc8e03781c73a43ec72405","url":"./tags/index.html"},{"revision":"1efb06b8546778ebe4f6cfbf713f6d49","url":"./tags/JavaScript/index.html"},{"revision":"a72f25458152f7bb9440eddcf83cd1fa","url":"./tags/JQuery/index.html"},{"revision":"6ea0440a3dc086a65b7e4f119d6d15b2","url":"./tags/MetingJS/index.html"},{"revision":"ff84ba9d4b588adb45bda90cc1476b9a","url":"./tags/NexT/index.html"},{"revision":"2c17bc9e43b0007028f20fd742a7df9d","url":"./tags/P2P/index.html"},{"revision":"93a0b94eae1170b87d2face88ce643fe","url":"./tags/RSA/index.html"},{"revision":"870489f594afb3219b965243a1c86a0a","url":"./tags/Vercel/index.html"},{"revision":"515f3b1ac68fdccb42ae3a39ecd86c09","url":"./tags/分享/index.html"},{"revision":"1b6bb4e79fb953b5853dcec3a7e4d323","url":"./tags/加密/index.html"},{"revision":"30985ea01dc65eb56d0e56c804697d53","url":"./tags/加载动画/index.html"},{"revision":"b8e68995274e795fdccf436b3896e166","url":"./tags/右键菜单/index.html"},{"revision":"14f111f89aed97809326e6ce4f08dcf2","url":"./tags/域名/index.html"},{"revision":"fdb11b0476eb99b97c44c166988dc1d9","url":"./tags/密码学/index.html"},{"revision":"1f63aed34e0a24c6e51b60a41bb0465c","url":"./tags/建站/index.html"},{"revision":"3ee9fd0a195b04b6d1474ebd3540f3e0","url":"./tags/插件/index.html"},{"revision":"c7c436c1aa2f13d923361bca593647c0","url":"./tags/服务器/index.html"},{"revision":"0d0d45b8dbea841e0f094cd2a18c899d","url":"./tags/网页源码/index.html"},{"revision":"48e83233da3dbe1490b21669e916a66d","url":"./tags/美化/index.html"},{"revision":"7a8ca54f60926d63ac18d308056abcd6","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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