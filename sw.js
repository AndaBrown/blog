const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"},{"revision":"6aa40b68fba4190d2880e4ea9ae604b0","url":"./index.html"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"c90edaf61bcb2da91d2bb74bca73976a","url":"./404.html"},{"revision":"b4f7a224c338af3805f9782fcb244111","url":"./talks/index.html"},{"revision":"3fecdd26aaff7667dd7a95a6070ace52","url":"./tags/index.html"},{"revision":"1108536903eff3c7713b6189c752a0dc","url":"./tags/美化/index.html"},{"revision":"63b52bfdd1475a0e4b299fc75689def7","url":"./tags/网页源码/index.html"},{"revision":"b0860d55f0746a550abc472cc5f4fc97","url":"./tags/服务器/index.html"},{"revision":"2a28303de07f27cf10c322ab07149672","url":"./tags/插件/index.html"},{"revision":"8b74356aaa209b67af10717c2dd66d4f","url":"./tags/建站/index.html"},{"revision":"0197b1118ff4d48b182cf171939e72fa","url":"./tags/密码学/index.html"},{"revision":"61d7105f3f58090cd578ffcc70f812c6","url":"./tags/域名/index.html"},{"revision":"bdc7e3c11aadf424da866387fe88dbeb","url":"./tags/右键菜单/index.html"},{"revision":"7dc3f0ccdcaf70d38852468e1956bcfc","url":"./tags/区块链/index.html"},{"revision":"d49887be7ee781cc930f92e80c5a3b8c","url":"./tags/加载动画/index.html"},{"revision":"9e520ba15c455454119b46a313372a42","url":"./tags/加密货币/index.html"},{"revision":"ec7fff7c22fa7f38eab9fff12a0ae332","url":"./tags/加密/index.html"},{"revision":"726b785ca506018bcc95b8390ad1bbd3","url":"./tags/分享/index.html"},{"revision":"3545db087f87a105fea23e879f869f6c","url":"./tags/css/index.html"},{"revision":"c6280830e5f2327eb67286a5714abeef","url":"./tags/Vercel/index.html"},{"revision":"b2a756eeb9678365143db4ab1f121340","url":"./tags/RSA/index.html"},{"revision":"187c615048e6b6e4045fbd3927ce4b21","url":"./tags/P2P/index.html"},{"revision":"afd53f371c2beb62c2fcca51a5349694","url":"./tags/NexT/index.html"},{"revision":"62680490128c2921ac2a176882450ecd","url":"./tags/MetingJS/index.html"},{"revision":"7a43608443249d37e954a27d7d6bc60d","url":"./tags/JavaScript/index.html"},{"revision":"500b2ee598d6263cf60216ce27ed385d","url":"./tags/JQuery/index.html"},{"revision":"2066fac62e0e393feae7da8ac11e0ff9","url":"./tags/HTML/index.html"},{"revision":"57470944473f4654587ec76cfed01d6e","url":"./tags/Gridea/index.html"},{"revision":"429d81ae7e05722b963138e94c3bb2fb","url":"./tags/GFW/index.html"},{"revision":"f65aa45a5d2a60547f795b5aa127b1aa","url":"./tags/Flash/index.html"},{"revision":"e4d86feb0d3351e0ccf31eed06db7756","url":"./tags/DNS/index.html"},{"revision":"94b17f92f430a9f22d40cb75043f474e","url":"./tags/CMS/index.html"},{"revision":"d6f539132c4898eaa78f644d499f59c3","url":"./tags/CDN/index.html"},{"revision":"ede5d8837f6aeec5e70eb29f62f40851","url":"./tags/Bing/index.html"},{"revision":"db36a8a10e95fcb64376e76efe0c440d","url":"./tags/BUG/index.html"},{"revision":"c39a1039bb57c54b1687fc7dd1954481","url":"./tags/Aplayer/index.html"},{"revision":"a169363a93d0ee3280b5935fca6bc887","url":"./tags/AI/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"88655123dab0329103bdd150f90e38b9","url":"./post/fa97bd48/index.html"},{"revision":"0bb6b3a17e12773037c68009c183221a","url":"./post/f82f332a/index.html"},{"revision":"a4c265fd9762261bf7018f92a1e7343e","url":"./post/dd83a796/index.html"},{"revision":"718cacfcd7701fb736dfc5c28e875123","url":"./post/db569493/index.html"},{"revision":"0c56bfd2b5311269400cb564c012b5e7","url":"./post/d50c4d0e/index.html"},{"revision":"6d33ac8737b589df498f5f1e50dacbe3","url":"./post/d4550abf/index.html"},{"revision":"cb498ada403370779d0cfe38d514a0e9","url":"./post/b9a3407d/index.html"},{"revision":"7f441f44f76ef5e148d247e6ed11f954","url":"./post/ae58d2f1/index.html"},{"revision":"d51427e5eefad46e8bd8a66757fa8a09","url":"./post/9c60e209/index.html"},{"revision":"66511bdfea5cecf392899b7ef2333d7d","url":"./post/99c7fa1c/index.html"},{"revision":"abc529635c417e884aef78675dc8db48","url":"./post/8422c4dc/index.html"},{"revision":"64bb22c1e1795e3c2d94a381fbfd723b","url":"./post/8097b5e3/index.html"},{"revision":"fa1d8027e7b7309b5e9c262bddc41b28","url":"./post/7fc77154/index.html"},{"revision":"14e1a50e62dd31e4b807647d78231ebf","url":"./post/7ca5704e/index.html"},{"revision":"1e9b99f682b12f1c08128c003c4dec71","url":"./post/73fccf9a/index.html"},{"revision":"1a8869c8b4c37c72a1798d3a7ce7960e","url":"./post/739f0a30/index.html"},{"revision":"3c828837104062ce4593e67434d8f5d7","url":"./post/4a17b156/index.html"},{"revision":"be03873633443e619e47552c7f34d742","url":"./post/48bc1675/index.html"},{"revision":"5123c94b7bbae2c2e0a022b059c9707e","url":"./post/3df9585/index.html"},{"revision":"503ee5f4e51012201706bdcaf964089c","url":"./post/3082b2c6/index.html"},{"revision":"695e7a7e8d5a58ac620e1100f9a3023e","url":"./post/24dc856c/index.html"},{"revision":"505e8b1a9e40c59e02a8341ffa2f85b0","url":"./post/220b8380/index.html"},{"revision":"a859aa8bdb198bb26eb9b67ca8643821","url":"./post/193912eb/index.html"},{"revision":"98dc5245e3b95aa8e000c701e82ebc73","url":"./page/3/index.html"},{"revision":"b7d6810d4486fd8b5afe8dede27caffb","url":"./page/2/index.html"},{"revision":"ebc7b8fad5e59cae52a795228fae3476","url":"./message/index.html"},{"revision":"ffc12e93d0eb1f34c7357ccad3b04b9c","url":"./link/index.html"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"e062ca7485c7d348941f326436a9eedd","url":"./cookies-instructions/index.html"},{"revision":"eabe7077df435dab7fd59d1019d09891","url":"./categories/index.html"},{"revision":"c02ee1e3366bb64040e589eed4650303","url":"./categories/网页源码/index.html"},{"revision":"90c59e12d0674f31d3029cafbbe49549","url":"./categories/科普/index.html"},{"revision":"f96af76a0f8eb02392253d25433f900f","url":"./categories/建站/index.html"},{"revision":"d5a1edd5d9c3ab0129256769b111b163","url":"./categories/休闲/index.html"},{"revision":"e9fbcb3343c2c425aa460153de0f5118","url":"./categories/Vercel/index.html"},{"revision":"1237437db23354625b15121c0d114339","url":"./categories/Gridea/index.html"},{"revision":"16a6226710f591dd4d4572617cf9ea4a","url":"./categories/AI/index.html"},{"revision":"ed28e94d4a01a7d105c15fd41788aa8e","url":"./archives/index.html"},{"revision":"8bf0e9d937cc3000140572a15c3cd9f3","url":"./archives/page/3/index.html"},{"revision":"c2dd6e4f68cb2661d17e22aaa8627830","url":"./archives/page/2/index.html"},{"revision":"3b2073a5787f18a6f5cbbc564d7c3440","url":"./archives/2025/index.html"},{"revision":"7cace74b781af19f4d55cd990546dc2c","url":"./archives/2025/10/index.html"},{"revision":"55a16ba6044e1246e0c3eef284317768","url":"./archives/2025/09/index.html"},{"revision":"6b66eef5999be32e1d974e48c6f433b3","url":"./archives/2024/index.html"},{"revision":"4dc24f9028ae9cc4d5b8913209911ea4","url":"./archives/2024/09/index.html"},{"revision":"4afd4ce684bdd2fac024296ebda39349","url":"./archives/2024/06/index.html"},{"revision":"c8665a560546c572e5c7b6ebfbb48277","url":"./archives/2024/05/index.html"},{"revision":"20b273136388ced7ce6f3e70b0a41382","url":"./archives/2024/04/index.html"},{"revision":"0e5d618b878cce854ecd54f43e455385","url":"./archives/2023/index.html"},{"revision":"7f95b2fc6e3e8a375379d7f142a72733","url":"./archives/2023/04/index.html"},{"revision":"82fde07aa9a773d1b3bcfd4400a4cdfb","url":"./archives/2023/02/index.html"},{"revision":"27af3414dd824ec3ff78c9573ee7c56c","url":"./archives/2022/index.html"},{"revision":"ccf3d6159879b25bd35c137f5a7d8b80","url":"./archives/2022/page/2/index.html"},{"revision":"c9f1bc448f5ebb38c862fb9ad2675118","url":"./archives/2022/12/index.html"},{"revision":"266e7c77484216f69df3446803ccea7a","url":"./archives/2022/11/index.html"},{"revision":"1bc0ceca57ef41ecf411e3926d9f2511","url":"./archives/2022/10/index.html"},{"revision":"6c98e14236ef9584c128fdb95e22000c","url":"./archives/2022/08/index.html"},{"revision":"ede4e93a6ca57161e4e76410e0769d64","url":"./archives/2022/07/index.html"},{"revision":"9ffbdc8d83585ad4f606aee269e1d0d9","url":"./archives/2022/06/index.html"},{"revision":"c46e10293b61aed62c191938d5672fe3","url":"./about/index.html"}]);
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