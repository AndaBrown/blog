const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"827a726879a3ac6adfcbafea5efa72eb","url":"./404.html"},{"revision":"894b59cc018ff8765f128948c0e8a7ca","url":"./about/index.html"},{"revision":"ca7a50272dca46b0c8b9ee037330adec","url":"./archives/2022/06/index.html"},{"revision":"1dd2afa3a3a379316430b39e7dbcebe5","url":"./archives/2022/07/index.html"},{"revision":"2b3475cfcf37f31c4d484627bedad27f","url":"./archives/2022/08/index.html"},{"revision":"336602490e12b21b964c1659a9ea4bc8","url":"./archives/2022/10/index.html"},{"revision":"57ded6a792c5b2abc0033d7a41298d25","url":"./archives/2022/11/index.html"},{"revision":"5c2e65208a93a61006de551a9a2f3654","url":"./archives/2022/12/index.html"},{"revision":"daffba0d087d3495104e5669b96a8d5e","url":"./archives/2022/index.html"},{"revision":"c53f536912a5440860dd5b78ac7238ea","url":"./archives/2022/page/2/index.html"},{"revision":"3e3882daf1e2bfa133157655ebdd4346","url":"./archives/2023/02/index.html"},{"revision":"0411c69536b9b929fe756f6fac531aa4","url":"./archives/2023/04/index.html"},{"revision":"2ce8f7028faf138cdca2a38b9824021b","url":"./archives/2023/index.html"},{"revision":"f6aaa9d47f0219ca21746b4a29c156ba","url":"./archives/2024/04/index.html"},{"revision":"c5478bcd18f3e1f5e000f7ba80b1ed30","url":"./archives/2024/05/index.html"},{"revision":"f48f6e4454622dd911b0eb63bec49315","url":"./archives/2024/06/index.html"},{"revision":"9b7cc0730f1b8f755c01546c954935b8","url":"./archives/2024/index.html"},{"revision":"db3eb175f317fa4c3e85e06120c46a9d","url":"./archives/index.html"},{"revision":"f1411e789f9ced646e0f858f47b37b43","url":"./archives/page/2/index.html"},{"revision":"d2c5d24e81166949065326698f86a642","url":"./categories/AI/index.html"},{"revision":"950c4337356415b9802c848c11e7615f","url":"./categories/Gridea/index.html"},{"revision":"5d37c0d5a4e8c8d040075f13673ce44e","url":"./categories/index.html"},{"revision":"d7ba624ea3a42716bde8d946488b2d9a","url":"./categories/Vercel/index.html"},{"revision":"2286a628ee75c5cb62c6f19e5c87a1a9","url":"./categories/休闲/index.html"},{"revision":"1db642d880ddc65b8875bba7560d8cba","url":"./categories/建站/index.html"},{"revision":"8f9fc689934401d98af45feb19d0a3a1","url":"./categories/科普/index.html"},{"revision":"51595a3f102b33f438356d4050593717","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"82353a314a1495a8e14e033bb0dba91f","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"e927ce0f52aa7a8faa564ac00240dfdd","url":"./go/index.html"},{"revision":"66acf8a786dcf6963b092da25c7ad3cf","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"c8ccee1a8fdf5d6eabc01f0d93cc1905","url":"./link/index.html"},{"revision":"a387454707640dabd07be31e2556ff9f","url":"./message/index.html"},{"revision":"c5f3dccb46a40a554c37f6183442a475","url":"./page/2/index.html"},{"revision":"312d80953dc7ea3e4d83dbebd190f1d3","url":"./post/193912eb/index.html"},{"revision":"0161f3701e476f1ad7bfd54355a5d045","url":"./post/220b8380/index.html"},{"revision":"6784188f7e9623515baad16e647aa58e","url":"./post/24dc856c/index.html"},{"revision":"d2f7d01e13745bea5aa07ebe1bc293fd","url":"./post/3082b2c6/index.html"},{"revision":"e0723938fb79911d104761e4070af3bc","url":"./post/3df9585/index.html"},{"revision":"777a8bb8207d7ce6a006fae475e0c5eb","url":"./post/4a17b156/index.html"},{"revision":"e6ff737230448ba9e3185b6a9ca7df4a","url":"./post/739f0a30/index.html"},{"revision":"c3c7ee995d96556c664599eb9dc12f7e","url":"./post/73fccf9a/index.html"},{"revision":"136769b0ed999124031af4dfc2dabfec","url":"./post/7ca5704e/index.html"},{"revision":"8b2f3453b7d1b26520334f4925e2f291","url":"./post/7fc77154/index.html"},{"revision":"69ed15c8dcac6faca2f23dae7bfc120b","url":"./post/8097b5e3/index.html"},{"revision":"d5742fe0acd1e2a93c9229e6ff115164","url":"./post/8422c4dc/index.html"},{"revision":"bf6b944ca4c64834da6845a2bd96dfbc","url":"./post/99c7fa1c/index.html"},{"revision":"11eeff7cbf800c3f56475f94e4674640","url":"./post/9c60e209/index.html"},{"revision":"f33351c4ac879b585b128b91681cddaf","url":"./post/ae58d2f1/index.html"},{"revision":"faadd9aa4aae15110544f64e15630423","url":"./post/d4550abf/index.html"},{"revision":"ff7e3c8435399f18a78ca4a1f9d27399","url":"./post/d50c4d0e/index.html"},{"revision":"1e1df18d6e610b276e4ce78a4e708873","url":"./post/db569493/index.html"},{"revision":"82ca6e1aaa6c148488d4e1387de8355a","url":"./post/dd83a796/index.html"},{"revision":"510699cb84e8d2766e757ffb1f05951f","url":"./post/f82f332a/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"0f8000aa2907244316a947229186ab2a","url":"./tags/AI/index.html"},{"revision":"e34f91fe2571b1b729af66cad72e0cf8","url":"./tags/Aplayer/index.html"},{"revision":"cc5e4472902a37e72b73b0c6a3bedad7","url":"./tags/Bing/index.html"},{"revision":"ee3110b40956d01e7a99a5a15ace5ff2","url":"./tags/BUG/index.html"},{"revision":"12265821c0b9955e64ac96b6bbed428d","url":"./tags/CDN/index.html"},{"revision":"327d470a7f40f049e138ce1942aef5b3","url":"./tags/CMS/index.html"},{"revision":"287cb4d8e638506535e824550146df56","url":"./tags/css/index.html"},{"revision":"39ead07cfc50eabbe924988f51f05dbd","url":"./tags/DNS/index.html"},{"revision":"02069e6d1b47d254e9d9dd2099077b90","url":"./tags/Flash/index.html"},{"revision":"aace448ec0643439ba6ec2fda6c458d8","url":"./tags/GFW/index.html"},{"revision":"f7372c409e63ae63e7e48e13b5de6e50","url":"./tags/Gridea/index.html"},{"revision":"65eba352cf992bfeebc9533b9cdd04c4","url":"./tags/HTML/index.html"},{"revision":"31d790c86a171049714ed3112311ee6b","url":"./tags/index.html"},{"revision":"07cc1428f35c6b821ffd809f635584d9","url":"./tags/JavaScript/index.html"},{"revision":"6638ccc456d05d84b9b172b6f92f56f3","url":"./tags/JQuery/index.html"},{"revision":"bcdff0fd010c3a0cfb66cd864463ecce","url":"./tags/MetingJS/index.html"},{"revision":"46378f2fb74f3a07880550d019fcf293","url":"./tags/NexT/index.html"},{"revision":"0d3e801068fd10bd175ed06ff82d56ee","url":"./tags/RSA/index.html"},{"revision":"f515b449daa6b72d76fb3e90cebf921f","url":"./tags/Vercel/index.html"},{"revision":"bb2c2bfdd58124c987fe1008ff204f9f","url":"./tags/分享/index.html"},{"revision":"1cf9ec75a6de99633454937e0aecf64f","url":"./tags/加密/index.html"},{"revision":"293c7f629e5592f27656aef6190538a9","url":"./tags/加载动画/index.html"},{"revision":"2c6b60e512becb9ed4487bba6ec0f0ec","url":"./tags/右键菜单/index.html"},{"revision":"4ef19da60e658ff62ad8905e82d24cee","url":"./tags/域名/index.html"},{"revision":"2281472e164cadba38acf209e8c8e97c","url":"./tags/密码学/index.html"},{"revision":"45f3c99f3c44a59b9edfe60b23aaf6de","url":"./tags/建站/index.html"},{"revision":"1cd82c2ed836ea1de351fd2423ee86a5","url":"./tags/插件/index.html"},{"revision":"6d15adde23c7c29697d588bc4d2786ea","url":"./tags/服务器/index.html"},{"revision":"74b8443e9b02a7490071e9d25e605b21","url":"./tags/网页源码/index.html"},{"revision":"603a63c136a5f6eb5276bd694e5f2a66","url":"./tags/美化/index.html"},{"revision":"7320c92dfd47de1fd61a4168243ed533","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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