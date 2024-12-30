const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"c5cb7b372247917aca537e31211b578b","url":"./404.html"},{"revision":"b1a52f400aa11ce13804af78d100e7cf","url":"./about/index.html"},{"revision":"34be00de3417716727a971c610fa1854","url":"./archives/2022/06/index.html"},{"revision":"7f8d7e2010ae46e914367ead6015d950","url":"./archives/2022/07/index.html"},{"revision":"2e1fdfcc3b300e19b180bae99d458c55","url":"./archives/2022/08/index.html"},{"revision":"6f36a5740b26035870db5c304213b4b0","url":"./archives/2022/10/index.html"},{"revision":"63a2924aae5a2ebb1fee9823952e5bf9","url":"./archives/2022/11/index.html"},{"revision":"177c0392f9f57360e9622843453c3022","url":"./archives/2022/12/index.html"},{"revision":"0d0963c1f9f1d9070dfbe97fb3968dac","url":"./archives/2022/index.html"},{"revision":"e7589b2f1bce509bd1494621908d0d4c","url":"./archives/2022/page/2/index.html"},{"revision":"c5a79871442d357d84804dcef124e46d","url":"./archives/2023/02/index.html"},{"revision":"f9ad6fb20c1b7766a612531888165f0f","url":"./archives/2023/04/index.html"},{"revision":"2fdde62e6f3e1a8e1189cd6fa6a64446","url":"./archives/2023/index.html"},{"revision":"31e7b8b0ebd45cbe1260adaf15d1ffb6","url":"./archives/2024/04/index.html"},{"revision":"f113aab1d6a0fad98f0ee828fe5445ec","url":"./archives/2024/05/index.html"},{"revision":"35370c0936aba3dfe2cea264c98c197d","url":"./archives/2024/06/index.html"},{"revision":"7b8ba6484f871ca007a91ae590044ae0","url":"./archives/2024/09/index.html"},{"revision":"49946d823df97ce7e954035a7b77fd4a","url":"./archives/2024/index.html"},{"revision":"8336ceb9538888573ae1259008613ff0","url":"./archives/index.html"},{"revision":"007930a600dab775e47be76add2e7125","url":"./archives/page/2/index.html"},{"revision":"d2a31154574e794abb08fd48e1ee5f56","url":"./archives/page/3/index.html"},{"revision":"425962e6ebefa950f0e5f775fd4969b1","url":"./categories/AI/index.html"},{"revision":"b9ee6748ecbb9e09649226e08fe207ae","url":"./categories/Gridea/index.html"},{"revision":"df00ab9a4bf61405c0d37f952a590ab9","url":"./categories/index.html"},{"revision":"472d435612686085ea6fb2d7016e47a2","url":"./categories/Vercel/index.html"},{"revision":"a8d42dbd57108c7ecc85008d4c6b0083","url":"./categories/休闲/index.html"},{"revision":"f1617c77be18cf9c7502b60ae29f6bee","url":"./categories/建站/index.html"},{"revision":"85e61d18bd66cd426c45d8a48a51de0b","url":"./categories/科普/index.html"},{"revision":"9bb72f22675dac1447e19389b39458bb","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"323d63710a9bc3b8bfa3f018bee08ecf","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"fe24b08010caae75438089850a30f76c","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"b3c5fc2e6d36572570d0af3554baf5af","url":"./link/index.html"},{"revision":"b666af868059e04b5cb5d6e4fd77b2da","url":"./message/index.html"},{"revision":"9a5f6a06005ca8b9172d361316d39852","url":"./page/2/index.html"},{"revision":"a798ca7ddc3b84e2b0f9ebc44530f911","url":"./page/3/index.html"},{"revision":"c5949f4298903dbbe27e138b0ae79b49","url":"./post/193912eb/index.html"},{"revision":"5785de20c2a0e2db6f85b0f44380ef10","url":"./post/220b8380/index.html"},{"revision":"35d9617e9efc898baff33a5f4d257733","url":"./post/24dc856c/index.html"},{"revision":"15dfeb06acaf62936ff96ca715d66d08","url":"./post/3082b2c6/index.html"},{"revision":"d92cbbe069a4897933d68ae4fd60ae55","url":"./post/3df9585/index.html"},{"revision":"8f20df1ac57938ba030f3ef16c432605","url":"./post/4a17b156/index.html"},{"revision":"ee5bdc67483b00c41e7c2c7cb021e5ea","url":"./post/739f0a30/index.html"},{"revision":"7a41a7df9e1ad83419a6d9161fab90c4","url":"./post/73fccf9a/index.html"},{"revision":"c3502db23439ce45686d380c910bb1b1","url":"./post/7ca5704e/index.html"},{"revision":"2d54235080e665cbf07977a44a598ce3","url":"./post/7fc77154/index.html"},{"revision":"b51ca9da7a4c6f523d2ab2c150e79c39","url":"./post/8097b5e3/index.html"},{"revision":"c1a03d76706e95d62eeb43b363d0e410","url":"./post/8422c4dc/index.html"},{"revision":"f906865e1f5fa8e87e9aa5a73414d91e","url":"./post/99c7fa1c/index.html"},{"revision":"9eb16e6d4f0d2c97d6ef4b8d949f5f90","url":"./post/9c60e209/index.html"},{"revision":"cc183bd278cbdbebf6bc3c6650d2b831","url":"./post/ae58d2f1/index.html"},{"revision":"8745aa92c68886075ae81125776f3227","url":"./post/d4550abf/index.html"},{"revision":"477c72f230e8e407263733c720b31070","url":"./post/d50c4d0e/index.html"},{"revision":"3795728fd3f229b7b2ee11c434d7efcf","url":"./post/db569493/index.html"},{"revision":"4d13f6b9fe07a24a86475d1f0ffd1e8d","url":"./post/dd83a796/index.html"},{"revision":"9d8291191afb73936ac864496d9e3187","url":"./post/f82f332a/index.html"},{"revision":"73d943a1b846f861d432d122daa59ff1","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"04d1243e1e05a80b92c0a53833af3575","url":"./tags/AI/index.html"},{"revision":"9fcc3d1241f309b0c7dd8b67508ed35f","url":"./tags/Aplayer/index.html"},{"revision":"41f9440faadd5d267f5d8d400aa917b1","url":"./tags/Bing/index.html"},{"revision":"253584452738789c492228f2ab1972a8","url":"./tags/BUG/index.html"},{"revision":"3c6d06382b7162637575c1074e0274f6","url":"./tags/CDN/index.html"},{"revision":"65cdb170067d4b78d01dd2da7b2f3569","url":"./tags/CMS/index.html"},{"revision":"310203accd57d8e0df9bc5bbc4a1ae58","url":"./tags/css/index.html"},{"revision":"bd877d1894792bdb63641704fde45a3b","url":"./tags/DNS/index.html"},{"revision":"73a36bc9bcdca368537dd03c82c85f1d","url":"./tags/Flash/index.html"},{"revision":"61d6611e116d994c9d6152e152dd7bf8","url":"./tags/GFW/index.html"},{"revision":"dc77c2be5e143f78449efe6ea9d7c07b","url":"./tags/Gridea/index.html"},{"revision":"b8caf501e6e1a084b636749925343584","url":"./tags/HTML/index.html"},{"revision":"5989323f9c53b71d8634a398f4becfd0","url":"./tags/index.html"},{"revision":"aefdae5861a929ad29cf00e6f015b57f","url":"./tags/JavaScript/index.html"},{"revision":"43bc18adfcdd1a33d30e9134705d7ce1","url":"./tags/JQuery/index.html"},{"revision":"053b0a88c8a6fa9a20966c8bbc3b9993","url":"./tags/MetingJS/index.html"},{"revision":"4f06f8d1b2814d9665de76f10f897b05","url":"./tags/NexT/index.html"},{"revision":"8fae14f6b9e4750b3f59e883b179f6f9","url":"./tags/P2P/index.html"},{"revision":"a94221e3ded3db051e338547cbdbe496","url":"./tags/RSA/index.html"},{"revision":"2816ef326d572e87a8040630ca7ba252","url":"./tags/Vercel/index.html"},{"revision":"5ee87fe0a71f73cfea44b4113bc9a467","url":"./tags/分享/index.html"},{"revision":"5afe8a55b793d024deec0472811f7c0a","url":"./tags/加密/index.html"},{"revision":"4c5fc380ccb8b8b3cecb6345cf7f7d21","url":"./tags/加载动画/index.html"},{"revision":"6af547e0be4e5ac3ed5610bbf90e7059","url":"./tags/右键菜单/index.html"},{"revision":"e381ff97c8df83318533282354cd26d5","url":"./tags/域名/index.html"},{"revision":"2d2b102f3baaa973e8dc62adab068b57","url":"./tags/密码学/index.html"},{"revision":"d2c54aca5562b2d90668fb8cf512438e","url":"./tags/建站/index.html"},{"revision":"df4201ec8a699da8ebe627c32b6a6721","url":"./tags/插件/index.html"},{"revision":"8fdbd7e4c732cb816961445e32ee7dcf","url":"./tags/服务器/index.html"},{"revision":"9eb302accfaecc4caf00d67c276126e1","url":"./tags/网页源码/index.html"},{"revision":"ac9a83403d57f59f7fe8fa455e924160","url":"./tags/美化/index.html"},{"revision":"6b99ba536f0666a1b85bd7f7450e0239","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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