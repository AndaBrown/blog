const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"bc2088f6a01781e937e5b7b6011fa588","url":"./404.html"},{"revision":"53eebfa6d425304c15167e9d1d6f82ef","url":"./about/index.html"},{"revision":"236f647e9e8ddb60c767b414ef2bc256","url":"./archives/2022/06/index.html"},{"revision":"cfe3490c270b4db5c0f4aa53476b9f55","url":"./archives/2022/07/index.html"},{"revision":"02e6b400da8c609cc764268926e98c59","url":"./archives/2022/08/index.html"},{"revision":"0830fb7dae0059ba4d021bc9b44df33b","url":"./archives/2022/10/index.html"},{"revision":"f822dc44bcae34014c21d54a62832116","url":"./archives/2022/11/index.html"},{"revision":"d08423d69393b13be15ec11d6df17806","url":"./archives/2022/12/index.html"},{"revision":"6fa345c8de03969f693ca279a8854962","url":"./archives/2022/index.html"},{"revision":"f74767c940b012fe5cf86daf1c6117e9","url":"./archives/2022/page/2/index.html"},{"revision":"650fafbaceb4bf45c74caf373cea6c2c","url":"./archives/2023/02/index.html"},{"revision":"5c0d7193f35119731a52ec9d78225409","url":"./archives/2023/04/index.html"},{"revision":"17b925e072e30768d009ee4467b09877","url":"./archives/2023/index.html"},{"revision":"e579b83a744631f26fc0c76477ce034d","url":"./archives/2024/04/index.html"},{"revision":"2779d9a4183b83ec5318a439454fe58e","url":"./archives/2024/05/index.html"},{"revision":"3d3ddbb4a85c81ff57dc9fdf5ee6a20d","url":"./archives/2024/06/index.html"},{"revision":"f19a8798f0aa2051ad30bd122b7e9978","url":"./archives/2024/index.html"},{"revision":"c215dab95901da2aabc310868c34771b","url":"./archives/index.html"},{"revision":"0c61d9286be791be6ba1900a4097a20a","url":"./archives/page/2/index.html"},{"revision":"6666f02b62315f4f7eb7cdefca64400e","url":"./categories/AI/index.html"},{"revision":"392398e1380daf271616aa72f245ae5e","url":"./categories/Gridea/index.html"},{"revision":"0fc4e057d4a62753e7d20691bd161873","url":"./categories/index.html"},{"revision":"e3f7ed8f94d1eda8fa0a9aa44f244676","url":"./categories/Vercel/index.html"},{"revision":"ea97276eaef9d342a72f9b87b6624a86","url":"./categories/休闲/index.html"},{"revision":"a26eb7bd6e18aa6d50f163674dcdf6e6","url":"./categories/建站/index.html"},{"revision":"efd112c99c31ebc4d6f2ccae519b1134","url":"./categories/科普/index.html"},{"revision":"fea60ebaef83ebf052a768963e5a99d5","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"07c69320b8c2bdf065da47369805d7f6","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"e927ce0f52aa7a8faa564ac00240dfdd","url":"./go/index.html"},{"revision":"62466ecac12cab4e533d49fd29d56ae7","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"cb7460a609f7ad2994307673445e7029","url":"./link/index.html"},{"revision":"f77465de220ea239cf200e95b70b916c","url":"./message/index.html"},{"revision":"c8dcd69aeaf86e7b84bd13e8771ee31f","url":"./page/2/index.html"},{"revision":"634f9a564333411df26474514785bbab","url":"./post/193912eb/index.html"},{"revision":"120292e51b24194904506456080632e4","url":"./post/220b8380/index.html"},{"revision":"46f2e54d0132320ab0597f63d51bc976","url":"./post/24dc856c/index.html"},{"revision":"3c3d653588999628de876aa520ba6a91","url":"./post/3082b2c6/index.html"},{"revision":"52817e8018072099c211cb6b48ee90cd","url":"./post/3df9585/index.html"},{"revision":"8b3b320579c9d94e7c6efc12ad43e95f","url":"./post/4a17b156/index.html"},{"revision":"b3f285e7139957c3278349a08cd6bc86","url":"./post/739f0a30/index.html"},{"revision":"3f9ad695fd54f9f85bceb0d793559aea","url":"./post/73fccf9a/index.html"},{"revision":"cd2d2e3208b6e8ee1b6f9eed1741144b","url":"./post/7ca5704e/index.html"},{"revision":"a7f9c6238efc70ac98bd0d62a1121beb","url":"./post/7fc77154/index.html"},{"revision":"ea2cc55f7c8c66895e2eab9f360e2534","url":"./post/8097b5e3/index.html"},{"revision":"4cc260c522d7bfb49c53669aafe959e4","url":"./post/8422c4dc/index.html"},{"revision":"a5ecf4b9e1503dea4d76ef9f1ad6a609","url":"./post/99c7fa1c/index.html"},{"revision":"104efb66a374ae178a90cda53eb98017","url":"./post/9c60e209/index.html"},{"revision":"7a485b12baf09eea9128fead8e6c7a17","url":"./post/ae58d2f1/index.html"},{"revision":"79576ca08493c63067a07cc00e3232f3","url":"./post/d4550abf/index.html"},{"revision":"9c09046d21fdfd37b2f4737f0f9a46b2","url":"./post/d50c4d0e/index.html"},{"revision":"94903c0dcd830c4b17d04cab01e11488","url":"./post/db569493/index.html"},{"revision":"1f7760f48689ee10c86474b34216f61a","url":"./post/dd83a796/index.html"},{"revision":"89f9648c7fa024ddaafdb79e81dfa426","url":"./post/f82f332a/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"01d1b4a362317299bc33b91320a62d6f","url":"./tags/AI/index.html"},{"revision":"f585728cd3e6f6c7d50624e1b41c96db","url":"./tags/Aplayer/index.html"},{"revision":"795b64759c2e5365b48736c3b3a4817c","url":"./tags/Bing/index.html"},{"revision":"0ff2abceaad583e3e150088baa8bb3ea","url":"./tags/BUG/index.html"},{"revision":"2f84e52a025a0a27961e47f5d0316468","url":"./tags/CDN/index.html"},{"revision":"2d34880ccec21bb1077d34df3f2f638c","url":"./tags/CMS/index.html"},{"revision":"5bca8adf74bc4c9902588ab533e880dc","url":"./tags/css/index.html"},{"revision":"c363355c08d39a2d5a0252b26b90cbf1","url":"./tags/DNS/index.html"},{"revision":"2c8cd32b8f8e0dddc5e957e389ac2329","url":"./tags/Flash/index.html"},{"revision":"957e78fea75c8cd5819297fabe32d939","url":"./tags/GFW/index.html"},{"revision":"2d9b5e4a986440ef59493436f7fa4023","url":"./tags/Gridea/index.html"},{"revision":"3ba0c95d0416fc50213b65c6eb75e9f3","url":"./tags/HTML/index.html"},{"revision":"50f22da93abe7e28cb02f0e9b57f5d45","url":"./tags/index.html"},{"revision":"50c8875cf21be0ce5d165fa9d9c5efe0","url":"./tags/JavaScript/index.html"},{"revision":"78ac281c444d4df4c8252e399b99ed73","url":"./tags/JQuery/index.html"},{"revision":"713209eb0c499086310cc66eb5f00546","url":"./tags/MetingJS/index.html"},{"revision":"19603d61799a33e84a96035270ec4451","url":"./tags/NexT/index.html"},{"revision":"88fc9e479ef3ab3521ad5ce570c58d76","url":"./tags/RSA/index.html"},{"revision":"41af5154693e751d1447920d97b3c37e","url":"./tags/Vercel/index.html"},{"revision":"133f70ed075ae749d120b1e5ca9c16dc","url":"./tags/分享/index.html"},{"revision":"a6db7681c78170063aef031925b6ef15","url":"./tags/加密/index.html"},{"revision":"af519767b0c749600d4a3522ae3d35c4","url":"./tags/加载动画/index.html"},{"revision":"5646d0f39befc432bf8e0944b4f00488","url":"./tags/右键菜单/index.html"},{"revision":"af15b0b8bb499050cc07c66a51f7a2da","url":"./tags/域名/index.html"},{"revision":"5b2ecbecb2ee91bd5dcd7fe3aef37389","url":"./tags/密码学/index.html"},{"revision":"3859cc2d48069f4d73208ee7d7ed6abd","url":"./tags/建站/index.html"},{"revision":"b66f1a719ce1a6cbc078abdcafc8f342","url":"./tags/插件/index.html"},{"revision":"7daac3ba6812c52ab3ebe931b1829701","url":"./tags/服务器/index.html"},{"revision":"6575487015d6f65ef232fbe3596c6c74","url":"./tags/网页源码/index.html"},{"revision":"31a484aa0c32c3bcb8663044e6a950ec","url":"./tags/美化/index.html"},{"revision":"ef54f70dd7083af589d6acfba66756a7","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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