const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"70b2ec5da76de5eb8c39c9716303382f","url":"./404.html"},{"revision":"0ff6a3fcc5e27c5d61e435d29fc2b9f4","url":"./about/index.html"},{"revision":"dd81417dffaac1bd5098739c45c21e4d","url":"./archives/2022/06/index.html"},{"revision":"b6dd3ac9e55f2ed46fd5cf6a5517edcf","url":"./archives/2022/07/index.html"},{"revision":"4a6c1c19fd9d0d8152b91109b313368f","url":"./archives/2022/08/index.html"},{"revision":"f08f388fbf87bb38d23e73fe3dd05893","url":"./archives/2022/10/index.html"},{"revision":"aab2d10778aaa0a78dab3f1a2b3345f9","url":"./archives/2022/11/index.html"},{"revision":"89d501b4adae37c78308352b99ae8687","url":"./archives/2022/12/index.html"},{"revision":"f527b6966eaceab8df5728602d3b8ea7","url":"./archives/2022/index.html"},{"revision":"253a66239489d234a07a0f1a5dfd8cde","url":"./archives/2022/page/2/index.html"},{"revision":"2850af3c0fb5ee4074d2986ae41992e6","url":"./archives/2023/02/index.html"},{"revision":"ecd3b4a5c915a9d575fe2e7f9c1bee19","url":"./archives/2023/04/index.html"},{"revision":"793ebfb6d6ecced2581f194e629d77d3","url":"./archives/2023/index.html"},{"revision":"4a42f42b5ba411e9ada1e9a5a240f0f5","url":"./archives/2024/04/index.html"},{"revision":"9aea59792a23d293180d0ff8e504714a","url":"./archives/2024/05/index.html"},{"revision":"9ee3dba37fa8a7c623834510ee9665c6","url":"./archives/2024/06/index.html"},{"revision":"2652a905b16f883d038d100f098ff264","url":"./archives/2024/09/index.html"},{"revision":"67e36e180be8aabf62d9a31890fdbd5f","url":"./archives/2024/index.html"},{"revision":"2c99a40ab28c55ac52d165a4d3e6275a","url":"./archives/index.html"},{"revision":"1d4316b90b08c98ffbe954f35a187fb4","url":"./archives/page/2/index.html"},{"revision":"897f05f3fbaad38d6cbb26108c59efb2","url":"./archives/page/3/index.html"},{"revision":"1e588f64743cac3ac4d00f464ab9c788","url":"./categories/AI/index.html"},{"revision":"649b695a919737718231c12e0ea0a17a","url":"./categories/Gridea/index.html"},{"revision":"98fa165ce2c3e8c0f2c90d27ca68a5f4","url":"./categories/index.html"},{"revision":"a74ad457b6ccaa6f8381ddf0ee557afe","url":"./categories/Vercel/index.html"},{"revision":"8734f91ad875431bfb6eeb9d2d988884","url":"./categories/休闲/index.html"},{"revision":"7a4d6676d3e45037aa6ff3f472ca70ae","url":"./categories/建站/index.html"},{"revision":"4eb353769e6f938ee0266e39392df980","url":"./categories/科普/index.html"},{"revision":"13fe38b2fe9b6b71d529324889640dad","url":"./categories/网页源码/index.html"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"73d9933451bb8ba018dcac4e7086daeb","url":"./cookies-instructions/index.html"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"220468a9b15ae075f15ed9620002ed9c","url":"./index.html"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"c53f738bacf8bfbcf941dcd87b7d77bd","url":"./link/index.html"},{"revision":"e85391a7077d5e5c070c5d92f72510a8","url":"./message/index.html"},{"revision":"10d3fb1d84342024b1d337bbe04c6286","url":"./page/2/index.html"},{"revision":"048651acc4e672689ac26cf7477fa938","url":"./page/3/index.html"},{"revision":"5381eaa4e73e48e3ef25db3e97ae5a26","url":"./post/193912eb/index.html"},{"revision":"23170ad327c36281654977605459ebd5","url":"./post/220b8380/index.html"},{"revision":"7a1f5e8bd7ad3ba3024b90293d9e3368","url":"./post/24dc856c/index.html"},{"revision":"34e2eb88522dca5b8e532a843f8b30c2","url":"./post/3082b2c6/index.html"},{"revision":"07ee2bff50925b8ae07d4acd7a056de7","url":"./post/3df9585/index.html"},{"revision":"51b57e57bda696bc0d80d5bf601d9584","url":"./post/4a17b156/index.html"},{"revision":"6c9c19d8f4f2d0376d4de1a429d92217","url":"./post/739f0a30/index.html"},{"revision":"4b91a4150412c0d585de3bd6f5de8d01","url":"./post/73fccf9a/index.html"},{"revision":"c88e4d00718d9d0a518d33f22264b35d","url":"./post/7ca5704e/index.html"},{"revision":"9f1ee516dd575dab4739e82a4a639ca1","url":"./post/7fc77154/index.html"},{"revision":"79e22143c7431abdd9d7c304f4151021","url":"./post/8097b5e3/index.html"},{"revision":"5e09fbcd57e4f6d9fd3985c6f1257644","url":"./post/8422c4dc/index.html"},{"revision":"8175bbc89fedd52466801b2219c73240","url":"./post/99c7fa1c/index.html"},{"revision":"5707bb731d076b7cc3a1aec30866feac","url":"./post/9c60e209/index.html"},{"revision":"a31013bee1173ebcc59a396d390e4300","url":"./post/ae58d2f1/index.html"},{"revision":"765d2fbc01ea168f87d75e7eace76805","url":"./post/d4550abf/index.html"},{"revision":"b73d02af24aa5c341086542a055e4355","url":"./post/d50c4d0e/index.html"},{"revision":"55cee205469982e3c88f9d50d59dc62a","url":"./post/db569493/index.html"},{"revision":"a383c550d40ce0a9ce6b914a39ae3824","url":"./post/dd83a796/index.html"},{"revision":"d10a050ad6ca7fa74d1de5288f2e07da","url":"./post/f82f332a/index.html"},{"revision":"573214246947f794204ff1d8db1fe3a3","url":"./post/fa97bd48/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"88676b343f605bac773e6e4d1bd099cc","url":"./tags/AI/index.html"},{"revision":"c92ca93948c31eae93a9b256a778bb76","url":"./tags/Aplayer/index.html"},{"revision":"1fed0c964c985e9148d056da0eb9ca2b","url":"./tags/Bing/index.html"},{"revision":"20f5e1f67b526b5723d5d3eccbe17851","url":"./tags/BUG/index.html"},{"revision":"02f60f8e545e25c636104460e5ce0393","url":"./tags/CDN/index.html"},{"revision":"48be078359a27ead20cb4db31e69290a","url":"./tags/CMS/index.html"},{"revision":"8bb9f030c4eb951ff6204dd523728e63","url":"./tags/css/index.html"},{"revision":"702b3a494a81b20e341a005da2e23d1c","url":"./tags/DNS/index.html"},{"revision":"51800ce5151df13ce8ca4f3fc082b856","url":"./tags/Flash/index.html"},{"revision":"faed46a4857270f4fc0b2c201c8d75af","url":"./tags/GFW/index.html"},{"revision":"87414fe577e62df05a562f4bed06ef42","url":"./tags/Gridea/index.html"},{"revision":"ff316bcf451c8850c7308ecb0b7948c2","url":"./tags/HTML/index.html"},{"revision":"b8353ae4a60652d3aaa1d9eb74405933","url":"./tags/index.html"},{"revision":"842f484e133b7f06df234ccef0abf0b3","url":"./tags/JavaScript/index.html"},{"revision":"749b5529cd9b2ec81499c0595eddfbbd","url":"./tags/JQuery/index.html"},{"revision":"bcca9916fe416ab9e967dbaf0d6ca2f1","url":"./tags/MetingJS/index.html"},{"revision":"8655a7520a3545699ba4b817c2b3939b","url":"./tags/NexT/index.html"},{"revision":"0df9f13880f4479f0ae867af08fbfc13","url":"./tags/P2P/index.html"},{"revision":"e6c2bcb13c4cedb5dfc9e42ae2535422","url":"./tags/RSA/index.html"},{"revision":"56b25813c7216a2a065c08ab9987142a","url":"./tags/Vercel/index.html"},{"revision":"7152d1de1efc18779e59c5ed92719df0","url":"./tags/分享/index.html"},{"revision":"3a37c5834b7db1fd79598bc2e8c1fcb7","url":"./tags/加密/index.html"},{"revision":"6ce122a42abbc5855fdbe0a9145e783c","url":"./tags/加载动画/index.html"},{"revision":"1cff0743be45d8630e991cd899c0f2d5","url":"./tags/右键菜单/index.html"},{"revision":"595eb524f873d2c5b17496f6c4bc0a7e","url":"./tags/域名/index.html"},{"revision":"8abee97578581244bb3ef44d51651620","url":"./tags/密码学/index.html"},{"revision":"9b8b68381a37e740402355465a2a4d40","url":"./tags/建站/index.html"},{"revision":"1d96cb4561f246a09df0967994d496a3","url":"./tags/插件/index.html"},{"revision":"dbac986f4f5c769b1b54d5cd53156162","url":"./tags/服务器/index.html"},{"revision":"e71cf0a9dd8f166fc21eae4903ec43ff","url":"./tags/网页源码/index.html"},{"revision":"194eb28b24af363b61db2ebe76ca0ce3","url":"./tags/美化/index.html"},{"revision":"d2b2dd5b357c7d348cc2198136268c38","url":"./talks/index.html"},{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"}]);
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