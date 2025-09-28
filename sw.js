const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"70b2ec5da76de5eb8c39c9716303382f","url":"./404.html"},{"revision":"a223dfc22a69e16251fc1df0bc28b8f8","url":"./about/index.html"},{"revision":"adc4def579a742e4667a3017eb8ef076","url":"./archives/2022/06/index.html"},{"revision":"aff4afd292e455c00669081c32517547","url":"./archives/2022/07/index.html"},{"revision":"b01140ba1decec744da1e97859480344","url":"./archives/2022/08/index.html"},{"revision":"79036d184225fd1ac39088678fd9eb5c","url":"./archives/2022/10/index.html"},{"revision":"c5f26123037fb1e9d4d15278d386ee1a","url":"./archives/2022/11/index.html"},{"revision":"fd0e86159d9033929ef4ead11d0cc174","url":"./archives/2022/12/index.html"},{"revision":"61cf73411002a478ce5f864b77bc5951","url":"./archives/2022/index.html"},{"revision":"c8b3ebc03232e479d540ce5488a6b46c","url":"./archives/2022/page/2/index.html"},{"revision":"519a07923f8d1d42e6c9a86de1e7f8ef","url":"./archives/2023/02/index.html"},{"revision":"668e864eef5500864f739d3c4f6e1733","url":"./archives/2023/04/index.html"},{"revision":"ea488fa7d2cc7fd149e22d48fa8fd8e9","url":"./archives/2023/index.html"},{"revision":"14769cb5bb85efab43ccf5ef17ed85f6","url":"./archives/2024/04/index.html"},{"revision":"c98c53b9792882531f94c3baae90540c","url":"./archives/2024/05/index.html"},{"revision":"135c0d3c1f15603e8ac54df6911b9865","url":"./archives/2024/06/index.html"},{"revision":"df8604f1d9a25df24082a1b17e4e5908","url":"./archives/2024/09/index.html"},{"revision":"e53382c706bdb71921d8d7f1a6f803b3","url":"./archives/2024/index.html"},{"revision":"e718b55f3fc01d8c0682c80d6e48e34c","url":"./archives/index.html"},{"revision":"aad2977a4f621fa1d56a7ee93491867f","url":"./archives/page/2/index.html"},{"revision":"d8c89a544dcb106fc72c0e6feea0d266","url":"./archives/page/3/index.html"},{"revision":"e3be4f4d6f2616560cd20229ab38eb59","url":"./categories/AI/index.html"},{"revision":"927d5bc30f582ea77b6189ae04ecaa5e","url":"./categories/Gridea/index.html"},{"revision":"fa37281514bdaff09dbb87e4f904444d","url":"./categories/index.html"},{"revision":"d3d671e79d4ea105c7c513ccfef8a8dc","url":"./categories/Vercel/index.html"},{"revision":"7cac5161ff6aba0756d1c44da6511ee6","url":"./categories/休闲/index.html"},{"revision":"7648abbfcb4e2d7de2011c9b47159317","url":"./categories/建站/index.html"},{"revision":"1cb7ffeffb2583908f53e05bb1462cd0","url":"./categories/科普/index.html"},{"revision":"7cefca7f5e4bb94eb877f356d134d9f9","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"2044353616fc83087fba0194a0ee61a3","url":"./cookies-instructions/index.html"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"14dfc411ca29a75739dc708dbde244ac","url":"./index.html"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"463522c620dbb3f4b6ec440752456777","url":"./link/index.html"},{"revision":"837d2bb7370ee5cdf8aa0bb176be367a","url":"./message/index.html"},{"revision":"bc5cd31591479797ee183ac6809a708e","url":"./page/2/index.html"},{"revision":"6d269e5a6ee7b1b0c83e6618aa12482c","url":"./page/3/index.html"},{"revision":"5381eaa4e73e48e3ef25db3e97ae5a26","url":"./post/193912eb/index.html"},{"revision":"23170ad327c36281654977605459ebd5","url":"./post/220b8380/index.html"},{"revision":"7a1f5e8bd7ad3ba3024b90293d9e3368","url":"./post/24dc856c/index.html"},{"revision":"34e2eb88522dca5b8e532a843f8b30c2","url":"./post/3082b2c6/index.html"},{"revision":"07ee2bff50925b8ae07d4acd7a056de7","url":"./post/3df9585/index.html"},{"revision":"51b57e57bda696bc0d80d5bf601d9584","url":"./post/4a17b156/index.html"},{"revision":"6c9c19d8f4f2d0376d4de1a429d92217","url":"./post/739f0a30/index.html"},{"revision":"4b91a4150412c0d585de3bd6f5de8d01","url":"./post/73fccf9a/index.html"},{"revision":"c88e4d00718d9d0a518d33f22264b35d","url":"./post/7ca5704e/index.html"},{"revision":"9f1ee516dd575dab4739e82a4a639ca1","url":"./post/7fc77154/index.html"},{"revision":"79e22143c7431abdd9d7c304f4151021","url":"./post/8097b5e3/index.html"},{"revision":"5e09fbcd57e4f6d9fd3985c6f1257644","url":"./post/8422c4dc/index.html"},{"revision":"8175bbc89fedd52466801b2219c73240","url":"./post/99c7fa1c/index.html"},{"revision":"5707bb731d076b7cc3a1aec30866feac","url":"./post/9c60e209/index.html"},{"revision":"a31013bee1173ebcc59a396d390e4300","url":"./post/ae58d2f1/index.html"},{"revision":"765d2fbc01ea168f87d75e7eace76805","url":"./post/d4550abf/index.html"},{"revision":"b73d02af24aa5c341086542a055e4355","url":"./post/d50c4d0e/index.html"},{"revision":"55cee205469982e3c88f9d50d59dc62a","url":"./post/db569493/index.html"},{"revision":"a383c550d40ce0a9ce6b914a39ae3824","url":"./post/dd83a796/index.html"},{"revision":"d10a050ad6ca7fa74d1de5288f2e07da","url":"./post/f82f332a/index.html"},{"revision":"573214246947f794204ff1d8db1fe3a3","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"b1156f19544a9b286366d20984b305e9","url":"./tags/AI/index.html"},{"revision":"6e4e720b0fda68cce516a92fa1f4b402","url":"./tags/Aplayer/index.html"},{"revision":"d58b9d0e4b12eba8c8ddc49918e3702a","url":"./tags/Bing/index.html"},{"revision":"cf71b3f1f9f5c9a1c0473622d15e09d7","url":"./tags/BUG/index.html"},{"revision":"484973c7ef9b58be861091dc88660426","url":"./tags/CDN/index.html"},{"revision":"f03ab69fba7c3c6c8a5db2dfe034cbc7","url":"./tags/CMS/index.html"},{"revision":"b5d4378de83aee1a0c459a888da5b620","url":"./tags/css/index.html"},{"revision":"eef2c8c05f52bff69878a8c45f357d69","url":"./tags/DNS/index.html"},{"revision":"d113b8148519697820835f510932a922","url":"./tags/Flash/index.html"},{"revision":"2c5154b37122cc8c8be86c8f8cba51e5","url":"./tags/GFW/index.html"},{"revision":"962fc6ccced42effc35573ca820398fb","url":"./tags/Gridea/index.html"},{"revision":"648deb91c1145b919ea13214feb36f7b","url":"./tags/HTML/index.html"},{"revision":"0c01cd77bff159d6d64055ed65fd17b0","url":"./tags/index.html"},{"revision":"031b6d84d72f84007864d261cda90720","url":"./tags/JavaScript/index.html"},{"revision":"dea1a60fc0c6c7b7f183868b100a3859","url":"./tags/JQuery/index.html"},{"revision":"b24b83edf703149c94405a46097e0f33","url":"./tags/MetingJS/index.html"},{"revision":"b00e49e357bebe3a3c07b70f036cd77c","url":"./tags/NexT/index.html"},{"revision":"dbbfd71d9b9717a1beae161016757e64","url":"./tags/P2P/index.html"},{"revision":"a867a7cd13ac914c0c2c87c9466da41c","url":"./tags/RSA/index.html"},{"revision":"a5efdeb7a28d601be39c0a0e70a07187","url":"./tags/Vercel/index.html"},{"revision":"19553171bee6d11f70c43dc55fada588","url":"./tags/分享/index.html"},{"revision":"24be98accc819d94415390c5482ad4a0","url":"./tags/加密/index.html"},{"revision":"6ffab237becf3b1958b214059a7c68f4","url":"./tags/加载动画/index.html"},{"revision":"01b984ba80cf5693c9650c93f70da839","url":"./tags/右键菜单/index.html"},{"revision":"f82806e2ac18ca540367dd0ae42b2967","url":"./tags/域名/index.html"},{"revision":"f26db589d6253ecb5905789b658d20fa","url":"./tags/密码学/index.html"},{"revision":"50df988b0dcae1d90d94d4649d99a57c","url":"./tags/建站/index.html"},{"revision":"ce0b66c9f5f56309ce36665fd8883986","url":"./tags/插件/index.html"},{"revision":"c08292f3d691cb532c6fddc983ad5fa1","url":"./tags/服务器/index.html"},{"revision":"432abe611eac04a91701f1d4ccdb8bdb","url":"./tags/网页源码/index.html"},{"revision":"5156684efc75467a290269757d021b0c","url":"./tags/美化/index.html"},{"revision":"437931b108a1b4df18cf1e02180eeffe","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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