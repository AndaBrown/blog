const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"d9934100e464bfa58ba6d07d23be0284","url":"./404.html"},{"revision":"96b63a55db9fdbd093ee0cfa49047aba","url":"./about/index.html"},{"revision":"46fbba2adfdeefb589d8993218c5975a","url":"./archives/2022/06/index.html"},{"revision":"bf225cad7b007b05556cbb386f33d317","url":"./archives/2022/07/index.html"},{"revision":"729c08672149ca7926d9142cb8a77b51","url":"./archives/2022/08/index.html"},{"revision":"4eb8e938148adb597a1e5d4644244d26","url":"./archives/2022/10/index.html"},{"revision":"9db89506d5d4b11f398994de92d03388","url":"./archives/2022/11/index.html"},{"revision":"ee0e00163f5a422d48b760d3ebce9283","url":"./archives/2022/12/index.html"},{"revision":"815c69b5a5093c2e6fb78924e86f9678","url":"./archives/2022/index.html"},{"revision":"5ab0d6dd41ef7fc390b958b0f6736adc","url":"./archives/2022/page/2/index.html"},{"revision":"c79a39260e83bf727f9603126d9ceec2","url":"./archives/2023/02/index.html"},{"revision":"4b6061138abce18bc0283c23b241192d","url":"./archives/2023/04/index.html"},{"revision":"173a304f7e82fd0498024642cfc50faf","url":"./archives/2023/index.html"},{"revision":"3b664a073f59766c384c0b3b99302db6","url":"./archives/2024/04/index.html"},{"revision":"aee0d550683ca85b6c914574371e14b3","url":"./archives/2024/05/index.html"},{"revision":"550f874bd29d04d53e311969f2f07674","url":"./archives/2024/06/index.html"},{"revision":"e2c6fedb8a5d045d7bfcf9b10517caac","url":"./archives/2024/09/index.html"},{"revision":"876517f7897c1d2e4623339b951a38c3","url":"./archives/2024/index.html"},{"revision":"0b6e1f013b0963acb11309e8c5ffd5c1","url":"./archives/index.html"},{"revision":"400ad24b9685ce372d42d1f80e548ebf","url":"./archives/page/2/index.html"},{"revision":"1db221939fe7c014d87f86df98731216","url":"./archives/page/3/index.html"},{"revision":"f31d35b22414a8fbffffd83390d7b5eb","url":"./categories/AI/index.html"},{"revision":"3cafc0f9e0df4308e044bb1c260229c3","url":"./categories/Gridea/index.html"},{"revision":"2b5bb3c7816aaefda451aca9af014fc4","url":"./categories/index.html"},{"revision":"3f05e1ddfd8f0e0f06aba73ff497d574","url":"./categories/Vercel/index.html"},{"revision":"77ec9a5dca1b5d21086d3d837a3a4f82","url":"./categories/休闲/index.html"},{"revision":"032f2226d409f9c6b6097787695c1aac","url":"./categories/建站/index.html"},{"revision":"ff520139a17892140ed90e0f7a7aa315","url":"./categories/科普/index.html"},{"revision":"d0e222d21bd580b55a057c3fdc959185","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"34784859aa4241a005bc56708c8b167f","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"726e973550de916cdf364d2e727a07f7","url":"./go/index.html"},{"revision":"38ce88919899d12ea2b61a76f50b33d3","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"e9be9ef89e408bb0d829c0b02e34aab8","url":"./link/index.html"},{"revision":"a256a0b232e85e0f55b399b151e91ca2","url":"./message/index.html"},{"revision":"76f66db0eaf074973609880c955f7c86","url":"./page/2/index.html"},{"revision":"56d6e7f57c04312ac11d4556068884b1","url":"./page/3/index.html"},{"revision":"60dee35f409bcb76c6e6da593ec3c7dc","url":"./post/193912eb/index.html"},{"revision":"6cc803da00cfe56fee1c58f8715e6920","url":"./post/220b8380/index.html"},{"revision":"43a29c05f8993f73ff86813ece81e5ec","url":"./post/24dc856c/index.html"},{"revision":"cc7e74066978c58396b5cabf2c3d44ee","url":"./post/3082b2c6/index.html"},{"revision":"b145c99f947231458144ae3e2dac9cca","url":"./post/3df9585/index.html"},{"revision":"5edbabf08215813886a74172a8351139","url":"./post/4a17b156/index.html"},{"revision":"e2c3bcacc086985ad5b882bc87536c85","url":"./post/739f0a30/index.html"},{"revision":"9a7d51ebf199d3cddd9bdaa9bbea5cae","url":"./post/73fccf9a/index.html"},{"revision":"ed6180567d65fd66b5e446f38ebb094e","url":"./post/7ca5704e/index.html"},{"revision":"7b93147d341eb6d54a75da252ec3c4ea","url":"./post/7fc77154/index.html"},{"revision":"1ff7c63712e75410593888ad02576952","url":"./post/8097b5e3/index.html"},{"revision":"9d1e3acd6169e35bcadcf220ddd8418a","url":"./post/8422c4dc/index.html"},{"revision":"f043a29c3727a604b8ab8a02ca00e5bb","url":"./post/99c7fa1c/index.html"},{"revision":"995ae8169756e875378d32468f02afcd","url":"./post/9c60e209/index.html"},{"revision":"93b57b3cf52a5b26a845e092eb29e501","url":"./post/ae58d2f1/index.html"},{"revision":"42667acafbf2b246fa0746ff5ee2ed0f","url":"./post/d4550abf/index.html"},{"revision":"baa8e629d43e0a1f340d4121d8dfd300","url":"./post/d50c4d0e/index.html"},{"revision":"634c8b6c6780f7038481235433ee33c4","url":"./post/db569493/index.html"},{"revision":"ce411a15751b41f6f254b0350309dfe2","url":"./post/dd83a796/index.html"},{"revision":"c29c22a94d3f9a1caadec64df79463b8","url":"./post/f82f332a/index.html"},{"revision":"ba895c612a427bb21545765adcf6557f","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"3a0abee0cf8ca14f8e9be4ab40ccfe1c","url":"./tags/AI/index.html"},{"revision":"71266ea6b0e4ea64d866933f5b8e0f3e","url":"./tags/Aplayer/index.html"},{"revision":"3f66a039fcc39851a17cf5dd6730671b","url":"./tags/Bing/index.html"},{"revision":"bef5fa4eeb1eaebb7930cbac61f5614c","url":"./tags/BUG/index.html"},{"revision":"d7e07445c853aae2ab4e2375f5b81fcd","url":"./tags/CDN/index.html"},{"revision":"34c607cbad8fddc2e2742f353ad85f26","url":"./tags/CMS/index.html"},{"revision":"63ede5973767e2d0ede00357524bfa92","url":"./tags/css/index.html"},{"revision":"777a371aea200c804932f9e4f30669b6","url":"./tags/DNS/index.html"},{"revision":"bbb3487b7130490c2b4e3d045e388f80","url":"./tags/Flash/index.html"},{"revision":"4fbe09b9b5ced88e22822e0498be730c","url":"./tags/GFW/index.html"},{"revision":"f8cd7e5ad812e02106d03e95fce982da","url":"./tags/Gridea/index.html"},{"revision":"803074f8c392d1bda169cf7e50bb8af1","url":"./tags/HTML/index.html"},{"revision":"2376b20ba33ef877d9602ed67ceabe34","url":"./tags/index.html"},{"revision":"c690f121bd3fd004b0ba6386f646705d","url":"./tags/JavaScript/index.html"},{"revision":"4a87758240d623e8da9ee0b2656918f7","url":"./tags/JQuery/index.html"},{"revision":"c806ef571ae1f4e4ca28b1833164a3a7","url":"./tags/MetingJS/index.html"},{"revision":"0d652f5ef17bbedfe56348cdb3d06ce5","url":"./tags/NexT/index.html"},{"revision":"8c9baa207468aea4c0d8a77e421bb10b","url":"./tags/P2P/index.html"},{"revision":"dc32a0ea82ed2d977f41d4c79ac7acc4","url":"./tags/RSA/index.html"},{"revision":"47a3bb2d5b8cdb6aae50fe15af9918ce","url":"./tags/Vercel/index.html"},{"revision":"767a6159736688ab836665a3efc13c25","url":"./tags/分享/index.html"},{"revision":"3da3e263391d99ebf55bfe642bf88ba3","url":"./tags/加密/index.html"},{"revision":"701a5054007814b1b7cff6f105e226a6","url":"./tags/加载动画/index.html"},{"revision":"795a93bce414493a56c2aaadf44610f6","url":"./tags/右键菜单/index.html"},{"revision":"14a9ebe6d280dacf91d1092da915d1dd","url":"./tags/域名/index.html"},{"revision":"de2b486ce5c33967806af811b3fdb9a3","url":"./tags/密码学/index.html"},{"revision":"42cd966d5c2b7d013a5c8d30c2d56c12","url":"./tags/建站/index.html"},{"revision":"db08e3d08d4863bf2139164f176e452d","url":"./tags/插件/index.html"},{"revision":"2bf67d8fbc470152fa0bbe6bf50f4000","url":"./tags/服务器/index.html"},{"revision":"4393991517a72ddd0a4c23703b85b660","url":"./tags/网页源码/index.html"},{"revision":"fef7017196d823a0266b0a65c5ef9fb5","url":"./tags/美化/index.html"},{"revision":"0e4053343048aeb76307b30db643b84f","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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