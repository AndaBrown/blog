const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"},{"revision":"a69894f677069932405909f0f54cf1ec","url":"./index.html"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"8497308aef6dc66a6a384375b494d1a0","url":"./404.html"},{"revision":"34a7ec5b05e6638422715c1501b65162","url":"./talks/index.html"},{"revision":"08390ca5f5550d5b660fa7f0d835c01e","url":"./tags/index.html"},{"revision":"af50bb16da450c112def96746e505cfa","url":"./tags/美化/index.html"},{"revision":"8d28a61de870d23e1145b33e8f9656cb","url":"./tags/网页源码/index.html"},{"revision":"28b43d7c21ed76ead4536094092e8e1b","url":"./tags/服务器/index.html"},{"revision":"c35283acfddf50ab14f1f3e89e4a24aa","url":"./tags/插件/index.html"},{"revision":"1fa6858e630a9a71151aa3717adb4dbf","url":"./tags/建站/index.html"},{"revision":"26419fe2440463d7ca6659e66dcc51d5","url":"./tags/密码学/index.html"},{"revision":"d04671fcc5c1c5d579d5d8b6c2fd03f3","url":"./tags/域名/index.html"},{"revision":"654b01e6c96e75083cdf679363530e9c","url":"./tags/右键菜单/index.html"},{"revision":"f2d019143540ec243f6b25c628951f77","url":"./tags/区块链/index.html"},{"revision":"2d38a18f8559bee3462eb6832bd45326","url":"./tags/加载动画/index.html"},{"revision":"7b730a647fa8827b3017f1e4a2309507","url":"./tags/加密货币/index.html"},{"revision":"9805c3452653bc6bde5ac9c1b13a71fc","url":"./tags/加密/index.html"},{"revision":"6bfd26ce1d6175530a5aad8ba52cff2f","url":"./tags/分享/index.html"},{"revision":"d965bdd3bd209245ca0aa94fd8b742dd","url":"./tags/css/index.html"},{"revision":"194bad029b27821fa97f40ce73d546f3","url":"./tags/Vercel/index.html"},{"revision":"03753a15410228d10a9b7ba544c392bb","url":"./tags/RSA/index.html"},{"revision":"6c33981bd60af8b99b801d30ce6a6cfa","url":"./tags/P2P/index.html"},{"revision":"c23ad77786804304890940e6bd1d2471","url":"./tags/NexT/index.html"},{"revision":"e14d691a1daa9abc8a6331ddd2b60779","url":"./tags/MetingJS/index.html"},{"revision":"ed112d9186ee2cc414634ced8343bc8a","url":"./tags/JavaScript/index.html"},{"revision":"c935ce507ec96545884b1ed7d2a9dff1","url":"./tags/JQuery/index.html"},{"revision":"f5e41a77fbd8213e889b91730f2dde1b","url":"./tags/HTML/index.html"},{"revision":"e0f08dcefad5c6e00d0102a7e3bd1aaf","url":"./tags/Gridea/index.html"},{"revision":"9cea0348b9a476ac602b994bb237867e","url":"./tags/GFW/index.html"},{"revision":"2a24808595d3506e2f064cfe4273abf6","url":"./tags/Flash/index.html"},{"revision":"5260a327648d3ece682ad657757cbf6f","url":"./tags/DNS/index.html"},{"revision":"bd610e33545fe16dd3cfddf5faf634d3","url":"./tags/CMS/index.html"},{"revision":"1fd0a12a287dc7efd1e23a7e9ada2a5c","url":"./tags/CDN/index.html"},{"revision":"8f6de1ee30a2cd9ae25bc9167eca5149","url":"./tags/Bing/index.html"},{"revision":"0966ba623ae0ebce1432cc9a16e12d4d","url":"./tags/BUG/index.html"},{"revision":"6f7498c8262b37c62a1d4ee38f3f7054","url":"./tags/Aplayer/index.html"},{"revision":"927f05b81b534ac98d3e56b79d89b0c3","url":"./tags/AI/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"0e6a2c1908eac0899424f064d51fa03b","url":"./post/fa97bd48/index.html"},{"revision":"ff65a81124e8a5a2dfa79fc93b0fdeac","url":"./post/f82f332a/index.html"},{"revision":"a0fede8c90a00b38737fdda3c50abcf2","url":"./post/dd83a796/index.html"},{"revision":"b72d9825757928d77c66a7ff94c7689c","url":"./post/db569493/index.html"},{"revision":"5f90f5a44ac49afd25a5b4417ab97fb2","url":"./post/d50c4d0e/index.html"},{"revision":"5df823319c4ee6ded3168c43c0e9224a","url":"./post/d4550abf/index.html"},{"revision":"725b08064867fa40f15e09439b444f8c","url":"./post/b9a3407d/index.html"},{"revision":"5c3df68bea2ba85e5183872bdbb8ff94","url":"./post/ae58d2f1/index.html"},{"revision":"01f2063cc113d89e1d69120cefb8fda6","url":"./post/9c60e209/index.html"},{"revision":"4f3c770be0dc9fc27fb4d45a912fca4e","url":"./post/99c7fa1c/index.html"},{"revision":"abe9b83d3de894f6ebc21bed610b4de6","url":"./post/8422c4dc/index.html"},{"revision":"5bab0d1b3be3ddd1a53b35c00ef5df6c","url":"./post/8097b5e3/index.html"},{"revision":"899533b07c713bfa681814c168845553","url":"./post/7fc77154/index.html"},{"revision":"e1cac76b1e4672eaaa5ea5784f47213a","url":"./post/7ca5704e/index.html"},{"revision":"9b0a5f221260ede14955e2e7dec7db48","url":"./post/73fccf9a/index.html"},{"revision":"72f021ee5a28ced5253e914f8ec17ebc","url":"./post/739f0a30/index.html"},{"revision":"c3d45bc69b03b45139a34d8b9ddecea5","url":"./post/4a17b156/index.html"},{"revision":"e1c55ca45264b2e327219f3d02d36257","url":"./post/48bc1675/index.html"},{"revision":"5789a6db734839d9b86b44296986a803","url":"./post/454446b9/index.html"},{"revision":"31092d9a23fb4acaea3a0ecd785701db","url":"./post/3df9585/index.html"},{"revision":"c8ca675914f489e782d79a499596c732","url":"./post/3082b2c6/index.html"},{"revision":"d5d811cf383fd5d73963a5bbd13e930d","url":"./post/24dc856c/index.html"},{"revision":"63a6894d9763a1672e502d4903b2672d","url":"./post/220b8380/index.html"},{"revision":"88b659942a94e94f08f365c7b9df217c","url":"./post/193912eb/index.html"},{"revision":"99a1f466706916ec159bd6d40b0f8d77","url":"./page/3/index.html"},{"revision":"ae8e67622be058cf5821f084a03f6522","url":"./page/2/index.html"},{"revision":"55daf8ac979a993c3c8673d0452044e7","url":"./message/index.html"},{"revision":"ea820983bb28fd24e9a7c4bd4308b448","url":"./link/index.html"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"cac223f9f486540cb4547241eef197b0","url":"./cookies-instructions/index.html"},{"revision":"24cdf3f43760e7facc74315b16300164","url":"./categories/index.html"},{"revision":"1b60441c7bde6b06eb243013ffa4bf59","url":"./categories/记录/index.html"},{"revision":"9fdb7916f5b53b6319ab6ceeb0e57e82","url":"./categories/网页源码/index.html"},{"revision":"93de38f1e491cac06eb141adcd407ae3","url":"./categories/科普/index.html"},{"revision":"0b2b776b1fda930641b87131ead84bea","url":"./categories/建站/index.html"},{"revision":"ec2f0d5e556f9cbfcd412171e1122cc2","url":"./categories/休闲/index.html"},{"revision":"badebe0fc7acab16bb945744b8af053f","url":"./categories/Vercel/index.html"},{"revision":"fc7859e53c843279260a495aaeee938c","url":"./categories/Gridea/index.html"},{"revision":"dad4aef9c6d41ee603aa4fad85141b86","url":"./categories/AI/index.html"},{"revision":"534091c964ffce7d9d64fe47fd8239a5","url":"./archives/index.html"},{"revision":"83542664c4c00a994bae8a310dc66684","url":"./archives/page/3/index.html"},{"revision":"2175ff12a6d83bea06dd3c2a38566de7","url":"./archives/page/2/index.html"},{"revision":"683fd05b5c28a6bdec08bcd5b25ba907","url":"./archives/2026/index.html"},{"revision":"8b83559c267f6ed77fcf23b28966d09e","url":"./archives/2026/04/index.html"},{"revision":"6439faeec6a0f29051ad582cd580b6e7","url":"./archives/2025/index.html"},{"revision":"7a59ae3bb2000b6efcdab5c8d61a1eea","url":"./archives/2025/10/index.html"},{"revision":"d457e30e5c9beaab65f0c091cbcc580a","url":"./archives/2025/09/index.html"},{"revision":"547d5bf18a2890bf9a22c7aef60977d1","url":"./archives/2024/index.html"},{"revision":"d3beabda6ad84fe01f8b55afceb1d4ac","url":"./archives/2024/09/index.html"},{"revision":"3a139436e6411ddab5240a18911d8122","url":"./archives/2024/06/index.html"},{"revision":"a60389d5c35ba12362b6aa594a3733fc","url":"./archives/2024/05/index.html"},{"revision":"de62fdec44ea305d73192f2bfa98bf4b","url":"./archives/2024/04/index.html"},{"revision":"2b9c69e9aa31e1ce138d02a93ddb2fc4","url":"./archives/2023/index.html"},{"revision":"a853fce3adb6db95540d7de08bb9e6b6","url":"./archives/2023/04/index.html"},{"revision":"ba30b5cc034f02ba94bf15b10faee702","url":"./archives/2023/02/index.html"},{"revision":"75d8d90ef692adbe5ddd93638ee1d00d","url":"./archives/2022/index.html"},{"revision":"78f679e394102d4ef8c07b6b120bca10","url":"./archives/2022/page/2/index.html"},{"revision":"173be540d855cedc4a09d34636cd63e9","url":"./archives/2022/12/index.html"},{"revision":"3d1f833b97870bcd2730ff02e1e7eb9c","url":"./archives/2022/11/index.html"},{"revision":"3d49d9badd94582c6728c1547febf7a3","url":"./archives/2022/10/index.html"},{"revision":"a8b44527ad45c4e23f1aab1015144164","url":"./archives/2022/08/index.html"},{"revision":"bf812e305c2fae42b01b9dc37c80e365","url":"./archives/2022/07/index.html"},{"revision":"8cc9871cd322bcbd7057bf9427a5771c","url":"./archives/2022/06/index.html"},{"revision":"ed25a7bb011239839860b454fe9af272","url":"./about/index.html"}]);
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