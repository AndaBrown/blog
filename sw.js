const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"e164380ce211c16c1485401689f7c193","url":"./404.html"},{"revision":"86508b45240806cd553b35d5152328b3","url":"./about/index.html"},{"revision":"c916fb7b3dfd9de015c9ce44cb231d4d","url":"./archives/2022/06/index.html"},{"revision":"fea1ebf0c70ef55d35e2839eb8e44948","url":"./archives/2022/07/index.html"},{"revision":"e39b1a1a7245768a935ec27c7236f8e8","url":"./archives/2022/08/index.html"},{"revision":"330f2a25e6dfc17713c8df447c39c446","url":"./archives/2022/10/index.html"},{"revision":"93341c0e4d0125bdb489dca33af624c2","url":"./archives/2022/11/index.html"},{"revision":"70f723fe83c68e3d61617d5af4555bcd","url":"./archives/2022/12/index.html"},{"revision":"d15c12c284344ef8558cd2f7d315da94","url":"./archives/2022/index.html"},{"revision":"381b9b685805157537881ee1ff1d3260","url":"./archives/2022/page/2/index.html"},{"revision":"cb939cb754b770c6c97b5044040734b4","url":"./archives/2023/02/index.html"},{"revision":"84636d497460a5fe5e255191661290a5","url":"./archives/2023/04/index.html"},{"revision":"d74ef5743ff32fdf9c8045972dce4608","url":"./archives/2023/index.html"},{"revision":"fa0b6a28bef3e5cbbcb2c73b8867bf13","url":"./archives/2024/04/index.html"},{"revision":"8419e5121afaed887d7c9c02238a7efc","url":"./archives/2024/05/index.html"},{"revision":"f0f3148c3da9df6438e1db9657cc0bb6","url":"./archives/2024/06/index.html"},{"revision":"d25a36f89d9084e3a0f83feecf86960d","url":"./archives/2024/09/index.html"},{"revision":"64111a9219f565bac1e9de93d23935dc","url":"./archives/2024/index.html"},{"revision":"5bbd30c05044a0c7bf831a7980597baa","url":"./archives/index.html"},{"revision":"871a63418bda2a7789822381b44d760f","url":"./archives/page/2/index.html"},{"revision":"084780a90aee6e78faef482240913298","url":"./archives/page/3/index.html"},{"revision":"e187d1494aed184b2870132eb7fead5f","url":"./categories/AI/index.html"},{"revision":"3915d11f8c20b3f5561c7c821cc63e71","url":"./categories/Gridea/index.html"},{"revision":"928ce62f1e847b3a6803d42adede5ca6","url":"./categories/index.html"},{"revision":"3c9173e93831cb6ed45f2ff87693fc19","url":"./categories/Vercel/index.html"},{"revision":"6d423c4dcbd35bc90c23543045a88577","url":"./categories/休闲/index.html"},{"revision":"e3086330c9285fea0f35ebb36f4cc8ce","url":"./categories/建站/index.html"},{"revision":"c7f7b0f31ec2063ec4741e9bcafcaa53","url":"./categories/科普/index.html"},{"revision":"6f52d460bb50b944553f57ce76f0eac3","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"92aacefdafe44280cb0036a092d88eba","url":"./cookies-instructions/index.html"},{"revision":"2bb42d697693151abfcf839c600b4121","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"726e973550de916cdf364d2e727a07f7","url":"./go/index.html"},{"revision":"5140ea8c9d458e182f9517772f7f068f","url":"./index.html"},{"revision":"960297fafacb19dff1246d71f6dfcf6f","url":"./js/main.js"},{"revision":"4491ac1d470a1693a502a9d09034aa21","url":"./js/search/algolia.js"},{"revision":"9da6b76672a143c8c8449770a8d259f3","url":"./js/search/local-search.js"},{"revision":"fb4da68124bbafbd2d3da537c80e27ce","url":"./js/tw_cn.js"},{"revision":"420a15cf446b5670244a9ea05b2bccf0","url":"./js/utils.js"},{"revision":"1392a4780012974055f57de999c7cb99","url":"./link/index.html"},{"revision":"0b036cd772a7e6424632ce417ce91cb8","url":"./message/index.html"},{"revision":"a679c19a7d22c75e81e7014a134c35ba","url":"./page/2/index.html"},{"revision":"cac06dc0aedc33b9675a3d1dd5894ebc","url":"./page/3/index.html"},{"revision":"60dee35f409bcb76c6e6da593ec3c7dc","url":"./post/193912eb/index.html"},{"revision":"6cc803da00cfe56fee1c58f8715e6920","url":"./post/220b8380/index.html"},{"revision":"43a29c05f8993f73ff86813ece81e5ec","url":"./post/24dc856c/index.html"},{"revision":"cc7e74066978c58396b5cabf2c3d44ee","url":"./post/3082b2c6/index.html"},{"revision":"b145c99f947231458144ae3e2dac9cca","url":"./post/3df9585/index.html"},{"revision":"938069146375ea7b5f7ee8947a3671db","url":"./post/4a17b156/index.html"},{"revision":"1f3c7116b10d543382b7e387c64bf2a5","url":"./post/739f0a30/index.html"},{"revision":"9a7d51ebf199d3cddd9bdaa9bbea5cae","url":"./post/73fccf9a/index.html"},{"revision":"ed6180567d65fd66b5e446f38ebb094e","url":"./post/7ca5704e/index.html"},{"revision":"7b93147d341eb6d54a75da252ec3c4ea","url":"./post/7fc77154/index.html"},{"revision":"1ff7c63712e75410593888ad02576952","url":"./post/8097b5e3/index.html"},{"revision":"9d1e3acd6169e35bcadcf220ddd8418a","url":"./post/8422c4dc/index.html"},{"revision":"8834a455ea556e311ab3e70918d49480","url":"./post/99c7fa1c/index.html"},{"revision":"995ae8169756e875378d32468f02afcd","url":"./post/9c60e209/index.html"},{"revision":"f7fbd1df55dbdf0f9654777810454ba3","url":"./post/ae58d2f1/index.html"},{"revision":"ab3010f3b730d39483e0ac68bc7d048f","url":"./post/d4550abf/index.html"},{"revision":"baa8e629d43e0a1f340d4121d8dfd300","url":"./post/d50c4d0e/index.html"},{"revision":"634c8b6c6780f7038481235433ee33c4","url":"./post/db569493/index.html"},{"revision":"b992094fc1f161d29c7cf4813a5866bf","url":"./post/dd83a796/index.html"},{"revision":"a31be1de920ba5e8f563222c79f75c66","url":"./post/f82f332a/index.html"},{"revision":"ba895c612a427bb21545765adcf6557f","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"ef182fe634db960739cc8e2fd908ca8b","url":"./tags/AI/index.html"},{"revision":"7b834d229c20334a722d24d6bbb59e3d","url":"./tags/Aplayer/index.html"},{"revision":"f4bc91707e6f867280c332fbcccb0af0","url":"./tags/Bing/index.html"},{"revision":"ca69f69c6ed1a09cd4804d0797868a3e","url":"./tags/BUG/index.html"},{"revision":"27011da1c804b86ba040713b6a52bf5d","url":"./tags/CDN/index.html"},{"revision":"febec61003576ebb76689ca7262a7e45","url":"./tags/CMS/index.html"},{"revision":"2baf62fa940e7150cbcc2d4b11676e37","url":"./tags/css/index.html"},{"revision":"024c59c9884998648312b766a4bc7840","url":"./tags/DNS/index.html"},{"revision":"a3c25f994265ea6bcf5f0c7368e3193e","url":"./tags/Flash/index.html"},{"revision":"d2999d7d1950d789d611c91e2affd704","url":"./tags/GFW/index.html"},{"revision":"6ae2e100629b266ad191a06385834622","url":"./tags/Gridea/index.html"},{"revision":"e5a232223fdbce214be09299f93d76d9","url":"./tags/HTML/index.html"},{"revision":"5a9e9baabc275b1a7c921f42da134ca6","url":"./tags/index.html"},{"revision":"fb2e964c8ab4cf18d0f1449c9d683d0e","url":"./tags/JavaScript/index.html"},{"revision":"3606ad41982ef8f729074f568a542bcc","url":"./tags/JQuery/index.html"},{"revision":"c599fdcea3d3f80f37f5a513288d9f61","url":"./tags/MetingJS/index.html"},{"revision":"ef1546ab2a9a62468b1d0e8e76d827c1","url":"./tags/NexT/index.html"},{"revision":"6bc6f22a26dff6d66fceda1f16c1c651","url":"./tags/P2P/index.html"},{"revision":"33846f4719fcf5afe207145bfa2f48cb","url":"./tags/RSA/index.html"},{"revision":"8d4dae2da982f396f563cde3896fd1b1","url":"./tags/Vercel/index.html"},{"revision":"e5c583b9fcabb97dda54b078e3895197","url":"./tags/分享/index.html"},{"revision":"0b74f458f0c36dedcde1a51018608291","url":"./tags/加密/index.html"},{"revision":"28eb7de83826b22840b99a2f0666da9c","url":"./tags/加载动画/index.html"},{"revision":"12c1b1581c5a7fddee68c626b9f3e901","url":"./tags/右键菜单/index.html"},{"revision":"417807e68ecc1fd0c29b35050493c7d4","url":"./tags/域名/index.html"},{"revision":"bb3d92e1577865795dd22d3c34abec9b","url":"./tags/密码学/index.html"},{"revision":"276f014c4cb43f61feda1e6085a53a07","url":"./tags/建站/index.html"},{"revision":"c9a4adfe4204732d722bdf85165ee1b6","url":"./tags/插件/index.html"},{"revision":"dbb547b4bcf7bfb0e41b10f14bd6a515","url":"./tags/服务器/index.html"},{"revision":"34237c5f4569b4cad04833d4c29273bc","url":"./tags/网页源码/index.html"},{"revision":"33a34e20be87734f3703e8903abfd4c9","url":"./tags/美化/index.html"},{"revision":"e3bc22b55a9f4e602dd850f9fc3ca899","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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