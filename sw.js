const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Auriel"
});

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"d300bee4dc0d8dc71d0b697f340e7606","url":"./vercel.json"},{"revision":"571b50d361f77dc44fd527e81006ffff","url":"./index.html"},{"revision":"0b53258a0d62410cffa87dcd6f879028","url":"./cw.js"},{"revision":"6284e8fcbdf9b71148f84c06983c1b96","url":"./config.json"},{"revision":"3a3f9d5c58d51114775c50f8c92f1db8","url":"./404.html"},{"revision":"7ce0c3644ec3ca878346ffc1a3fedf02","url":"./talks/index.html"},{"revision":"963f3424d9f07e3e1a677a5d6b9ea6b1","url":"./tags/index.html"},{"revision":"0b0ffa2d7da1b9ec3d3134d68402435f","url":"./tags/美化/index.html"},{"revision":"69352684df37c4e378cb28b7e5dc395b","url":"./tags/网页源码/index.html"},{"revision":"6e21d8dd5eab20b3d5def806e473b8cd","url":"./tags/服务器/index.html"},{"revision":"579a0ef9180b94978c3f67d54ef14fb8","url":"./tags/日常/index.html"},{"revision":"9b75a5a6499128e51554e2835a00bbf2","url":"./tags/插件/index.html"},{"revision":"20942b9f7c61083ea83cea1acfc9da58","url":"./tags/建站/index.html"},{"revision":"9bde79be86da2efcf174f8c2b3f36157","url":"./tags/密码学/index.html"},{"revision":"da68bcce0ac6c052056a915f8dd4db51","url":"./tags/域名/index.html"},{"revision":"967edac4f4f4b17077fbb86c183ba27f","url":"./tags/右键菜单/index.html"},{"revision":"9e0c53b5fecce46e6f90c3453b0ad419","url":"./tags/区块链/index.html"},{"revision":"46ec4b5b06a0f920386f09d95c687831","url":"./tags/加载动画/index.html"},{"revision":"f9af00d3877638e1f029d0e77b7daa96","url":"./tags/加密货币/index.html"},{"revision":"53c391c9b57a6777250a0c24854d8845","url":"./tags/加密/index.html"},{"revision":"cbb5b574eca7b1aee3f3c7d1fc04bf75","url":"./tags/分享/index.html"},{"revision":"37d9b92e4560e90c051264e0c25deb8c","url":"./tags/css/index.html"},{"revision":"47de082bad58c0baae3d7c3924136fb4","url":"./tags/Vercel/index.html"},{"revision":"ae3b71218c36bd707749baee72a26cbf","url":"./tags/RSA/index.html"},{"revision":"bc6a14a17c147a0d212869ec77c6cf4a","url":"./tags/P2P/index.html"},{"revision":"9c163c14d75dcf1cf32aba25ad01c4c4","url":"./tags/NexT/index.html"},{"revision":"fa28bfb4a4ce4a5556a95dde9c6e9479","url":"./tags/MetingJS/index.html"},{"revision":"7eb2e8c4518b72020f77010e8992375a","url":"./tags/JavaScript/index.html"},{"revision":"7a7f37a5ad0e64294a54d2fe99ff121b","url":"./tags/JQuery/index.html"},{"revision":"82d41f1fd90ea09e687151c324ed3d50","url":"./tags/HTML/index.html"},{"revision":"08e55455221ce139be93a12d54185a2c","url":"./tags/Gridea/index.html"},{"revision":"8d6e3fcb1c4627a63db6fb1b0956356d","url":"./tags/GFW/index.html"},{"revision":"580be1d200ab3f7584988ea863e27a0b","url":"./tags/Flash/index.html"},{"revision":"cac38f1a852c7ae9ebded87bab410599","url":"./tags/DNS/index.html"},{"revision":"08e6c8ad155de7e9f6eaed50d21dbc13","url":"./tags/CMS/index.html"},{"revision":"d747b02720382b6b3d3af4ec0c3887ce","url":"./tags/CDN/index.html"},{"revision":"3610731276448c5ce6ad41bbb675401b","url":"./tags/Bing/index.html"},{"revision":"dd68c12ab8554a6de20afc7a9f204c05","url":"./tags/BUG/index.html"},{"revision":"dcaa20f0d4b3787b60e3bc077e5b2b68","url":"./tags/Aplayer/index.html"},{"revision":"bc49a54da6b0a4d6840e340eb04ae931","url":"./tags/AI/index.html"},{"revision":"b80c2ed0edb87be3ef84d07e593f5759","url":"./pwa/manifest.json"},{"revision":"54c7511d360aa45946c8d81d78b46392","url":"./post/fa97bd48/index.html"},{"revision":"b8d7f78d108f76ef6b2121e670803f1e","url":"./post/f82f332a/index.html"},{"revision":"ee6edd27f8e1fcc843d0e02b5b47b80e","url":"./post/e15709f8/index.html"},{"revision":"eb20fe31a451e5890b6620d39122a9a0","url":"./post/dd83a796/index.html"},{"revision":"6377d3b92c607f9f4122b8ac907766a7","url":"./post/db569493/index.html"},{"revision":"74f48f4adec4a60d90f0b29152673b0f","url":"./post/d50c4d0e/index.html"},{"revision":"127745ae6bb0cbba67a09e3dbe720b24","url":"./post/d4550abf/index.html"},{"revision":"f5c01d85bc4893b8af93735cabeccd12","url":"./post/b9a3407d/index.html"},{"revision":"8ddd7b229ec6b6fdae40139ddd3b136a","url":"./post/ae58d2f1/index.html"},{"revision":"017573579606f211a7232ea1556e442d","url":"./post/9c60e209/index.html"},{"revision":"af07df70779eb7c9f8cd8b53827435cf","url":"./post/99c7fa1c/index.html"},{"revision":"9674f5b6f260fdeb27e34111e0545379","url":"./post/8422c4dc/index.html"},{"revision":"5e6eac1cc3f7d1cfeae66b8b04e3af1e","url":"./post/8097b5e3/index.html"},{"revision":"e05f60506cb7c1a53fb1972261cad8b3","url":"./post/7fc77154/index.html"},{"revision":"ab1086c0c86d67e7ebcdf50c397fdad3","url":"./post/7ca5704e/index.html"},{"revision":"f5a7f821d92b4f969e3d1133812bd2b7","url":"./post/73fccf9a/index.html"},{"revision":"ffaa92c160931348e29ece6a24cfc9f3","url":"./post/739f0a30/index.html"},{"revision":"48ba1e866302f0cb7feb262d492ecc00","url":"./post/4a17b156/index.html"},{"revision":"152cdcd65083c1aca26478c685ef574f","url":"./post/48bc1675/index.html"},{"revision":"e8b53808ba38f13c7f9e3f9a9f4e4e5a","url":"./post/454446b9/index.html"},{"revision":"e73504c25f134ec5899a19c57beb75dd","url":"./post/3df9585/index.html"},{"revision":"4b8403db3c82be7a03c2c86065d617cd","url":"./post/3082b2c6/index.html"},{"revision":"353cb9d946e82db7c91f930fd521736d","url":"./post/24dc856c/index.html"},{"revision":"79d84af6898e3e1925ebda360f229535","url":"./post/220b8380/index.html"},{"revision":"6ee5257979b8d6283328acb7b3a6e5fa","url":"./post/193912eb/index.html"},{"revision":"ab41bf90fe031da5da6e5f2109defdc5","url":"./page/3/index.html"},{"revision":"b9c0ae1e99bfc9918f735200d23dc8de","url":"./page/2/index.html"},{"revision":"fc187f220da384444f0a8d301f900e56","url":"./message/index.html"},{"revision":"8a92dc4ce8f42d3ccb8e3d010a108472","url":"./link/index.html"},{"revision":"e84a69b53c7dd1ff5b6b330d9fb2044f","url":"./js/utils.js"},{"revision":"c01d09126567452460ca80a4341f5f99","url":"./js/tw_cn.js"},{"revision":"0405cad955b0e2a66520e59bcd4ae6d8","url":"./js/main.js"},{"revision":"5e7851f91d0f68c76fc9620001c71938","url":"./js/search/local-search.js"},{"revision":"44848bf50caf33e4e9d1dbbf705ea5e2","url":"./js/search/algolia.js"},{"revision":"926f5e10c812e7c69464e19d737e74ab","url":"./go/index.html"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"c9f2bfddfed51a61ea677501ca826e8e","url":"./css/index.css"},{"revision":"7a89949d9fc5b1964f81990950caf7fa","url":"./cookies-instructions/index.html"},{"revision":"2060e794baba3fd1845667e0d5b7baf0","url":"./categories/index.html"},{"revision":"67c03194a70ebd7c2b5f037398cf169f","url":"./categories/随笔/index.html"},{"revision":"66d96b5d5332baaf8d1c46608662d4ae","url":"./categories/记录/index.html"},{"revision":"a21010da6a1364b2fe699609a21757a1","url":"./categories/网页源码/index.html"},{"revision":"1dff0147a2a510025a57d2382db5290f","url":"./categories/科普/index.html"},{"revision":"0d32885fbf36411cc5c2dba234bbd9bf","url":"./categories/建站/index.html"},{"revision":"82eb7bcd7a18edd8f502f8b0de37a0d2","url":"./categories/休闲/index.html"},{"revision":"a4c3416c7a0d05c893d54a6c04c943e0","url":"./categories/Vercel/index.html"},{"revision":"9adc54d41f9d900d1cdec150a87c1b0a","url":"./categories/Gridea/index.html"},{"revision":"3e8cbb79db4b310317e02a8378354c17","url":"./categories/AI/index.html"},{"revision":"8512592a646f4fb84d2ef0c619b33001","url":"./archives/index.html"},{"revision":"2784aa77cc28d25a62c47aa119e62255","url":"./archives/page/3/index.html"},{"revision":"60b2a87812018d072242ecdc8e189126","url":"./archives/page/2/index.html"},{"revision":"4adb8865b22c0c57265494d877ae10b5","url":"./archives/2026/index.html"},{"revision":"f5389c72f3e198a97fcde11fffc0e247","url":"./archives/2026/06/index.html"},{"revision":"112c349ff787e85ef7d259634e4593a8","url":"./archives/2026/04/index.html"},{"revision":"c8b9e7d35748087df6ccdd5aeebc6957","url":"./archives/2025/index.html"},{"revision":"7498ce41c49569666b4ef2e255e6ec71","url":"./archives/2025/10/index.html"},{"revision":"141bbfebf37c56c4677d191060acb520","url":"./archives/2025/09/index.html"},{"revision":"81673ddfd314181464e6ca5548c7fe41","url":"./archives/2024/index.html"},{"revision":"a702ddbb0ee13e2bf70fd169525e83c8","url":"./archives/2024/09/index.html"},{"revision":"0f9fc93ab34b76aac0b9e2fca5f93a57","url":"./archives/2024/06/index.html"},{"revision":"064c290db6226a38792d7d2c1e8b5df3","url":"./archives/2024/05/index.html"},{"revision":"c76ba569b7ad020941d514286440f6a8","url":"./archives/2024/04/index.html"},{"revision":"f50523544f976b73b18f86e2be80326d","url":"./archives/2023/index.html"},{"revision":"2858b0b73cd3531964be3a8c4175244c","url":"./archives/2023/04/index.html"},{"revision":"0bff2619c93d72235adb3742124a0222","url":"./archives/2023/02/index.html"},{"revision":"1fbfc41c441817879d0f95c73e735d42","url":"./archives/2022/index.html"},{"revision":"6738eac532e9a39bfac57b2d0d0df32e","url":"./archives/2022/page/2/index.html"},{"revision":"f1b6187b7eb75cd5daac5a6677d2e5d0","url":"./archives/2022/12/index.html"},{"revision":"6213abeae3478698d6e1d43710160751","url":"./archives/2022/11/index.html"},{"revision":"edde30762a8e6b3519e8b0ff501af97c","url":"./archives/2022/10/index.html"},{"revision":"e843114ca941cd31c225a07b318c9b6d","url":"./archives/2022/08/index.html"},{"revision":"5d1a826f5be8000e212164ac5538a46a","url":"./archives/2022/07/index.html"},{"revision":"2f901bfa0f7d1320ab7fd323a3b9ee08","url":"./archives/2022/06/index.html"},{"revision":"f5bf5058990b5258701d5ffad75bb9e9","url":"./about/index.html"}]);
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