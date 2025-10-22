const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"c2400e51b90a244501595531c80c8dc1","url":"./404.html"},{"revision":"1b82b9005af1b67e1e5fcb88ba359643","url":"./about/index.html"},{"revision":"2bafc3f30ace690198e0003da4449a06","url":"./archives/2022/06/index.html"},{"revision":"85959e7b44c9f04034b7bccd063a91d2","url":"./archives/2022/07/index.html"},{"revision":"3a9bf5fcd628630c42bf680db113adfd","url":"./archives/2022/08/index.html"},{"revision":"c117e1807c83ceab3d2cd7f47293bcdc","url":"./archives/2022/10/index.html"},{"revision":"9676086b2e5b43f9eff770cd294b2e50","url":"./archives/2022/11/index.html"},{"revision":"541d89210d512c8f5cbb964ac94a32ab","url":"./archives/2022/12/index.html"},{"revision":"0506f5dc53c2277fd0173abf13787b35","url":"./archives/2022/index.html"},{"revision":"faedf5521e389a993d0308ab3802fdf6","url":"./archives/2022/page/2/index.html"},{"revision":"4e363b662ee794006fb16f4bf2fbe6f7","url":"./archives/2023/02/index.html"},{"revision":"4f3d4b1797a85c00b28b591775d8a4dd","url":"./archives/2023/04/index.html"},{"revision":"1f690ccb596fbbd35a717984e4ea973b","url":"./archives/2023/index.html"},{"revision":"4528ff36a689c09ccff77bd201312653","url":"./archives/2024/04/index.html"},{"revision":"21947f41b1f0662b0c3ff4361ee167fe","url":"./archives/2024/05/index.html"},{"revision":"38e53f8537cf7f8b917edddf02d2b2a2","url":"./archives/2024/06/index.html"},{"revision":"55a9d1f239655bcc43f0b835364790f6","url":"./archives/2024/09/index.html"},{"revision":"f35313e384c93d7aa97d78d0fc19ca65","url":"./archives/2024/index.html"},{"revision":"ca28cec501653b4ff111c217f9ea8490","url":"./archives/2025/09/index.html"},{"revision":"e64081691a1406f9c5dbb0be7386aba0","url":"./archives/2025/index.html"},{"revision":"246c4885585cf98b870100c8aa4af6cc","url":"./archives/index.html"},{"revision":"9d5c43f580212c6e6171444cbad15832","url":"./archives/page/2/index.html"},{"revision":"5481a306e39e1c681d0c98624718f723","url":"./archives/page/3/index.html"},{"revision":"0ab6616e18df8ad314570354c22ef841","url":"./categories/AI/index.html"},{"revision":"3331a895467367e1b6069a833bb22c2d","url":"./categories/Gridea/index.html"},{"revision":"af8c2bb501b8527d06048991b34ebc73","url":"./categories/index.html"},{"revision":"a0bbbfdd89060f137bcd78142c26a8bd","url":"./categories/Vercel/index.html"},{"revision":"38472a0432c9a1a995265c2474cbeca4","url":"./categories/休闲/index.html"},{"revision":"17cf7e30928e0e79a3fcda782857a792","url":"./categories/建站/index.html"},{"revision":"c5e5c466fb15ad78d8f024de748d219d","url":"./categories/科普/index.html"},{"revision":"a9642f62e0adcd12c5b5d177f6203612","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"299aee393376e860adc5954a04626226","url":"./cookies-instructions/index.html"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"21bc12b02e0a9be943b15f549051cfbf","url":"./index.html"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"548a818d989a9b84a339b9bebcc7de45","url":"./link/index.html"},{"revision":"d54e038b60d0272c36c54f37d7e7fb04","url":"./message/index.html"},{"revision":"0b7122eb061d065f805ec816e42480ae","url":"./page/2/index.html"},{"revision":"2f1009dd6cbc76ad958e2ccc27ce2bc9","url":"./page/3/index.html"},{"revision":"cf6520a925b3bd2ddb4ccd483f12709f","url":"./post/193912eb/index.html"},{"revision":"50ce148a08f49faca333238e73144547","url":"./post/220b8380/index.html"},{"revision":"935fadf4f77ba3e082bf00143ff99e55","url":"./post/24dc856c/index.html"},{"revision":"87b181b2dc0cdf2028cb62a79595ec72","url":"./post/3082b2c6/index.html"},{"revision":"af7c83713ce8e2c21c77b3ef4d7cfe79","url":"./post/3df9585/index.html"},{"revision":"2605cd28e974d8340bf10b1aca14f5c0","url":"./post/4a17b156/index.html"},{"revision":"57a9e632b3647484ccefd18bc2396f81","url":"./post/739f0a30/index.html"},{"revision":"d0a819e6be2c614281ef65fddf6a57fb","url":"./post/73fccf9a/index.html"},{"revision":"3ccfeb266db78e72ab3ef1a986689339","url":"./post/7ca5704e/index.html"},{"revision":"f2a190ab6760666b9ed2b82c2da9abed","url":"./post/7fc77154/index.html"},{"revision":"d7ff7167a972c593715499c1191c3cc8","url":"./post/8097b5e3/index.html"},{"revision":"044df9d7ac329ef8272efb6b1d3f0a94","url":"./post/8422c4dc/index.html"},{"revision":"0f196c8b4b9f64f22417c3e857975da2","url":"./post/99c7fa1c/index.html"},{"revision":"678ec045eb3f5cfaeb545c38b734b226","url":"./post/9c60e209/index.html"},{"revision":"2813c53e30efe2533845dae4cd8956fd","url":"./post/ae58d2f1/index.html"},{"revision":"a9f61607691cad802f442fb48f71fbab","url":"./post/b9a3407d/index.html"},{"revision":"1c0cfef4181063368e708cb4de699f19","url":"./post/d4550abf/index.html"},{"revision":"26bbd0e083c97c3804885d1261f94c9a","url":"./post/d50c4d0e/index.html"},{"revision":"05f1496c7d20e99fd664fc54c0fe6137","url":"./post/db569493/index.html"},{"revision":"e229c4828cee5b28737d78724d793c84","url":"./post/dd83a796/index.html"},{"revision":"99095e2e3d806c0e242c1e5c64835e8d","url":"./post/f82f332a/index.html"},{"revision":"9d7e270d785017679fe44499758d95ea","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"cfa5b8360c6d8a8814305259b8a2470b","url":"./tags/AI/index.html"},{"revision":"56dafa6cf0317e26b76cd60821b260ff","url":"./tags/Aplayer/index.html"},{"revision":"138c881b9469111927ebd34a4c979038","url":"./tags/Bing/index.html"},{"revision":"db6484d87e5e4ae6b2424aaa5b7429a7","url":"./tags/BUG/index.html"},{"revision":"5862667259153a806fb41530e3f515bd","url":"./tags/CDN/index.html"},{"revision":"160f1cd6b71718cb8848133625c38652","url":"./tags/CMS/index.html"},{"revision":"f6d9233badf0a778b6e537ed794cead5","url":"./tags/css/index.html"},{"revision":"6783168846bfe59f2884a35c4602a045","url":"./tags/DNS/index.html"},{"revision":"ab114c6dffa98b39a971bdc224140010","url":"./tags/Flash/index.html"},{"revision":"c54a467cd560b6259737ae3170fe727f","url":"./tags/GFW/index.html"},{"revision":"2ac5457c076f0171eeae1ed684a4bdba","url":"./tags/Gridea/index.html"},{"revision":"f4a68676a9d3512104146d0efe486fac","url":"./tags/HTML/index.html"},{"revision":"e85f2af5bdebc53165e4010f09af59f3","url":"./tags/index.html"},{"revision":"859ea93c7c239d3f5fb774351be2b7c1","url":"./tags/JavaScript/index.html"},{"revision":"0a819826808d0e8646fd056f207c7ebb","url":"./tags/JQuery/index.html"},{"revision":"c6ad8fb818b4a45b5b9f74c2956ecfda","url":"./tags/MetingJS/index.html"},{"revision":"9a1361feef4a502358f7f152e8c55b10","url":"./tags/NexT/index.html"},{"revision":"d2c9030260d9f0978ae8b70b1195c19e","url":"./tags/P2P/index.html"},{"revision":"15aec4e45d35f97b43b06f5632e2137f","url":"./tags/RSA/index.html"},{"revision":"841a9c9a6cf3233468f973bb50edb245","url":"./tags/Vercel/index.html"},{"revision":"f9f1b56a6084b24f3a52350a4c1002ac","url":"./tags/分享/index.html"},{"revision":"149ffc52caefee1c1bcc27a8c9bceeab","url":"./tags/加密/index.html"},{"revision":"8faddfe3e93efe5744bde5f560ec39c8","url":"./tags/加密货币/index.html"},{"revision":"455c58f3e93c6895ad632f23683d56e1","url":"./tags/加载动画/index.html"},{"revision":"c7c02cb4602bb7a98f64064eff913027","url":"./tags/区块链/index.html"},{"revision":"13513fbcec657e6705abc15e14b5b258","url":"./tags/右键菜单/index.html"},{"revision":"35fcc6622b90596593020649be1c973d","url":"./tags/域名/index.html"},{"revision":"d418d02ebed3a02bb96ad6c4a758ba0a","url":"./tags/密码学/index.html"},{"revision":"d5f5e7cd59d6da4ad881e2cdda65475d","url":"./tags/建站/index.html"},{"revision":"c40bb0a5070e09a869c2d5a4179c53d4","url":"./tags/插件/index.html"},{"revision":"19aa7920fd6ca4b913013e89e0b57d66","url":"./tags/服务器/index.html"},{"revision":"43bc2be63eb21f68b4d324be3f56bc33","url":"./tags/网页源码/index.html"},{"revision":"9914b3d0deac6c5b7eb4678cb50c8730","url":"./tags/美化/index.html"},{"revision":"a7f9a627a6915fdaa3d8a5598da3ef21","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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