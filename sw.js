const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"c2400e51b90a244501595531c80c8dc1","url":"./404.html"},{"revision":"b400127b4751caa4f9ebd9b6902f5936","url":"./about/index.html"},{"revision":"90853cd98a227ab95d9a2315d7452b97","url":"./archives/2022/06/index.html"},{"revision":"6ecd61febafd7123eab292a8d30412ed","url":"./archives/2022/07/index.html"},{"revision":"acfa76d19b8514db372f4366be857ba4","url":"./archives/2022/08/index.html"},{"revision":"eebbc60718fd8d7287755771d4e8ddd8","url":"./archives/2022/10/index.html"},{"revision":"7ee606452204cf0a592e06a1c20294e8","url":"./archives/2022/11/index.html"},{"revision":"778c03e34e919ecdde4ff335e9c45a30","url":"./archives/2022/12/index.html"},{"revision":"6c8d25246e3ac271a185a11cad3edbda","url":"./archives/2022/index.html"},{"revision":"c798c844751abdc44a07f59bde6dcb40","url":"./archives/2022/page/2/index.html"},{"revision":"6946eab9c9830ce0c89696d722fbe0f2","url":"./archives/2023/02/index.html"},{"revision":"f0d98ac3ac2de33580766e4846a37152","url":"./archives/2023/04/index.html"},{"revision":"27b007488f3055ad91a3f172148f27ca","url":"./archives/2023/index.html"},{"revision":"e04406983858d181376672d1d6ec7768","url":"./archives/2024/04/index.html"},{"revision":"16793ddc3014592bd81df9035cb3dfd5","url":"./archives/2024/05/index.html"},{"revision":"4ced5b7f0ef4e99f5a39865345098be9","url":"./archives/2024/06/index.html"},{"revision":"a8549aabd29d2757572b641508b71923","url":"./archives/2024/09/index.html"},{"revision":"31e3e5385e1141122ffef8dff1ef0090","url":"./archives/2024/index.html"},{"revision":"f0758eb78ab83ac6d9f8be868a930ac5","url":"./archives/2025/09/index.html"},{"revision":"38b8151a2cdd38ac32b52ee7f57b4a7f","url":"./archives/2025/index.html"},{"revision":"d9d72a08aa2aad3ede1b2153bf2bc741","url":"./archives/index.html"},{"revision":"cc9e1628aecd0350038a2a524ba7e0da","url":"./archives/page/2/index.html"},{"revision":"40fec1b667553d3ede0ab6feb24000e5","url":"./archives/page/3/index.html"},{"revision":"1d685edde51827bf888754af43ceabe3","url":"./categories/AI/index.html"},{"revision":"f5e2c44b8ffff7f0469c93cb05e9fa3c","url":"./categories/Gridea/index.html"},{"revision":"511d9c4a557fcb4378c03432aa13fada","url":"./categories/index.html"},{"revision":"7d1c502f3813674b014de213599414a2","url":"./categories/Vercel/index.html"},{"revision":"e27d897c9f2ea912f3d6fb187a22bb5a","url":"./categories/休闲/index.html"},{"revision":"b547ed48421f3091a33b0dfb1d74f04c","url":"./categories/建站/index.html"},{"revision":"2e94b626d587cf0d8ce1a02708273c45","url":"./categories/科普/index.html"},{"revision":"96195030b97911c9f65eb5b195cbfb86","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"75952521db8570f57cce40a88e38ed27","url":"./cookies-instructions/index.html"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"56aca3d86d6f929d39b3f4f2a27ac78f","url":"./index.html"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"b1c7fcb36a9189a8033f304c33878033","url":"./link/index.html"},{"revision":"04bcddf54b4ce29190def2b6408087da","url":"./message/index.html"},{"revision":"ee8c01acbe72c459afe7730a8fe6e2a6","url":"./page/2/index.html"},{"revision":"d912486d90511f08e7424ba03236ef41","url":"./page/3/index.html"},{"revision":"cf6520a925b3bd2ddb4ccd483f12709f","url":"./post/193912eb/index.html"},{"revision":"50ce148a08f49faca333238e73144547","url":"./post/220b8380/index.html"},{"revision":"935fadf4f77ba3e082bf00143ff99e55","url":"./post/24dc856c/index.html"},{"revision":"87b181b2dc0cdf2028cb62a79595ec72","url":"./post/3082b2c6/index.html"},{"revision":"af7c83713ce8e2c21c77b3ef4d7cfe79","url":"./post/3df9585/index.html"},{"revision":"2605cd28e974d8340bf10b1aca14f5c0","url":"./post/4a17b156/index.html"},{"revision":"57a9e632b3647484ccefd18bc2396f81","url":"./post/739f0a30/index.html"},{"revision":"d0a819e6be2c614281ef65fddf6a57fb","url":"./post/73fccf9a/index.html"},{"revision":"3ccfeb266db78e72ab3ef1a986689339","url":"./post/7ca5704e/index.html"},{"revision":"f2a190ab6760666b9ed2b82c2da9abed","url":"./post/7fc77154/index.html"},{"revision":"d7ff7167a972c593715499c1191c3cc8","url":"./post/8097b5e3/index.html"},{"revision":"044df9d7ac329ef8272efb6b1d3f0a94","url":"./post/8422c4dc/index.html"},{"revision":"0f196c8b4b9f64f22417c3e857975da2","url":"./post/99c7fa1c/index.html"},{"revision":"678ec045eb3f5cfaeb545c38b734b226","url":"./post/9c60e209/index.html"},{"revision":"2813c53e30efe2533845dae4cd8956fd","url":"./post/ae58d2f1/index.html"},{"revision":"a9f61607691cad802f442fb48f71fbab","url":"./post/b9a3407d/index.html"},{"revision":"1c0cfef4181063368e708cb4de699f19","url":"./post/d4550abf/index.html"},{"revision":"26bbd0e083c97c3804885d1261f94c9a","url":"./post/d50c4d0e/index.html"},{"revision":"05f1496c7d20e99fd664fc54c0fe6137","url":"./post/db569493/index.html"},{"revision":"e229c4828cee5b28737d78724d793c84","url":"./post/dd83a796/index.html"},{"revision":"99095e2e3d806c0e242c1e5c64835e8d","url":"./post/f82f332a/index.html"},{"revision":"9d7e270d785017679fe44499758d95ea","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"03bde9733b528858cf3012ba40031924","url":"./tags/AI/index.html"},{"revision":"ddcd1c4aa5ca7d78bd51f152534cdfe3","url":"./tags/Aplayer/index.html"},{"revision":"a23ea7103879eda95d7f4183fcfd308a","url":"./tags/Bing/index.html"},{"revision":"ee7cb3da01107346b38581130278899c","url":"./tags/BUG/index.html"},{"revision":"0e10f88378e2b4181e3dc3ff7ec3f076","url":"./tags/CDN/index.html"},{"revision":"36c43f8c8793d876e39ff7fdbf810f93","url":"./tags/CMS/index.html"},{"revision":"61eb8274b06bb93cb4b927761f1c5dd9","url":"./tags/css/index.html"},{"revision":"9b0eb9ab313474e77625caa2a6484c4c","url":"./tags/DNS/index.html"},{"revision":"a31fb54de98b5786a05b781e0b34100e","url":"./tags/Flash/index.html"},{"revision":"ec694c71791de1564334746c73b16198","url":"./tags/GFW/index.html"},{"revision":"56c969aaf73e8dd35713192a80e71a33","url":"./tags/Gridea/index.html"},{"revision":"fa1d88d255aee1d126b979e8f375264d","url":"./tags/HTML/index.html"},{"revision":"9d12ba808313e077366d65a291fa33dc","url":"./tags/index.html"},{"revision":"ae888a96b13c56b0e76911cbf4b9fc3c","url":"./tags/JavaScript/index.html"},{"revision":"8fb8f0ed535d2fadf9764225080fbe7c","url":"./tags/JQuery/index.html"},{"revision":"05d20e0e1f2965ef0850283654e5d267","url":"./tags/MetingJS/index.html"},{"revision":"c1cd3eb11baa052a4cba6a3cab38ead7","url":"./tags/NexT/index.html"},{"revision":"dd99e4a80bad867c9315b87aaf3d7085","url":"./tags/P2P/index.html"},{"revision":"066e725f76194defbbe43ea94359a1b8","url":"./tags/RSA/index.html"},{"revision":"ebef7b6f0e0f877fbea58a7c4086d83a","url":"./tags/Vercel/index.html"},{"revision":"ce30caf57aa09c7d8d3feaa7b45d65aa","url":"./tags/分享/index.html"},{"revision":"afb59e9d517b61864be8b8598738be99","url":"./tags/加密/index.html"},{"revision":"7baddbd39efa91af8bbf74110340b5eb","url":"./tags/加密货币/index.html"},{"revision":"1722dfc36c42c52e9977a0740a65f98b","url":"./tags/加载动画/index.html"},{"revision":"3454308cbf21734bc12ed511a6465081","url":"./tags/区块链/index.html"},{"revision":"c7f5ec151cbb78b68708b42e0716b2bb","url":"./tags/右键菜单/index.html"},{"revision":"4279f81f2d321e11c58a09bd28a82267","url":"./tags/域名/index.html"},{"revision":"e8350f65422edb3d89f897f9f933e339","url":"./tags/密码学/index.html"},{"revision":"c7960ce6d44750714b0dd00ed4c9e8e2","url":"./tags/建站/index.html"},{"revision":"5c2cfd9d1010110c3e9e40663b596db8","url":"./tags/插件/index.html"},{"revision":"4b107e6849e597b38832d9cf3de1b29a","url":"./tags/服务器/index.html"},{"revision":"ef9e81a7d13b71b90f5527287590d0b9","url":"./tags/网页源码/index.html"},{"revision":"45a748fc8745ace7509e92d1d2f2bcdb","url":"./tags/美化/index.html"},{"revision":"7d80190362c2a53a22dac098e8404426","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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