const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"70b2ec5da76de5eb8c39c9716303382f","url":"./404.html"},{"revision":"26de1161c9a141f605df2e817aa911eb","url":"./about/index.html"},{"revision":"d698fff30619529cdcfd1a7493d95953","url":"./archives/2022/06/index.html"},{"revision":"ee0adbabdfac8cb41c37912125dfeea2","url":"./archives/2022/07/index.html"},{"revision":"95c4a9d7059fd7f26314460d4a3a1305","url":"./archives/2022/08/index.html"},{"revision":"a4322859bf31067e7ebc81408b726eeb","url":"./archives/2022/10/index.html"},{"revision":"2d340d527d08cc8f72e1b3a93cb4a4b7","url":"./archives/2022/11/index.html"},{"revision":"cd532b3ec476e585e41eac23d9f2882e","url":"./archives/2022/12/index.html"},{"revision":"0b4548545ca14fdfeeb108e00a09d550","url":"./archives/2022/index.html"},{"revision":"1a0b090807eafef73fa6e3384aeb39f2","url":"./archives/2022/page/2/index.html"},{"revision":"129ebad48965ee6fea718d25736e7d42","url":"./archives/2023/02/index.html"},{"revision":"7502dcdac8b4b21ebebce1737fa85172","url":"./archives/2023/04/index.html"},{"revision":"b61b6cbd609f99d8a8760f80cb83f914","url":"./archives/2023/index.html"},{"revision":"230a9939c75f2541bc067b4aeef1711e","url":"./archives/2024/04/index.html"},{"revision":"bf75293b2b8e500e300e0d2b4db18006","url":"./archives/2024/05/index.html"},{"revision":"861b9fd7b6e29a7eed7f16241f99442c","url":"./archives/2024/06/index.html"},{"revision":"dadfef90d04b0a00571b43d771c1e063","url":"./archives/2024/09/index.html"},{"revision":"8510588db268dd120372d3bce1e1b9f9","url":"./archives/2024/index.html"},{"revision":"b3068efad68252d24e77908cc6e147af","url":"./archives/index.html"},{"revision":"6f0f41c10281a06d50f81cb3d553e6be","url":"./archives/page/2/index.html"},{"revision":"d05efcaeb7ccfba61be0be333689dd37","url":"./archives/page/3/index.html"},{"revision":"2d4887dc8c27df15fdf8b221742f50ac","url":"./categories/AI/index.html"},{"revision":"0d905273386a278a578c5cdb2b780a8d","url":"./categories/Gridea/index.html"},{"revision":"e38c1d423b43dd0e8a0f9ae88e19fac4","url":"./categories/index.html"},{"revision":"2184c6668faec04f9a862b6b11869cab","url":"./categories/Vercel/index.html"},{"revision":"14cc67d242e987362e178b0cd266b5d0","url":"./categories/休闲/index.html"},{"revision":"30d1a6a8a5fea4b2484e6f0e8e567af3","url":"./categories/建站/index.html"},{"revision":"3c097e0615436072f3e36e41ed1a1239","url":"./categories/科普/index.html"},{"revision":"cefd12781fa229dba183304c8af00990","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"74ea3f83e1cd24cdbddc88f7e1530858","url":"./cookies-instructions/index.html"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"7cbd07c67cbe7cf633d6105dd60132a6","url":"./index.html"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"ca29a2e7916a1c7053bedd0899ace7a4","url":"./link/index.html"},{"revision":"4e6ac897224e2f0611ed4a305335b98c","url":"./message/index.html"},{"revision":"b51e97b7abf3749690ada7d5795be713","url":"./page/2/index.html"},{"revision":"5b8d67b0c9020e61059658a6abb6e464","url":"./page/3/index.html"},{"revision":"5381eaa4e73e48e3ef25db3e97ae5a26","url":"./post/193912eb/index.html"},{"revision":"23170ad327c36281654977605459ebd5","url":"./post/220b8380/index.html"},{"revision":"7a1f5e8bd7ad3ba3024b90293d9e3368","url":"./post/24dc856c/index.html"},{"revision":"34e2eb88522dca5b8e532a843f8b30c2","url":"./post/3082b2c6/index.html"},{"revision":"07ee2bff50925b8ae07d4acd7a056de7","url":"./post/3df9585/index.html"},{"revision":"51b57e57bda696bc0d80d5bf601d9584","url":"./post/4a17b156/index.html"},{"revision":"6c9c19d8f4f2d0376d4de1a429d92217","url":"./post/739f0a30/index.html"},{"revision":"4b91a4150412c0d585de3bd6f5de8d01","url":"./post/73fccf9a/index.html"},{"revision":"c88e4d00718d9d0a518d33f22264b35d","url":"./post/7ca5704e/index.html"},{"revision":"9f1ee516dd575dab4739e82a4a639ca1","url":"./post/7fc77154/index.html"},{"revision":"79e22143c7431abdd9d7c304f4151021","url":"./post/8097b5e3/index.html"},{"revision":"5e09fbcd57e4f6d9fd3985c6f1257644","url":"./post/8422c4dc/index.html"},{"revision":"8175bbc89fedd52466801b2219c73240","url":"./post/99c7fa1c/index.html"},{"revision":"5707bb731d076b7cc3a1aec30866feac","url":"./post/9c60e209/index.html"},{"revision":"a31013bee1173ebcc59a396d390e4300","url":"./post/ae58d2f1/index.html"},{"revision":"765d2fbc01ea168f87d75e7eace76805","url":"./post/d4550abf/index.html"},{"revision":"b73d02af24aa5c341086542a055e4355","url":"./post/d50c4d0e/index.html"},{"revision":"55cee205469982e3c88f9d50d59dc62a","url":"./post/db569493/index.html"},{"revision":"a383c550d40ce0a9ce6b914a39ae3824","url":"./post/dd83a796/index.html"},{"revision":"d10a050ad6ca7fa74d1de5288f2e07da","url":"./post/f82f332a/index.html"},{"revision":"573214246947f794204ff1d8db1fe3a3","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"7c113e5125a50b8f21e35f1a821919b8","url":"./tags/AI/index.html"},{"revision":"6eba9cd828da870d022bc65d1b74d03b","url":"./tags/Aplayer/index.html"},{"revision":"bd27978260d3d2211040ef556e8f2998","url":"./tags/Bing/index.html"},{"revision":"cd8bafa1296c5ca91ca4517acb98f176","url":"./tags/BUG/index.html"},{"revision":"94e12591942bc8f0b7cbf0826a613175","url":"./tags/CDN/index.html"},{"revision":"bad2ef393b558a40c896dd06ee8fc18b","url":"./tags/CMS/index.html"},{"revision":"0ad27511222f6753146a31a01339e10d","url":"./tags/css/index.html"},{"revision":"05607bef84df7be4dee8b118130fb207","url":"./tags/DNS/index.html"},{"revision":"71e001a4ea37a7e586f201fa17de623b","url":"./tags/Flash/index.html"},{"revision":"149916f89eb3d9d46c5f8b433e0f15b5","url":"./tags/GFW/index.html"},{"revision":"c513781adb272a4a14b20124db6e7f3f","url":"./tags/Gridea/index.html"},{"revision":"81fdf583189c5373d7a9aa961736bfa0","url":"./tags/HTML/index.html"},{"revision":"feaebbe0386834f6d5b13da93b20679d","url":"./tags/index.html"},{"revision":"8ef89b4c589dbd595a98aeb9e8550b62","url":"./tags/JavaScript/index.html"},{"revision":"16112a3e3c72c455664fc5ea8b3dcdd4","url":"./tags/JQuery/index.html"},{"revision":"ecf8a1a0659741d445fd7cc4facda4fd","url":"./tags/MetingJS/index.html"},{"revision":"2821ed67106812015b500fd45be8740c","url":"./tags/NexT/index.html"},{"revision":"3bcdd5a683c46876a6df8300f43c01c4","url":"./tags/P2P/index.html"},{"revision":"02373a62a53cc8c3d5be46d9806a4061","url":"./tags/RSA/index.html"},{"revision":"39caf7f7401a475430a50e557e5d0d7f","url":"./tags/Vercel/index.html"},{"revision":"8fd88356358d291edf553b296deb4f38","url":"./tags/分享/index.html"},{"revision":"fc88d51d794455582ac9dc46efa17e42","url":"./tags/加密/index.html"},{"revision":"599510a5573f8882bddab74d19dcb9de","url":"./tags/加载动画/index.html"},{"revision":"8fee395687b5ae4b8cb0ef2a58faca82","url":"./tags/右键菜单/index.html"},{"revision":"9fd5cc8e75ef2af6736f1fe3c2024289","url":"./tags/域名/index.html"},{"revision":"24ed1374432e7daa623cf1c130b511fd","url":"./tags/密码学/index.html"},{"revision":"c6fd5151835ce9a21423f6a20e3ffdaa","url":"./tags/建站/index.html"},{"revision":"ac682a15e87d4571aa92a4226bbffeca","url":"./tags/插件/index.html"},{"revision":"f46558e3af7f5d01784d82cb771ab784","url":"./tags/服务器/index.html"},{"revision":"dd777f62c08fca04b6cd3353ef8242e2","url":"./tags/网页源码/index.html"},{"revision":"caf9a761aa1665981f90dae14d958a66","url":"./tags/美化/index.html"},{"revision":"d4dc29d911077d3abf63dba84ff3dcdd","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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