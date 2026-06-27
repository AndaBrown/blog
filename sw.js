const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"},{"revision":"90d90fd6934713c5f115d81681f01153","url":"./index.html"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"3a3f9d5c58d51114775c50f8c92f1db8","url":"./404.html"},{"revision":"329ebb40306cc16850db8f3a7e7213cd","url":"./talks/index.html"},{"revision":"46d17bcb32ef030572241ab903a0dd25","url":"./tags/index.html"},{"revision":"b88dcc891f744c272cc29bdb63dbbc29","url":"./tags/美化/index.html"},{"revision":"d5751f002d900a03a8a8d640627fffdf","url":"./tags/网页源码/index.html"},{"revision":"b1600fe141b921279d6f142b20ca0709","url":"./tags/服务器/index.html"},{"revision":"bd83b31cd116c6a73bfba883d122dfcd","url":"./tags/日常/index.html"},{"revision":"ab6a9aefe935bed5225b619e4caebfd3","url":"./tags/插件/index.html"},{"revision":"01f8f701a0e7c23af673a688634d5b35","url":"./tags/建站/index.html"},{"revision":"23fc83bee3add0d8db636e90ea72a53a","url":"./tags/密码学/index.html"},{"revision":"f7c20d48cec268a777c10174ad88322e","url":"./tags/域名/index.html"},{"revision":"142ae03acdbb9f361a238f366d87a326","url":"./tags/右键菜单/index.html"},{"revision":"d444df8cedcd9d876d0ff103ab7326ea","url":"./tags/区块链/index.html"},{"revision":"863d9b2f26b1c109c899d6a901df7814","url":"./tags/加载动画/index.html"},{"revision":"b29b64434dd37c82f3e55370929ccd3e","url":"./tags/加密货币/index.html"},{"revision":"ee7ca6e15fe123b65b51409c83c5da5a","url":"./tags/加密/index.html"},{"revision":"194f3fddd85602b2b966d8c0ecac6b54","url":"./tags/分享/index.html"},{"revision":"9af8c1c9f583086d40e82016e3bae2ae","url":"./tags/css/index.html"},{"revision":"0237602baa40042f4dfcde954dd94f69","url":"./tags/Vercel/index.html"},{"revision":"3cf5a8abe8d7b7ce486a2764c22ec033","url":"./tags/RSA/index.html"},{"revision":"5716b018f618454af35193d60488f54c","url":"./tags/P2P/index.html"},{"revision":"f04c8f31c9c512658583072bda8a65cc","url":"./tags/NexT/index.html"},{"revision":"21078737fea5008c380202d6c9ba55b9","url":"./tags/MetingJS/index.html"},{"revision":"c3309ccc172730224ea5f6fc974b9c32","url":"./tags/JavaScript/index.html"},{"revision":"1330b39e4eb809702ae8061e29fae39a","url":"./tags/JQuery/index.html"},{"revision":"014d26be47af4ec5bdbb57bcae723611","url":"./tags/HTML/index.html"},{"revision":"0220a68ad5a223e74f7d320a986d6f21","url":"./tags/Gridea/index.html"},{"revision":"1ed0ad81829f461bce22cdfecc6ee017","url":"./tags/GFW/index.html"},{"revision":"5b0df25683b30d5537037b06933a92d2","url":"./tags/Flash/index.html"},{"revision":"77c9f46cffdcbe2259b72f4c91cba0be","url":"./tags/DNS/index.html"},{"revision":"5f4e297146107155245d2273777b7a86","url":"./tags/CMS/index.html"},{"revision":"2c19087bd6e2f2949f656b78728b090b","url":"./tags/CDN/index.html"},{"revision":"717076190d98b20ccee5c43ca7e9ff0f","url":"./tags/Bing/index.html"},{"revision":"6f2f4da6a798e8f282c3879017b237aa","url":"./tags/BUG/index.html"},{"revision":"41319c4e4a0cae457350f6ea883916f2","url":"./tags/Aplayer/index.html"},{"revision":"30cc9790c6c0e5bb1b6b06302965fe60","url":"./tags/AI/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"54c7511d360aa45946c8d81d78b46392","url":"./post/fa97bd48/index.html"},{"revision":"b8d7f78d108f76ef6b2121e670803f1e","url":"./post/f82f332a/index.html"},{"revision":"679ab0880ca416276db335b246e2fb94","url":"./post/e15709f8/index.html"},{"revision":"fb21ce07075d1b9602f7a10335821f47","url":"./post/dd83a796/index.html"},{"revision":"6377d3b92c607f9f4122b8ac907766a7","url":"./post/db569493/index.html"},{"revision":"74f48f4adec4a60d90f0b29152673b0f","url":"./post/d50c4d0e/index.html"},{"revision":"127745ae6bb0cbba67a09e3dbe720b24","url":"./post/d4550abf/index.html"},{"revision":"f5c01d85bc4893b8af93735cabeccd12","url":"./post/b9a3407d/index.html"},{"revision":"34024ff9648c9922f4a627e5cac1efd7","url":"./post/ae58d2f1/index.html"},{"revision":"017573579606f211a7232ea1556e442d","url":"./post/9c60e209/index.html"},{"revision":"54ad45d1d4f552fbb5556a1802fa40b1","url":"./post/99c7fa1c/index.html"},{"revision":"9674f5b6f260fdeb27e34111e0545379","url":"./post/8422c4dc/index.html"},{"revision":"5e6eac1cc3f7d1cfeae66b8b04e3af1e","url":"./post/8097b5e3/index.html"},{"revision":"e05f60506cb7c1a53fb1972261cad8b3","url":"./post/7fc77154/index.html"},{"revision":"ab1086c0c86d67e7ebcdf50c397fdad3","url":"./post/7ca5704e/index.html"},{"revision":"f5a7f821d92b4f969e3d1133812bd2b7","url":"./post/73fccf9a/index.html"},{"revision":"44ef2c4945f09784c009c42d779b9ef4","url":"./post/739f0a30/index.html"},{"revision":"48ba1e866302f0cb7feb262d492ecc00","url":"./post/4a17b156/index.html"},{"revision":"152cdcd65083c1aca26478c685ef574f","url":"./post/48bc1675/index.html"},{"revision":"e8b53808ba38f13c7f9e3f9a9f4e4e5a","url":"./post/454446b9/index.html"},{"revision":"e73504c25f134ec5899a19c57beb75dd","url":"./post/3df9585/index.html"},{"revision":"4b8403db3c82be7a03c2c86065d617cd","url":"./post/3082b2c6/index.html"},{"revision":"353cb9d946e82db7c91f930fd521736d","url":"./post/24dc856c/index.html"},{"revision":"79d84af6898e3e1925ebda360f229535","url":"./post/220b8380/index.html"},{"revision":"6ee5257979b8d6283328acb7b3a6e5fa","url":"./post/193912eb/index.html"},{"revision":"d6c5b7e61be80ff98b1f6cac6be2c26c","url":"./page/3/index.html"},{"revision":"293e76278c33a841e3f78dca8b7a8220","url":"./page/2/index.html"},{"revision":"215d289e750e53191898a441ed6a36a8","url":"./message/index.html"},{"revision":"4399975efe5c45de5e40e27b05b05d6d","url":"./link/index.html"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"3132a83bfb518634f8fd8efec735618e","url":"./cookies-instructions/index.html"},{"revision":"3cd395536ce9bcae253562e2d32c5550","url":"./categories/index.html"},{"revision":"b9cb7d470405e7bdf6880a9304d97526","url":"./categories/随笔/index.html"},{"revision":"8f425be3deeacd52dd4a55670f9b246a","url":"./categories/记录/index.html"},{"revision":"f61f24b2443e33a0b940679c763b5fca","url":"./categories/网页源码/index.html"},{"revision":"51bc7e2cd9dec1d001d8fc28bc04d15e","url":"./categories/科普/index.html"},{"revision":"b513362b6860dffc576adf2dc9e5f8ed","url":"./categories/建站/index.html"},{"revision":"9075fce1f58d13d68be28890689d16d4","url":"./categories/休闲/index.html"},{"revision":"797bac2828d02b8fce9a177af7446bb2","url":"./categories/Vercel/index.html"},{"revision":"ac2536954c81ffb3f98203d40c8edc84","url":"./categories/Gridea/index.html"},{"revision":"b8e282a29d033ab33dd9af916636b7ef","url":"./categories/AI/index.html"},{"revision":"d3977d213e3664a4cf10125e47163cca","url":"./archives/index.html"},{"revision":"8cff3af2746814608ed90af7dfe8c67d","url":"./archives/page/3/index.html"},{"revision":"a4600868a4bdcb7d22f735c8f2114679","url":"./archives/page/2/index.html"},{"revision":"4c344d5eab356a1516942071b8b576c2","url":"./archives/2026/index.html"},{"revision":"f5ac79246932c3db4fb80da46c47e179","url":"./archives/2026/06/index.html"},{"revision":"089d6b694dac7a51874d3e144a80e530","url":"./archives/2026/04/index.html"},{"revision":"bdde7829fb643323fdbbfea9505cbdd1","url":"./archives/2025/index.html"},{"revision":"553109c459ff4a6aba5aad3d636bc788","url":"./archives/2025/10/index.html"},{"revision":"f6bfc22d1a161279ff56fc7e635d6d08","url":"./archives/2025/09/index.html"},{"revision":"f521be228e90c53d6a10ace0a953ddf8","url":"./archives/2024/index.html"},{"revision":"f6ca191a6d76c143eb4caa9080e36b41","url":"./archives/2024/09/index.html"},{"revision":"34edb939b4832aefa8d04d528a8fcc31","url":"./archives/2024/06/index.html"},{"revision":"5bc970407d74ed98362c973582b8cf8b","url":"./archives/2024/05/index.html"},{"revision":"50421a1e943db2fec4dbb547333b0dfe","url":"./archives/2024/04/index.html"},{"revision":"23e8de8cf5a031e1fff0873cbe8fc163","url":"./archives/2023/index.html"},{"revision":"af25253714ffaff1f0d7ae776198a1a5","url":"./archives/2023/04/index.html"},{"revision":"35587a132c859555c1e05cf186ce6afa","url":"./archives/2023/02/index.html"},{"revision":"93bb9ea5337e142176fe17abc7c6f7a9","url":"./archives/2022/index.html"},{"revision":"4586575b6a4ed25cdab041a09a0a2774","url":"./archives/2022/page/2/index.html"},{"revision":"5a4caabe2ddae48ee819070b561f58a7","url":"./archives/2022/12/index.html"},{"revision":"e690e8e6f7eca61896eecfd7197b34ef","url":"./archives/2022/11/index.html"},{"revision":"2d343c020075ff893857f9a283479763","url":"./archives/2022/10/index.html"},{"revision":"13e4d9f9b90ed681280b94c30719a9ec","url":"./archives/2022/08/index.html"},{"revision":"9e985ca25b9febb18ad2f8a4b1cb1f47","url":"./archives/2022/07/index.html"},{"revision":"2e635e5fdd462f031b4e9012b587b652","url":"./archives/2022/06/index.html"},{"revision":"28b373b0cafaa9442e43595040b01657","url":"./about/index.html"}]);
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