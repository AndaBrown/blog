const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"06b4abc21898348d838fefa6b238dff8","url":"./404.html"},{"revision":"283ebc1482154c4cca7fe179c6f0728d","url":"./about/index.html"},{"revision":"021a5e61afed6c0de4dc8748293c6ae7","url":"./archives/2022/06/index.html"},{"revision":"e0b70209ec10926ae157280228694279","url":"./archives/2022/07/index.html"},{"revision":"bea31f286e39d4c832ce45f907370e62","url":"./archives/2022/08/index.html"},{"revision":"8e6f6e008b1af12e32aeb06bd6659d78","url":"./archives/2022/10/index.html"},{"revision":"0983eacaab88d929323b325bea240f8e","url":"./archives/2022/11/index.html"},{"revision":"7c368b54cdba8871440ad8b1a082aa0d","url":"./archives/2022/12/index.html"},{"revision":"1bcdb98bc1e7bce5e4fcd8eabfcecdb3","url":"./archives/2022/index.html"},{"revision":"b1bd641bd9c0aa64b81453009ff76110","url":"./archives/2022/page/2/index.html"},{"revision":"92ef5dffd18b48234f3a9744ff89bf1d","url":"./archives/2023/02/index.html"},{"revision":"da32beef948145d1d3bbc3ffee0ff473","url":"./archives/2023/04/index.html"},{"revision":"d72689dd2977964f06567f9965c73a9b","url":"./archives/2023/index.html"},{"revision":"8f284cd7ef3f4031273eed33e078321b","url":"./archives/2024/04/index.html"},{"revision":"79c932a244b5d82a0fec14b6ccf46240","url":"./archives/2024/05/index.html"},{"revision":"0ddbfaa28c6c583923265ce5b982a2e8","url":"./archives/2024/06/index.html"},{"revision":"e8fd0376a5b687b363a97a331798e855","url":"./archives/2024/09/index.html"},{"revision":"ef5a9edc1316da9419b81a7e5b5a225e","url":"./archives/2024/index.html"},{"revision":"5f61372467a2442c85cac4883ac9a964","url":"./archives/index.html"},{"revision":"f28f7c5665f1d046028685a5bbc56c64","url":"./archives/page/2/index.html"},{"revision":"90dfc03a90adea908dbdce71c2b33968","url":"./archives/page/3/index.html"},{"revision":"ca19d52e382f30ee3b258881513e0cf5","url":"./categories/AI/index.html"},{"revision":"f0bf4253658836e63e13d0233c702b35","url":"./categories/Gridea/index.html"},{"revision":"84a1f0954d9a9af9ab4566bb0938c48f","url":"./categories/index.html"},{"revision":"a5a803a71ef7c374cb967bfc3f0bb22f","url":"./categories/Vercel/index.html"},{"revision":"f21646a8d67e1c25f4aa906d20195057","url":"./categories/休闲/index.html"},{"revision":"b227ed432faaa1d6aee6e9fbcc7ad0cb","url":"./categories/建站/index.html"},{"revision":"e25e90b36dc36a5d4cd19ad49a6452ce","url":"./categories/科普/index.html"},{"revision":"2850a392d1c699efeb5fa00548f48819","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"d6d51f43742a6ee331da9c2dd3ce26ca","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"726e973550de916cdf364d2e727a07f7","url":"./go/index.html"},{"revision":"ba2911338145c20757b97245a81f1256","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"24d4c94bedc15c9ad01b55fbce847e97","url":"./link/index.html"},{"revision":"a9c700494cb313e343558e697743b97b","url":"./message/index.html"},{"revision":"d802fa8c8f8f98de6a1892c7301ee01d","url":"./page/2/index.html"},{"revision":"37c695e1678bde974f71e94e138c8f09","url":"./page/3/index.html"},{"revision":"33fa994fc113f3a275d2b729bc1429cf","url":"./post/193912eb/index.html"},{"revision":"a81e29c7e51221b4c34cbec3189ef3c9","url":"./post/220b8380/index.html"},{"revision":"c0f38b219cdd712cf028332457bce7ac","url":"./post/24dc856c/index.html"},{"revision":"a42d26684885c1973dd25786a1d86cf8","url":"./post/3082b2c6/index.html"},{"revision":"c542234377f43444a6b2fe0d180d18ee","url":"./post/3df9585/index.html"},{"revision":"e02a5364889604928427d23c805eb2b5","url":"./post/4a17b156/index.html"},{"revision":"415efcf3c4ebcdca557f3842d16a1598","url":"./post/739f0a30/index.html"},{"revision":"cba83b585b0edd8ee8751a6cf5d6ba13","url":"./post/73fccf9a/index.html"},{"revision":"67f15ee61a93f6889fe0bbfda84fa77d","url":"./post/7ca5704e/index.html"},{"revision":"bab49e20cd201f4baa38535711155386","url":"./post/7fc77154/index.html"},{"revision":"8a62fe149ef84e9dcd31546292f84612","url":"./post/8097b5e3/index.html"},{"revision":"be9f422288adc51270dfc68e2ba7b919","url":"./post/8422c4dc/index.html"},{"revision":"844334a6dc4a82098fb976f78bdc0da9","url":"./post/99c7fa1c/index.html"},{"revision":"fb447e50774e9a8abad71be498ce4c96","url":"./post/9c60e209/index.html"},{"revision":"d44241b3dd3efbd73fa75e8fb42ac8b0","url":"./post/ae58d2f1/index.html"},{"revision":"ec5e2fbcd3dbe998c48c01b0cd808bdd","url":"./post/d4550abf/index.html"},{"revision":"1827c1df4251813f6d93f43164d31ffc","url":"./post/d50c4d0e/index.html"},{"revision":"69fd4c1bfc4d6ba66665213b0792a70a","url":"./post/db569493/index.html"},{"revision":"6c8d34e228af55876ebfbe4459942d03","url":"./post/dd83a796/index.html"},{"revision":"683c2cedae3e4e005771b3b7a1591e0b","url":"./post/f82f332a/index.html"},{"revision":"9a7ae7e2d0c7353daca5b260f7961ccd","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"23c4c7affd586dce377fd80fce451952","url":"./tags/AI/index.html"},{"revision":"677b3e3e8887e57a2b13239aaa9da6ce","url":"./tags/Aplayer/index.html"},{"revision":"e4b57c98435fdb6eec55922d2a86e13b","url":"./tags/Bing/index.html"},{"revision":"49d09e0a4336de74dcf6597896a0415c","url":"./tags/BUG/index.html"},{"revision":"9b930070053d6835a4df8ad750032277","url":"./tags/CDN/index.html"},{"revision":"45d1f64e63d1bc2c404104707b16cd77","url":"./tags/CMS/index.html"},{"revision":"bd71d971406bda869b107c7a7fffc041","url":"./tags/css/index.html"},{"revision":"de5df1b9b33651394be78515b33724c9","url":"./tags/DNS/index.html"},{"revision":"adf3aeb71c4930476108ffef64595d00","url":"./tags/Flash/index.html"},{"revision":"80eb3a03192750cfd6119f829997b37b","url":"./tags/GFW/index.html"},{"revision":"bdd7331805d06d5d6555e5d738e3aa1d","url":"./tags/Gridea/index.html"},{"revision":"42c5fe39828d49c287ef20a77639da6a","url":"./tags/HTML/index.html"},{"revision":"e907a96a0af3f9dd304f4c5a6bacd90f","url":"./tags/index.html"},{"revision":"e787968fc96f88de9e14676e3064d103","url":"./tags/JavaScript/index.html"},{"revision":"6ee075669a5b6eea48957b73b0fcf1e7","url":"./tags/JQuery/index.html"},{"revision":"e465ff9522db02781fe37290c79be445","url":"./tags/MetingJS/index.html"},{"revision":"1ec50863c6cb6370131c882f8a7e6cab","url":"./tags/NexT/index.html"},{"revision":"ade9757bffa4cd9c10464eef35295065","url":"./tags/P2P/index.html"},{"revision":"bed37dd55fd844694e39bfa1a136e70e","url":"./tags/RSA/index.html"},{"revision":"f472a1787f125ff57f2d394bc9f8bdff","url":"./tags/Vercel/index.html"},{"revision":"c90828b90c4dc98a34d6ce753cb61ec1","url":"./tags/分享/index.html"},{"revision":"d57cadfc2d78d5b183ff59b6e19ecdbd","url":"./tags/加密/index.html"},{"revision":"4ca7528a3df2200362e3d81ff4263e53","url":"./tags/加载动画/index.html"},{"revision":"75a8cfa1a0bf725947f21725b6000444","url":"./tags/右键菜单/index.html"},{"revision":"bb70d6fd1f1fac684442082b2d26fb88","url":"./tags/域名/index.html"},{"revision":"da83b47ec352bb246b567d336df4fbbd","url":"./tags/密码学/index.html"},{"revision":"730da812aef8d0e1d734b4d2c36a3f66","url":"./tags/建站/index.html"},{"revision":"e3d75c9353eb3035b30646f3a5d552a4","url":"./tags/插件/index.html"},{"revision":"bf6a62ad7c9f293ffdbcdcd61e5361b3","url":"./tags/服务器/index.html"},{"revision":"bb35653e5dd9e536b0b94237c70fd14e","url":"./tags/网页源码/index.html"},{"revision":"f669d2fef7ef15b7c0912b9cb8a01ad8","url":"./tags/美化/index.html"},{"revision":"6f81a60ede55b324add9fb3a98455d2d","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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