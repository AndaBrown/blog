const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"950da32174d687d1b068381eb74a9f44","url":"./404.html"},{"revision":"1d7592d32dd157c3efa605e6fb581f40","url":"./about/index.html"},{"revision":"13ff6e8901280d709023f2606bcf4a8e","url":"./archives/2022/06/index.html"},{"revision":"dc2d9fd55b447f41f03b1806aa4af0ed","url":"./archives/2022/07/index.html"},{"revision":"7f095921b703c41aa0274db95197d3de","url":"./archives/2022/08/index.html"},{"revision":"fe25ec1f5996a1814bf6e6028dfab445","url":"./archives/2022/10/index.html"},{"revision":"0d750985201015d795dd5d8fa9286723","url":"./archives/2022/11/index.html"},{"revision":"499081dddeb0cbf4493e55ca477eb817","url":"./archives/2022/12/index.html"},{"revision":"9832ea88bbe35cc847a3ab909c90dddf","url":"./archives/2022/index.html"},{"revision":"c7226e019aeb827cef39562d1980ef53","url":"./archives/2022/page/2/index.html"},{"revision":"e9bcbce58b267c475b4d8fb08fa64378","url":"./archives/2023/02/index.html"},{"revision":"7733ac2b51866fadd9c80c38f4e0c61c","url":"./archives/2023/04/index.html"},{"revision":"92206fbfa79e2a2a532a1b39d4a4bd68","url":"./archives/2023/index.html"},{"revision":"82d986ca160041944ee3538fbca38996","url":"./archives/2024/04/index.html"},{"revision":"859a3190b271b436419c406093c7f2ff","url":"./archives/2024/05/index.html"},{"revision":"aa185e702c47200c4bcfc050eaca9fc3","url":"./archives/2024/06/index.html"},{"revision":"9327068edc149ee4bafbd351c55ea23c","url":"./archives/2024/index.html"},{"revision":"12b5f233574078881408a29225580896","url":"./archives/index.html"},{"revision":"a3d800db742eb59683db32b6aee3de54","url":"./archives/page/2/index.html"},{"revision":"54fbad3243e0f6d98422e70641d19273","url":"./categories/AI/index.html"},{"revision":"d321847fd947848cfc3054f8ea66c8a5","url":"./categories/Gridea/index.html"},{"revision":"ba5049565aa1d8d6b4be9eadfd1b08b0","url":"./categories/index.html"},{"revision":"a04fb7d1946c248622593274ebd22346","url":"./categories/Vercel/index.html"},{"revision":"fea0dcb9c97aedf912eb1d6b0aa9b2d6","url":"./categories/休闲/index.html"},{"revision":"00cd2ad158c2a0a333d7e9d5f0b3f3bf","url":"./categories/建站/index.html"},{"revision":"09fbb0b410edc1e78a92e7731786f742","url":"./categories/科普/index.html"},{"revision":"4ff5e110889ae4e6b29a4ab16c9a9982","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"93f90b4b4f8574fe61c9edf7c36b61dd","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"392419a380566e73cf5a1aef587d3079","url":"./go/index.html"},{"revision":"a1cc755739a1a7eb82b42fe04e79d881","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"e86aaff2e6041c425bdf971b3bb4bb9f","url":"./link/index.html"},{"revision":"321e0c67fdefd12a53349666df0ae383","url":"./message/index.html"},{"revision":"980397e3e6374d48a7718af75d1c165e","url":"./page/2/index.html"},{"revision":"a056707f00ba89eaad34ecb9875f8426","url":"./post/193912eb/index.html"},{"revision":"9ff91fe0295eb44ea38a0af30dab52f5","url":"./post/220b8380/index.html"},{"revision":"8633e5daebe7e6c7d84a3eb6171324a1","url":"./post/24dc856c/index.html"},{"revision":"0714e0f0682f6840fd659a081fe93b8e","url":"./post/3082b2c6/index.html"},{"revision":"cb7a01d65c7d1670f1a8ae5686ee25da","url":"./post/3df9585/index.html"},{"revision":"14dd25aa0a01fb47f51b6d6fcbc68144","url":"./post/4a17b156/index.html"},{"revision":"76610b7fe9b6028a1681025a0b9db4f4","url":"./post/59d9dfef/index.html"},{"revision":"06844131038bfab96ed4cc245f87c1aa","url":"./post/739f0a30/index.html"},{"revision":"1bed6a2bfc64adfd2c9671b82f788779","url":"./post/73fccf9a/index.html"},{"revision":"fcbd841c2a663c45669f6e28f9bc0314","url":"./post/7ca5704e/index.html"},{"revision":"a81adef053da9a87f293c867ac492e29","url":"./post/7fc77154/index.html"},{"revision":"78888c11d028f521d87e684dca802e76","url":"./post/8422c4dc/index.html"},{"revision":"7e01f7fd1f564f27a88c1ac135c0e43d","url":"./post/99c7fa1c/index.html"},{"revision":"57315e0bd452317f5c4fa4fd4feb4323","url":"./post/9c60e209/index.html"},{"revision":"a3152925b837c869928591cbdf07a4e7","url":"./post/ae58d2f1/index.html"},{"revision":"32df50022f3cee62da8bc00a8388264e","url":"./post/d4550abf/index.html"},{"revision":"a57c1e3e038608161ab5bc2055a3fa35","url":"./post/d50c4d0e/index.html"},{"revision":"dcbd83ca5ac750433d443dab55bf843b","url":"./post/db569493/index.html"},{"revision":"c762b440b893cde02d1a2319079b3b41","url":"./post/dd83a796/index.html"},{"revision":"84761cab314e818abecff48a43c76288","url":"./post/f82f332a/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"cb0fbaf86836f7df0d05dc0fb8b046ff","url":"./tags/AI/index.html"},{"revision":"04f2832cb93e67a4ca92b9c77d0a98a6","url":"./tags/Aplayer/index.html"},{"revision":"754052f594a64780c42ab741a56725a8","url":"./tags/Bing/index.html"},{"revision":"dd231d2b53a978cbca2d41ade4885094","url":"./tags/BUG/index.html"},{"revision":"49eb7a46b4c15bde410f1e94d6a96a7f","url":"./tags/CDN/index.html"},{"revision":"c6e876dcf81f56a0a842bde241f542c9","url":"./tags/CMS/index.html"},{"revision":"c8f1b7fd59e4b38f65a61e3714f444e5","url":"./tags/css/index.html"},{"revision":"b35332ad6b8dcc29961f37da322c4ec6","url":"./tags/DNS/index.html"},{"revision":"634e30161682efab1a56c204aea6d8db","url":"./tags/Flash/index.html"},{"revision":"8f21db8419a6da4f55f29ee5b276c138","url":"./tags/GFW/index.html"},{"revision":"fb99db9487a69de9253c427f82190ca6","url":"./tags/Gridea/index.html"},{"revision":"98e8822ed5251dbd18ef9a8b7505f3af","url":"./tags/HTML/index.html"},{"revision":"07e37101aee1dcc6c7dad390a5b77acd","url":"./tags/index.html"},{"revision":"60984242c64c4d91a664398d5483b875","url":"./tags/JavaScript/index.html"},{"revision":"9f618ce5fe99bcc41b7ce6283dfcedd1","url":"./tags/JQuery/index.html"},{"revision":"8d57587c1211fb82d368330abe705a56","url":"./tags/MetingJS/index.html"},{"revision":"bf1dec5a890fd56967e196a67f6dd396","url":"./tags/NexT/index.html"},{"revision":"3a70b1a3e722ae2c824f38677e82f062","url":"./tags/RSA/index.html"},{"revision":"323df0fcec1cf42cfcf4027f70ae992d","url":"./tags/Vercel/index.html"},{"revision":"f8c7d37361e5d77193bb7d7df8e6a3df","url":"./tags/分享/index.html"},{"revision":"e7ee5011e693f58bc8e20fe3b1d4d4e2","url":"./tags/加密/index.html"},{"revision":"34a795353fc3a1f29fac0a69b06791a7","url":"./tags/加载动画/index.html"},{"revision":"25720213f45b38f71b0dceefa84c9941","url":"./tags/右键菜单/index.html"},{"revision":"75d452bb49af866e6d3781f97e212473","url":"./tags/域名/index.html"},{"revision":"6eca879703adb6b77c7765b032446011","url":"./tags/密码学/index.html"},{"revision":"4676743b6a889d720c7eb1ef956843e4","url":"./tags/建站/index.html"},{"revision":"7104bd4119dd4357682a025d622c769b","url":"./tags/插件/index.html"},{"revision":"959c861378c9db436c09c2d06bf30661","url":"./tags/服务器/index.html"},{"revision":"7238c6e8d7b15a403bcb3cdffc716ada","url":"./tags/网页源码/index.html"},{"revision":"218ca431e7a11a8e9f44fff3a4d5f740","url":"./tags/美化/index.html"},{"revision":"f3a10768dd14f2f69abc9051afef786c","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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