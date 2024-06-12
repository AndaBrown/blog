const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"36e7a4a8bed135daa95715103b12b56d","url":"./404.html"},{"revision":"507373f081b68d9546ed43211fdc7670","url":"./about/index.html"},{"revision":"44ab81adeb9d5421eca3112e9ba60832","url":"./archives/2022/06/index.html"},{"revision":"5f1d9c5077a2bf6b0d6f22b610711531","url":"./archives/2022/07/index.html"},{"revision":"f4341399cafcd23050b242c772c75c0e","url":"./archives/2022/08/index.html"},{"revision":"414a997031465c72a6e3aca808b2b681","url":"./archives/2022/10/index.html"},{"revision":"2f5f76bfb4fd9a59e3f01f68acfbd808","url":"./archives/2022/11/index.html"},{"revision":"c61b838e558d98304d99942a13146674","url":"./archives/2022/12/index.html"},{"revision":"5c677f63233b562475b6602ca1893861","url":"./archives/2022/index.html"},{"revision":"9d6418b1f2bd80aa0347c27aab6dcea3","url":"./archives/2022/page/2/index.html"},{"revision":"67d0b57d4281b9bd0dc7bb57ae0af403","url":"./archives/2023/02/index.html"},{"revision":"5d28c77eef358f1ba301cebfc4a39337","url":"./archives/2023/04/index.html"},{"revision":"7115ebbbab5f47b3cf53979b62d6dbe1","url":"./archives/2023/index.html"},{"revision":"5ab847fa65a72cf48ce610acce8af967","url":"./archives/2024/04/index.html"},{"revision":"cecd9b7ae47c9136082addfe26272439","url":"./archives/2024/05/index.html"},{"revision":"ccd6f76c2466cef4736935a9aa263ed5","url":"./archives/2024/index.html"},{"revision":"fe927f70d634426e1a557898ae4f76dc","url":"./archives/index.html"},{"revision":"9f02962a425f0edfc29f689a0dc02d30","url":"./archives/page/2/index.html"},{"revision":"9873b1c9ab9fe18fe62cde60fdbfb651","url":"./categories/AI/index.html"},{"revision":"07a6a2b3f14a78288e0453d09f486626","url":"./categories/Gridea/index.html"},{"revision":"76700df72de8a92e8c14b3780ef202f8","url":"./categories/index.html"},{"revision":"97b42f963a0cc17c2a2c2e951fc21605","url":"./categories/Vercel/index.html"},{"revision":"a2d7d990eb24460c727bc8e232cc506c","url":"./categories/休闲/index.html"},{"revision":"be80ffa712439bc1e8c95136162ef7c8","url":"./categories/建站/index.html"},{"revision":"1b483f2eb2d49aec643e754359b56b2d","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"7fcff9b68dc4b94c6e08fd9b3583ac63","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"392419a380566e73cf5a1aef587d3079","url":"./go/index.html"},{"revision":"bb9fa20fec65283f6ba06fac92dc958f","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"8a17777854678522597c9a899bb8613b","url":"./link/index.html"},{"revision":"1d4759cb1a6200ad6ae1a3e077d3fd77","url":"./message/index.html"},{"revision":"0eca20d6f31892373fc07b17eb642775","url":"./page/2/index.html"},{"revision":"2167d1efd565c47e736de11329a67b90","url":"./post/193912eb/index.html"},{"revision":"f3f46df7fc9dd33dd1d9e21a35eef47c","url":"./post/220b8380/index.html"},{"revision":"596b0fe1e35bea6ae377230ba58550ab","url":"./post/24dc856c/index.html"},{"revision":"a5dc3dbcf8b330067464ca0d79dc5c70","url":"./post/3082b2c6/index.html"},{"revision":"15d6852b84758b4d16020ca2e385a784","url":"./post/3df9585/index.html"},{"revision":"58504a47dcae688585bbed6357b53f9b","url":"./post/4a17b156/index.html"},{"revision":"2f53b76d7926d01ba22029f784bba861","url":"./post/739f0a30/index.html"},{"revision":"5762908678f3f6947af211bf8b780290","url":"./post/73fccf9a/index.html"},{"revision":"2a8296ea099f41679235bbcc38519a24","url":"./post/7ca5704e/index.html"},{"revision":"3bdccfdfd04e00e01f3e04b1a061fa72","url":"./post/7fc77154/index.html"},{"revision":"ad44242a779d5db625b848d70b4b4728","url":"./post/8422c4dc/index.html"},{"revision":"c3933e20f16045052bb698cdcb616adc","url":"./post/99c7fa1c/index.html"},{"revision":"9e81e60e0a01ba826180093d7a0bde78","url":"./post/9c60e209/index.html"},{"revision":"ec5b3da2c50c3a065ca0b1a07330fcb4","url":"./post/ae58d2f1/index.html"},{"revision":"23ee95264546c987dbd76a5846d8e947","url":"./post/d4550abf/index.html"},{"revision":"0d8c11e0537473de99e7558dc9ec97b0","url":"./post/d50c4d0e/index.html"},{"revision":"46e270552f75eddb71a1f992f2d41d2c","url":"./post/db569493/index.html"},{"revision":"02a9c29ae970ccf534a24abd519af71a","url":"./post/dd83a796/index.html"},{"revision":"1b8c73d41e1e8142867a1a80d31a83ff","url":"./post/f82f332a/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"3a7fbde1d056f12d0231b9705b5db0df","url":"./tags/AI/index.html"},{"revision":"a68a95cb463949d9f0f1916e7f787a4d","url":"./tags/Aplayer/index.html"},{"revision":"433fd2bf42cda173defb6441d81773a8","url":"./tags/Bing/index.html"},{"revision":"132d6b30e22118788ed856f12a0f9216","url":"./tags/BUG/index.html"},{"revision":"679dfb22e6b060ff246d7e8136affeec","url":"./tags/CDN/index.html"},{"revision":"5ed39c625c7f45259c297deb8803e6bc","url":"./tags/CMS/index.html"},{"revision":"8070f3d59e7174a9b10621bb72fddb42","url":"./tags/css/index.html"},{"revision":"d8c75431f57b1e001f35ac1530692f79","url":"./tags/DNS/index.html"},{"revision":"3c5f57cf4be126a144c5686f57f2fc75","url":"./tags/Flash/index.html"},{"revision":"5e357a095f0efbdf3bd5a932a556ee1e","url":"./tags/GFW/index.html"},{"revision":"67dd705c8360a384d913b5eff1fe8dbd","url":"./tags/Gridea/index.html"},{"revision":"7960473f8bf329406f0e210d4cd099ad","url":"./tags/HTML/index.html"},{"revision":"ebeb67f87ccbc4ec3c16fb3fe928cf74","url":"./tags/index.html"},{"revision":"b39f0e8a6d3579f0d81ca8df3ee39a8f","url":"./tags/JavaScript/index.html"},{"revision":"79aef97e4288a4ecc144b3dd7583f8f9","url":"./tags/JQuery/index.html"},{"revision":"916f96d0513d1ec5eab016fd38600aca","url":"./tags/MetingJS/index.html"},{"revision":"ecddfada9a0d273d7c53befc45e6daec","url":"./tags/NexT/index.html"},{"revision":"51b3885d88149b1de88c5e0569b71cbb","url":"./tags/Vercel/index.html"},{"revision":"2a22cd50eaca26df5f1575e7a74d4247","url":"./tags/分享/index.html"},{"revision":"fe4dabc0f1069f33d5130c3bb307137c","url":"./tags/加载动画/index.html"},{"revision":"dab077cb3d4465ec7b43d9887474bb40","url":"./tags/右键菜单/index.html"},{"revision":"6a2fe1fe4f8a0c25a7f341fd6dab17a3","url":"./tags/域名/index.html"},{"revision":"5086307495d4aef7920f8ea9db523cc5","url":"./tags/建站/index.html"},{"revision":"54dbab677ad2895ecf3c9a6cd064fbba","url":"./tags/插件/index.html"},{"revision":"6a96facc4bf9d99d314e502196b6adf7","url":"./tags/服务器/index.html"},{"revision":"8c861228a06f9b63d06211fe878df215","url":"./tags/网页源码/index.html"},{"revision":"f2daef298daba0e0477013bd33276817","url":"./tags/美化/index.html"},{"revision":"5cc4017c6db6493e4fd2618d73e720ed","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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