const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"92d42a3cd003327ff1cd6c1223eafcf7","url":"./404.html"},{"revision":"fb8c7a1e0cd38c913f2132afdbfaedb5","url":"./about/index.html"},{"revision":"6b57fb4aef6525ea5ef717ddf419a5cb","url":"./archives/2022/06/index.html"},{"revision":"d29a85dc115aafe95b1f1f9942691686","url":"./archives/2022/07/index.html"},{"revision":"29013379500f93e15588e3f8592566a3","url":"./archives/2022/08/index.html"},{"revision":"aa5edc890161cd5ba412642ab7c55f74","url":"./archives/2022/10/index.html"},{"revision":"77e347235e08d1e58c3e09be0a698e5d","url":"./archives/2022/11/index.html"},{"revision":"8c7972acd902cf7ea985765e675e4414","url":"./archives/2022/12/index.html"},{"revision":"e38738b02e8e223d6b6a33086be8dc68","url":"./archives/2022/index.html"},{"revision":"1b21e7b52002b62b016e5fd0f5b8e42d","url":"./archives/2022/page/2/index.html"},{"revision":"e7e9ff342fbc32300e653d5ae175fdb4","url":"./archives/2023/02/index.html"},{"revision":"60939744f3aca697d93e487fe195b8d2","url":"./archives/2023/04/index.html"},{"revision":"fdf065c0f0dfd4f12ae0c3de3c104e48","url":"./archives/2023/index.html"},{"revision":"59ae8ca8a615217376f6267ac1428f76","url":"./archives/2024/04/index.html"},{"revision":"af8007efe4d100fe0ea4ed2b6458dc20","url":"./archives/2024/05/index.html"},{"revision":"d4c74bdf9face14577d06ac39d6c619c","url":"./archives/2024/06/index.html"},{"revision":"467f2a2b477c45589ba416118086364b","url":"./archives/2024/09/index.html"},{"revision":"83b90666c882e20c94f7ac273d2c37a1","url":"./archives/2024/index.html"},{"revision":"c96832d607ba192d48dbbca9b83c70d6","url":"./archives/index.html"},{"revision":"69e192e9253668583d48f6590e272df8","url":"./archives/page/2/index.html"},{"revision":"6b081cecd994eb0d97cecbaf4e43cf9e","url":"./archives/page/3/index.html"},{"revision":"f885885afc0841f207710f67086ad61c","url":"./categories/AI/index.html"},{"revision":"62c32dd8b690622f38e56a59b9ab6157","url":"./categories/Gridea/index.html"},{"revision":"bfbfbf5966d3c93efc99428b407599e7","url":"./categories/index.html"},{"revision":"ff742ff20d9ef9f21bae5e7a7f003afa","url":"./categories/Vercel/index.html"},{"revision":"02c1280159f1d34903cfe2e501e99e85","url":"./categories/休闲/index.html"},{"revision":"2897bdec39c9987c7da209e7a57854d0","url":"./categories/建站/index.html"},{"revision":"2a71632636b1f3a8bfd695e4b03f16a2","url":"./categories/科普/index.html"},{"revision":"206d2b5ea4a3225c12c80db3ada8662c","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"6d9a6cc28b64ea12b4ee6a7a6fdc4c6d","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"726e973550de916cdf364d2e727a07f7","url":"./go/index.html"},{"revision":"f30fd32e857457c3fab744a1a9cbfe39","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"9dfecd8aa313f607805753b238876bf0","url":"./link/index.html"},{"revision":"de8124852425759d3b84840c44cacc59","url":"./message/index.html"},{"revision":"426092613ce052635c4f52ac1b254d68","url":"./page/2/index.html"},{"revision":"cfa4ec3445cbd34bac8af15f8640a9c5","url":"./page/3/index.html"},{"revision":"34928fb6d8d55cab1633f9f2d62534be","url":"./post/193912eb/index.html"},{"revision":"aff73458636587fd9081aadf9489ce21","url":"./post/220b8380/index.html"},{"revision":"a03eb4c09d7379c7b72201f2aeb1a4a6","url":"./post/24dc856c/index.html"},{"revision":"1b26724aaca4f2ccfb0af70a045dddd9","url":"./post/3082b2c6/index.html"},{"revision":"06ca081337dfb661fe9f00e96c3aaa7b","url":"./post/3df9585/index.html"},{"revision":"42bc478c2a38e51fab5b8025171386b0","url":"./post/4a17b156/index.html"},{"revision":"4cc342385f83eb18861182714d81f367","url":"./post/739f0a30/index.html"},{"revision":"7aafe5f823d8c4afefe820a40a4d2731","url":"./post/73fccf9a/index.html"},{"revision":"7741911ac36f532536754d18f9606094","url":"./post/7ca5704e/index.html"},{"revision":"a7d9df33ca113afaf152a91579099957","url":"./post/7fc77154/index.html"},{"revision":"9812946c53c337e9b211cd5156908f01","url":"./post/8097b5e3/index.html"},{"revision":"5dc4ce24436ae8e47ef0247f54694512","url":"./post/8422c4dc/index.html"},{"revision":"a40cec03f39f67d2ecf0ee3b432988c5","url":"./post/99c7fa1c/index.html"},{"revision":"06f44041d7cdb73f6a600f40a08b95f2","url":"./post/9c60e209/index.html"},{"revision":"3c5af59b6071448e195804999d197211","url":"./post/ae58d2f1/index.html"},{"revision":"8f681b120eed1532d11af06a1d94450c","url":"./post/d4550abf/index.html"},{"revision":"cab599e0db06a2ba36a8a4b61074073e","url":"./post/d50c4d0e/index.html"},{"revision":"5806113b2c5a741221270c265baa7e5b","url":"./post/db569493/index.html"},{"revision":"fd9da9848d452f7c60ca394231f4d0dd","url":"./post/dd83a796/index.html"},{"revision":"3787c928d7ce80d0cbcebf04ee1f2647","url":"./post/f82f332a/index.html"},{"revision":"fce12507772d4aa59e1a6f8d6afe567f","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"12188fd9a81690a9756cb01b852cca98","url":"./tags/AI/index.html"},{"revision":"fb75080dc0508078260ec95f0fef83da","url":"./tags/Aplayer/index.html"},{"revision":"46d95a9bffebaa5c3997fc510819e6c0","url":"./tags/Bing/index.html"},{"revision":"15dc65a326f4d12a310d5b0fc82b238e","url":"./tags/BUG/index.html"},{"revision":"6c63d7a0f3eb5e70f58a44a2e11822d2","url":"./tags/CDN/index.html"},{"revision":"f2d4f8ab5f646de82fa2911a78859115","url":"./tags/CMS/index.html"},{"revision":"b4ef02ab725ff48159588f1a5b301286","url":"./tags/css/index.html"},{"revision":"2c50c35f629c1ddb09d045ef982cb528","url":"./tags/DNS/index.html"},{"revision":"cba0e6d9193e1f610c97d3f34320ebf6","url":"./tags/Flash/index.html"},{"revision":"66a769eee71acec0b230d68d398dd6b2","url":"./tags/GFW/index.html"},{"revision":"92b00988bf8c3c602bcf8a9139b66097","url":"./tags/Gridea/index.html"},{"revision":"67de4d503ee64d53b6bc4257cf100a00","url":"./tags/HTML/index.html"},{"revision":"c186d8210cc1380dd88d0c7d2e0fb694","url":"./tags/index.html"},{"revision":"a5ddc110ff5b20d479ab2948489f2700","url":"./tags/JavaScript/index.html"},{"revision":"b07e593e75737b856c29bcaf3cd75a27","url":"./tags/JQuery/index.html"},{"revision":"4a4720ee65d63947a621cb9ecf512d1f","url":"./tags/MetingJS/index.html"},{"revision":"5c0b2a2b6e1586b7d462ad5d77af707e","url":"./tags/NexT/index.html"},{"revision":"9d68a9c43b928b8396af9cb020b4ecb2","url":"./tags/P2P/index.html"},{"revision":"4a500964df265b05616ce680de305c24","url":"./tags/RSA/index.html"},{"revision":"8976c36f2f901792f08223dae0003235","url":"./tags/Vercel/index.html"},{"revision":"69b9d0332054596e0643878893da7b73","url":"./tags/分享/index.html"},{"revision":"2fd185c922fd0df1a85568494f0439a4","url":"./tags/加密/index.html"},{"revision":"12c189c6ce1f42019ef5ba6b8dae8309","url":"./tags/加载动画/index.html"},{"revision":"7be1fcd20aa24947b83d95f0970644ee","url":"./tags/右键菜单/index.html"},{"revision":"dd9460a2f016b56f9b1002327769dd0b","url":"./tags/域名/index.html"},{"revision":"ed4f358501ca125ece865d55efcf2b73","url":"./tags/密码学/index.html"},{"revision":"89c386ce8a104301f986c4cb8a653351","url":"./tags/建站/index.html"},{"revision":"718395350229c173ad444479eb6fefa9","url":"./tags/插件/index.html"},{"revision":"87e58c0840b10a49bea0937755e3b566","url":"./tags/服务器/index.html"},{"revision":"551d820ab8bbe8f1ede9fa75c6f98b4f","url":"./tags/网页源码/index.html"},{"revision":"94ff02821be993b72b4d5da0796825a5","url":"./tags/美化/index.html"},{"revision":"552d03f7a1d3bd5aece6be9572ce7940","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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