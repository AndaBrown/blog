const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"70b2ec5da76de5eb8c39c9716303382f","url":"./404.html"},{"revision":"eb8ec6ed3cd7a1a36ca223bf5fa8e408","url":"./about/index.html"},{"revision":"5531e397ed940d36811e5f7074b39919","url":"./archives/2022/06/index.html"},{"revision":"2fe06e70dd8193942cc0e9aeb6f5f441","url":"./archives/2022/07/index.html"},{"revision":"81f9bef0ddc93233a3f9855d38b6254b","url":"./archives/2022/08/index.html"},{"revision":"17aff49a4d8b79040c234bd183335657","url":"./archives/2022/10/index.html"},{"revision":"46899b1ee53e37901a95a0856d5d8eac","url":"./archives/2022/11/index.html"},{"revision":"ee9d1fc07f9885bcafe9671204ef7ede","url":"./archives/2022/12/index.html"},{"revision":"a9cb0bcf3e8a3061b7cb93eee3eca6ba","url":"./archives/2022/index.html"},{"revision":"dff0725b12fc4af4f464200dd444ee83","url":"./archives/2022/page/2/index.html"},{"revision":"afd5815ff19f209e877e940bdba101cc","url":"./archives/2023/02/index.html"},{"revision":"f47aa4cd031cf50533c4dbc9892f1f1e","url":"./archives/2023/04/index.html"},{"revision":"bb91c71238fdecbf317dbd6f0b661ce7","url":"./archives/2023/index.html"},{"revision":"eca8e6bd6f1a6f3ec441914a75c31621","url":"./archives/2024/04/index.html"},{"revision":"bc09e380594823cdd557c3c8e273340f","url":"./archives/2024/05/index.html"},{"revision":"745dba7a589826c7d6cfebee1939ec07","url":"./archives/2024/06/index.html"},{"revision":"6e15e65cedbd5de6cd7dad552bb8f32b","url":"./archives/2024/09/index.html"},{"revision":"6be6ddcc9afd9d4910d477f2aa23b015","url":"./archives/2024/index.html"},{"revision":"fa28e7abd891aef6ec50f47e8f75fb8b","url":"./archives/index.html"},{"revision":"8835052eb80d2a944235a330481bbc0d","url":"./archives/page/2/index.html"},{"revision":"b12fcb7ad111e4c86a1bc00df54b720e","url":"./archives/page/3/index.html"},{"revision":"f6b85b7132deb5286dd570f7750d8e19","url":"./categories/AI/index.html"},{"revision":"2e3deea38094c53dd9670cc3dc6dda23","url":"./categories/Gridea/index.html"},{"revision":"125d84267dd55de09b58aa685ac7dbed","url":"./categories/index.html"},{"revision":"10cafc659b0b9113d3430bc9e12c056f","url":"./categories/Vercel/index.html"},{"revision":"36f3456ec669e2cf297457b60e942c07","url":"./categories/休闲/index.html"},{"revision":"2e68b5a3a2a8a19eccfce2e612862cfd","url":"./categories/建站/index.html"},{"revision":"e4679aa9099c31a36d5267e14244eeff","url":"./categories/科普/index.html"},{"revision":"fa17305ef084e55123dc6077a32f88ca","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"f27df9e2875ca9dfec90ee0f634cafb1","url":"./cookies-instructions/index.html"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"30257b272c8021bcb85b60826e2b8746","url":"./index.html"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"9373a2219b906f1c8152c862b5efbd17","url":"./link/index.html"},{"revision":"b527bc33260816c601a936a71b6dee66","url":"./message/index.html"},{"revision":"0cb7e956a42d103ac498e05a54b0fca9","url":"./page/2/index.html"},{"revision":"31aeb07f19d5fe465993e7e147015f12","url":"./page/3/index.html"},{"revision":"5381eaa4e73e48e3ef25db3e97ae5a26","url":"./post/193912eb/index.html"},{"revision":"23170ad327c36281654977605459ebd5","url":"./post/220b8380/index.html"},{"revision":"7a1f5e8bd7ad3ba3024b90293d9e3368","url":"./post/24dc856c/index.html"},{"revision":"34e2eb88522dca5b8e532a843f8b30c2","url":"./post/3082b2c6/index.html"},{"revision":"07ee2bff50925b8ae07d4acd7a056de7","url":"./post/3df9585/index.html"},{"revision":"51b57e57bda696bc0d80d5bf601d9584","url":"./post/4a17b156/index.html"},{"revision":"6c9c19d8f4f2d0376d4de1a429d92217","url":"./post/739f0a30/index.html"},{"revision":"4b91a4150412c0d585de3bd6f5de8d01","url":"./post/73fccf9a/index.html"},{"revision":"c88e4d00718d9d0a518d33f22264b35d","url":"./post/7ca5704e/index.html"},{"revision":"9f1ee516dd575dab4739e82a4a639ca1","url":"./post/7fc77154/index.html"},{"revision":"79e22143c7431abdd9d7c304f4151021","url":"./post/8097b5e3/index.html"},{"revision":"5e09fbcd57e4f6d9fd3985c6f1257644","url":"./post/8422c4dc/index.html"},{"revision":"8175bbc89fedd52466801b2219c73240","url":"./post/99c7fa1c/index.html"},{"revision":"5707bb731d076b7cc3a1aec30866feac","url":"./post/9c60e209/index.html"},{"revision":"a31013bee1173ebcc59a396d390e4300","url":"./post/ae58d2f1/index.html"},{"revision":"765d2fbc01ea168f87d75e7eace76805","url":"./post/d4550abf/index.html"},{"revision":"b73d02af24aa5c341086542a055e4355","url":"./post/d50c4d0e/index.html"},{"revision":"55cee205469982e3c88f9d50d59dc62a","url":"./post/db569493/index.html"},{"revision":"a383c550d40ce0a9ce6b914a39ae3824","url":"./post/dd83a796/index.html"},{"revision":"d10a050ad6ca7fa74d1de5288f2e07da","url":"./post/f82f332a/index.html"},{"revision":"573214246947f794204ff1d8db1fe3a3","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"ff5d21b01c73e57884da80abd5b71f39","url":"./tags/AI/index.html"},{"revision":"6aa6f6578b8ac91483ff9cecd5ae221d","url":"./tags/Aplayer/index.html"},{"revision":"6440894d064f502293a218287d1e45c4","url":"./tags/Bing/index.html"},{"revision":"f1148d8d60f57c49fbef20a7840593b9","url":"./tags/BUG/index.html"},{"revision":"9cfc18443ea66cb91a3a4d0c86136e26","url":"./tags/CDN/index.html"},{"revision":"b4350d9e8e164ed06e03f174707a6e07","url":"./tags/CMS/index.html"},{"revision":"de96cc31644cd2d5bff9b2fc74d33d3e","url":"./tags/css/index.html"},{"revision":"13fbb8f3ffe43a20e82395ae5401230e","url":"./tags/DNS/index.html"},{"revision":"b79a2900584ac41d7ab83b0f4b268a7a","url":"./tags/Flash/index.html"},{"revision":"b0db37c358776cb455c23e0ac5e228d1","url":"./tags/GFW/index.html"},{"revision":"6d1bfd73a72f88b1095bf76e639aa707","url":"./tags/Gridea/index.html"},{"revision":"2f96151e80d7d4723cb68472d8e8261a","url":"./tags/HTML/index.html"},{"revision":"fcbde40af830d457f2a143c7dd8e6ac7","url":"./tags/index.html"},{"revision":"94e797780e917ecc6e229f99876ac082","url":"./tags/JavaScript/index.html"},{"revision":"1df1eab489f9b88ba99206f8b4f40b04","url":"./tags/JQuery/index.html"},{"revision":"34f158def3c3a8b62ca42f6300de8f55","url":"./tags/MetingJS/index.html"},{"revision":"1d1be6d7f132539fcb75e85a0cf1825d","url":"./tags/NexT/index.html"},{"revision":"cb9ad445d839854a629a7fa72bc73856","url":"./tags/P2P/index.html"},{"revision":"b11e3ed156e3fcf87737f0790ffda77b","url":"./tags/RSA/index.html"},{"revision":"9089cd6205be8b7dea82d90cf641454f","url":"./tags/Vercel/index.html"},{"revision":"b4545d3b5d9028fedd195616aa8f5410","url":"./tags/分享/index.html"},{"revision":"46b32f0536b9693a97f931514095160e","url":"./tags/加密/index.html"},{"revision":"53a79e4914cf4f99a866426a840e8d70","url":"./tags/加载动画/index.html"},{"revision":"e530cecdde565c797f6f2a3e91cbd933","url":"./tags/右键菜单/index.html"},{"revision":"7d331977af3c6734c84dfdc37cc630ae","url":"./tags/域名/index.html"},{"revision":"95a9602b498a72f04b9b4353a50b2996","url":"./tags/密码学/index.html"},{"revision":"2e14b88e7f1571b0a2b9418596678fba","url":"./tags/建站/index.html"},{"revision":"e0723bfbc7545f434a76ab81e1e3db79","url":"./tags/插件/index.html"},{"revision":"0695ebb39308a418185cfb04b30faff1","url":"./tags/服务器/index.html"},{"revision":"61867d94ce8925a01ce70a7fed5b58ef","url":"./tags/网页源码/index.html"},{"revision":"0fc7c9d7c1c1eddc38f92f5b046b44b0","url":"./tags/美化/index.html"},{"revision":"e193e87c8657eba8b1d4b5739e1083e2","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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