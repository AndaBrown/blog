const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"fa5e6a9d920313c4e8dfb85e8dfdd3d6","url":"./404.html"},{"revision":"f2f62eb406efb76bd3b06b681dabdb92","url":"./about/index.html"},{"revision":"edb40e153342703068b08704a31cd34a","url":"./archives/2022/06/index.html"},{"revision":"0c0b267bada06bf0f71023cf360285aa","url":"./archives/2022/07/index.html"},{"revision":"4e6e192ea43efc33d333049893c0b949","url":"./archives/2022/08/index.html"},{"revision":"3da86933971ff6dfdc5115b12fa53286","url":"./archives/2022/10/index.html"},{"revision":"1d28b386de55d5d0cd333bff67787002","url":"./archives/2022/11/index.html"},{"revision":"a9aa261e859ede259fc6a9c65142b249","url":"./archives/2022/12/index.html"},{"revision":"dfc8c3113400dcfb8a8c2fad8c5c74c2","url":"./archives/2022/index.html"},{"revision":"788ef57a7b01ad8f34df760160316825","url":"./archives/2022/page/2/index.html"},{"revision":"32a2760ad460ebd9c42f37dfe367e55d","url":"./archives/2023/02/index.html"},{"revision":"196c56b016072873f7fd8f36e491fd4b","url":"./archives/2023/04/index.html"},{"revision":"f789e0264e950ae1ca6136c9ac541538","url":"./archives/2023/index.html"},{"revision":"719a215b8c49cc6bd92e7f9ad5d73409","url":"./archives/2024/04/index.html"},{"revision":"7baad59d0f7292011a0ab4356011d713","url":"./archives/2024/05/index.html"},{"revision":"9e7f1290a4968f01d9d2cdf035b5cd2b","url":"./archives/2024/06/index.html"},{"revision":"2f75e44d2ce506a89cd09aecf9091975","url":"./archives/2024/09/index.html"},{"revision":"44602fb6acb9b041f52f0e765d1dbc7d","url":"./archives/2024/index.html"},{"revision":"abc936478c0b38335ed15ab3925a1e1a","url":"./archives/index.html"},{"revision":"7b5a4cacc6edfbfbc3dcc129838a8e61","url":"./archives/page/2/index.html"},{"revision":"21bd84f313816ed572cdf8d97cfcb041","url":"./archives/page/3/index.html"},{"revision":"fecf1ec1d42709c0036896c6c6a4d075","url":"./categories/AI/index.html"},{"revision":"0ac024fd5f5296ae0e56b9f0fdc448ee","url":"./categories/Gridea/index.html"},{"revision":"ceda4cb81ec3f41f6efe14c34f5751fd","url":"./categories/index.html"},{"revision":"8ce08705966f5859f2af08c9eb0aedf7","url":"./categories/Vercel/index.html"},{"revision":"4067446c25037c5e501b85f2108e9632","url":"./categories/休闲/index.html"},{"revision":"2c0a7f23053f8dc4135ac73837ff8a83","url":"./categories/建站/index.html"},{"revision":"780c9d50312295470dbfcf517c22e20e","url":"./categories/科普/index.html"},{"revision":"52ac24ca5d7fbe70eb7c2c755c9cfaec","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"1b1c8b3b99a0d0923bb7261bdbd2e916","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"df759a635fda8d4542b0571c744bdfa4","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"6a1ce1df02b34f97fd54abcddb8ca14a","url":"./link/index.html"},{"revision":"63f6c2a5f1dd8df061818578b36b1b02","url":"./message/index.html"},{"revision":"e2c53d12f4f4a040e03a0e2e38c84516","url":"./page/2/index.html"},{"revision":"0e65d942ccdb6a64852c8baa418504a1","url":"./page/3/index.html"},{"revision":"24a40c20c608da3ea5eebebfadd65138","url":"./post/193912eb/index.html"},{"revision":"62f6389ce933db4cbdbd4b7963d9bcf2","url":"./post/220b8380/index.html"},{"revision":"0720398b20d8235698abadac01e7f90e","url":"./post/24dc856c/index.html"},{"revision":"fa84193f82ecf411ac4e6218ce7d2469","url":"./post/3082b2c6/index.html"},{"revision":"e2d4098addbcc44e453d1e9e3360f978","url":"./post/3df9585/index.html"},{"revision":"2b2fe561541a63e91168f50fecd5fbb4","url":"./post/4a17b156/index.html"},{"revision":"e40f7384aabcf8335ed5401bdbbdd157","url":"./post/739f0a30/index.html"},{"revision":"26be8a4de678cb82e893487e05dcd9d6","url":"./post/73fccf9a/index.html"},{"revision":"b412ac656653f14b7cf71a10a2a36d8c","url":"./post/7ca5704e/index.html"},{"revision":"8a428451c18155e40191c04443c6631a","url":"./post/7fc77154/index.html"},{"revision":"84728a29980a22cef2ea51f6d6d7c5cc","url":"./post/8097b5e3/index.html"},{"revision":"ce9d1c5e13adea166b49eba3ecb9f53b","url":"./post/8422c4dc/index.html"},{"revision":"cc96a6dc8c2bd32d1a1943209508df05","url":"./post/99c7fa1c/index.html"},{"revision":"0dd9fac5c804ed0bc8b421bce441809a","url":"./post/9c60e209/index.html"},{"revision":"3202e713b422aebb2ffdc50f4cea7486","url":"./post/ae58d2f1/index.html"},{"revision":"5de1a9d46ed995ff34ebd0772520bf01","url":"./post/d4550abf/index.html"},{"revision":"fc6e4ba61dd13892cfec560d7e203198","url":"./post/d50c4d0e/index.html"},{"revision":"4bb6f5d4a9111f7e3ef2a155eb1097c7","url":"./post/db569493/index.html"},{"revision":"eebed0cdd6bfd85bcabe74de3feeb9f2","url":"./post/dd83a796/index.html"},{"revision":"b60a8c9b19d2fe547dbe1ad6bc011e5d","url":"./post/f82f332a/index.html"},{"revision":"83bbbbc5c1e2337497edfdb7366ab7ff","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"2b5a2790721939648dc25731ccb76b1f","url":"./tags/AI/index.html"},{"revision":"1292fb1e5598ed401eb72c8eadd0451d","url":"./tags/Aplayer/index.html"},{"revision":"170e9208e8d7032ba87ef516c1079eb8","url":"./tags/Bing/index.html"},{"revision":"a04c80e9f7b50adb13d4437f3717cef5","url":"./tags/BUG/index.html"},{"revision":"0d02ebec0233d9aca2a312cca97eb1c4","url":"./tags/CDN/index.html"},{"revision":"6ddb5ff32c75b7eb1468300148a16fbf","url":"./tags/CMS/index.html"},{"revision":"c3773d9a54002f2af45b63ca5cdf1e4d","url":"./tags/css/index.html"},{"revision":"150ca2090d7fc49576424f58f7fb9740","url":"./tags/DNS/index.html"},{"revision":"0715a1080d0a1923f37ae37d8bb0f2da","url":"./tags/Flash/index.html"},{"revision":"5bb3c4881a2a1b494a03a6d0925efbd5","url":"./tags/GFW/index.html"},{"revision":"80d685b48caa359de9a4e52fb16ddf2c","url":"./tags/Gridea/index.html"},{"revision":"a3ce63d3b5c152f9ce98c83b089e5c87","url":"./tags/HTML/index.html"},{"revision":"4a6d79cc18a0df329bd2d9fa081053ec","url":"./tags/index.html"},{"revision":"347a1fd84a38d8628d3ff471f2e4d4fc","url":"./tags/JavaScript/index.html"},{"revision":"eaf2c3b4ec8be5c22fc0f576d5876f45","url":"./tags/JQuery/index.html"},{"revision":"5e694d9be108a4434250fdc4f64eb19d","url":"./tags/MetingJS/index.html"},{"revision":"de1b8c5e58a63109f082f600faaa5334","url":"./tags/NexT/index.html"},{"revision":"32e138b8d5450d095050d0abea24b40f","url":"./tags/P2P/index.html"},{"revision":"45282df41d9093153f6887a0898f1f16","url":"./tags/RSA/index.html"},{"revision":"d43daca3f1ced52b1f97fd981e393899","url":"./tags/Vercel/index.html"},{"revision":"8ed6904d62f5933b584d04ef5f377083","url":"./tags/分享/index.html"},{"revision":"64a1f970e8222131af540fb26cce3032","url":"./tags/加密/index.html"},{"revision":"3b10ce6b5f3b1a1d67fcd6a6e259f3e7","url":"./tags/加载动画/index.html"},{"revision":"5afc3784840e83769f7dfb32bd45940e","url":"./tags/右键菜单/index.html"},{"revision":"295ec77b6ea9fbb488715d1f7f49f0be","url":"./tags/域名/index.html"},{"revision":"a025ef72b2165f618db8751eaabe929f","url":"./tags/密码学/index.html"},{"revision":"4cad82fb4cbca4d621f609b269886bd7","url":"./tags/建站/index.html"},{"revision":"db996046905d7fd4b9b7a033561d815e","url":"./tags/插件/index.html"},{"revision":"0a89fdaed4645863ce844a2e69d17468","url":"./tags/服务器/index.html"},{"revision":"27fb8a32154885d710a82c6c7252fc9b","url":"./tags/网页源码/index.html"},{"revision":"cc3fe9521417dc7ce9a1b4498ac2a870","url":"./tags/美化/index.html"},{"revision":"3d2baa29b1d3374656e2c1d69caf8810","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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