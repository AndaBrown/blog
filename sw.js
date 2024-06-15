const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"9ff39cf2fe746daa8ed6740dcd673d08","url":"./404.html"},{"revision":"0f23439eb8e5b3d2006340e6410d326d","url":"./about/index.html"},{"revision":"ff437d8ce9f05cf5a105316463d4fc75","url":"./archives/2022/06/index.html"},{"revision":"69c5ae91de301408ccaaad3954c600c1","url":"./archives/2022/07/index.html"},{"revision":"ff8efdf62da470917bd4c21e2dabb429","url":"./archives/2022/08/index.html"},{"revision":"3da9d826578415bcc5be1bd93e11f47c","url":"./archives/2022/10/index.html"},{"revision":"10ea36ab5d271dda361696e69e09cb79","url":"./archives/2022/11/index.html"},{"revision":"773710f1b93787d2e467442844c866ef","url":"./archives/2022/12/index.html"},{"revision":"be9323305a667f6ee307cd80c9a6c512","url":"./archives/2022/index.html"},{"revision":"9a783d4d5bf516cb59ef7ccf4f51bccd","url":"./archives/2022/page/2/index.html"},{"revision":"07b6bae164222507669bf5ebdab4618e","url":"./archives/2023/02/index.html"},{"revision":"57a64efc9dd5f4ea1b42e82df14e8571","url":"./archives/2023/04/index.html"},{"revision":"624a1bf544dcec15ef83fed02e46f10b","url":"./archives/2023/index.html"},{"revision":"f3d7250ca26b3aeb92bc70a2751dc7bb","url":"./archives/2024/04/index.html"},{"revision":"6bdfc9dc2f6c680ed095bc6ec8939eed","url":"./archives/2024/05/index.html"},{"revision":"e1c612083f6b6411f7e48833df2edc80","url":"./archives/2024/index.html"},{"revision":"5ccad9ea6155c6bc81b23224de906a6d","url":"./archives/index.html"},{"revision":"ecd10efb08adc7c96a729833750d5968","url":"./archives/page/2/index.html"},{"revision":"8378c81e0c2b570d335b451f165fbcc4","url":"./categories/AI/index.html"},{"revision":"f1cabf089b0c09239082fb9e52120d1d","url":"./categories/Gridea/index.html"},{"revision":"92f0e5f80b7a107770735becd1b1b775","url":"./categories/index.html"},{"revision":"1be3e2ff380f873cd97f3c9ca22d26ee","url":"./categories/Vercel/index.html"},{"revision":"f8fe8780ad7b930b9ef8bbe7693f88ac","url":"./categories/休闲/index.html"},{"revision":"220a44a9f003d24bfa3795b04fe93bef","url":"./categories/建站/index.html"},{"revision":"5e4d40e04c973d4eaeb58b25f61bbfc2","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"2c6a4d7fed3ee140632564154ff4fe34","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"392419a380566e73cf5a1aef587d3079","url":"./go/index.html"},{"revision":"2dc2db718896cef5be29e1c5318225af","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"e0d0e4590a9858be428f68fb1701e25e","url":"./link/index.html"},{"revision":"a3a096a7af1ec9748fe44c6fafa61d77","url":"./message/index.html"},{"revision":"a05761496cdb6a002e3156257161ed74","url":"./page/2/index.html"},{"revision":"1dd544142f1b4f78b5f453cabdae5daa","url":"./post/193912eb/index.html"},{"revision":"5d15fc89042583ccbcd969c944db9b11","url":"./post/220b8380/index.html"},{"revision":"34034dcedde3db23c29fe98aed1ac560","url":"./post/24dc856c/index.html"},{"revision":"3318f9c593d8f437a5a796943b5cf658","url":"./post/3082b2c6/index.html"},{"revision":"24a7e88202f337e29f1c5d9ca87d1520","url":"./post/3df9585/index.html"},{"revision":"e4108b3df095580f8ba7ceb905a20034","url":"./post/4a17b156/index.html"},{"revision":"ba8513d638599c6f549cab05a3f80e9e","url":"./post/739f0a30/index.html"},{"revision":"07e1f6407f58057581037d78ee7b3729","url":"./post/73fccf9a/index.html"},{"revision":"5fa2dcbac0641dced084a7598e21338d","url":"./post/7ca5704e/index.html"},{"revision":"b6ce26efa1af48f1664f50f7ef926b96","url":"./post/7fc77154/index.html"},{"revision":"942339ee69fd36d37f2608714a1e93a2","url":"./post/8422c4dc/index.html"},{"revision":"0c636141b0949eeb8d0f85f0dfbca23a","url":"./post/99c7fa1c/index.html"},{"revision":"97d7b5893d12088f5442db154c63f74f","url":"./post/9c60e209/index.html"},{"revision":"c8529e48c0fd4167ed2eb010229015ed","url":"./post/ae58d2f1/index.html"},{"revision":"23ee95264546c987dbd76a5846d8e947","url":"./post/d4550abf/index.html"},{"revision":"84dbc2350dc009de7ba407e79965132b","url":"./post/d50c4d0e/index.html"},{"revision":"059be915167c952aa59eb7f172b7c17f","url":"./post/db569493/index.html"},{"revision":"da55d61b25efdac9b29e1986759c7519","url":"./post/dd83a796/index.html"},{"revision":"bf453307d8cece32c825b593eaacae5d","url":"./post/f82f332a/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"24fb1b9b34f30c7571fd3576d6f090b0","url":"./tags/AI/index.html"},{"revision":"89ef239beb8b5520515c06e504f14ba9","url":"./tags/Aplayer/index.html"},{"revision":"27d5de9a19004b9c62171a6d44e0c78b","url":"./tags/Bing/index.html"},{"revision":"502841f319bf937c372bfeab8bb3e29e","url":"./tags/BUG/index.html"},{"revision":"106b3581ef8856b038e3c0068d3418cc","url":"./tags/CDN/index.html"},{"revision":"513f3f8088c108af3f3c0a713b6e5245","url":"./tags/CMS/index.html"},{"revision":"7bd646a1f74f32c21d7d4da7a34ed3f6","url":"./tags/css/index.html"},{"revision":"c3af735cb6f8f566e2f50615884551e1","url":"./tags/DNS/index.html"},{"revision":"cece28816ba683abaa58a943253d31d3","url":"./tags/Flash/index.html"},{"revision":"3e7677d5c653afde55e822b82d4c0a27","url":"./tags/GFW/index.html"},{"revision":"b31d83f4b8302359b69110547707209b","url":"./tags/Gridea/index.html"},{"revision":"e8357ac11794df091d416850ba95bb8d","url":"./tags/HTML/index.html"},{"revision":"30db5d76c4997a0d2dc4fcfffe54a1ab","url":"./tags/index.html"},{"revision":"133668a847fbd4fab6e50ecaa10e0f06","url":"./tags/JavaScript/index.html"},{"revision":"be450b8fb5be90040b736e7e88d77ac0","url":"./tags/JQuery/index.html"},{"revision":"cbc9b8d3aad1d89a1a7c3787abdb56a5","url":"./tags/MetingJS/index.html"},{"revision":"828e25e24eeff9e17aa1e88c6ce92221","url":"./tags/NexT/index.html"},{"revision":"1a9688139a3e14b004e739d2c67afd6d","url":"./tags/Vercel/index.html"},{"revision":"9af335b61ae280aa8a85b01f297c38b2","url":"./tags/分享/index.html"},{"revision":"47c7996dbe40f4183d5b6924ee71176d","url":"./tags/加载动画/index.html"},{"revision":"357fc1aa566666cee76b2998635f46c8","url":"./tags/右键菜单/index.html"},{"revision":"60257d0b8d93fed63f73a73e1b04ec94","url":"./tags/域名/index.html"},{"revision":"9c16eb763aa50c32bd3177efdc5457f9","url":"./tags/建站/index.html"},{"revision":"c7b9e57c33c66bf68f99ec6e2a07d044","url":"./tags/插件/index.html"},{"revision":"74ed4b70ff8f2848b035f9b66ec404e0","url":"./tags/服务器/index.html"},{"revision":"5013c39b997fe58ecdc8edcca16e3dc3","url":"./tags/网页源码/index.html"},{"revision":"532d53e2a893c6bfa6061fbb2c91760b","url":"./tags/美化/index.html"},{"revision":"b80bd7c3fabc3a96865c229bdd87028c","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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